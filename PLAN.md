# PLAN.md — open-admin → NestJS + Astro Migration

## 1. VISIÓN GENERAL

### Proyecto origen
- **Repo**: `danysers/open-admin-main-migration` (privado)
- **Paquete**: `open-admin-org/open-admin` — admin panel builder para Laravel (fork de laravel-admin, MIT)
- **Versión**: 1.0.27
- **PHP**: ~7.3|~8.0 | **Laravel**: >=7.0
- **Composer's `require`**:
  - `php`: ~7.3|~8.0
  - `symfony/dom-crawler`: ~3.1|~4.0|~5.0
  - `laravel/framework`: >=7.0
  - `doctrine/dbal`: 2.*|3.*

### Meta
Migrar TODOS los componentes del sistema open-admin PHP/Laravel hacia **NestJS (backend) + Astro (frontend)**. El resultado será un admin panel builder open-source para Node.js/TypeScript, equivalente en funcionalidad pero con stack tecnológico moderno.

---

## 2. STACK DESTINO (VERSIONES VERIFICADAS)

| Herramienta | Versión |
|---|---|
| Node.js | **v22.22.1** (LTS) |
| TypeScript | **6.x** |
| pnpm | verificar |
| NestJS | **11.1.19** (@nestjs/core) |
| Astro | **6.1.7** |
| React | **19.x** |
| React Hook Form | **7.72.1** |
| Zod | **4.3.6** |
| TanStack Table | **8.21.3** (headless) |
| shadcn/ui | **v4.2** |
| Tailwind CSS | **4.2** |
| CASL | **1.1.0** |
| Auth: JWT (jsonwebtoken) | latest |
| ORM: Prisma o Drizzle | latest |
| Axios | latest |
| Leaflet | latest |
| Flatpickr | latest |
| ChoicesJS | latest |
| FontAwesome | latest (web) |
| Coloris | latest |
| SortableJS | latest |
| NProgress | latest |

---

## 3. ESTRUCTURA DE DIRECTORIOS DESTINO

