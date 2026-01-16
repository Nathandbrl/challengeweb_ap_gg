import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type championsModel = runtime.Types.Result.DefaultSelection<Prisma.$championsPayload>;
export type AggregateChampions = {
    _count: ChampionsCountAggregateOutputType | null;
    _avg: ChampionsAvgAggregateOutputType | null;
    _sum: ChampionsSumAggregateOutputType | null;
    _min: ChampionsMinAggregateOutputType | null;
    _max: ChampionsMaxAggregateOutputType | null;
};
export type ChampionsAvgAggregateOutputType = {
    id: number | null;
    pick_rate: number | null;
    win_rate: number | null;
};
export type ChampionsSumAggregateOutputType = {
    id: number | null;
    pick_rate: number | null;
    win_rate: number | null;
};
export type ChampionsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    title: string | null;
    description: string | null;
    role: string | null;
    image_url: string | null;
    pick_rate: number | null;
    win_rate: number | null;
    riot_id: string | null;
    created_at: Date | null;
};
export type ChampionsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    title: string | null;
    description: string | null;
    role: string | null;
    image_url: string | null;
    pick_rate: number | null;
    win_rate: number | null;
    riot_id: string | null;
    created_at: Date | null;
};
export type ChampionsCountAggregateOutputType = {
    id: number;
    name: number;
    title: number;
    description: number;
    role: number;
    image_url: number;
    pick_rate: number;
    win_rate: number;
    riot_id: number;
    created_at: number;
    _all: number;
};
export type ChampionsAvgAggregateInputType = {
    id?: true;
    pick_rate?: true;
    win_rate?: true;
};
export type ChampionsSumAggregateInputType = {
    id?: true;
    pick_rate?: true;
    win_rate?: true;
};
export type ChampionsMinAggregateInputType = {
    id?: true;
    name?: true;
    title?: true;
    description?: true;
    role?: true;
    image_url?: true;
    pick_rate?: true;
    win_rate?: true;
    riot_id?: true;
    created_at?: true;
};
export type ChampionsMaxAggregateInputType = {
    id?: true;
    name?: true;
    title?: true;
    description?: true;
    role?: true;
    image_url?: true;
    pick_rate?: true;
    win_rate?: true;
    riot_id?: true;
    created_at?: true;
};
export type ChampionsCountAggregateInputType = {
    id?: true;
    name?: true;
    title?: true;
    description?: true;
    role?: true;
    image_url?: true;
    pick_rate?: true;
    win_rate?: true;
    riot_id?: true;
    created_at?: true;
    _all?: true;
};
export type ChampionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.championsWhereInput;
    orderBy?: Prisma.championsOrderByWithRelationInput | Prisma.championsOrderByWithRelationInput[];
    cursor?: Prisma.championsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChampionsCountAggregateInputType;
    _avg?: ChampionsAvgAggregateInputType;
    _sum?: ChampionsSumAggregateInputType;
    _min?: ChampionsMinAggregateInputType;
    _max?: ChampionsMaxAggregateInputType;
};
export type GetChampionsAggregateType<T extends ChampionsAggregateArgs> = {
    [P in keyof T & keyof AggregateChampions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChampions[P]> : Prisma.GetScalarType<T[P], AggregateChampions[P]>;
};
export type championsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.championsWhereInput;
    orderBy?: Prisma.championsOrderByWithAggregationInput | Prisma.championsOrderByWithAggregationInput[];
    by: Prisma.ChampionsScalarFieldEnum[] | Prisma.ChampionsScalarFieldEnum;
    having?: Prisma.championsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChampionsCountAggregateInputType | true;
    _avg?: ChampionsAvgAggregateInputType;
    _sum?: ChampionsSumAggregateInputType;
    _min?: ChampionsMinAggregateInputType;
    _max?: ChampionsMaxAggregateInputType;
};
export type ChampionsGroupByOutputType = {
    id: number;
    name: string;
    title: string;
    description: string | null;
    role: string;
    image_url: string | null;
    pick_rate: number | null;
    win_rate: number | null;
    riot_id: string | null;
    created_at: Date;
    _count: ChampionsCountAggregateOutputType | null;
    _avg: ChampionsAvgAggregateOutputType | null;
    _sum: ChampionsSumAggregateOutputType | null;
    _min: ChampionsMinAggregateOutputType | null;
    _max: ChampionsMaxAggregateOutputType | null;
};
type GetChampionsGroupByPayload<T extends championsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChampionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChampionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChampionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChampionsGroupByOutputType[P]>;
}>>;
export type championsWhereInput = {
    AND?: Prisma.championsWhereInput | Prisma.championsWhereInput[];
    OR?: Prisma.championsWhereInput[];
    NOT?: Prisma.championsWhereInput | Prisma.championsWhereInput[];
    id?: Prisma.IntFilter<"champions"> | number;
    name?: Prisma.StringFilter<"champions"> | string;
    title?: Prisma.StringFilter<"champions"> | string;
    description?: Prisma.StringNullableFilter<"champions"> | string | null;
    role?: Prisma.StringFilter<"champions"> | string;
    image_url?: Prisma.StringNullableFilter<"champions"> | string | null;
    pick_rate?: Prisma.FloatNullableFilter<"champions"> | number | null;
    win_rate?: Prisma.FloatNullableFilter<"champions"> | number | null;
    riot_id?: Prisma.StringNullableFilter<"champions"> | string | null;
    created_at?: Prisma.DateTimeFilter<"champions"> | Date | string;
    ap_builds?: Prisma.Ap_buildsListRelationFilter;
    favorite_champions?: Prisma.Favorite_championsListRelationFilter;
    player_statistics?: Prisma.Player_statisticsListRelationFilter;
};
export type championsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    pick_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    win_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    riot_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ap_builds?: Prisma.ap_buildsOrderByRelationAggregateInput;
    favorite_champions?: Prisma.favorite_championsOrderByRelationAggregateInput;
    player_statistics?: Prisma.player_statisticsOrderByRelationAggregateInput;
};
export type championsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.championsWhereInput | Prisma.championsWhereInput[];
    OR?: Prisma.championsWhereInput[];
    NOT?: Prisma.championsWhereInput | Prisma.championsWhereInput[];
    title?: Prisma.StringFilter<"champions"> | string;
    description?: Prisma.StringNullableFilter<"champions"> | string | null;
    role?: Prisma.StringFilter<"champions"> | string;
    image_url?: Prisma.StringNullableFilter<"champions"> | string | null;
    pick_rate?: Prisma.FloatNullableFilter<"champions"> | number | null;
    win_rate?: Prisma.FloatNullableFilter<"champions"> | number | null;
    riot_id?: Prisma.StringNullableFilter<"champions"> | string | null;
    created_at?: Prisma.DateTimeFilter<"champions"> | Date | string;
    ap_builds?: Prisma.Ap_buildsListRelationFilter;
    favorite_champions?: Prisma.Favorite_championsListRelationFilter;
    player_statistics?: Prisma.Player_statisticsListRelationFilter;
}, "id" | "name">;
export type championsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    pick_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    win_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    riot_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.championsCountOrderByAggregateInput;
    _avg?: Prisma.championsAvgOrderByAggregateInput;
    _max?: Prisma.championsMaxOrderByAggregateInput;
    _min?: Prisma.championsMinOrderByAggregateInput;
    _sum?: Prisma.championsSumOrderByAggregateInput;
};
export type championsScalarWhereWithAggregatesInput = {
    AND?: Prisma.championsScalarWhereWithAggregatesInput | Prisma.championsScalarWhereWithAggregatesInput[];
    OR?: Prisma.championsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.championsScalarWhereWithAggregatesInput | Prisma.championsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"champions"> | number;
    name?: Prisma.StringWithAggregatesFilter<"champions"> | string;
    title?: Prisma.StringWithAggregatesFilter<"champions"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"champions"> | string | null;
    role?: Prisma.StringWithAggregatesFilter<"champions"> | string;
    image_url?: Prisma.StringNullableWithAggregatesFilter<"champions"> | string | null;
    pick_rate?: Prisma.FloatNullableWithAggregatesFilter<"champions"> | number | null;
    win_rate?: Prisma.FloatNullableWithAggregatesFilter<"champions"> | number | null;
    riot_id?: Prisma.StringNullableWithAggregatesFilter<"champions"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"champions"> | Date | string;
};
export type championsCreateInput = {
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_builds?: Prisma.ap_buildsCreateNestedManyWithoutChampionsInput;
    favorite_champions?: Prisma.favorite_championsCreateNestedManyWithoutChampionsInput;
    player_statistics?: Prisma.player_statisticsCreateNestedManyWithoutChampionsInput;
};
export type championsUncheckedCreateInput = {
    id?: number;
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_builds?: Prisma.ap_buildsUncheckedCreateNestedManyWithoutChampionsInput;
    favorite_champions?: Prisma.favorite_championsUncheckedCreateNestedManyWithoutChampionsInput;
    player_statistics?: Prisma.player_statisticsUncheckedCreateNestedManyWithoutChampionsInput;
};
export type championsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_builds?: Prisma.ap_buildsUpdateManyWithoutChampionsNestedInput;
    favorite_champions?: Prisma.favorite_championsUpdateManyWithoutChampionsNestedInput;
    player_statistics?: Prisma.player_statisticsUpdateManyWithoutChampionsNestedInput;
};
export type championsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_builds?: Prisma.ap_buildsUncheckedUpdateManyWithoutChampionsNestedInput;
    favorite_champions?: Prisma.favorite_championsUncheckedUpdateManyWithoutChampionsNestedInput;
    player_statistics?: Prisma.player_statisticsUncheckedUpdateManyWithoutChampionsNestedInput;
};
export type championsCreateManyInput = {
    id?: number;
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
};
export type championsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type championsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChampionsScalarRelationFilter = {
    is?: Prisma.championsWhereInput;
    isNot?: Prisma.championsWhereInput;
};
export type championsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    pick_rate?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type championsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pick_rate?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
};
export type championsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    pick_rate?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type championsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    pick_rate?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
    riot_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type championsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pick_rate?: Prisma.SortOrder;
    win_rate?: Prisma.SortOrder;
};
export type championsCreateNestedOneWithoutAp_buildsInput = {
    create?: Prisma.XOR<Prisma.championsCreateWithoutAp_buildsInput, Prisma.championsUncheckedCreateWithoutAp_buildsInput>;
    connectOrCreate?: Prisma.championsCreateOrConnectWithoutAp_buildsInput;
    connect?: Prisma.championsWhereUniqueInput;
};
export type championsUpdateOneRequiredWithoutAp_buildsNestedInput = {
    create?: Prisma.XOR<Prisma.championsCreateWithoutAp_buildsInput, Prisma.championsUncheckedCreateWithoutAp_buildsInput>;
    connectOrCreate?: Prisma.championsCreateOrConnectWithoutAp_buildsInput;
    upsert?: Prisma.championsUpsertWithoutAp_buildsInput;
    connect?: Prisma.championsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.championsUpdateToOneWithWhereWithoutAp_buildsInput, Prisma.championsUpdateWithoutAp_buildsInput>, Prisma.championsUncheckedUpdateWithoutAp_buildsInput>;
};
export type championsCreateNestedOneWithoutFavorite_championsInput = {
    create?: Prisma.XOR<Prisma.championsCreateWithoutFavorite_championsInput, Prisma.championsUncheckedCreateWithoutFavorite_championsInput>;
    connectOrCreate?: Prisma.championsCreateOrConnectWithoutFavorite_championsInput;
    connect?: Prisma.championsWhereUniqueInput;
};
export type championsUpdateOneRequiredWithoutFavorite_championsNestedInput = {
    create?: Prisma.XOR<Prisma.championsCreateWithoutFavorite_championsInput, Prisma.championsUncheckedCreateWithoutFavorite_championsInput>;
    connectOrCreate?: Prisma.championsCreateOrConnectWithoutFavorite_championsInput;
    upsert?: Prisma.championsUpsertWithoutFavorite_championsInput;
    connect?: Prisma.championsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.championsUpdateToOneWithWhereWithoutFavorite_championsInput, Prisma.championsUpdateWithoutFavorite_championsInput>, Prisma.championsUncheckedUpdateWithoutFavorite_championsInput>;
};
export type championsCreateNestedOneWithoutPlayer_statisticsInput = {
    create?: Prisma.XOR<Prisma.championsCreateWithoutPlayer_statisticsInput, Prisma.championsUncheckedCreateWithoutPlayer_statisticsInput>;
    connectOrCreate?: Prisma.championsCreateOrConnectWithoutPlayer_statisticsInput;
    connect?: Prisma.championsWhereUniqueInput;
};
export type championsUpdateOneRequiredWithoutPlayer_statisticsNestedInput = {
    create?: Prisma.XOR<Prisma.championsCreateWithoutPlayer_statisticsInput, Prisma.championsUncheckedCreateWithoutPlayer_statisticsInput>;
    connectOrCreate?: Prisma.championsCreateOrConnectWithoutPlayer_statisticsInput;
    upsert?: Prisma.championsUpsertWithoutPlayer_statisticsInput;
    connect?: Prisma.championsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.championsUpdateToOneWithWhereWithoutPlayer_statisticsInput, Prisma.championsUpdateWithoutPlayer_statisticsInput>, Prisma.championsUncheckedUpdateWithoutPlayer_statisticsInput>;
};
export type championsCreateWithoutAp_buildsInput = {
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    favorite_champions?: Prisma.favorite_championsCreateNestedManyWithoutChampionsInput;
    player_statistics?: Prisma.player_statisticsCreateNestedManyWithoutChampionsInput;
};
export type championsUncheckedCreateWithoutAp_buildsInput = {
    id?: number;
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    favorite_champions?: Prisma.favorite_championsUncheckedCreateNestedManyWithoutChampionsInput;
    player_statistics?: Prisma.player_statisticsUncheckedCreateNestedManyWithoutChampionsInput;
};
export type championsCreateOrConnectWithoutAp_buildsInput = {
    where: Prisma.championsWhereUniqueInput;
    create: Prisma.XOR<Prisma.championsCreateWithoutAp_buildsInput, Prisma.championsUncheckedCreateWithoutAp_buildsInput>;
};
export type championsUpsertWithoutAp_buildsInput = {
    update: Prisma.XOR<Prisma.championsUpdateWithoutAp_buildsInput, Prisma.championsUncheckedUpdateWithoutAp_buildsInput>;
    create: Prisma.XOR<Prisma.championsCreateWithoutAp_buildsInput, Prisma.championsUncheckedCreateWithoutAp_buildsInput>;
    where?: Prisma.championsWhereInput;
};
export type championsUpdateToOneWithWhereWithoutAp_buildsInput = {
    where?: Prisma.championsWhereInput;
    data: Prisma.XOR<Prisma.championsUpdateWithoutAp_buildsInput, Prisma.championsUncheckedUpdateWithoutAp_buildsInput>;
};
export type championsUpdateWithoutAp_buildsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorite_champions?: Prisma.favorite_championsUpdateManyWithoutChampionsNestedInput;
    player_statistics?: Prisma.player_statisticsUpdateManyWithoutChampionsNestedInput;
};
export type championsUncheckedUpdateWithoutAp_buildsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorite_champions?: Prisma.favorite_championsUncheckedUpdateManyWithoutChampionsNestedInput;
    player_statistics?: Prisma.player_statisticsUncheckedUpdateManyWithoutChampionsNestedInput;
};
export type championsCreateWithoutFavorite_championsInput = {
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_builds?: Prisma.ap_buildsCreateNestedManyWithoutChampionsInput;
    player_statistics?: Prisma.player_statisticsCreateNestedManyWithoutChampionsInput;
};
export type championsUncheckedCreateWithoutFavorite_championsInput = {
    id?: number;
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_builds?: Prisma.ap_buildsUncheckedCreateNestedManyWithoutChampionsInput;
    player_statistics?: Prisma.player_statisticsUncheckedCreateNestedManyWithoutChampionsInput;
};
export type championsCreateOrConnectWithoutFavorite_championsInput = {
    where: Prisma.championsWhereUniqueInput;
    create: Prisma.XOR<Prisma.championsCreateWithoutFavorite_championsInput, Prisma.championsUncheckedCreateWithoutFavorite_championsInput>;
};
export type championsUpsertWithoutFavorite_championsInput = {
    update: Prisma.XOR<Prisma.championsUpdateWithoutFavorite_championsInput, Prisma.championsUncheckedUpdateWithoutFavorite_championsInput>;
    create: Prisma.XOR<Prisma.championsCreateWithoutFavorite_championsInput, Prisma.championsUncheckedCreateWithoutFavorite_championsInput>;
    where?: Prisma.championsWhereInput;
};
export type championsUpdateToOneWithWhereWithoutFavorite_championsInput = {
    where?: Prisma.championsWhereInput;
    data: Prisma.XOR<Prisma.championsUpdateWithoutFavorite_championsInput, Prisma.championsUncheckedUpdateWithoutFavorite_championsInput>;
};
export type championsUpdateWithoutFavorite_championsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_builds?: Prisma.ap_buildsUpdateManyWithoutChampionsNestedInput;
    player_statistics?: Prisma.player_statisticsUpdateManyWithoutChampionsNestedInput;
};
export type championsUncheckedUpdateWithoutFavorite_championsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_builds?: Prisma.ap_buildsUncheckedUpdateManyWithoutChampionsNestedInput;
    player_statistics?: Prisma.player_statisticsUncheckedUpdateManyWithoutChampionsNestedInput;
};
export type championsCreateWithoutPlayer_statisticsInput = {
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_builds?: Prisma.ap_buildsCreateNestedManyWithoutChampionsInput;
    favorite_champions?: Prisma.favorite_championsCreateNestedManyWithoutChampionsInput;
};
export type championsUncheckedCreateWithoutPlayer_statisticsInput = {
    id?: number;
    name: string;
    title: string;
    description?: string | null;
    role: string;
    image_url?: string | null;
    pick_rate?: number | null;
    win_rate?: number | null;
    riot_id?: string | null;
    created_at: Date | string;
    ap_builds?: Prisma.ap_buildsUncheckedCreateNestedManyWithoutChampionsInput;
    favorite_champions?: Prisma.favorite_championsUncheckedCreateNestedManyWithoutChampionsInput;
};
export type championsCreateOrConnectWithoutPlayer_statisticsInput = {
    where: Prisma.championsWhereUniqueInput;
    create: Prisma.XOR<Prisma.championsCreateWithoutPlayer_statisticsInput, Prisma.championsUncheckedCreateWithoutPlayer_statisticsInput>;
};
export type championsUpsertWithoutPlayer_statisticsInput = {
    update: Prisma.XOR<Prisma.championsUpdateWithoutPlayer_statisticsInput, Prisma.championsUncheckedUpdateWithoutPlayer_statisticsInput>;
    create: Prisma.XOR<Prisma.championsCreateWithoutPlayer_statisticsInput, Prisma.championsUncheckedCreateWithoutPlayer_statisticsInput>;
    where?: Prisma.championsWhereInput;
};
export type championsUpdateToOneWithWhereWithoutPlayer_statisticsInput = {
    where?: Prisma.championsWhereInput;
    data: Prisma.XOR<Prisma.championsUpdateWithoutPlayer_statisticsInput, Prisma.championsUncheckedUpdateWithoutPlayer_statisticsInput>;
};
export type championsUpdateWithoutPlayer_statisticsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_builds?: Prisma.ap_buildsUpdateManyWithoutChampionsNestedInput;
    favorite_champions?: Prisma.favorite_championsUpdateManyWithoutChampionsNestedInput;
};
export type championsUncheckedUpdateWithoutPlayer_statisticsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pick_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    win_rate?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ap_builds?: Prisma.ap_buildsUncheckedUpdateManyWithoutChampionsNestedInput;
    favorite_champions?: Prisma.favorite_championsUncheckedUpdateManyWithoutChampionsNestedInput;
};
export type ChampionsCountOutputType = {
    ap_builds: number;
    favorite_champions: number;
    player_statistics: number;
};
export type ChampionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_builds?: boolean | ChampionsCountOutputTypeCountAp_buildsArgs;
    favorite_champions?: boolean | ChampionsCountOutputTypeCountFavorite_championsArgs;
    player_statistics?: boolean | ChampionsCountOutputTypeCountPlayer_statisticsArgs;
};
export type ChampionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChampionsCountOutputTypeSelect<ExtArgs> | null;
};
export type ChampionsCountOutputTypeCountAp_buildsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ap_buildsWhereInput;
};
export type ChampionsCountOutputTypeCountFavorite_championsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.favorite_championsWhereInput;
};
export type ChampionsCountOutputTypeCountPlayer_statisticsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.player_statisticsWhereInput;
};
export type championsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    title?: boolean;
    description?: boolean;
    role?: boolean;
    image_url?: boolean;
    pick_rate?: boolean;
    win_rate?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
    ap_builds?: boolean | Prisma.champions$ap_buildsArgs<ExtArgs>;
    favorite_champions?: boolean | Prisma.champions$favorite_championsArgs<ExtArgs>;
    player_statistics?: boolean | Prisma.champions$player_statisticsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChampionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["champions"]>;
