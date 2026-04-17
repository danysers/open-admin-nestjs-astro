import { PrismaClient } from '../src/generated/prisma/index';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Seeding database...');

  // Create admin role
  const adminRole = await prisma.roles.upsert({
    where: { slug: 'admin' },
    update: {},
    create: {
      name: 'Administrator',
      slug: 'admin',
    },
  });

  console.log('✅ Role created:', adminRole.name);

  const authPassword = await bcrypt.hash('admin123', 12);
  const authAdmin = await prisma.authUser.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'OpenAdmin Admin',
      emailVerified: true,
    },
  });

  await prisma.authAccount.upsert({
    where: {
      providerId_accountId: {
        providerId: 'credential',
        accountId: 'admin@example.com',
      },
    },
    update: {
      password: authPassword,
    },
    create: {
      userId: authAdmin.id,
      providerId: 'credential',
      accountId: 'admin@example.com',
      password: authPassword,
    },
  });

  console.log('✅ Better Auth admin created: admin@example.com / admin123');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.users.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@example.com',
      password: adminPassword,
      name: 'Admin User',
    },
  });

  // Link user to admin role
  await prisma.users.update({
    where: { id: adminUser.id },
    data: { roles: { connect: { id: adminRole.id } } },
  });

  console.log('✅ Admin user created: admin / admin123');
  console.log('✅ User ID:', adminUser.id);

  // Create some sample menu items
  const menuItems = [
    { title: 'Dashboard', icon: '📊', uri: '/', order: 1 },
    { title: 'Users', icon: '👥', uri: '/admin/users', order: 2, parent_id: null },
    { title: 'Roles', icon: '🔐', uri: '/admin/roles', order: 3, parent_id: null },
    { title: 'Permissions', icon: '🛡', uri: '/admin/permissions', order: 4, parent_id: null },
    { title: 'Menu', icon: '📋', uri: '/admin/menu', order: 5, parent_id: null },
  ];

  for (const item of menuItems) {
    await prisma.menu.upsert({
      where: { id: item.order },
      update: {},
      create: item,
    });
  }

  console.log('✅ Menu items created');

  // Create some sample users
  const users = [
    { username: 'john', email: 'john@example.com', name: 'John Doe' },
    { username: 'jane', email: 'jane@example.com', name: 'Jane Smith' },
  ];

  for (const u of users) {
    const exists = await prisma.users.findUnique({ where: { username: u.username } });
    if (!exists) {
      await prisma.users.create({
        data: {
          ...u,
          password: await bcrypt.hash('password', 10),
        },
      });
    }
  }

  console.log('✅ Sample users created');
  console.log('🎉 Seed completed!');
}

seed()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