```
/home/danysers/open-admin-main-migration/
├── apps/
│   ├── api/                          # NestJS backend
│   │   ├── src/
│   │   │   ├── main.ts
│   │   │   ├── app.module.ts
│   │   │   ├── common/
│   │   │   │   ├── decorators/
│   │   │   │   ├── guards/
│   │   │   │   │   ├── auth.guard.ts
│   │   │   │   │   ├── rbac.guard.ts
│   │   │   │   │   └── throttle.guard.ts
│   │   │   │   ├── interceptors/
│   │   │   │   │   └── operation-log.interceptor.ts
│   │   │   │   ├── filters/
│   │   │   │   │   └── http-exception.filter.ts
│   │   │   │   └── utils/
│   │   │   ├── auth/
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── strategies/
│   │   │   │   │   └── jwt.strategy.ts
│   │   │   │   ├── guards/
│   │   │   │   └── dto/
│   │   │   ├── users/
│   │   │   │   ├── users.module.ts
│   │   │   │   ├── users.controller.ts
│   │   │   │   ├── users.service.ts
│   │   │   │   └── entities/
│   │   │   ├── roles/
│   │   │   ├── permissions/
│   │   │   ├── menu/
│   │   │   ├── grid/
│   │   │   │   ├── grid.module.ts
│   │   │   │   ├── grid.controller.ts
│   │   │   │   ├── grid.service.ts
│   │   │   │   ├── grid.builder.ts
│   │   │   │   └── displayers/        # 30+ displayers
│   │   │   ├── form/
│   │   │   │   ├── form.module.ts
│   │   │   │   ├── form.controller.ts
│   │   │   │   ├── form.service.ts
│   │   │   │   ├── form.builder.ts
│   │   │   │   └── fields/            # 40+ field types
│   │   │   ├── tree/
│   │   │   ├── show/
│   │   │   ├── widgets/
│   │   │   ├── extensions/
│   │   │   └── config/
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── web/                          # Astro + React frontend
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/               # shadcn/ui base components
│       │   │   ├── grid/             # Grid components
│       │   │   │   ├── DataGrid.tsx
│       │   │   │   ├── ColumnFilter.tsx
│       │   │   │   ├── QuickSearch.tsx
│       │   │   │   ├── Pagination.tsx
│       │   │   │   ├── BatchActions.tsx
│       │   │   │   ├── ExportButton.tsx
│       │   │   │   ├── PerPageSelector.tsx
│       │   │   │   └── displayers/   # cell renderers
│       │   │   ├── form/             # Form components
│       │   │   │   │   ├── FormBuilder.tsx
│       │   │   │   │   ├── FieldRenderer.tsx
│       │   │   │   │   ├── FieldErrors.tsx
│       │   │   │   │   └── fields/   # 40+ field components
│       │   │   ├── tree/             # Tree components
│       │   │   ├── layout/            # Admin layout
│       │   │   │   ├── Sidebar.tsx
│       │   │   │   ├── Header.tsx
│       │   │   │   ├── Breadcrumb.tsx
│       │   │   │   └── MenuSearch.tsx
│       │   │   └── widgets/           # Box, Alert, Tab, etc.
│       │   ├── pages/
│       │   │   └── admin/
│       │   │       └── [...slug].astro
│       │   ├── layouts/
│       │   │   └── AdminLayout.astro
│       │   ├── lib/
│       │   │   ├── api-client.ts
│       │   │   ├── utils.ts
│       │   │   └── validators.ts
│       │   └── styles/
│       │       └── global.css
│       ├── package.json
│       └── astro.config.mjs
│
├── packages/
│   └── shared/                        # Shared types, validators, utils
│       ├── src/
│       │   ├── types/
│       │   │   ├── grid.types.ts
│       │   │   ├── form.types.ts
│       │   │   ├── tree.types.ts
│       │   │   ├── auth.types.ts
│       │   │   ├── rbac.types.ts
│       │   │   └── menu.types.ts
│       │   ├── validators/
│       │   │   ├── grid.validators.ts  # Zod schemas
│       │   │   ├── form.validators.ts
│       │   │   └── auth.validators.ts
│       │   └── utils/
│       └── package.json
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── API.md
│   └── MIGRATION_LOG.md
│
├── PLAN.md                            # Este archivo
└── TODO.md
```

---

## 4. MATRIZ DE MIGRACIÓN: PHP → NestJS/Astro

### 4.1 GRID (Grid/ — ~80 archivos PHP)

