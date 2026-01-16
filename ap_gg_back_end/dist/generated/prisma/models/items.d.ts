import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$itemsPayload>;
export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null;
    _avg: ItemsAvgAggregateOutputType | null;
    _sum: ItemsSumAggregateOutputType | null;
    _min: ItemsMinAggregateOutputType | null;
    _max: ItemsMaxAggregateOutputType | null;
};
export type ItemsAvgAggregateOutputType = {
    id: number | null;
    gold: number | null;
    ap_bonus: number | null;
    other_bonus: number | null;
};
export type ItemsSumAggregateOutputType = {
    id: number | null;
    gold: number | null;
    ap_bonus: number | null;
    other_bonus: number | null;
};
export type ItemsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    gold: number | null;
    ap_bonus: number | null;
    other_bonus: number | null;
    image_url: string | null;
    riot_id: string | null;
    created_at: Date | null;
};
export type ItemsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    gold: number | null;
    ap_bonus: number | null;
    other_bonus: number | null;
    image_url: string | null;
    riot_id: string | null;
    created_at: Date | null;
};
export type ItemsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    gold: number;
    ap_bonus: number;
    other_bonus: number;
    image_url: number;
    riot_id: number;
    created_at: number;
    _all: number;
};
export type ItemsAvgAggregateInputType = {
    id?: true;
    gold?: true;
    ap_bonus?: true;
    other_bonus?: true;
};
export type ItemsSumAggregateInputType = {
    id?: true;
    gold?: true;
    ap_bonus?: true;
    other_bonus?: true;
};
export type ItemsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    gold?: true;
    ap_bonus?: true;
    other_bonus?: true;
    image_url?: true;
    riot_id?: true;
    created_at?: true;
};
export type ItemsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    gold?: true;
    ap_bonus?: true;
    other_bonus?: true;
    image_url?: true;
    riot_id?: true;
    created_at?: true;
};
export type ItemsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    gold?: true;
    ap_bonus?: true;
    other_bonus?: true;
    image_url?: true;
    riot_id?: true;
    created_at?: true;
    _all?: true;
};
export type ItemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.itemsWhereInput;
    orderBy?: Prisma.itemsOrderByWithRelationInput | Prisma.itemsOrderByWithRelationInput[];
    cursor?: Prisma.itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItemsCountAggregateInputType;
    _avg?: ItemsAvgAggregateInputType;
    _sum?: ItemsSumAggregateInputType;
    _min?: ItemsMinAggregateInputType;
    _max?: ItemsMaxAggregateInputType;
};
export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
    [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItems[P]> : Prisma.GetScalarType<T[P], AggregateItems[P]>;
};
export type itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.itemsWhereInput;
    orderBy?: Prisma.itemsOrderByWithAggregationInput | Prisma.itemsOrderByWithAggregationInput[];
    by: Prisma.ItemsScalarFieldEnum[] | Prisma.ItemsScalarFieldEnum;
    having?: Prisma.itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemsCountAggregateInputType | true;
    _avg?: ItemsAvgAggregateInputType;
    _sum?: ItemsSumAggregateInputType;
    _min?: ItemsMinAggregateInputType;
    _max?: ItemsMaxAggregateInputType;
};
export type ItemsGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    gold: number | null;
    ap_bonus: number | null;
    other_bonus: number | null;
    image_url: string | null;
    riot_id: string | null;
    created_at: Date;
    _count: ItemsCountAggregateOutputType | null;
    _avg: ItemsAvgAggregateOutputType | null;
    _sum: ItemsSumAggregateOutputType | null;
    _min: ItemsMinAggregateOutputType | null;
    _max: ItemsMaxAggregateOutputType | null;
};
type GetItemsGroupByPayload<T extends itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemsGroupByOutputType[P]>;
}>>;
export type itemsWhereInput = {
    AND?: Prisma.itemsWhereInput | Prisma.itemsWhereInput[];
    OR?: Prisma.itemsWhereInput[];
    NOT?: Prisma.itemsWhereInput | Prisma.itemsWhereInput[];
    id?: Prisma.IntFilter<"items"> | number;
    name?: Prisma.StringFilter<"items"> | string;
    description?: Prisma.StringNullableFilter<"items"> | string | null;
    gold?: Prisma.IntNullableFilter<"items"> | number | null;
    ap_bonus?: Prisma.FloatNullableFilter<"items"> | number | null;
    other_bonus?: Prisma.FloatNullableFilter<"items"> | number | null;
    image_url?: Prisma.StringNullableFilter<"items"> | string | null;
    riot_id?: Prisma.StringNullableFilter<"items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"items"> | Date | string;
    ap_build_items?: Prisma.Ap_build_itemsListRelationFilter;
};
export type itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    gold?: Prisma.SortOrderInput | Prisma.SortOrder;
    ap_bonus?: Prisma.SortOrderInput | Prisma.SortOrder;
    other_bonus?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    riot_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ap_build_items?: Prisma.ap_build_itemsOrderByRelationAggregateInput;
};
export type itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.itemsWhereInput | Prisma.itemsWhereInput[];
    OR?: Prisma.itemsWhereInput[];
    NOT?: Prisma.itemsWhereInput | Prisma.itemsWhereInput[];
    description?: Prisma.StringNullableFilter<"items"> | string | null;
    gold?: Prisma.IntNullableFilter<"items"> | number | null;
    ap_bonus?: Prisma.FloatNullableFilter<"items"> | number | null;
    other_bonus?: Prisma.FloatNullableFilter<"items"> | number | null;
    image_url?: Prisma.StringNullableFilter<"items"> | string | null;
    riot_id?: Prisma.StringNullableFilter<"items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"items"> | Date | string;
    ap_build_items?: Prisma.Ap_build_itemsListRelationFilter;
}, "id" | "name">;
export type itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    gold?: Prisma.SortOrderInput | Prisma.SortOrder;
    ap_bonus?: Prisma.SortOrderInput | Prisma.SortOrder;
    other_bonus?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    riot_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.itemsCountOrderByAggregateInput;
    _avg?: Prisma.itemsAvgOrderByAggregateInput;
    _max?: Prisma.itemsMaxOrderByAggregateInput;
    _min?: Prisma.itemsMinOrderByAggregateInput;
    _sum?: Prisma.itemsSumOrderByAggregateInput;
};
export type itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.itemsScalarWhereWithAggregatesInput | Prisma.itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.itemsScalarWhereWithAggregatesInput | Prisma.itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"items"> | number;
    name?: Prisma.StringWithAggregatesFilter<"items"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"items"> | string | null;
    gold?: Prisma.IntNullableWithAggregatesFilter<"items"> | number | null;
    ap_bonus?: Prisma.FloatNullableWithAggregatesFilter<"items"> | number | null;
    other_bonus?: Prisma.FloatNullableWithAggregatesFilter<"items"> | number | null;
    image_url?: Prisma.StringNullableWithAggregatesFilter<"items"> | string | null;
    riot_id?: Prisma.StringNullableWithAggregatesFilter<"items"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"items"> | Date | string;
};
export type itemsCreateInput = {
    name: string;
    description?: string | null;
    gold?: number | null;
    ap_bonus?: number | null;
    other_bonus?: number | null;
    image_url?: string | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_build_items?: Prisma.ap_build_itemsCreateNestedManyWithoutItemsInput;
};
export type itemsUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    gold?: number | null;
    ap_bonus?: number | null;
    other_bonus?: number | null;
    image_url?: string | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_build_items?: Prisma.ap_build_itemsUncheckedCreateNestedManyWithoutItemsInput;
};
export type itemsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ap_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    other_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_build_items?: Prisma.ap_build_itemsUpdateManyWithoutItemsNestedInput;
};
export type itemsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ap_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    other_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_build_items?: Prisma.ap_build_itemsUncheckedUpdateManyWithoutItemsNestedInput;
};
export type itemsCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    gold?: number | null;
    ap_bonus?: number | null;
    other_bonus?: number | null;
    image_url?: string | null;
    riot_id?: string | null;
    created_at: Date | string;
};
export type itemsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ap_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    other_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type itemsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ap_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    other_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemsScalarRelationFilter = {
    is?: Prisma.itemsWhereInput;
    isNot?: Prisma.itemsWhereInput;
};
export type itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    ap_bonus?: Prisma.SortOrder;
    other_bonus?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type itemsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    ap_bonus?: Prisma.SortOrder;
    other_bonus?: Prisma.SortOrder;
};
export type itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    ap_bonus?: Prisma.SortOrder;
    other_bonus?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    ap_bonus?: Prisma.SortOrder;
    other_bonus?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type itemsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    ap_bonus?: Prisma.SortOrder;
    other_bonus?: Prisma.SortOrder;
};
export type itemsCreateNestedOneWithoutAp_build_itemsInput = {
    create?: Prisma.XOR<Prisma.itemsCreateWithoutAp_build_itemsInput, Prisma.itemsUncheckedCreateWithoutAp_build_itemsInput>;
    connectOrCreate?: Prisma.itemsCreateOrConnectWithoutAp_build_itemsInput;
    connect?: Prisma.itemsWhereUniqueInput;
};
export type itemsUpdateOneRequiredWithoutAp_build_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.itemsCreateWithoutAp_build_itemsInput, Prisma.itemsUncheckedCreateWithoutAp_build_itemsInput>;
    connectOrCreate?: Prisma.itemsCreateOrConnectWithoutAp_build_itemsInput;
    upsert?: Prisma.itemsUpsertWithoutAp_build_itemsInput;
    connect?: Prisma.itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.itemsUpdateToOneWithWhereWithoutAp_build_itemsInput, Prisma.itemsUpdateWithoutAp_build_itemsInput>, Prisma.itemsUncheckedUpdateWithoutAp_build_itemsInput>;
};
export type itemsCreateWithoutAp_build_itemsInput = {
    name: string;
    description?: string | null;
    gold?: number | null;
    ap_bonus?: number | null;
    other_bonus?: number | null;
    image_url?: string | null;
    riot_id?: string | null;
    created_at: Date | string;
};
export type itemsUncheckedCreateWithoutAp_build_itemsInput = {
    id?: number;
    name: string;
    description?: string | null;
    gold?: number | null;
    ap_bonus?: number | null;
    other_bonus?: number | null;
    image_url?: string | null;
    riot_id?: string | null;
    created_at: Date | string;
};
export type itemsCreateOrConnectWithoutAp_build_itemsInput = {
    where: Prisma.itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.itemsCreateWithoutAp_build_itemsInput, Prisma.itemsUncheckedCreateWithoutAp_build_itemsInput>;
};
export type itemsUpsertWithoutAp_build_itemsInput = {
    update: Prisma.XOR<Prisma.itemsUpdateWithoutAp_build_itemsInput, Prisma.itemsUncheckedUpdateWithoutAp_build_itemsInput>;
    create: Prisma.XOR<Prisma.itemsCreateWithoutAp_build_itemsInput, Prisma.itemsUncheckedCreateWithoutAp_build_itemsInput>;
    where?: Prisma.itemsWhereInput;
};
export type itemsUpdateToOneWithWhereWithoutAp_build_itemsInput = {
    where?: Prisma.itemsWhereInput;
    data: Prisma.XOR<Prisma.itemsUpdateWithoutAp_build_itemsInput, Prisma.itemsUncheckedUpdateWithoutAp_build_itemsInput>;
};
export type itemsUpdateWithoutAp_build_itemsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ap_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    other_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type itemsUncheckedUpdateWithoutAp_build_itemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ap_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    other_bonus?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemsCountOutputType = {
    ap_build_items: number;
};
export type ItemsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_build_items?: boolean | ItemsCountOutputTypeCountAp_build_itemsArgs;
};
export type ItemsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemsCountOutputTypeSelect<ExtArgs> | null;
};
export type ItemsCountOutputTypeCountAp_build_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_build_itemsWhereInput;
};
export type itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    gold?: boolean;
    ap_bonus?: boolean;
    other_bonus?: boolean;
    image_url?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
    ap_build_items?: boolean | Prisma.items$ap_build_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["items"]>;