export type championsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    title?: boolean;
    description?: boolean;
    role?: boolean;
    image_url?: boolean;
    pick_rate?: boolean;
    win_rate?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["champions"]>;
export type championsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    title?: boolean;
    description?: boolean;
    role?: boolean;
    image_url?: boolean;
    pick_rate?: boolean;
    win_rate?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["champions"]>;
export type championsSelectScalar = {
    id?: boolean;
    name?: boolean;
    title?: boolean;
    description?: boolean;
    role?: boolean;
    image_url?: boolean;
    pick_rate?: boolean;
    win_rate?: boolean;
    riot_id?: boolean;
    created_at?: boolean;
};
export type championsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "title" | "description" | "role" | "image_url" | "pick_rate" | "win_rate" | "riot_id" | "created_at", ExtArgs["result"]["champions"]>;
export type championsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ap_builds?: boolean | Prisma.champions$ap_buildsArgs<ExtArgs>;
    favorite_champions?: boolean | Prisma.champions$favorite_championsArgs<ExtArgs>;
    player_statistics?: boolean | Prisma.champions$player_statisticsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChampionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type championsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type championsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $championsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "champions";
    objects: {
        ap_builds: Prisma.$ap_buildsPayload<ExtArgs>[];
        favorite_champions: Prisma.$favorite_championsPayload<ExtArgs>[];
        player_statistics: Prisma.$player_statisticsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        title: string;
        description: string | null;
        role: string;
        image_url: string | null;
        pick_rate: number | null;
        win_rate: number | null;
        riot_id: string | null;
        created_at: Date;
    }, ExtArgs["result"]["champions"]>;
    composites: {};
};
export type championsGetPayload<S extends boolean | null | undefined | championsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$championsPayload, S>;
export type championsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<championsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChampionsCountAggregateInputType | true;
};
export interface championsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['champions'];
        meta: {
            name: 'champions';
        };
    };
    findUnique<T extends championsFindUniqueArgs>(args: Prisma.SelectSubset<T, championsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends championsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, championsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends championsFindFirstArgs>(args?: Prisma.SelectSubset<T, championsFindFirstArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends championsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, championsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends championsFindManyArgs>(args?: Prisma.SelectSubset<T, championsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends championsCreateArgs>(args: Prisma.SelectSubset<T, championsCreateArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends championsCreateManyArgs>(args?: Prisma.SelectSubset<T, championsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends championsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, championsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends championsDeleteArgs>(args: Prisma.SelectSubset<T, championsDeleteArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends championsUpdateArgs>(args: Prisma.SelectSubset<T, championsUpdateArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends championsDeleteManyArgs>(args?: Prisma.SelectSubset<T, championsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends championsUpdateManyArgs>(args: Prisma.SelectSubset<T, championsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends championsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, championsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends championsUpsertArgs>(args: Prisma.SelectSubset<T, championsUpsertArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends championsCountArgs>(args?: Prisma.Subset<T, championsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChampionsCountAggregateOutputType> : number>;
    aggregate<T extends ChampionsAggregateArgs>(args: Prisma.Subset<T, ChampionsAggregateArgs>): Prisma.PrismaPromise<GetChampionsAggregateType<T>>;
    groupBy<T extends championsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: championsGroupByArgs['orderBy'];
    } : {
        orderBy?: championsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, championsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChampionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: championsFieldRefs;
}
export interface Prisma__championsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ap_builds<T extends Prisma.champions$ap_buildsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.champions$ap_buildsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ap_buildsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favorite_champions<T extends Prisma.champions$favorite_championsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.champions$favorite_championsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    player_statistics<T extends Prisma.champions$player_statisticsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.champions$player_statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$player_statisticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface championsFieldRefs {
    readonly id: Prisma.FieldRef<"champions", 'Int'>;
    readonly name: Prisma.FieldRef<"champions", 'String'>;
    readonly title: Prisma.FieldRef<"champions", 'String'>;
    readonly description: Prisma.FieldRef<"champions", 'String'>;
    readonly role: Prisma.FieldRef<"champions", 'String'>;
    readonly image_url: Prisma.FieldRef<"champions", 'String'>;
    readonly pick_rate: Prisma.FieldRef<"champions", 'Float'>;
    readonly win_rate: Prisma.FieldRef<"champions", 'Float'>;
    readonly riot_id: Prisma.FieldRef<"champions", 'String'>;
    readonly created_at: Prisma.FieldRef<"champions", 'DateTime'>;
}
export type championsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    where: Prisma.championsWhereUniqueInput;
};
export type championsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    where: Prisma.championsWhereUniqueInput;
};
export type championsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    where?: Prisma.championsWhereInput;
    orderBy?: Prisma.championsOrderByWithRelationInput | Prisma.championsOrderByWithRelationInput[];
    cursor?: Prisma.championsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChampionsScalarFieldEnum | Prisma.ChampionsScalarFieldEnum[];
};
export type championsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    where?: Prisma.championsWhereInput;
    orderBy?: Prisma.championsOrderByWithRelationInput | Prisma.championsOrderByWithRelationInput[];
    cursor?: Prisma.championsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChampionsScalarFieldEnum | Prisma.ChampionsScalarFieldEnum[];
};
export type championsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    where?: Prisma.championsWhereInput;
    orderBy?: Prisma.championsOrderByWithRelationInput | Prisma.championsOrderByWithRelationInput[];
    cursor?: Prisma.championsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChampionsScalarFieldEnum | Prisma.ChampionsScalarFieldEnum[];
};
export type championsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.championsCreateInput, Prisma.championsUncheckedCreateInput>;
};
export type championsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.championsCreateManyInput | Prisma.championsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type championsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    data: Prisma.championsCreateManyInput | Prisma.championsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type championsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.championsUpdateInput, Prisma.championsUncheckedUpdateInput>;
    where: Prisma.championsWhereUniqueInput;
};
export type championsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.championsUpdateManyMutationInput, Prisma.championsUncheckedUpdateManyInput>;
    where?: Prisma.championsWhereInput;
    limit?: number;
};
export type championsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.championsUpdateManyMutationInput, Prisma.championsUncheckedUpdateManyInput>;
    where?: Prisma.championsWhereInput;
    limit?: number;
};
export type championsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    where: Prisma.championsWhereUniqueInput;
    create: Prisma.XOR<Prisma.championsCreateInput, Prisma.championsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.championsUpdateInput, Prisma.championsUncheckedUpdateInput>;
};
export type championsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
    where: Prisma.championsWhereUniqueInput;
};
export type championsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.championsWhereInput;
    limit?: number;
};
export type champions$ap_buildsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type champions$favorite_championsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    where?: Prisma.favorite_championsWhereInput;
    orderBy?: Prisma.favorite_championsOrderByWithRelationInput | Prisma.favorite_championsOrderByWithRelationInput[];
    cursor?: Prisma.favorite_championsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Favorite_championsScalarFieldEnum | Prisma.Favorite_championsScalarFieldEnum[];
};
export type champions$player_statisticsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.player_statisticsSelect<ExtArgs> | null;
    omit?: Prisma.player_statisticsOmit<ExtArgs> | null;
    include?: Prisma.player_statisticsInclude<ExtArgs> | null;
    where?: Prisma.player_statisticsWhereInput;
    orderBy?: Prisma.player_statisticsOrderByWithRelationInput | Prisma.player_statisticsOrderByWithRelationInput[];
    cursor?: Prisma.player_statisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Player_statisticsScalarFieldEnum | Prisma.Player_statisticsScalarFieldEnum[];
};
export type championsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.championsSelect<ExtArgs> | null;
    omit?: Prisma.championsOmit<ExtArgs> | null;
    include?: Prisma.championsInclude<ExtArgs> | null;
};
export {};