| Componente PHP | Equivalente TS/React |
|---|---|
| `Grid/Grid.php` | `DataGrid.tsx` (TanStack Table + React) |
| `Grid/Model.php` | `GridService.ts` (API REST) |
| `Grid/Row.php` | `GridRow.tsx` |
| `Grid/Filter.php` | `ColumnFilter.tsx` (filtros por columna) |
| `Grid/Filter/AbstractFilter.php` | `AbstractFilter.ts` |
| `Grid/Filter/Like.php` | `LikeFilter.ts` |
| `Grid/Filter/Equal.php` | `EqualFilter.ts` |
| `Grid/Filter/Between.php` | `BetweenFilter.ts` |
| `Grid/Filter/In.php` | `InFilter.ts` |
| `Grid/Filter/Date.php` | `DateFilter.ts` (Flatpickr) |
| `Grid/Filter/Group.php` | `FilterGroup.ts` |
| `Grid/Filter/Scope.php` | `ScopeFilter.ts` |
| `Grid/Filter/Where.php` | `WhereFilter.ts` |
| `Grid/Filter/Layout/` | `FilterLayout.tsx` |
| `Grid/Displayers/Editable.php` | `EditableCell.tsx` |
| `Grid/Displayers/Actions/` | `ActionsCell.tsx` (dropdown/context menu) |
| `Grid/Displayers/BelongsTo.php` | `BelongsToCell.tsx` |
| `Grid/Displayers/Image.php` | `ImageCell.tsx` |
| `Grid/Displayers/SwitchDisplay.php` | `SwitchCell.tsx` |
| `Grid/Displayers/Label.php` | `LabelCell.tsx` |
| `Grid/Displayers/Badge.php` | `BadgeCell.tsx` |
| `Grid/Displayers/ProgressBar.php` | `ProgressBarCell.tsx` |
| `Grid/Displayers/Modal.php` | `ModalCell.tsx` |
| `Grid/Displayers/Copyable.php` | `CopyableCell.tsx` |
| `Grid/Displayers/Downloadable.php` | `DownloadableCell.tsx` |
| `Grid/Displayers/DateFormat.php` | `DateFormatCell.tsx` |
| `Grid/Displayers/Orderable.php` | `OrderableCell.tsx` (SortableJS) |
| `Grid/Displayers/Expand.php` | `ExpandableRow.tsx` |
| `Grid/Displayers/Carousel.php` | `CarouselCell.tsx` |
| `Grid/Tools/Paginator.php` | `Pagination.tsx` (shadcn/pagination) |
| `Grid/Tools/PerPageSelector.php` | `PerPageSelector.tsx` |
| `Grid/Exporters/CsvExporter.php` | `csvExporter.ts` |
| `Grid/Exporters/ExcelExporter.php` | `excelExporter.ts` (xlsx) |
| `Grid/Tools/QuickSearch.php` | `QuickSearch.tsx` |
| `Grid/Tools/CreateButton.php` | `CreateButton.tsx` |
| `Grid/Tools/BatchActions.php` | `BatchActions.tsx` |
| `Grid/Tools/ColumnSelector.php` | `ColumnSelector.tsx` |
| `Grid/Tools/FixColumns.php` | `FixColumns.tsx` (sticky columns) |
| `Grid/Tools/QuickCreate.php` | `QuickCreate.tsx` (modal) |
| `Grid/Simple.php` | `SimpleGrid.tsx` |

### 4.2 FORM (Form/ — ~70 archivos PHP)

