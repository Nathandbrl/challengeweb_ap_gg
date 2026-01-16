import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly ap_build_items: "ap_build_items";
    readonly ap_builds: "ap_builds";
    readonly champions: "champions";
    readonly doctrine_migration_versions: "doctrine_migration_versions";
    readonly favorite_champions: "favorite_champions";
    readonly items: "items";
    readonly player_statistics: "player_statistics";
    readonly players: "players";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "ap_build_items" | "ap_builds" | "champions" | "doctrine_migration_versions" | "favorite_champions" | "items" | "player_statistics" | "players";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        ap_build_items: {
            payload: Prisma.$ap_build_itemsPayload<ExtArgs>;
            fields: Prisma.ap_build_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ap_build_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ap_build_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.ap_build_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ap_build_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>;
                };
                findMany: {
                    args: Prisma.ap_build_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>[];
                };
                create: {
                    args: Prisma.ap_build_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>;
                };
                createMany: {
                    args: Prisma.ap_build_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ap_build_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>[];
                };
                delete: {
                    args: Prisma.ap_build_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>;
                };
                update: {
                    args: Prisma.ap_build_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.ap_build_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ap_build_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ap_build_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.ap_build_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_build_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Ap_build_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAp_build_items>;
                };
                groupBy: {
                    args: Prisma.ap_build_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ap_build_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ap_build_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ap_build_itemsCountAggregateOutputType> | number;
                };
            };
        };
        ap_builds: {
            payload: Prisma.$ap_buildsPayload<ExtArgs>;
            fields: Prisma.ap_buildsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ap_buildsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ap_buildsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>;
                };
                findFirst: {
                    args: Prisma.ap_buildsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ap_buildsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>;
                };
                findMany: {
                    args: Prisma.ap_buildsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>[];
                };
                create: {
                    args: Prisma.ap_buildsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>;
                };
                createMany: {
                    args: Prisma.ap_buildsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ap_buildsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>[];
                };
                delete: {
                    args: Prisma.ap_buildsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>;
                };
                update: {
                    args: Prisma.ap_buildsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>;
                };
                deleteMany: {
                    args: Prisma.ap_buildsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ap_buildsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ap_buildsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>[];
                };
                upsert: {
                    args: Prisma.ap_buildsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ap_buildsPayload>;
                };
                aggregate: {
                    args: Prisma.Ap_buildsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAp_builds>;
                };
                groupBy: {
                    args: Prisma.ap_buildsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ap_buildsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ap_buildsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ap_buildsCountAggregateOutputType> | number;
                };
            };
        };
        champions: {
            payload: Prisma.$championsPayload<ExtArgs>;
            fields: Prisma.championsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.championsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.championsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>;
                };
                findFirst: {
                    args: Prisma.championsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.championsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>;
                };
                findMany: {
                    args: Prisma.championsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>[];
                };
                create: {
                    args: Prisma.championsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>;
                };
                createMany: {
                    args: Prisma.championsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.championsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>[];
                };
                delete: {
                    args: Prisma.championsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>;
                };
                update: {
                    args: Prisma.championsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>;
                };
                deleteMany: {
                    args: Prisma.championsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.championsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.championsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>[];
                };
                upsert: {
                    args: Prisma.championsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$championsPayload>;
                };
                aggregate: {
                    args: Prisma.ChampionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChampions>;
                };
                groupBy: {
                    args: Prisma.championsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChampionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.championsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChampionsCountAggregateOutputType> | number;
                };
            };
        };
        doctrine_migration_versions: {
            payload: Prisma.$doctrine_migration_versionsPayload<ExtArgs>;
            fields: Prisma.doctrine_migration_versionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.doctrine_migration_versionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.doctrine_migration_versionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>;
                };
                findFirst: {
                    args: Prisma.doctrine_migration_versionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.doctrine_migration_versionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>;
                };
                findMany: {
                    args: Prisma.doctrine_migration_versionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>[];
                };
                create: {
                    args: Prisma.doctrine_migration_versionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>;
                };
                createMany: {
                    args: Prisma.doctrine_migration_versionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.doctrine_migration_versionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>[];
                };
                delete: {
                    args: Prisma.doctrine_migration_versionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>;
                };
                update: {
                    args: Prisma.doctrine_migration_versionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>;
                };
                deleteMany: {
                    args: Prisma.doctrine_migration_versionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.doctrine_migration_versionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.doctrine_migration_versionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>[];
                };
                upsert: {
                    args: Prisma.doctrine_migration_versionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>;
                };
                aggregate: {
                    args: Prisma.Doctrine_migration_versionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctrine_migration_versions>;
                };
                groupBy: {
                    args: Prisma.doctrine_migration_versionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Doctrine_migration_versionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.doctrine_migration_versionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Doctrine_migration_versionsCountAggregateOutputType> | number;
                };
            };
        };
        favorite_champions: {
            payload: Prisma.$favorite_championsPayload<ExtArgs>;
            fields: Prisma.favorite_championsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.favorite_championsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.favorite_championsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>;
                };
                findFirst: {
                    args: Prisma.favorite_championsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.favorite_championsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>;
                };
                findMany: {
                    args: Prisma.favorite_championsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>[];
                };
                create: {
                    args: Prisma.favorite_championsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>;
                };
                createMany: {
                    args: Prisma.favorite_championsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.favorite_championsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>[];
                };
                delete: {
                    args: Prisma.favorite_championsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>;
                };
                update: {
                    args: Prisma.favorite_championsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>;
                };
                deleteMany: {
                    args: Prisma.favorite_championsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.favorite_championsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.favorite_championsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>[];
                };
                upsert: {
                    args: Prisma.favorite_championsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$favorite_championsPayload>;
                };
                aggregate: {
                    args: Prisma.Favorite_championsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFavorite_champions>;
                };
                groupBy: {
                    args: Prisma.favorite_championsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Favorite_championsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.favorite_championsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Favorite_championsCountAggregateOutputType> | number;
                };
            };
        };
        items: {
            payload: Prisma.$itemsPayload<ExtArgs>;
            fields: Prisma.itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>;
                };
                findFirst: {
                    args: Prisma.itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>;
                };
                findMany: {
                    args: Prisma.itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>[];
                };
                create: {
                    args: Prisma.itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>;
                };
                createMany: {
                    args: Prisma.itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>[];
                };
                delete: {
                    args: Prisma.itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>;
                };
                update: {
                    args: Prisma.itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>[];
                };
                upsert: {
                    args: Prisma.itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$itemsPayload>;
                };
                aggregate: {
                    args: Prisma.ItemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateItems>;
                };
                groupBy: {
                    args: Prisma.itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ItemsCountAggregateOutputType> | number;
                };
            };
        };
        player_statistics: {
            payload: Prisma.$player_statisticsPayload<ExtArgs>;
            fields: Prisma.player_statisticsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.player_statisticsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.player_statisticsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>;
                };
                findFirst: {
                    args: Prisma.player_statisticsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.player_statisticsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>;
                };
                findMany: {
                    args: Prisma.player_statisticsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>[];
                };
                create: {
                    args: Prisma.player_statisticsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>;
                };
                createMany: {
                    args: Prisma.player_statisticsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.player_statisticsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>[];
                };
                delete: {
                    args: Prisma.player_statisticsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>;
                };
                update: {
                    args: Prisma.player_statisticsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>;
                };
                deleteMany: {
                    args: Prisma.player_statisticsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.player_statisticsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.player_statisticsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>[];
                };
                upsert: {
                    args: Prisma.player_statisticsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$player_statisticsPayload>;
                };
                aggregate: {
                    args: Prisma.Player_statisticsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlayer_statistics>;
                };
                groupBy: {
                    args: Prisma.player_statisticsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Player_statisticsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.player_statisticsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Player_statisticsCountAggregateOutputType> | number;
                };
            };
        };
        players: {
            payload: Prisma.$playersPayload<ExtArgs>;
            fields: Prisma.playersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.playersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.playersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>;
                };
                findFirst: {
                    args: Prisma.playersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.playersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>;
                };
                findMany: {
                    args: Prisma.playersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>[];
                };
                create: {
                    args: Prisma.playersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>;
                };
                createMany: {
                    args: Prisma.playersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.playersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>[];
                };
                delete: {
                    args: Prisma.playersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>;
                };
                update: {
                    args: Prisma.playersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>;
                };
                deleteMany: {
                    args: Prisma.playersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.playersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.playersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>[];
                };
                upsert: {
                    args: Prisma.playersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$playersPayload>;
                };
                aggregate: {
                    args: Prisma.PlayersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlayers>;
                };
                groupBy: {
                    args: Prisma.playersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.playersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Ap_build_itemsScalarFieldEnum: {
    readonly ap_build_id: "ap_build_id";
    readonly item_id: "item_id";
};
export type Ap_build_itemsScalarFieldEnum = (typeof Ap_build_itemsScalarFieldEnum)[keyof typeof Ap_build_itemsScalarFieldEnum];
export declare const Ap_buildsScalarFieldEnum: {
    readonly id: "id";
    readonly champion_id: "champion_id";
    readonly name: "name";
    readonly description: "description";
    readonly win_rate: "win_rate";
    readonly pick_count: "pick_count";
    readonly difficulty: "difficulty";
    readonly tips: "tips";
    readonly priority: "priority";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Ap_buildsScalarFieldEnum = (typeof Ap_buildsScalarFieldEnum)[keyof typeof Ap_buildsScalarFieldEnum];
export declare const ChampionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly title: "title";
    readonly description: "description";
    readonly role: "role";
    readonly image_url: "image_url";
    readonly pick_rate: "pick_rate";
    readonly win_rate: "win_rate";
    readonly riot_id: "riot_id";
    readonly created_at: "created_at";
};
export type ChampionsScalarFieldEnum = (typeof ChampionsScalarFieldEnum)[keyof typeof ChampionsScalarFieldEnum];
export declare const Doctrine_migration_versionsScalarFieldEnum: {
    readonly version: "version";
    readonly executed_at: "executed_at";
    readonly execution_time: "execution_time";
};
export type Doctrine_migration_versionsScalarFieldEnum = (typeof Doctrine_migration_versionsScalarFieldEnum)[keyof typeof Doctrine_migration_versionsScalarFieldEnum];
export declare const Favorite_championsScalarFieldEnum: {
    readonly id: "id";
    readonly player_id: "player_id";
    readonly champion_id: "champion_id";
    readonly added_at: "added_at";
};
export type Favorite_championsScalarFieldEnum = (typeof Favorite_championsScalarFieldEnum)[keyof typeof Favorite_championsScalarFieldEnum];
export declare const ItemsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly gold: "gold";
    readonly ap_bonus: "ap_bonus";
    readonly other_bonus: "other_bonus";
    readonly image_url: "image_url";
    readonly riot_id: "riot_id";
    readonly created_at: "created_at";
};
export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum];
export declare const Player_statisticsScalarFieldEnum: {
    readonly id: "id";
    readonly player_id: "player_id";
    readonly champion_id: "champion_id";
    readonly games_played: "games_played";
    readonly wins: "wins";
    readonly win_rate: "win_rate";
    readonly avg_kills: "avg_kills";
    readonly avg_deaths: "avg_deaths";
    readonly avg_assists: "avg_assists";
    readonly avg_cs_per_min: "avg_cs_per_min";
    readonly avg_gold_per_min: "avg_gold_per_min";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Player_statisticsScalarFieldEnum = (typeof Player_statisticsScalarFieldEnum)[keyof typeof Player_statisticsScalarFieldEnum];
export declare const PlayersScalarFieldEnum: {
    readonly id: "id";
    readonly riot_id: "riot_id";
    readonly summoner_name: "summoner_name";
    readonly tag_line: "tag_line";
    readonly profile_icon_url: "profile_icon_url";
    readonly summoner_level: "summoner_level";
    readonly rank: "rank";
    readonly tier: "tier";
    readonly league_points: "league_points";
    readonly wins: "wins";
    readonly losses: "losses";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    ap_build_items?: Prisma.ap_build_itemsOmit;
    ap_builds?: Prisma.ap_buildsOmit;
    champions?: Prisma.championsOmit;
    doctrine_migration_versions?: Prisma.doctrine_migration_versionsOmit;
    favorite_champions?: Prisma.favorite_championsOmit;
    items?: Prisma.itemsOmit;
    player_statistics?: Prisma.player_statisticsOmit;
    players?: Prisma.playersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
