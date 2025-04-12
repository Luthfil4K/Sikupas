
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
 * Model tbl_tim
 * 
 */
export type tbl_tim = $Result.DefaultSelection<Prisma.$tbl_timPayload>
/**
 * Model tbl_timkerja
 * 
 */
export type tbl_timkerja = $Result.DefaultSelection<Prisma.$tbl_timkerjaPayload>
/**
 * Model skp_skp
 * 
 */
export type skp_skp = $Result.DefaultSelection<Prisma.$skp_skpPayload>
/**
 * Model skp_uploadedfile
 * 
 */
export type skp_uploadedfile = $Result.DefaultSelection<Prisma.$skp_uploadedfilePayload>
/**
 * Model pegawai
 * 
 */
export type pegawai = $Result.DefaultSelection<Prisma.$pegawaiPayload>
/**
 * Model TimKerjaPegawai
 * 
 */
export type TimKerjaPegawai = $Result.DefaultSelection<Prisma.$TimKerjaPegawaiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_tims
 * const tbl_tims = await prisma.tbl_tim.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tbl_tims
   * const tbl_tims = await prisma.tbl_tim.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.tbl_tim`: Exposes CRUD operations for the **tbl_tim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_tims
    * const tbl_tims = await prisma.tbl_tim.findMany()
    * ```
    */
  get tbl_tim(): Prisma.tbl_timDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_timkerja`: Exposes CRUD operations for the **tbl_timkerja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_timkerjas
    * const tbl_timkerjas = await prisma.tbl_timkerja.findMany()
    * ```
    */
  get tbl_timkerja(): Prisma.tbl_timkerjaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skp_skp`: Exposes CRUD operations for the **skp_skp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skp_skps
    * const skp_skps = await prisma.skp_skp.findMany()
    * ```
    */
  get skp_skp(): Prisma.skp_skpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skp_uploadedfile`: Exposes CRUD operations for the **skp_uploadedfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skp_uploadedfiles
    * const skp_uploadedfiles = await prisma.skp_uploadedfile.findMany()
    * ```
    */
  get skp_uploadedfile(): Prisma.skp_uploadedfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pegawai`: Exposes CRUD operations for the **pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pegawais
    * const pegawais = await prisma.pegawai.findMany()
    * ```
    */
  get pegawai(): Prisma.pegawaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timKerjaPegawai`: Exposes CRUD operations for the **TimKerjaPegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimKerjaPegawais
    * const timKerjaPegawais = await prisma.timKerjaPegawai.findMany()
    * ```
    */
  get timKerjaPegawai(): Prisma.TimKerjaPegawaiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    tbl_tim: 'tbl_tim',
    tbl_timkerja: 'tbl_timkerja',
    skp_skp: 'skp_skp',
    skp_uploadedfile: 'skp_uploadedfile',
    pegawai: 'pegawai',
    TimKerjaPegawai: 'TimKerjaPegawai'
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
      modelProps: "tbl_tim" | "tbl_timkerja" | "skp_skp" | "skp_uploadedfile" | "pegawai" | "timKerjaPegawai"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tbl_tim: {
        payload: Prisma.$tbl_timPayload<ExtArgs>
        fields: Prisma.tbl_timFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_timFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_timFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload>
          }
          findFirst: {
            args: Prisma.tbl_timFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_timFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload>
          }
          findMany: {
            args: Prisma.tbl_timFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload>[]
          }
          create: {
            args: Prisma.tbl_timCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload>
          }
          createMany: {
            args: Prisma.tbl_timCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_timDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload>
          }
          update: {
            args: Prisma.tbl_timUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload>
          }
          deleteMany: {
            args: Prisma.tbl_timDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_timUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_timUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timPayload>
          }
          aggregate: {
            args: Prisma.Tbl_timAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_tim>
          }
          groupBy: {
            args: Prisma.tbl_timGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_timGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_timCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_timCountAggregateOutputType> | number
          }
        }
      }
      tbl_timkerja: {
        payload: Prisma.$tbl_timkerjaPayload<ExtArgs>
        fields: Prisma.tbl_timkerjaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_timkerjaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_timkerjaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload>
          }
          findFirst: {
            args: Prisma.tbl_timkerjaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_timkerjaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload>
          }
          findMany: {
            args: Prisma.tbl_timkerjaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload>[]
          }
          create: {
            args: Prisma.tbl_timkerjaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload>
          }
          createMany: {
            args: Prisma.tbl_timkerjaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_timkerjaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload>
          }
          update: {
            args: Prisma.tbl_timkerjaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload>
          }
          deleteMany: {
            args: Prisma.tbl_timkerjaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_timkerjaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_timkerjaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_timkerjaPayload>
          }
          aggregate: {
            args: Prisma.Tbl_timkerjaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_timkerja>
          }
          groupBy: {
            args: Prisma.tbl_timkerjaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_timkerjaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_timkerjaCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_timkerjaCountAggregateOutputType> | number
          }
        }
      }
      skp_skp: {
        payload: Prisma.$skp_skpPayload<ExtArgs>
        fields: Prisma.skp_skpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skp_skpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skp_skpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload>
          }
          findFirst: {
            args: Prisma.skp_skpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skp_skpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload>
          }
          findMany: {
            args: Prisma.skp_skpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload>[]
          }
          create: {
            args: Prisma.skp_skpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload>
          }
          createMany: {
            args: Prisma.skp_skpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skp_skpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload>
          }
          update: {
            args: Prisma.skp_skpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload>
          }
          deleteMany: {
            args: Prisma.skp_skpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skp_skpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skp_skpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_skpPayload>
          }
          aggregate: {
            args: Prisma.Skp_skpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkp_skp>
          }
          groupBy: {
            args: Prisma.skp_skpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Skp_skpGroupByOutputType>[]
          }
          count: {
            args: Prisma.skp_skpCountArgs<ExtArgs>
            result: $Utils.Optional<Skp_skpCountAggregateOutputType> | number
          }
        }
      }
      skp_uploadedfile: {
        payload: Prisma.$skp_uploadedfilePayload<ExtArgs>
        fields: Prisma.skp_uploadedfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skp_uploadedfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skp_uploadedfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload>
          }
          findFirst: {
            args: Prisma.skp_uploadedfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skp_uploadedfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload>
          }
          findMany: {
            args: Prisma.skp_uploadedfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload>[]
          }
          create: {
            args: Prisma.skp_uploadedfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload>
          }
          createMany: {
            args: Prisma.skp_uploadedfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skp_uploadedfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload>
          }
          update: {
            args: Prisma.skp_uploadedfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload>
          }
          deleteMany: {
            args: Prisma.skp_uploadedfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skp_uploadedfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skp_uploadedfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skp_uploadedfilePayload>
          }
          aggregate: {
            args: Prisma.Skp_uploadedfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkp_uploadedfile>
          }
          groupBy: {
            args: Prisma.skp_uploadedfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Skp_uploadedfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.skp_uploadedfileCountArgs<ExtArgs>
            result: $Utils.Optional<Skp_uploadedfileCountAggregateOutputType> | number
          }
        }
      }
      pegawai: {
        payload: Prisma.$pegawaiPayload<ExtArgs>
        fields: Prisma.pegawaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pegawaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pegawaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          findFirst: {
            args: Prisma.pegawaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pegawaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          findMany: {
            args: Prisma.pegawaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>[]
          }
          create: {
            args: Prisma.pegawaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          createMany: {
            args: Prisma.pegawaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pegawaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          update: {
            args: Prisma.pegawaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          deleteMany: {
            args: Prisma.pegawaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pegawaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pegawaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          aggregate: {
            args: Prisma.PegawaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePegawai>
          }
          groupBy: {
            args: Prisma.pegawaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PegawaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.pegawaiCountArgs<ExtArgs>
            result: $Utils.Optional<PegawaiCountAggregateOutputType> | number
          }
        }
      }
      TimKerjaPegawai: {
        payload: Prisma.$TimKerjaPegawaiPayload<ExtArgs>
        fields: Prisma.TimKerjaPegawaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimKerjaPegawaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimKerjaPegawaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload>
          }
          findFirst: {
            args: Prisma.TimKerjaPegawaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimKerjaPegawaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload>
          }
          findMany: {
            args: Prisma.TimKerjaPegawaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload>[]
          }
          create: {
            args: Prisma.TimKerjaPegawaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload>
          }
          createMany: {
            args: Prisma.TimKerjaPegawaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TimKerjaPegawaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload>
          }
          update: {
            args: Prisma.TimKerjaPegawaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload>
          }
          deleteMany: {
            args: Prisma.TimKerjaPegawaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimKerjaPegawaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimKerjaPegawaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimKerjaPegawaiPayload>
          }
          aggregate: {
            args: Prisma.TimKerjaPegawaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimKerjaPegawai>
          }
          groupBy: {
            args: Prisma.TimKerjaPegawaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimKerjaPegawaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimKerjaPegawaiCountArgs<ExtArgs>
            result: $Utils.Optional<TimKerjaPegawaiCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    tbl_tim?: tbl_timOmit
    tbl_timkerja?: tbl_timkerjaOmit
    skp_skp?: skp_skpOmit
    skp_uploadedfile?: skp_uploadedfileOmit
    pegawai?: pegawaiOmit
    timKerjaPegawai?: TimKerjaPegawaiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Tbl_timkerjaCountOutputType
   */

  export type Tbl_timkerjaCountOutputType = {
    TimKerjaPegawai: number
  }

  export type Tbl_timkerjaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TimKerjaPegawai?: boolean | Tbl_timkerjaCountOutputTypeCountTimKerjaPegawaiArgs
  }

  // Custom InputTypes
  /**
   * Tbl_timkerjaCountOutputType without action
   */
  export type Tbl_timkerjaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_timkerjaCountOutputType
     */
    select?: Tbl_timkerjaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_timkerjaCountOutputType without action
   */
  export type Tbl_timkerjaCountOutputTypeCountTimKerjaPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimKerjaPegawaiWhereInput
  }


  /**
   * Count Type PegawaiCountOutputType
   */

  export type PegawaiCountOutputType = {
    TimKerjaPegawai: number
  }

  export type PegawaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TimKerjaPegawai?: boolean | PegawaiCountOutputTypeCountTimKerjaPegawaiArgs
  }

  // Custom InputTypes
  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PegawaiCountOutputType
     */
    select?: PegawaiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeCountTimKerjaPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimKerjaPegawaiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tbl_tim
   */

  export type AggregateTbl_tim = {
    _count: Tbl_timCountAggregateOutputType | null
    _avg: Tbl_timAvgAggregateOutputType | null
    _sum: Tbl_timSumAggregateOutputType | null
    _min: Tbl_timMinAggregateOutputType | null
    _max: Tbl_timMaxAggregateOutputType | null
  }

  export type Tbl_timAvgAggregateOutputType = {
    tim_id: number | null
  }

  export type Tbl_timSumAggregateOutputType = {
    tim_id: number | null
  }

  export type Tbl_timMinAggregateOutputType = {
    tim_id: number | null
    tim_nama: string | null
  }

  export type Tbl_timMaxAggregateOutputType = {
    tim_id: number | null
    tim_nama: string | null
  }

  export type Tbl_timCountAggregateOutputType = {
    tim_id: number
    tim_nama: number
    _all: number
  }


  export type Tbl_timAvgAggregateInputType = {
    tim_id?: true
  }

  export type Tbl_timSumAggregateInputType = {
    tim_id?: true
  }

  export type Tbl_timMinAggregateInputType = {
    tim_id?: true
    tim_nama?: true
  }

  export type Tbl_timMaxAggregateInputType = {
    tim_id?: true
    tim_nama?: true
  }

  export type Tbl_timCountAggregateInputType = {
    tim_id?: true
    tim_nama?: true
    _all?: true
  }

  export type Tbl_timAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tim to aggregate.
     */
    where?: tbl_timWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tims to fetch.
     */
    orderBy?: tbl_timOrderByWithRelationInput | tbl_timOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_timWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_tims
    **/
    _count?: true | Tbl_timCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_timAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_timSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_timMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_timMaxAggregateInputType
  }

  export type GetTbl_timAggregateType<T extends Tbl_timAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_tim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_tim[P]>
      : GetScalarType<T[P], AggregateTbl_tim[P]>
  }




  export type tbl_timGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_timWhereInput
    orderBy?: tbl_timOrderByWithAggregationInput | tbl_timOrderByWithAggregationInput[]
    by: Tbl_timScalarFieldEnum[] | Tbl_timScalarFieldEnum
    having?: tbl_timScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_timCountAggregateInputType | true
    _avg?: Tbl_timAvgAggregateInputType
    _sum?: Tbl_timSumAggregateInputType
    _min?: Tbl_timMinAggregateInputType
    _max?: Tbl_timMaxAggregateInputType
  }

  export type Tbl_timGroupByOutputType = {
    tim_id: number
    tim_nama: string
    _count: Tbl_timCountAggregateOutputType | null
    _avg: Tbl_timAvgAggregateOutputType | null
    _sum: Tbl_timSumAggregateOutputType | null
    _min: Tbl_timMinAggregateOutputType | null
    _max: Tbl_timMaxAggregateOutputType | null
  }

  type GetTbl_timGroupByPayload<T extends tbl_timGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_timGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_timGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_timGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_timGroupByOutputType[P]>
        }
      >
    >


  export type tbl_timSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tim_id?: boolean
    tim_nama?: boolean
  }, ExtArgs["result"]["tbl_tim"]>



  export type tbl_timSelectScalar = {
    tim_id?: boolean
    tim_nama?: boolean
  }

  export type tbl_timOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tim_id" | "tim_nama", ExtArgs["result"]["tbl_tim"]>

  export type $tbl_timPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_tim"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tim_id: number
      tim_nama: string
    }, ExtArgs["result"]["tbl_tim"]>
    composites: {}
  }

  type tbl_timGetPayload<S extends boolean | null | undefined | tbl_timDefaultArgs> = $Result.GetResult<Prisma.$tbl_timPayload, S>

  type tbl_timCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_timFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_timCountAggregateInputType | true
    }

  export interface tbl_timDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_tim'], meta: { name: 'tbl_tim' } }
    /**
     * Find zero or one Tbl_tim that matches the filter.
     * @param {tbl_timFindUniqueArgs} args - Arguments to find a Tbl_tim
     * @example
     * // Get one Tbl_tim
     * const tbl_tim = await prisma.tbl_tim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_timFindUniqueArgs>(args: SelectSubset<T, tbl_timFindUniqueArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_tim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_timFindUniqueOrThrowArgs} args - Arguments to find a Tbl_tim
     * @example
     * // Get one Tbl_tim
     * const tbl_tim = await prisma.tbl_tim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_timFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_timFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_tim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timFindFirstArgs} args - Arguments to find a Tbl_tim
     * @example
     * // Get one Tbl_tim
     * const tbl_tim = await prisma.tbl_tim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_timFindFirstArgs>(args?: SelectSubset<T, tbl_timFindFirstArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_tim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timFindFirstOrThrowArgs} args - Arguments to find a Tbl_tim
     * @example
     * // Get one Tbl_tim
     * const tbl_tim = await prisma.tbl_tim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_timFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_timFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_tims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_tims
     * const tbl_tims = await prisma.tbl_tim.findMany()
     * 
     * // Get first 10 Tbl_tims
     * const tbl_tims = await prisma.tbl_tim.findMany({ take: 10 })
     * 
     * // Only select the `tim_id`
     * const tbl_timWithTim_idOnly = await prisma.tbl_tim.findMany({ select: { tim_id: true } })
     * 
     */
    findMany<T extends tbl_timFindManyArgs>(args?: SelectSubset<T, tbl_timFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_tim.
     * @param {tbl_timCreateArgs} args - Arguments to create a Tbl_tim.
     * @example
     * // Create one Tbl_tim
     * const Tbl_tim = await prisma.tbl_tim.create({
     *   data: {
     *     // ... data to create a Tbl_tim
     *   }
     * })
     * 
     */
    create<T extends tbl_timCreateArgs>(args: SelectSubset<T, tbl_timCreateArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_tims.
     * @param {tbl_timCreateManyArgs} args - Arguments to create many Tbl_tims.
     * @example
     * // Create many Tbl_tims
     * const tbl_tim = await prisma.tbl_tim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_timCreateManyArgs>(args?: SelectSubset<T, tbl_timCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_tim.
     * @param {tbl_timDeleteArgs} args - Arguments to delete one Tbl_tim.
     * @example
     * // Delete one Tbl_tim
     * const Tbl_tim = await prisma.tbl_tim.delete({
     *   where: {
     *     // ... filter to delete one Tbl_tim
     *   }
     * })
     * 
     */
    delete<T extends tbl_timDeleteArgs>(args: SelectSubset<T, tbl_timDeleteArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_tim.
     * @param {tbl_timUpdateArgs} args - Arguments to update one Tbl_tim.
     * @example
     * // Update one Tbl_tim
     * const tbl_tim = await prisma.tbl_tim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_timUpdateArgs>(args: SelectSubset<T, tbl_timUpdateArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_tims.
     * @param {tbl_timDeleteManyArgs} args - Arguments to filter Tbl_tims to delete.
     * @example
     * // Delete a few Tbl_tims
     * const { count } = await prisma.tbl_tim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_timDeleteManyArgs>(args?: SelectSubset<T, tbl_timDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_tims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_tims
     * const tbl_tim = await prisma.tbl_tim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_timUpdateManyArgs>(args: SelectSubset<T, tbl_timUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_tim.
     * @param {tbl_timUpsertArgs} args - Arguments to update or create a Tbl_tim.
     * @example
     * // Update or create a Tbl_tim
     * const tbl_tim = await prisma.tbl_tim.upsert({
     *   create: {
     *     // ... data to create a Tbl_tim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_tim we want to update
     *   }
     * })
     */
    upsert<T extends tbl_timUpsertArgs>(args: SelectSubset<T, tbl_timUpsertArgs<ExtArgs>>): Prisma__tbl_timClient<$Result.GetResult<Prisma.$tbl_timPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_tims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timCountArgs} args - Arguments to filter Tbl_tims to count.
     * @example
     * // Count the number of Tbl_tims
     * const count = await prisma.tbl_tim.count({
     *   where: {
     *     // ... the filter for the Tbl_tims we want to count
     *   }
     * })
    **/
    count<T extends tbl_timCountArgs>(
      args?: Subset<T, tbl_timCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_timCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_tim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_timAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_timAggregateArgs>(args: Subset<T, Tbl_timAggregateArgs>): Prisma.PrismaPromise<GetTbl_timAggregateType<T>>

    /**
     * Group by Tbl_tim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timGroupByArgs} args - Group by arguments.
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
      T extends tbl_timGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_timGroupByArgs['orderBy'] }
        : { orderBy?: tbl_timGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_timGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_timGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_tim model
   */
  readonly fields: tbl_timFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_tim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_timClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tbl_tim model
   */
  interface tbl_timFieldRefs {
    readonly tim_id: FieldRef<"tbl_tim", 'Int'>
    readonly tim_nama: FieldRef<"tbl_tim", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_tim findUnique
   */
  export type tbl_timFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * Filter, which tbl_tim to fetch.
     */
    where: tbl_timWhereUniqueInput
  }

  /**
   * tbl_tim findUniqueOrThrow
   */
  export type tbl_timFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * Filter, which tbl_tim to fetch.
     */
    where: tbl_timWhereUniqueInput
  }

  /**
   * tbl_tim findFirst
   */
  export type tbl_timFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * Filter, which tbl_tim to fetch.
     */
    where?: tbl_timWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tims to fetch.
     */
    orderBy?: tbl_timOrderByWithRelationInput | tbl_timOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_tims.
     */
    cursor?: tbl_timWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_tims.
     */
    distinct?: Tbl_timScalarFieldEnum | Tbl_timScalarFieldEnum[]
  }

  /**
   * tbl_tim findFirstOrThrow
   */
  export type tbl_timFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * Filter, which tbl_tim to fetch.
     */
    where?: tbl_timWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tims to fetch.
     */
    orderBy?: tbl_timOrderByWithRelationInput | tbl_timOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_tims.
     */
    cursor?: tbl_timWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_tims.
     */
    distinct?: Tbl_timScalarFieldEnum | Tbl_timScalarFieldEnum[]
  }

  /**
   * tbl_tim findMany
   */
  export type tbl_timFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * Filter, which tbl_tims to fetch.
     */
    where?: tbl_timWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tims to fetch.
     */
    orderBy?: tbl_timOrderByWithRelationInput | tbl_timOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_tims.
     */
    cursor?: tbl_timWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tims.
     */
    skip?: number
    distinct?: Tbl_timScalarFieldEnum | Tbl_timScalarFieldEnum[]
  }

  /**
   * tbl_tim create
   */
  export type tbl_timCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_tim.
     */
    data: XOR<tbl_timCreateInput, tbl_timUncheckedCreateInput>
  }

  /**
   * tbl_tim createMany
   */
  export type tbl_timCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_tims.
     */
    data: tbl_timCreateManyInput | tbl_timCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_tim update
   */
  export type tbl_timUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_tim.
     */
    data: XOR<tbl_timUpdateInput, tbl_timUncheckedUpdateInput>
    /**
     * Choose, which tbl_tim to update.
     */
    where: tbl_timWhereUniqueInput
  }

  /**
   * tbl_tim updateMany
   */
  export type tbl_timUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_tims.
     */
    data: XOR<tbl_timUpdateManyMutationInput, tbl_timUncheckedUpdateManyInput>
    /**
     * Filter which tbl_tims to update
     */
    where?: tbl_timWhereInput
    /**
     * Limit how many tbl_tims to update.
     */
    limit?: number
  }

  /**
   * tbl_tim upsert
   */
  export type tbl_timUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_tim to update in case it exists.
     */
    where: tbl_timWhereUniqueInput
    /**
     * In case the tbl_tim found by the `where` argument doesn't exist, create a new tbl_tim with this data.
     */
    create: XOR<tbl_timCreateInput, tbl_timUncheckedCreateInput>
    /**
     * In case the tbl_tim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_timUpdateInput, tbl_timUncheckedUpdateInput>
  }

  /**
   * tbl_tim delete
   */
  export type tbl_timDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
    /**
     * Filter which tbl_tim to delete.
     */
    where: tbl_timWhereUniqueInput
  }

  /**
   * tbl_tim deleteMany
   */
  export type tbl_timDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tims to delete
     */
    where?: tbl_timWhereInput
    /**
     * Limit how many tbl_tims to delete.
     */
    limit?: number
  }

  /**
   * tbl_tim without action
   */
  export type tbl_timDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tim
     */
    select?: tbl_timSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tim
     */
    omit?: tbl_timOmit<ExtArgs> | null
  }


  /**
   * Model tbl_timkerja
   */

  export type AggregateTbl_timkerja = {
    _count: Tbl_timkerjaCountAggregateOutputType | null
    _avg: Tbl_timkerjaAvgAggregateOutputType | null
    _sum: Tbl_timkerjaSumAggregateOutputType | null
    _min: Tbl_timkerjaMinAggregateOutputType | null
    _max: Tbl_timkerjaMaxAggregateOutputType | null
  }

  export type Tbl_timkerjaAvgAggregateOutputType = {
    id: number | null
    tk_nip: number | null
    tk_tim: number | null
  }

  export type Tbl_timkerjaSumAggregateOutputType = {
    id: number | null
    tk_nip: number | null
    tk_tim: number | null
  }

  export type Tbl_timkerjaMinAggregateOutputType = {
    id: number | null
    tk_nip: number | null
    tk_tim: number | null
  }

  export type Tbl_timkerjaMaxAggregateOutputType = {
    id: number | null
    tk_nip: number | null
    tk_tim: number | null
  }

  export type Tbl_timkerjaCountAggregateOutputType = {
    id: number
    tk_nip: number
    tk_tim: number
    _all: number
  }


  export type Tbl_timkerjaAvgAggregateInputType = {
    id?: true
    tk_nip?: true
    tk_tim?: true
  }

  export type Tbl_timkerjaSumAggregateInputType = {
    id?: true
    tk_nip?: true
    tk_tim?: true
  }

  export type Tbl_timkerjaMinAggregateInputType = {
    id?: true
    tk_nip?: true
    tk_tim?: true
  }

  export type Tbl_timkerjaMaxAggregateInputType = {
    id?: true
    tk_nip?: true
    tk_tim?: true
  }

  export type Tbl_timkerjaCountAggregateInputType = {
    id?: true
    tk_nip?: true
    tk_tim?: true
    _all?: true
  }

  export type Tbl_timkerjaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_timkerja to aggregate.
     */
    where?: tbl_timkerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_timkerjas to fetch.
     */
    orderBy?: tbl_timkerjaOrderByWithRelationInput | tbl_timkerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_timkerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_timkerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_timkerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_timkerjas
    **/
    _count?: true | Tbl_timkerjaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_timkerjaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_timkerjaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_timkerjaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_timkerjaMaxAggregateInputType
  }

  export type GetTbl_timkerjaAggregateType<T extends Tbl_timkerjaAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_timkerja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_timkerja[P]>
      : GetScalarType<T[P], AggregateTbl_timkerja[P]>
  }




  export type tbl_timkerjaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_timkerjaWhereInput
    orderBy?: tbl_timkerjaOrderByWithAggregationInput | tbl_timkerjaOrderByWithAggregationInput[]
    by: Tbl_timkerjaScalarFieldEnum[] | Tbl_timkerjaScalarFieldEnum
    having?: tbl_timkerjaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_timkerjaCountAggregateInputType | true
    _avg?: Tbl_timkerjaAvgAggregateInputType
    _sum?: Tbl_timkerjaSumAggregateInputType
    _min?: Tbl_timkerjaMinAggregateInputType
    _max?: Tbl_timkerjaMaxAggregateInputType
  }

  export type Tbl_timkerjaGroupByOutputType = {
    id: number
    tk_nip: number
    tk_tim: number
    _count: Tbl_timkerjaCountAggregateOutputType | null
    _avg: Tbl_timkerjaAvgAggregateOutputType | null
    _sum: Tbl_timkerjaSumAggregateOutputType | null
    _min: Tbl_timkerjaMinAggregateOutputType | null
    _max: Tbl_timkerjaMaxAggregateOutputType | null
  }

  type GetTbl_timkerjaGroupByPayload<T extends tbl_timkerjaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_timkerjaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_timkerjaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_timkerjaGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_timkerjaGroupByOutputType[P]>
        }
      >
    >


  export type tbl_timkerjaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tk_nip?: boolean
    tk_tim?: boolean
    TimKerjaPegawai?: boolean | tbl_timkerja$TimKerjaPegawaiArgs<ExtArgs>
    _count?: boolean | Tbl_timkerjaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_timkerja"]>



  export type tbl_timkerjaSelectScalar = {
    id?: boolean
    tk_nip?: boolean
    tk_tim?: boolean
  }

  export type tbl_timkerjaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tk_nip" | "tk_tim", ExtArgs["result"]["tbl_timkerja"]>
  export type tbl_timkerjaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TimKerjaPegawai?: boolean | tbl_timkerja$TimKerjaPegawaiArgs<ExtArgs>
    _count?: boolean | Tbl_timkerjaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_timkerjaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_timkerja"
    objects: {
      TimKerjaPegawai: Prisma.$TimKerjaPegawaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tk_nip: number
      tk_tim: number
    }, ExtArgs["result"]["tbl_timkerja"]>
    composites: {}
  }

  type tbl_timkerjaGetPayload<S extends boolean | null | undefined | tbl_timkerjaDefaultArgs> = $Result.GetResult<Prisma.$tbl_timkerjaPayload, S>

  type tbl_timkerjaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_timkerjaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_timkerjaCountAggregateInputType | true
    }

  export interface tbl_timkerjaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_timkerja'], meta: { name: 'tbl_timkerja' } }
    /**
     * Find zero or one Tbl_timkerja that matches the filter.
     * @param {tbl_timkerjaFindUniqueArgs} args - Arguments to find a Tbl_timkerja
     * @example
     * // Get one Tbl_timkerja
     * const tbl_timkerja = await prisma.tbl_timkerja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_timkerjaFindUniqueArgs>(args: SelectSubset<T, tbl_timkerjaFindUniqueArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_timkerja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_timkerjaFindUniqueOrThrowArgs} args - Arguments to find a Tbl_timkerja
     * @example
     * // Get one Tbl_timkerja
     * const tbl_timkerja = await prisma.tbl_timkerja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_timkerjaFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_timkerjaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_timkerja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timkerjaFindFirstArgs} args - Arguments to find a Tbl_timkerja
     * @example
     * // Get one Tbl_timkerja
     * const tbl_timkerja = await prisma.tbl_timkerja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_timkerjaFindFirstArgs>(args?: SelectSubset<T, tbl_timkerjaFindFirstArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_timkerja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timkerjaFindFirstOrThrowArgs} args - Arguments to find a Tbl_timkerja
     * @example
     * // Get one Tbl_timkerja
     * const tbl_timkerja = await prisma.tbl_timkerja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_timkerjaFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_timkerjaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_timkerjas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timkerjaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_timkerjas
     * const tbl_timkerjas = await prisma.tbl_timkerja.findMany()
     * 
     * // Get first 10 Tbl_timkerjas
     * const tbl_timkerjas = await prisma.tbl_timkerja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_timkerjaWithIdOnly = await prisma.tbl_timkerja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_timkerjaFindManyArgs>(args?: SelectSubset<T, tbl_timkerjaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_timkerja.
     * @param {tbl_timkerjaCreateArgs} args - Arguments to create a Tbl_timkerja.
     * @example
     * // Create one Tbl_timkerja
     * const Tbl_timkerja = await prisma.tbl_timkerja.create({
     *   data: {
     *     // ... data to create a Tbl_timkerja
     *   }
     * })
     * 
     */
    create<T extends tbl_timkerjaCreateArgs>(args: SelectSubset<T, tbl_timkerjaCreateArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_timkerjas.
     * @param {tbl_timkerjaCreateManyArgs} args - Arguments to create many Tbl_timkerjas.
     * @example
     * // Create many Tbl_timkerjas
     * const tbl_timkerja = await prisma.tbl_timkerja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_timkerjaCreateManyArgs>(args?: SelectSubset<T, tbl_timkerjaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_timkerja.
     * @param {tbl_timkerjaDeleteArgs} args - Arguments to delete one Tbl_timkerja.
     * @example
     * // Delete one Tbl_timkerja
     * const Tbl_timkerja = await prisma.tbl_timkerja.delete({
     *   where: {
     *     // ... filter to delete one Tbl_timkerja
     *   }
     * })
     * 
     */
    delete<T extends tbl_timkerjaDeleteArgs>(args: SelectSubset<T, tbl_timkerjaDeleteArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_timkerja.
     * @param {tbl_timkerjaUpdateArgs} args - Arguments to update one Tbl_timkerja.
     * @example
     * // Update one Tbl_timkerja
     * const tbl_timkerja = await prisma.tbl_timkerja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_timkerjaUpdateArgs>(args: SelectSubset<T, tbl_timkerjaUpdateArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_timkerjas.
     * @param {tbl_timkerjaDeleteManyArgs} args - Arguments to filter Tbl_timkerjas to delete.
     * @example
     * // Delete a few Tbl_timkerjas
     * const { count } = await prisma.tbl_timkerja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_timkerjaDeleteManyArgs>(args?: SelectSubset<T, tbl_timkerjaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_timkerjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timkerjaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_timkerjas
     * const tbl_timkerja = await prisma.tbl_timkerja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_timkerjaUpdateManyArgs>(args: SelectSubset<T, tbl_timkerjaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_timkerja.
     * @param {tbl_timkerjaUpsertArgs} args - Arguments to update or create a Tbl_timkerja.
     * @example
     * // Update or create a Tbl_timkerja
     * const tbl_timkerja = await prisma.tbl_timkerja.upsert({
     *   create: {
     *     // ... data to create a Tbl_timkerja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_timkerja we want to update
     *   }
     * })
     */
    upsert<T extends tbl_timkerjaUpsertArgs>(args: SelectSubset<T, tbl_timkerjaUpsertArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_timkerjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timkerjaCountArgs} args - Arguments to filter Tbl_timkerjas to count.
     * @example
     * // Count the number of Tbl_timkerjas
     * const count = await prisma.tbl_timkerja.count({
     *   where: {
     *     // ... the filter for the Tbl_timkerjas we want to count
     *   }
     * })
    **/
    count<T extends tbl_timkerjaCountArgs>(
      args?: Subset<T, tbl_timkerjaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_timkerjaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_timkerja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_timkerjaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_timkerjaAggregateArgs>(args: Subset<T, Tbl_timkerjaAggregateArgs>): Prisma.PrismaPromise<GetTbl_timkerjaAggregateType<T>>

    /**
     * Group by Tbl_timkerja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_timkerjaGroupByArgs} args - Group by arguments.
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
      T extends tbl_timkerjaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_timkerjaGroupByArgs['orderBy'] }
        : { orderBy?: tbl_timkerjaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_timkerjaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_timkerjaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_timkerja model
   */
  readonly fields: tbl_timkerjaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_timkerja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_timkerjaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TimKerjaPegawai<T extends tbl_timkerja$TimKerjaPegawaiArgs<ExtArgs> = {}>(args?: Subset<T, tbl_timkerja$TimKerjaPegawaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_timkerja model
   */
  interface tbl_timkerjaFieldRefs {
    readonly id: FieldRef<"tbl_timkerja", 'Int'>
    readonly tk_nip: FieldRef<"tbl_timkerja", 'Int'>
    readonly tk_tim: FieldRef<"tbl_timkerja", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_timkerja findUnique
   */
  export type tbl_timkerjaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_timkerja to fetch.
     */
    where: tbl_timkerjaWhereUniqueInput
  }

  /**
   * tbl_timkerja findUniqueOrThrow
   */
  export type tbl_timkerjaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_timkerja to fetch.
     */
    where: tbl_timkerjaWhereUniqueInput
  }

  /**
   * tbl_timkerja findFirst
   */
  export type tbl_timkerjaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_timkerja to fetch.
     */
    where?: tbl_timkerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_timkerjas to fetch.
     */
    orderBy?: tbl_timkerjaOrderByWithRelationInput | tbl_timkerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_timkerjas.
     */
    cursor?: tbl_timkerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_timkerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_timkerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_timkerjas.
     */
    distinct?: Tbl_timkerjaScalarFieldEnum | Tbl_timkerjaScalarFieldEnum[]
  }

  /**
   * tbl_timkerja findFirstOrThrow
   */
  export type tbl_timkerjaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_timkerja to fetch.
     */
    where?: tbl_timkerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_timkerjas to fetch.
     */
    orderBy?: tbl_timkerjaOrderByWithRelationInput | tbl_timkerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_timkerjas.
     */
    cursor?: tbl_timkerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_timkerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_timkerjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_timkerjas.
     */
    distinct?: Tbl_timkerjaScalarFieldEnum | Tbl_timkerjaScalarFieldEnum[]
  }

  /**
   * tbl_timkerja findMany
   */
  export type tbl_timkerjaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_timkerjas to fetch.
     */
    where?: tbl_timkerjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_timkerjas to fetch.
     */
    orderBy?: tbl_timkerjaOrderByWithRelationInput | tbl_timkerjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_timkerjas.
     */
    cursor?: tbl_timkerjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_timkerjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_timkerjas.
     */
    skip?: number
    distinct?: Tbl_timkerjaScalarFieldEnum | Tbl_timkerjaScalarFieldEnum[]
  }

  /**
   * tbl_timkerja create
   */
  export type tbl_timkerjaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_timkerja.
     */
    data: XOR<tbl_timkerjaCreateInput, tbl_timkerjaUncheckedCreateInput>
  }

  /**
   * tbl_timkerja createMany
   */
  export type tbl_timkerjaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_timkerjas.
     */
    data: tbl_timkerjaCreateManyInput | tbl_timkerjaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_timkerja update
   */
  export type tbl_timkerjaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_timkerja.
     */
    data: XOR<tbl_timkerjaUpdateInput, tbl_timkerjaUncheckedUpdateInput>
    /**
     * Choose, which tbl_timkerja to update.
     */
    where: tbl_timkerjaWhereUniqueInput
  }

  /**
   * tbl_timkerja updateMany
   */
  export type tbl_timkerjaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_timkerjas.
     */
    data: XOR<tbl_timkerjaUpdateManyMutationInput, tbl_timkerjaUncheckedUpdateManyInput>
    /**
     * Filter which tbl_timkerjas to update
     */
    where?: tbl_timkerjaWhereInput
    /**
     * Limit how many tbl_timkerjas to update.
     */
    limit?: number
  }

  /**
   * tbl_timkerja upsert
   */
  export type tbl_timkerjaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_timkerja to update in case it exists.
     */
    where: tbl_timkerjaWhereUniqueInput
    /**
     * In case the tbl_timkerja found by the `where` argument doesn't exist, create a new tbl_timkerja with this data.
     */
    create: XOR<tbl_timkerjaCreateInput, tbl_timkerjaUncheckedCreateInput>
    /**
     * In case the tbl_timkerja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_timkerjaUpdateInput, tbl_timkerjaUncheckedUpdateInput>
  }

  /**
   * tbl_timkerja delete
   */
  export type tbl_timkerjaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
    /**
     * Filter which tbl_timkerja to delete.
     */
    where: tbl_timkerjaWhereUniqueInput
  }

  /**
   * tbl_timkerja deleteMany
   */
  export type tbl_timkerjaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_timkerjas to delete
     */
    where?: tbl_timkerjaWhereInput
    /**
     * Limit how many tbl_timkerjas to delete.
     */
    limit?: number
  }

  /**
   * tbl_timkerja.TimKerjaPegawai
   */
  export type tbl_timkerja$TimKerjaPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    where?: TimKerjaPegawaiWhereInput
    orderBy?: TimKerjaPegawaiOrderByWithRelationInput | TimKerjaPegawaiOrderByWithRelationInput[]
    cursor?: TimKerjaPegawaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimKerjaPegawaiScalarFieldEnum | TimKerjaPegawaiScalarFieldEnum[]
  }

  /**
   * tbl_timkerja without action
   */
  export type tbl_timkerjaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_timkerja
     */
    select?: tbl_timkerjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_timkerja
     */
    omit?: tbl_timkerjaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_timkerjaInclude<ExtArgs> | null
  }


  /**
   * Model skp_skp
   */

  export type AggregateSkp_skp = {
    _count: Skp_skpCountAggregateOutputType | null
    _avg: Skp_skpAvgAggregateOutputType | null
    _sum: Skp_skpSumAggregateOutputType | null
    _min: Skp_skpMinAggregateOutputType | null
    _max: Skp_skpMaxAggregateOutputType | null
  }

  export type Skp_skpAvgAggregateOutputType = {
    id: number | null
    tahun: number | null
    pegawai_nip: number | null
    pejabat_nip: number | null
  }

  export type Skp_skpSumAggregateOutputType = {
    id: number | null
    tahun: number | null
    pegawai_nip: number | null
    pejabat_nip: number | null
  }

  export type Skp_skpMinAggregateOutputType = {
    id: number | null
    sasaran_kinerja: string | null
    indikator: string | null
    realisasi: string | null
    umpan_balik: string | null
    bulan: string | null
    tahun: number | null
    jenis: string | null
    pegawai_nama: string | null
    pegawai_nip: number | null
    pegawai_gol: string | null
    pegawai_jabatan: string | null
    pegawai_unit: string | null
    pejabat_nama: string | null
    pejabat_nip: number | null
    pejabat_gol: string | null
    pejabat_jabatan: string | null
    pejabat_unit: string | null
  }

  export type Skp_skpMaxAggregateOutputType = {
    id: number | null
    sasaran_kinerja: string | null
    indikator: string | null
    realisasi: string | null
    umpan_balik: string | null
    bulan: string | null
    tahun: number | null
    jenis: string | null
    pegawai_nama: string | null
    pegawai_nip: number | null
    pegawai_gol: string | null
    pegawai_jabatan: string | null
    pegawai_unit: string | null
    pejabat_nama: string | null
    pejabat_nip: number | null
    pejabat_gol: string | null
    pejabat_jabatan: string | null
    pejabat_unit: string | null
  }

  export type Skp_skpCountAggregateOutputType = {
    id: number
    sasaran_kinerja: number
    indikator: number
    realisasi: number
    umpan_balik: number
    bulan: number
    tahun: number
    jenis: number
    pegawai_nama: number
    pegawai_nip: number
    pegawai_gol: number
    pegawai_jabatan: number
    pegawai_unit: number
    pejabat_nama: number
    pejabat_nip: number
    pejabat_gol: number
    pejabat_jabatan: number
    pejabat_unit: number
    _all: number
  }


  export type Skp_skpAvgAggregateInputType = {
    id?: true
    tahun?: true
    pegawai_nip?: true
    pejabat_nip?: true
  }

  export type Skp_skpSumAggregateInputType = {
    id?: true
    tahun?: true
    pegawai_nip?: true
    pejabat_nip?: true
  }

  export type Skp_skpMinAggregateInputType = {
    id?: true
    sasaran_kinerja?: true
    indikator?: true
    realisasi?: true
    umpan_balik?: true
    bulan?: true
    tahun?: true
    jenis?: true
    pegawai_nama?: true
    pegawai_nip?: true
    pegawai_gol?: true
    pegawai_jabatan?: true
    pegawai_unit?: true
    pejabat_nama?: true
    pejabat_nip?: true
    pejabat_gol?: true
    pejabat_jabatan?: true
    pejabat_unit?: true
  }

  export type Skp_skpMaxAggregateInputType = {
    id?: true
    sasaran_kinerja?: true
    indikator?: true
    realisasi?: true
    umpan_balik?: true
    bulan?: true
    tahun?: true
    jenis?: true
    pegawai_nama?: true
    pegawai_nip?: true
    pegawai_gol?: true
    pegawai_jabatan?: true
    pegawai_unit?: true
    pejabat_nama?: true
    pejabat_nip?: true
    pejabat_gol?: true
    pejabat_jabatan?: true
    pejabat_unit?: true
  }

  export type Skp_skpCountAggregateInputType = {
    id?: true
    sasaran_kinerja?: true
    indikator?: true
    realisasi?: true
    umpan_balik?: true
    bulan?: true
    tahun?: true
    jenis?: true
    pegawai_nama?: true
    pegawai_nip?: true
    pegawai_gol?: true
    pegawai_jabatan?: true
    pegawai_unit?: true
    pejabat_nama?: true
    pejabat_nip?: true
    pejabat_gol?: true
    pejabat_jabatan?: true
    pejabat_unit?: true
    _all?: true
  }

  export type Skp_skpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skp_skp to aggregate.
     */
    where?: skp_skpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_skps to fetch.
     */
    orderBy?: skp_skpOrderByWithRelationInput | skp_skpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skp_skpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_skps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_skps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skp_skps
    **/
    _count?: true | Skp_skpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Skp_skpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Skp_skpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Skp_skpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Skp_skpMaxAggregateInputType
  }

  export type GetSkp_skpAggregateType<T extends Skp_skpAggregateArgs> = {
        [P in keyof T & keyof AggregateSkp_skp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkp_skp[P]>
      : GetScalarType<T[P], AggregateSkp_skp[P]>
  }




  export type skp_skpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skp_skpWhereInput
    orderBy?: skp_skpOrderByWithAggregationInput | skp_skpOrderByWithAggregationInput[]
    by: Skp_skpScalarFieldEnum[] | Skp_skpScalarFieldEnum
    having?: skp_skpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Skp_skpCountAggregateInputType | true
    _avg?: Skp_skpAvgAggregateInputType
    _sum?: Skp_skpSumAggregateInputType
    _min?: Skp_skpMinAggregateInputType
    _max?: Skp_skpMaxAggregateInputType
  }

  export type Skp_skpGroupByOutputType = {
    id: number
    sasaran_kinerja: string
    indikator: string
    realisasi: string
    umpan_balik: string
    bulan: string
    tahun: number
    jenis: string
    pegawai_nama: string
    pegawai_nip: number
    pegawai_gol: string
    pegawai_jabatan: string
    pegawai_unit: string
    pejabat_nama: string
    pejabat_nip: number
    pejabat_gol: string
    pejabat_jabatan: string
    pejabat_unit: string
    _count: Skp_skpCountAggregateOutputType | null
    _avg: Skp_skpAvgAggregateOutputType | null
    _sum: Skp_skpSumAggregateOutputType | null
    _min: Skp_skpMinAggregateOutputType | null
    _max: Skp_skpMaxAggregateOutputType | null
  }

  type GetSkp_skpGroupByPayload<T extends skp_skpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Skp_skpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Skp_skpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Skp_skpGroupByOutputType[P]>
            : GetScalarType<T[P], Skp_skpGroupByOutputType[P]>
        }
      >
    >


  export type skp_skpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sasaran_kinerja?: boolean
    indikator?: boolean
    realisasi?: boolean
    umpan_balik?: boolean
    bulan?: boolean
    tahun?: boolean
    jenis?: boolean
    pegawai_nama?: boolean
    pegawai_nip?: boolean
    pegawai_gol?: boolean
    pegawai_jabatan?: boolean
    pegawai_unit?: boolean
    pejabat_nama?: boolean
    pejabat_nip?: boolean
    pejabat_gol?: boolean
    pejabat_jabatan?: boolean
    pejabat_unit?: boolean
  }, ExtArgs["result"]["skp_skp"]>



  export type skp_skpSelectScalar = {
    id?: boolean
    sasaran_kinerja?: boolean
    indikator?: boolean
    realisasi?: boolean
    umpan_balik?: boolean
    bulan?: boolean
    tahun?: boolean
    jenis?: boolean
    pegawai_nama?: boolean
    pegawai_nip?: boolean
    pegawai_gol?: boolean
    pegawai_jabatan?: boolean
    pegawai_unit?: boolean
    pejabat_nama?: boolean
    pejabat_nip?: boolean
    pejabat_gol?: boolean
    pejabat_jabatan?: boolean
    pejabat_unit?: boolean
  }

  export type skp_skpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sasaran_kinerja" | "indikator" | "realisasi" | "umpan_balik" | "bulan" | "tahun" | "jenis" | "pegawai_nama" | "pegawai_nip" | "pegawai_gol" | "pegawai_jabatan" | "pegawai_unit" | "pejabat_nama" | "pejabat_nip" | "pejabat_gol" | "pejabat_jabatan" | "pejabat_unit", ExtArgs["result"]["skp_skp"]>

  export type $skp_skpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skp_skp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sasaran_kinerja: string
      indikator: string
      realisasi: string
      umpan_balik: string
      bulan: string
      tahun: number
      jenis: string
      pegawai_nama: string
      pegawai_nip: number
      pegawai_gol: string
      pegawai_jabatan: string
      pegawai_unit: string
      pejabat_nama: string
      pejabat_nip: number
      pejabat_gol: string
      pejabat_jabatan: string
      pejabat_unit: string
    }, ExtArgs["result"]["skp_skp"]>
    composites: {}
  }

  type skp_skpGetPayload<S extends boolean | null | undefined | skp_skpDefaultArgs> = $Result.GetResult<Prisma.$skp_skpPayload, S>

  type skp_skpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skp_skpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Skp_skpCountAggregateInputType | true
    }

  export interface skp_skpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skp_skp'], meta: { name: 'skp_skp' } }
    /**
     * Find zero or one Skp_skp that matches the filter.
     * @param {skp_skpFindUniqueArgs} args - Arguments to find a Skp_skp
     * @example
     * // Get one Skp_skp
     * const skp_skp = await prisma.skp_skp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skp_skpFindUniqueArgs>(args: SelectSubset<T, skp_skpFindUniqueArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skp_skp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skp_skpFindUniqueOrThrowArgs} args - Arguments to find a Skp_skp
     * @example
     * // Get one Skp_skp
     * const skp_skp = await prisma.skp_skp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skp_skpFindUniqueOrThrowArgs>(args: SelectSubset<T, skp_skpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skp_skp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_skpFindFirstArgs} args - Arguments to find a Skp_skp
     * @example
     * // Get one Skp_skp
     * const skp_skp = await prisma.skp_skp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skp_skpFindFirstArgs>(args?: SelectSubset<T, skp_skpFindFirstArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skp_skp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_skpFindFirstOrThrowArgs} args - Arguments to find a Skp_skp
     * @example
     * // Get one Skp_skp
     * const skp_skp = await prisma.skp_skp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skp_skpFindFirstOrThrowArgs>(args?: SelectSubset<T, skp_skpFindFirstOrThrowArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skp_skps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_skpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skp_skps
     * const skp_skps = await prisma.skp_skp.findMany()
     * 
     * // Get first 10 Skp_skps
     * const skp_skps = await prisma.skp_skp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skp_skpWithIdOnly = await prisma.skp_skp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skp_skpFindManyArgs>(args?: SelectSubset<T, skp_skpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skp_skp.
     * @param {skp_skpCreateArgs} args - Arguments to create a Skp_skp.
     * @example
     * // Create one Skp_skp
     * const Skp_skp = await prisma.skp_skp.create({
     *   data: {
     *     // ... data to create a Skp_skp
     *   }
     * })
     * 
     */
    create<T extends skp_skpCreateArgs>(args: SelectSubset<T, skp_skpCreateArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skp_skps.
     * @param {skp_skpCreateManyArgs} args - Arguments to create many Skp_skps.
     * @example
     * // Create many Skp_skps
     * const skp_skp = await prisma.skp_skp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skp_skpCreateManyArgs>(args?: SelectSubset<T, skp_skpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skp_skp.
     * @param {skp_skpDeleteArgs} args - Arguments to delete one Skp_skp.
     * @example
     * // Delete one Skp_skp
     * const Skp_skp = await prisma.skp_skp.delete({
     *   where: {
     *     // ... filter to delete one Skp_skp
     *   }
     * })
     * 
     */
    delete<T extends skp_skpDeleteArgs>(args: SelectSubset<T, skp_skpDeleteArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skp_skp.
     * @param {skp_skpUpdateArgs} args - Arguments to update one Skp_skp.
     * @example
     * // Update one Skp_skp
     * const skp_skp = await prisma.skp_skp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skp_skpUpdateArgs>(args: SelectSubset<T, skp_skpUpdateArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skp_skps.
     * @param {skp_skpDeleteManyArgs} args - Arguments to filter Skp_skps to delete.
     * @example
     * // Delete a few Skp_skps
     * const { count } = await prisma.skp_skp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skp_skpDeleteManyArgs>(args?: SelectSubset<T, skp_skpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skp_skps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_skpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skp_skps
     * const skp_skp = await prisma.skp_skp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skp_skpUpdateManyArgs>(args: SelectSubset<T, skp_skpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skp_skp.
     * @param {skp_skpUpsertArgs} args - Arguments to update or create a Skp_skp.
     * @example
     * // Update or create a Skp_skp
     * const skp_skp = await prisma.skp_skp.upsert({
     *   create: {
     *     // ... data to create a Skp_skp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skp_skp we want to update
     *   }
     * })
     */
    upsert<T extends skp_skpUpsertArgs>(args: SelectSubset<T, skp_skpUpsertArgs<ExtArgs>>): Prisma__skp_skpClient<$Result.GetResult<Prisma.$skp_skpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skp_skps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_skpCountArgs} args - Arguments to filter Skp_skps to count.
     * @example
     * // Count the number of Skp_skps
     * const count = await prisma.skp_skp.count({
     *   where: {
     *     // ... the filter for the Skp_skps we want to count
     *   }
     * })
    **/
    count<T extends skp_skpCountArgs>(
      args?: Subset<T, skp_skpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Skp_skpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skp_skp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Skp_skpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Skp_skpAggregateArgs>(args: Subset<T, Skp_skpAggregateArgs>): Prisma.PrismaPromise<GetSkp_skpAggregateType<T>>

    /**
     * Group by Skp_skp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_skpGroupByArgs} args - Group by arguments.
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
      T extends skp_skpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skp_skpGroupByArgs['orderBy'] }
        : { orderBy?: skp_skpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skp_skpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkp_skpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skp_skp model
   */
  readonly fields: skp_skpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skp_skp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skp_skpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the skp_skp model
   */
  interface skp_skpFieldRefs {
    readonly id: FieldRef<"skp_skp", 'Int'>
    readonly sasaran_kinerja: FieldRef<"skp_skp", 'String'>
    readonly indikator: FieldRef<"skp_skp", 'String'>
    readonly realisasi: FieldRef<"skp_skp", 'String'>
    readonly umpan_balik: FieldRef<"skp_skp", 'String'>
    readonly bulan: FieldRef<"skp_skp", 'String'>
    readonly tahun: FieldRef<"skp_skp", 'Int'>
    readonly jenis: FieldRef<"skp_skp", 'String'>
    readonly pegawai_nama: FieldRef<"skp_skp", 'String'>
    readonly pegawai_nip: FieldRef<"skp_skp", 'Int'>
    readonly pegawai_gol: FieldRef<"skp_skp", 'String'>
    readonly pegawai_jabatan: FieldRef<"skp_skp", 'String'>
    readonly pegawai_unit: FieldRef<"skp_skp", 'String'>
    readonly pejabat_nama: FieldRef<"skp_skp", 'String'>
    readonly pejabat_nip: FieldRef<"skp_skp", 'Int'>
    readonly pejabat_gol: FieldRef<"skp_skp", 'String'>
    readonly pejabat_jabatan: FieldRef<"skp_skp", 'String'>
    readonly pejabat_unit: FieldRef<"skp_skp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skp_skp findUnique
   */
  export type skp_skpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * Filter, which skp_skp to fetch.
     */
    where: skp_skpWhereUniqueInput
  }

  /**
   * skp_skp findUniqueOrThrow
   */
  export type skp_skpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * Filter, which skp_skp to fetch.
     */
    where: skp_skpWhereUniqueInput
  }

  /**
   * skp_skp findFirst
   */
  export type skp_skpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * Filter, which skp_skp to fetch.
     */
    where?: skp_skpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_skps to fetch.
     */
    orderBy?: skp_skpOrderByWithRelationInput | skp_skpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skp_skps.
     */
    cursor?: skp_skpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_skps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_skps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skp_skps.
     */
    distinct?: Skp_skpScalarFieldEnum | Skp_skpScalarFieldEnum[]
  }

  /**
   * skp_skp findFirstOrThrow
   */
  export type skp_skpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * Filter, which skp_skp to fetch.
     */
    where?: skp_skpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_skps to fetch.
     */
    orderBy?: skp_skpOrderByWithRelationInput | skp_skpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skp_skps.
     */
    cursor?: skp_skpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_skps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_skps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skp_skps.
     */
    distinct?: Skp_skpScalarFieldEnum | Skp_skpScalarFieldEnum[]
  }

  /**
   * skp_skp findMany
   */
  export type skp_skpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * Filter, which skp_skps to fetch.
     */
    where?: skp_skpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_skps to fetch.
     */
    orderBy?: skp_skpOrderByWithRelationInput | skp_skpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skp_skps.
     */
    cursor?: skp_skpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_skps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_skps.
     */
    skip?: number
    distinct?: Skp_skpScalarFieldEnum | Skp_skpScalarFieldEnum[]
  }

  /**
   * skp_skp create
   */
  export type skp_skpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * The data needed to create a skp_skp.
     */
    data: XOR<skp_skpCreateInput, skp_skpUncheckedCreateInput>
  }

  /**
   * skp_skp createMany
   */
  export type skp_skpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skp_skps.
     */
    data: skp_skpCreateManyInput | skp_skpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skp_skp update
   */
  export type skp_skpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * The data needed to update a skp_skp.
     */
    data: XOR<skp_skpUpdateInput, skp_skpUncheckedUpdateInput>
    /**
     * Choose, which skp_skp to update.
     */
    where: skp_skpWhereUniqueInput
  }

  /**
   * skp_skp updateMany
   */
  export type skp_skpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skp_skps.
     */
    data: XOR<skp_skpUpdateManyMutationInput, skp_skpUncheckedUpdateManyInput>
    /**
     * Filter which skp_skps to update
     */
    where?: skp_skpWhereInput
    /**
     * Limit how many skp_skps to update.
     */
    limit?: number
  }

  /**
   * skp_skp upsert
   */
  export type skp_skpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * The filter to search for the skp_skp to update in case it exists.
     */
    where: skp_skpWhereUniqueInput
    /**
     * In case the skp_skp found by the `where` argument doesn't exist, create a new skp_skp with this data.
     */
    create: XOR<skp_skpCreateInput, skp_skpUncheckedCreateInput>
    /**
     * In case the skp_skp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skp_skpUpdateInput, skp_skpUncheckedUpdateInput>
  }

  /**
   * skp_skp delete
   */
  export type skp_skpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
    /**
     * Filter which skp_skp to delete.
     */
    where: skp_skpWhereUniqueInput
  }

  /**
   * skp_skp deleteMany
   */
  export type skp_skpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skp_skps to delete
     */
    where?: skp_skpWhereInput
    /**
     * Limit how many skp_skps to delete.
     */
    limit?: number
  }

  /**
   * skp_skp without action
   */
  export type skp_skpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_skp
     */
    select?: skp_skpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_skp
     */
    omit?: skp_skpOmit<ExtArgs> | null
  }


  /**
   * Model skp_uploadedfile
   */

  export type AggregateSkp_uploadedfile = {
    _count: Skp_uploadedfileCountAggregateOutputType | null
    _avg: Skp_uploadedfileAvgAggregateOutputType | null
    _sum: Skp_uploadedfileSumAggregateOutputType | null
    _min: Skp_uploadedfileMinAggregateOutputType | null
    _max: Skp_uploadedfileMaxAggregateOutputType | null
  }

  export type Skp_uploadedfileAvgAggregateOutputType = {
    id: number | null
  }

  export type Skp_uploadedfileSumAggregateOutputType = {
    id: number | null
  }

  export type Skp_uploadedfileMinAggregateOutputType = {
    id: number | null
    file: string | null
    uploaded_at: string | null
  }

  export type Skp_uploadedfileMaxAggregateOutputType = {
    id: number | null
    file: string | null
    uploaded_at: string | null
  }

  export type Skp_uploadedfileCountAggregateOutputType = {
    id: number
    file: number
    uploaded_at: number
    _all: number
  }


  export type Skp_uploadedfileAvgAggregateInputType = {
    id?: true
  }

  export type Skp_uploadedfileSumAggregateInputType = {
    id?: true
  }

  export type Skp_uploadedfileMinAggregateInputType = {
    id?: true
    file?: true
    uploaded_at?: true
  }

  export type Skp_uploadedfileMaxAggregateInputType = {
    id?: true
    file?: true
    uploaded_at?: true
  }

  export type Skp_uploadedfileCountAggregateInputType = {
    id?: true
    file?: true
    uploaded_at?: true
    _all?: true
  }

  export type Skp_uploadedfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skp_uploadedfile to aggregate.
     */
    where?: skp_uploadedfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_uploadedfiles to fetch.
     */
    orderBy?: skp_uploadedfileOrderByWithRelationInput | skp_uploadedfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skp_uploadedfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_uploadedfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_uploadedfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skp_uploadedfiles
    **/
    _count?: true | Skp_uploadedfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Skp_uploadedfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Skp_uploadedfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Skp_uploadedfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Skp_uploadedfileMaxAggregateInputType
  }

  export type GetSkp_uploadedfileAggregateType<T extends Skp_uploadedfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSkp_uploadedfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkp_uploadedfile[P]>
      : GetScalarType<T[P], AggregateSkp_uploadedfile[P]>
  }




  export type skp_uploadedfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skp_uploadedfileWhereInput
    orderBy?: skp_uploadedfileOrderByWithAggregationInput | skp_uploadedfileOrderByWithAggregationInput[]
    by: Skp_uploadedfileScalarFieldEnum[] | Skp_uploadedfileScalarFieldEnum
    having?: skp_uploadedfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Skp_uploadedfileCountAggregateInputType | true
    _avg?: Skp_uploadedfileAvgAggregateInputType
    _sum?: Skp_uploadedfileSumAggregateInputType
    _min?: Skp_uploadedfileMinAggregateInputType
    _max?: Skp_uploadedfileMaxAggregateInputType
  }

  export type Skp_uploadedfileGroupByOutputType = {
    id: number
    file: string
    uploaded_at: string
    _count: Skp_uploadedfileCountAggregateOutputType | null
    _avg: Skp_uploadedfileAvgAggregateOutputType | null
    _sum: Skp_uploadedfileSumAggregateOutputType | null
    _min: Skp_uploadedfileMinAggregateOutputType | null
    _max: Skp_uploadedfileMaxAggregateOutputType | null
  }

  type GetSkp_uploadedfileGroupByPayload<T extends skp_uploadedfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Skp_uploadedfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Skp_uploadedfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Skp_uploadedfileGroupByOutputType[P]>
            : GetScalarType<T[P], Skp_uploadedfileGroupByOutputType[P]>
        }
      >
    >


  export type skp_uploadedfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file?: boolean
    uploaded_at?: boolean
  }, ExtArgs["result"]["skp_uploadedfile"]>



  export type skp_uploadedfileSelectScalar = {
    id?: boolean
    file?: boolean
    uploaded_at?: boolean
  }

  export type skp_uploadedfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file" | "uploaded_at", ExtArgs["result"]["skp_uploadedfile"]>

  export type $skp_uploadedfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skp_uploadedfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      file: string
      uploaded_at: string
    }, ExtArgs["result"]["skp_uploadedfile"]>
    composites: {}
  }

  type skp_uploadedfileGetPayload<S extends boolean | null | undefined | skp_uploadedfileDefaultArgs> = $Result.GetResult<Prisma.$skp_uploadedfilePayload, S>

  type skp_uploadedfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skp_uploadedfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Skp_uploadedfileCountAggregateInputType | true
    }

  export interface skp_uploadedfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skp_uploadedfile'], meta: { name: 'skp_uploadedfile' } }
    /**
     * Find zero or one Skp_uploadedfile that matches the filter.
     * @param {skp_uploadedfileFindUniqueArgs} args - Arguments to find a Skp_uploadedfile
     * @example
     * // Get one Skp_uploadedfile
     * const skp_uploadedfile = await prisma.skp_uploadedfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skp_uploadedfileFindUniqueArgs>(args: SelectSubset<T, skp_uploadedfileFindUniqueArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skp_uploadedfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skp_uploadedfileFindUniqueOrThrowArgs} args - Arguments to find a Skp_uploadedfile
     * @example
     * // Get one Skp_uploadedfile
     * const skp_uploadedfile = await prisma.skp_uploadedfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skp_uploadedfileFindUniqueOrThrowArgs>(args: SelectSubset<T, skp_uploadedfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skp_uploadedfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_uploadedfileFindFirstArgs} args - Arguments to find a Skp_uploadedfile
     * @example
     * // Get one Skp_uploadedfile
     * const skp_uploadedfile = await prisma.skp_uploadedfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skp_uploadedfileFindFirstArgs>(args?: SelectSubset<T, skp_uploadedfileFindFirstArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skp_uploadedfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_uploadedfileFindFirstOrThrowArgs} args - Arguments to find a Skp_uploadedfile
     * @example
     * // Get one Skp_uploadedfile
     * const skp_uploadedfile = await prisma.skp_uploadedfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skp_uploadedfileFindFirstOrThrowArgs>(args?: SelectSubset<T, skp_uploadedfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skp_uploadedfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_uploadedfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skp_uploadedfiles
     * const skp_uploadedfiles = await prisma.skp_uploadedfile.findMany()
     * 
     * // Get first 10 Skp_uploadedfiles
     * const skp_uploadedfiles = await prisma.skp_uploadedfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skp_uploadedfileWithIdOnly = await prisma.skp_uploadedfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skp_uploadedfileFindManyArgs>(args?: SelectSubset<T, skp_uploadedfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skp_uploadedfile.
     * @param {skp_uploadedfileCreateArgs} args - Arguments to create a Skp_uploadedfile.
     * @example
     * // Create one Skp_uploadedfile
     * const Skp_uploadedfile = await prisma.skp_uploadedfile.create({
     *   data: {
     *     // ... data to create a Skp_uploadedfile
     *   }
     * })
     * 
     */
    create<T extends skp_uploadedfileCreateArgs>(args: SelectSubset<T, skp_uploadedfileCreateArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skp_uploadedfiles.
     * @param {skp_uploadedfileCreateManyArgs} args - Arguments to create many Skp_uploadedfiles.
     * @example
     * // Create many Skp_uploadedfiles
     * const skp_uploadedfile = await prisma.skp_uploadedfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skp_uploadedfileCreateManyArgs>(args?: SelectSubset<T, skp_uploadedfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skp_uploadedfile.
     * @param {skp_uploadedfileDeleteArgs} args - Arguments to delete one Skp_uploadedfile.
     * @example
     * // Delete one Skp_uploadedfile
     * const Skp_uploadedfile = await prisma.skp_uploadedfile.delete({
     *   where: {
     *     // ... filter to delete one Skp_uploadedfile
     *   }
     * })
     * 
     */
    delete<T extends skp_uploadedfileDeleteArgs>(args: SelectSubset<T, skp_uploadedfileDeleteArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skp_uploadedfile.
     * @param {skp_uploadedfileUpdateArgs} args - Arguments to update one Skp_uploadedfile.
     * @example
     * // Update one Skp_uploadedfile
     * const skp_uploadedfile = await prisma.skp_uploadedfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skp_uploadedfileUpdateArgs>(args: SelectSubset<T, skp_uploadedfileUpdateArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skp_uploadedfiles.
     * @param {skp_uploadedfileDeleteManyArgs} args - Arguments to filter Skp_uploadedfiles to delete.
     * @example
     * // Delete a few Skp_uploadedfiles
     * const { count } = await prisma.skp_uploadedfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skp_uploadedfileDeleteManyArgs>(args?: SelectSubset<T, skp_uploadedfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skp_uploadedfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_uploadedfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skp_uploadedfiles
     * const skp_uploadedfile = await prisma.skp_uploadedfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skp_uploadedfileUpdateManyArgs>(args: SelectSubset<T, skp_uploadedfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skp_uploadedfile.
     * @param {skp_uploadedfileUpsertArgs} args - Arguments to update or create a Skp_uploadedfile.
     * @example
     * // Update or create a Skp_uploadedfile
     * const skp_uploadedfile = await prisma.skp_uploadedfile.upsert({
     *   create: {
     *     // ... data to create a Skp_uploadedfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skp_uploadedfile we want to update
     *   }
     * })
     */
    upsert<T extends skp_uploadedfileUpsertArgs>(args: SelectSubset<T, skp_uploadedfileUpsertArgs<ExtArgs>>): Prisma__skp_uploadedfileClient<$Result.GetResult<Prisma.$skp_uploadedfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skp_uploadedfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_uploadedfileCountArgs} args - Arguments to filter Skp_uploadedfiles to count.
     * @example
     * // Count the number of Skp_uploadedfiles
     * const count = await prisma.skp_uploadedfile.count({
     *   where: {
     *     // ... the filter for the Skp_uploadedfiles we want to count
     *   }
     * })
    **/
    count<T extends skp_uploadedfileCountArgs>(
      args?: Subset<T, skp_uploadedfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Skp_uploadedfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skp_uploadedfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Skp_uploadedfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Skp_uploadedfileAggregateArgs>(args: Subset<T, Skp_uploadedfileAggregateArgs>): Prisma.PrismaPromise<GetSkp_uploadedfileAggregateType<T>>

    /**
     * Group by Skp_uploadedfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skp_uploadedfileGroupByArgs} args - Group by arguments.
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
      T extends skp_uploadedfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skp_uploadedfileGroupByArgs['orderBy'] }
        : { orderBy?: skp_uploadedfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skp_uploadedfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkp_uploadedfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skp_uploadedfile model
   */
  readonly fields: skp_uploadedfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skp_uploadedfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skp_uploadedfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the skp_uploadedfile model
   */
  interface skp_uploadedfileFieldRefs {
    readonly id: FieldRef<"skp_uploadedfile", 'Int'>
    readonly file: FieldRef<"skp_uploadedfile", 'String'>
    readonly uploaded_at: FieldRef<"skp_uploadedfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skp_uploadedfile findUnique
   */
  export type skp_uploadedfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * Filter, which skp_uploadedfile to fetch.
     */
    where: skp_uploadedfileWhereUniqueInput
  }

  /**
   * skp_uploadedfile findUniqueOrThrow
   */
  export type skp_uploadedfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * Filter, which skp_uploadedfile to fetch.
     */
    where: skp_uploadedfileWhereUniqueInput
  }

  /**
   * skp_uploadedfile findFirst
   */
  export type skp_uploadedfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * Filter, which skp_uploadedfile to fetch.
     */
    where?: skp_uploadedfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_uploadedfiles to fetch.
     */
    orderBy?: skp_uploadedfileOrderByWithRelationInput | skp_uploadedfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skp_uploadedfiles.
     */
    cursor?: skp_uploadedfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_uploadedfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_uploadedfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skp_uploadedfiles.
     */
    distinct?: Skp_uploadedfileScalarFieldEnum | Skp_uploadedfileScalarFieldEnum[]
  }

  /**
   * skp_uploadedfile findFirstOrThrow
   */
  export type skp_uploadedfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * Filter, which skp_uploadedfile to fetch.
     */
    where?: skp_uploadedfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_uploadedfiles to fetch.
     */
    orderBy?: skp_uploadedfileOrderByWithRelationInput | skp_uploadedfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skp_uploadedfiles.
     */
    cursor?: skp_uploadedfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_uploadedfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_uploadedfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skp_uploadedfiles.
     */
    distinct?: Skp_uploadedfileScalarFieldEnum | Skp_uploadedfileScalarFieldEnum[]
  }

  /**
   * skp_uploadedfile findMany
   */
  export type skp_uploadedfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * Filter, which skp_uploadedfiles to fetch.
     */
    where?: skp_uploadedfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skp_uploadedfiles to fetch.
     */
    orderBy?: skp_uploadedfileOrderByWithRelationInput | skp_uploadedfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skp_uploadedfiles.
     */
    cursor?: skp_uploadedfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skp_uploadedfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skp_uploadedfiles.
     */
    skip?: number
    distinct?: Skp_uploadedfileScalarFieldEnum | Skp_uploadedfileScalarFieldEnum[]
  }

  /**
   * skp_uploadedfile create
   */
  export type skp_uploadedfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * The data needed to create a skp_uploadedfile.
     */
    data: XOR<skp_uploadedfileCreateInput, skp_uploadedfileUncheckedCreateInput>
  }

  /**
   * skp_uploadedfile createMany
   */
  export type skp_uploadedfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skp_uploadedfiles.
     */
    data: skp_uploadedfileCreateManyInput | skp_uploadedfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skp_uploadedfile update
   */
  export type skp_uploadedfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * The data needed to update a skp_uploadedfile.
     */
    data: XOR<skp_uploadedfileUpdateInput, skp_uploadedfileUncheckedUpdateInput>
    /**
     * Choose, which skp_uploadedfile to update.
     */
    where: skp_uploadedfileWhereUniqueInput
  }

  /**
   * skp_uploadedfile updateMany
   */
  export type skp_uploadedfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skp_uploadedfiles.
     */
    data: XOR<skp_uploadedfileUpdateManyMutationInput, skp_uploadedfileUncheckedUpdateManyInput>
    /**
     * Filter which skp_uploadedfiles to update
     */
    where?: skp_uploadedfileWhereInput
    /**
     * Limit how many skp_uploadedfiles to update.
     */
    limit?: number
  }

  /**
   * skp_uploadedfile upsert
   */
  export type skp_uploadedfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * The filter to search for the skp_uploadedfile to update in case it exists.
     */
    where: skp_uploadedfileWhereUniqueInput
    /**
     * In case the skp_uploadedfile found by the `where` argument doesn't exist, create a new skp_uploadedfile with this data.
     */
    create: XOR<skp_uploadedfileCreateInput, skp_uploadedfileUncheckedCreateInput>
    /**
     * In case the skp_uploadedfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skp_uploadedfileUpdateInput, skp_uploadedfileUncheckedUpdateInput>
  }

  /**
   * skp_uploadedfile delete
   */
  export type skp_uploadedfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
    /**
     * Filter which skp_uploadedfile to delete.
     */
    where: skp_uploadedfileWhereUniqueInput
  }

  /**
   * skp_uploadedfile deleteMany
   */
  export type skp_uploadedfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skp_uploadedfiles to delete
     */
    where?: skp_uploadedfileWhereInput
    /**
     * Limit how many skp_uploadedfiles to delete.
     */
    limit?: number
  }

  /**
   * skp_uploadedfile without action
   */
  export type skp_uploadedfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skp_uploadedfile
     */
    select?: skp_uploadedfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skp_uploadedfile
     */
    omit?: skp_uploadedfileOmit<ExtArgs> | null
  }


  /**
   * Model pegawai
   */

  export type AggregatePegawai = {
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  export type PegawaiAvgAggregateOutputType = {
    id: number | null
  }

  export type PegawaiSumAggregateOutputType = {
    id: number | null
  }

  export type PegawaiMinAggregateOutputType = {
    id: number | null
    nip: string | null
    nama: string | null
    jabatan: string | null
    wilayah: string | null
    golongan: string | null
    tmt: string | null
    status: string | null
  }

  export type PegawaiMaxAggregateOutputType = {
    id: number | null
    nip: string | null
    nama: string | null
    jabatan: string | null
    wilayah: string | null
    golongan: string | null
    tmt: string | null
    status: string | null
  }

  export type PegawaiCountAggregateOutputType = {
    id: number
    nip: number
    nama: number
    jabatan: number
    wilayah: number
    golongan: number
    tmt: number
    status: number
    _all: number
  }


  export type PegawaiAvgAggregateInputType = {
    id?: true
  }

  export type PegawaiSumAggregateInputType = {
    id?: true
  }

  export type PegawaiMinAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    jabatan?: true
    wilayah?: true
    golongan?: true
    tmt?: true
    status?: true
  }

  export type PegawaiMaxAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    jabatan?: true
    wilayah?: true
    golongan?: true
    tmt?: true
    status?: true
  }

  export type PegawaiCountAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    jabatan?: true
    wilayah?: true
    golongan?: true
    tmt?: true
    status?: true
    _all?: true
  }

  export type PegawaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pegawai to aggregate.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pegawais
    **/
    _count?: true | PegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PegawaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PegawaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PegawaiMaxAggregateInputType
  }

  export type GetPegawaiAggregateType<T extends PegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregatePegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePegawai[P]>
      : GetScalarType<T[P], AggregatePegawai[P]>
  }




  export type pegawaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pegawaiWhereInput
    orderBy?: pegawaiOrderByWithAggregationInput | pegawaiOrderByWithAggregationInput[]
    by: PegawaiScalarFieldEnum[] | PegawaiScalarFieldEnum
    having?: pegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PegawaiCountAggregateInputType | true
    _avg?: PegawaiAvgAggregateInputType
    _sum?: PegawaiSumAggregateInputType
    _min?: PegawaiMinAggregateInputType
    _max?: PegawaiMaxAggregateInputType
  }

  export type PegawaiGroupByOutputType = {
    id: number
    nip: string
    nama: string
    jabatan: string
    wilayah: string
    golongan: string
    tmt: string
    status: string
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  type GetPegawaiGroupByPayload<T extends pegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
        }
      >
    >


  export type pegawaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    nama?: boolean
    jabatan?: boolean
    wilayah?: boolean
    golongan?: boolean
    tmt?: boolean
    status?: boolean
    TimKerjaPegawai?: boolean | pegawai$TimKerjaPegawaiArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>



  export type pegawaiSelectScalar = {
    id?: boolean
    nip?: boolean
    nama?: boolean
    jabatan?: boolean
    wilayah?: boolean
    golongan?: boolean
    tmt?: boolean
    status?: boolean
  }

  export type pegawaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nip" | "nama" | "jabatan" | "wilayah" | "golongan" | "tmt" | "status", ExtArgs["result"]["pegawai"]>
  export type pegawaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TimKerjaPegawai?: boolean | pegawai$TimKerjaPegawaiArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pegawai"
    objects: {
      TimKerjaPegawai: Prisma.$TimKerjaPegawaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nip: string
      nama: string
      jabatan: string
      wilayah: string
      golongan: string
      tmt: string
      status: string
    }, ExtArgs["result"]["pegawai"]>
    composites: {}
  }

  type pegawaiGetPayload<S extends boolean | null | undefined | pegawaiDefaultArgs> = $Result.GetResult<Prisma.$pegawaiPayload, S>

  type pegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pegawaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PegawaiCountAggregateInputType | true
    }

  export interface pegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pegawai'], meta: { name: 'pegawai' } }
    /**
     * Find zero or one Pegawai that matches the filter.
     * @param {pegawaiFindUniqueArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pegawaiFindUniqueArgs>(args: SelectSubset<T, pegawaiFindUniqueArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pegawai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pegawaiFindUniqueOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pegawaiFindUniqueOrThrowArgs>(args: SelectSubset<T, pegawaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindFirstArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pegawaiFindFirstArgs>(args?: SelectSubset<T, pegawaiFindFirstArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindFirstOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pegawaiFindFirstOrThrowArgs>(args?: SelectSubset<T, pegawaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pegawais
     * const pegawais = await prisma.pegawai.findMany()
     * 
     * // Get first 10 Pegawais
     * const pegawais = await prisma.pegawai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pegawaiFindManyArgs>(args?: SelectSubset<T, pegawaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pegawai.
     * @param {pegawaiCreateArgs} args - Arguments to create a Pegawai.
     * @example
     * // Create one Pegawai
     * const Pegawai = await prisma.pegawai.create({
     *   data: {
     *     // ... data to create a Pegawai
     *   }
     * })
     * 
     */
    create<T extends pegawaiCreateArgs>(args: SelectSubset<T, pegawaiCreateArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pegawais.
     * @param {pegawaiCreateManyArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pegawaiCreateManyArgs>(args?: SelectSubset<T, pegawaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pegawai.
     * @param {pegawaiDeleteArgs} args - Arguments to delete one Pegawai.
     * @example
     * // Delete one Pegawai
     * const Pegawai = await prisma.pegawai.delete({
     *   where: {
     *     // ... filter to delete one Pegawai
     *   }
     * })
     * 
     */
    delete<T extends pegawaiDeleteArgs>(args: SelectSubset<T, pegawaiDeleteArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pegawai.
     * @param {pegawaiUpdateArgs} args - Arguments to update one Pegawai.
     * @example
     * // Update one Pegawai
     * const pegawai = await prisma.pegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pegawaiUpdateArgs>(args: SelectSubset<T, pegawaiUpdateArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pegawais.
     * @param {pegawaiDeleteManyArgs} args - Arguments to filter Pegawais to delete.
     * @example
     * // Delete a few Pegawais
     * const { count } = await prisma.pegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pegawaiDeleteManyArgs>(args?: SelectSubset<T, pegawaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pegawaiUpdateManyArgs>(args: SelectSubset<T, pegawaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pegawai.
     * @param {pegawaiUpsertArgs} args - Arguments to update or create a Pegawai.
     * @example
     * // Update or create a Pegawai
     * const pegawai = await prisma.pegawai.upsert({
     *   create: {
     *     // ... data to create a Pegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pegawai we want to update
     *   }
     * })
     */
    upsert<T extends pegawaiUpsertArgs>(args: SelectSubset<T, pegawaiUpsertArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiCountArgs} args - Arguments to filter Pegawais to count.
     * @example
     * // Count the number of Pegawais
     * const count = await prisma.pegawai.count({
     *   where: {
     *     // ... the filter for the Pegawais we want to count
     *   }
     * })
    **/
    count<T extends pegawaiCountArgs>(
      args?: Subset<T, pegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PegawaiAggregateArgs>(args: Subset<T, PegawaiAggregateArgs>): Prisma.PrismaPromise<GetPegawaiAggregateType<T>>

    /**
     * Group by Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiGroupByArgs} args - Group by arguments.
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
      T extends pegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pegawaiGroupByArgs['orderBy'] }
        : { orderBy?: pegawaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pegawai model
   */
  readonly fields: pegawaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TimKerjaPegawai<T extends pegawai$TimKerjaPegawaiArgs<ExtArgs> = {}>(args?: Subset<T, pegawai$TimKerjaPegawaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pegawai model
   */
  interface pegawaiFieldRefs {
    readonly id: FieldRef<"pegawai", 'Int'>
    readonly nip: FieldRef<"pegawai", 'String'>
    readonly nama: FieldRef<"pegawai", 'String'>
    readonly jabatan: FieldRef<"pegawai", 'String'>
    readonly wilayah: FieldRef<"pegawai", 'String'>
    readonly golongan: FieldRef<"pegawai", 'String'>
    readonly tmt: FieldRef<"pegawai", 'String'>
    readonly status: FieldRef<"pegawai", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pegawai findUnique
   */
  export type pegawaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai findUniqueOrThrow
   */
  export type pegawaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai findFirst
   */
  export type pegawaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * pegawai findFirstOrThrow
   */
  export type pegawaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * pegawai findMany
   */
  export type pegawaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawais to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * pegawai create
   */
  export type pegawaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * The data needed to create a pegawai.
     */
    data: XOR<pegawaiCreateInput, pegawaiUncheckedCreateInput>
  }

  /**
   * pegawai createMany
   */
  export type pegawaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pegawais.
     */
    data: pegawaiCreateManyInput | pegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pegawai update
   */
  export type pegawaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * The data needed to update a pegawai.
     */
    data: XOR<pegawaiUpdateInput, pegawaiUncheckedUpdateInput>
    /**
     * Choose, which pegawai to update.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai updateMany
   */
  export type pegawaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pegawais.
     */
    data: XOR<pegawaiUpdateManyMutationInput, pegawaiUncheckedUpdateManyInput>
    /**
     * Filter which pegawais to update
     */
    where?: pegawaiWhereInput
    /**
     * Limit how many pegawais to update.
     */
    limit?: number
  }

  /**
   * pegawai upsert
   */
  export type pegawaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * The filter to search for the pegawai to update in case it exists.
     */
    where: pegawaiWhereUniqueInput
    /**
     * In case the pegawai found by the `where` argument doesn't exist, create a new pegawai with this data.
     */
    create: XOR<pegawaiCreateInput, pegawaiUncheckedCreateInput>
    /**
     * In case the pegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pegawaiUpdateInput, pegawaiUncheckedUpdateInput>
  }

  /**
   * pegawai delete
   */
  export type pegawaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter which pegawai to delete.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai deleteMany
   */
  export type pegawaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pegawais to delete
     */
    where?: pegawaiWhereInput
    /**
     * Limit how many pegawais to delete.
     */
    limit?: number
  }

  /**
   * pegawai.TimKerjaPegawai
   */
  export type pegawai$TimKerjaPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    where?: TimKerjaPegawaiWhereInput
    orderBy?: TimKerjaPegawaiOrderByWithRelationInput | TimKerjaPegawaiOrderByWithRelationInput[]
    cursor?: TimKerjaPegawaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimKerjaPegawaiScalarFieldEnum | TimKerjaPegawaiScalarFieldEnum[]
  }

  /**
   * pegawai without action
   */
  export type pegawaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
  }


  /**
   * Model TimKerjaPegawai
   */

  export type AggregateTimKerjaPegawai = {
    _count: TimKerjaPegawaiCountAggregateOutputType | null
    _avg: TimKerjaPegawaiAvgAggregateOutputType | null
    _sum: TimKerjaPegawaiSumAggregateOutputType | null
    _min: TimKerjaPegawaiMinAggregateOutputType | null
    _max: TimKerjaPegawaiMaxAggregateOutputType | null
  }

  export type TimKerjaPegawaiAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    timKerjaId: number | null
  }

  export type TimKerjaPegawaiSumAggregateOutputType = {
    id: number | null
    userId: number | null
    timKerjaId: number | null
  }

  export type TimKerjaPegawaiMinAggregateOutputType = {
    id: number | null
    userId: number | null
    timKerjaId: number | null
  }

  export type TimKerjaPegawaiMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    timKerjaId: number | null
  }

  export type TimKerjaPegawaiCountAggregateOutputType = {
    id: number
    userId: number
    timKerjaId: number
    _all: number
  }


  export type TimKerjaPegawaiAvgAggregateInputType = {
    id?: true
    userId?: true
    timKerjaId?: true
  }

  export type TimKerjaPegawaiSumAggregateInputType = {
    id?: true
    userId?: true
    timKerjaId?: true
  }

  export type TimKerjaPegawaiMinAggregateInputType = {
    id?: true
    userId?: true
    timKerjaId?: true
  }

  export type TimKerjaPegawaiMaxAggregateInputType = {
    id?: true
    userId?: true
    timKerjaId?: true
  }

  export type TimKerjaPegawaiCountAggregateInputType = {
    id?: true
    userId?: true
    timKerjaId?: true
    _all?: true
  }

  export type TimKerjaPegawaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimKerjaPegawai to aggregate.
     */
    where?: TimKerjaPegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimKerjaPegawais to fetch.
     */
    orderBy?: TimKerjaPegawaiOrderByWithRelationInput | TimKerjaPegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimKerjaPegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimKerjaPegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimKerjaPegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimKerjaPegawais
    **/
    _count?: true | TimKerjaPegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimKerjaPegawaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimKerjaPegawaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimKerjaPegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimKerjaPegawaiMaxAggregateInputType
  }

  export type GetTimKerjaPegawaiAggregateType<T extends TimKerjaPegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregateTimKerjaPegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimKerjaPegawai[P]>
      : GetScalarType<T[P], AggregateTimKerjaPegawai[P]>
  }




  export type TimKerjaPegawaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimKerjaPegawaiWhereInput
    orderBy?: TimKerjaPegawaiOrderByWithAggregationInput | TimKerjaPegawaiOrderByWithAggregationInput[]
    by: TimKerjaPegawaiScalarFieldEnum[] | TimKerjaPegawaiScalarFieldEnum
    having?: TimKerjaPegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimKerjaPegawaiCountAggregateInputType | true
    _avg?: TimKerjaPegawaiAvgAggregateInputType
    _sum?: TimKerjaPegawaiSumAggregateInputType
    _min?: TimKerjaPegawaiMinAggregateInputType
    _max?: TimKerjaPegawaiMaxAggregateInputType
  }

  export type TimKerjaPegawaiGroupByOutputType = {
    id: number
    userId: number
    timKerjaId: number
    _count: TimKerjaPegawaiCountAggregateOutputType | null
    _avg: TimKerjaPegawaiAvgAggregateOutputType | null
    _sum: TimKerjaPegawaiSumAggregateOutputType | null
    _min: TimKerjaPegawaiMinAggregateOutputType | null
    _max: TimKerjaPegawaiMaxAggregateOutputType | null
  }

  type GetTimKerjaPegawaiGroupByPayload<T extends TimKerjaPegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimKerjaPegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimKerjaPegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimKerjaPegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], TimKerjaPegawaiGroupByOutputType[P]>
        }
      >
    >


  export type TimKerjaPegawaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timKerjaId?: boolean
    userId_fkey?: boolean | pegawaiDefaultArgs<ExtArgs>
    timKerja_fkey?: boolean | tbl_timkerjaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timKerjaPegawai"]>



  export type TimKerjaPegawaiSelectScalar = {
    id?: boolean
    userId?: boolean
    timKerjaId?: boolean
  }

  export type TimKerjaPegawaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "timKerjaId", ExtArgs["result"]["timKerjaPegawai"]>
  export type TimKerjaPegawaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userId_fkey?: boolean | pegawaiDefaultArgs<ExtArgs>
    timKerja_fkey?: boolean | tbl_timkerjaDefaultArgs<ExtArgs>
  }

  export type $TimKerjaPegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimKerjaPegawai"
    objects: {
      userId_fkey: Prisma.$pegawaiPayload<ExtArgs>
      timKerja_fkey: Prisma.$tbl_timkerjaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      timKerjaId: number
    }, ExtArgs["result"]["timKerjaPegawai"]>
    composites: {}
  }

  type TimKerjaPegawaiGetPayload<S extends boolean | null | undefined | TimKerjaPegawaiDefaultArgs> = $Result.GetResult<Prisma.$TimKerjaPegawaiPayload, S>

  type TimKerjaPegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimKerjaPegawaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimKerjaPegawaiCountAggregateInputType | true
    }

  export interface TimKerjaPegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimKerjaPegawai'], meta: { name: 'TimKerjaPegawai' } }
    /**
     * Find zero or one TimKerjaPegawai that matches the filter.
     * @param {TimKerjaPegawaiFindUniqueArgs} args - Arguments to find a TimKerjaPegawai
     * @example
     * // Get one TimKerjaPegawai
     * const timKerjaPegawai = await prisma.timKerjaPegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimKerjaPegawaiFindUniqueArgs>(args: SelectSubset<T, TimKerjaPegawaiFindUniqueArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimKerjaPegawai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimKerjaPegawaiFindUniqueOrThrowArgs} args - Arguments to find a TimKerjaPegawai
     * @example
     * // Get one TimKerjaPegawai
     * const timKerjaPegawai = await prisma.timKerjaPegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimKerjaPegawaiFindUniqueOrThrowArgs>(args: SelectSubset<T, TimKerjaPegawaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimKerjaPegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimKerjaPegawaiFindFirstArgs} args - Arguments to find a TimKerjaPegawai
     * @example
     * // Get one TimKerjaPegawai
     * const timKerjaPegawai = await prisma.timKerjaPegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimKerjaPegawaiFindFirstArgs>(args?: SelectSubset<T, TimKerjaPegawaiFindFirstArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimKerjaPegawai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimKerjaPegawaiFindFirstOrThrowArgs} args - Arguments to find a TimKerjaPegawai
     * @example
     * // Get one TimKerjaPegawai
     * const timKerjaPegawai = await prisma.timKerjaPegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimKerjaPegawaiFindFirstOrThrowArgs>(args?: SelectSubset<T, TimKerjaPegawaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimKerjaPegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimKerjaPegawaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimKerjaPegawais
     * const timKerjaPegawais = await prisma.timKerjaPegawai.findMany()
     * 
     * // Get first 10 TimKerjaPegawais
     * const timKerjaPegawais = await prisma.timKerjaPegawai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timKerjaPegawaiWithIdOnly = await prisma.timKerjaPegawai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimKerjaPegawaiFindManyArgs>(args?: SelectSubset<T, TimKerjaPegawaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimKerjaPegawai.
     * @param {TimKerjaPegawaiCreateArgs} args - Arguments to create a TimKerjaPegawai.
     * @example
     * // Create one TimKerjaPegawai
     * const TimKerjaPegawai = await prisma.timKerjaPegawai.create({
     *   data: {
     *     // ... data to create a TimKerjaPegawai
     *   }
     * })
     * 
     */
    create<T extends TimKerjaPegawaiCreateArgs>(args: SelectSubset<T, TimKerjaPegawaiCreateArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimKerjaPegawais.
     * @param {TimKerjaPegawaiCreateManyArgs} args - Arguments to create many TimKerjaPegawais.
     * @example
     * // Create many TimKerjaPegawais
     * const timKerjaPegawai = await prisma.timKerjaPegawai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimKerjaPegawaiCreateManyArgs>(args?: SelectSubset<T, TimKerjaPegawaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimKerjaPegawai.
     * @param {TimKerjaPegawaiDeleteArgs} args - Arguments to delete one TimKerjaPegawai.
     * @example
     * // Delete one TimKerjaPegawai
     * const TimKerjaPegawai = await prisma.timKerjaPegawai.delete({
     *   where: {
     *     // ... filter to delete one TimKerjaPegawai
     *   }
     * })
     * 
     */
    delete<T extends TimKerjaPegawaiDeleteArgs>(args: SelectSubset<T, TimKerjaPegawaiDeleteArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimKerjaPegawai.
     * @param {TimKerjaPegawaiUpdateArgs} args - Arguments to update one TimKerjaPegawai.
     * @example
     * // Update one TimKerjaPegawai
     * const timKerjaPegawai = await prisma.timKerjaPegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimKerjaPegawaiUpdateArgs>(args: SelectSubset<T, TimKerjaPegawaiUpdateArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimKerjaPegawais.
     * @param {TimKerjaPegawaiDeleteManyArgs} args - Arguments to filter TimKerjaPegawais to delete.
     * @example
     * // Delete a few TimKerjaPegawais
     * const { count } = await prisma.timKerjaPegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimKerjaPegawaiDeleteManyArgs>(args?: SelectSubset<T, TimKerjaPegawaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimKerjaPegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimKerjaPegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimKerjaPegawais
     * const timKerjaPegawai = await prisma.timKerjaPegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimKerjaPegawaiUpdateManyArgs>(args: SelectSubset<T, TimKerjaPegawaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimKerjaPegawai.
     * @param {TimKerjaPegawaiUpsertArgs} args - Arguments to update or create a TimKerjaPegawai.
     * @example
     * // Update or create a TimKerjaPegawai
     * const timKerjaPegawai = await prisma.timKerjaPegawai.upsert({
     *   create: {
     *     // ... data to create a TimKerjaPegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimKerjaPegawai we want to update
     *   }
     * })
     */
    upsert<T extends TimKerjaPegawaiUpsertArgs>(args: SelectSubset<T, TimKerjaPegawaiUpsertArgs<ExtArgs>>): Prisma__TimKerjaPegawaiClient<$Result.GetResult<Prisma.$TimKerjaPegawaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimKerjaPegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimKerjaPegawaiCountArgs} args - Arguments to filter TimKerjaPegawais to count.
     * @example
     * // Count the number of TimKerjaPegawais
     * const count = await prisma.timKerjaPegawai.count({
     *   where: {
     *     // ... the filter for the TimKerjaPegawais we want to count
     *   }
     * })
    **/
    count<T extends TimKerjaPegawaiCountArgs>(
      args?: Subset<T, TimKerjaPegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimKerjaPegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimKerjaPegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimKerjaPegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimKerjaPegawaiAggregateArgs>(args: Subset<T, TimKerjaPegawaiAggregateArgs>): Prisma.PrismaPromise<GetTimKerjaPegawaiAggregateType<T>>

    /**
     * Group by TimKerjaPegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimKerjaPegawaiGroupByArgs} args - Group by arguments.
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
      T extends TimKerjaPegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimKerjaPegawaiGroupByArgs['orderBy'] }
        : { orderBy?: TimKerjaPegawaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimKerjaPegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimKerjaPegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimKerjaPegawai model
   */
  readonly fields: TimKerjaPegawaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimKerjaPegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimKerjaPegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userId_fkey<T extends pegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pegawaiDefaultArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timKerja_fkey<T extends tbl_timkerjaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_timkerjaDefaultArgs<ExtArgs>>): Prisma__tbl_timkerjaClient<$Result.GetResult<Prisma.$tbl_timkerjaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TimKerjaPegawai model
   */
  interface TimKerjaPegawaiFieldRefs {
    readonly id: FieldRef<"TimKerjaPegawai", 'Int'>
    readonly userId: FieldRef<"TimKerjaPegawai", 'Int'>
    readonly timKerjaId: FieldRef<"TimKerjaPegawai", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TimKerjaPegawai findUnique
   */
  export type TimKerjaPegawaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * Filter, which TimKerjaPegawai to fetch.
     */
    where: TimKerjaPegawaiWhereUniqueInput
  }

  /**
   * TimKerjaPegawai findUniqueOrThrow
   */
  export type TimKerjaPegawaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * Filter, which TimKerjaPegawai to fetch.
     */
    where: TimKerjaPegawaiWhereUniqueInput
  }

  /**
   * TimKerjaPegawai findFirst
   */
  export type TimKerjaPegawaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * Filter, which TimKerjaPegawai to fetch.
     */
    where?: TimKerjaPegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimKerjaPegawais to fetch.
     */
    orderBy?: TimKerjaPegawaiOrderByWithRelationInput | TimKerjaPegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimKerjaPegawais.
     */
    cursor?: TimKerjaPegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimKerjaPegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimKerjaPegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimKerjaPegawais.
     */
    distinct?: TimKerjaPegawaiScalarFieldEnum | TimKerjaPegawaiScalarFieldEnum[]
  }

  /**
   * TimKerjaPegawai findFirstOrThrow
   */
  export type TimKerjaPegawaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * Filter, which TimKerjaPegawai to fetch.
     */
    where?: TimKerjaPegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimKerjaPegawais to fetch.
     */
    orderBy?: TimKerjaPegawaiOrderByWithRelationInput | TimKerjaPegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimKerjaPegawais.
     */
    cursor?: TimKerjaPegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimKerjaPegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimKerjaPegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimKerjaPegawais.
     */
    distinct?: TimKerjaPegawaiScalarFieldEnum | TimKerjaPegawaiScalarFieldEnum[]
  }

  /**
   * TimKerjaPegawai findMany
   */
  export type TimKerjaPegawaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * Filter, which TimKerjaPegawais to fetch.
     */
    where?: TimKerjaPegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimKerjaPegawais to fetch.
     */
    orderBy?: TimKerjaPegawaiOrderByWithRelationInput | TimKerjaPegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimKerjaPegawais.
     */
    cursor?: TimKerjaPegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimKerjaPegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimKerjaPegawais.
     */
    skip?: number
    distinct?: TimKerjaPegawaiScalarFieldEnum | TimKerjaPegawaiScalarFieldEnum[]
  }

  /**
   * TimKerjaPegawai create
   */
  export type TimKerjaPegawaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * The data needed to create a TimKerjaPegawai.
     */
    data: XOR<TimKerjaPegawaiCreateInput, TimKerjaPegawaiUncheckedCreateInput>
  }

  /**
   * TimKerjaPegawai createMany
   */
  export type TimKerjaPegawaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimKerjaPegawais.
     */
    data: TimKerjaPegawaiCreateManyInput | TimKerjaPegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimKerjaPegawai update
   */
  export type TimKerjaPegawaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * The data needed to update a TimKerjaPegawai.
     */
    data: XOR<TimKerjaPegawaiUpdateInput, TimKerjaPegawaiUncheckedUpdateInput>
    /**
     * Choose, which TimKerjaPegawai to update.
     */
    where: TimKerjaPegawaiWhereUniqueInput
  }

  /**
   * TimKerjaPegawai updateMany
   */
  export type TimKerjaPegawaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimKerjaPegawais.
     */
    data: XOR<TimKerjaPegawaiUpdateManyMutationInput, TimKerjaPegawaiUncheckedUpdateManyInput>
    /**
     * Filter which TimKerjaPegawais to update
     */
    where?: TimKerjaPegawaiWhereInput
    /**
     * Limit how many TimKerjaPegawais to update.
     */
    limit?: number
  }

  /**
   * TimKerjaPegawai upsert
   */
  export type TimKerjaPegawaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * The filter to search for the TimKerjaPegawai to update in case it exists.
     */
    where: TimKerjaPegawaiWhereUniqueInput
    /**
     * In case the TimKerjaPegawai found by the `where` argument doesn't exist, create a new TimKerjaPegawai with this data.
     */
    create: XOR<TimKerjaPegawaiCreateInput, TimKerjaPegawaiUncheckedCreateInput>
    /**
     * In case the TimKerjaPegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimKerjaPegawaiUpdateInput, TimKerjaPegawaiUncheckedUpdateInput>
  }

  /**
   * TimKerjaPegawai delete
   */
  export type TimKerjaPegawaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
    /**
     * Filter which TimKerjaPegawai to delete.
     */
    where: TimKerjaPegawaiWhereUniqueInput
  }

  /**
   * TimKerjaPegawai deleteMany
   */
  export type TimKerjaPegawaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimKerjaPegawais to delete
     */
    where?: TimKerjaPegawaiWhereInput
    /**
     * Limit how many TimKerjaPegawais to delete.
     */
    limit?: number
  }

  /**
   * TimKerjaPegawai without action
   */
  export type TimKerjaPegawaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimKerjaPegawai
     */
    select?: TimKerjaPegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimKerjaPegawai
     */
    omit?: TimKerjaPegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimKerjaPegawaiInclude<ExtArgs> | null
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


  export const Tbl_timScalarFieldEnum: {
    tim_id: 'tim_id',
    tim_nama: 'tim_nama'
  };

  export type Tbl_timScalarFieldEnum = (typeof Tbl_timScalarFieldEnum)[keyof typeof Tbl_timScalarFieldEnum]


  export const Tbl_timkerjaScalarFieldEnum: {
    id: 'id',
    tk_nip: 'tk_nip',
    tk_tim: 'tk_tim'
  };

  export type Tbl_timkerjaScalarFieldEnum = (typeof Tbl_timkerjaScalarFieldEnum)[keyof typeof Tbl_timkerjaScalarFieldEnum]


  export const Skp_skpScalarFieldEnum: {
    id: 'id',
    sasaran_kinerja: 'sasaran_kinerja',
    indikator: 'indikator',
    realisasi: 'realisasi',
    umpan_balik: 'umpan_balik',
    bulan: 'bulan',
    tahun: 'tahun',
    jenis: 'jenis',
    pegawai_nama: 'pegawai_nama',
    pegawai_nip: 'pegawai_nip',
    pegawai_gol: 'pegawai_gol',
    pegawai_jabatan: 'pegawai_jabatan',
    pegawai_unit: 'pegawai_unit',
    pejabat_nama: 'pejabat_nama',
    pejabat_nip: 'pejabat_nip',
    pejabat_gol: 'pejabat_gol',
    pejabat_jabatan: 'pejabat_jabatan',
    pejabat_unit: 'pejabat_unit'
  };

  export type Skp_skpScalarFieldEnum = (typeof Skp_skpScalarFieldEnum)[keyof typeof Skp_skpScalarFieldEnum]


  export const Skp_uploadedfileScalarFieldEnum: {
    id: 'id',
    file: 'file',
    uploaded_at: 'uploaded_at'
  };

  export type Skp_uploadedfileScalarFieldEnum = (typeof Skp_uploadedfileScalarFieldEnum)[keyof typeof Skp_uploadedfileScalarFieldEnum]


  export const PegawaiScalarFieldEnum: {
    id: 'id',
    nip: 'nip',
    nama: 'nama',
    jabatan: 'jabatan',
    wilayah: 'wilayah',
    golongan: 'golongan',
    tmt: 'tmt',
    status: 'status'
  };

  export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum]


  export const TimKerjaPegawaiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timKerjaId: 'timKerjaId'
  };

  export type TimKerjaPegawaiScalarFieldEnum = (typeof TimKerjaPegawaiScalarFieldEnum)[keyof typeof TimKerjaPegawaiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const tbl_timOrderByRelevanceFieldEnum: {
    tim_nama: 'tim_nama'
  };

  export type tbl_timOrderByRelevanceFieldEnum = (typeof tbl_timOrderByRelevanceFieldEnum)[keyof typeof tbl_timOrderByRelevanceFieldEnum]


  export const skp_skpOrderByRelevanceFieldEnum: {
    sasaran_kinerja: 'sasaran_kinerja',
    indikator: 'indikator',
    realisasi: 'realisasi',
    umpan_balik: 'umpan_balik',
    bulan: 'bulan',
    jenis: 'jenis',
    pegawai_nama: 'pegawai_nama',
    pegawai_gol: 'pegawai_gol',
    pegawai_jabatan: 'pegawai_jabatan',
    pegawai_unit: 'pegawai_unit',
    pejabat_nama: 'pejabat_nama',
    pejabat_gol: 'pejabat_gol',
    pejabat_jabatan: 'pejabat_jabatan',
    pejabat_unit: 'pejabat_unit'
  };

  export type skp_skpOrderByRelevanceFieldEnum = (typeof skp_skpOrderByRelevanceFieldEnum)[keyof typeof skp_skpOrderByRelevanceFieldEnum]


  export const skp_uploadedfileOrderByRelevanceFieldEnum: {
    file: 'file',
    uploaded_at: 'uploaded_at'
  };

  export type skp_uploadedfileOrderByRelevanceFieldEnum = (typeof skp_uploadedfileOrderByRelevanceFieldEnum)[keyof typeof skp_uploadedfileOrderByRelevanceFieldEnum]


  export const pegawaiOrderByRelevanceFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    jabatan: 'jabatan',
    wilayah: 'wilayah',
    golongan: 'golongan',
    tmt: 'tmt',
    status: 'status'
  };

  export type pegawaiOrderByRelevanceFieldEnum = (typeof pegawaiOrderByRelevanceFieldEnum)[keyof typeof pegawaiOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tbl_timWhereInput = {
    AND?: tbl_timWhereInput | tbl_timWhereInput[]
    OR?: tbl_timWhereInput[]
    NOT?: tbl_timWhereInput | tbl_timWhereInput[]
    tim_id?: IntFilter<"tbl_tim"> | number
    tim_nama?: StringFilter<"tbl_tim"> | string
  }

  export type tbl_timOrderByWithRelationInput = {
    tim_id?: SortOrder
    tim_nama?: SortOrder
    _relevance?: tbl_timOrderByRelevanceInput
  }

  export type tbl_timWhereUniqueInput = Prisma.AtLeast<{
    tim_id?: number
    AND?: tbl_timWhereInput | tbl_timWhereInput[]
    OR?: tbl_timWhereInput[]
    NOT?: tbl_timWhereInput | tbl_timWhereInput[]
    tim_nama?: StringFilter<"tbl_tim"> | string
  }, "tim_id">

  export type tbl_timOrderByWithAggregationInput = {
    tim_id?: SortOrder
    tim_nama?: SortOrder
    _count?: tbl_timCountOrderByAggregateInput
    _avg?: tbl_timAvgOrderByAggregateInput
    _max?: tbl_timMaxOrderByAggregateInput
    _min?: tbl_timMinOrderByAggregateInput
    _sum?: tbl_timSumOrderByAggregateInput
  }

  export type tbl_timScalarWhereWithAggregatesInput = {
    AND?: tbl_timScalarWhereWithAggregatesInput | tbl_timScalarWhereWithAggregatesInput[]
    OR?: tbl_timScalarWhereWithAggregatesInput[]
    NOT?: tbl_timScalarWhereWithAggregatesInput | tbl_timScalarWhereWithAggregatesInput[]
    tim_id?: IntWithAggregatesFilter<"tbl_tim"> | number
    tim_nama?: StringWithAggregatesFilter<"tbl_tim"> | string
  }

  export type tbl_timkerjaWhereInput = {
    AND?: tbl_timkerjaWhereInput | tbl_timkerjaWhereInput[]
    OR?: tbl_timkerjaWhereInput[]
    NOT?: tbl_timkerjaWhereInput | tbl_timkerjaWhereInput[]
    id?: IntFilter<"tbl_timkerja"> | number
    tk_nip?: IntFilter<"tbl_timkerja"> | number
    tk_tim?: IntFilter<"tbl_timkerja"> | number
    TimKerjaPegawai?: TimKerjaPegawaiListRelationFilter
  }

  export type tbl_timkerjaOrderByWithRelationInput = {
    id?: SortOrder
    tk_nip?: SortOrder
    tk_tim?: SortOrder
    TimKerjaPegawai?: TimKerjaPegawaiOrderByRelationAggregateInput
  }

  export type tbl_timkerjaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_timkerjaWhereInput | tbl_timkerjaWhereInput[]
    OR?: tbl_timkerjaWhereInput[]
    NOT?: tbl_timkerjaWhereInput | tbl_timkerjaWhereInput[]
    tk_nip?: IntFilter<"tbl_timkerja"> | number
    tk_tim?: IntFilter<"tbl_timkerja"> | number
    TimKerjaPegawai?: TimKerjaPegawaiListRelationFilter
  }, "id">

  export type tbl_timkerjaOrderByWithAggregationInput = {
    id?: SortOrder
    tk_nip?: SortOrder
    tk_tim?: SortOrder
    _count?: tbl_timkerjaCountOrderByAggregateInput
    _avg?: tbl_timkerjaAvgOrderByAggregateInput
    _max?: tbl_timkerjaMaxOrderByAggregateInput
    _min?: tbl_timkerjaMinOrderByAggregateInput
    _sum?: tbl_timkerjaSumOrderByAggregateInput
  }

  export type tbl_timkerjaScalarWhereWithAggregatesInput = {
    AND?: tbl_timkerjaScalarWhereWithAggregatesInput | tbl_timkerjaScalarWhereWithAggregatesInput[]
    OR?: tbl_timkerjaScalarWhereWithAggregatesInput[]
    NOT?: tbl_timkerjaScalarWhereWithAggregatesInput | tbl_timkerjaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_timkerja"> | number
    tk_nip?: IntWithAggregatesFilter<"tbl_timkerja"> | number
    tk_tim?: IntWithAggregatesFilter<"tbl_timkerja"> | number
  }

  export type skp_skpWhereInput = {
    AND?: skp_skpWhereInput | skp_skpWhereInput[]
    OR?: skp_skpWhereInput[]
    NOT?: skp_skpWhereInput | skp_skpWhereInput[]
    id?: IntFilter<"skp_skp"> | number
    sasaran_kinerja?: StringFilter<"skp_skp"> | string
    indikator?: StringFilter<"skp_skp"> | string
    realisasi?: StringFilter<"skp_skp"> | string
    umpan_balik?: StringFilter<"skp_skp"> | string
    bulan?: StringFilter<"skp_skp"> | string
    tahun?: IntFilter<"skp_skp"> | number
    jenis?: StringFilter<"skp_skp"> | string
    pegawai_nama?: StringFilter<"skp_skp"> | string
    pegawai_nip?: IntFilter<"skp_skp"> | number
    pegawai_gol?: StringFilter<"skp_skp"> | string
    pegawai_jabatan?: StringFilter<"skp_skp"> | string
    pegawai_unit?: StringFilter<"skp_skp"> | string
    pejabat_nama?: StringFilter<"skp_skp"> | string
    pejabat_nip?: IntFilter<"skp_skp"> | number
    pejabat_gol?: StringFilter<"skp_skp"> | string
    pejabat_jabatan?: StringFilter<"skp_skp"> | string
    pejabat_unit?: StringFilter<"skp_skp"> | string
  }

  export type skp_skpOrderByWithRelationInput = {
    id?: SortOrder
    sasaran_kinerja?: SortOrder
    indikator?: SortOrder
    realisasi?: SortOrder
    umpan_balik?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jenis?: SortOrder
    pegawai_nama?: SortOrder
    pegawai_nip?: SortOrder
    pegawai_gol?: SortOrder
    pegawai_jabatan?: SortOrder
    pegawai_unit?: SortOrder
    pejabat_nama?: SortOrder
    pejabat_nip?: SortOrder
    pejabat_gol?: SortOrder
    pejabat_jabatan?: SortOrder
    pejabat_unit?: SortOrder
    _relevance?: skp_skpOrderByRelevanceInput
  }

  export type skp_skpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: skp_skpWhereInput | skp_skpWhereInput[]
    OR?: skp_skpWhereInput[]
    NOT?: skp_skpWhereInput | skp_skpWhereInput[]
    sasaran_kinerja?: StringFilter<"skp_skp"> | string
    indikator?: StringFilter<"skp_skp"> | string
    realisasi?: StringFilter<"skp_skp"> | string
    umpan_balik?: StringFilter<"skp_skp"> | string
    bulan?: StringFilter<"skp_skp"> | string
    tahun?: IntFilter<"skp_skp"> | number
    jenis?: StringFilter<"skp_skp"> | string
    pegawai_nama?: StringFilter<"skp_skp"> | string
    pegawai_nip?: IntFilter<"skp_skp"> | number
    pegawai_gol?: StringFilter<"skp_skp"> | string
    pegawai_jabatan?: StringFilter<"skp_skp"> | string
    pegawai_unit?: StringFilter<"skp_skp"> | string
    pejabat_nama?: StringFilter<"skp_skp"> | string
    pejabat_nip?: IntFilter<"skp_skp"> | number
    pejabat_gol?: StringFilter<"skp_skp"> | string
    pejabat_jabatan?: StringFilter<"skp_skp"> | string
    pejabat_unit?: StringFilter<"skp_skp"> | string
  }, "id">

  export type skp_skpOrderByWithAggregationInput = {
    id?: SortOrder
    sasaran_kinerja?: SortOrder
    indikator?: SortOrder
    realisasi?: SortOrder
    umpan_balik?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jenis?: SortOrder
    pegawai_nama?: SortOrder
    pegawai_nip?: SortOrder
    pegawai_gol?: SortOrder
    pegawai_jabatan?: SortOrder
    pegawai_unit?: SortOrder
    pejabat_nama?: SortOrder
    pejabat_nip?: SortOrder
    pejabat_gol?: SortOrder
    pejabat_jabatan?: SortOrder
    pejabat_unit?: SortOrder
    _count?: skp_skpCountOrderByAggregateInput
    _avg?: skp_skpAvgOrderByAggregateInput
    _max?: skp_skpMaxOrderByAggregateInput
    _min?: skp_skpMinOrderByAggregateInput
    _sum?: skp_skpSumOrderByAggregateInput
  }

  export type skp_skpScalarWhereWithAggregatesInput = {
    AND?: skp_skpScalarWhereWithAggregatesInput | skp_skpScalarWhereWithAggregatesInput[]
    OR?: skp_skpScalarWhereWithAggregatesInput[]
    NOT?: skp_skpScalarWhereWithAggregatesInput | skp_skpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skp_skp"> | number
    sasaran_kinerja?: StringWithAggregatesFilter<"skp_skp"> | string
    indikator?: StringWithAggregatesFilter<"skp_skp"> | string
    realisasi?: StringWithAggregatesFilter<"skp_skp"> | string
    umpan_balik?: StringWithAggregatesFilter<"skp_skp"> | string
    bulan?: StringWithAggregatesFilter<"skp_skp"> | string
    tahun?: IntWithAggregatesFilter<"skp_skp"> | number
    jenis?: StringWithAggregatesFilter<"skp_skp"> | string
    pegawai_nama?: StringWithAggregatesFilter<"skp_skp"> | string
    pegawai_nip?: IntWithAggregatesFilter<"skp_skp"> | number
    pegawai_gol?: StringWithAggregatesFilter<"skp_skp"> | string
    pegawai_jabatan?: StringWithAggregatesFilter<"skp_skp"> | string
    pegawai_unit?: StringWithAggregatesFilter<"skp_skp"> | string
    pejabat_nama?: StringWithAggregatesFilter<"skp_skp"> | string
    pejabat_nip?: IntWithAggregatesFilter<"skp_skp"> | number
    pejabat_gol?: StringWithAggregatesFilter<"skp_skp"> | string
    pejabat_jabatan?: StringWithAggregatesFilter<"skp_skp"> | string
    pejabat_unit?: StringWithAggregatesFilter<"skp_skp"> | string
  }

  export type skp_uploadedfileWhereInput = {
    AND?: skp_uploadedfileWhereInput | skp_uploadedfileWhereInput[]
    OR?: skp_uploadedfileWhereInput[]
    NOT?: skp_uploadedfileWhereInput | skp_uploadedfileWhereInput[]
    id?: IntFilter<"skp_uploadedfile"> | number
    file?: StringFilter<"skp_uploadedfile"> | string
    uploaded_at?: StringFilter<"skp_uploadedfile"> | string
  }

  export type skp_uploadedfileOrderByWithRelationInput = {
    id?: SortOrder
    file?: SortOrder
    uploaded_at?: SortOrder
    _relevance?: skp_uploadedfileOrderByRelevanceInput
  }

  export type skp_uploadedfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: skp_uploadedfileWhereInput | skp_uploadedfileWhereInput[]
    OR?: skp_uploadedfileWhereInput[]
    NOT?: skp_uploadedfileWhereInput | skp_uploadedfileWhereInput[]
    file?: StringFilter<"skp_uploadedfile"> | string
    uploaded_at?: StringFilter<"skp_uploadedfile"> | string
  }, "id">

  export type skp_uploadedfileOrderByWithAggregationInput = {
    id?: SortOrder
    file?: SortOrder
    uploaded_at?: SortOrder
    _count?: skp_uploadedfileCountOrderByAggregateInput
    _avg?: skp_uploadedfileAvgOrderByAggregateInput
    _max?: skp_uploadedfileMaxOrderByAggregateInput
    _min?: skp_uploadedfileMinOrderByAggregateInput
    _sum?: skp_uploadedfileSumOrderByAggregateInput
  }

  export type skp_uploadedfileScalarWhereWithAggregatesInput = {
    AND?: skp_uploadedfileScalarWhereWithAggregatesInput | skp_uploadedfileScalarWhereWithAggregatesInput[]
    OR?: skp_uploadedfileScalarWhereWithAggregatesInput[]
    NOT?: skp_uploadedfileScalarWhereWithAggregatesInput | skp_uploadedfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skp_uploadedfile"> | number
    file?: StringWithAggregatesFilter<"skp_uploadedfile"> | string
    uploaded_at?: StringWithAggregatesFilter<"skp_uploadedfile"> | string
  }

  export type pegawaiWhereInput = {
    AND?: pegawaiWhereInput | pegawaiWhereInput[]
    OR?: pegawaiWhereInput[]
    NOT?: pegawaiWhereInput | pegawaiWhereInput[]
    id?: IntFilter<"pegawai"> | number
    nip?: StringFilter<"pegawai"> | string
    nama?: StringFilter<"pegawai"> | string
    jabatan?: StringFilter<"pegawai"> | string
    wilayah?: StringFilter<"pegawai"> | string
    golongan?: StringFilter<"pegawai"> | string
    tmt?: StringFilter<"pegawai"> | string
    status?: StringFilter<"pegawai"> | string
    TimKerjaPegawai?: TimKerjaPegawaiListRelationFilter
  }

  export type pegawaiOrderByWithRelationInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    wilayah?: SortOrder
    golongan?: SortOrder
    tmt?: SortOrder
    status?: SortOrder
    TimKerjaPegawai?: TimKerjaPegawaiOrderByRelationAggregateInput
    _relevance?: pegawaiOrderByRelevanceInput
  }

  export type pegawaiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pegawaiWhereInput | pegawaiWhereInput[]
    OR?: pegawaiWhereInput[]
    NOT?: pegawaiWhereInput | pegawaiWhereInput[]
    nip?: StringFilter<"pegawai"> | string
    nama?: StringFilter<"pegawai"> | string
    jabatan?: StringFilter<"pegawai"> | string
    wilayah?: StringFilter<"pegawai"> | string
    golongan?: StringFilter<"pegawai"> | string
    tmt?: StringFilter<"pegawai"> | string
    status?: StringFilter<"pegawai"> | string
    TimKerjaPegawai?: TimKerjaPegawaiListRelationFilter
  }, "id">

  export type pegawaiOrderByWithAggregationInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    wilayah?: SortOrder
    golongan?: SortOrder
    tmt?: SortOrder
    status?: SortOrder
    _count?: pegawaiCountOrderByAggregateInput
    _avg?: pegawaiAvgOrderByAggregateInput
    _max?: pegawaiMaxOrderByAggregateInput
    _min?: pegawaiMinOrderByAggregateInput
    _sum?: pegawaiSumOrderByAggregateInput
  }

  export type pegawaiScalarWhereWithAggregatesInput = {
    AND?: pegawaiScalarWhereWithAggregatesInput | pegawaiScalarWhereWithAggregatesInput[]
    OR?: pegawaiScalarWhereWithAggregatesInput[]
    NOT?: pegawaiScalarWhereWithAggregatesInput | pegawaiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pegawai"> | number
    nip?: StringWithAggregatesFilter<"pegawai"> | string
    nama?: StringWithAggregatesFilter<"pegawai"> | string
    jabatan?: StringWithAggregatesFilter<"pegawai"> | string
    wilayah?: StringWithAggregatesFilter<"pegawai"> | string
    golongan?: StringWithAggregatesFilter<"pegawai"> | string
    tmt?: StringWithAggregatesFilter<"pegawai"> | string
    status?: StringWithAggregatesFilter<"pegawai"> | string
  }

  export type TimKerjaPegawaiWhereInput = {
    AND?: TimKerjaPegawaiWhereInput | TimKerjaPegawaiWhereInput[]
    OR?: TimKerjaPegawaiWhereInput[]
    NOT?: TimKerjaPegawaiWhereInput | TimKerjaPegawaiWhereInput[]
    id?: IntFilter<"TimKerjaPegawai"> | number
    userId?: IntFilter<"TimKerjaPegawai"> | number
    timKerjaId?: IntFilter<"TimKerjaPegawai"> | number
    userId_fkey?: XOR<PegawaiScalarRelationFilter, pegawaiWhereInput>
    timKerja_fkey?: XOR<Tbl_timkerjaScalarRelationFilter, tbl_timkerjaWhereInput>
  }

  export type TimKerjaPegawaiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timKerjaId?: SortOrder
    userId_fkey?: pegawaiOrderByWithRelationInput
    timKerja_fkey?: tbl_timkerjaOrderByWithRelationInput
  }

  export type TimKerjaPegawaiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimKerjaPegawaiWhereInput | TimKerjaPegawaiWhereInput[]
    OR?: TimKerjaPegawaiWhereInput[]
    NOT?: TimKerjaPegawaiWhereInput | TimKerjaPegawaiWhereInput[]
    userId?: IntFilter<"TimKerjaPegawai"> | number
    timKerjaId?: IntFilter<"TimKerjaPegawai"> | number
    userId_fkey?: XOR<PegawaiScalarRelationFilter, pegawaiWhereInput>
    timKerja_fkey?: XOR<Tbl_timkerjaScalarRelationFilter, tbl_timkerjaWhereInput>
  }, "id">

  export type TimKerjaPegawaiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timKerjaId?: SortOrder
    _count?: TimKerjaPegawaiCountOrderByAggregateInput
    _avg?: TimKerjaPegawaiAvgOrderByAggregateInput
    _max?: TimKerjaPegawaiMaxOrderByAggregateInput
    _min?: TimKerjaPegawaiMinOrderByAggregateInput
    _sum?: TimKerjaPegawaiSumOrderByAggregateInput
  }

  export type TimKerjaPegawaiScalarWhereWithAggregatesInput = {
    AND?: TimKerjaPegawaiScalarWhereWithAggregatesInput | TimKerjaPegawaiScalarWhereWithAggregatesInput[]
    OR?: TimKerjaPegawaiScalarWhereWithAggregatesInput[]
    NOT?: TimKerjaPegawaiScalarWhereWithAggregatesInput | TimKerjaPegawaiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TimKerjaPegawai"> | number
    userId?: IntWithAggregatesFilter<"TimKerjaPegawai"> | number
    timKerjaId?: IntWithAggregatesFilter<"TimKerjaPegawai"> | number
  }

  export type tbl_timCreateInput = {
    tim_nama: string
  }

  export type tbl_timUncheckedCreateInput = {
    tim_id?: number
    tim_nama: string
  }

  export type tbl_timUpdateInput = {
    tim_nama?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_timUncheckedUpdateInput = {
    tim_id?: IntFieldUpdateOperationsInput | number
    tim_nama?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_timCreateManyInput = {
    tim_id?: number
    tim_nama: string
  }

  export type tbl_timUpdateManyMutationInput = {
    tim_nama?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_timUncheckedUpdateManyInput = {
    tim_id?: IntFieldUpdateOperationsInput | number
    tim_nama?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_timkerjaCreateInput = {
    tk_nip: number
    tk_tim: number
    TimKerjaPegawai?: TimKerjaPegawaiCreateNestedManyWithoutTimKerja_fkeyInput
  }

  export type tbl_timkerjaUncheckedCreateInput = {
    id?: number
    tk_nip: number
    tk_tim: number
    TimKerjaPegawai?: TimKerjaPegawaiUncheckedCreateNestedManyWithoutTimKerja_fkeyInput
  }

  export type tbl_timkerjaUpdateInput = {
    tk_nip?: IntFieldUpdateOperationsInput | number
    tk_tim?: IntFieldUpdateOperationsInput | number
    TimKerjaPegawai?: TimKerjaPegawaiUpdateManyWithoutTimKerja_fkeyNestedInput
  }

  export type tbl_timkerjaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tk_nip?: IntFieldUpdateOperationsInput | number
    tk_tim?: IntFieldUpdateOperationsInput | number
    TimKerjaPegawai?: TimKerjaPegawaiUncheckedUpdateManyWithoutTimKerja_fkeyNestedInput
  }

  export type tbl_timkerjaCreateManyInput = {
    id?: number
    tk_nip: number
    tk_tim: number
  }

  export type tbl_timkerjaUpdateManyMutationInput = {
    tk_nip?: IntFieldUpdateOperationsInput | number
    tk_tim?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_timkerjaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tk_nip?: IntFieldUpdateOperationsInput | number
    tk_tim?: IntFieldUpdateOperationsInput | number
  }

  export type skp_skpCreateInput = {
    sasaran_kinerja: string
    indikator: string
    realisasi: string
    umpan_balik: string
    bulan: string
    tahun: number
    jenis: string
    pegawai_nama: string
    pegawai_nip: number
    pegawai_gol: string
    pegawai_jabatan: string
    pegawai_unit: string
    pejabat_nama: string
    pejabat_nip: number
    pejabat_gol: string
    pejabat_jabatan: string
    pejabat_unit: string
  }

  export type skp_skpUncheckedCreateInput = {
    id?: number
    sasaran_kinerja: string
    indikator: string
    realisasi: string
    umpan_balik: string
    bulan: string
    tahun: number
    jenis: string
    pegawai_nama: string
    pegawai_nip: number
    pegawai_gol: string
    pegawai_jabatan: string
    pegawai_unit: string
    pejabat_nama: string
    pejabat_nip: number
    pejabat_gol: string
    pejabat_jabatan: string
    pejabat_unit: string
  }

  export type skp_skpUpdateInput = {
    sasaran_kinerja?: StringFieldUpdateOperationsInput | string
    indikator?: StringFieldUpdateOperationsInput | string
    realisasi?: StringFieldUpdateOperationsInput | string
    umpan_balik?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    pegawai_nama?: StringFieldUpdateOperationsInput | string
    pegawai_nip?: IntFieldUpdateOperationsInput | number
    pegawai_gol?: StringFieldUpdateOperationsInput | string
    pegawai_jabatan?: StringFieldUpdateOperationsInput | string
    pegawai_unit?: StringFieldUpdateOperationsInput | string
    pejabat_nama?: StringFieldUpdateOperationsInput | string
    pejabat_nip?: IntFieldUpdateOperationsInput | number
    pejabat_gol?: StringFieldUpdateOperationsInput | string
    pejabat_jabatan?: StringFieldUpdateOperationsInput | string
    pejabat_unit?: StringFieldUpdateOperationsInput | string
  }

  export type skp_skpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sasaran_kinerja?: StringFieldUpdateOperationsInput | string
    indikator?: StringFieldUpdateOperationsInput | string
    realisasi?: StringFieldUpdateOperationsInput | string
    umpan_balik?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    pegawai_nama?: StringFieldUpdateOperationsInput | string
    pegawai_nip?: IntFieldUpdateOperationsInput | number
    pegawai_gol?: StringFieldUpdateOperationsInput | string
    pegawai_jabatan?: StringFieldUpdateOperationsInput | string
    pegawai_unit?: StringFieldUpdateOperationsInput | string
    pejabat_nama?: StringFieldUpdateOperationsInput | string
    pejabat_nip?: IntFieldUpdateOperationsInput | number
    pejabat_gol?: StringFieldUpdateOperationsInput | string
    pejabat_jabatan?: StringFieldUpdateOperationsInput | string
    pejabat_unit?: StringFieldUpdateOperationsInput | string
  }

  export type skp_skpCreateManyInput = {
    id?: number
    sasaran_kinerja: string
    indikator: string
    realisasi: string
    umpan_balik: string
    bulan: string
    tahun: number
    jenis: string
    pegawai_nama: string
    pegawai_nip: number
    pegawai_gol: string
    pegawai_jabatan: string
    pegawai_unit: string
    pejabat_nama: string
    pejabat_nip: number
    pejabat_gol: string
    pejabat_jabatan: string
    pejabat_unit: string
  }

  export type skp_skpUpdateManyMutationInput = {
    sasaran_kinerja?: StringFieldUpdateOperationsInput | string
    indikator?: StringFieldUpdateOperationsInput | string
    realisasi?: StringFieldUpdateOperationsInput | string
    umpan_balik?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    pegawai_nama?: StringFieldUpdateOperationsInput | string
    pegawai_nip?: IntFieldUpdateOperationsInput | number
    pegawai_gol?: StringFieldUpdateOperationsInput | string
    pegawai_jabatan?: StringFieldUpdateOperationsInput | string
    pegawai_unit?: StringFieldUpdateOperationsInput | string
    pejabat_nama?: StringFieldUpdateOperationsInput | string
    pejabat_nip?: IntFieldUpdateOperationsInput | number
    pejabat_gol?: StringFieldUpdateOperationsInput | string
    pejabat_jabatan?: StringFieldUpdateOperationsInput | string
    pejabat_unit?: StringFieldUpdateOperationsInput | string
  }

  export type skp_skpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sasaran_kinerja?: StringFieldUpdateOperationsInput | string
    indikator?: StringFieldUpdateOperationsInput | string
    realisasi?: StringFieldUpdateOperationsInput | string
    umpan_balik?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    pegawai_nama?: StringFieldUpdateOperationsInput | string
    pegawai_nip?: IntFieldUpdateOperationsInput | number
    pegawai_gol?: StringFieldUpdateOperationsInput | string
    pegawai_jabatan?: StringFieldUpdateOperationsInput | string
    pegawai_unit?: StringFieldUpdateOperationsInput | string
    pejabat_nama?: StringFieldUpdateOperationsInput | string
    pejabat_nip?: IntFieldUpdateOperationsInput | number
    pejabat_gol?: StringFieldUpdateOperationsInput | string
    pejabat_jabatan?: StringFieldUpdateOperationsInput | string
    pejabat_unit?: StringFieldUpdateOperationsInput | string
  }

  export type skp_uploadedfileCreateInput = {
    file: string
    uploaded_at: string
  }

  export type skp_uploadedfileUncheckedCreateInput = {
    id?: number
    file: string
    uploaded_at: string
  }

  export type skp_uploadedfileUpdateInput = {
    file?: StringFieldUpdateOperationsInput | string
    uploaded_at?: StringFieldUpdateOperationsInput | string
  }

  export type skp_uploadedfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    file?: StringFieldUpdateOperationsInput | string
    uploaded_at?: StringFieldUpdateOperationsInput | string
  }

  export type skp_uploadedfileCreateManyInput = {
    id?: number
    file: string
    uploaded_at: string
  }

  export type skp_uploadedfileUpdateManyMutationInput = {
    file?: StringFieldUpdateOperationsInput | string
    uploaded_at?: StringFieldUpdateOperationsInput | string
  }

  export type skp_uploadedfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    file?: StringFieldUpdateOperationsInput | string
    uploaded_at?: StringFieldUpdateOperationsInput | string
  }

  export type pegawaiCreateInput = {
    nip: string
    nama: string
    jabatan: string
    wilayah: string
    golongan: string
    tmt: string
    status: string
    TimKerjaPegawai?: TimKerjaPegawaiCreateNestedManyWithoutUserId_fkeyInput
  }

  export type pegawaiUncheckedCreateInput = {
    id?: number
    nip: string
    nama: string
    jabatan: string
    wilayah: string
    golongan: string
    tmt: string
    status: string
    TimKerjaPegawai?: TimKerjaPegawaiUncheckedCreateNestedManyWithoutUserId_fkeyInput
  }

  export type pegawaiUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    tmt?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    TimKerjaPegawai?: TimKerjaPegawaiUpdateManyWithoutUserId_fkeyNestedInput
  }

  export type pegawaiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    tmt?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    TimKerjaPegawai?: TimKerjaPegawaiUncheckedUpdateManyWithoutUserId_fkeyNestedInput
  }

  export type pegawaiCreateManyInput = {
    id?: number
    nip: string
    nama: string
    jabatan: string
    wilayah: string
    golongan: string
    tmt: string
    status: string
  }

  export type pegawaiUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    tmt?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type pegawaiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    tmt?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TimKerjaPegawaiCreateInput = {
    userId_fkey: pegawaiCreateNestedOneWithoutTimKerjaPegawaiInput
    timKerja_fkey: tbl_timkerjaCreateNestedOneWithoutTimKerjaPegawaiInput
  }

  export type TimKerjaPegawaiUncheckedCreateInput = {
    id?: number
    userId: number
    timKerjaId: number
  }

  export type TimKerjaPegawaiUpdateInput = {
    userId_fkey?: pegawaiUpdateOneRequiredWithoutTimKerjaPegawaiNestedInput
    timKerja_fkey?: tbl_timkerjaUpdateOneRequiredWithoutTimKerjaPegawaiNestedInput
  }

  export type TimKerjaPegawaiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timKerjaId?: IntFieldUpdateOperationsInput | number
  }

  export type TimKerjaPegawaiCreateManyInput = {
    id?: number
    userId: number
    timKerjaId: number
  }

  export type TimKerjaPegawaiUpdateManyMutationInput = {

  }

  export type TimKerjaPegawaiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timKerjaId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type tbl_timOrderByRelevanceInput = {
    fields: tbl_timOrderByRelevanceFieldEnum | tbl_timOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_timCountOrderByAggregateInput = {
    tim_id?: SortOrder
    tim_nama?: SortOrder
  }

  export type tbl_timAvgOrderByAggregateInput = {
    tim_id?: SortOrder
  }

  export type tbl_timMaxOrderByAggregateInput = {
    tim_id?: SortOrder
    tim_nama?: SortOrder
  }

  export type tbl_timMinOrderByAggregateInput = {
    tim_id?: SortOrder
    tim_nama?: SortOrder
  }

  export type tbl_timSumOrderByAggregateInput = {
    tim_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TimKerjaPegawaiListRelationFilter = {
    every?: TimKerjaPegawaiWhereInput
    some?: TimKerjaPegawaiWhereInput
    none?: TimKerjaPegawaiWhereInput
  }

  export type TimKerjaPegawaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_timkerjaCountOrderByAggregateInput = {
    id?: SortOrder
    tk_nip?: SortOrder
    tk_tim?: SortOrder
  }

  export type tbl_timkerjaAvgOrderByAggregateInput = {
    id?: SortOrder
    tk_nip?: SortOrder
    tk_tim?: SortOrder
  }

  export type tbl_timkerjaMaxOrderByAggregateInput = {
    id?: SortOrder
    tk_nip?: SortOrder
    tk_tim?: SortOrder
  }

  export type tbl_timkerjaMinOrderByAggregateInput = {
    id?: SortOrder
    tk_nip?: SortOrder
    tk_tim?: SortOrder
  }

  export type tbl_timkerjaSumOrderByAggregateInput = {
    id?: SortOrder
    tk_nip?: SortOrder
    tk_tim?: SortOrder
  }

  export type skp_skpOrderByRelevanceInput = {
    fields: skp_skpOrderByRelevanceFieldEnum | skp_skpOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type skp_skpCountOrderByAggregateInput = {
    id?: SortOrder
    sasaran_kinerja?: SortOrder
    indikator?: SortOrder
    realisasi?: SortOrder
    umpan_balik?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jenis?: SortOrder
    pegawai_nama?: SortOrder
    pegawai_nip?: SortOrder
    pegawai_gol?: SortOrder
    pegawai_jabatan?: SortOrder
    pegawai_unit?: SortOrder
    pejabat_nama?: SortOrder
    pejabat_nip?: SortOrder
    pejabat_gol?: SortOrder
    pejabat_jabatan?: SortOrder
    pejabat_unit?: SortOrder
  }

  export type skp_skpAvgOrderByAggregateInput = {
    id?: SortOrder
    tahun?: SortOrder
    pegawai_nip?: SortOrder
    pejabat_nip?: SortOrder
  }

  export type skp_skpMaxOrderByAggregateInput = {
    id?: SortOrder
    sasaran_kinerja?: SortOrder
    indikator?: SortOrder
    realisasi?: SortOrder
    umpan_balik?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jenis?: SortOrder
    pegawai_nama?: SortOrder
    pegawai_nip?: SortOrder
    pegawai_gol?: SortOrder
    pegawai_jabatan?: SortOrder
    pegawai_unit?: SortOrder
    pejabat_nama?: SortOrder
    pejabat_nip?: SortOrder
    pejabat_gol?: SortOrder
    pejabat_jabatan?: SortOrder
    pejabat_unit?: SortOrder
  }

  export type skp_skpMinOrderByAggregateInput = {
    id?: SortOrder
    sasaran_kinerja?: SortOrder
    indikator?: SortOrder
    realisasi?: SortOrder
    umpan_balik?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jenis?: SortOrder
    pegawai_nama?: SortOrder
    pegawai_nip?: SortOrder
    pegawai_gol?: SortOrder
    pegawai_jabatan?: SortOrder
    pegawai_unit?: SortOrder
    pejabat_nama?: SortOrder
    pejabat_nip?: SortOrder
    pejabat_gol?: SortOrder
    pejabat_jabatan?: SortOrder
    pejabat_unit?: SortOrder
  }

  export type skp_skpSumOrderByAggregateInput = {
    id?: SortOrder
    tahun?: SortOrder
    pegawai_nip?: SortOrder
    pejabat_nip?: SortOrder
  }

  export type skp_uploadedfileOrderByRelevanceInput = {
    fields: skp_uploadedfileOrderByRelevanceFieldEnum | skp_uploadedfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type skp_uploadedfileCountOrderByAggregateInput = {
    id?: SortOrder
    file?: SortOrder
    uploaded_at?: SortOrder
  }

  export type skp_uploadedfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type skp_uploadedfileMaxOrderByAggregateInput = {
    id?: SortOrder
    file?: SortOrder
    uploaded_at?: SortOrder
  }

  export type skp_uploadedfileMinOrderByAggregateInput = {
    id?: SortOrder
    file?: SortOrder
    uploaded_at?: SortOrder
  }

  export type skp_uploadedfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pegawaiOrderByRelevanceInput = {
    fields: pegawaiOrderByRelevanceFieldEnum | pegawaiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pegawaiCountOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    wilayah?: SortOrder
    golongan?: SortOrder
    tmt?: SortOrder
    status?: SortOrder
  }

  export type pegawaiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pegawaiMaxOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    wilayah?: SortOrder
    golongan?: SortOrder
    tmt?: SortOrder
    status?: SortOrder
  }

  export type pegawaiMinOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    wilayah?: SortOrder
    golongan?: SortOrder
    tmt?: SortOrder
    status?: SortOrder
  }

  export type pegawaiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PegawaiScalarRelationFilter = {
    is?: pegawaiWhereInput
    isNot?: pegawaiWhereInput
  }

  export type Tbl_timkerjaScalarRelationFilter = {
    is?: tbl_timkerjaWhereInput
    isNot?: tbl_timkerjaWhereInput
  }

  export type TimKerjaPegawaiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timKerjaId?: SortOrder
  }

  export type TimKerjaPegawaiAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timKerjaId?: SortOrder
  }

  export type TimKerjaPegawaiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timKerjaId?: SortOrder
  }

  export type TimKerjaPegawaiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timKerjaId?: SortOrder
  }

  export type TimKerjaPegawaiSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timKerjaId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimKerjaPegawaiCreateNestedManyWithoutTimKerja_fkeyInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput> | TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyTimKerja_fkeyInputEnvelope
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
  }

  export type TimKerjaPegawaiUncheckedCreateNestedManyWithoutTimKerja_fkeyInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput> | TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyTimKerja_fkeyInputEnvelope
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
  }

  export type TimKerjaPegawaiUpdateManyWithoutTimKerja_fkeyNestedInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput> | TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput[]
    upsert?: TimKerjaPegawaiUpsertWithWhereUniqueWithoutTimKerja_fkeyInput | TimKerjaPegawaiUpsertWithWhereUniqueWithoutTimKerja_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyTimKerja_fkeyInputEnvelope
    set?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    disconnect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    delete?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    update?: TimKerjaPegawaiUpdateWithWhereUniqueWithoutTimKerja_fkeyInput | TimKerjaPegawaiUpdateWithWhereUniqueWithoutTimKerja_fkeyInput[]
    updateMany?: TimKerjaPegawaiUpdateManyWithWhereWithoutTimKerja_fkeyInput | TimKerjaPegawaiUpdateManyWithWhereWithoutTimKerja_fkeyInput[]
    deleteMany?: TimKerjaPegawaiScalarWhereInput | TimKerjaPegawaiScalarWhereInput[]
  }

  export type TimKerjaPegawaiUncheckedUpdateManyWithoutTimKerja_fkeyNestedInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput> | TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput[]
    upsert?: TimKerjaPegawaiUpsertWithWhereUniqueWithoutTimKerja_fkeyInput | TimKerjaPegawaiUpsertWithWhereUniqueWithoutTimKerja_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyTimKerja_fkeyInputEnvelope
    set?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    disconnect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    delete?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    update?: TimKerjaPegawaiUpdateWithWhereUniqueWithoutTimKerja_fkeyInput | TimKerjaPegawaiUpdateWithWhereUniqueWithoutTimKerja_fkeyInput[]
    updateMany?: TimKerjaPegawaiUpdateManyWithWhereWithoutTimKerja_fkeyInput | TimKerjaPegawaiUpdateManyWithWhereWithoutTimKerja_fkeyInput[]
    deleteMany?: TimKerjaPegawaiScalarWhereInput | TimKerjaPegawaiScalarWhereInput[]
  }

  export type TimKerjaPegawaiCreateNestedManyWithoutUserId_fkeyInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput> | TimKerjaPegawaiCreateWithoutUserId_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyUserId_fkeyInputEnvelope
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
  }

  export type TimKerjaPegawaiUncheckedCreateNestedManyWithoutUserId_fkeyInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput> | TimKerjaPegawaiCreateWithoutUserId_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyUserId_fkeyInputEnvelope
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
  }

  export type TimKerjaPegawaiUpdateManyWithoutUserId_fkeyNestedInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput> | TimKerjaPegawaiCreateWithoutUserId_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput[]
    upsert?: TimKerjaPegawaiUpsertWithWhereUniqueWithoutUserId_fkeyInput | TimKerjaPegawaiUpsertWithWhereUniqueWithoutUserId_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyUserId_fkeyInputEnvelope
    set?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    disconnect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    delete?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    update?: TimKerjaPegawaiUpdateWithWhereUniqueWithoutUserId_fkeyInput | TimKerjaPegawaiUpdateWithWhereUniqueWithoutUserId_fkeyInput[]
    updateMany?: TimKerjaPegawaiUpdateManyWithWhereWithoutUserId_fkeyInput | TimKerjaPegawaiUpdateManyWithWhereWithoutUserId_fkeyInput[]
    deleteMany?: TimKerjaPegawaiScalarWhereInput | TimKerjaPegawaiScalarWhereInput[]
  }

  export type TimKerjaPegawaiUncheckedUpdateManyWithoutUserId_fkeyNestedInput = {
    create?: XOR<TimKerjaPegawaiCreateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput> | TimKerjaPegawaiCreateWithoutUserId_fkeyInput[] | TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput[]
    connectOrCreate?: TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput | TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput[]
    upsert?: TimKerjaPegawaiUpsertWithWhereUniqueWithoutUserId_fkeyInput | TimKerjaPegawaiUpsertWithWhereUniqueWithoutUserId_fkeyInput[]
    createMany?: TimKerjaPegawaiCreateManyUserId_fkeyInputEnvelope
    set?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    disconnect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    delete?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    connect?: TimKerjaPegawaiWhereUniqueInput | TimKerjaPegawaiWhereUniqueInput[]
    update?: TimKerjaPegawaiUpdateWithWhereUniqueWithoutUserId_fkeyInput | TimKerjaPegawaiUpdateWithWhereUniqueWithoutUserId_fkeyInput[]
    updateMany?: TimKerjaPegawaiUpdateManyWithWhereWithoutUserId_fkeyInput | TimKerjaPegawaiUpdateManyWithWhereWithoutUserId_fkeyInput[]
    deleteMany?: TimKerjaPegawaiScalarWhereInput | TimKerjaPegawaiScalarWhereInput[]
  }

  export type pegawaiCreateNestedOneWithoutTimKerjaPegawaiInput = {
    create?: XOR<pegawaiCreateWithoutTimKerjaPegawaiInput, pegawaiUncheckedCreateWithoutTimKerjaPegawaiInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutTimKerjaPegawaiInput
    connect?: pegawaiWhereUniqueInput
  }

  export type tbl_timkerjaCreateNestedOneWithoutTimKerjaPegawaiInput = {
    create?: XOR<tbl_timkerjaCreateWithoutTimKerjaPegawaiInput, tbl_timkerjaUncheckedCreateWithoutTimKerjaPegawaiInput>
    connectOrCreate?: tbl_timkerjaCreateOrConnectWithoutTimKerjaPegawaiInput
    connect?: tbl_timkerjaWhereUniqueInput
  }

  export type pegawaiUpdateOneRequiredWithoutTimKerjaPegawaiNestedInput = {
    create?: XOR<pegawaiCreateWithoutTimKerjaPegawaiInput, pegawaiUncheckedCreateWithoutTimKerjaPegawaiInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutTimKerjaPegawaiInput
    upsert?: pegawaiUpsertWithoutTimKerjaPegawaiInput
    connect?: pegawaiWhereUniqueInput
    update?: XOR<XOR<pegawaiUpdateToOneWithWhereWithoutTimKerjaPegawaiInput, pegawaiUpdateWithoutTimKerjaPegawaiInput>, pegawaiUncheckedUpdateWithoutTimKerjaPegawaiInput>
  }

  export type tbl_timkerjaUpdateOneRequiredWithoutTimKerjaPegawaiNestedInput = {
    create?: XOR<tbl_timkerjaCreateWithoutTimKerjaPegawaiInput, tbl_timkerjaUncheckedCreateWithoutTimKerjaPegawaiInput>
    connectOrCreate?: tbl_timkerjaCreateOrConnectWithoutTimKerjaPegawaiInput
    upsert?: tbl_timkerjaUpsertWithoutTimKerjaPegawaiInput
    connect?: tbl_timkerjaWhereUniqueInput
    update?: XOR<XOR<tbl_timkerjaUpdateToOneWithWhereWithoutTimKerjaPegawaiInput, tbl_timkerjaUpdateWithoutTimKerjaPegawaiInput>, tbl_timkerjaUncheckedUpdateWithoutTimKerjaPegawaiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput = {
    userId_fkey: pegawaiCreateNestedOneWithoutTimKerjaPegawaiInput
  }

  export type TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput = {
    id?: number
    userId: number
  }

  export type TimKerjaPegawaiCreateOrConnectWithoutTimKerja_fkeyInput = {
    where: TimKerjaPegawaiWhereUniqueInput
    create: XOR<TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput>
  }

  export type TimKerjaPegawaiCreateManyTimKerja_fkeyInputEnvelope = {
    data: TimKerjaPegawaiCreateManyTimKerja_fkeyInput | TimKerjaPegawaiCreateManyTimKerja_fkeyInput[]
    skipDuplicates?: boolean
  }

  export type TimKerjaPegawaiUpsertWithWhereUniqueWithoutTimKerja_fkeyInput = {
    where: TimKerjaPegawaiWhereUniqueInput
    update: XOR<TimKerjaPegawaiUpdateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedUpdateWithoutTimKerja_fkeyInput>
    create: XOR<TimKerjaPegawaiCreateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutTimKerja_fkeyInput>
  }

  export type TimKerjaPegawaiUpdateWithWhereUniqueWithoutTimKerja_fkeyInput = {
    where: TimKerjaPegawaiWhereUniqueInput
    data: XOR<TimKerjaPegawaiUpdateWithoutTimKerja_fkeyInput, TimKerjaPegawaiUncheckedUpdateWithoutTimKerja_fkeyInput>
  }

  export type TimKerjaPegawaiUpdateManyWithWhereWithoutTimKerja_fkeyInput = {
    where: TimKerjaPegawaiScalarWhereInput
    data: XOR<TimKerjaPegawaiUpdateManyMutationInput, TimKerjaPegawaiUncheckedUpdateManyWithoutTimKerja_fkeyInput>
  }

  export type TimKerjaPegawaiScalarWhereInput = {
    AND?: TimKerjaPegawaiScalarWhereInput | TimKerjaPegawaiScalarWhereInput[]
    OR?: TimKerjaPegawaiScalarWhereInput[]
    NOT?: TimKerjaPegawaiScalarWhereInput | TimKerjaPegawaiScalarWhereInput[]
    id?: IntFilter<"TimKerjaPegawai"> | number
    userId?: IntFilter<"TimKerjaPegawai"> | number
    timKerjaId?: IntFilter<"TimKerjaPegawai"> | number
  }

  export type TimKerjaPegawaiCreateWithoutUserId_fkeyInput = {
    timKerja_fkey: tbl_timkerjaCreateNestedOneWithoutTimKerjaPegawaiInput
  }

  export type TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput = {
    id?: number
    timKerjaId: number
  }

  export type TimKerjaPegawaiCreateOrConnectWithoutUserId_fkeyInput = {
    where: TimKerjaPegawaiWhereUniqueInput
    create: XOR<TimKerjaPegawaiCreateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput>
  }

  export type TimKerjaPegawaiCreateManyUserId_fkeyInputEnvelope = {
    data: TimKerjaPegawaiCreateManyUserId_fkeyInput | TimKerjaPegawaiCreateManyUserId_fkeyInput[]
    skipDuplicates?: boolean
  }

  export type TimKerjaPegawaiUpsertWithWhereUniqueWithoutUserId_fkeyInput = {
    where: TimKerjaPegawaiWhereUniqueInput
    update: XOR<TimKerjaPegawaiUpdateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedUpdateWithoutUserId_fkeyInput>
    create: XOR<TimKerjaPegawaiCreateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedCreateWithoutUserId_fkeyInput>
  }

  export type TimKerjaPegawaiUpdateWithWhereUniqueWithoutUserId_fkeyInput = {
    where: TimKerjaPegawaiWhereUniqueInput
    data: XOR<TimKerjaPegawaiUpdateWithoutUserId_fkeyInput, TimKerjaPegawaiUncheckedUpdateWithoutUserId_fkeyInput>
  }

  export type TimKerjaPegawaiUpdateManyWithWhereWithoutUserId_fkeyInput = {
    where: TimKerjaPegawaiScalarWhereInput
    data: XOR<TimKerjaPegawaiUpdateManyMutationInput, TimKerjaPegawaiUncheckedUpdateManyWithoutUserId_fkeyInput>
  }

  export type pegawaiCreateWithoutTimKerjaPegawaiInput = {
    nip: string
    nama: string
    jabatan: string
    wilayah: string
    golongan: string
    tmt: string
    status: string
  }

  export type pegawaiUncheckedCreateWithoutTimKerjaPegawaiInput = {
    id?: number
    nip: string
    nama: string
    jabatan: string
    wilayah: string
    golongan: string
    tmt: string
    status: string
  }

  export type pegawaiCreateOrConnectWithoutTimKerjaPegawaiInput = {
    where: pegawaiWhereUniqueInput
    create: XOR<pegawaiCreateWithoutTimKerjaPegawaiInput, pegawaiUncheckedCreateWithoutTimKerjaPegawaiInput>
  }

  export type tbl_timkerjaCreateWithoutTimKerjaPegawaiInput = {
    tk_nip: number
    tk_tim: number
  }

  export type tbl_timkerjaUncheckedCreateWithoutTimKerjaPegawaiInput = {
    id?: number
    tk_nip: number
    tk_tim: number
  }

  export type tbl_timkerjaCreateOrConnectWithoutTimKerjaPegawaiInput = {
    where: tbl_timkerjaWhereUniqueInput
    create: XOR<tbl_timkerjaCreateWithoutTimKerjaPegawaiInput, tbl_timkerjaUncheckedCreateWithoutTimKerjaPegawaiInput>
  }

  export type pegawaiUpsertWithoutTimKerjaPegawaiInput = {
    update: XOR<pegawaiUpdateWithoutTimKerjaPegawaiInput, pegawaiUncheckedUpdateWithoutTimKerjaPegawaiInput>
    create: XOR<pegawaiCreateWithoutTimKerjaPegawaiInput, pegawaiUncheckedCreateWithoutTimKerjaPegawaiInput>
    where?: pegawaiWhereInput
  }

  export type pegawaiUpdateToOneWithWhereWithoutTimKerjaPegawaiInput = {
    where?: pegawaiWhereInput
    data: XOR<pegawaiUpdateWithoutTimKerjaPegawaiInput, pegawaiUncheckedUpdateWithoutTimKerjaPegawaiInput>
  }

  export type pegawaiUpdateWithoutTimKerjaPegawaiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    tmt?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type pegawaiUncheckedUpdateWithoutTimKerjaPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    golongan?: StringFieldUpdateOperationsInput | string
    tmt?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_timkerjaUpsertWithoutTimKerjaPegawaiInput = {
    update: XOR<tbl_timkerjaUpdateWithoutTimKerjaPegawaiInput, tbl_timkerjaUncheckedUpdateWithoutTimKerjaPegawaiInput>
    create: XOR<tbl_timkerjaCreateWithoutTimKerjaPegawaiInput, tbl_timkerjaUncheckedCreateWithoutTimKerjaPegawaiInput>
    where?: tbl_timkerjaWhereInput
  }

  export type tbl_timkerjaUpdateToOneWithWhereWithoutTimKerjaPegawaiInput = {
    where?: tbl_timkerjaWhereInput
    data: XOR<tbl_timkerjaUpdateWithoutTimKerjaPegawaiInput, tbl_timkerjaUncheckedUpdateWithoutTimKerjaPegawaiInput>
  }

  export type tbl_timkerjaUpdateWithoutTimKerjaPegawaiInput = {
    tk_nip?: IntFieldUpdateOperationsInput | number
    tk_tim?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_timkerjaUncheckedUpdateWithoutTimKerjaPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    tk_nip?: IntFieldUpdateOperationsInput | number
    tk_tim?: IntFieldUpdateOperationsInput | number
  }

  export type TimKerjaPegawaiCreateManyTimKerja_fkeyInput = {
    id?: number
    userId: number
  }

  export type TimKerjaPegawaiUpdateWithoutTimKerja_fkeyInput = {
    userId_fkey?: pegawaiUpdateOneRequiredWithoutTimKerjaPegawaiNestedInput
  }

  export type TimKerjaPegawaiUncheckedUpdateWithoutTimKerja_fkeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TimKerjaPegawaiUncheckedUpdateManyWithoutTimKerja_fkeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TimKerjaPegawaiCreateManyUserId_fkeyInput = {
    id?: number
    timKerjaId: number
  }

  export type TimKerjaPegawaiUpdateWithoutUserId_fkeyInput = {
    timKerja_fkey?: tbl_timkerjaUpdateOneRequiredWithoutTimKerjaPegawaiNestedInput
  }

  export type TimKerjaPegawaiUncheckedUpdateWithoutUserId_fkeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timKerjaId?: IntFieldUpdateOperationsInput | number
  }

  export type TimKerjaPegawaiUncheckedUpdateManyWithoutUserId_fkeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timKerjaId?: IntFieldUpdateOperationsInput | number
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