| Componente PHP | Equivalente TS/React |
|---|---|
| `Form/Form.php` | `FormBuilder.tsx` (React Hook Form) |
| `Form/Field.php` | `FieldRenderer.tsx` + each field |
| `Form/Field/Text.php` | `TextField.tsx` |
| `Form/Field/Textarea.php` | `TextareaField.tsx` |
| `Form/Field/Radio.php` | `RadioField.tsx` |
| `Form/Field/Checkbox.php` | `CheckboxField.tsx` |
| `Form/Field/Select.php` | `SelectField.tsx` (ChoicesJS) |
| `Form/Field/MultipleSelect.php` | `MultipleSelectField.tsx` |
| `Form/Field/Listbox.php` | `ListboxField.tsx` (Dual-Listbox) |
| `Form/Field/Color.php` | `ColorField.tsx` (Coloris) |
| `Form/Field/Time.php` | `TimeField.tsx` (Flatpickr time) |
| `Form/Field/Date.php` | `DateField.tsx` (Flatpickr date) |
| `Form/Field/DateRange.php` | `DateRangeField.tsx` |
| `Form/Field/Datetime.php` | `DatetimeField.tsx` |
| `Form/Field/Currency.php` | `CurrencyField.tsx` (Inputmask) |
| `Form/Field/Number.php` | `NumberField.tsx` |
| `Form/Field/Rate.php` | `RateField.tsx` |
| `Form/Field/Slider.php` | `SliderField.tsx` (Radix slider) |
| `Form/Field/Switch.php` | `SwitchField.tsx` (shadcn/switch) |
| `Form/Field/Map.php` | `MapField.tsx` (Leaflet) |
| `Form/Field/Tags.php` | `TagsField.tsx` |
| `Form/Field/Icon.php` | `IconField.tsx` (FontAwesome picker) |
| `Form/Field/RichText.php` | `RichTextField.tsx` (CKEditor 5) |
| `Form/Field/Embeds.php` | `EmbedsField.tsx` |
| `Form/Field/HasMany.php` | `HasManyField.tsx` (nested form) |
| `Form/Field/BelongsTo.php` | `BelongsToField.tsx` |
| `Form/Field/BelongsToMany.php` | `BelongsToManyField.tsx` |
| `Form/Field/Fieldset.php` | `FieldsetField.tsx` |
| `Form/Field/Tab.php` | `TabField.tsx` (shadcn/tabs) |
| `Form/Field/File.php` | `FileField.tsx` (dropzone) |
| `Form/Field/Image.php` | `ImageField.tsx` (preview + upload) |
| `Form/Field/MultipleFile.php` | `MultipleFileField.tsx` |
| `Form/Field/MultipleImage.php` | `MultipleImageField.tsx` |
| `Form/Field/Hidden.php` | `HiddenField.tsx` |
| `Form/Field/Password.php` | `PasswordField.tsx` (show/hide toggle) |
| `Form/Field/City.php` | `CityField.tsx` (cascading selects) |
| `Form/Field/District.php` | `DistrictField.tsx` |
| `Form/Field/IPv4.php` | `IPv4Field.tsx` (Inputmask) |
| `Form/Field/Email.php` | `EmailField.tsx` (validation) |
| `Form/Field/Url.php` | `UrlField.tsx` |
| `Form/Field/DateBirthday.php` | `BirthdayField.tsx` |
| `Form/Field/DateYear.php` | `YearField.tsx` |
| `Form/Field/DateMonth.php` | `MonthField.tsx` |
| `Form/Field/DateDay.php` | `DayField.tsx` |
| `Form/Field/TimeRange.php` | `TimeRangeField.tsx` |
| `Form/Field/DatetimeRange.php` | `DatetimeRangeField.tsx` |
| `Form/Field/MonthRange.php` | `MonthRangeField.tsx` |
| `Form/Field/YearRange.php` | `YearRangeField.tsx` |
| `Form/Field/NumberRange.php` | `NumberRangeField.tsx` |
| `Form/Field/SliderRange.php` | `SliderRangeField.tsx` |
| `Form/Field/DualListbox.php` | `DualListboxField.tsx` |
| `Form/Field/MultipleImage.php` | `MultipleImageField.tsx` |
| `Form/Field/MultipleFile.php` | `MultipleFileField.tsx` |
| `Form/Field/DateTimeRange.php` | `DateTimeRangeField.tsx` |
| `Form/Tools/` | `FormTools.tsx` (save, reset, back buttons) |

### 4.3 TREE (Tree/ — ~10 archivos PHP)

| Componente PHP | Equivalente TS/React |
|---|---|
| `Tree/Tree.php` | `TreeView.tsx` (nested set model) |
| `Tree/Tools.php` | `TreeTools.ts` |
| `Traits/ModelTree.php` | `useNestedSetModel` hook |

### 4.4 AUTH & RBAC (Auth/ + Permissions/ — ~20 archivos PHP)

| Componente PHP | Equivalente TS/React |
|---|---|
| `Auth/Database/` | `auth/` (users, roles, permissions tables) |
| `Auth/AuthController.php` | `AuthController.ts` |
| `Auth/Database/AdminTable.php` | Users seeder |
| `Auth/Database/MenuTable.php` | Menu seeder |
| `Auth/Database/OperationLogTable.php` | OperationLog table |
| `Middleware/Authenticate.php` | `JwtAuthGuard` |
| `Middleware/Permission.php` | `RbacGuard` |
| `Middleware/Throttle.php` | `ThrottleGuard` (rate limiting) |
| `Middleware/Bootstrap.php` | `BootstrapMiddleware` |
| `Middleware/LogOperation.php` | `OperationLogInterceptor` |
| `Middleware/Session.php` | Session middleware (if needed) |
| `Middleware/Pjax.php` | PJAX support (headers) |
| `Traits/AdminBuilder.php` | Admin bootstrap logic |
| `Middleware/Authenticate.php` | `jwt.strategy.ts` |
| RBAC methods: `isRole()`, `can()`, `cannot()` | CASL abilities |