export type itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    gold?: boolean;
    ap_bonus?: boolean;
    other_bonus?: boolean;
    image_url?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["items"]>;
export type itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    gold?: boolean;
    ap_bonus?: boolean;
    other_bonus?: boolean;
    image_url?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["items"]>;
export type itemsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    gold?: boolean;
    ap_bonus?: boolean;
    other_bonus?: boolean;
    image_url?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
};
export type itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "gold" | "ap_bonus" | "other_bonus" | "image_url" | "riot_id" | "created_at", ExtArgs["result"]["items"]>;
export type itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_build_items?: boolean | Prisma.items$ap_build_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "items";
    objects: {
        ap_build_items: Prisma.$ap_build_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        gold: number | null;
        ap_bonus: number | null;
        other_bonus: number | null;
        image_url: string | null;
        riot_id: string | null;
        created_at: Date;
    }, ExtArgs["result"]["items"]>;
    composites: {};
};
export type itemsGetPayload<S extends boolean | null | undefined | itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$itemsPayload, S>;
export type itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemsCountAggregateInputType | true;
};
export interface itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['items'];
        meta: {
            name: 'items';
        };
    };
    findUnique<T extends itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends itemsFindManyArgs>(args?: Prisma.SelectSubset<T, itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends itemsCreateArgs>(args: Prisma.SelectSubset<T, itemsCreateArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends itemsDeleteArgs>(args: Prisma.SelectSubset<T, itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends itemsUpdateArgs>(args: Prisma.SelectSubset<T, itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends itemsUpsertArgs>(args: Prisma.SelectSubset<T, itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__itemsClient<runtime.Types.Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends itemsCountArgs>(args?: Prisma.Subset<T, itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemsCountAggregateOutputType> : number>;
    aggregate<T extends ItemsAggregateArgs>(args: Prisma.Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>;
    groupBy<T extends itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: itemsFieldRefs;
}
export interface Prisma__itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ap_build_items<T extends Prisma.items$ap_build_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.items$ap_build_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_build_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface itemsFieldRefs {
    readonly id: Prisma.FieldRef<"items", 'Int'>;
    readonly name: Prisma.FieldRef<"items", 'String'>;
    readonly description: Prisma.FieldRef<"items", 'String'>;
    readonly gold: Prisma.FieldRef<"items", 'Int'>;
    readonly ap_bonus: Prisma.FieldRef<"items", 'Float'>;
    readonly other_bonus: Prisma.FieldRef<"items", 'Float'>;
    readonly image_url: Prisma.FieldRef<"items", 'String'>;
    readonly riot_id: Prisma.FieldRef<"items", 'String'>;
    readonly created_at: Prisma.FieldRef<"items", 'DateTime'>;
}
export type itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    where: Prisma.itemsWhereUniqueInput;
};
export type itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    where: Prisma.itemsWhereUniqueInput;
};
export type itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    where?: Prisma.itemsWhereInput;
    orderBy?: Prisma.itemsOrderByWithRelationInput | Prisma.itemsOrderByWithRelationInput[];
    cursor?: Prisma.itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemsScalarFieldEnum | Prisma.ItemsScalarFieldEnum[];
};
export type itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    where?: Prisma.itemsWhereInput;
    orderBy?: Prisma.itemsOrderByWithRelationInput | Prisma.itemsOrderByWithRelationInput[];
    cursor?: Prisma.itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemsScalarFieldEnum | Prisma.ItemsScalarFieldEnum[];
};
export type itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    where?: Prisma.itemsWhereInput;
    orderBy?: Prisma.itemsOrderByWithRelationInput | Prisma.itemsOrderByWithRelationInput[];
    cursor?: Prisma.itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemsScalarFieldEnum | Prisma.ItemsScalarFieldEnum[];
};
export type itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.itemsCreateInput, Prisma.itemsUncheckedCreateInput>;
};
export type itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.itemsCreateManyInput | Prisma.itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    data: Prisma.itemsCreateManyInput | Prisma.itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.itemsUpdateInput, Prisma.itemsUncheckedUpdateInput>;
    where: Prisma.itemsWhereUniqueInput;
};
export type itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.itemsUpdateManyMutationInput, Prisma.itemsUncheckedUpdateManyInput>;
    where?: Prisma.itemsWhereInput;
    limit?: number;
};
export type itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.itemsUpdateManyMutationInput, Prisma.itemsUncheckedUpdateManyInput>;
    where?: Prisma.itemsWhereInput;
    limit?: number;
};
export type itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    where: Prisma.itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.itemsCreateInput, Prisma.itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.itemsUpdateInput, Prisma.itemsUncheckedUpdateInput>;
};
export type itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
    where: Prisma.itemsWhereUniqueInput;
};
export type itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.itemsWhereInput;
    limit?: number;
};
export type items$ap_build_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.itemsSelect<ExtArgs> | null;
    omit?: Prisma.itemsOmit<ExtArgs> | null;
    include?: Prisma.itemsInclude<ExtArgs> | null;
};
export {};
