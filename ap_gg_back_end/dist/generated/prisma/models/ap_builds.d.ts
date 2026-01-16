import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ap_buildsModel = runtime.Types.Result.DefaultSelection<Prisma.$ap_buildsPayload>;
export type AggregateAp_builds = {
    _count: Ap_buildsCountAggregateOutputType | null;
    _avg: Ap_buildsAvgAggregateOutputType | null;
    _sum: Ap_buildsSumAggregateOutputType | null;
    _min: Ap_buildsMinAggregateOutputType | null;
    _max: Ap_buildsMaxAggregateOutputType | null;
};
export type Ap_buildsAvgAggregateOutputType = {
    id: number | null;
    champion_id: number | null;
    win_rate: number | null;
    pick_count: number | null;
    priority: number | null;
};
export type Ap_buildsSumAggregateOutputType = {
    id: number | null;
    champion_id: number | null;
    win_rate: number | null;
    pick_count: number | null;
    priority: number | null;
};
export type Ap_buildsMinAggregateOutputType = {
    id: number | null;
    champion_id: number | null;
    name: string | null;
    description: string | null;
    win_rate: number | null;
    pick_count: number | null;
    difficulty: string | null;
    tips: string | null;
    priority: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Ap_buildsMaxAggregateOutputType = {
    id: number | null;
    champion_id: number | null;
    name: string | null;
    description: string | null;
    win_rate: number | null;
    pick_count: number | null;
    difficulty: string | null;
    tips: string | null;
    priority: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Ap_buildsCountAggregateOutputType = {
    id: number;
    champion_id: number;
    name: number;
    description: number;
    win_rate: number;
    pick_count: number;
    difficulty: number;
    tips: number;
    priority: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Ap_buildsAvgAggregateInputType = {
    id?: true;
    champion_id?: true;
    win_rate?: true;
    pick_count?: true;
    priority?: true;
};
export type Ap_buildsSumAggregateInputType = {
    id?: true;
    champion_id?: true;
    win_rate?: true;
    pick_count?: true;
    priority?: true;
};
export type Ap_buildsMinAggregateInputType = {
    id?: true;
    champion_id?: true;
    name?: true;
    description?: true;
    win_rate?: true;
    pick_count?: true;
    difficulty?: true;
    tips?: true;
    priority?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Ap_buildsMaxAggregateInputType = {
    id?: true;
    champion_id?: true;
    name?: true;
    description?: true;
    win_rate?: true;
    pick_count?: true;
    difficulty?: true;
    tips?: true;
    priority?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Ap_buildsCountAggregateInputType = {
    id?: true;
    champion_id?: true;
    name?: true;
    description?: true;
    win_rate?: true;
    pick_count?: true;
    difficulty?: true;
    tips?: true;
    priority?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Ap_buildsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_buildsWhereInput;
    orderBy?: Prisma.ap_buildsOrderByWithRelationInput | Prisma.ap_buildsOrderByWithRelationInput[];
    cursor?: Prisma.ap_buildsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Ap_buildsCountAggregateInputType;
    _avg?: Ap_buildsAvgAggregateInputType;
    _sum?: Ap_buildsSumAggregateInputType;
    _min?: Ap_buildsMinAggregateInputType;
    _max?: Ap_buildsMaxAggregateInputType;
};
export type GetAp_buildsAggregateType<T extends Ap_buildsAggregateArgs> = {
    [P in keyof T & keyof AggregateAp_builds]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAp_builds[P]> : Prisma.GetScalarType<T[P], AggregateAp_builds[P]>;
};
export type ap_buildsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_buildsWhereInput;
    orderBy?: Prisma.ap_buildsOrderByWithAggregationInput | Prisma.ap_buildsOrderByWithAggregationInput[];
    by: Prisma.Ap_buildsScalarFieldEnum[] | Prisma.Ap_buildsScalarFieldEnum;
    having?: Prisma.ap_buildsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ap_buildsCountAggregateInputType | true;
    _avg?: Ap_buildsAvgAggregateInputType;
    _sum?: Ap_buildsSumAggregateInputType;
    _min?: Ap_buildsMinAggregateInputType;
    _max?: Ap_buildsMaxAggregateInputType;
};
export type Ap_buildsGroupByOutputType = {
    id: number;
    champion_id: number;
    name: string;
    description: string | null;
    win_rate: number | null;
    pick_count: number | null;
    difficulty: string | null;
    tips: string | null;
    priority: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Ap_buildsCountAggregateOutputType | null;
    _avg: Ap_buildsAvgAggregateOutputType | null;
    _sum: Ap_buildsSumAggregateOutputType | null;
    _min: Ap_buildsMinAggregateOutputType | null;
    _max: Ap_buildsMaxAggregateOutputType | null;
};
type GetAp_buildsGroupByPayload<T extends ap_buildsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ap_buildsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ap_buildsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ap_buildsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ap_buildsGroupByOutputType[P]>;
}>>;
export type ap_buildsWhereInput = {
    AND?: Prisma.ap_buildsWhereInput | Prisma.ap_buildsWhereInput[];
    OR?: Prisma.ap_buildsWhereInput[];
    NOT?: Prisma.ap_buildsWhereInput | Prisma.ap_buildsWhereInput[];
    id?: Prisma.IntFilter<"ap_builds"> | number;
    champion_id?: Prisma.IntFilter<"ap_builds"> | number;
    name?: Prisma.StringFilter<"ap_builds"> | string;
    description?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    win_rate?: Prisma.FloatNullableFilter<"ap_builds"> | number | null;
    pick_count?: Prisma.IntNullableFilter<"ap_builds"> | number | null;
    difficulty?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    tips?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    priority?: Prisma.IntFilter<"ap_builds"> | number;
    is_active?: Prisma.BoolFilter<"ap_builds"> | boolean;
    created_at?: Prisma.DateTimeFilter<"ap_builds"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ap_builds"> | Date | string;
    ap_build_items?: Prisma.Ap_build_itemsListRelationFilter;
    champions?: Prisma.XOR<Prisma.ChampionsScalarRelationFilter, Prisma.championsWhereInput>;
};
export type ap_buildsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    win_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    pick_count?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    tips?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    ap_build_items?: Prisma.ap_build_itemsOrderByRelationAggregateInput;
    champions?: Prisma.championsOrderByWithRelationInput;
};
export type ap_buildsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ap_buildsWhereInput | Prisma.ap_buildsWhereInput[];
    OR?: Prisma.ap_buildsWhereInput[];
    NOT?: Prisma.ap_buildsWhereInput | Prisma.ap_buildsWhereInput[];
    champion_id?: Prisma.IntFilter<"ap_builds"> | number;
    name?: Prisma.StringFilter<"ap_builds"> | string;
    description?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    win_rate?: Prisma.FloatNullableFilter<"ap_builds"> | number | null;
    pick_count?: Prisma.IntNullableFilter<"ap_builds"> | number | null;
    difficulty?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    tips?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    priority?: Prisma.IntFilter<"ap_builds"> | number;
    is_active?: Prisma.BoolFilter<"ap_builds"> | boolean;
    created_at?: Prisma.DateTimeFilter<"ap_builds"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ap_builds"> | Date | string;
    ap_build_items?: Prisma.Ap_build_itemsListRelationFilter;
    champions?: Prisma.XOR<Prisma.ChampionsScalarRelationFilter, Prisma.championsWhereInput>;
}, "id">;
export type ap_buildsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    win_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    pick_count?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    tips?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ap_buildsCountOrderByAggregateInput;
    _avg?: Prisma.ap_buildsAvgOrderByAggregateInput;
    _max?: Prisma.ap_buildsMaxOrderByAggregateInput;
    _min?: Prisma.ap_buildsMinOrderByAggregateInput;
    _sum?: Prisma.ap_buildsSumOrderByAggregateInput;
};
export type ap_buildsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ap_buildsScalarWhereWithAggregatesInput | Prisma.ap_buildsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ap_buildsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ap_buildsScalarWhereWithAggregatesInput | Prisma.ap_buildsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ap_builds"> | number;
    champion_id?: Prisma.IntWithAggregatesFilter<"ap_builds"> | number;
    name?: Prisma.StringWithAggregatesFilter<"ap_builds"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ap_builds"> | string | null;
    win_rate?: Prisma.FloatNullableWithAggregatesFilter<"ap_builds"> | number | null;
    pick_count?: Prisma.IntNullableWithAggregatesFilter<"ap_builds"> | number | null;
    difficulty?: Prisma.StringNullableWithAggregatesFilter<"ap_builds"> | string | null;
    tips?: Prisma.StringNullableWithAggregatesFilter<"ap_builds"> | string | null;
    priority?: Prisma.IntWithAggregatesFilter<"ap_builds"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"ap_builds"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ap_builds"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"ap_builds"> | Date | string;
};
export type ap_buildsCreateInput = {
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
    ap_build_items?: Prisma.ap_build_itemsCreateNestedManyWithoutAp_buildsInput;
    champions: Prisma.championsCreateNestedOneWithoutAp_buildsInput;
};
export type ap_buildsUncheckedCreateInput = {
    id?: number;
    champion_id: number;
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
    ap_build_items?: Prisma.ap_build_itemsUncheckedCreateNestedManyWithoutAp_buildsInput;
};
export type ap_buildsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_build_items?: Prisma.ap_build_itemsUpdateManyWithoutAp_buildsNestedInput;
    champions?: Prisma.championsUpdateOneRequiredWithoutAp_buildsNestedInput;
};
export type ap_buildsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_build_items?: Prisma.ap_build_itemsUncheckedUpdateManyWithoutAp_buildsNestedInput;
};
export type ap_buildsCreateManyInput = {
    id?: number;
    champion_id: number;
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
};
export type ap_buildsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ap_buildsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Ap_buildsScalarRelationFilter = {
    is?: Prisma.ap_buildsWhereInput;
    isNot?: Prisma.ap_buildsWhereInput;
};
export type ap_buildsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    pick_count?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    tips?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ap_buildsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    pick_count?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
};
export type ap_buildsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    pick_count?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    tips?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ap_buildsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    pick_count?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    tips?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ap_buildsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    pick_count?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
};
export type Ap_buildsListRelationFilter = {
    every?: Prisma.ap_buildsWhereInput;
    some?: Prisma.ap_buildsWhereInput;
    none?: Prisma.ap_buildsWhereInput;
};
export type ap_buildsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ap_buildsCreateNestedOneWithoutAp_build_itemsInput = {
    create?: Prisma.XOR<Prisma.ap_buildsCreateWithoutAp_build_itemsInput, Prisma.ap_buildsUncheckedCreateWithoutAp_build_itemsInput>;
    connectOrCreate?: Prisma.ap_buildsCreateOrConnectWithoutAp_build_itemsInput;
    connect?: Prisma.ap_buildsWhereUniqueInput;
};
export type ap_buildsUpdateOneRequiredWithoutAp_build_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.ap_buildsCreateWithoutAp_build_itemsInput, Prisma.ap_buildsUncheckedCreateWithoutAp_build_itemsInput>;
    connectOrCreate?: Prisma.ap_buildsCreateOrConnectWithoutAp_build_itemsInput;
    upsert?: Prisma.ap_buildsUpsertWithoutAp_build_itemsInput;
    connect?: Prisma.ap_buildsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ap_buildsUpdateToOneWithWhereWithoutAp_build_itemsInput, Prisma.ap_buildsUpdateWithoutAp_build_itemsInput>, Prisma.ap_buildsUncheckedUpdateWithoutAp_build_itemsInput>;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ap_buildsCreateNestedManyWithoutChampionsInput = {
    create?: Prisma.XOR<Prisma.ap_buildsCreateWithoutChampionsInput, Prisma.ap_buildsUncheckedCreateWithoutChampionsInput> | Prisma.ap_buildsCreateWithoutChampionsInput[] | Prisma.ap_buildsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.ap_buildsCreateOrConnectWithoutChampionsInput | Prisma.ap_buildsCreateOrConnectWithoutChampionsInput[];
    createMany?: Prisma.ap_buildsCreateManyChampionsInputEnvelope;
    connect?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
};
export type ap_buildsUncheckedCreateNestedManyWithoutChampionsInput = {
    create?: Prisma.XOR<Prisma.ap_buildsCreateWithoutChampionsInput, Prisma.ap_buildsUncheckedCreateWithoutChampionsInput> | Prisma.ap_buildsCreateWithoutChampionsInput[] | Prisma.ap_buildsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.ap_buildsCreateOrConnectWithoutChampionsInput | Prisma.ap_buildsCreateOrConnectWithoutChampionsInput[];
    createMany?: Prisma.ap_buildsCreateManyChampionsInputEnvelope;
    connect?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
};
export type ap_buildsUpdateManyWithoutChampionsNestedInput = {
    create?: Prisma.XOR<Prisma.ap_buildsCreateWithoutChampionsInput, Prisma.ap_buildsUncheckedCreateWithoutChampionsInput> | Prisma.ap_buildsCreateWithoutChampionsInput[] | Prisma.ap_buildsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.ap_buildsCreateOrConnectWithoutChampionsInput | Prisma.ap_buildsCreateOrConnectWithoutChampionsInput[];
    upsert?: Prisma.ap_buildsUpsertWithWhereUniqueWithoutChampionsInput | Prisma.ap_buildsUpsertWithWhereUniqueWithoutChampionsInput[];
    createMany?: Prisma.ap_buildsCreateManyChampionsInputEnvelope;
    set?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    disconnect?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    delete?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    connect?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    update?: Prisma.ap_buildsUpdateWithWhereUniqueWithoutChampionsInput | Prisma.ap_buildsUpdateWithWhereUniqueWithoutChampionsInput[];
    updateMany?: Prisma.ap_buildsUpdateManyWithWhereWithoutChampionsInput | Prisma.ap_buildsUpdateManyWithWhereWithoutChampionsInput[];
    deleteMany?: Prisma.ap_buildsScalarWhereInput | Prisma.ap_buildsScalarWhereInput[];
};
export type ap_buildsUncheckedUpdateManyWithoutChampionsNestedInput = {
    create?: Prisma.XOR<Prisma.ap_buildsCreateWithoutChampionsInput, Prisma.ap_buildsUncheckedCreateWithoutChampionsInput> | Prisma.ap_buildsCreateWithoutChampionsInput[] | Prisma.ap_buildsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.ap_buildsCreateOrConnectWithoutChampionsInput | Prisma.ap_buildsCreateOrConnectWithoutChampionsInput[];
    upsert?: Prisma.ap_buildsUpsertWithWhereUniqueWithoutChampionsInput | Prisma.ap_buildsUpsertWithWhereUniqueWithoutChampionsInput[];
    createMany?: Prisma.ap_buildsCreateManyChampionsInputEnvelope;
    set?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    disconnect?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    delete?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    connect?: Prisma.ap_buildsWhereUniqueInput | Prisma.ap_buildsWhereUniqueInput[];
    update?: Prisma.ap_buildsUpdateWithWhereUniqueWithoutChampionsInput | Prisma.ap_buildsUpdateWithWhereUniqueWithoutChampionsInput[];
    updateMany?: Prisma.ap_buildsUpdateManyWithWhereWithoutChampionsInput | Prisma.ap_buildsUpdateManyWithWhereWithoutChampionsInput[];
    deleteMany?: Prisma.ap_buildsScalarWhereInput | Prisma.ap_buildsScalarWhereInput[];
};
export type ap_buildsCreateWithoutAp_build_itemsInput = {
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
    champions: Prisma.championsCreateNestedOneWithoutAp_buildsInput;
};
export type ap_buildsUncheckedCreateWithoutAp_build_itemsInput = {
    id?: number;
    champion_id: number;
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
};
export type ap_buildsCreateOrConnectWithoutAp_build_itemsInput = {
    where: Prisma.ap_buildsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ap_buildsCreateWithoutAp_build_itemsInput, Prisma.ap_buildsUncheckedCreateWithoutAp_build_itemsInput>;
};
export type ap_buildsUpsertWithoutAp_build_itemsInput = {
    update: Prisma.XOR<Prisma.ap_buildsUpdateWithoutAp_build_itemsInput, Prisma.ap_buildsUncheckedUpdateWithoutAp_build_itemsInput>;
    create: Prisma.XOR<Prisma.ap_buildsCreateWithoutAp_build_itemsInput, Prisma.ap_buildsUncheckedCreateWithoutAp_build_itemsInput>;
    where?: Prisma.ap_buildsWhereInput;
};
export type ap_buildsUpdateToOneWithWhereWithoutAp_build_itemsInput = {
    where?: Prisma.ap_buildsWhereInput;
    data: Prisma.XOR<Prisma.ap_buildsUpdateWithoutAp_build_itemsInput, Prisma.ap_buildsUncheckedUpdateWithoutAp_build_itemsInput>;
};
export type ap_buildsUpdateWithoutAp_build_itemsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    champions?: Prisma.championsUpdateOneRequiredWithoutAp_buildsNestedInput;
};
export type ap_buildsUncheckedUpdateWithoutAp_build_itemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ap_buildsCreateWithoutChampionsInput = {
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
    ap_build_items?: Prisma.ap_build_itemsCreateNestedManyWithoutAp_buildsInput;
};
export type ap_buildsUncheckedCreateWithoutChampionsInput = {
    id?: number;
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
    ap_build_items?: Prisma.ap_build_itemsUncheckedCreateNestedManyWithoutAp_buildsInput;
};
export type ap_buildsCreateOrConnectWithoutChampionsInput = {
    where: Prisma.ap_buildsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ap_buildsCreateWithoutChampionsInput, Prisma.ap_buildsUncheckedCreateWithoutChampionsInput>;
};
export type ap_buildsCreateManyChampionsInputEnvelope = {
    data: Prisma.ap_buildsCreateManyChampionsInput | Prisma.ap_buildsCreateManyChampionsInput[];
    skipDuplicates?: boolean;
};
export type ap_buildsUpsertWithWhereUniqueWithoutChampionsInput = {
    where: Prisma.ap_buildsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ap_buildsUpdateWithoutChampionsInput, Prisma.ap_buildsUncheckedUpdateWithoutChampionsInput>;
    create: Prisma.XOR<Prisma.ap_buildsCreateWithoutChampionsInput, Prisma.ap_buildsUncheckedCreateWithoutChampionsInput>;
};
export type ap_buildsUpdateWithWhereUniqueWithoutChampionsInput = {
    where: Prisma.ap_buildsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ap_buildsUpdateWithoutChampionsInput, Prisma.ap_buildsUncheckedUpdateWithoutChampionsInput>;
};
export type ap_buildsUpdateManyWithWhereWithoutChampionsInput = {
    where: Prisma.ap_buildsScalarWhereInput;
    data: Prisma.XOR<Prisma.ap_buildsUpdateManyMutationInput, Prisma.ap_buildsUncheckedUpdateManyWithoutChampionsInput>;
};
export type ap_buildsScalarWhereInput = {
    AND?: Prisma.ap_buildsScalarWhereInput | Prisma.ap_buildsScalarWhereInput[];
    OR?: Prisma.ap_buildsScalarWhereInput[];
    NOT?: Prisma.ap_buildsScalarWhereInput | Prisma.ap_buildsScalarWhereInput[];
    id?: Prisma.IntFilter<"ap_builds"> | number;
    champion_id?: Prisma.IntFilter<"ap_builds"> | number;
    name?: Prisma.StringFilter<"ap_builds"> | string;
    description?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    win_rate?: Prisma.FloatNullableFilter<"ap_builds"> | number | null;
    pick_count?: Prisma.IntNullableFilter<"ap_builds"> | number | null;
    difficulty?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    tips?: Prisma.StringNullableFilter<"ap_builds"> | string | null;
    priority?: Prisma.IntFilter<"ap_builds"> | number;
    is_active?: Prisma.BoolFilter<"ap_builds"> | boolean;
    created_at?: Prisma.DateTimeFilter<"ap_builds"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ap_builds"> | Date | string;
};
export type ap_buildsCreateManyChampionsInput = {
    id?: number;
    name: string;
    description?: string | null;
    win_rate?: number | null;
    pick_count?: number | null;
    difficulty?: string | null;
    tips?: string | null;
    priority?: number;
    is_active?: boolean;
    created_at: Date | string;
    updated_at: Date | string;
};
export type ap_buildsUpdateWithoutChampionsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_build_items?: Prisma.ap_build_itemsUpdateManyWithoutAp_buildsNestedInput;
};
export type ap_buildsUncheckedUpdateWithoutChampionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_build_items?: Prisma.ap_build_itemsUncheckedUpdateManyWithoutAp_buildsNestedInput;
};
export type ap_buildsUncheckedUpdateManyWithoutChampionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pick_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tips?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Ap_buildsCountOutputType = {
    ap_build_items: number;
};
export type Ap_buildsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_build_items?: boolean | Ap_buildsCountOutputTypeCountAp_build_itemsArgs;
};
export type Ap_buildsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Ap_buildsCountOutputTypeSelect<ExtArgs> | null;
};
export type Ap_buildsCountOutputTypeCountAp_build_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_build_itemsWhereInput;
};
export type ap_buildsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    champion_id?: boolean;
    name?: boolean;
    description?: boolean;
    win_rate?: boolean;
    pick_count?: boolean;
    difficulty?: boolean;
    tips?: boolean;
    priority?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    ap_build_items?: boolean | Prisma.ap_builds$ap_build_itemsArgs<ExtArgs>;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Ap_buildsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ap_builds"]>;