### 4.5 SHOW (Show/ — ~10 archivos PHP)

| Componente PHP | Equivalente TS/React |
|---|---|
| `Show/Show.php` | `DetailView.tsx` |
| `Show/Field.php` | `DetailField.tsx` |
| `Show/Panel.php` | `DetailPanel.tsx` |
| `Show/Relation.php` | `DetailRelation.tsx` |
| `Show/Tools.php` | `DetailTools.tsx` (edit, back, delete) |
| `Show/Divider.php` | `DetailDivider.tsx` |

### 4.6 LAYOUT (Layout/ — ~10 archivos PHP)

| Componente PHP | Equivalente TS/React |
|---|---|
| `Layout/Content.php` | `AdminLayout.astro` + `Content.tsx` |
| `Layout/Row.php` | `Row.tsx` |
| `Layout/Column.php` | `Column.tsx` |
| `Layout/Buildable.php` | builder pattern interface |

### 4.7 WIDGETS (Widgets/ — ~20 archivos PHP)

| Componente PHP | Equivalente TS/React |
|---|---|
| `Widgets/Box.php` | `Box.tsx` (Card component) |
| `Widgets/Alert.php` | `Alert.tsx` (shadcn/alert) |
| `Widgets/InfoBox.php` | `InfoBox.tsx` |
| `Widgets/Callout.php` | `Callout.tsx` |
| `Widgets/Tab.php` | `Tab.tsx` (shadcn/tabs) |
| `Widgets/Carousel.php` | `Carousel.tsx` |
| `Widgets/Collapse.php` | `Collapse.tsx` |
| `Widgets/Form.php` | `FormWidget.tsx` |
| `Widgets/Table.php` | `TableWidget.tsx` (TanStack Table) |
| `Widgets/Navbar.php` | `Navbar.tsx` |
| `Widgets/MultipleSteps.php` | `StepForm.tsx` (wizard) |
| `Widgets/Widget.php` | base `Widget` class |

### 4.8 CONFIG (config/admin.php — ~200 líneas PHP)

| Aspecto PHP | Equivalente TS |
|---|---|
| `name`, `logo`, `logo-mini` | `AppConfig` interface |
| `route` settings | NestJS routes definitions |
| `directory` | N/A (no file generation) |
| `title`, `https` | `AppConfig` |
| `auth` settings | JWT config + Prisma seed |
| `database` | `prisma/schema.prisma` |
| `upload` (disk, endpoint, allowed ext) | `FileUploadService` |
| `operation_log` | `OperationLog` entity + interceptor |
| `permissions` | CASL `AbilityBuilder` |
| `menu` | `MenuEntity` + tree structure |
| `layout` settings | Tailwind config |
| `skin` | CSS custom properties |
| `extensions` | Plugin registry |
| `grid_action_class` | config flag for action style |

### 4.9 ASSETS (resources/assets/ — ~200 archivos JS/CSS)

| Asset | Acción |
|---|---|
| Bootstrap 5 SCSS | Compilar a CSS con Tailwind (migrar estilos manualmente) |
| FontAwesome | Usar @fortawesome/react o CDN |
| Flatpickr | @flatpickr/react |
| ChoicesJS | @choicesjs/react o vanilla wrapper |
| SweetAlert2 | sweetalert2 (mantener) |
| Toastify | react-toastify (mantener) |
| SortableJS | @dnd-kit/sortable (para reorder) |
| NProgress | nprogress (mantener) |
| Coloris | @coloris/coloris (mantener) |
| Dual-Listbox | dual-listbox (npm package) |
| Inputmask | react-imask |
| Axios | axios (mantener) |
| Leaflet | react-leaflet |
| CKEditor | @ckeditor/ckeditor5-react |

