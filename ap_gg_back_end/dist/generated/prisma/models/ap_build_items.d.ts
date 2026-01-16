import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ap_build_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$ap_build_itemsPayload>;
export type AggregateAp_build_items = {
    _count: Ap_build_itemsCountAggregateOutputType | null;
    _avg: Ap_build_itemsAvgAggregateOutputType | null;
    _sum: Ap_build_itemsSumAggregateOutputType | null;
    _min: Ap_build_itemsMinAggregateOutputType | null;
    _max: Ap_build_itemsMaxAggregateOutputType | null;
};
export type Ap_build_itemsAvgAggregateOutputType = {
    ap_build_id: number | null;
    item_id: number | null;
};
export type Ap_build_itemsSumAggregateOutputType = {
    ap_build_id: number | null;
    item_id: number | null;
};
export type Ap_build_itemsMinAggregateOutputType = {
    ap_build_id: number | null;
    item_id: number | null;
};
export type Ap_build_itemsMaxAggregateOutputType = {
    ap_build_id: number | null;
    item_id: number | null;
};
export type Ap_build_itemsCountAggregateOutputType = {
    ap_build_id: number;
    item_id: number;
    _all: number;
};
export type Ap_build_itemsAvgAggregateInputType = {
    ap_build_id?: true;
    item_id?: true;
};
export type Ap_build_itemsSumAggregateInputType = {
    ap_build_id?: true;
    item_id?: true;
};
export type Ap_build_itemsMinAggregateInputType = {
    ap_build_id?: true;
    item_id?: true;
};
export type Ap_build_itemsMaxAggregateInputType = {
    ap_build_id?: true;
    item_id?: true;
};
export type Ap_build_itemsCountAggregateInputType = {
    ap_build_id?: true;
    item_id?: true;
    _all?: true;
};
export type Ap_build_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_build_itemsWhereInput;
    orderBy?: Prisma.ap_build_itemsOrderByWithRelationInput | Prisma.ap_build_itemsOrderByWithRelationInput[];
    cursor?: Prisma.ap_build_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Ap_build_itemsCountAggregateInputType;
    _avg?: Ap_build_itemsAvgAggregateInputType;
    _sum?: Ap_build_itemsSumAggregateInputType;
    _min?: Ap_build_itemsMinAggregateInputType;
    _max?: Ap_build_itemsMaxAggregateInputType;
};
export type GetAp_build_itemsAggregateType<T extends Ap_build_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateAp_build_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAp_build_items[P]> : Prisma.GetScalarType<T[P], AggregateAp_build_items[P]>;
};
export type ap_build_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_build_itemsWhereInput;
    orderBy?: Prisma.ap_build_itemsOrderByWithAggregationInput | Prisma.ap_build_itemsOrderByWithAggregationInput[];
    by: Prisma.Ap_build_itemsScalarFieldEnum[] | Prisma.Ap_build_itemsScalarFieldEnum;
    having?: Prisma.ap_build_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ap_build_itemsCountAggregateInputType | true;
    _avg?: Ap_build_itemsAvgAggregateInputType;
    _sum?: Ap_build_itemsSumAggregateInputType;
    _min?: Ap_build_itemsMinAggregateInputType;
    _max?: Ap_build_itemsMaxAggregateInputType;
};
export type Ap_build_itemsGroupByOutputType = {
    ap_build_id: number;
    item_id: number;
    _count: Ap_build_itemsCountAggregateOutputType | null;
    _avg: Ap_build_itemsAvgAggregateOutputType | null;
    _sum: Ap_build_itemsSumAggregateOutputType | null;
    _min: Ap_build_itemsMinAggregateOutputType | null;
    _max: Ap_build_itemsMaxAggregateOutputType | null;
};
type GetAp_build_itemsGroupByPayload<T extends ap_build_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ap_build_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ap_build_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ap_build_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ap_build_itemsGroupByOutputType[P]>;
}>>;
export type ap_build_itemsWhereInput = {
    AND?: Prisma.ap_build_itemsWhereInput | Prisma.ap_build_itemsWhereInput[];
    OR?: Prisma.ap_build_itemsWhereInput[];
    NOT?: Prisma.ap_build_itemsWhereInput | Prisma.ap_build_itemsWhereInput[];
    ap_build_id?: Prisma.IntFilter<"ap_build_items"> | number;
    item_id?: Prisma.IntFilter<"ap_build_items"> | number;
    ap_builds?: Prisma.XOR<Prisma.Ap_buildsScalarRelationFilter, Prisma.ap_buildsWhereInput>;
    items?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.itemsWhereInput>;
};
export type ap_build_itemsOrderByWithRelationInput = {
    ap_build_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    ap_builds?: Prisma.ap_buildsOrderByWithRelationInput;
    items?: Prisma.itemsOrderByWithRelationInput;
};
export type ap_build_itemsWhereUniqueInput = Prisma.AtLeast<{
    ap_build_id_item_id?: Prisma.ap_build_itemsAp_build_idItem_idCompoundUniqueInput;
    AND?: Prisma.ap_build_itemsWhereInput | Prisma.ap_build_itemsWhereInput[];
    OR?: Prisma.ap_build_itemsWhereInput[];
    NOT?: Prisma.ap_build_itemsWhereInput | Prisma.ap_build_itemsWhereInput[];
    ap_build_id?: Prisma.IntFilter<"ap_build_items"> | number;
    item_id?: Prisma.IntFilter<"ap_build_items"> | number;
    ap_builds?: Prisma.XOR<Prisma.Ap_buildsScalarRelationFilter, Prisma.ap_buildsWhereInput>;
    items?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.itemsWhereInput>;
}, "ap_build_id_item_id">;
export type ap_build_itemsOrderByWithAggregationInput = {
    ap_build_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    _count?: Prisma.ap_build_itemsCountOrderByAggregateInput;
    _avg?: Prisma.ap_build_itemsAvgOrderByAggregateInput;
    _max?: Prisma.ap_build_itemsMaxOrderByAggregateInput;
    _min?: Prisma.ap_build_itemsMinOrderByAggregateInput;
    _sum?: Prisma.ap_build_itemsSumOrderByAggregateInput;
};
export type ap_build_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ap_build_itemsScalarWhereWithAggregatesInput | Prisma.ap_build_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ap_build_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ap_build_itemsScalarWhereWithAggregatesInput | Prisma.ap_build_itemsScalarWhereWithAggregatesInput[];
    ap_build_id?: Prisma.IntWithAggregatesFilter<"ap_build_items"> | number;
    item_id?: Prisma.IntWithAggregatesFilter<"ap_build_items"> | number;
};
export type ap_build_itemsCreateInput = {
    ap_builds: Prisma.ap_buildsCreateNestedOneWithoutAp_build_itemsInput;
    items: Prisma.itemsCreateNestedOneWithoutAp_build_itemsInput;
};
export type ap_build_itemsUncheckedCreateInput = {
    ap_build_id: number;
    item_id: number;
};
export type ap_build_itemsUpdateInput = {
    ap_builds?: Prisma.ap_buildsUpdateOneRequiredWithoutAp_build_itemsNestedInput;
    items?: Prisma.itemsUpdateOneRequiredWithoutAp_build_itemsNestedInput;
};
export type ap_build_itemsUncheckedUpdateInput = {
    ap_build_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ap_build_itemsCreateManyInput = {
    ap_build_id: number;
    item_id: number;
};
export type ap_build_itemsUpdateManyMutationInput = {};
export type ap_build_itemsUncheckedUpdateManyInput = {
    ap_build_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ap_build_itemsAp_build_idItem_idCompoundUniqueInput = {
    ap_build_id: number;
    item_id: number;
};
export type ap_build_itemsCountOrderByAggregateInput = {
    ap_build_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
};
export type ap_build_itemsAvgOrderByAggregateInput = {
    ap_build_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
};
export type ap_build_itemsMaxOrderByAggregateInput = {
    ap_build_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
};
export type ap_build_itemsMinOrderByAggregateInput = {
    ap_build_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
};
export type ap_build_itemsSumOrderByAggregateInput = {
    ap_build_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
};
export type Ap_build_itemsListRelationFilter = {
    every?: Prisma.ap_build_itemsWhereInput;
    some?: Prisma.ap_build_itemsWhereInput;
    none?: Prisma.ap_build_itemsWhereInput;
};
export type ap_build_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ap_build_itemsCreateNestedManyWithoutAp_buildsInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput> | Prisma.ap_build_itemsCreateWithoutAp_buildsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput | Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyAp_buildsInputEnvelope;
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
};
export type ap_build_itemsUncheckedCreateNestedManyWithoutAp_buildsInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput> | Prisma.ap_build_itemsCreateWithoutAp_buildsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput | Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyAp_buildsInputEnvelope;
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
};
export type ap_build_itemsUpdateManyWithoutAp_buildsNestedInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput> | Prisma.ap_build_itemsCreateWithoutAp_buildsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput | Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput[];
    upsert?: Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutAp_buildsInput | Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutAp_buildsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyAp_buildsInputEnvelope;
    set?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    disconnect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    delete?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    update?: Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutAp_buildsInput | Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutAp_buildsInput[];
    updateMany?: Prisma.ap_build_itemsUpdateManyWithWhereWithoutAp_buildsInput | Prisma.ap_build_itemsUpdateManyWithWhereWithoutAp_buildsInput[];
    deleteMany?: Prisma.ap_build_itemsScalarWhereInput | Prisma.ap_build_itemsScalarWhereInput[];
};
export type ap_build_itemsUncheckedUpdateManyWithoutAp_buildsNestedInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput> | Prisma.ap_build_itemsCreateWithoutAp_buildsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput | Prisma.ap_build_itemsCreateOrConnectWithoutAp_buildsInput[];
    upsert?: Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutAp_buildsInput | Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutAp_buildsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyAp_buildsInputEnvelope;
    set?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    disconnect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    delete?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    update?: Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutAp_buildsInput | Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutAp_buildsInput[];
    updateMany?: Prisma.ap_build_itemsUpdateManyWithWhereWithoutAp_buildsInput | Prisma.ap_build_itemsUpdateManyWithWhereWithoutAp_buildsInput[];
    deleteMany?: Prisma.ap_build_itemsScalarWhereInput | Prisma.ap_build_itemsScalarWhereInput[];
};
export type ap_build_itemsCreateNestedManyWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutItemsInput, Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput> | Prisma.ap_build_itemsCreateWithoutItemsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput | Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyItemsInputEnvelope;
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
};
export type ap_build_itemsUncheckedCreateNestedManyWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutItemsInput, Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput> | Prisma.ap_build_itemsCreateWithoutItemsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput | Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyItemsInputEnvelope;
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
};
export type ap_build_itemsUpdateManyWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutItemsInput, Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput> | Prisma.ap_build_itemsCreateWithoutItemsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput | Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput[];
    upsert?: Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutItemsInput | Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutItemsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyItemsInputEnvelope;
    set?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    disconnect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    delete?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    update?: Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutItemsInput | Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutItemsInput[];
    updateMany?: Prisma.ap_build_itemsUpdateManyWithWhereWithoutItemsInput | Prisma.ap_build_itemsUpdateManyWithWhereWithoutItemsInput[];
    deleteMany?: Prisma.ap_build_itemsScalarWhereInput | Prisma.ap_build_itemsScalarWhereInput[];
};
export type ap_build_itemsUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutItemsInput, Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput> | Prisma.ap_build_itemsCreateWithoutItemsInput[] | Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput[];
    connectOrCreate?: Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput | Prisma.ap_build_itemsCreateOrConnectWithoutItemsInput[];
    upsert?: Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutItemsInput | Prisma.ap_build_itemsUpsertWithWhereUniqueWithoutItemsInput[];
    createMany?: Prisma.ap_build_itemsCreateManyItemsInputEnvelope;
    set?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    disconnect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    delete?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    connect?: Prisma.ap_build_itemsWhereUniqueInput | Prisma.ap_build_itemsWhereUniqueInput[];
    update?: Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutItemsInput | Prisma.ap_build_itemsUpdateWithWhereUniqueWithoutItemsInput[];
    updateMany?: Prisma.ap_build_itemsUpdateManyWithWhereWithoutItemsInput | Prisma.ap_build_itemsUpdateManyWithWhereWithoutItemsInput[];
    deleteMany?: Prisma.ap_build_itemsScalarWhereInput | Prisma.ap_build_itemsScalarWhereInput[];
};
export type ap_build_itemsCreateWithoutAp_buildsInput = {
    items: Prisma.itemsCreateNestedOneWithoutAp_build_itemsInput;
};
export type ap_build_itemsUncheckedCreateWithoutAp_buildsInput = {
    item_id: number;
};
export type ap_build_itemsCreateOrConnectWithoutAp_buildsInput = {
    where: Prisma.ap_build_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput>;
};
export type ap_build_itemsCreateManyAp_buildsInputEnvelope = {
    data: Prisma.ap_build_itemsCreateManyAp_buildsInput | Prisma.ap_build_itemsCreateManyAp_buildsInput[];
    skipDuplicates?: boolean;
};
export type ap_build_itemsUpsertWithWhereUniqueWithoutAp_buildsInput = {
    where: Prisma.ap_build_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ap_build_itemsUpdateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedUpdateWithoutAp_buildsInput>;
    create: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedCreateWithoutAp_buildsInput>;
};
export type ap_build_itemsUpdateWithWhereUniqueWithoutAp_buildsInput = {
    where: Prisma.ap_build_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ap_build_itemsUpdateWithoutAp_buildsInput, Prisma.ap_build_itemsUncheckedUpdateWithoutAp_buildsInput>;
};
export type ap_build_itemsUpdateManyWithWhereWithoutAp_buildsInput = {
    where: Prisma.ap_build_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.ap_build_itemsUpdateManyMutationInput, Prisma.ap_build_itemsUncheckedUpdateManyWithoutAp_buildsInput>;
};
export type ap_build_itemsScalarWhereInput = {
    AND?: Prisma.ap_build_itemsScalarWhereInput | Prisma.ap_build_itemsScalarWhereInput[];
    OR?: Prisma.ap_build_itemsScalarWhereInput[];
    NOT?: Prisma.ap_build_itemsScalarWhereInput | Prisma.ap_build_itemsScalarWhereInput[];
    ap_build_id?: Prisma.IntFilter<"ap_build_items"> | number;
    item_id?: Prisma.IntFilter<"ap_build_items"> | number;
};
export type ap_build_itemsCreateWithoutItemsInput = {
    ap_builds: Prisma.ap_buildsCreateNestedOneWithoutAp_build_itemsInput;
};
export type ap_build_itemsUncheckedCreateWithoutItemsInput = {
    ap_build_id: number;
};
export type ap_build_itemsCreateOrConnectWithoutItemsInput = {
    where: Prisma.ap_build_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutItemsInput, Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput>;
};
export type ap_build_itemsCreateManyItemsInputEnvelope = {
    data: Prisma.ap_build_itemsCreateManyItemsInput | Prisma.ap_build_itemsCreateManyItemsInput[];
    skipDuplicates?: boolean;
};
export type ap_build_itemsUpsertWithWhereUniqueWithoutItemsInput = {
    where: Prisma.ap_build_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ap_build_itemsUpdateWithoutItemsInput, Prisma.ap_build_itemsUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ap_build_itemsCreateWithoutItemsInput, Prisma.ap_build_itemsUncheckedCreateWithoutItemsInput>;
};
export type ap_build_itemsUpdateWithWhereUniqueWithoutItemsInput = {
    where: Prisma.ap_build_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ap_build_itemsUpdateWithoutItemsInput, Prisma.ap_build_itemsUncheckedUpdateWithoutItemsInput>;
};
export type ap_build_itemsUpdateManyWithWhereWithoutItemsInput = {
    where: Prisma.ap_build_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.ap_build_itemsUpdateManyMutationInput, Prisma.ap_build_itemsUncheckedUpdateManyWithoutItemsInput>;
};
export type ap_build_itemsCreateManyAp_buildsInput = {
    item_id: number;
};
export type ap_build_itemsUpdateWithoutAp_buildsInput = {
    items?: Prisma.itemsUpdateOneRequiredWithoutAp_build_itemsNestedInput;
};
export type ap_build_itemsUncheckedUpdateWithoutAp_buildsInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ap_build_itemsUncheckedUpdateManyWithoutAp_buildsInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ap_build_itemsCreateManyItemsInput = {
    ap_build_id: number;
};
export type ap_build_itemsUpdateWithoutItemsInput = {
    ap_builds?: Prisma.ap_buildsUpdateOneRequiredWithoutAp_build_itemsNestedInput;
};
export type ap_build_itemsUncheckedUpdateWithoutItemsInput = {
    ap_build_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ap_build_itemsUncheckedUpdateManyWithoutItemsInput = {
    ap_build_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ap_build_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ap_build_id?: boolean;
    item_id?: boolean;
    ap_builds?: boolean | Prisma.ap_buildsDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ap_build_items"]>;
export type ap_build_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ap_build_id?: boolean;
    item_id?: boolean;
    ap_builds?: boolean | Prisma.ap_buildsDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ap_build_items"]>;
export type ap_build_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ap_build_id?: boolean;
    item_id?: boolean;
    ap_builds?: boolean | Prisma.ap_buildsDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ap_build_items"]>;
export type ap_build_itemsSelectScalar = {
    ap_build_id?: boolean;
    item_id?: boolean;
};
export type ap_build_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ap_build_id" | "item_id", ExtArgs["result"]["ap_build_items"]>;
export type ap_build_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_builds?: boolean | Prisma.ap_buildsDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.itemsDefaultArgs<ExtArgs>;
};
export type ap_build_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_builds?: boolean | Prisma.ap_buildsDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.itemsDefaultArgs<ExtArgs>;
};
export type ap_build_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_builds?: boolean | Prisma.ap_buildsDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.itemsDefaultArgs<ExtArgs>;
};
export type $ap_build_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ap_build_items";
    objects: {
        ap_builds: Prisma.$ap_buildsPayload<ExtArgs>;
        items: Prisma.$itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ap_build_id: number;
        item_id: number;
    }, ExtArgs["result"]["ap_build_items"]>;
    composites: {};
};
export type ap_build_itemsGetPayload<S extends boolean | null | undefined | ap_build_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload, S>;
export type ap_build_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ap_build_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Ap_build_itemsCountAggregateInputType | true;
};
export interface ap_build_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ap_build_items'];
        meta: {
            name: 'ap_build_items';
        };
    };
    findUnique<T extends ap_build_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, ap_build_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ap_build_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ap_build_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ap_build_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, ap_build_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ap_build_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ap_build_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ap_build_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, ap_build_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ap_build_itemsCreateArgs>(args: Prisma.SelectSubset<T, ap_build_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ap_build_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, ap_build_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ap_build_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ap_build_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ap_build_itemsDeleteArgs>(args: Prisma.SelectSubset<T, ap_build_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ap_build_itemsUpdateArgs>(args: Prisma.SelectSubset<T, ap_build_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ap_build_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ap_build_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ap_build_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, ap_build_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ap_build_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ap_build_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ap_build_itemsUpsertArgs>(args: Prisma.SelectSubset<T, ap_build_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__ap_build_itemsClient<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ap_build_itemsCountArgs>(args?: Prisma.Subset<T, ap_build_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ap_build_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Ap_build_itemsAggregateArgs>(args: Prisma.Subset<T, Ap_build_itemsAggregateArgs>): Prisma.PrismaPromise<GetAp_build_itemsAggregateType<T>>;
    groupBy<T extends ap_build_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ap_build_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: ap_build_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ap_build_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAp_build_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ap_build_itemsFieldRefs;
}
export interface Prisma__ap_build_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ap_builds<T extends Prisma.ap_buildsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ap_buildsDefaultArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ap_build_itemsFieldRefs {
    readonly ap_build_id: Prisma.FieldRef<"ap_build_items", 'Int'>;
    readonly item_id: Prisma.FieldRef<"ap_build_items", 'Int'>;
}
export type ap_build_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    where: Prisma.ap_build_itemsWhereUniqueInput;
};
export type ap_build_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    where: Prisma.ap_build_itemsWhereUniqueInput;
};
export type ap_build_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    where?: Prisma.ap_build_itemsWhereInput;
    orderBy?: Prisma.ap_build_itemsOrderByWithRelationInput | Prisma.ap_build_itemsOrderByWithRelationInput[];
    cursor?: Prisma.ap_build_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ap_build_itemsScalarFieldEnum | Prisma.Ap_build_itemsScalarFieldEnum[];
};
export type ap_build_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    where?: Prisma.ap_build_itemsWhereInput;
    orderBy?: Prisma.ap_build_itemsOrderByWithRelationInput | Prisma.ap_build_itemsOrderByWithRelationInput[];
    cursor?: Prisma.ap_build_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ap_build_itemsScalarFieldEnum | Prisma.Ap_build_itemsScalarFieldEnum[];
};
export type ap_build_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    where?: Prisma.ap_build_itemsWhereInput;
    orderBy?: Prisma.ap_build_itemsOrderByWithRelationInput | Prisma.ap_build_itemsOrderByWithRelationInput[];
    cursor?: Prisma.ap_build_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ap_build_itemsScalarFieldEnum | Prisma.Ap_build_itemsScalarFieldEnum[];
};
export type ap_build_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ap_build_itemsCreateInput, Prisma.ap_build_itemsUncheckedCreateInput>;
};
export type ap_build_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ap_build_itemsCreateManyInput | Prisma.ap_build_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ap_build_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    data: Prisma.ap_build_itemsCreateManyInput | Prisma.ap_build_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ap_build_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ap_build_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ap_build_itemsUpdateInput, Prisma.ap_build_itemsUncheckedUpdateInput>;
    where: Prisma.ap_build_itemsWhereUniqueInput;
};
export type ap_build_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ap_build_itemsUpdateManyMutationInput, Prisma.ap_build_itemsUncheckedUpdateManyInput>;
    where?: Prisma.ap_build_itemsWhereInput;
    limit?: number;
};
export type ap_build_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ap_build_itemsUpdateManyMutationInput, Prisma.ap_build_itemsUncheckedUpdateManyInput>;
    where?: Prisma.ap_build_itemsWhereInput;
    limit?: number;
    include?: Prisma.ap_build_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ap_build_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    where: Prisma.ap_build_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ap_build_itemsCreateInput, Prisma.ap_build_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ap_build_itemsUpdateInput, Prisma.ap_build_itemsUncheckedUpdateInput>;
};
export type ap_build_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
    where: Prisma.ap_build_itemsWhereUniqueInput;
};
export type ap_build_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_build_itemsWhereInput;
    limit?: number;
};
export type ap_build_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_build_itemsSelect<ExtArgs> | null;
    omit?: Prisma.ap_build_itemsOmit<ExtArgs> | null;
    include?: Prisma.ap_build_itemsInclude<ExtArgs> | null;
};
export {};
