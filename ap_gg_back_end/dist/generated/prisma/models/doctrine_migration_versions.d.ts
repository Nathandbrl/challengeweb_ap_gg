import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type doctrine_migration_versionsModel = runtime.Types.Result.DefaultSelection<Prisma.$doctrine_migration_versionsPayload>;
export type AggregateDoctrine_migration_versions = {
    _count: Doctrine_migration_versionsCountAggregateOutputType | null;
    _avg: Doctrine_migration_versionsAvgAggregateOutputType | null;
    _sum: Doctrine_migration_versionsSumAggregateOutputType | null;
    _min: Doctrine_migration_versionsMinAggregateOutputType | null;
    _max: Doctrine_migration_versionsMaxAggregateOutputType | null;
};
export type Doctrine_migration_versionsAvgAggregateOutputType = {
    execution_time: number | null;
};
export type Doctrine_migration_versionsSumAggregateOutputType = {
    execution_time: number | null;
};
export type Doctrine_migration_versionsMinAggregateOutputType = {
    version: string | null;
    executed_at: Date | null;
    execution_time: number | null;
};
export type Doctrine_migration_versionsMaxAggregateOutputType = {
    version: string | null;
    executed_at: Date | null;
    execution_time: number | null;
};
export type Doctrine_migration_versionsCountAggregateOutputType = {
    version: number;
    executed_at: number;
    execution_time: number;
    _all: number;
};
export type Doctrine_migration_versionsAvgAggregateInputType = {
    execution_time?: true;
};
export type Doctrine_migration_versionsSumAggregateInputType = {
    execution_time?: true;
};
export type Doctrine_migration_versionsMinAggregateInputType = {
    version?: true;
    executed_at?: true;
    execution_time?: true;
};
export type Doctrine_migration_versionsMaxAggregateInputType = {
    version?: true;
    executed_at?: true;
    execution_time?: true;
};
export type Doctrine_migration_versionsCountAggregateInputType = {
    version?: true;
    executed_at?: true;
    execution_time?: true;
    _all?: true;
};
export type Doctrine_migration_versionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.doctrine_migration_versionsWhereInput;
    orderBy?: Prisma.doctrine_migration_versionsOrderByWithRelationInput | Prisma.doctrine_migration_versionsOrderByWithRelationInput[];
    cursor?: Prisma.doctrine_migration_versionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Doctrine_migration_versionsCountAggregateInputType;
    _avg?: Doctrine_migration_versionsAvgAggregateInputType;
    _sum?: Doctrine_migration_versionsSumAggregateInputType;
    _min?: Doctrine_migration_versionsMinAggregateInputType;
    _max?: Doctrine_migration_versionsMaxAggregateInputType;
};
export type GetDoctrine_migration_versionsAggregateType<T extends Doctrine_migration_versionsAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctrine_migration_versions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoctrine_migration_versions[P]> : Prisma.GetScalarType<T[P], AggregateDoctrine_migration_versions[P]>;
};
export type doctrine_migration_versionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.doctrine_migration_versionsWhereInput;
    orderBy?: Prisma.doctrine_migration_versionsOrderByWithAggregationInput | Prisma.doctrine_migration_versionsOrderByWithAggregationInput[];
    by: Prisma.Doctrine_migration_versionsScalarFieldEnum[] | Prisma.Doctrine_migration_versionsScalarFieldEnum;
    having?: Prisma.doctrine_migration_versionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Doctrine_migration_versionsCountAggregateInputType | true;
    _avg?: Doctrine_migration_versionsAvgAggregateInputType;
    _sum?: Doctrine_migration_versionsSumAggregateInputType;
    _min?: Doctrine_migration_versionsMinAggregateInputType;
    _max?: Doctrine_migration_versionsMaxAggregateInputType;
};
export type Doctrine_migration_versionsGroupByOutputType = {
    version: string;
    executed_at: Date | null;
    execution_time: number | null;
    _count: Doctrine_migration_versionsCountAggregateOutputType | null;
    _avg: Doctrine_migration_versionsAvgAggregateOutputType | null;
    _sum: Doctrine_migration_versionsSumAggregateOutputType | null;
    _min: Doctrine_migration_versionsMinAggregateOutputType | null;
    _max: Doctrine_migration_versionsMaxAggregateOutputType | null;
};
type GetDoctrine_migration_versionsGroupByPayload<T extends doctrine_migration_versionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Doctrine_migration_versionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Doctrine_migration_versionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Doctrine_migration_versionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Doctrine_migration_versionsGroupByOutputType[P]>;
}>>;
export type doctrine_migration_versionsWhereInput = {
    AND?: Prisma.doctrine_migration_versionsWhereInput | Prisma.doctrine_migration_versionsWhereInput[];
    OR?: Prisma.doctrine_migration_versionsWhereInput[];
    NOT?: Prisma.doctrine_migration_versionsWhereInput | Prisma.doctrine_migration_versionsWhereInput[];
    version?: Prisma.StringFilter<"doctrine_migration_versions"> | string;
    executed_at?: Prisma.DateTimeNullableFilter<"doctrine_migration_versions"> | Date | string | null;
    execution_time?: Prisma.IntNullableFilter<"doctrine_migration_versions"> | number | null;
};
export type doctrine_migration_versionsOrderByWithRelationInput = {
    version?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    execution_time?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type doctrine_migration_versionsWhereUniqueInput = Prisma.AtLeast<{
    version?: string;
    AND?: Prisma.doctrine_migration_versionsWhereInput | Prisma.doctrine_migration_versionsWhereInput[];
    OR?: Prisma.doctrine_migration_versionsWhereInput[];
    NOT?: Prisma.doctrine_migration_versionsWhereInput | Prisma.doctrine_migration_versionsWhereInput[];
    executed_at?: Prisma.DateTimeNullableFilter<"doctrine_migration_versions"> | Date | string | null;
    execution_time?: Prisma.IntNullableFilter<"doctrine_migration_versions"> | number | null;
}, "version">;
export type doctrine_migration_versionsOrderByWithAggregationInput = {
    version?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    execution_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.doctrine_migration_versionsCountOrderByAggregateInput;
    _avg?: Prisma.doctrine_migration_versionsAvgOrderByAggregateInput;
    _max?: Prisma.doctrine_migration_versionsMaxOrderByAggregateInput;
    _min?: Prisma.doctrine_migration_versionsMinOrderByAggregateInput;
    _sum?: Prisma.doctrine_migration_versionsSumOrderByAggregateInput;
};
export type doctrine_migration_versionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.doctrine_migration_versionsScalarWhereWithAggregatesInput | Prisma.doctrine_migration_versionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.doctrine_migration_versionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.doctrine_migration_versionsScalarWhereWithAggregatesInput | Prisma.doctrine_migration_versionsScalarWhereWithAggregatesInput[];
    version?: Prisma.StringWithAggregatesFilter<"doctrine_migration_versions"> | string;
    executed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"doctrine_migration_versions"> | Date | string | null;
    execution_time?: Prisma.IntNullableWithAggregatesFilter<"doctrine_migration_versions"> | number | null;
};
export type doctrine_migration_versionsCreateInput = {
    version: string;
    executed_at?: Date | string | null;
    execution_time?: number | null;
};
export type doctrine_migration_versionsUncheckedCreateInput = {
    version: string;
    executed_at?: Date | string | null;
    execution_time?: number | null;
};
export type doctrine_migration_versionsUpdateInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    executed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type doctrine_migration_versionsUncheckedUpdateInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    executed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type doctrine_migration_versionsCreateManyInput = {
    version: string;
    executed_at?: Date | string | null;
    execution_time?: number | null;
};
export type doctrine_migration_versionsUpdateManyMutationInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    executed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type doctrine_migration_versionsUncheckedUpdateManyInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    executed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type doctrine_migration_versionsCountOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
};
export type doctrine_migration_versionsAvgOrderByAggregateInput = {
    execution_time?: Prisma.SortOrder;
};
export type doctrine_migration_versionsMaxOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
};
export type doctrine_migration_versionsMinOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
};
export type doctrine_migration_versionsSumOrderByAggregateInput = {
    execution_time?: Prisma.SortOrder;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type doctrine_migration_versionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
    executed_at?: boolean;
    execution_time?: boolean;
}, ExtArgs["result"]["doctrine_migration_versions"]>;
export type doctrine_migration_versionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
    executed_at?: boolean;
    execution_time?: boolean;
}, ExtArgs["result"]["doctrine_migration_versions"]>;
export type doctrine_migration_versionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
    executed_at?: boolean;
    execution_time?: boolean;
}, ExtArgs["result"]["doctrine_migration_versions"]>;
export type doctrine_migration_versionsSelectScalar = {
    version?: boolean;
    executed_at?: boolean;
    execution_time?: boolean;
};
export type doctrine_migration_versionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"version" | "executed_at" | "execution_time", ExtArgs["result"]["doctrine_migration_versions"]>;
export type $doctrine_migration_versionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "doctrine_migration_versions";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        version: string;
        executed_at: Date | null;
        execution_time: number | null;
    }, ExtArgs["result"]["doctrine_migration_versions"]>;
    composites: {};
};
export type doctrine_migration_versionsGetPayload<S extends boolean | null | undefined | doctrine_migration_versionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload, S>;
export type doctrine_migration_versionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<doctrine_migration_versionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Doctrine_migration_versionsCountAggregateInputType | true;
};
export interface doctrine_migration_versionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['doctrine_migration_versions'];
        meta: {
            name: 'doctrine_migration_versions';
        };
    };
    findUnique<T extends doctrine_migration_versionsFindUniqueArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends doctrine_migration_versionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends doctrine_migration_versionsFindFirstArgs>(args?: Prisma.SelectSubset<T, doctrine_migration_versionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends doctrine_migration_versionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, doctrine_migration_versionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends doctrine_migration_versionsFindManyArgs>(args?: Prisma.SelectSubset<T, doctrine_migration_versionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends doctrine_migration_versionsCreateArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsCreateArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends doctrine_migration_versionsCreateManyArgs>(args?: Prisma.SelectSubset<T, doctrine_migration_versionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends doctrine_migration_versionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, doctrine_migration_versionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends doctrine_migration_versionsDeleteArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsDeleteArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends doctrine_migration_versionsUpdateArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsUpdateArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends doctrine_migration_versionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, doctrine_migration_versionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends doctrine_migration_versionsUpdateManyArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends doctrine_migration_versionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends doctrine_migration_versionsUpsertArgs>(args: Prisma.SelectSubset<T, doctrine_migration_versionsUpsertArgs<ExtArgs>>): Prisma.Prisma__doctrine_migration_versionsClient<runtime.Types.Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends doctrine_migration_versionsCountArgs>(args?: Prisma.Subset<T, doctrine_migration_versionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Doctrine_migration_versionsCountAggregateOutputType> : number>;
    aggregate<T extends Doctrine_migration_versionsAggregateArgs>(args: Prisma.Subset<T, Doctrine_migration_versionsAggregateArgs>): Prisma.PrismaPromise<GetDoctrine_migration_versionsAggregateType<T>>;
    groupBy<T extends doctrine_migration_versionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: doctrine_migration_versionsGroupByArgs['orderBy'];
    } : {
        orderBy?: doctrine_migration_versionsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, doctrine_migration_versionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctrine_migration_versionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: doctrine_migration_versionsFieldRefs;
}
export interface Prisma__doctrine_migration_versionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface doctrine_migration_versionsFieldRefs {
    readonly version: Prisma.FieldRef<"doctrine_migration_versions", 'String'>;
    readonly executed_at: Prisma.FieldRef<"doctrine_migration_versions", 'DateTime'>;
    readonly execution_time: Prisma.FieldRef<"doctrine_migration_versions", 'Int'>;
}
export type doctrine_migration_versionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    where: Prisma.doctrine_migration_versionsWhereUniqueInput;
};
export type doctrine_migration_versionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    where: Prisma.doctrine_migration_versionsWhereUniqueInput;
};
export type doctrine_migration_versionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    where?: Prisma.doctrine_migration_versionsWhereInput;
    orderBy?: Prisma.doctrine_migration_versionsOrderByWithRelationInput | Prisma.doctrine_migration_versionsOrderByWithRelationInput[];
    cursor?: Prisma.doctrine_migration_versionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Doctrine_migration_versionsScalarFieldEnum | Prisma.Doctrine_migration_versionsScalarFieldEnum[];
};
export type doctrine_migration_versionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    where?: Prisma.doctrine_migration_versionsWhereInput;
    orderBy?: Prisma.doctrine_migration_versionsOrderByWithRelationInput | Prisma.doctrine_migration_versionsOrderByWithRelationInput[];
    cursor?: Prisma.doctrine_migration_versionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Doctrine_migration_versionsScalarFieldEnum | Prisma.Doctrine_migration_versionsScalarFieldEnum[];
};
export type doctrine_migration_versionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    where?: Prisma.doctrine_migration_versionsWhereInput;
    orderBy?: Prisma.doctrine_migration_versionsOrderByWithRelationInput | Prisma.doctrine_migration_versionsOrderByWithRelationInput[];
    cursor?: Prisma.doctrine_migration_versionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Doctrine_migration_versionsScalarFieldEnum | Prisma.Doctrine_migration_versionsScalarFieldEnum[];
};
export type doctrine_migration_versionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.doctrine_migration_versionsCreateInput, Prisma.doctrine_migration_versionsUncheckedCreateInput>;
};
export type doctrine_migration_versionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.doctrine_migration_versionsCreateManyInput | Prisma.doctrine_migration_versionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type doctrine_migration_versionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    data: Prisma.doctrine_migration_versionsCreateManyInput | Prisma.doctrine_migration_versionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type doctrine_migration_versionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.doctrine_migration_versionsUpdateInput, Prisma.doctrine_migration_versionsUncheckedUpdateInput>;
    where: Prisma.doctrine_migration_versionsWhereUniqueInput;
};
export type doctrine_migration_versionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.doctrine_migration_versionsUpdateManyMutationInput, Prisma.doctrine_migration_versionsUncheckedUpdateManyInput>;
    where?: Prisma.doctrine_migration_versionsWhereInput;
    limit?: number;
};
export type doctrine_migration_versionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.doctrine_migration_versionsUpdateManyMutationInput, Prisma.doctrine_migration_versionsUncheckedUpdateManyInput>;
    where?: Prisma.doctrine_migration_versionsWhereInput;
    limit?: number;
};
export type doctrine_migration_versionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    where: Prisma.doctrine_migration_versionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.doctrine_migration_versionsCreateInput, Prisma.doctrine_migration_versionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.doctrine_migration_versionsUpdateInput, Prisma.doctrine_migration_versionsUncheckedUpdateInput>;
};
export type doctrine_migration_versionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
    where: Prisma.doctrine_migration_versionsWhereUniqueInput;
};
export type doctrine_migration_versionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.doctrine_migration_versionsWhereInput;
    limit?: number;
};
export type doctrine_migration_versionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctrine_migration_versionsSelect<ExtArgs> | null;
    omit?: Prisma.doctrine_migration_versionsOmit<ExtArgs> | null;
};
export {};