### 4.10 i18n (src/Admin/bootstrap.php + lang/)

Migrar a `i18next` con:
- Idiomas: en, es, ar, de, fr, ja, ko, pt, ru, zh + 10 más
- Namespace: `admin` (grid, form, tree, auth messages)

### 4.11 EXTENSIONS (helpers, media-manager, etc.)

Implementar como módulos NestJS(plugin registry):
- **Helpers**: utilities varios
- **Media Manager**: FileManager module
- **Config**: settings UI
- **Grid Sortable**: @dnd-kit integration
- **CKEditor**: @ckeditor/ckeditor5-react
- **API Tester**: built-in dev module
- **Scheduling**: cron management UI
- **Log Viewer**: operation log UI
- **Page Designer**: layout builder (futuro)
- **Reporter**: report generator
- **Redis Manager**: redis GUI

---

## 5. ESTRATEGIA DE MIGRACIÓN POR LOTES

### Fase 1: FUNDACIÓN (este bloque)
1. [x] Crear carpeta destino
2. [x] Verificar tooling versions
3. [x] Escribir PLAN.md
4. [ ] Inicializar proyectos NestJS + Astro con pnpm
5. [ ] Configurar Prisma schema (equivalente a migrations)
6. [ ] Configurar Tailwind CSS 4 + shadcn/ui
7. [ ] Configurar JWT auth + CASL RBAC
8. [ ] Guardar plan en Engram

### Fase 2: CORE GRID + FORM (bloques 2-3)
9. Grid module completo (displayers, filters, tools, export)
10. Form module completo (40+ fields, validation)

### Fase 3: TREE + SHOW + WIDGETS (bloques 4-5)
11. Tree module (nested set + drag-sort)
12. Show/Detail view
13. Widgets (Box, Alert, Tab, etc.)

### Fase 4: AUTH + RBAC + MENU (bloque 6)
14. Auth (login/logout/JWT + refresh tokens)
15. RBAC (roles, permissions, guards)
16. Menu system (sidebar + tree)
17. Operation log interceptor
18. i18n

### Fase 5: ASSETS + EXTENSIONS (bloque 7)
19. Asset pipeline (Tailwind + font-awesome + libs)
20. Extensions registry
21. Media manager

### Fase 6: DEPLOY (último bloque)
22. Crear proyecto en Dokploy
23. GitHub repo + CI/CD
24. Deploy a `core.codss.com.ar`
25. Smoke test

---

## 6. API DESIGN (NestJS REST)

### Grid API
```
GET    /api/grids/:resource          → list with filters, sort, pagination
GET    /api/grids/:resource/:id      → single row
POST   /api/grids/:resource          → quick create
PUT    /api/grids/:resource/:id       → inline edit
DELETE /api/grids/:resource/:id       → delete
POST   /api/grids/:resource/export    → CSV/Excel export
POST   /api/grids/:resource/batch     → batch actions
GET    /api/grids/:resource/relations/:column → autocomplete
```

### Form API
```
GET    /api/forms/:resource/:id/edit  → form data + relations
POST   /api/forms/:resource           → create
PUT    /api/forms/:resource/:id       → update
DELETE /api/forms/:resource/:id       → delete
POST   /api/forms/:resource/:id/files → file upload
GET    /api/forms/options/:resource   → field options (for selects)
```

### Tree API
```
GET    /api/trees/:resource           → tree structure
POST   /api/trees/:resource           → create node
PUT    /api/trees/:resource/:id       → update node
DELETE /api/trees/:resource/:id       → delete node
PUT    /api/trees/:resource/reorder   → drag-sort reorder
```

### Auth API
```
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
PUT    /api/auth/password
GET    /api/auth/permissions
```

### RBAC API
```
GET    /api/roles
POST   /api/roles
PUT    /api/roles/:id
DELETE /api/roles/:id
GET    /api/permissions
```