export type ap_buildsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    champion_id?: boolean;
    name?: boolean;
    description?: boolean;
    win_rate?: boolean;
    pick_count?: boolean;
    difficulty?: boolean;
    tips?: boolean;
    priority?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ap_builds"]>;
export type ap_buildsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    champion_id?: boolean;
    name?: boolean;
    description?: boolean;
    win_rate?: boolean;
    pick_count?: boolean;
    difficulty?: boolean;
    tips?: boolean;
    priority?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ap_builds"]>;
export type ap_buildsSelectScalar = {
    id?: boolean;
    champion_id?: boolean;
    name?: boolean;
    description?: boolean;
    win_rate?: boolean;
    pick_count?: boolean;
    difficulty?: boolean;
    tips?: boolean;
    priority?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ap_buildsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "champion_id" | "name" | "description" | "win_rate" | "pick_count" | "difficulty" | "tips" | "priority" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["ap_builds"]>;
export type ap_buildsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_build_items?: boolean | Prisma.ap_builds$ap_build_itemsArgs<ExtArgs>;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Ap_buildsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ap_buildsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
};
export type ap_buildsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
};
export type $ap_buildsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ap_builds";
    objects: {
        ap_build_items: Prisma.$ap_build_itemsPayload<ExtArgs>[];
        champions: Prisma.$championsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        champion_id: number;
        name: string;
        description: string | null;
        win_rate: number | null;
        pick_count: number | null;
        difficulty: string | null;
        tips: string | null;
        priority: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["ap_builds"]>;
    composites: {};
};
export type ap_buildsGetPayload<S extends boolean | null | undefined | ap_buildsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload, S>;
export type ap_buildsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ap_buildsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Ap_buildsCountAggregateInputType | true;
};
export interface ap_buildsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ap_builds'];
        meta: {
            name: 'ap_builds';
        };
    };
    findUnique<T extends ap_buildsFindUniqueArgs>(args: Prisma.SelectSubset<T, ap_buildsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ap_buildsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ap_buildsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ap_buildsFindFirstArgs>(args?: Prisma.SelectSubset<T, ap_buildsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ap_buildsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ap_buildsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ap_buildsFindManyArgs>(args?: Prisma.SelectSubset<T, ap_buildsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ap_buildsCreateArgs>(args: Prisma.SelectSubset<T, ap_buildsCreateArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ap_buildsCreateManyArgs>(args?: Prisma.SelectSubset<T, ap_buildsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ap_buildsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ap_buildsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ap_buildsDeleteArgs>(args: Prisma.SelectSubset<T, ap_buildsDeleteArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ap_buildsUpdateArgs>(args: Prisma.SelectSubset<T, ap_buildsUpdateArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ap_buildsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ap_buildsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ap_buildsUpdateManyArgs>(args: Prisma.SelectSubset<T, ap_buildsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ap_buildsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ap_buildsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ap_buildsUpsertArgs>(args: Prisma.SelectSubset<T, ap_buildsUpsertArgs<ExtArgs>>): Prisma.Prisma__ap_buildsClient<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ap_buildsCountArgs>(args?: Prisma.Subset<T, ap_buildsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ap_buildsCountAggregateOutputType> : number>;
    aggregate<T extends Ap_buildsAggregateArgs>(args: Prisma.Subset<T, Ap_buildsAggregateArgs>): Prisma.PrismaPromise<GetAp_buildsAggregateType<T>>;
    groupBy<T extends ap_buildsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ap_buildsGroupByArgs['orderBy'];
    } : {
        orderBy?: ap_buildsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ap_buildsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAp_buildsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ap_buildsFieldRefs;
}
export interface Prisma__ap_buildsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ap_build_items<T extends Prisma.ap_builds$ap_build_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ap_builds$ap_build_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    champions<T extends Prisma.championsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.championsDefaultArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ap_buildsFieldRefs {
    readonly id: Prisma.FieldRef<"ap_builds", 'Int'>;
    readonly champion_id: Prisma.FieldRef<"ap_builds", 'Int'>;
    readonly name: Prisma.FieldRef<"ap_builds", 'String'>;
    readonly description: Prisma.FieldRef<"ap_builds", 'String'>;
    readonly win_rate: Prisma.FieldRef<"ap_builds", 'Float'>;
    readonly pick_count: Prisma.FieldRef<"ap_builds", 'Int'>;
    readonly difficulty: Prisma.FieldRef<"ap_builds", 'String'>;
    readonly tips: Prisma.FieldRef<"ap_builds", 'String'>;
    readonly priority: Prisma.FieldRef<"ap_builds", 'Int'>;
    readonly is_active: Prisma.FieldRef<"ap_builds", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"ap_builds", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"ap_builds", 'DateTime'>;
}
export type ap_buildsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    where: Prisma.ap_buildsWhereUniqueInput;
};
export type ap_buildsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    where: Prisma.ap_buildsWhereUniqueInput;
};
export type ap_buildsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    where?: Prisma.ap_buildsWhereInput;
    orderBy?: Prisma.ap_buildsOrderByWithRelationInput | Prisma.ap_buildsOrderByWithRelationInput[];
    cursor?: Prisma.ap_buildsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ap_buildsScalarFieldEnum | Prisma.Ap_buildsScalarFieldEnum[];
};
export type ap_buildsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    where?: Prisma.ap_buildsWhereInput;
    orderBy?: Prisma.ap_buildsOrderByWithRelationInput | Prisma.ap_buildsOrderByWithRelationInput[];
    cursor?: Prisma.ap_buildsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ap_buildsScalarFieldEnum | Prisma.Ap_buildsScalarFieldEnum[];
};
export type ap_buildsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    where?: Prisma.ap_buildsWhereInput;
    orderBy?: Prisma.ap_buildsOrderByWithRelationInput | Prisma.ap_buildsOrderByWithRelationInput[];
    cursor?: Prisma.ap_buildsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ap_buildsScalarFieldEnum | Prisma.Ap_buildsScalarFieldEnum[];
};
export type ap_buildsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ap_buildsCreateInput, Prisma.ap_buildsUncheckedCreateInput>;
};
export type ap_buildsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ap_buildsCreateManyInput | Prisma.ap_buildsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ap_buildsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    data: Prisma.ap_buildsCreateManyInput | Prisma.ap_buildsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ap_buildsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ap_buildsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ap_buildsUpdateInput, Prisma.ap_buildsUncheckedUpdateInput>;
    where: Prisma.ap_buildsWhereUniqueInput;
};
export type ap_buildsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ap_buildsUpdateManyMutationInput, Prisma.ap_buildsUncheckedUpdateManyInput>;
    where?: Prisma.ap_buildsWhereInput;
    limit?: number;
};
export type ap_buildsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ap_buildsUpdateManyMutationInput, Prisma.ap_buildsUncheckedUpdateManyInput>;
    where?: Prisma.ap_buildsWhereInput;
    limit?: number;
    include?: Prisma.ap_buildsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ap_buildsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    where: Prisma.ap_buildsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ap_buildsCreateInput, Prisma.ap_buildsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ap_buildsUpdateInput, Prisma.ap_buildsUncheckedUpdateInput>;
};
export type ap_buildsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
    where: Prisma.ap_buildsWhereUniqueInput;
};
export type ap_buildsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_buildsWhereInput;
    limit?: number;
};
export type ap_builds$ap_build_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ap_buildsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ap_buildsSelect<ExtArgs> | null;
    omit?: Prisma.ap_buildsOmit<ExtArgs> | null;
    include?: Prisma.ap_buildsInclude<ExtArgs> | null;
};
export {};
