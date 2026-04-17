
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model permissions
 * 
 */
export type permissions = $Result.DefaultSelection<Prisma.$permissionsPayload>
/**
 * Model role_permissions
 * 
 */
export type role_permissions = $Result.DefaultSelection<Prisma.$role_permissionsPayload>
/**
 * Model menu
 * 
 */
export type menu = $Result.DefaultSelection<Prisma.$menuPayload>
/**
 * Model operation_log
 * 
 */
export type operation_log = $Result.DefaultSelection<Prisma.$operation_logPayload>
/**
 * Model authUser
 * 
 */
export type authUser = $Result.DefaultSelection<Prisma.$authUserPayload>
/**
 * Model authAccount
 * 
 */
export type authAccount = $Result.DefaultSelection<Prisma.$authAccountPayload>
/**
 * Model authSession
 * 
 */
export type authSession = $Result.DefaultSelection<Prisma.$authSessionPayload>
/**
 * Model authVerification
 * 
 */
export type authVerification = $Result.DefaultSelection<Prisma.$authVerificationPayload>
/**
 * Model authTwoFactor
 * 
 */
export type authTwoFactor = $Result.DefaultSelection<Prisma.$authTwoFactorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissions`: Exposes CRUD operations for the **permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permissions.findMany()
    * ```
    */
  get permissions(): Prisma.permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role_permissions`: Exposes CRUD operations for the **role_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_permissions
    * const role_permissions = await prisma.role_permissions.findMany()
    * ```
    */
  get role_permissions(): Prisma.role_permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operation_log`: Exposes CRUD operations for the **operation_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operation_logs
    * const operation_logs = await prisma.operation_log.findMany()
    * ```
    */
  get operation_log(): Prisma.operation_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authUser`: Exposes CRUD operations for the **authUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthUsers
    * const authUsers = await prisma.authUser.findMany()
    * ```
    */
  get authUser(): Prisma.authUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authAccount`: Exposes CRUD operations for the **authAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthAccounts
    * const authAccounts = await prisma.authAccount.findMany()
    * ```
    */
  get authAccount(): Prisma.authAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **authSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.authSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authVerification`: Exposes CRUD operations for the **authVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthVerifications
    * const authVerifications = await prisma.authVerification.findMany()
    * ```
    */
  get authVerification(): Prisma.authVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authTwoFactor`: Exposes CRUD operations for the **authTwoFactor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthTwoFactors
    * const authTwoFactors = await prisma.authTwoFactor.findMany()
    * ```
    */
  get authTwoFactor(): Prisma.authTwoFactorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    roles: 'roles',
    permissions: 'permissions',
    role_permissions: 'role_permissions',
    menu: 'menu',
    operation_log: 'operation_log',
    authUser: 'authUser',
    authAccount: 'authAccount',
    authSession: 'authSession',
    authVerification: 'authVerification',
    authTwoFactor: 'authTwoFactor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "roles" | "permissions" | "role_permissions" | "menu" | "operation_log" | "authUser" | "authAccount" | "authSession" | "authVerification" | "authTwoFactor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      permissions: {
        payload: Prisma.$permissionsPayload<ExtArgs>
        fields: Prisma.permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          findFirst: {
            args: Prisma.permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          findMany: {
            args: Prisma.permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>[]
          }
          create: {
            args: Prisma.permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          createMany: {
            args: Prisma.permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.permissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>[]
          }
          delete: {
            args: Prisma.permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          update: {
            args: Prisma.permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          deleteMany: {
            args: Prisma.permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.permissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>[]
          }
          upsert: {
            args: Prisma.permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          aggregate: {
            args: Prisma.PermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissions>
          }
          groupBy: {
            args: Prisma.permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionsCountAggregateOutputType> | number
          }
        }
      }
      role_permissions: {
        payload: Prisma.$role_permissionsPayload<ExtArgs>
        fields: Prisma.role_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.role_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.role_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          findFirst: {
            args: Prisma.role_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.role_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          findMany: {
            args: Prisma.role_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>[]
          }
          create: {
            args: Prisma.role_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          createMany: {
            args: Prisma.role_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.role_permissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>[]
          }
          delete: {
            args: Prisma.role_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          update: {
            args: Prisma.role_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.role_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.role_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.role_permissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>[]
          }
          upsert: {
            args: Prisma.role_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          aggregate: {
            args: Prisma.Role_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole_permissions>
          }
          groupBy: {
            args: Prisma.role_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.role_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionsCountAggregateOutputType> | number
          }
        }
      }
      menu: {
        payload: Prisma.$menuPayload<ExtArgs>
        fields: Prisma.menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findFirst: {
            args: Prisma.menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findMany: {
            args: Prisma.menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          create: {
            args: Prisma.menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          createMany: {
            args: Prisma.menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          delete: {
            args: Prisma.menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          update: {
            args: Prisma.menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          deleteMany: {
            args: Prisma.menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          upsert: {
            args: Prisma.menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      operation_log: {
        payload: Prisma.$operation_logPayload<ExtArgs>
        fields: Prisma.operation_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operation_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operation_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>
          }
          findFirst: {
            args: Prisma.operation_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operation_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>
          }
          findMany: {
            args: Prisma.operation_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>[]
          }
          create: {
            args: Prisma.operation_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>
          }
          createMany: {
            args: Prisma.operation_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.operation_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>[]
          }
          delete: {
            args: Prisma.operation_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>
          }
          update: {
            args: Prisma.operation_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>
          }
          deleteMany: {
            args: Prisma.operation_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operation_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.operation_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>[]
          }
          upsert: {
            args: Prisma.operation_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logPayload>
          }
          aggregate: {
            args: Prisma.Operation_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation_log>
          }
          groupBy: {
            args: Prisma.operation_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Operation_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.operation_logCountArgs<ExtArgs>
            result: $Utils.Optional<Operation_logCountAggregateOutputType> | number
          }
        }
      }
      authUser: {
        payload: Prisma.$authUserPayload<ExtArgs>
        fields: Prisma.authUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>
          }
          findFirst: {
            args: Prisma.authUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>
          }
          findMany: {
            args: Prisma.authUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>[]
          }
          create: {
            args: Prisma.authUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>
          }
          createMany: {
            args: Prisma.authUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>[]
          }
          delete: {
            args: Prisma.authUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>
          }
          update: {
            args: Prisma.authUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>
          }
          deleteMany: {
            args: Prisma.authUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>[]
          }
          upsert: {
            args: Prisma.authUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authUserPayload>
          }
          aggregate: {
            args: Prisma.AuthUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthUser>
          }
          groupBy: {
            args: Prisma.authUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.authUserCountArgs<ExtArgs>
            result: $Utils.Optional<AuthUserCountAggregateOutputType> | number
          }
        }
      }
      authAccount: {
        payload: Prisma.$authAccountPayload<ExtArgs>
        fields: Prisma.authAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>
          }
          findFirst: {
            args: Prisma.authAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>
          }
          findMany: {
            args: Prisma.authAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>[]
          }
          create: {
            args: Prisma.authAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>
          }
          createMany: {
            args: Prisma.authAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>[]
          }
          delete: {
            args: Prisma.authAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>
          }
          update: {
            args: Prisma.authAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>
          }
          deleteMany: {
            args: Prisma.authAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>[]
          }
          upsert: {
            args: Prisma.authAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authAccountPayload>
          }
          aggregate: {
            args: Prisma.AuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthAccount>
          }
          groupBy: {
            args: Prisma.authAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.authAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountCountAggregateOutputType> | number
          }
        }
      }
      authSession: {
        payload: Prisma.$authSessionPayload<ExtArgs>
        fields: Prisma.authSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>
          }
          findFirst: {
            args: Prisma.authSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>
          }
          findMany: {
            args: Prisma.authSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>[]
          }
          create: {
            args: Prisma.authSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>
          }
          createMany: {
            args: Prisma.authSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>[]
          }
          delete: {
            args: Prisma.authSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>
          }
          update: {
            args: Prisma.authSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>
          }
          deleteMany: {
            args: Prisma.authSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>[]
          }
          upsert: {
            args: Prisma.authSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.authSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.authSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      authVerification: {
        payload: Prisma.$authVerificationPayload<ExtArgs>
        fields: Prisma.authVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>
          }
          findFirst: {
            args: Prisma.authVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>
          }
          findMany: {
            args: Prisma.authVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>[]
          }
          create: {
            args: Prisma.authVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>
          }
          createMany: {
            args: Prisma.authVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>[]
          }
          delete: {
            args: Prisma.authVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>
          }
          update: {
            args: Prisma.authVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>
          }
          deleteMany: {
            args: Prisma.authVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>[]
          }
          upsert: {
            args: Prisma.authVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authVerificationPayload>
          }
          aggregate: {
            args: Prisma.AuthVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthVerification>
          }
          groupBy: {
            args: Prisma.authVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.authVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthVerificationCountAggregateOutputType> | number
          }
        }
      }
      authTwoFactor: {
        payload: Prisma.$authTwoFactorPayload<ExtArgs>
        fields: Prisma.authTwoFactorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authTwoFactorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authTwoFactorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>
          }
          findFirst: {
            args: Prisma.authTwoFactorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authTwoFactorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>
          }
          findMany: {
            args: Prisma.authTwoFactorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>[]
          }
          create: {
            args: Prisma.authTwoFactorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>
          }
          createMany: {
            args: Prisma.authTwoFactorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authTwoFactorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>[]
          }
          delete: {
            args: Prisma.authTwoFactorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>
          }
          update: {
            args: Prisma.authTwoFactorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>
          }
          deleteMany: {
            args: Prisma.authTwoFactorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authTwoFactorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authTwoFactorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>[]
          }
          upsert: {
            args: Prisma.authTwoFactorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authTwoFactorPayload>
          }
          aggregate: {
            args: Prisma.AuthTwoFactorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthTwoFactor>
          }
          groupBy: {
            args: Prisma.authTwoFactorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthTwoFactorGroupByOutputType>[]
          }
          count: {
            args: Prisma.authTwoFactorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthTwoFactorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    roles?: rolesOmit
    permissions?: permissionsOmit
    role_permissions?: role_permissionsOmit
    menu?: menuOmit
    operation_log?: operation_logOmit
    authUser?: authUserOmit
    authAccount?: authAccountOmit
    authSession?: authSessionOmit
    authVerification?: authVerificationOmit
    authTwoFactor?: authTwoFactorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    roles: number
    operation_logs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UsersCountOutputTypeCountRolesArgs
    operation_logs?: boolean | UsersCountOutputTypeCountOperation_logsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOperation_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operation_logWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    permissions: number
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | RolesCountOutputTypeCountPermissionsArgs
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionsWhereInput
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type PermissionsCountOutputType
   */

  export type PermissionsCountOutputType = {
    roles: number
  }

  export type PermissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionsCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionsCountOutputType
     */
    select?: PermissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionsWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    children: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | MenuCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
  }


  /**
   * Count Type AuthUserCountOutputType
   */

  export type AuthUserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type AuthUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | AuthUserCountOutputTypeCountAccountsArgs
    sessions?: boolean | AuthUserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUserCountOutputType
     */
    select?: AuthUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authAccountWhereInput
  }

  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    name: number
    avatar: number
    remember_token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    name: string | null
    avatar: string | null
    remember_token: string | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | users$rolesArgs<ExtArgs>
    operation_logs?: boolean | users$operation_logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "name" | "avatar" | "remember_token" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | users$rolesArgs<ExtArgs>
    operation_logs?: boolean | users$operation_logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs>[]
      operation_logs: Prisma.$operation_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      name: string | null
      avatar: string | null
      remember_token: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends users$rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operation_logs<T extends users$operation_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$operation_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly remember_token: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.roles
   */
  export type users$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    cursor?: rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * users.operation_logs
   */
  export type users$operation_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    where?: operation_logWhereInput
    orderBy?: operation_logOrderByWithRelationInput | operation_logOrderByWithRelationInput[]
    cursor?: operation_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Operation_logScalarFieldEnum | Operation_logScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    slug: string
    created_at: Date
    updated_at: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
    permissions?: boolean | roles$permissionsArgs<ExtArgs>
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | roles$permissionsArgs<ExtArgs>
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      permissions: Prisma.$role_permissionsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends roles$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, roles$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
    readonly slug: FieldRef<"roles", 'String'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.permissions
   */
  export type roles$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    where?: role_permissionsWhereInput
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    cursor?: role_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model permissions
   */

  export type AggregatePermissions = {
    _count: PermissionsCountAggregateOutputType | null
    _avg: PermissionsAvgAggregateOutputType | null
    _sum: PermissionsSumAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  export type PermissionsAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionsSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    http_path: string | null
    http_method: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    http_path: string | null
    http_method: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    http_path: number
    http_method: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PermissionsAvgAggregateInputType = {
    id?: true
  }

  export type PermissionsSumAggregateInputType = {
    id?: true
  }

  export type PermissionsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    http_path?: true
    http_method?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    http_path?: true
    http_method?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    http_path?: true
    http_method?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to aggregate.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionsMaxAggregateInputType
  }

  export type GetPermissionsAggregateType<T extends PermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissions[P]>
      : GetScalarType<T[P], AggregatePermissions[P]>
  }




  export type permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionsWhereInput
    orderBy?: permissionsOrderByWithAggregationInput | permissionsOrderByWithAggregationInput[]
    by: PermissionsScalarFieldEnum[] | PermissionsScalarFieldEnum
    having?: permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionsCountAggregateInputType | true
    _avg?: PermissionsAvgAggregateInputType
    _sum?: PermissionsSumAggregateInputType
    _min?: PermissionsMinAggregateInputType
    _max?: PermissionsMaxAggregateInputType
  }

  export type PermissionsGroupByOutputType = {
    id: number
    name: string
    slug: string
    http_path: string | null
    http_method: string | null
    created_at: Date
    updated_at: Date
    _count: PermissionsCountAggregateOutputType | null
    _avg: PermissionsAvgAggregateOutputType | null
    _sum: PermissionsSumAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  type GetPermissionsGroupByPayload<T extends permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
        }
      >
    >


  export type permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    http_path?: boolean
    http_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | permissions$rolesArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissions"]>

  export type permissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    http_path?: boolean
    http_method?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["permissions"]>

  export type permissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    http_path?: boolean
    http_method?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["permissions"]>

  export type permissionsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    http_path?: boolean
    http_method?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "http_path" | "http_method" | "created_at" | "updated_at", ExtArgs["result"]["permissions"]>
  export type permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | permissions$rolesArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type permissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type permissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permissions"
    objects: {
      roles: Prisma.$role_permissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      http_path: string | null
      http_method: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["permissions"]>
    composites: {}
  }

  type permissionsGetPayload<S extends boolean | null | undefined | permissionsDefaultArgs> = $Result.GetResult<Prisma.$permissionsPayload, S>

  type permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionsCountAggregateInputType | true
    }

  export interface permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permissions'], meta: { name: 'permissions' } }
    /**
     * Find zero or one Permissions that matches the filter.
     * @param {permissionsFindUniqueArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permissionsFindUniqueArgs>(args: SelectSubset<T, permissionsFindUniqueArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permissionsFindUniqueOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindFirstArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permissionsFindFirstArgs>(args?: SelectSubset<T, permissionsFindFirstArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindFirstOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permissions.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionsWithIdOnly = await prisma.permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permissionsFindManyArgs>(args?: SelectSubset<T, permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissions.
     * @param {permissionsCreateArgs} args - Arguments to create a Permissions.
     * @example
     * // Create one Permissions
     * const Permissions = await prisma.permissions.create({
     *   data: {
     *     // ... data to create a Permissions
     *   }
     * })
     * 
     */
    create<T extends permissionsCreateArgs>(args: SelectSubset<T, permissionsCreateArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {permissionsCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permissionsCreateManyArgs>(args?: SelectSubset<T, permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {permissionsCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionsWithIdOnly = await prisma.permissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends permissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permissions.
     * @param {permissionsDeleteArgs} args - Arguments to delete one Permissions.
     * @example
     * // Delete one Permissions
     * const Permissions = await prisma.permissions.delete({
     *   where: {
     *     // ... filter to delete one Permissions
     *   }
     * })
     * 
     */
    delete<T extends permissionsDeleteArgs>(args: SelectSubset<T, permissionsDeleteArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissions.
     * @param {permissionsUpdateArgs} args - Arguments to update one Permissions.
     * @example
     * // Update one Permissions
     * const permissions = await prisma.permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permissionsUpdateArgs>(args: SelectSubset<T, permissionsUpdateArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {permissionsDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permissionsDeleteManyArgs>(args?: SelectSubset<T, permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permissionsUpdateManyArgs>(args: SelectSubset<T, permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {permissionsUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionsWithIdOnly = await prisma.permissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends permissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, permissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permissions.
     * @param {permissionsUpsertArgs} args - Arguments to update or create a Permissions.
     * @example
     * // Update or create a Permissions
     * const permissions = await prisma.permissions.upsert({
     *   create: {
     *     // ... data to create a Permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissions we want to update
     *   }
     * })
     */
    upsert<T extends permissionsUpsertArgs>(args: SelectSubset<T, permissionsUpsertArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permissions.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionsCountArgs>(
      args?: Subset<T, permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionsAggregateArgs>(args: Subset<T, PermissionsAggregateArgs>): Prisma.PrismaPromise<GetPermissionsAggregateType<T>>

    /**
     * Group by Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permissionsGroupByArgs['orderBy'] }
        : { orderBy?: permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permissions model
   */
  readonly fields: permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends permissions$rolesArgs<ExtArgs> = {}>(args?: Subset<T, permissions$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the permissions model
   */
  interface permissionsFieldRefs {
    readonly id: FieldRef<"permissions", 'Int'>
    readonly name: FieldRef<"permissions", 'String'>
    readonly slug: FieldRef<"permissions", 'String'>
    readonly http_path: FieldRef<"permissions", 'String'>
    readonly http_method: FieldRef<"permissions", 'String'>
    readonly created_at: FieldRef<"permissions", 'DateTime'>
    readonly updated_at: FieldRef<"permissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permissions findUnique
   */
  export type permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions findUniqueOrThrow
   */
  export type permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions findFirst
   */
  export type permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions findFirstOrThrow
   */
  export type permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions findMany
   */
  export type permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions create
   */
  export type permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a permissions.
     */
    data: XOR<permissionsCreateInput, permissionsUncheckedCreateInput>
  }

  /**
   * permissions createMany
   */
  export type permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: permissionsCreateManyInput | permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permissions createManyAndReturn
   */
  export type permissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * The data used to create many permissions.
     */
    data: permissionsCreateManyInput | permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permissions update
   */
  export type permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a permissions.
     */
    data: XOR<permissionsUpdateInput, permissionsUncheckedUpdateInput>
    /**
     * Choose, which permissions to update.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions updateMany
   */
  export type permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionsUpdateManyMutationInput, permissionsUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionsWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
  }

  /**
   * permissions updateManyAndReturn
   */
  export type permissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionsUpdateManyMutationInput, permissionsUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionsWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
  }

  /**
   * permissions upsert
   */
  export type permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the permissions to update in case it exists.
     */
    where: permissionsWhereUniqueInput
    /**
     * In case the permissions found by the `where` argument doesn't exist, create a new permissions with this data.
     */
    create: XOR<permissionsCreateInput, permissionsUncheckedCreateInput>
    /**
     * In case the permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionsUpdateInput, permissionsUncheckedUpdateInput>
  }

  /**
   * permissions delete
   */
  export type permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter which permissions to delete.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions deleteMany
   */
  export type permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionsWhereInput
    /**
     * Limit how many permissions to delete.
     */
    limit?: number
  }

  /**
   * permissions.roles
   */
  export type permissions$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    where?: role_permissionsWhereInput
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    cursor?: role_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * permissions without action
   */
  export type permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
  }


  /**
   * Model role_permissions
   */

  export type AggregateRole_permissions = {
    _count: Role_permissionsCountAggregateOutputType | null
    _avg: Role_permissionsAvgAggregateOutputType | null
    _sum: Role_permissionsSumAggregateOutputType | null
    _min: Role_permissionsMinAggregateOutputType | null
    _max: Role_permissionsMaxAggregateOutputType | null
  }

  export type Role_permissionsAvgAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionsSumAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionsMinAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionsMaxAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionsCountAggregateOutputType = {
    role_id: number
    permission_id: number
    _all: number
  }


  export type Role_permissionsAvgAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionsSumAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionsMinAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionsMaxAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionsCountAggregateInputType = {
    role_id?: true
    permission_id?: true
    _all?: true
  }

  export type Role_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permissions to aggregate.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_permissions
    **/
    _count?: true | Role_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Role_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Role_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_permissionsMaxAggregateInputType
  }

  export type GetRole_permissionsAggregateType<T extends Role_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_permissions[P]>
      : GetScalarType<T[P], AggregateRole_permissions[P]>
  }




  export type role_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionsWhereInput
    orderBy?: role_permissionsOrderByWithAggregationInput | role_permissionsOrderByWithAggregationInput[]
    by: Role_permissionsScalarFieldEnum[] | Role_permissionsScalarFieldEnum
    having?: role_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_permissionsCountAggregateInputType | true
    _avg?: Role_permissionsAvgAggregateInputType
    _sum?: Role_permissionsSumAggregateInputType
    _min?: Role_permissionsMinAggregateInputType
    _max?: Role_permissionsMaxAggregateInputType
  }

  export type Role_permissionsGroupByOutputType = {
    role_id: number
    permission_id: number
    _count: Role_permissionsCountAggregateOutputType | null
    _avg: Role_permissionsAvgAggregateOutputType | null
    _sum: Role_permissionsSumAggregateOutputType | null
    _min: Role_permissionsMinAggregateOutputType | null
    _max: Role_permissionsMaxAggregateOutputType | null
  }

  type GetRole_permissionsGroupByPayload<T extends role_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Role_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type role_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permissions"]>

  export type role_permissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permissions"]>

  export type role_permissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permissions"]>

  export type role_permissionsSelectScalar = {
    role_id?: boolean
    permission_id?: boolean
  }

  export type role_permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "permission_id", ExtArgs["result"]["role_permissions"]>
  export type role_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }
  export type role_permissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }
  export type role_permissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    permission?: boolean | permissionsDefaultArgs<ExtArgs>
  }

  export type $role_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role_permissions"
    objects: {
      role: Prisma.$rolesPayload<ExtArgs>
      permission: Prisma.$permissionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      permission_id: number
    }, ExtArgs["result"]["role_permissions"]>
    composites: {}
  }

  type role_permissionsGetPayload<S extends boolean | null | undefined | role_permissionsDefaultArgs> = $Result.GetResult<Prisma.$role_permissionsPayload, S>

  type role_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<role_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Role_permissionsCountAggregateInputType | true
    }

  export interface role_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role_permissions'], meta: { name: 'role_permissions' } }
    /**
     * Find zero or one Role_permissions that matches the filter.
     * @param {role_permissionsFindUniqueArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends role_permissionsFindUniqueArgs>(args: SelectSubset<T, role_permissionsFindUniqueArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role_permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {role_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends role_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, role_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsFindFirstArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends role_permissionsFindFirstArgs>(args?: SelectSubset<T, role_permissionsFindFirstArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsFindFirstOrThrowArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends role_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, role_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_permissions
     * const role_permissions = await prisma.role_permissions.findMany()
     * 
     * // Get first 10 Role_permissions
     * const role_permissions = await prisma.role_permissions.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const role_permissionsWithRole_idOnly = await prisma.role_permissions.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends role_permissionsFindManyArgs>(args?: SelectSubset<T, role_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role_permissions.
     * @param {role_permissionsCreateArgs} args - Arguments to create a Role_permissions.
     * @example
     * // Create one Role_permissions
     * const Role_permissions = await prisma.role_permissions.create({
     *   data: {
     *     // ... data to create a Role_permissions
     *   }
     * })
     * 
     */
    create<T extends role_permissionsCreateArgs>(args: SelectSubset<T, role_permissionsCreateArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Role_permissions.
     * @param {role_permissionsCreateManyArgs} args - Arguments to create many Role_permissions.
     * @example
     * // Create many Role_permissions
     * const role_permissions = await prisma.role_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends role_permissionsCreateManyArgs>(args?: SelectSubset<T, role_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Role_permissions and returns the data saved in the database.
     * @param {role_permissionsCreateManyAndReturnArgs} args - Arguments to create many Role_permissions.
     * @example
     * // Create many Role_permissions
     * const role_permissions = await prisma.role_permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Role_permissions and only return the `role_id`
     * const role_permissionsWithRole_idOnly = await prisma.role_permissions.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends role_permissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, role_permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role_permissions.
     * @param {role_permissionsDeleteArgs} args - Arguments to delete one Role_permissions.
     * @example
     * // Delete one Role_permissions
     * const Role_permissions = await prisma.role_permissions.delete({
     *   where: {
     *     // ... filter to delete one Role_permissions
     *   }
     * })
     * 
     */
    delete<T extends role_permissionsDeleteArgs>(args: SelectSubset<T, role_permissionsDeleteArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role_permissions.
     * @param {role_permissionsUpdateArgs} args - Arguments to update one Role_permissions.
     * @example
     * // Update one Role_permissions
     * const role_permissions = await prisma.role_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends role_permissionsUpdateArgs>(args: SelectSubset<T, role_permissionsUpdateArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Role_permissions.
     * @param {role_permissionsDeleteManyArgs} args - Arguments to filter Role_permissions to delete.
     * @example
     * // Delete a few Role_permissions
     * const { count } = await prisma.role_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends role_permissionsDeleteManyArgs>(args?: SelectSubset<T, role_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_permissions
     * const role_permissions = await prisma.role_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends role_permissionsUpdateManyArgs>(args: SelectSubset<T, role_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_permissions and returns the data updated in the database.
     * @param {role_permissionsUpdateManyAndReturnArgs} args - Arguments to update many Role_permissions.
     * @example
     * // Update many Role_permissions
     * const role_permissions = await prisma.role_permissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Role_permissions and only return the `role_id`
     * const role_permissionsWithRole_idOnly = await prisma.role_permissions.updateManyAndReturn({
     *   select: { role_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends role_permissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, role_permissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role_permissions.
     * @param {role_permissionsUpsertArgs} args - Arguments to update or create a Role_permissions.
     * @example
     * // Update or create a Role_permissions
     * const role_permissions = await prisma.role_permissions.upsert({
     *   create: {
     *     // ... data to create a Role_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_permissions we want to update
     *   }
     * })
     */
    upsert<T extends role_permissionsUpsertArgs>(args: SelectSubset<T, role_permissionsUpsertArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsCountArgs} args - Arguments to filter Role_permissions to count.
     * @example
     * // Count the number of Role_permissions
     * const count = await prisma.role_permissions.count({
     *   where: {
     *     // ... the filter for the Role_permissions we want to count
     *   }
     * })
    **/
    count<T extends role_permissionsCountArgs>(
      args?: Subset<T, role_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_permissionsAggregateArgs>(args: Subset<T, Role_permissionsAggregateArgs>): Prisma.PrismaPromise<GetRole_permissionsAggregateType<T>>

    /**
     * Group by Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends role_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: role_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: role_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, role_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role_permissions model
   */
  readonly fields: role_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__role_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends permissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, permissionsDefaultArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role_permissions model
   */
  interface role_permissionsFieldRefs {
    readonly role_id: FieldRef<"role_permissions", 'Int'>
    readonly permission_id: FieldRef<"role_permissions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * role_permissions findUnique
   */
  export type role_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions findUniqueOrThrow
   */
  export type role_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions findFirst
   */
  export type role_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * role_permissions findFirstOrThrow
   */
  export type role_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * role_permissions findMany
   */
  export type role_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_permissions.
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * role_permissions create
   */
  export type role_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a role_permissions.
     */
    data: XOR<role_permissionsCreateInput, role_permissionsUncheckedCreateInput>
  }

  /**
   * role_permissions createMany
   */
  export type role_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many role_permissions.
     */
    data: role_permissionsCreateManyInput | role_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role_permissions createManyAndReturn
   */
  export type role_permissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * The data used to create many role_permissions.
     */
    data: role_permissionsCreateManyInput | role_permissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * role_permissions update
   */
  export type role_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a role_permissions.
     */
    data: XOR<role_permissionsUpdateInput, role_permissionsUncheckedUpdateInput>
    /**
     * Choose, which role_permissions to update.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions updateMany
   */
  export type role_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update role_permissions.
     */
    data: XOR<role_permissionsUpdateManyMutationInput, role_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which role_permissions to update
     */
    where?: role_permissionsWhereInput
    /**
     * Limit how many role_permissions to update.
     */
    limit?: number
  }

  /**
   * role_permissions updateManyAndReturn
   */
  export type role_permissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * The data used to update role_permissions.
     */
    data: XOR<role_permissionsUpdateManyMutationInput, role_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which role_permissions to update
     */
    where?: role_permissionsWhereInput
    /**
     * Limit how many role_permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * role_permissions upsert
   */
  export type role_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the role_permissions to update in case it exists.
     */
    where: role_permissionsWhereUniqueInput
    /**
     * In case the role_permissions found by the `where` argument doesn't exist, create a new role_permissions with this data.
     */
    create: XOR<role_permissionsCreateInput, role_permissionsUncheckedCreateInput>
    /**
     * In case the role_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_permissionsUpdateInput, role_permissionsUncheckedUpdateInput>
  }

  /**
   * role_permissions delete
   */
  export type role_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter which role_permissions to delete.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions deleteMany
   */
  export type role_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permissions to delete
     */
    where?: role_permissionsWhereInput
    /**
     * Limit how many role_permissions to delete.
     */
    limit?: number
  }

  /**
   * role_permissions without action
   */
  export type role_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permissions
     */
    omit?: role_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
    order: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
    order: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    parent_id: number | null
    order: number | null
    title: string | null
    icon: string | null
    uri: string | null
    permission: string | null
    label: string | null
    target: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    parent_id: number | null
    order: number | null
    title: string | null
    icon: string | null
    uri: string | null
    permission: string | null
    label: string | null
    target: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    parent_id: number
    order: number
    title: number
    icon: number
    uri: number
    permission: number
    label: number
    target: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    parent_id?: true
    order?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    parent_id?: true
    order?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    parent_id?: true
    order?: true
    title?: true
    icon?: true
    uri?: true
    permission?: true
    label?: true
    target?: true
    created_at?: true
    updated_at?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    parent_id?: true
    order?: true
    title?: true
    icon?: true
    uri?: true
    permission?: true
    label?: true
    target?: true
    created_at?: true
    updated_at?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    parent_id?: true
    order?: true
    title?: true
    icon?: true
    uri?: true
    permission?: true
    label?: true
    target?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
    orderBy?: menuOrderByWithAggregationInput | menuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    parent_id: number | null
    order: number
    title: string
    icon: string | null
    uri: string | null
    permission: string | null
    label: string | null
    target: string | null
    created_at: Date
    updated_at: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    order?: boolean
    title?: boolean
    icon?: boolean
    uri?: boolean
    permission?: boolean
    label?: boolean
    target?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent?: boolean | menu$parentArgs<ExtArgs>
    children?: boolean | menu$childrenArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    order?: boolean
    title?: boolean
    icon?: boolean
    uri?: boolean
    permission?: boolean
    label?: boolean
    target?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent?: boolean | menu$parentArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    order?: boolean
    title?: boolean
    icon?: boolean
    uri?: boolean
    permission?: boolean
    label?: boolean
    target?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent?: boolean | menu$parentArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectScalar = {
    id?: boolean
    parent_id?: boolean
    order?: boolean
    title?: boolean
    icon?: boolean
    uri?: boolean
    permission?: boolean
    label?: boolean
    target?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parent_id" | "order" | "title" | "icon" | "uri" | "permission" | "label" | "target" | "created_at" | "updated_at", ExtArgs["result"]["menu"]>
  export type menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | menu$parentArgs<ExtArgs>
    children?: boolean | menu$childrenArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | menu$parentArgs<ExtArgs>
  }
  export type menuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | menu$parentArgs<ExtArgs>
  }

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu"
    objects: {
      parent: Prisma.$menuPayload<ExtArgs> | null
      children: Prisma.$menuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parent_id: number | null
      order: number
      title: string
      icon: string | null
      uri: string | null
      permission: string | null
      label: string | null
      target: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = $Result.GetResult<Prisma.$menuPayload, S>

  type menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu'], meta: { name: 'menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuFindUniqueArgs>(args: SelectSubset<T, menuFindUniqueArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(args: SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuFindFirstArgs>(args?: SelectSubset<T, menuFindFirstArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(args?: SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuFindManyArgs>(args?: SelectSubset<T, menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends menuCreateArgs>(args: SelectSubset<T, menuCreateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {menuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuCreateManyArgs>(args?: SelectSubset<T, menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {menuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menuCreateManyAndReturnArgs>(args?: SelectSubset<T, menuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends menuDeleteArgs>(args: SelectSubset<T, menuDeleteArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuUpdateArgs>(args: SelectSubset<T, menuUpdateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuDeleteManyArgs>(args?: SelectSubset<T, menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuUpdateManyArgs>(args: SelectSubset<T, menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {menuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menuUpdateManyAndReturnArgs>(args: SelectSubset<T, menuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends menuUpsertArgs>(args: SelectSubset<T, menuUpsertArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuGroupByArgs['orderBy'] }
        : { orderBy?: menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu model
   */
  readonly fields: menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends menu$parentArgs<ExtArgs> = {}>(args?: Subset<T, menu$parentArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends menu$childrenArgs<ExtArgs> = {}>(args?: Subset<T, menu$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menu model
   */
  interface menuFieldRefs {
    readonly id: FieldRef<"menu", 'Int'>
    readonly parent_id: FieldRef<"menu", 'Int'>
    readonly order: FieldRef<"menu", 'Int'>
    readonly title: FieldRef<"menu", 'String'>
    readonly icon: FieldRef<"menu", 'String'>
    readonly uri: FieldRef<"menu", 'String'>
    readonly permission: FieldRef<"menu", 'String'>
    readonly label: FieldRef<"menu", 'String'>
    readonly target: FieldRef<"menu", 'String'>
    readonly created_at: FieldRef<"menu", 'DateTime'>
    readonly updated_at: FieldRef<"menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * menu findUnique
   */
  export type menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findFirst
   */
  export type menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findMany
   */
  export type menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu create
   */
  export type menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>
  }

  /**
   * menu createMany
   */
  export type menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu createManyAndReturn
   */
  export type menuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu update
   */
  export type menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
  }

  /**
   * menu updateManyAndReturn
   */
  export type menuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu upsert
   */
  export type menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }

  /**
   * menu delete
   */
  export type menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to delete.
     */
    limit?: number
  }

  /**
   * menu.parent
   */
  export type menu$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    where?: menuWhereInput
  }

  /**
   * menu.children
   */
  export type menu$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    where?: menuWhereInput
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    cursor?: menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu without action
   */
  export type menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
  }


  /**
   * Model operation_log
   */

  export type AggregateOperation_log = {
    _count: Operation_logCountAggregateOutputType | null
    _avg: Operation_logAvgAggregateOutputType | null
    _sum: Operation_logSumAggregateOutputType | null
    _min: Operation_logMinAggregateOutputType | null
    _max: Operation_logMaxAggregateOutputType | null
  }

  export type Operation_logAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Operation_logSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Operation_logMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    method: string | null
    uri: string | null
    ip: string | null
    created_at: Date | null
  }

  export type Operation_logMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    method: string | null
    uri: string | null
    ip: string | null
    created_at: Date | null
  }

  export type Operation_logCountAggregateOutputType = {
    id: number
    user_id: number
    method: number
    uri: number
    ip: number
    input: number
    created_at: number
    _all: number
  }


  export type Operation_logAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Operation_logSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Operation_logMinAggregateInputType = {
    id?: true
    user_id?: true
    method?: true
    uri?: true
    ip?: true
    created_at?: true
  }

  export type Operation_logMaxAggregateInputType = {
    id?: true
    user_id?: true
    method?: true
    uri?: true
    ip?: true
    created_at?: true
  }

  export type Operation_logCountAggregateInputType = {
    id?: true
    user_id?: true
    method?: true
    uri?: true
    ip?: true
    input?: true
    created_at?: true
    _all?: true
  }

  export type Operation_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operation_log to aggregate.
     */
    where?: operation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logOrderByWithRelationInput | operation_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operation_logs
    **/
    _count?: true | Operation_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Operation_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Operation_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Operation_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Operation_logMaxAggregateInputType
  }

  export type GetOperation_logAggregateType<T extends Operation_logAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation_log[P]>
      : GetScalarType<T[P], AggregateOperation_log[P]>
  }




  export type operation_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operation_logWhereInput
    orderBy?: operation_logOrderByWithAggregationInput | operation_logOrderByWithAggregationInput[]
    by: Operation_logScalarFieldEnum[] | Operation_logScalarFieldEnum
    having?: operation_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Operation_logCountAggregateInputType | true
    _avg?: Operation_logAvgAggregateInputType
    _sum?: Operation_logSumAggregateInputType
    _min?: Operation_logMinAggregateInputType
    _max?: Operation_logMaxAggregateInputType
  }

  export type Operation_logGroupByOutputType = {
    id: number
    user_id: number
    method: string
    uri: string
    ip: string
    input: JsonValue | null
    created_at: Date
    _count: Operation_logCountAggregateOutputType | null
    _avg: Operation_logAvgAggregateOutputType | null
    _sum: Operation_logSumAggregateOutputType | null
    _min: Operation_logMinAggregateOutputType | null
    _max: Operation_logMaxAggregateOutputType | null
  }

  type GetOperation_logGroupByPayload<T extends operation_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operation_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Operation_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Operation_logGroupByOutputType[P]>
            : GetScalarType<T[P], Operation_logGroupByOutputType[P]>
        }
      >
    >


  export type operation_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    method?: boolean
    uri?: boolean
    ip?: boolean
    input?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation_log"]>

  export type operation_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    method?: boolean
    uri?: boolean
    ip?: boolean
    input?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation_log"]>

  export type operation_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    method?: boolean
    uri?: boolean
    ip?: boolean
    input?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation_log"]>

  export type operation_logSelectScalar = {
    id?: boolean
    user_id?: boolean
    method?: boolean
    uri?: boolean
    ip?: boolean
    input?: boolean
    created_at?: boolean
  }

  export type operation_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "method" | "uri" | "ip" | "input" | "created_at", ExtArgs["result"]["operation_log"]>
  export type operation_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type operation_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type operation_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $operation_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operation_log"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      method: string
      uri: string
      ip: string
      input: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["operation_log"]>
    composites: {}
  }

  type operation_logGetPayload<S extends boolean | null | undefined | operation_logDefaultArgs> = $Result.GetResult<Prisma.$operation_logPayload, S>

  type operation_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operation_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Operation_logCountAggregateInputType | true
    }

  export interface operation_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operation_log'], meta: { name: 'operation_log' } }
    /**
     * Find zero or one Operation_log that matches the filter.
     * @param {operation_logFindUniqueArgs} args - Arguments to find a Operation_log
     * @example
     * // Get one Operation_log
     * const operation_log = await prisma.operation_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operation_logFindUniqueArgs>(args: SelectSubset<T, operation_logFindUniqueArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operation_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operation_logFindUniqueOrThrowArgs} args - Arguments to find a Operation_log
     * @example
     * // Get one Operation_log
     * const operation_log = await prisma.operation_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operation_logFindUniqueOrThrowArgs>(args: SelectSubset<T, operation_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logFindFirstArgs} args - Arguments to find a Operation_log
     * @example
     * // Get one Operation_log
     * const operation_log = await prisma.operation_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operation_logFindFirstArgs>(args?: SelectSubset<T, operation_logFindFirstArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logFindFirstOrThrowArgs} args - Arguments to find a Operation_log
     * @example
     * // Get one Operation_log
     * const operation_log = await prisma.operation_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operation_logFindFirstOrThrowArgs>(args?: SelectSubset<T, operation_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operation_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operation_logs
     * const operation_logs = await prisma.operation_log.findMany()
     * 
     * // Get first 10 Operation_logs
     * const operation_logs = await prisma.operation_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operation_logWithIdOnly = await prisma.operation_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends operation_logFindManyArgs>(args?: SelectSubset<T, operation_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operation_log.
     * @param {operation_logCreateArgs} args - Arguments to create a Operation_log.
     * @example
     * // Create one Operation_log
     * const Operation_log = await prisma.operation_log.create({
     *   data: {
     *     // ... data to create a Operation_log
     *   }
     * })
     * 
     */
    create<T extends operation_logCreateArgs>(args: SelectSubset<T, operation_logCreateArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operation_logs.
     * @param {operation_logCreateManyArgs} args - Arguments to create many Operation_logs.
     * @example
     * // Create many Operation_logs
     * const operation_log = await prisma.operation_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operation_logCreateManyArgs>(args?: SelectSubset<T, operation_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operation_logs and returns the data saved in the database.
     * @param {operation_logCreateManyAndReturnArgs} args - Arguments to create many Operation_logs.
     * @example
     * // Create many Operation_logs
     * const operation_log = await prisma.operation_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operation_logs and only return the `id`
     * const operation_logWithIdOnly = await prisma.operation_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends operation_logCreateManyAndReturnArgs>(args?: SelectSubset<T, operation_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operation_log.
     * @param {operation_logDeleteArgs} args - Arguments to delete one Operation_log.
     * @example
     * // Delete one Operation_log
     * const Operation_log = await prisma.operation_log.delete({
     *   where: {
     *     // ... filter to delete one Operation_log
     *   }
     * })
     * 
     */
    delete<T extends operation_logDeleteArgs>(args: SelectSubset<T, operation_logDeleteArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operation_log.
     * @param {operation_logUpdateArgs} args - Arguments to update one Operation_log.
     * @example
     * // Update one Operation_log
     * const operation_log = await prisma.operation_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operation_logUpdateArgs>(args: SelectSubset<T, operation_logUpdateArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operation_logs.
     * @param {operation_logDeleteManyArgs} args - Arguments to filter Operation_logs to delete.
     * @example
     * // Delete a few Operation_logs
     * const { count } = await prisma.operation_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operation_logDeleteManyArgs>(args?: SelectSubset<T, operation_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operation_logs
     * const operation_log = await prisma.operation_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operation_logUpdateManyArgs>(args: SelectSubset<T, operation_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operation_logs and returns the data updated in the database.
     * @param {operation_logUpdateManyAndReturnArgs} args - Arguments to update many Operation_logs.
     * @example
     * // Update many Operation_logs
     * const operation_log = await prisma.operation_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operation_logs and only return the `id`
     * const operation_logWithIdOnly = await prisma.operation_log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends operation_logUpdateManyAndReturnArgs>(args: SelectSubset<T, operation_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operation_log.
     * @param {operation_logUpsertArgs} args - Arguments to update or create a Operation_log.
     * @example
     * // Update or create a Operation_log
     * const operation_log = await prisma.operation_log.upsert({
     *   create: {
     *     // ... data to create a Operation_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation_log we want to update
     *   }
     * })
     */
    upsert<T extends operation_logUpsertArgs>(args: SelectSubset<T, operation_logUpsertArgs<ExtArgs>>): Prisma__operation_logClient<$Result.GetResult<Prisma.$operation_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logCountArgs} args - Arguments to filter Operation_logs to count.
     * @example
     * // Count the number of Operation_logs
     * const count = await prisma.operation_log.count({
     *   where: {
     *     // ... the filter for the Operation_logs we want to count
     *   }
     * })
    **/
    count<T extends operation_logCountArgs>(
      args?: Subset<T, operation_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operation_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operation_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Operation_logAggregateArgs>(args: Subset<T, Operation_logAggregateArgs>): Prisma.PrismaPromise<GetOperation_logAggregateType<T>>

    /**
     * Group by Operation_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends operation_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operation_logGroupByArgs['orderBy'] }
        : { orderBy?: operation_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, operation_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperation_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operation_log model
   */
  readonly fields: operation_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operation_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operation_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the operation_log model
   */
  interface operation_logFieldRefs {
    readonly id: FieldRef<"operation_log", 'Int'>
    readonly user_id: FieldRef<"operation_log", 'Int'>
    readonly method: FieldRef<"operation_log", 'String'>
    readonly uri: FieldRef<"operation_log", 'String'>
    readonly ip: FieldRef<"operation_log", 'String'>
    readonly input: FieldRef<"operation_log", 'Json'>
    readonly created_at: FieldRef<"operation_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * operation_log findUnique
   */
  export type operation_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * Filter, which operation_log to fetch.
     */
    where: operation_logWhereUniqueInput
  }

  /**
   * operation_log findUniqueOrThrow
   */
  export type operation_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * Filter, which operation_log to fetch.
     */
    where: operation_logWhereUniqueInput
  }

  /**
   * operation_log findFirst
   */
  export type operation_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * Filter, which operation_log to fetch.
     */
    where?: operation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logOrderByWithRelationInput | operation_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operation_logs.
     */
    cursor?: operation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operation_logs.
     */
    distinct?: Operation_logScalarFieldEnum | Operation_logScalarFieldEnum[]
  }

  /**
   * operation_log findFirstOrThrow
   */
  export type operation_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * Filter, which operation_log to fetch.
     */
    where?: operation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logOrderByWithRelationInput | operation_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operation_logs.
     */
    cursor?: operation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operation_logs.
     */
    distinct?: Operation_logScalarFieldEnum | Operation_logScalarFieldEnum[]
  }

  /**
   * operation_log findMany
   */
  export type operation_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * Filter, which operation_logs to fetch.
     */
    where?: operation_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logOrderByWithRelationInput | operation_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operation_logs.
     */
    cursor?: operation_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    distinct?: Operation_logScalarFieldEnum | Operation_logScalarFieldEnum[]
  }

  /**
   * operation_log create
   */
  export type operation_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * The data needed to create a operation_log.
     */
    data: XOR<operation_logCreateInput, operation_logUncheckedCreateInput>
  }

  /**
   * operation_log createMany
   */
  export type operation_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operation_logs.
     */
    data: operation_logCreateManyInput | operation_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operation_log createManyAndReturn
   */
  export type operation_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * The data used to create many operation_logs.
     */
    data: operation_logCreateManyInput | operation_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * operation_log update
   */
  export type operation_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * The data needed to update a operation_log.
     */
    data: XOR<operation_logUpdateInput, operation_logUncheckedUpdateInput>
    /**
     * Choose, which operation_log to update.
     */
    where: operation_logWhereUniqueInput
  }

  /**
   * operation_log updateMany
   */
  export type operation_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operation_logs.
     */
    data: XOR<operation_logUpdateManyMutationInput, operation_logUncheckedUpdateManyInput>
    /**
     * Filter which operation_logs to update
     */
    where?: operation_logWhereInput
    /**
     * Limit how many operation_logs to update.
     */
    limit?: number
  }

  /**
   * operation_log updateManyAndReturn
   */
  export type operation_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * The data used to update operation_logs.
     */
    data: XOR<operation_logUpdateManyMutationInput, operation_logUncheckedUpdateManyInput>
    /**
     * Filter which operation_logs to update
     */
    where?: operation_logWhereInput
    /**
     * Limit how many operation_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * operation_log upsert
   */
  export type operation_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * The filter to search for the operation_log to update in case it exists.
     */
    where: operation_logWhereUniqueInput
    /**
     * In case the operation_log found by the `where` argument doesn't exist, create a new operation_log with this data.
     */
    create: XOR<operation_logCreateInput, operation_logUncheckedCreateInput>
    /**
     * In case the operation_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operation_logUpdateInput, operation_logUncheckedUpdateInput>
  }

  /**
   * operation_log delete
   */
  export type operation_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
    /**
     * Filter which operation_log to delete.
     */
    where: operation_logWhereUniqueInput
  }

  /**
   * operation_log deleteMany
   */
  export type operation_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operation_logs to delete
     */
    where?: operation_logWhereInput
    /**
     * Limit how many operation_logs to delete.
     */
    limit?: number
  }

  /**
   * operation_log without action
   */
  export type operation_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_log
     */
    select?: operation_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_log
     */
    omit?: operation_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operation_logInclude<ExtArgs> | null
  }


  /**
   * Model authUser
   */

  export type AggregateAuthUser = {
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  export type AuthUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    twoFactorEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    twoFactorEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthUserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    emailVerified: number
    image: number
    twoFactorEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthUserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthUserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthUserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authUser to aggregate.
     */
    where?: authUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authUsers to fetch.
     */
    orderBy?: authUserOrderByWithRelationInput | authUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authUsers
    **/
    _count?: true | AuthUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthUserMaxAggregateInputType
  }

  export type GetAuthUserAggregateType<T extends AuthUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthUser[P]>
      : GetScalarType<T[P], AggregateAuthUser[P]>
  }




  export type authUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authUserWhereInput
    orderBy?: authUserOrderByWithAggregationInput | authUserOrderByWithAggregationInput[]
    by: AuthUserScalarFieldEnum[] | AuthUserScalarFieldEnum
    having?: authUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthUserCountAggregateInputType | true
    _min?: AuthUserMinAggregateInputType
    _max?: AuthUserMaxAggregateInputType
  }

  export type AuthUserGroupByOutputType = {
    id: string
    email: string
    name: string
    emailVerified: boolean
    image: string | null
    twoFactorEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  type GetAuthUserGroupByPayload<T extends authUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
            : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
        }
      >
    >


  export type authUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | authUser$accountsArgs<ExtArgs>
    sessions?: boolean | authUser$sessionsArgs<ExtArgs>
    twoFactor?: boolean | authUser$twoFactorArgs<ExtArgs>
    _count?: boolean | AuthUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authUser"]>

  export type authUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type authUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type authUserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type authUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "emailVerified" | "image" | "twoFactorEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["authUser"]>
  export type authUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | authUser$accountsArgs<ExtArgs>
    sessions?: boolean | authUser$sessionsArgs<ExtArgs>
    twoFactor?: boolean | authUser$twoFactorArgs<ExtArgs>
    _count?: boolean | AuthUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type authUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authUser"
    objects: {
      accounts: Prisma.$authAccountPayload<ExtArgs>[]
      sessions: Prisma.$authSessionPayload<ExtArgs>[]
      twoFactor: Prisma.$authTwoFactorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      emailVerified: boolean
      image: string | null
      twoFactorEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authUser"]>
    composites: {}
  }

  type authUserGetPayload<S extends boolean | null | undefined | authUserDefaultArgs> = $Result.GetResult<Prisma.$authUserPayload, S>

  type authUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthUserCountAggregateInputType | true
    }

  export interface authUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authUser'], meta: { name: 'authUser' } }
    /**
     * Find zero or one AuthUser that matches the filter.
     * @param {authUserFindUniqueArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authUserFindUniqueArgs>(args: SelectSubset<T, authUserFindUniqueArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authUserFindUniqueOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authUserFindUniqueOrThrowArgs>(args: SelectSubset<T, authUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUserFindFirstArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authUserFindFirstArgs>(args?: SelectSubset<T, authUserFindFirstArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUserFindFirstOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authUserFindFirstOrThrowArgs>(args?: SelectSubset<T, authUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthUsers
     * const authUsers = await prisma.authUser.findMany()
     * 
     * // Get first 10 AuthUsers
     * const authUsers = await prisma.authUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authUserWithIdOnly = await prisma.authUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authUserFindManyArgs>(args?: SelectSubset<T, authUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthUser.
     * @param {authUserCreateArgs} args - Arguments to create a AuthUser.
     * @example
     * // Create one AuthUser
     * const AuthUser = await prisma.authUser.create({
     *   data: {
     *     // ... data to create a AuthUser
     *   }
     * })
     * 
     */
    create<T extends authUserCreateArgs>(args: SelectSubset<T, authUserCreateArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthUsers.
     * @param {authUserCreateManyArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authUserCreateManyArgs>(args?: SelectSubset<T, authUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthUsers and returns the data saved in the database.
     * @param {authUserCreateManyAndReturnArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authUserCreateManyAndReturnArgs>(args?: SelectSubset<T, authUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthUser.
     * @param {authUserDeleteArgs} args - Arguments to delete one AuthUser.
     * @example
     * // Delete one AuthUser
     * const AuthUser = await prisma.authUser.delete({
     *   where: {
     *     // ... filter to delete one AuthUser
     *   }
     * })
     * 
     */
    delete<T extends authUserDeleteArgs>(args: SelectSubset<T, authUserDeleteArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthUser.
     * @param {authUserUpdateArgs} args - Arguments to update one AuthUser.
     * @example
     * // Update one AuthUser
     * const authUser = await prisma.authUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authUserUpdateArgs>(args: SelectSubset<T, authUserUpdateArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthUsers.
     * @param {authUserDeleteManyArgs} args - Arguments to filter AuthUsers to delete.
     * @example
     * // Delete a few AuthUsers
     * const { count } = await prisma.authUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authUserDeleteManyArgs>(args?: SelectSubset<T, authUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authUserUpdateManyArgs>(args: SelectSubset<T, authUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers and returns the data updated in the database.
     * @param {authUserUpdateManyAndReturnArgs} args - Arguments to update many AuthUsers.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authUserUpdateManyAndReturnArgs>(args: SelectSubset<T, authUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthUser.
     * @param {authUserUpsertArgs} args - Arguments to update or create a AuthUser.
     * @example
     * // Update or create a AuthUser
     * const authUser = await prisma.authUser.upsert({
     *   create: {
     *     // ... data to create a AuthUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthUser we want to update
     *   }
     * })
     */
    upsert<T extends authUserUpsertArgs>(args: SelectSubset<T, authUserUpsertArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUserCountArgs} args - Arguments to filter AuthUsers to count.
     * @example
     * // Count the number of AuthUsers
     * const count = await prisma.authUser.count({
     *   where: {
     *     // ... the filter for the AuthUsers we want to count
     *   }
     * })
    **/
    count<T extends authUserCountArgs>(
      args?: Subset<T, authUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthUserAggregateArgs>(args: Subset<T, AuthUserAggregateArgs>): Prisma.PrismaPromise<GetAuthUserAggregateType<T>>

    /**
     * Group by AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authUserGroupByArgs['orderBy'] }
        : { orderBy?: authUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authUser model
   */
  readonly fields: authUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends authUser$accountsArgs<ExtArgs> = {}>(args?: Subset<T, authUser$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends authUser$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, authUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    twoFactor<T extends authUser$twoFactorArgs<ExtArgs> = {}>(args?: Subset<T, authUser$twoFactorArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authUser model
   */
  interface authUserFieldRefs {
    readonly id: FieldRef<"authUser", 'String'>
    readonly email: FieldRef<"authUser", 'String'>
    readonly name: FieldRef<"authUser", 'String'>
    readonly emailVerified: FieldRef<"authUser", 'Boolean'>
    readonly image: FieldRef<"authUser", 'String'>
    readonly twoFactorEnabled: FieldRef<"authUser", 'Boolean'>
    readonly createdAt: FieldRef<"authUser", 'DateTime'>
    readonly updatedAt: FieldRef<"authUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authUser findUnique
   */
  export type authUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * Filter, which authUser to fetch.
     */
    where: authUserWhereUniqueInput
  }

  /**
   * authUser findUniqueOrThrow
   */
  export type authUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * Filter, which authUser to fetch.
     */
    where: authUserWhereUniqueInput
  }

  /**
   * authUser findFirst
   */
  export type authUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * Filter, which authUser to fetch.
     */
    where?: authUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authUsers to fetch.
     */
    orderBy?: authUserOrderByWithRelationInput | authUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authUsers.
     */
    cursor?: authUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * authUser findFirstOrThrow
   */
  export type authUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * Filter, which authUser to fetch.
     */
    where?: authUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authUsers to fetch.
     */
    orderBy?: authUserOrderByWithRelationInput | authUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authUsers.
     */
    cursor?: authUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * authUser findMany
   */
  export type authUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * Filter, which authUsers to fetch.
     */
    where?: authUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authUsers to fetch.
     */
    orderBy?: authUserOrderByWithRelationInput | authUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authUsers.
     */
    cursor?: authUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authUsers.
     */
    skip?: number
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * authUser create
   */
  export type authUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * The data needed to create a authUser.
     */
    data: XOR<authUserCreateInput, authUserUncheckedCreateInput>
  }

  /**
   * authUser createMany
   */
  export type authUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authUsers.
     */
    data: authUserCreateManyInput | authUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authUser createManyAndReturn
   */
  export type authUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * The data used to create many authUsers.
     */
    data: authUserCreateManyInput | authUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authUser update
   */
  export type authUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * The data needed to update a authUser.
     */
    data: XOR<authUserUpdateInput, authUserUncheckedUpdateInput>
    /**
     * Choose, which authUser to update.
     */
    where: authUserWhereUniqueInput
  }

  /**
   * authUser updateMany
   */
  export type authUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authUsers.
     */
    data: XOR<authUserUpdateManyMutationInput, authUserUncheckedUpdateManyInput>
    /**
     * Filter which authUsers to update
     */
    where?: authUserWhereInput
    /**
     * Limit how many authUsers to update.
     */
    limit?: number
  }

  /**
   * authUser updateManyAndReturn
   */
  export type authUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * The data used to update authUsers.
     */
    data: XOR<authUserUpdateManyMutationInput, authUserUncheckedUpdateManyInput>
    /**
     * Filter which authUsers to update
     */
    where?: authUserWhereInput
    /**
     * Limit how many authUsers to update.
     */
    limit?: number
  }

  /**
   * authUser upsert
   */
  export type authUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * The filter to search for the authUser to update in case it exists.
     */
    where: authUserWhereUniqueInput
    /**
     * In case the authUser found by the `where` argument doesn't exist, create a new authUser with this data.
     */
    create: XOR<authUserCreateInput, authUserUncheckedCreateInput>
    /**
     * In case the authUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authUserUpdateInput, authUserUncheckedUpdateInput>
  }

  /**
   * authUser delete
   */
  export type authUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
    /**
     * Filter which authUser to delete.
     */
    where: authUserWhereUniqueInput
  }

  /**
   * authUser deleteMany
   */
  export type authUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authUsers to delete
     */
    where?: authUserWhereInput
    /**
     * Limit how many authUsers to delete.
     */
    limit?: number
  }

  /**
   * authUser.accounts
   */
  export type authUser$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    where?: authAccountWhereInput
    orderBy?: authAccountOrderByWithRelationInput | authAccountOrderByWithRelationInput[]
    cursor?: authAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * authUser.sessions
   */
  export type authUser$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    where?: authSessionWhereInput
    orderBy?: authSessionOrderByWithRelationInput | authSessionOrderByWithRelationInput[]
    cursor?: authSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * authUser.twoFactor
   */
  export type authUser$twoFactorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    where?: authTwoFactorWhereInput
  }

  /**
   * authUser without action
   */
  export type authUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authUser
     */
    select?: authUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authUser
     */
    omit?: authUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authUserInclude<ExtArgs> | null
  }


  /**
   * Model authAccount
   */

  export type AggregateAuthAccount = {
    _count: AuthAccountCountAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  export type AuthAccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthAccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authAccount to aggregate.
     */
    where?: authAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authAccounts to fetch.
     */
    orderBy?: authAccountOrderByWithRelationInput | authAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authAccounts
    **/
    _count?: true | AuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthAccountMaxAggregateInputType
  }

  export type GetAuthAccountAggregateType<T extends AuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthAccount[P]>
      : GetScalarType<T[P], AggregateAuthAccount[P]>
  }




  export type authAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authAccountWhereInput
    orderBy?: authAccountOrderByWithAggregationInput | authAccountOrderByWithAggregationInput[]
    by: AuthAccountScalarFieldEnum[] | AuthAccountScalarFieldEnum
    having?: authAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthAccountCountAggregateInputType | true
    _min?: AuthAccountMinAggregateInputType
    _max?: AuthAccountMaxAggregateInputType
  }

  export type AuthAccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuthAccountCountAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  type GetAuthAccountGroupByPayload<T extends authAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type authAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type authAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type authAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type authAccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type authAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["authAccount"]>
  export type authAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }
  export type authAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }
  export type authAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }

  export type $authAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authAccount"
    objects: {
      user: Prisma.$authUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authAccount"]>
    composites: {}
  }

  type authAccountGetPayload<S extends boolean | null | undefined | authAccountDefaultArgs> = $Result.GetResult<Prisma.$authAccountPayload, S>

  type authAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthAccountCountAggregateInputType | true
    }

  export interface authAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authAccount'], meta: { name: 'authAccount' } }
    /**
     * Find zero or one AuthAccount that matches the filter.
     * @param {authAccountFindUniqueArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authAccountFindUniqueArgs>(args: SelectSubset<T, authAccountFindUniqueArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authAccountFindUniqueOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, authAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authAccountFindFirstArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authAccountFindFirstArgs>(args?: SelectSubset<T, authAccountFindFirstArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authAccountFindFirstOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, authAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany()
     * 
     * // Get first 10 AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authAccountFindManyArgs>(args?: SelectSubset<T, authAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthAccount.
     * @param {authAccountCreateArgs} args - Arguments to create a AuthAccount.
     * @example
     * // Create one AuthAccount
     * const AuthAccount = await prisma.authAccount.create({
     *   data: {
     *     // ... data to create a AuthAccount
     *   }
     * })
     * 
     */
    create<T extends authAccountCreateArgs>(args: SelectSubset<T, authAccountCreateArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthAccounts.
     * @param {authAccountCreateManyArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authAccountCreateManyArgs>(args?: SelectSubset<T, authAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthAccounts and returns the data saved in the database.
     * @param {authAccountCreateManyAndReturnArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, authAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthAccount.
     * @param {authAccountDeleteArgs} args - Arguments to delete one AuthAccount.
     * @example
     * // Delete one AuthAccount
     * const AuthAccount = await prisma.authAccount.delete({
     *   where: {
     *     // ... filter to delete one AuthAccount
     *   }
     * })
     * 
     */
    delete<T extends authAccountDeleteArgs>(args: SelectSubset<T, authAccountDeleteArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthAccount.
     * @param {authAccountUpdateArgs} args - Arguments to update one AuthAccount.
     * @example
     * // Update one AuthAccount
     * const authAccount = await prisma.authAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authAccountUpdateArgs>(args: SelectSubset<T, authAccountUpdateArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthAccounts.
     * @param {authAccountDeleteManyArgs} args - Arguments to filter AuthAccounts to delete.
     * @example
     * // Delete a few AuthAccounts
     * const { count } = await prisma.authAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authAccountDeleteManyArgs>(args?: SelectSubset<T, authAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authAccountUpdateManyArgs>(args: SelectSubset<T, authAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts and returns the data updated in the database.
     * @param {authAccountUpdateManyAndReturnArgs} args - Arguments to update many AuthAccounts.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, authAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthAccount.
     * @param {authAccountUpsertArgs} args - Arguments to update or create a AuthAccount.
     * @example
     * // Update or create a AuthAccount
     * const authAccount = await prisma.authAccount.upsert({
     *   create: {
     *     // ... data to create a AuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends authAccountUpsertArgs>(args: SelectSubset<T, authAccountUpsertArgs<ExtArgs>>): Prisma__authAccountClient<$Result.GetResult<Prisma.$authAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authAccountCountArgs} args - Arguments to filter AuthAccounts to count.
     * @example
     * // Count the number of AuthAccounts
     * const count = await prisma.authAccount.count({
     *   where: {
     *     // ... the filter for the AuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends authAccountCountArgs>(
      args?: Subset<T, authAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAccountAggregateArgs>(args: Subset<T, AuthAccountAggregateArgs>): Prisma.PrismaPromise<GetAuthAccountAggregateType<T>>

    /**
     * Group by AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authAccountGroupByArgs['orderBy'] }
        : { orderBy?: authAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authAccount model
   */
  readonly fields: authAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends authUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authUserDefaultArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authAccount model
   */
  interface authAccountFieldRefs {
    readonly id: FieldRef<"authAccount", 'String'>
    readonly accountId: FieldRef<"authAccount", 'String'>
    readonly providerId: FieldRef<"authAccount", 'String'>
    readonly userId: FieldRef<"authAccount", 'String'>
    readonly accessToken: FieldRef<"authAccount", 'String'>
    readonly refreshToken: FieldRef<"authAccount", 'String'>
    readonly idToken: FieldRef<"authAccount", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"authAccount", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"authAccount", 'DateTime'>
    readonly scope: FieldRef<"authAccount", 'String'>
    readonly password: FieldRef<"authAccount", 'String'>
    readonly createdAt: FieldRef<"authAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"authAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authAccount findUnique
   */
  export type authAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * Filter, which authAccount to fetch.
     */
    where: authAccountWhereUniqueInput
  }

  /**
   * authAccount findUniqueOrThrow
   */
  export type authAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * Filter, which authAccount to fetch.
     */
    where: authAccountWhereUniqueInput
  }

  /**
   * authAccount findFirst
   */
  export type authAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * Filter, which authAccount to fetch.
     */
    where?: authAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authAccounts to fetch.
     */
    orderBy?: authAccountOrderByWithRelationInput | authAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authAccounts.
     */
    cursor?: authAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * authAccount findFirstOrThrow
   */
  export type authAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * Filter, which authAccount to fetch.
     */
    where?: authAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authAccounts to fetch.
     */
    orderBy?: authAccountOrderByWithRelationInput | authAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authAccounts.
     */
    cursor?: authAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * authAccount findMany
   */
  export type authAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * Filter, which authAccounts to fetch.
     */
    where?: authAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authAccounts to fetch.
     */
    orderBy?: authAccountOrderByWithRelationInput | authAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authAccounts.
     */
    cursor?: authAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authAccounts.
     */
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * authAccount create
   */
  export type authAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a authAccount.
     */
    data: XOR<authAccountCreateInput, authAccountUncheckedCreateInput>
  }

  /**
   * authAccount createMany
   */
  export type authAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authAccounts.
     */
    data: authAccountCreateManyInput | authAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authAccount createManyAndReturn
   */
  export type authAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * The data used to create many authAccounts.
     */
    data: authAccountCreateManyInput | authAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * authAccount update
   */
  export type authAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a authAccount.
     */
    data: XOR<authAccountUpdateInput, authAccountUncheckedUpdateInput>
    /**
     * Choose, which authAccount to update.
     */
    where: authAccountWhereUniqueInput
  }

  /**
   * authAccount updateMany
   */
  export type authAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authAccounts.
     */
    data: XOR<authAccountUpdateManyMutationInput, authAccountUncheckedUpdateManyInput>
    /**
     * Filter which authAccounts to update
     */
    where?: authAccountWhereInput
    /**
     * Limit how many authAccounts to update.
     */
    limit?: number
  }

  /**
   * authAccount updateManyAndReturn
   */
  export type authAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * The data used to update authAccounts.
     */
    data: XOR<authAccountUpdateManyMutationInput, authAccountUncheckedUpdateManyInput>
    /**
     * Filter which authAccounts to update
     */
    where?: authAccountWhereInput
    /**
     * Limit how many authAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * authAccount upsert
   */
  export type authAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the authAccount to update in case it exists.
     */
    where: authAccountWhereUniqueInput
    /**
     * In case the authAccount found by the `where` argument doesn't exist, create a new authAccount with this data.
     */
    create: XOR<authAccountCreateInput, authAccountUncheckedCreateInput>
    /**
     * In case the authAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authAccountUpdateInput, authAccountUncheckedUpdateInput>
  }

  /**
   * authAccount delete
   */
  export type authAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
    /**
     * Filter which authAccount to delete.
     */
    where: authAccountWhereUniqueInput
  }

  /**
   * authAccount deleteMany
   */
  export type authAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authAccounts to delete
     */
    where?: authAccountWhereInput
    /**
     * Limit how many authAccounts to delete.
     */
    limit?: number
  }

  /**
   * authAccount without action
   */
  export type authAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authAccount
     */
    select?: authAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authAccount
     */
    omit?: authAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authAccountInclude<ExtArgs> | null
  }


  /**
   * Model authSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authSession to aggregate.
     */
    where?: authSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authSessions to fetch.
     */
    orderBy?: authSessionOrderByWithRelationInput | authSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type authSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authSessionWhereInput
    orderBy?: authSessionOrderByWithAggregationInput | authSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: authSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends authSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type authSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type authSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type authSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type authSessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type authSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["authSession"]>
  export type authSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }
  export type authSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }
  export type authSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }

  export type $authSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authSession"
    objects: {
      user: Prisma.$authUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type authSessionGetPayload<S extends boolean | null | undefined | authSessionDefaultArgs> = $Result.GetResult<Prisma.$authSessionPayload, S>

  type authSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface authSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authSession'], meta: { name: 'authSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {authSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authSessionFindUniqueArgs>(args: SelectSubset<T, authSessionFindUniqueArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, authSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authSessionFindFirstArgs>(args?: SelectSubset<T, authSessionFindFirstArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, authSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authSessionFindManyArgs>(args?: SelectSubset<T, authSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {authSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends authSessionCreateArgs>(args: SelectSubset<T, authSessionCreateArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {authSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authSessionCreateManyArgs>(args?: SelectSubset<T, authSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {authSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, authSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthSession.
     * @param {authSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends authSessionDeleteArgs>(args: SelectSubset<T, authSessionDeleteArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {authSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authSessionUpdateArgs>(args: SelectSubset<T, authSessionUpdateArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {authSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authSessionDeleteManyArgs>(args?: SelectSubset<T, authSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authSessionUpdateManyArgs>(args: SelectSubset<T, authSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions and returns the data updated in the database.
     * @param {authSessionUpdateManyAndReturnArgs} args - Arguments to update many AuthSessions.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, authSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthSession.
     * @param {authSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends authSessionUpsertArgs>(args: SelectSubset<T, authSessionUpsertArgs<ExtArgs>>): Prisma__authSessionClient<$Result.GetResult<Prisma.$authSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends authSessionCountArgs>(
      args?: Subset<T, authSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authSessionGroupByArgs['orderBy'] }
        : { orderBy?: authSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authSession model
   */
  readonly fields: authSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends authUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authUserDefaultArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authSession model
   */
  interface authSessionFieldRefs {
    readonly id: FieldRef<"authSession", 'String'>
    readonly expiresAt: FieldRef<"authSession", 'DateTime'>
    readonly token: FieldRef<"authSession", 'String'>
    readonly createdAt: FieldRef<"authSession", 'DateTime'>
    readonly updatedAt: FieldRef<"authSession", 'DateTime'>
    readonly ipAddress: FieldRef<"authSession", 'String'>
    readonly userAgent: FieldRef<"authSession", 'String'>
    readonly userId: FieldRef<"authSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * authSession findUnique
   */
  export type authSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * Filter, which authSession to fetch.
     */
    where: authSessionWhereUniqueInput
  }

  /**
   * authSession findUniqueOrThrow
   */
  export type authSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * Filter, which authSession to fetch.
     */
    where: authSessionWhereUniqueInput
  }

  /**
   * authSession findFirst
   */
  export type authSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * Filter, which authSession to fetch.
     */
    where?: authSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authSessions to fetch.
     */
    orderBy?: authSessionOrderByWithRelationInput | authSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authSessions.
     */
    cursor?: authSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * authSession findFirstOrThrow
   */
  export type authSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * Filter, which authSession to fetch.
     */
    where?: authSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authSessions to fetch.
     */
    orderBy?: authSessionOrderByWithRelationInput | authSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authSessions.
     */
    cursor?: authSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * authSession findMany
   */
  export type authSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * Filter, which authSessions to fetch.
     */
    where?: authSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authSessions to fetch.
     */
    orderBy?: authSessionOrderByWithRelationInput | authSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authSessions.
     */
    cursor?: authSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authSessions.
     */
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * authSession create
   */
  export type authSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a authSession.
     */
    data: XOR<authSessionCreateInput, authSessionUncheckedCreateInput>
  }

  /**
   * authSession createMany
   */
  export type authSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authSessions.
     */
    data: authSessionCreateManyInput | authSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authSession createManyAndReturn
   */
  export type authSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * The data used to create many authSessions.
     */
    data: authSessionCreateManyInput | authSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * authSession update
   */
  export type authSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a authSession.
     */
    data: XOR<authSessionUpdateInput, authSessionUncheckedUpdateInput>
    /**
     * Choose, which authSession to update.
     */
    where: authSessionWhereUniqueInput
  }

  /**
   * authSession updateMany
   */
  export type authSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authSessions.
     */
    data: XOR<authSessionUpdateManyMutationInput, authSessionUncheckedUpdateManyInput>
    /**
     * Filter which authSessions to update
     */
    where?: authSessionWhereInput
    /**
     * Limit how many authSessions to update.
     */
    limit?: number
  }

  /**
   * authSession updateManyAndReturn
   */
  export type authSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * The data used to update authSessions.
     */
    data: XOR<authSessionUpdateManyMutationInput, authSessionUncheckedUpdateManyInput>
    /**
     * Filter which authSessions to update
     */
    where?: authSessionWhereInput
    /**
     * Limit how many authSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * authSession upsert
   */
  export type authSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the authSession to update in case it exists.
     */
    where: authSessionWhereUniqueInput
    /**
     * In case the authSession found by the `where` argument doesn't exist, create a new authSession with this data.
     */
    create: XOR<authSessionCreateInput, authSessionUncheckedCreateInput>
    /**
     * In case the authSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authSessionUpdateInput, authSessionUncheckedUpdateInput>
  }

  /**
   * authSession delete
   */
  export type authSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
    /**
     * Filter which authSession to delete.
     */
    where: authSessionWhereUniqueInput
  }

  /**
   * authSession deleteMany
   */
  export type authSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authSessions to delete
     */
    where?: authSessionWhereInput
    /**
     * Limit how many authSessions to delete.
     */
    limit?: number
  }

  /**
   * authSession without action
   */
  export type authSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authSession
     */
    select?: authSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authSession
     */
    omit?: authSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authSessionInclude<ExtArgs> | null
  }


  /**
   * Model authVerification
   */

  export type AggregateAuthVerification = {
    _count: AuthVerificationCountAggregateOutputType | null
    _min: AuthVerificationMinAggregateOutputType | null
    _max: AuthVerificationMaxAggregateOutputType | null
  }

  export type AuthVerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthVerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authVerification to aggregate.
     */
    where?: authVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authVerifications to fetch.
     */
    orderBy?: authVerificationOrderByWithRelationInput | authVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authVerifications
    **/
    _count?: true | AuthVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthVerificationMaxAggregateInputType
  }

  export type GetAuthVerificationAggregateType<T extends AuthVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthVerification[P]>
      : GetScalarType<T[P], AggregateAuthVerification[P]>
  }




  export type authVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authVerificationWhereInput
    orderBy?: authVerificationOrderByWithAggregationInput | authVerificationOrderByWithAggregationInput[]
    by: AuthVerificationScalarFieldEnum[] | AuthVerificationScalarFieldEnum
    having?: authVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthVerificationCountAggregateInputType | true
    _min?: AuthVerificationMinAggregateInputType
    _max?: AuthVerificationMaxAggregateInputType
  }

  export type AuthVerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: AuthVerificationCountAggregateOutputType | null
    _min: AuthVerificationMinAggregateOutputType | null
    _max: AuthVerificationMaxAggregateOutputType | null
  }

  type GetAuthVerificationGroupByPayload<T extends authVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthVerificationGroupByOutputType[P]>
        }
      >
    >


  export type authVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type authVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type authVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type authVerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type authVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["authVerification"]>

  export type $authVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authVerification"]>
    composites: {}
  }

  type authVerificationGetPayload<S extends boolean | null | undefined | authVerificationDefaultArgs> = $Result.GetResult<Prisma.$authVerificationPayload, S>

  type authVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthVerificationCountAggregateInputType | true
    }

  export interface authVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authVerification'], meta: { name: 'authVerification' } }
    /**
     * Find zero or one AuthVerification that matches the filter.
     * @param {authVerificationFindUniqueArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authVerificationFindUniqueArgs>(args: SelectSubset<T, authVerificationFindUniqueArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authVerificationFindUniqueOrThrowArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, authVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authVerificationFindFirstArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authVerificationFindFirstArgs>(args?: SelectSubset<T, authVerificationFindFirstArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authVerificationFindFirstOrThrowArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, authVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthVerifications
     * const authVerifications = await prisma.authVerification.findMany()
     * 
     * // Get first 10 AuthVerifications
     * const authVerifications = await prisma.authVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authVerificationFindManyArgs>(args?: SelectSubset<T, authVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthVerification.
     * @param {authVerificationCreateArgs} args - Arguments to create a AuthVerification.
     * @example
     * // Create one AuthVerification
     * const AuthVerification = await prisma.authVerification.create({
     *   data: {
     *     // ... data to create a AuthVerification
     *   }
     * })
     * 
     */
    create<T extends authVerificationCreateArgs>(args: SelectSubset<T, authVerificationCreateArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthVerifications.
     * @param {authVerificationCreateManyArgs} args - Arguments to create many AuthVerifications.
     * @example
     * // Create many AuthVerifications
     * const authVerification = await prisma.authVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authVerificationCreateManyArgs>(args?: SelectSubset<T, authVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthVerifications and returns the data saved in the database.
     * @param {authVerificationCreateManyAndReturnArgs} args - Arguments to create many AuthVerifications.
     * @example
     * // Create many AuthVerifications
     * const authVerification = await prisma.authVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthVerifications and only return the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, authVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthVerification.
     * @param {authVerificationDeleteArgs} args - Arguments to delete one AuthVerification.
     * @example
     * // Delete one AuthVerification
     * const AuthVerification = await prisma.authVerification.delete({
     *   where: {
     *     // ... filter to delete one AuthVerification
     *   }
     * })
     * 
     */
    delete<T extends authVerificationDeleteArgs>(args: SelectSubset<T, authVerificationDeleteArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthVerification.
     * @param {authVerificationUpdateArgs} args - Arguments to update one AuthVerification.
     * @example
     * // Update one AuthVerification
     * const authVerification = await prisma.authVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authVerificationUpdateArgs>(args: SelectSubset<T, authVerificationUpdateArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthVerifications.
     * @param {authVerificationDeleteManyArgs} args - Arguments to filter AuthVerifications to delete.
     * @example
     * // Delete a few AuthVerifications
     * const { count } = await prisma.authVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authVerificationDeleteManyArgs>(args?: SelectSubset<T, authVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthVerifications
     * const authVerification = await prisma.authVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authVerificationUpdateManyArgs>(args: SelectSubset<T, authVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthVerifications and returns the data updated in the database.
     * @param {authVerificationUpdateManyAndReturnArgs} args - Arguments to update many AuthVerifications.
     * @example
     * // Update many AuthVerifications
     * const authVerification = await prisma.authVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthVerifications and only return the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, authVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthVerification.
     * @param {authVerificationUpsertArgs} args - Arguments to update or create a AuthVerification.
     * @example
     * // Update or create a AuthVerification
     * const authVerification = await prisma.authVerification.upsert({
     *   create: {
     *     // ... data to create a AuthVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthVerification we want to update
     *   }
     * })
     */
    upsert<T extends authVerificationUpsertArgs>(args: SelectSubset<T, authVerificationUpsertArgs<ExtArgs>>): Prisma__authVerificationClient<$Result.GetResult<Prisma.$authVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authVerificationCountArgs} args - Arguments to filter AuthVerifications to count.
     * @example
     * // Count the number of AuthVerifications
     * const count = await prisma.authVerification.count({
     *   where: {
     *     // ... the filter for the AuthVerifications we want to count
     *   }
     * })
    **/
    count<T extends authVerificationCountArgs>(
      args?: Subset<T, authVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthVerificationAggregateArgs>(args: Subset<T, AuthVerificationAggregateArgs>): Prisma.PrismaPromise<GetAuthVerificationAggregateType<T>>

    /**
     * Group by AuthVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authVerificationGroupByArgs['orderBy'] }
        : { orderBy?: authVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authVerification model
   */
  readonly fields: authVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authVerification model
   */
  interface authVerificationFieldRefs {
    readonly id: FieldRef<"authVerification", 'String'>
    readonly identifier: FieldRef<"authVerification", 'String'>
    readonly value: FieldRef<"authVerification", 'String'>
    readonly expiresAt: FieldRef<"authVerification", 'DateTime'>
    readonly createdAt: FieldRef<"authVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"authVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authVerification findUnique
   */
  export type authVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * Filter, which authVerification to fetch.
     */
    where: authVerificationWhereUniqueInput
  }

  /**
   * authVerification findUniqueOrThrow
   */
  export type authVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * Filter, which authVerification to fetch.
     */
    where: authVerificationWhereUniqueInput
  }

  /**
   * authVerification findFirst
   */
  export type authVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * Filter, which authVerification to fetch.
     */
    where?: authVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authVerifications to fetch.
     */
    orderBy?: authVerificationOrderByWithRelationInput | authVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authVerifications.
     */
    cursor?: authVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authVerifications.
     */
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * authVerification findFirstOrThrow
   */
  export type authVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * Filter, which authVerification to fetch.
     */
    where?: authVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authVerifications to fetch.
     */
    orderBy?: authVerificationOrderByWithRelationInput | authVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authVerifications.
     */
    cursor?: authVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authVerifications.
     */
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * authVerification findMany
   */
  export type authVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * Filter, which authVerifications to fetch.
     */
    where?: authVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authVerifications to fetch.
     */
    orderBy?: authVerificationOrderByWithRelationInput | authVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authVerifications.
     */
    cursor?: authVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authVerifications.
     */
    skip?: number
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * authVerification create
   */
  export type authVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a authVerification.
     */
    data: XOR<authVerificationCreateInput, authVerificationUncheckedCreateInput>
  }

  /**
   * authVerification createMany
   */
  export type authVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authVerifications.
     */
    data: authVerificationCreateManyInput | authVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authVerification createManyAndReturn
   */
  export type authVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many authVerifications.
     */
    data: authVerificationCreateManyInput | authVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authVerification update
   */
  export type authVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a authVerification.
     */
    data: XOR<authVerificationUpdateInput, authVerificationUncheckedUpdateInput>
    /**
     * Choose, which authVerification to update.
     */
    where: authVerificationWhereUniqueInput
  }

  /**
   * authVerification updateMany
   */
  export type authVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authVerifications.
     */
    data: XOR<authVerificationUpdateManyMutationInput, authVerificationUncheckedUpdateManyInput>
    /**
     * Filter which authVerifications to update
     */
    where?: authVerificationWhereInput
    /**
     * Limit how many authVerifications to update.
     */
    limit?: number
  }

  /**
   * authVerification updateManyAndReturn
   */
  export type authVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * The data used to update authVerifications.
     */
    data: XOR<authVerificationUpdateManyMutationInput, authVerificationUncheckedUpdateManyInput>
    /**
     * Filter which authVerifications to update
     */
    where?: authVerificationWhereInput
    /**
     * Limit how many authVerifications to update.
     */
    limit?: number
  }

  /**
   * authVerification upsert
   */
  export type authVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the authVerification to update in case it exists.
     */
    where: authVerificationWhereUniqueInput
    /**
     * In case the authVerification found by the `where` argument doesn't exist, create a new authVerification with this data.
     */
    create: XOR<authVerificationCreateInput, authVerificationUncheckedCreateInput>
    /**
     * In case the authVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authVerificationUpdateInput, authVerificationUncheckedUpdateInput>
  }

  /**
   * authVerification delete
   */
  export type authVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
    /**
     * Filter which authVerification to delete.
     */
    where: authVerificationWhereUniqueInput
  }

  /**
   * authVerification deleteMany
   */
  export type authVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authVerifications to delete
     */
    where?: authVerificationWhereInput
    /**
     * Limit how many authVerifications to delete.
     */
    limit?: number
  }

  /**
   * authVerification without action
   */
  export type authVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authVerification
     */
    select?: authVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authVerification
     */
    omit?: authVerificationOmit<ExtArgs> | null
  }


  /**
   * Model authTwoFactor
   */

  export type AggregateAuthTwoFactor = {
    _count: AuthTwoFactorCountAggregateOutputType | null
    _min: AuthTwoFactorMinAggregateOutputType | null
    _max: AuthTwoFactorMaxAggregateOutputType | null
  }

  export type AuthTwoFactorMinAggregateOutputType = {
    id: string | null
    secret: string | null
    backupCodes: string | null
    enabled: boolean | null
    userId: string | null
  }

  export type AuthTwoFactorMaxAggregateOutputType = {
    id: string | null
    secret: string | null
    backupCodes: string | null
    enabled: boolean | null
    userId: string | null
  }

  export type AuthTwoFactorCountAggregateOutputType = {
    id: number
    secret: number
    backupCodes: number
    enabled: number
    userId: number
    _all: number
  }


  export type AuthTwoFactorMinAggregateInputType = {
    id?: true
    secret?: true
    backupCodes?: true
    enabled?: true
    userId?: true
  }

  export type AuthTwoFactorMaxAggregateInputType = {
    id?: true
    secret?: true
    backupCodes?: true
    enabled?: true
    userId?: true
  }

  export type AuthTwoFactorCountAggregateInputType = {
    id?: true
    secret?: true
    backupCodes?: true
    enabled?: true
    userId?: true
    _all?: true
  }

  export type AuthTwoFactorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authTwoFactor to aggregate.
     */
    where?: authTwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authTwoFactors to fetch.
     */
    orderBy?: authTwoFactorOrderByWithRelationInput | authTwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authTwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authTwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authTwoFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authTwoFactors
    **/
    _count?: true | AuthTwoFactorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthTwoFactorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthTwoFactorMaxAggregateInputType
  }

  export type GetAuthTwoFactorAggregateType<T extends AuthTwoFactorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthTwoFactor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthTwoFactor[P]>
      : GetScalarType<T[P], AggregateAuthTwoFactor[P]>
  }




  export type authTwoFactorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authTwoFactorWhereInput
    orderBy?: authTwoFactorOrderByWithAggregationInput | authTwoFactorOrderByWithAggregationInput[]
    by: AuthTwoFactorScalarFieldEnum[] | AuthTwoFactorScalarFieldEnum
    having?: authTwoFactorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthTwoFactorCountAggregateInputType | true
    _min?: AuthTwoFactorMinAggregateInputType
    _max?: AuthTwoFactorMaxAggregateInputType
  }

  export type AuthTwoFactorGroupByOutputType = {
    id: string
    secret: string
    backupCodes: string
    enabled: boolean
    userId: string
    _count: AuthTwoFactorCountAggregateOutputType | null
    _min: AuthTwoFactorMinAggregateOutputType | null
    _max: AuthTwoFactorMaxAggregateOutputType | null
  }

  type GetAuthTwoFactorGroupByPayload<T extends authTwoFactorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthTwoFactorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthTwoFactorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthTwoFactorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthTwoFactorGroupByOutputType[P]>
        }
      >
    >


  export type authTwoFactorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    enabled?: boolean
    userId?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authTwoFactor"]>

  export type authTwoFactorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    enabled?: boolean
    userId?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authTwoFactor"]>

  export type authTwoFactorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    enabled?: boolean
    userId?: boolean
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authTwoFactor"]>

  export type authTwoFactorSelectScalar = {
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    enabled?: boolean
    userId?: boolean
  }

  export type authTwoFactorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "secret" | "backupCodes" | "enabled" | "userId", ExtArgs["result"]["authTwoFactor"]>
  export type authTwoFactorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }
  export type authTwoFactorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }
  export type authTwoFactorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | authUserDefaultArgs<ExtArgs>
  }

  export type $authTwoFactorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authTwoFactor"
    objects: {
      user: Prisma.$authUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      secret: string
      backupCodes: string
      enabled: boolean
      userId: string
    }, ExtArgs["result"]["authTwoFactor"]>
    composites: {}
  }

  type authTwoFactorGetPayload<S extends boolean | null | undefined | authTwoFactorDefaultArgs> = $Result.GetResult<Prisma.$authTwoFactorPayload, S>

  type authTwoFactorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authTwoFactorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthTwoFactorCountAggregateInputType | true
    }

  export interface authTwoFactorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authTwoFactor'], meta: { name: 'authTwoFactor' } }
    /**
     * Find zero or one AuthTwoFactor that matches the filter.
     * @param {authTwoFactorFindUniqueArgs} args - Arguments to find a AuthTwoFactor
     * @example
     * // Get one AuthTwoFactor
     * const authTwoFactor = await prisma.authTwoFactor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authTwoFactorFindUniqueArgs>(args: SelectSubset<T, authTwoFactorFindUniqueArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthTwoFactor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authTwoFactorFindUniqueOrThrowArgs} args - Arguments to find a AuthTwoFactor
     * @example
     * // Get one AuthTwoFactor
     * const authTwoFactor = await prisma.authTwoFactor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authTwoFactorFindUniqueOrThrowArgs>(args: SelectSubset<T, authTwoFactorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthTwoFactor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authTwoFactorFindFirstArgs} args - Arguments to find a AuthTwoFactor
     * @example
     * // Get one AuthTwoFactor
     * const authTwoFactor = await prisma.authTwoFactor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authTwoFactorFindFirstArgs>(args?: SelectSubset<T, authTwoFactorFindFirstArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthTwoFactor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authTwoFactorFindFirstOrThrowArgs} args - Arguments to find a AuthTwoFactor
     * @example
     * // Get one AuthTwoFactor
     * const authTwoFactor = await prisma.authTwoFactor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authTwoFactorFindFirstOrThrowArgs>(args?: SelectSubset<T, authTwoFactorFindFirstOrThrowArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthTwoFactors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authTwoFactorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthTwoFactors
     * const authTwoFactors = await prisma.authTwoFactor.findMany()
     * 
     * // Get first 10 AuthTwoFactors
     * const authTwoFactors = await prisma.authTwoFactor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authTwoFactorWithIdOnly = await prisma.authTwoFactor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authTwoFactorFindManyArgs>(args?: SelectSubset<T, authTwoFactorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthTwoFactor.
     * @param {authTwoFactorCreateArgs} args - Arguments to create a AuthTwoFactor.
     * @example
     * // Create one AuthTwoFactor
     * const AuthTwoFactor = await prisma.authTwoFactor.create({
     *   data: {
     *     // ... data to create a AuthTwoFactor
     *   }
     * })
     * 
     */
    create<T extends authTwoFactorCreateArgs>(args: SelectSubset<T, authTwoFactorCreateArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthTwoFactors.
     * @param {authTwoFactorCreateManyArgs} args - Arguments to create many AuthTwoFactors.
     * @example
     * // Create many AuthTwoFactors
     * const authTwoFactor = await prisma.authTwoFactor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authTwoFactorCreateManyArgs>(args?: SelectSubset<T, authTwoFactorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthTwoFactors and returns the data saved in the database.
     * @param {authTwoFactorCreateManyAndReturnArgs} args - Arguments to create many AuthTwoFactors.
     * @example
     * // Create many AuthTwoFactors
     * const authTwoFactor = await prisma.authTwoFactor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthTwoFactors and only return the `id`
     * const authTwoFactorWithIdOnly = await prisma.authTwoFactor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authTwoFactorCreateManyAndReturnArgs>(args?: SelectSubset<T, authTwoFactorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthTwoFactor.
     * @param {authTwoFactorDeleteArgs} args - Arguments to delete one AuthTwoFactor.
     * @example
     * // Delete one AuthTwoFactor
     * const AuthTwoFactor = await prisma.authTwoFactor.delete({
     *   where: {
     *     // ... filter to delete one AuthTwoFactor
     *   }
     * })
     * 
     */
    delete<T extends authTwoFactorDeleteArgs>(args: SelectSubset<T, authTwoFactorDeleteArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthTwoFactor.
     * @param {authTwoFactorUpdateArgs} args - Arguments to update one AuthTwoFactor.
     * @example
     * // Update one AuthTwoFactor
     * const authTwoFactor = await prisma.authTwoFactor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authTwoFactorUpdateArgs>(args: SelectSubset<T, authTwoFactorUpdateArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthTwoFactors.
     * @param {authTwoFactorDeleteManyArgs} args - Arguments to filter AuthTwoFactors to delete.
     * @example
     * // Delete a few AuthTwoFactors
     * const { count } = await prisma.authTwoFactor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authTwoFactorDeleteManyArgs>(args?: SelectSubset<T, authTwoFactorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthTwoFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authTwoFactorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthTwoFactors
     * const authTwoFactor = await prisma.authTwoFactor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authTwoFactorUpdateManyArgs>(args: SelectSubset<T, authTwoFactorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthTwoFactors and returns the data updated in the database.
     * @param {authTwoFactorUpdateManyAndReturnArgs} args - Arguments to update many AuthTwoFactors.
     * @example
     * // Update many AuthTwoFactors
     * const authTwoFactor = await prisma.authTwoFactor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthTwoFactors and only return the `id`
     * const authTwoFactorWithIdOnly = await prisma.authTwoFactor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authTwoFactorUpdateManyAndReturnArgs>(args: SelectSubset<T, authTwoFactorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthTwoFactor.
     * @param {authTwoFactorUpsertArgs} args - Arguments to update or create a AuthTwoFactor.
     * @example
     * // Update or create a AuthTwoFactor
     * const authTwoFactor = await prisma.authTwoFactor.upsert({
     *   create: {
     *     // ... data to create a AuthTwoFactor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthTwoFactor we want to update
     *   }
     * })
     */
    upsert<T extends authTwoFactorUpsertArgs>(args: SelectSubset<T, authTwoFactorUpsertArgs<ExtArgs>>): Prisma__authTwoFactorClient<$Result.GetResult<Prisma.$authTwoFactorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthTwoFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authTwoFactorCountArgs} args - Arguments to filter AuthTwoFactors to count.
     * @example
     * // Count the number of AuthTwoFactors
     * const count = await prisma.authTwoFactor.count({
     *   where: {
     *     // ... the filter for the AuthTwoFactors we want to count
     *   }
     * })
    **/
    count<T extends authTwoFactorCountArgs>(
      args?: Subset<T, authTwoFactorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthTwoFactorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthTwoFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTwoFactorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthTwoFactorAggregateArgs>(args: Subset<T, AuthTwoFactorAggregateArgs>): Prisma.PrismaPromise<GetAuthTwoFactorAggregateType<T>>

    /**
     * Group by AuthTwoFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authTwoFactorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authTwoFactorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authTwoFactorGroupByArgs['orderBy'] }
        : { orderBy?: authTwoFactorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authTwoFactorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthTwoFactorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authTwoFactor model
   */
  readonly fields: authTwoFactorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authTwoFactor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authTwoFactorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends authUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authUserDefaultArgs<ExtArgs>>): Prisma__authUserClient<$Result.GetResult<Prisma.$authUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authTwoFactor model
   */
  interface authTwoFactorFieldRefs {
    readonly id: FieldRef<"authTwoFactor", 'String'>
    readonly secret: FieldRef<"authTwoFactor", 'String'>
    readonly backupCodes: FieldRef<"authTwoFactor", 'String'>
    readonly enabled: FieldRef<"authTwoFactor", 'Boolean'>
    readonly userId: FieldRef<"authTwoFactor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * authTwoFactor findUnique
   */
  export type authTwoFactorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which authTwoFactor to fetch.
     */
    where: authTwoFactorWhereUniqueInput
  }

  /**
   * authTwoFactor findUniqueOrThrow
   */
  export type authTwoFactorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which authTwoFactor to fetch.
     */
    where: authTwoFactorWhereUniqueInput
  }

  /**
   * authTwoFactor findFirst
   */
  export type authTwoFactorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which authTwoFactor to fetch.
     */
    where?: authTwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authTwoFactors to fetch.
     */
    orderBy?: authTwoFactorOrderByWithRelationInput | authTwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authTwoFactors.
     */
    cursor?: authTwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authTwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authTwoFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authTwoFactors.
     */
    distinct?: AuthTwoFactorScalarFieldEnum | AuthTwoFactorScalarFieldEnum[]
  }

  /**
   * authTwoFactor findFirstOrThrow
   */
  export type authTwoFactorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which authTwoFactor to fetch.
     */
    where?: authTwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authTwoFactors to fetch.
     */
    orderBy?: authTwoFactorOrderByWithRelationInput | authTwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authTwoFactors.
     */
    cursor?: authTwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authTwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authTwoFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authTwoFactors.
     */
    distinct?: AuthTwoFactorScalarFieldEnum | AuthTwoFactorScalarFieldEnum[]
  }

  /**
   * authTwoFactor findMany
   */
  export type authTwoFactorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which authTwoFactors to fetch.
     */
    where?: authTwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authTwoFactors to fetch.
     */
    orderBy?: authTwoFactorOrderByWithRelationInput | authTwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authTwoFactors.
     */
    cursor?: authTwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authTwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authTwoFactors.
     */
    skip?: number
    distinct?: AuthTwoFactorScalarFieldEnum | AuthTwoFactorScalarFieldEnum[]
  }

  /**
   * authTwoFactor create
   */
  export type authTwoFactorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * The data needed to create a authTwoFactor.
     */
    data: XOR<authTwoFactorCreateInput, authTwoFactorUncheckedCreateInput>
  }

  /**
   * authTwoFactor createMany
   */
  export type authTwoFactorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authTwoFactors.
     */
    data: authTwoFactorCreateManyInput | authTwoFactorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authTwoFactor createManyAndReturn
   */
  export type authTwoFactorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * The data used to create many authTwoFactors.
     */
    data: authTwoFactorCreateManyInput | authTwoFactorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * authTwoFactor update
   */
  export type authTwoFactorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * The data needed to update a authTwoFactor.
     */
    data: XOR<authTwoFactorUpdateInput, authTwoFactorUncheckedUpdateInput>
    /**
     * Choose, which authTwoFactor to update.
     */
    where: authTwoFactorWhereUniqueInput
  }

  /**
   * authTwoFactor updateMany
   */
  export type authTwoFactorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authTwoFactors.
     */
    data: XOR<authTwoFactorUpdateManyMutationInput, authTwoFactorUncheckedUpdateManyInput>
    /**
     * Filter which authTwoFactors to update
     */
    where?: authTwoFactorWhereInput
    /**
     * Limit how many authTwoFactors to update.
     */
    limit?: number
  }

  /**
   * authTwoFactor updateManyAndReturn
   */
  export type authTwoFactorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * The data used to update authTwoFactors.
     */
    data: XOR<authTwoFactorUpdateManyMutationInput, authTwoFactorUncheckedUpdateManyInput>
    /**
     * Filter which authTwoFactors to update
     */
    where?: authTwoFactorWhereInput
    /**
     * Limit how many authTwoFactors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * authTwoFactor upsert
   */
  export type authTwoFactorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * The filter to search for the authTwoFactor to update in case it exists.
     */
    where: authTwoFactorWhereUniqueInput
    /**
     * In case the authTwoFactor found by the `where` argument doesn't exist, create a new authTwoFactor with this data.
     */
    create: XOR<authTwoFactorCreateInput, authTwoFactorUncheckedCreateInput>
    /**
     * In case the authTwoFactor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authTwoFactorUpdateInput, authTwoFactorUncheckedUpdateInput>
  }

  /**
   * authTwoFactor delete
   */
  export type authTwoFactorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
    /**
     * Filter which authTwoFactor to delete.
     */
    where: authTwoFactorWhereUniqueInput
  }

  /**
   * authTwoFactor deleteMany
   */
  export type authTwoFactorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authTwoFactors to delete
     */
    where?: authTwoFactorWhereInput
    /**
     * Limit how many authTwoFactors to delete.
     */
    limit?: number
  }

  /**
   * authTwoFactor without action
   */
  export type authTwoFactorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authTwoFactor
     */
    select?: authTwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authTwoFactor
     */
    omit?: authTwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authTwoFactorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    name: 'name',
    avatar: 'avatar',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const PermissionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    http_path: 'http_path',
    http_method: 'http_method',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum]


  export const Role_permissionsScalarFieldEnum: {
    role_id: 'role_id',
    permission_id: 'permission_id'
  };

  export type Role_permissionsScalarFieldEnum = (typeof Role_permissionsScalarFieldEnum)[keyof typeof Role_permissionsScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    parent_id: 'parent_id',
    order: 'order',
    title: 'title',
    icon: 'icon',
    uri: 'uri',
    permission: 'permission',
    label: 'label',
    target: 'target',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const Operation_logScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    method: 'method',
    uri: 'uri',
    ip: 'ip',
    input: 'input',
    created_at: 'created_at'
  };

  export type Operation_logScalarFieldEnum = (typeof Operation_logScalarFieldEnum)[keyof typeof Operation_logScalarFieldEnum]


  export const AuthUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    emailVerified: 'emailVerified',
    image: 'image',
    twoFactorEnabled: 'twoFactorEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthUserScalarFieldEnum = (typeof AuthUserScalarFieldEnum)[keyof typeof AuthUserScalarFieldEnum]


  export const AuthAccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthAccountScalarFieldEnum = (typeof AuthAccountScalarFieldEnum)[keyof typeof AuthAccountScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const AuthVerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthVerificationScalarFieldEnum = (typeof AuthVerificationScalarFieldEnum)[keyof typeof AuthVerificationScalarFieldEnum]


  export const AuthTwoFactorScalarFieldEnum: {
    id: 'id',
    secret: 'secret',
    backupCodes: 'backupCodes',
    enabled: 'enabled',
    userId: 'userId'
  };

  export type AuthTwoFactorScalarFieldEnum = (typeof AuthTwoFactorScalarFieldEnum)[keyof typeof AuthTwoFactorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    roles?: RolesListRelationFilter
    operation_logs?: Operation_logListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: rolesOrderByRelationAggregateInput
    operation_logs?: operation_logOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    roles?: RolesListRelationFilter
    operation_logs?: Operation_logListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    remember_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    slug?: StringFilter<"roles"> | string
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    permissions?: Role_permissionsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    permissions?: role_permissionsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    permissions?: Role_permissionsListRelationFilter
    users?: UsersListRelationFilter
  }, "id" | "name" | "slug">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
    slug?: StringWithAggregatesFilter<"roles"> | string
    created_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
  }

  export type permissionsWhereInput = {
    AND?: permissionsWhereInput | permissionsWhereInput[]
    OR?: permissionsWhereInput[]
    NOT?: permissionsWhereInput | permissionsWhereInput[]
    id?: IntFilter<"permissions"> | number
    name?: StringFilter<"permissions"> | string
    slug?: StringFilter<"permissions"> | string
    http_path?: StringNullableFilter<"permissions"> | string | null
    http_method?: StringNullableFilter<"permissions"> | string | null
    created_at?: DateTimeFilter<"permissions"> | Date | string
    updated_at?: DateTimeFilter<"permissions"> | Date | string
    roles?: Role_permissionsListRelationFilter
  }

  export type permissionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    http_path?: SortOrderInput | SortOrder
    http_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: role_permissionsOrderByRelationAggregateInput
  }

  export type permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: permissionsWhereInput | permissionsWhereInput[]
    OR?: permissionsWhereInput[]
    NOT?: permissionsWhereInput | permissionsWhereInput[]
    http_path?: StringNullableFilter<"permissions"> | string | null
    http_method?: StringNullableFilter<"permissions"> | string | null
    created_at?: DateTimeFilter<"permissions"> | Date | string
    updated_at?: DateTimeFilter<"permissions"> | Date | string
    roles?: Role_permissionsListRelationFilter
  }, "id" | "name" | "slug">

  export type permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    http_path?: SortOrderInput | SortOrder
    http_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: permissionsCountOrderByAggregateInput
    _avg?: permissionsAvgOrderByAggregateInput
    _max?: permissionsMaxOrderByAggregateInput
    _min?: permissionsMinOrderByAggregateInput
    _sum?: permissionsSumOrderByAggregateInput
  }

  export type permissionsScalarWhereWithAggregatesInput = {
    AND?: permissionsScalarWhereWithAggregatesInput | permissionsScalarWhereWithAggregatesInput[]
    OR?: permissionsScalarWhereWithAggregatesInput[]
    NOT?: permissionsScalarWhereWithAggregatesInput | permissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"permissions"> | number
    name?: StringWithAggregatesFilter<"permissions"> | string
    slug?: StringWithAggregatesFilter<"permissions"> | string
    http_path?: StringNullableWithAggregatesFilter<"permissions"> | string | null
    http_method?: StringNullableWithAggregatesFilter<"permissions"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"permissions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"permissions"> | Date | string
  }

  export type role_permissionsWhereInput = {
    AND?: role_permissionsWhereInput | role_permissionsWhereInput[]
    OR?: role_permissionsWhereInput[]
    NOT?: role_permissionsWhereInput | role_permissionsWhereInput[]
    role_id?: IntFilter<"role_permissions"> | number
    permission_id?: IntFilter<"role_permissions"> | number
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    permission?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
  }

  export type role_permissionsOrderByWithRelationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    role?: rolesOrderByWithRelationInput
    permission?: permissionsOrderByWithRelationInput
  }

  export type role_permissionsWhereUniqueInput = Prisma.AtLeast<{
    role_id_permission_id?: role_permissionsRole_idPermission_idCompoundUniqueInput
    AND?: role_permissionsWhereInput | role_permissionsWhereInput[]
    OR?: role_permissionsWhereInput[]
    NOT?: role_permissionsWhereInput | role_permissionsWhereInput[]
    role_id?: IntFilter<"role_permissions"> | number
    permission_id?: IntFilter<"role_permissions"> | number
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    permission?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
  }, "role_id_permission_id">

  export type role_permissionsOrderByWithAggregationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    _count?: role_permissionsCountOrderByAggregateInput
    _avg?: role_permissionsAvgOrderByAggregateInput
    _max?: role_permissionsMaxOrderByAggregateInput
    _min?: role_permissionsMinOrderByAggregateInput
    _sum?: role_permissionsSumOrderByAggregateInput
  }

  export type role_permissionsScalarWhereWithAggregatesInput = {
    AND?: role_permissionsScalarWhereWithAggregatesInput | role_permissionsScalarWhereWithAggregatesInput[]
    OR?: role_permissionsScalarWhereWithAggregatesInput[]
    NOT?: role_permissionsScalarWhereWithAggregatesInput | role_permissionsScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"role_permissions"> | number
    permission_id?: IntWithAggregatesFilter<"role_permissions"> | number
  }

  export type menuWhereInput = {
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    id?: IntFilter<"menu"> | number
    parent_id?: IntNullableFilter<"menu"> | number | null
    order?: IntFilter<"menu"> | number
    title?: StringFilter<"menu"> | string
    icon?: StringNullableFilter<"menu"> | string | null
    uri?: StringNullableFilter<"menu"> | string | null
    permission?: StringNullableFilter<"menu"> | string | null
    label?: StringNullableFilter<"menu"> | string | null
    target?: StringNullableFilter<"menu"> | string | null
    created_at?: DateTimeFilter<"menu"> | Date | string
    updated_at?: DateTimeFilter<"menu"> | Date | string
    parent?: XOR<MenuNullableScalarRelationFilter, menuWhereInput> | null
    children?: MenuListRelationFilter
  }

  export type menuOrderByWithRelationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    order?: SortOrder
    title?: SortOrder
    icon?: SortOrderInput | SortOrder
    uri?: SortOrderInput | SortOrder
    permission?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent?: menuOrderByWithRelationInput
    children?: menuOrderByRelationAggregateInput
  }

  export type menuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    parent_id?: IntNullableFilter<"menu"> | number | null
    order?: IntFilter<"menu"> | number
    title?: StringFilter<"menu"> | string
    icon?: StringNullableFilter<"menu"> | string | null
    uri?: StringNullableFilter<"menu"> | string | null
    permission?: StringNullableFilter<"menu"> | string | null
    label?: StringNullableFilter<"menu"> | string | null
    target?: StringNullableFilter<"menu"> | string | null
    created_at?: DateTimeFilter<"menu"> | Date | string
    updated_at?: DateTimeFilter<"menu"> | Date | string
    parent?: XOR<MenuNullableScalarRelationFilter, menuWhereInput> | null
    children?: MenuListRelationFilter
  }, "id">

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    order?: SortOrder
    title?: SortOrder
    icon?: SortOrderInput | SortOrder
    uri?: SortOrderInput | SortOrder
    permission?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    OR?: menuScalarWhereWithAggregatesInput[]
    NOT?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu"> | number
    parent_id?: IntNullableWithAggregatesFilter<"menu"> | number | null
    order?: IntWithAggregatesFilter<"menu"> | number
    title?: StringWithAggregatesFilter<"menu"> | string
    icon?: StringNullableWithAggregatesFilter<"menu"> | string | null
    uri?: StringNullableWithAggregatesFilter<"menu"> | string | null
    permission?: StringNullableWithAggregatesFilter<"menu"> | string | null
    label?: StringNullableWithAggregatesFilter<"menu"> | string | null
    target?: StringNullableWithAggregatesFilter<"menu"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"menu"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"menu"> | Date | string
  }

  export type operation_logWhereInput = {
    AND?: operation_logWhereInput | operation_logWhereInput[]
    OR?: operation_logWhereInput[]
    NOT?: operation_logWhereInput | operation_logWhereInput[]
    id?: IntFilter<"operation_log"> | number
    user_id?: IntFilter<"operation_log"> | number
    method?: StringFilter<"operation_log"> | string
    uri?: StringFilter<"operation_log"> | string
    ip?: StringFilter<"operation_log"> | string
    input?: JsonNullableFilter<"operation_log">
    created_at?: DateTimeFilter<"operation_log"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type operation_logOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    uri?: SortOrder
    ip?: SortOrder
    input?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type operation_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: operation_logWhereInput | operation_logWhereInput[]
    OR?: operation_logWhereInput[]
    NOT?: operation_logWhereInput | operation_logWhereInput[]
    user_id?: IntFilter<"operation_log"> | number
    method?: StringFilter<"operation_log"> | string
    uri?: StringFilter<"operation_log"> | string
    ip?: StringFilter<"operation_log"> | string
    input?: JsonNullableFilter<"operation_log">
    created_at?: DateTimeFilter<"operation_log"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type operation_logOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    uri?: SortOrder
    ip?: SortOrder
    input?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: operation_logCountOrderByAggregateInput
    _avg?: operation_logAvgOrderByAggregateInput
    _max?: operation_logMaxOrderByAggregateInput
    _min?: operation_logMinOrderByAggregateInput
    _sum?: operation_logSumOrderByAggregateInput
  }

  export type operation_logScalarWhereWithAggregatesInput = {
    AND?: operation_logScalarWhereWithAggregatesInput | operation_logScalarWhereWithAggregatesInput[]
    OR?: operation_logScalarWhereWithAggregatesInput[]
    NOT?: operation_logScalarWhereWithAggregatesInput | operation_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"operation_log"> | number
    user_id?: IntWithAggregatesFilter<"operation_log"> | number
    method?: StringWithAggregatesFilter<"operation_log"> | string
    uri?: StringWithAggregatesFilter<"operation_log"> | string
    ip?: StringWithAggregatesFilter<"operation_log"> | string
    input?: JsonNullableWithAggregatesFilter<"operation_log">
    created_at?: DateTimeWithAggregatesFilter<"operation_log"> | Date | string
  }

  export type authUserWhereInput = {
    AND?: authUserWhereInput | authUserWhereInput[]
    OR?: authUserWhereInput[]
    NOT?: authUserWhereInput | authUserWhereInput[]
    id?: StringFilter<"authUser"> | string
    email?: StringFilter<"authUser"> | string
    name?: StringFilter<"authUser"> | string
    emailVerified?: BoolFilter<"authUser"> | boolean
    image?: StringNullableFilter<"authUser"> | string | null
    twoFactorEnabled?: BoolFilter<"authUser"> | boolean
    createdAt?: DateTimeFilter<"authUser"> | Date | string
    updatedAt?: DateTimeFilter<"authUser"> | Date | string
    accounts?: AuthAccountListRelationFilter
    sessions?: AuthSessionListRelationFilter
    twoFactor?: XOR<AuthTwoFactorNullableScalarRelationFilter, authTwoFactorWhereInput> | null
  }

  export type authUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: authAccountOrderByRelationAggregateInput
    sessions?: authSessionOrderByRelationAggregateInput
    twoFactor?: authTwoFactorOrderByWithRelationInput
  }

  export type authUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: authUserWhereInput | authUserWhereInput[]
    OR?: authUserWhereInput[]
    NOT?: authUserWhereInput | authUserWhereInput[]
    name?: StringFilter<"authUser"> | string
    emailVerified?: BoolFilter<"authUser"> | boolean
    image?: StringNullableFilter<"authUser"> | string | null
    twoFactorEnabled?: BoolFilter<"authUser"> | boolean
    createdAt?: DateTimeFilter<"authUser"> | Date | string
    updatedAt?: DateTimeFilter<"authUser"> | Date | string
    accounts?: AuthAccountListRelationFilter
    sessions?: AuthSessionListRelationFilter
    twoFactor?: XOR<AuthTwoFactorNullableScalarRelationFilter, authTwoFactorWhereInput> | null
  }, "id" | "email">

  export type authUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: authUserCountOrderByAggregateInput
    _max?: authUserMaxOrderByAggregateInput
    _min?: authUserMinOrderByAggregateInput
  }

  export type authUserScalarWhereWithAggregatesInput = {
    AND?: authUserScalarWhereWithAggregatesInput | authUserScalarWhereWithAggregatesInput[]
    OR?: authUserScalarWhereWithAggregatesInput[]
    NOT?: authUserScalarWhereWithAggregatesInput | authUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authUser"> | string
    email?: StringWithAggregatesFilter<"authUser"> | string
    name?: StringWithAggregatesFilter<"authUser"> | string
    emailVerified?: BoolWithAggregatesFilter<"authUser"> | boolean
    image?: StringNullableWithAggregatesFilter<"authUser"> | string | null
    twoFactorEnabled?: BoolWithAggregatesFilter<"authUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"authUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"authUser"> | Date | string
  }

  export type authAccountWhereInput = {
    AND?: authAccountWhereInput | authAccountWhereInput[]
    OR?: authAccountWhereInput[]
    NOT?: authAccountWhereInput | authAccountWhereInput[]
    id?: StringFilter<"authAccount"> | string
    accountId?: StringFilter<"authAccount"> | string
    providerId?: StringFilter<"authAccount"> | string
    userId?: StringFilter<"authAccount"> | string
    accessToken?: StringNullableFilter<"authAccount"> | string | null
    refreshToken?: StringNullableFilter<"authAccount"> | string | null
    idToken?: StringNullableFilter<"authAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"authAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"authAccount"> | Date | string | null
    scope?: StringNullableFilter<"authAccount"> | string | null
    password?: StringNullableFilter<"authAccount"> | string | null
    createdAt?: DateTimeFilter<"authAccount"> | Date | string
    updatedAt?: DateTimeFilter<"authAccount"> | Date | string
    user?: XOR<AuthUserScalarRelationFilter, authUserWhereInput>
  }

  export type authAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: authUserOrderByWithRelationInput
  }

  export type authAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_accountId?: authAccountProviderIdAccountIdCompoundUniqueInput
    AND?: authAccountWhereInput | authAccountWhereInput[]
    OR?: authAccountWhereInput[]
    NOT?: authAccountWhereInput | authAccountWhereInput[]
    accountId?: StringFilter<"authAccount"> | string
    providerId?: StringFilter<"authAccount"> | string
    userId?: StringFilter<"authAccount"> | string
    accessToken?: StringNullableFilter<"authAccount"> | string | null
    refreshToken?: StringNullableFilter<"authAccount"> | string | null
    idToken?: StringNullableFilter<"authAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"authAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"authAccount"> | Date | string | null
    scope?: StringNullableFilter<"authAccount"> | string | null
    password?: StringNullableFilter<"authAccount"> | string | null
    createdAt?: DateTimeFilter<"authAccount"> | Date | string
    updatedAt?: DateTimeFilter<"authAccount"> | Date | string
    user?: XOR<AuthUserScalarRelationFilter, authUserWhereInput>
  }, "id" | "providerId_accountId">

  export type authAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: authAccountCountOrderByAggregateInput
    _max?: authAccountMaxOrderByAggregateInput
    _min?: authAccountMinOrderByAggregateInput
  }

  export type authAccountScalarWhereWithAggregatesInput = {
    AND?: authAccountScalarWhereWithAggregatesInput | authAccountScalarWhereWithAggregatesInput[]
    OR?: authAccountScalarWhereWithAggregatesInput[]
    NOT?: authAccountScalarWhereWithAggregatesInput | authAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authAccount"> | string
    accountId?: StringWithAggregatesFilter<"authAccount"> | string
    providerId?: StringWithAggregatesFilter<"authAccount"> | string
    userId?: StringWithAggregatesFilter<"authAccount"> | string
    accessToken?: StringNullableWithAggregatesFilter<"authAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"authAccount"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"authAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"authAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"authAccount"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"authAccount"> | string | null
    password?: StringNullableWithAggregatesFilter<"authAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"authAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"authAccount"> | Date | string
  }

  export type authSessionWhereInput = {
    AND?: authSessionWhereInput | authSessionWhereInput[]
    OR?: authSessionWhereInput[]
    NOT?: authSessionWhereInput | authSessionWhereInput[]
    id?: StringFilter<"authSession"> | string
    expiresAt?: DateTimeFilter<"authSession"> | Date | string
    token?: StringFilter<"authSession"> | string
    createdAt?: DateTimeFilter<"authSession"> | Date | string
    updatedAt?: DateTimeFilter<"authSession"> | Date | string
    ipAddress?: StringNullableFilter<"authSession"> | string | null
    userAgent?: StringNullableFilter<"authSession"> | string | null
    userId?: StringFilter<"authSession"> | string
    user?: XOR<AuthUserScalarRelationFilter, authUserWhereInput>
  }

  export type authSessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: authUserOrderByWithRelationInput
  }

  export type authSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: authSessionWhereInput | authSessionWhereInput[]
    OR?: authSessionWhereInput[]
    NOT?: authSessionWhereInput | authSessionWhereInput[]
    expiresAt?: DateTimeFilter<"authSession"> | Date | string
    createdAt?: DateTimeFilter<"authSession"> | Date | string
    updatedAt?: DateTimeFilter<"authSession"> | Date | string
    ipAddress?: StringNullableFilter<"authSession"> | string | null
    userAgent?: StringNullableFilter<"authSession"> | string | null
    userId?: StringFilter<"authSession"> | string
    user?: XOR<AuthUserScalarRelationFilter, authUserWhereInput>
  }, "id" | "token">

  export type authSessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: authSessionCountOrderByAggregateInput
    _max?: authSessionMaxOrderByAggregateInput
    _min?: authSessionMinOrderByAggregateInput
  }

  export type authSessionScalarWhereWithAggregatesInput = {
    AND?: authSessionScalarWhereWithAggregatesInput | authSessionScalarWhereWithAggregatesInput[]
    OR?: authSessionScalarWhereWithAggregatesInput[]
    NOT?: authSessionScalarWhereWithAggregatesInput | authSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"authSession"> | Date | string
    token?: StringWithAggregatesFilter<"authSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"authSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"authSession"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"authSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"authSession"> | string | null
    userId?: StringWithAggregatesFilter<"authSession"> | string
  }

  export type authVerificationWhereInput = {
    AND?: authVerificationWhereInput | authVerificationWhereInput[]
    OR?: authVerificationWhereInput[]
    NOT?: authVerificationWhereInput | authVerificationWhereInput[]
    id?: StringFilter<"authVerification"> | string
    identifier?: StringFilter<"authVerification"> | string
    value?: StringFilter<"authVerification"> | string
    expiresAt?: DateTimeFilter<"authVerification"> | Date | string
    createdAt?: DateTimeFilter<"authVerification"> | Date | string
    updatedAt?: DateTimeFilter<"authVerification"> | Date | string
  }

  export type authVerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: authVerificationWhereInput | authVerificationWhereInput[]
    OR?: authVerificationWhereInput[]
    NOT?: authVerificationWhereInput | authVerificationWhereInput[]
    identifier?: StringFilter<"authVerification"> | string
    value?: StringFilter<"authVerification"> | string
    expiresAt?: DateTimeFilter<"authVerification"> | Date | string
    createdAt?: DateTimeFilter<"authVerification"> | Date | string
    updatedAt?: DateTimeFilter<"authVerification"> | Date | string
  }, "id">

  export type authVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: authVerificationCountOrderByAggregateInput
    _max?: authVerificationMaxOrderByAggregateInput
    _min?: authVerificationMinOrderByAggregateInput
  }

  export type authVerificationScalarWhereWithAggregatesInput = {
    AND?: authVerificationScalarWhereWithAggregatesInput | authVerificationScalarWhereWithAggregatesInput[]
    OR?: authVerificationScalarWhereWithAggregatesInput[]
    NOT?: authVerificationScalarWhereWithAggregatesInput | authVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authVerification"> | string
    identifier?: StringWithAggregatesFilter<"authVerification"> | string
    value?: StringWithAggregatesFilter<"authVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"authVerification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"authVerification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"authVerification"> | Date | string
  }

  export type authTwoFactorWhereInput = {
    AND?: authTwoFactorWhereInput | authTwoFactorWhereInput[]
    OR?: authTwoFactorWhereInput[]
    NOT?: authTwoFactorWhereInput | authTwoFactorWhereInput[]
    id?: StringFilter<"authTwoFactor"> | string
    secret?: StringFilter<"authTwoFactor"> | string
    backupCodes?: StringFilter<"authTwoFactor"> | string
    enabled?: BoolFilter<"authTwoFactor"> | boolean
    userId?: StringFilter<"authTwoFactor"> | string
    user?: XOR<AuthUserScalarRelationFilter, authUserWhereInput>
  }

  export type authTwoFactorOrderByWithRelationInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    enabled?: SortOrder
    userId?: SortOrder
    user?: authUserOrderByWithRelationInput
  }

  export type authTwoFactorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: authTwoFactorWhereInput | authTwoFactorWhereInput[]
    OR?: authTwoFactorWhereInput[]
    NOT?: authTwoFactorWhereInput | authTwoFactorWhereInput[]
    secret?: StringFilter<"authTwoFactor"> | string
    backupCodes?: StringFilter<"authTwoFactor"> | string
    enabled?: BoolFilter<"authTwoFactor"> | boolean
    user?: XOR<AuthUserScalarRelationFilter, authUserWhereInput>
  }, "id" | "userId">

  export type authTwoFactorOrderByWithAggregationInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    enabled?: SortOrder
    userId?: SortOrder
    _count?: authTwoFactorCountOrderByAggregateInput
    _max?: authTwoFactorMaxOrderByAggregateInput
    _min?: authTwoFactorMinOrderByAggregateInput
  }

  export type authTwoFactorScalarWhereWithAggregatesInput = {
    AND?: authTwoFactorScalarWhereWithAggregatesInput | authTwoFactorScalarWhereWithAggregatesInput[]
    OR?: authTwoFactorScalarWhereWithAggregatesInput[]
    NOT?: authTwoFactorScalarWhereWithAggregatesInput | authTwoFactorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authTwoFactor"> | string
    secret?: StringWithAggregatesFilter<"authTwoFactor"> | string
    backupCodes?: StringWithAggregatesFilter<"authTwoFactor"> | string
    enabled?: BoolWithAggregatesFilter<"authTwoFactor"> | boolean
    userId?: StringWithAggregatesFilter<"authTwoFactor"> | string
  }

  export type usersCreateInput = {
    username: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: rolesCreateNestedManyWithoutUsersInput
    operation_logs?: operation_logCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    operation_logs?: operation_logUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateManyWithoutUsersNestedInput
    operation_logs?: operation_logUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    operation_logs?: operation_logUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesCreateInput = {
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: role_permissionsCreateNestedManyWithoutRoleInput
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: role_permissionsUncheckedCreateNestedManyWithoutRoleInput
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: role_permissionsUpdateManyWithoutRoleNestedInput
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: role_permissionsUncheckedUpdateManyWithoutRoleNestedInput
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id?: number
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type rolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionsCreateInput = {
    name: string
    slug: string
    http_path?: string | null
    http_method?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: role_permissionsCreateNestedManyWithoutPermissionInput
  }

  export type permissionsUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    http_path?: string | null
    http_method?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: role_permissionsUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type permissionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    http_path?: NullableStringFieldUpdateOperationsInput | string | null
    http_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: role_permissionsUpdateManyWithoutPermissionNestedInput
  }

  export type permissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    http_path?: NullableStringFieldUpdateOperationsInput | string | null
    http_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: role_permissionsUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type permissionsCreateManyInput = {
    id?: number
    name: string
    slug: string
    http_path?: string | null
    http_method?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    http_path?: NullableStringFieldUpdateOperationsInput | string | null
    http_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    http_path?: NullableStringFieldUpdateOperationsInput | string | null
    http_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsCreateInput = {
    role: rolesCreateNestedOneWithoutPermissionsInput
    permission: permissionsCreateNestedOneWithoutRolesInput
  }

  export type role_permissionsUncheckedCreateInput = {
    role_id: number
    permission_id: number
  }

  export type role_permissionsUpdateInput = {
    role?: rolesUpdateOneRequiredWithoutPermissionsNestedInput
    permission?: permissionsUpdateOneRequiredWithoutRolesNestedInput
  }

  export type role_permissionsUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type role_permissionsCreateManyInput = {
    role_id: number
    permission_id: number
  }

  export type role_permissionsUpdateManyMutationInput = {

  }

  export type role_permissionsUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type menuCreateInput = {
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    parent?: menuCreateNestedOneWithoutChildrenInput
    children?: menuCreateNestedManyWithoutParentInput
  }

  export type menuUncheckedCreateInput = {
    id?: number
    parent_id?: number | null
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    children?: menuUncheckedCreateNestedManyWithoutParentInput
  }

  export type menuUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: menuUpdateOneWithoutChildrenNestedInput
    children?: menuUpdateManyWithoutParentNestedInput
  }

  export type menuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: menuUncheckedUpdateManyWithoutParentNestedInput
  }

  export type menuCreateManyInput = {
    id?: number
    parent_id?: number | null
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type menuUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operation_logCreateInput = {
    method: string
    uri: string
    ip: string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    user: usersCreateNestedOneWithoutOperation_logsInput
  }

  export type operation_logUncheckedCreateInput = {
    id?: number
    user_id: number
    method: string
    uri: string
    ip: string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type operation_logUpdateInput = {
    method?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutOperation_logsNestedInput
  }

  export type operation_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operation_logCreateManyInput = {
    id?: number
    user_id: number
    method: string
    uri: string
    ip: string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type operation_logUpdateManyMutationInput = {
    method?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operation_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authUserCreateInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: authAccountCreateNestedManyWithoutUserInput
    sessions?: authSessionCreateNestedManyWithoutUserInput
    twoFactor?: authTwoFactorCreateNestedOneWithoutUserInput
  }

  export type authUserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: authAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: authSessionUncheckedCreateNestedManyWithoutUserInput
    twoFactor?: authTwoFactorUncheckedCreateNestedOneWithoutUserInput
  }

  export type authUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: authAccountUpdateManyWithoutUserNestedInput
    sessions?: authSessionUpdateManyWithoutUserNestedInput
    twoFactor?: authTwoFactorUpdateOneWithoutUserNestedInput
  }

  export type authUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: authAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: authSessionUncheckedUpdateManyWithoutUserNestedInput
    twoFactor?: authTwoFactorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type authUserCreateManyInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authAccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: authUserCreateNestedOneWithoutAccountsInput
  }

  export type authAccountUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: authUserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type authAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authAccountCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authSessionCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: authUserCreateNestedOneWithoutSessionsInput
  }

  export type authSessionUncheckedCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type authSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: authUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type authSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type authSessionCreateManyInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type authSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type authSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type authVerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authVerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authVerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authTwoFactorCreateInput = {
    id?: string
    secret: string
    backupCodes: string
    enabled?: boolean
    user: authUserCreateNestedOneWithoutTwoFactorInput
  }

  export type authTwoFactorUncheckedCreateInput = {
    id?: string
    secret: string
    backupCodes: string
    enabled?: boolean
    userId: string
  }

  export type authTwoFactorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: authUserUpdateOneRequiredWithoutTwoFactorNestedInput
  }

  export type authTwoFactorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type authTwoFactorCreateManyInput = {
    id?: string
    secret: string
    backupCodes: string
    enabled?: boolean
    userId: string
  }

  export type authTwoFactorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type authTwoFactorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RolesListRelationFilter = {
    every?: rolesWhereInput
    some?: rolesWhereInput
    none?: rolesWhereInput
  }

  export type Operation_logListRelationFilter = {
    every?: operation_logWhereInput
    some?: operation_logWhereInput
    none?: operation_logWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type operation_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Role_permissionsListRelationFilter = {
    every?: role_permissionsWhereInput
    some?: role_permissionsWhereInput
    none?: role_permissionsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type role_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    http_path?: SortOrder
    http_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    http_path?: SortOrder
    http_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    http_path?: SortOrder
    http_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type PermissionsScalarRelationFilter = {
    is?: permissionsWhereInput
    isNot?: permissionsWhereInput
  }

  export type role_permissionsRole_idPermission_idCompoundUniqueInput = {
    role_id: number
    permission_id: number
  }

  export type role_permissionsCountOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionsAvgOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionsMaxOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionsMinOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionsSumOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MenuNullableScalarRelationFilter = {
    is?: menuWhereInput | null
    isNot?: menuWhereInput | null
  }

  export type MenuListRelationFilter = {
    every?: menuWhereInput
    some?: menuWhereInput
    none?: menuWhereInput
  }

  export type menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    uri?: SortOrder
    permission?: SortOrder
    label?: SortOrder
    target?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    uri?: SortOrder
    permission?: SortOrder
    label?: SortOrder
    target?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    uri?: SortOrder
    permission?: SortOrder
    label?: SortOrder
    target?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type operation_logCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    uri?: SortOrder
    ip?: SortOrder
    input?: SortOrder
    created_at?: SortOrder
  }

  export type operation_logAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type operation_logMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    uri?: SortOrder
    ip?: SortOrder
    created_at?: SortOrder
  }

  export type operation_logMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    uri?: SortOrder
    ip?: SortOrder
    created_at?: SortOrder
  }

  export type operation_logSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthAccountListRelationFilter = {
    every?: authAccountWhereInput
    some?: authAccountWhereInput
    none?: authAccountWhereInput
  }

  export type AuthSessionListRelationFilter = {
    every?: authSessionWhereInput
    some?: authSessionWhereInput
    none?: authSessionWhereInput
  }

  export type AuthTwoFactorNullableScalarRelationFilter = {
    is?: authTwoFactorWhereInput | null
    isNot?: authTwoFactorWhereInput | null
  }

  export type authAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuthUserScalarRelationFilter = {
    is?: authUserWhereInput
    isNot?: authUserWhereInput
  }

  export type authAccountProviderIdAccountIdCompoundUniqueInput = {
    providerId: string
    accountId: string
  }

  export type authAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type authSessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type authSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type authSessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type authVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authTwoFactorCountOrderByAggregateInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    enabled?: SortOrder
    userId?: SortOrder
  }

  export type authTwoFactorMaxOrderByAggregateInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    enabled?: SortOrder
    userId?: SortOrder
  }

  export type authTwoFactorMinOrderByAggregateInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    enabled?: SortOrder
    userId?: SortOrder
  }

  export type rolesCreateNestedManyWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type operation_logCreateNestedManyWithoutUserInput = {
    create?: XOR<operation_logCreateWithoutUserInput, operation_logUncheckedCreateWithoutUserInput> | operation_logCreateWithoutUserInput[] | operation_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: operation_logCreateOrConnectWithoutUserInput | operation_logCreateOrConnectWithoutUserInput[]
    createMany?: operation_logCreateManyUserInputEnvelope
    connect?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
  }

  export type rolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type operation_logUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<operation_logCreateWithoutUserInput, operation_logUncheckedCreateWithoutUserInput> | operation_logCreateWithoutUserInput[] | operation_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: operation_logCreateOrConnectWithoutUserInput | operation_logCreateOrConnectWithoutUserInput[]
    createMany?: operation_logCreateManyUserInputEnvelope
    connect?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type rolesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutUsersInput | rolesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutUsersInput | rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutUsersInput | rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type operation_logUpdateManyWithoutUserNestedInput = {
    create?: XOR<operation_logCreateWithoutUserInput, operation_logUncheckedCreateWithoutUserInput> | operation_logCreateWithoutUserInput[] | operation_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: operation_logCreateOrConnectWithoutUserInput | operation_logCreateOrConnectWithoutUserInput[]
    upsert?: operation_logUpsertWithWhereUniqueWithoutUserInput | operation_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: operation_logCreateManyUserInputEnvelope
    set?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    disconnect?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    delete?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    connect?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    update?: operation_logUpdateWithWhereUniqueWithoutUserInput | operation_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: operation_logUpdateManyWithWhereWithoutUserInput | operation_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: operation_logScalarWhereInput | operation_logScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutUsersInput | rolesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutUsersInput | rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutUsersInput | rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type operation_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<operation_logCreateWithoutUserInput, operation_logUncheckedCreateWithoutUserInput> | operation_logCreateWithoutUserInput[] | operation_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: operation_logCreateOrConnectWithoutUserInput | operation_logCreateOrConnectWithoutUserInput[]
    upsert?: operation_logUpsertWithWhereUniqueWithoutUserInput | operation_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: operation_logCreateManyUserInputEnvelope
    set?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    disconnect?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    delete?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    connect?: operation_logWhereUniqueInput | operation_logWhereUniqueInput[]
    update?: operation_logUpdateWithWhereUniqueWithoutUserInput | operation_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: operation_logUpdateManyWithWhereWithoutUserInput | operation_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: operation_logScalarWhereInput | operation_logScalarWhereInput[]
  }

  export type role_permissionsCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type role_permissionsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type role_permissionsUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutRoleInput | role_permissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutRoleInput | role_permissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutRoleInput | role_permissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type role_permissionsUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutRoleInput | role_permissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutRoleInput | role_permissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutRoleInput | role_permissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type role_permissionsCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type role_permissionsUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type role_permissionsUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutPermissionInput | role_permissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutPermissionInput | role_permissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutPermissionInput | role_permissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type role_permissionsUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutPermissionInput | role_permissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutPermissionInput | role_permissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutPermissionInput | role_permissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type rolesCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<rolesCreateWithoutPermissionsInput, rolesUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: rolesCreateOrConnectWithoutPermissionsInput
    connect?: rolesWhereUniqueInput
  }

  export type permissionsCreateNestedOneWithoutRolesInput = {
    create?: XOR<permissionsCreateWithoutRolesInput, permissionsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutRolesInput
    connect?: permissionsWhereUniqueInput
  }

  export type rolesUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<rolesCreateWithoutPermissionsInput, rolesUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: rolesCreateOrConnectWithoutPermissionsInput
    upsert?: rolesUpsertWithoutPermissionsInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutPermissionsInput, rolesUpdateWithoutPermissionsInput>, rolesUncheckedUpdateWithoutPermissionsInput>
  }

  export type permissionsUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<permissionsCreateWithoutRolesInput, permissionsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutRolesInput
    upsert?: permissionsUpsertWithoutRolesInput
    connect?: permissionsWhereUniqueInput
    update?: XOR<XOR<permissionsUpdateToOneWithWhereWithoutRolesInput, permissionsUpdateWithoutRolesInput>, permissionsUncheckedUpdateWithoutRolesInput>
  }

  export type menuCreateNestedOneWithoutChildrenInput = {
    create?: XOR<menuCreateWithoutChildrenInput, menuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: menuCreateOrConnectWithoutChildrenInput
    connect?: menuWhereUniqueInput
  }

  export type menuCreateNestedManyWithoutParentInput = {
    create?: XOR<menuCreateWithoutParentInput, menuUncheckedCreateWithoutParentInput> | menuCreateWithoutParentInput[] | menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: menuCreateOrConnectWithoutParentInput | menuCreateOrConnectWithoutParentInput[]
    createMany?: menuCreateManyParentInputEnvelope
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
  }

  export type menuUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<menuCreateWithoutParentInput, menuUncheckedCreateWithoutParentInput> | menuCreateWithoutParentInput[] | menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: menuCreateOrConnectWithoutParentInput | menuCreateOrConnectWithoutParentInput[]
    createMany?: menuCreateManyParentInputEnvelope
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
  }

  export type menuUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<menuCreateWithoutChildrenInput, menuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: menuCreateOrConnectWithoutChildrenInput
    upsert?: menuUpsertWithoutChildrenInput
    disconnect?: menuWhereInput | boolean
    delete?: menuWhereInput | boolean
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutChildrenInput, menuUpdateWithoutChildrenInput>, menuUncheckedUpdateWithoutChildrenInput>
  }

  export type menuUpdateManyWithoutParentNestedInput = {
    create?: XOR<menuCreateWithoutParentInput, menuUncheckedCreateWithoutParentInput> | menuCreateWithoutParentInput[] | menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: menuCreateOrConnectWithoutParentInput | menuCreateOrConnectWithoutParentInput[]
    upsert?: menuUpsertWithWhereUniqueWithoutParentInput | menuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: menuCreateManyParentInputEnvelope
    set?: menuWhereUniqueInput | menuWhereUniqueInput[]
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[]
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    update?: menuUpdateWithWhereUniqueWithoutParentInput | menuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: menuUpdateManyWithWhereWithoutParentInput | menuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type menuUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<menuCreateWithoutParentInput, menuUncheckedCreateWithoutParentInput> | menuCreateWithoutParentInput[] | menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: menuCreateOrConnectWithoutParentInput | menuCreateOrConnectWithoutParentInput[]
    upsert?: menuUpsertWithWhereUniqueWithoutParentInput | menuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: menuCreateManyParentInputEnvelope
    set?: menuWhereUniqueInput | menuWhereUniqueInput[]
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[]
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    update?: menuUpdateWithWhereUniqueWithoutParentInput | menuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: menuUpdateManyWithWhereWithoutParentInput | menuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOperation_logsInput = {
    create?: XOR<usersCreateWithoutOperation_logsInput, usersUncheckedCreateWithoutOperation_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOperation_logsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutOperation_logsNestedInput = {
    create?: XOR<usersCreateWithoutOperation_logsInput, usersUncheckedCreateWithoutOperation_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOperation_logsInput
    upsert?: usersUpsertWithoutOperation_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOperation_logsInput, usersUpdateWithoutOperation_logsInput>, usersUncheckedUpdateWithoutOperation_logsInput>
  }

  export type authAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<authAccountCreateWithoutUserInput, authAccountUncheckedCreateWithoutUserInput> | authAccountCreateWithoutUserInput[] | authAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authAccountCreateOrConnectWithoutUserInput | authAccountCreateOrConnectWithoutUserInput[]
    createMany?: authAccountCreateManyUserInputEnvelope
    connect?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
  }

  export type authSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<authSessionCreateWithoutUserInput, authSessionUncheckedCreateWithoutUserInput> | authSessionCreateWithoutUserInput[] | authSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authSessionCreateOrConnectWithoutUserInput | authSessionCreateOrConnectWithoutUserInput[]
    createMany?: authSessionCreateManyUserInputEnvelope
    connect?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
  }

  export type authTwoFactorCreateNestedOneWithoutUserInput = {
    create?: XOR<authTwoFactorCreateWithoutUserInput, authTwoFactorUncheckedCreateWithoutUserInput>
    connectOrCreate?: authTwoFactorCreateOrConnectWithoutUserInput
    connect?: authTwoFactorWhereUniqueInput
  }

  export type authAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<authAccountCreateWithoutUserInput, authAccountUncheckedCreateWithoutUserInput> | authAccountCreateWithoutUserInput[] | authAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authAccountCreateOrConnectWithoutUserInput | authAccountCreateOrConnectWithoutUserInput[]
    createMany?: authAccountCreateManyUserInputEnvelope
    connect?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
  }

  export type authSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<authSessionCreateWithoutUserInput, authSessionUncheckedCreateWithoutUserInput> | authSessionCreateWithoutUserInput[] | authSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authSessionCreateOrConnectWithoutUserInput | authSessionCreateOrConnectWithoutUserInput[]
    createMany?: authSessionCreateManyUserInputEnvelope
    connect?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
  }

  export type authTwoFactorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<authTwoFactorCreateWithoutUserInput, authTwoFactorUncheckedCreateWithoutUserInput>
    connectOrCreate?: authTwoFactorCreateOrConnectWithoutUserInput
    connect?: authTwoFactorWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type authAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<authAccountCreateWithoutUserInput, authAccountUncheckedCreateWithoutUserInput> | authAccountCreateWithoutUserInput[] | authAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authAccountCreateOrConnectWithoutUserInput | authAccountCreateOrConnectWithoutUserInput[]
    upsert?: authAccountUpsertWithWhereUniqueWithoutUserInput | authAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: authAccountCreateManyUserInputEnvelope
    set?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    disconnect?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    delete?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    connect?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    update?: authAccountUpdateWithWhereUniqueWithoutUserInput | authAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: authAccountUpdateManyWithWhereWithoutUserInput | authAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: authAccountScalarWhereInput | authAccountScalarWhereInput[]
  }

  export type authSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<authSessionCreateWithoutUserInput, authSessionUncheckedCreateWithoutUserInput> | authSessionCreateWithoutUserInput[] | authSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authSessionCreateOrConnectWithoutUserInput | authSessionCreateOrConnectWithoutUserInput[]
    upsert?: authSessionUpsertWithWhereUniqueWithoutUserInput | authSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: authSessionCreateManyUserInputEnvelope
    set?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    disconnect?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    delete?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    connect?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    update?: authSessionUpdateWithWhereUniqueWithoutUserInput | authSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: authSessionUpdateManyWithWhereWithoutUserInput | authSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: authSessionScalarWhereInput | authSessionScalarWhereInput[]
  }

  export type authTwoFactorUpdateOneWithoutUserNestedInput = {
    create?: XOR<authTwoFactorCreateWithoutUserInput, authTwoFactorUncheckedCreateWithoutUserInput>
    connectOrCreate?: authTwoFactorCreateOrConnectWithoutUserInput
    upsert?: authTwoFactorUpsertWithoutUserInput
    disconnect?: authTwoFactorWhereInput | boolean
    delete?: authTwoFactorWhereInput | boolean
    connect?: authTwoFactorWhereUniqueInput
    update?: XOR<XOR<authTwoFactorUpdateToOneWithWhereWithoutUserInput, authTwoFactorUpdateWithoutUserInput>, authTwoFactorUncheckedUpdateWithoutUserInput>
  }

  export type authAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<authAccountCreateWithoutUserInput, authAccountUncheckedCreateWithoutUserInput> | authAccountCreateWithoutUserInput[] | authAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authAccountCreateOrConnectWithoutUserInput | authAccountCreateOrConnectWithoutUserInput[]
    upsert?: authAccountUpsertWithWhereUniqueWithoutUserInput | authAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: authAccountCreateManyUserInputEnvelope
    set?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    disconnect?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    delete?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    connect?: authAccountWhereUniqueInput | authAccountWhereUniqueInput[]
    update?: authAccountUpdateWithWhereUniqueWithoutUserInput | authAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: authAccountUpdateManyWithWhereWithoutUserInput | authAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: authAccountScalarWhereInput | authAccountScalarWhereInput[]
  }

  export type authSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<authSessionCreateWithoutUserInput, authSessionUncheckedCreateWithoutUserInput> | authSessionCreateWithoutUserInput[] | authSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authSessionCreateOrConnectWithoutUserInput | authSessionCreateOrConnectWithoutUserInput[]
    upsert?: authSessionUpsertWithWhereUniqueWithoutUserInput | authSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: authSessionCreateManyUserInputEnvelope
    set?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    disconnect?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    delete?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    connect?: authSessionWhereUniqueInput | authSessionWhereUniqueInput[]
    update?: authSessionUpdateWithWhereUniqueWithoutUserInput | authSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: authSessionUpdateManyWithWhereWithoutUserInput | authSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: authSessionScalarWhereInput | authSessionScalarWhereInput[]
  }

  export type authTwoFactorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<authTwoFactorCreateWithoutUserInput, authTwoFactorUncheckedCreateWithoutUserInput>
    connectOrCreate?: authTwoFactorCreateOrConnectWithoutUserInput
    upsert?: authTwoFactorUpsertWithoutUserInput
    disconnect?: authTwoFactorWhereInput | boolean
    delete?: authTwoFactorWhereInput | boolean
    connect?: authTwoFactorWhereUniqueInput
    update?: XOR<XOR<authTwoFactorUpdateToOneWithWhereWithoutUserInput, authTwoFactorUpdateWithoutUserInput>, authTwoFactorUncheckedUpdateWithoutUserInput>
  }

  export type authUserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<authUserCreateWithoutAccountsInput, authUserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: authUserCreateOrConnectWithoutAccountsInput
    connect?: authUserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type authUserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<authUserCreateWithoutAccountsInput, authUserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: authUserCreateOrConnectWithoutAccountsInput
    upsert?: authUserUpsertWithoutAccountsInput
    connect?: authUserWhereUniqueInput
    update?: XOR<XOR<authUserUpdateToOneWithWhereWithoutAccountsInput, authUserUpdateWithoutAccountsInput>, authUserUncheckedUpdateWithoutAccountsInput>
  }

  export type authUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<authUserCreateWithoutSessionsInput, authUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: authUserCreateOrConnectWithoutSessionsInput
    connect?: authUserWhereUniqueInput
  }

  export type authUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<authUserCreateWithoutSessionsInput, authUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: authUserCreateOrConnectWithoutSessionsInput
    upsert?: authUserUpsertWithoutSessionsInput
    connect?: authUserWhereUniqueInput
    update?: XOR<XOR<authUserUpdateToOneWithWhereWithoutSessionsInput, authUserUpdateWithoutSessionsInput>, authUserUncheckedUpdateWithoutSessionsInput>
  }

  export type authUserCreateNestedOneWithoutTwoFactorInput = {
    create?: XOR<authUserCreateWithoutTwoFactorInput, authUserUncheckedCreateWithoutTwoFactorInput>
    connectOrCreate?: authUserCreateOrConnectWithoutTwoFactorInput
    connect?: authUserWhereUniqueInput
  }

  export type authUserUpdateOneRequiredWithoutTwoFactorNestedInput = {
    create?: XOR<authUserCreateWithoutTwoFactorInput, authUserUncheckedCreateWithoutTwoFactorInput>
    connectOrCreate?: authUserCreateOrConnectWithoutTwoFactorInput
    upsert?: authUserUpsertWithoutTwoFactorInput
    connect?: authUserWhereUniqueInput
    update?: XOR<XOR<authUserUpdateToOneWithWhereWithoutTwoFactorInput, authUserUpdateWithoutTwoFactorInput>, authUserUncheckedUpdateWithoutTwoFactorInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type rolesCreateWithoutUsersInput = {
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: role_permissionsCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: role_permissionsUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type operation_logCreateWithoutUserInput = {
    method: string
    uri: string
    ip: string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type operation_logUncheckedCreateWithoutUserInput = {
    id?: number
    method: string
    uri: string
    ip: string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type operation_logCreateOrConnectWithoutUserInput = {
    where: operation_logWhereUniqueInput
    create: XOR<operation_logCreateWithoutUserInput, operation_logUncheckedCreateWithoutUserInput>
  }

  export type operation_logCreateManyUserInputEnvelope = {
    data: operation_logCreateManyUserInput | operation_logCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type rolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: rolesWhereUniqueInput
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type rolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: rolesWhereUniqueInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateManyWithWhereWithoutUsersInput = {
    where: rolesScalarWhereInput
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyWithoutUsersInput>
  }

  export type rolesScalarWhereInput = {
    AND?: rolesScalarWhereInput | rolesScalarWhereInput[]
    OR?: rolesScalarWhereInput[]
    NOT?: rolesScalarWhereInput | rolesScalarWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    slug?: StringFilter<"roles"> | string
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
  }

  export type operation_logUpsertWithWhereUniqueWithoutUserInput = {
    where: operation_logWhereUniqueInput
    update: XOR<operation_logUpdateWithoutUserInput, operation_logUncheckedUpdateWithoutUserInput>
    create: XOR<operation_logCreateWithoutUserInput, operation_logUncheckedCreateWithoutUserInput>
  }

  export type operation_logUpdateWithWhereUniqueWithoutUserInput = {
    where: operation_logWhereUniqueInput
    data: XOR<operation_logUpdateWithoutUserInput, operation_logUncheckedUpdateWithoutUserInput>
  }

  export type operation_logUpdateManyWithWhereWithoutUserInput = {
    where: operation_logScalarWhereInput
    data: XOR<operation_logUpdateManyMutationInput, operation_logUncheckedUpdateManyWithoutUserInput>
  }

  export type operation_logScalarWhereInput = {
    AND?: operation_logScalarWhereInput | operation_logScalarWhereInput[]
    OR?: operation_logScalarWhereInput[]
    NOT?: operation_logScalarWhereInput | operation_logScalarWhereInput[]
    id?: IntFilter<"operation_log"> | number
    user_id?: IntFilter<"operation_log"> | number
    method?: StringFilter<"operation_log"> | string
    uri?: StringFilter<"operation_log"> | string
    ip?: StringFilter<"operation_log"> | string
    input?: JsonNullableFilter<"operation_log">
    created_at?: DateTimeFilter<"operation_log"> | Date | string
  }

  export type role_permissionsCreateWithoutRoleInput = {
    permission: permissionsCreateNestedOneWithoutRolesInput
  }

  export type role_permissionsUncheckedCreateWithoutRoleInput = {
    permission_id: number
  }

  export type role_permissionsCreateOrConnectWithoutRoleInput = {
    where: role_permissionsWhereUniqueInput
    create: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionsCreateManyRoleInputEnvelope = {
    data: role_permissionsCreateManyRoleInput | role_permissionsCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutRolesInput = {
    username: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    operation_logs?: operation_logCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    operation_logs?: operation_logUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type role_permissionsUpsertWithWhereUniqueWithoutRoleInput = {
    where: role_permissionsWhereUniqueInput
    update: XOR<role_permissionsUpdateWithoutRoleInput, role_permissionsUncheckedUpdateWithoutRoleInput>
    create: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionsUpdateWithWhereUniqueWithoutRoleInput = {
    where: role_permissionsWhereUniqueInput
    data: XOR<role_permissionsUpdateWithoutRoleInput, role_permissionsUncheckedUpdateWithoutRoleInput>
  }

  export type role_permissionsUpdateManyWithWhereWithoutRoleInput = {
    where: role_permissionsScalarWhereInput
    data: XOR<role_permissionsUpdateManyMutationInput, role_permissionsUncheckedUpdateManyWithoutRoleInput>
  }

  export type role_permissionsScalarWhereInput = {
    AND?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
    OR?: role_permissionsScalarWhereInput[]
    NOT?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
    role_id?: IntFilter<"role_permissions"> | number
    permission_id?: IntFilter<"role_permissions"> | number
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type role_permissionsCreateWithoutPermissionInput = {
    role: rolesCreateNestedOneWithoutPermissionsInput
  }

  export type role_permissionsUncheckedCreateWithoutPermissionInput = {
    role_id: number
  }

  export type role_permissionsCreateOrConnectWithoutPermissionInput = {
    where: role_permissionsWhereUniqueInput
    create: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionsCreateManyPermissionInputEnvelope = {
    data: role_permissionsCreateManyPermissionInput | role_permissionsCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type role_permissionsUpsertWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionsWhereUniqueInput
    update: XOR<role_permissionsUpdateWithoutPermissionInput, role_permissionsUncheckedUpdateWithoutPermissionInput>
    create: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionsUpdateWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionsWhereUniqueInput
    data: XOR<role_permissionsUpdateWithoutPermissionInput, role_permissionsUncheckedUpdateWithoutPermissionInput>
  }

  export type role_permissionsUpdateManyWithWhereWithoutPermissionInput = {
    where: role_permissionsScalarWhereInput
    data: XOR<role_permissionsUpdateManyMutationInput, role_permissionsUncheckedUpdateManyWithoutPermissionInput>
  }

  export type rolesCreateWithoutPermissionsInput = {
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutPermissionsInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutPermissionsInput, rolesUncheckedCreateWithoutPermissionsInput>
  }

  export type permissionsCreateWithoutRolesInput = {
    name: string
    slug: string
    http_path?: string | null
    http_method?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionsUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    slug: string
    http_path?: string | null
    http_method?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionsCreateOrConnectWithoutRolesInput = {
    where: permissionsWhereUniqueInput
    create: XOR<permissionsCreateWithoutRolesInput, permissionsUncheckedCreateWithoutRolesInput>
  }

  export type rolesUpsertWithoutPermissionsInput = {
    update: XOR<rolesUpdateWithoutPermissionsInput, rolesUncheckedUpdateWithoutPermissionsInput>
    create: XOR<rolesCreateWithoutPermissionsInput, rolesUncheckedCreateWithoutPermissionsInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutPermissionsInput, rolesUncheckedUpdateWithoutPermissionsInput>
  }

  export type rolesUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type permissionsUpsertWithoutRolesInput = {
    update: XOR<permissionsUpdateWithoutRolesInput, permissionsUncheckedUpdateWithoutRolesInput>
    create: XOR<permissionsCreateWithoutRolesInput, permissionsUncheckedCreateWithoutRolesInput>
    where?: permissionsWhereInput
  }

  export type permissionsUpdateToOneWithWhereWithoutRolesInput = {
    where?: permissionsWhereInput
    data: XOR<permissionsUpdateWithoutRolesInput, permissionsUncheckedUpdateWithoutRolesInput>
  }

  export type permissionsUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    http_path?: NullableStringFieldUpdateOperationsInput | string | null
    http_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionsUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    http_path?: NullableStringFieldUpdateOperationsInput | string | null
    http_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuCreateWithoutChildrenInput = {
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    parent?: menuCreateNestedOneWithoutChildrenInput
  }

  export type menuUncheckedCreateWithoutChildrenInput = {
    id?: number
    parent_id?: number | null
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type menuCreateOrConnectWithoutChildrenInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutChildrenInput, menuUncheckedCreateWithoutChildrenInput>
  }

  export type menuCreateWithoutParentInput = {
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    children?: menuCreateNestedManyWithoutParentInput
  }

  export type menuUncheckedCreateWithoutParentInput = {
    id?: number
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    children?: menuUncheckedCreateNestedManyWithoutParentInput
  }

  export type menuCreateOrConnectWithoutParentInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutParentInput, menuUncheckedCreateWithoutParentInput>
  }

  export type menuCreateManyParentInputEnvelope = {
    data: menuCreateManyParentInput | menuCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type menuUpsertWithoutChildrenInput = {
    update: XOR<menuUpdateWithoutChildrenInput, menuUncheckedUpdateWithoutChildrenInput>
    create: XOR<menuCreateWithoutChildrenInput, menuUncheckedCreateWithoutChildrenInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutChildrenInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutChildrenInput, menuUncheckedUpdateWithoutChildrenInput>
  }

  export type menuUpdateWithoutChildrenInput = {
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: menuUpdateOneWithoutChildrenNestedInput
  }

  export type menuUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuUpsertWithWhereUniqueWithoutParentInput = {
    where: menuWhereUniqueInput
    update: XOR<menuUpdateWithoutParentInput, menuUncheckedUpdateWithoutParentInput>
    create: XOR<menuCreateWithoutParentInput, menuUncheckedCreateWithoutParentInput>
  }

  export type menuUpdateWithWhereUniqueWithoutParentInput = {
    where: menuWhereUniqueInput
    data: XOR<menuUpdateWithoutParentInput, menuUncheckedUpdateWithoutParentInput>
  }

  export type menuUpdateManyWithWhereWithoutParentInput = {
    where: menuScalarWhereInput
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyWithoutParentInput>
  }

  export type menuScalarWhereInput = {
    AND?: menuScalarWhereInput | menuScalarWhereInput[]
    OR?: menuScalarWhereInput[]
    NOT?: menuScalarWhereInput | menuScalarWhereInput[]
    id?: IntFilter<"menu"> | number
    parent_id?: IntNullableFilter<"menu"> | number | null
    order?: IntFilter<"menu"> | number
    title?: StringFilter<"menu"> | string
    icon?: StringNullableFilter<"menu"> | string | null
    uri?: StringNullableFilter<"menu"> | string | null
    permission?: StringNullableFilter<"menu"> | string | null
    label?: StringNullableFilter<"menu"> | string | null
    target?: StringNullableFilter<"menu"> | string | null
    created_at?: DateTimeFilter<"menu"> | Date | string
    updated_at?: DateTimeFilter<"menu"> | Date | string
  }

  export type usersCreateWithoutOperation_logsInput = {
    username: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOperation_logsInput = {
    id?: number
    username: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOperation_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOperation_logsInput, usersUncheckedCreateWithoutOperation_logsInput>
  }

  export type usersUpsertWithoutOperation_logsInput = {
    update: XOR<usersUpdateWithoutOperation_logsInput, usersUncheckedUpdateWithoutOperation_logsInput>
    create: XOR<usersCreateWithoutOperation_logsInput, usersUncheckedCreateWithoutOperation_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOperation_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOperation_logsInput, usersUncheckedUpdateWithoutOperation_logsInput>
  }

  export type usersUpdateWithoutOperation_logsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOperation_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type authAccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authAccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authAccountCreateOrConnectWithoutUserInput = {
    where: authAccountWhereUniqueInput
    create: XOR<authAccountCreateWithoutUserInput, authAccountUncheckedCreateWithoutUserInput>
  }

  export type authAccountCreateManyUserInputEnvelope = {
    data: authAccountCreateManyUserInput | authAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type authSessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type authSessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type authSessionCreateOrConnectWithoutUserInput = {
    where: authSessionWhereUniqueInput
    create: XOR<authSessionCreateWithoutUserInput, authSessionUncheckedCreateWithoutUserInput>
  }

  export type authSessionCreateManyUserInputEnvelope = {
    data: authSessionCreateManyUserInput | authSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type authTwoFactorCreateWithoutUserInput = {
    id?: string
    secret: string
    backupCodes: string
    enabled?: boolean
  }

  export type authTwoFactorUncheckedCreateWithoutUserInput = {
    id?: string
    secret: string
    backupCodes: string
    enabled?: boolean
  }

  export type authTwoFactorCreateOrConnectWithoutUserInput = {
    where: authTwoFactorWhereUniqueInput
    create: XOR<authTwoFactorCreateWithoutUserInput, authTwoFactorUncheckedCreateWithoutUserInput>
  }

  export type authAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: authAccountWhereUniqueInput
    update: XOR<authAccountUpdateWithoutUserInput, authAccountUncheckedUpdateWithoutUserInput>
    create: XOR<authAccountCreateWithoutUserInput, authAccountUncheckedCreateWithoutUserInput>
  }

  export type authAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: authAccountWhereUniqueInput
    data: XOR<authAccountUpdateWithoutUserInput, authAccountUncheckedUpdateWithoutUserInput>
  }

  export type authAccountUpdateManyWithWhereWithoutUserInput = {
    where: authAccountScalarWhereInput
    data: XOR<authAccountUpdateManyMutationInput, authAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type authAccountScalarWhereInput = {
    AND?: authAccountScalarWhereInput | authAccountScalarWhereInput[]
    OR?: authAccountScalarWhereInput[]
    NOT?: authAccountScalarWhereInput | authAccountScalarWhereInput[]
    id?: StringFilter<"authAccount"> | string
    accountId?: StringFilter<"authAccount"> | string
    providerId?: StringFilter<"authAccount"> | string
    userId?: StringFilter<"authAccount"> | string
    accessToken?: StringNullableFilter<"authAccount"> | string | null
    refreshToken?: StringNullableFilter<"authAccount"> | string | null
    idToken?: StringNullableFilter<"authAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"authAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"authAccount"> | Date | string | null
    scope?: StringNullableFilter<"authAccount"> | string | null
    password?: StringNullableFilter<"authAccount"> | string | null
    createdAt?: DateTimeFilter<"authAccount"> | Date | string
    updatedAt?: DateTimeFilter<"authAccount"> | Date | string
  }

  export type authSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: authSessionWhereUniqueInput
    update: XOR<authSessionUpdateWithoutUserInput, authSessionUncheckedUpdateWithoutUserInput>
    create: XOR<authSessionCreateWithoutUserInput, authSessionUncheckedCreateWithoutUserInput>
  }

  export type authSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: authSessionWhereUniqueInput
    data: XOR<authSessionUpdateWithoutUserInput, authSessionUncheckedUpdateWithoutUserInput>
  }

  export type authSessionUpdateManyWithWhereWithoutUserInput = {
    where: authSessionScalarWhereInput
    data: XOR<authSessionUpdateManyMutationInput, authSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type authSessionScalarWhereInput = {
    AND?: authSessionScalarWhereInput | authSessionScalarWhereInput[]
    OR?: authSessionScalarWhereInput[]
    NOT?: authSessionScalarWhereInput | authSessionScalarWhereInput[]
    id?: StringFilter<"authSession"> | string
    expiresAt?: DateTimeFilter<"authSession"> | Date | string
    token?: StringFilter<"authSession"> | string
    createdAt?: DateTimeFilter<"authSession"> | Date | string
    updatedAt?: DateTimeFilter<"authSession"> | Date | string
    ipAddress?: StringNullableFilter<"authSession"> | string | null
    userAgent?: StringNullableFilter<"authSession"> | string | null
    userId?: StringFilter<"authSession"> | string
  }

  export type authTwoFactorUpsertWithoutUserInput = {
    update: XOR<authTwoFactorUpdateWithoutUserInput, authTwoFactorUncheckedUpdateWithoutUserInput>
    create: XOR<authTwoFactorCreateWithoutUserInput, authTwoFactorUncheckedCreateWithoutUserInput>
    where?: authTwoFactorWhereInput
  }

  export type authTwoFactorUpdateToOneWithWhereWithoutUserInput = {
    where?: authTwoFactorWhereInput
    data: XOR<authTwoFactorUpdateWithoutUserInput, authTwoFactorUncheckedUpdateWithoutUserInput>
  }

  export type authTwoFactorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type authTwoFactorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type authUserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: authSessionCreateNestedManyWithoutUserInput
    twoFactor?: authTwoFactorCreateNestedOneWithoutUserInput
  }

  export type authUserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: authSessionUncheckedCreateNestedManyWithoutUserInput
    twoFactor?: authTwoFactorUncheckedCreateNestedOneWithoutUserInput
  }

  export type authUserCreateOrConnectWithoutAccountsInput = {
    where: authUserWhereUniqueInput
    create: XOR<authUserCreateWithoutAccountsInput, authUserUncheckedCreateWithoutAccountsInput>
  }

  export type authUserUpsertWithoutAccountsInput = {
    update: XOR<authUserUpdateWithoutAccountsInput, authUserUncheckedUpdateWithoutAccountsInput>
    create: XOR<authUserCreateWithoutAccountsInput, authUserUncheckedCreateWithoutAccountsInput>
    where?: authUserWhereInput
  }

  export type authUserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: authUserWhereInput
    data: XOR<authUserUpdateWithoutAccountsInput, authUserUncheckedUpdateWithoutAccountsInput>
  }

  export type authUserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: authSessionUpdateManyWithoutUserNestedInput
    twoFactor?: authTwoFactorUpdateOneWithoutUserNestedInput
  }

  export type authUserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: authSessionUncheckedUpdateManyWithoutUserNestedInput
    twoFactor?: authTwoFactorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type authUserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: authAccountCreateNestedManyWithoutUserInput
    twoFactor?: authTwoFactorCreateNestedOneWithoutUserInput
  }

  export type authUserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: authAccountUncheckedCreateNestedManyWithoutUserInput
    twoFactor?: authTwoFactorUncheckedCreateNestedOneWithoutUserInput
  }

  export type authUserCreateOrConnectWithoutSessionsInput = {
    where: authUserWhereUniqueInput
    create: XOR<authUserCreateWithoutSessionsInput, authUserUncheckedCreateWithoutSessionsInput>
  }

  export type authUserUpsertWithoutSessionsInput = {
    update: XOR<authUserUpdateWithoutSessionsInput, authUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<authUserCreateWithoutSessionsInput, authUserUncheckedCreateWithoutSessionsInput>
    where?: authUserWhereInput
  }

  export type authUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: authUserWhereInput
    data: XOR<authUserUpdateWithoutSessionsInput, authUserUncheckedUpdateWithoutSessionsInput>
  }

  export type authUserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: authAccountUpdateManyWithoutUserNestedInput
    twoFactor?: authTwoFactorUpdateOneWithoutUserNestedInput
  }

  export type authUserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: authAccountUncheckedUpdateManyWithoutUserNestedInput
    twoFactor?: authTwoFactorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type authUserCreateWithoutTwoFactorInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: authAccountCreateNestedManyWithoutUserInput
    sessions?: authSessionCreateNestedManyWithoutUserInput
  }

  export type authUserUncheckedCreateWithoutTwoFactorInput = {
    id?: string
    email: string
    name?: string
    emailVerified?: boolean
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: authAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: authSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type authUserCreateOrConnectWithoutTwoFactorInput = {
    where: authUserWhereUniqueInput
    create: XOR<authUserCreateWithoutTwoFactorInput, authUserUncheckedCreateWithoutTwoFactorInput>
  }

  export type authUserUpsertWithoutTwoFactorInput = {
    update: XOR<authUserUpdateWithoutTwoFactorInput, authUserUncheckedUpdateWithoutTwoFactorInput>
    create: XOR<authUserCreateWithoutTwoFactorInput, authUserUncheckedCreateWithoutTwoFactorInput>
    where?: authUserWhereInput
  }

  export type authUserUpdateToOneWithWhereWithoutTwoFactorInput = {
    where?: authUserWhereInput
    data: XOR<authUserUpdateWithoutTwoFactorInput, authUserUncheckedUpdateWithoutTwoFactorInput>
  }

  export type authUserUpdateWithoutTwoFactorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: authAccountUpdateManyWithoutUserNestedInput
    sessions?: authSessionUpdateManyWithoutUserNestedInput
  }

  export type authUserUncheckedUpdateWithoutTwoFactorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: authAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: authSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type operation_logCreateManyUserInput = {
    id?: number
    method: string
    uri: string
    ip: string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type rolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: role_permissionsUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: role_permissionsUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operation_logUpdateWithoutUserInput = {
    method?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operation_logUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operation_logUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    input?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsCreateManyRoleInput = {
    permission_id: number
  }

  export type role_permissionsUpdateWithoutRoleInput = {
    permission?: permissionsUpdateOneRequiredWithoutRolesNestedInput
  }

  export type role_permissionsUncheckedUpdateWithoutRoleInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type role_permissionsUncheckedUpdateManyWithoutRoleInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_logs?: operation_logUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    operation_logs?: operation_logUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsCreateManyPermissionInput = {
    role_id: number
  }

  export type role_permissionsUpdateWithoutPermissionInput = {
    role?: rolesUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type role_permissionsUncheckedUpdateWithoutPermissionInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type role_permissionsUncheckedUpdateManyWithoutPermissionInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type menuCreateManyParentInput = {
    id?: number
    order?: number
    title: string
    icon?: string | null
    uri?: string | null
    permission?: string | null
    label?: string | null
    target?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type menuUpdateWithoutParentInput = {
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: menuUpdateManyWithoutParentNestedInput
  }

  export type menuUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: menuUncheckedUpdateManyWithoutParentNestedInput
  }

  export type menuUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authAccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authSessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type authAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type authSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type authSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}