### Menu API
```
GET    /api/menu/tree
POST   /api/menu
PUT    /api/menu/:id
DELETE /api/menu/:id
GET    /api/menu/search?q=
```

---

## 7. DATABASE SCHEMA (Prisma)

Equivalente a `database/migrations/2016_01_04_173148_create_admin_tables.php`:

```prisma
model users {
  id        Int       @id @default(autoincrement())
  username  String    @unique
  email     String    @unique
  password  String
  name      String?
  avatar    String?
  remember_token String?
  created_at DateTime  @default(now())
  updated_at DateTime  @updatedAt
  roles     roles[]
  ops_logs  operation_log[]
}

model roles {
  id          Int       @id @default(autoincrement())
  name        String    @unique
  slug        String    @unique
  permissions permission[]
  users       users[]
  created_at  DateTime  @default(now())
  updated_at  DateTime  @updatedAt
}

model permissions {
  id          Int       @id @default(autoincrement())
  name        String    @unique
  slug        String    @unique
  http_path   String?
  http_method String?
  roles       roles[]
  created_at  DateTime  @default(now())
  updated_at  DateTime  @updatedAt
}

model menu {
  id          Int       @id @default(autoincrement())
  parent_id   Int?
  order       Int       @default(0)
  title       String
  icon        String?
  uri         String?
  permission  String?
  label       String?
  target      String?
  children    menu[]    @relation("MenuChildren")
  parent      menu?     @relation("MenuChildren", fields: [parent_id], references: [id])
  created_at  DateTime  @default(now())
  updated_at  DateTime  @updatedAt
}

model operation_log {
  id           Int      @id @default(autoincrement())
  user_id      Int
  method       String
  uri          String
  ip           String
  input        Json?
  user         users    @relation(fields: [user_id], references: [id])
  created_at   DateTime @default(now())
}
```

---

## 8. HERRAMIENTAS DE ORQUESTACIÓN

### OpenClaw (orquestador/supervisor)
- Configurado con herramientas de mensajería (Telegram)
- 3 modelos en fallback chain
- Reporta cada 1 hora por Telegram

### OpenCode (ejecutor)
- Ejecuta la migración propiamente dicha
- Lee archivos PHP del repo, genera equivalentes TS
- Cada bloque: confirmar avance antes de continuar

### Fallback chain de modelos
```
1. opencode-go/minimax-m2.5  (primary)
2. opencode-go/minimax-m2.7  (si falla m2.5)
3. opencode-go/glm-5         (último recurso)
```

### Watchdog
- Si OpenCode no reporta en 70 min → reiniciar con siguiente modelo
- Telegram: cada 60 min reporte de avance

---

## 9. COMMAND CENTER

| Recurso | Détails |
|---|---|
| Telegram Bot | `@opw_oracl_codss_bot` (ID: 999950346) |
| GitHub repo | `danysers/open-admin-main-migration` (privado) |
| Deploy target | `core.codss.com.ar` en Dokploy |
| Carpeta trabajo | `/home/danysers/open-admin-main-migration/` |
| Hora límite | 09:00 Argentina (UTC-3) |

---

## 10. NOTES IMPORTANTES

- **open-admin es un library/package**, no una app completa. Los usuarios finalizan instalando este paquete en su Laravel app existente. La migración debe seguir el mismo modelo: un paquete npm `@openadmin/admin` que se integra en cualquier proyecto NestJS.
- **Sin file generation** en el destino (a diferencia de Laravel que usa blade templates compilados). El frontend Astro renderiza componentes React server-side donde corresponda.
- **CKEditor 5** requiere license para comerciales pero es GPL. Evaluar alternativa open-source como Tiptap si es necesario.
- **Bootstrap 5 SCSS** → Tailwind 4 (no es migración directa, implica reescribir estilos. Priorizar componentes funcionales sobre estilos visuales).
- **Nested set model** para tree (igual que el original con `parent_id`, `order`, `title`).
