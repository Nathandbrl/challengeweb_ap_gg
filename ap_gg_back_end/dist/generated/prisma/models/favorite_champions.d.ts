import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type favorite_championsModel = runtime.Types.Result.DefaultSelection<Prisma.$favorite_championsPayload>;
export type AggregateFavorite_champions = {
    _count: Favorite_championsCountAggregateOutputType | null;
    _avg: Favorite_championsAvgAggregateOutputType | null;
    _sum: Favorite_championsSumAggregateOutputType | null;
    _min: Favorite_championsMinAggregateOutputType | null;
    _max: Favorite_championsMaxAggregateOutputType | null;
};
export type Favorite_championsAvgAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
};
export type Favorite_championsSumAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
};
export type Favorite_championsMinAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
    added_at: Date | null;
};
export type Favorite_championsMaxAggregateOutputType = {
    id: number | null;
    player_id: number | null;
    champion_id: number | null;
    added_at: Date | null;
};
export type Favorite_championsCountAggregateOutputType = {
    id: number;
    player_id: number;
    champion_id: number;
    added_at: number;
    _all: number;
};
export type Favorite_championsAvgAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
};
export type Favorite_championsSumAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
};
export type Favorite_championsMinAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    added_at?: true;
};
export type Favorite_championsMaxAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    added_at?: true;
};
export type Favorite_championsCountAggregateInputType = {
    id?: true;
    player_id?: true;
    champion_id?: true;
    added_at?: true;
    _all?: true;
};
export type Favorite_championsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.favorite_championsWhereInput;
    orderBy?: Prisma.favorite_championsOrderByWithRelationInput | Prisma.favorite_championsOrderByWithRelationInput[];
    cursor?: Prisma.favorite_championsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Favorite_championsCountAggregateInputType;
    _avg?: Favorite_championsAvgAggregateInputType;
    _sum?: Favorite_championsSumAggregateInputType;
    _min?: Favorite_championsMinAggregateInputType;
    _max?: Favorite_championsMaxAggregateInputType;
};
export type GetFavorite_championsAggregateType<T extends Favorite_championsAggregateArgs> = {
    [P in keyof T & keyof AggregateFavorite_champions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFavorite_champions[P]> : Prisma.GetScalarType<T[P], AggregateFavorite_champions[P]>;
};
export type favorite_championsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.favorite_championsWhereInput;
    orderBy?: Prisma.favorite_championsOrderByWithAggregationInput | Prisma.favorite_championsOrderByWithAggregationInput[];
    by: Prisma.Favorite_championsScalarFieldEnum[] | Prisma.Favorite_championsScalarFieldEnum;
    having?: Prisma.favorite_championsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Favorite_championsCountAggregateInputType | true;
    _avg?: Favorite_championsAvgAggregateInputType;
    _sum?: Favorite_championsSumAggregateInputType;
    _min?: Favorite_championsMinAggregateInputType;
    _max?: Favorite_championsMaxAggregateInputType;
};
export type Favorite_championsGroupByOutputType = {
    id: number;
    player_id: number;
    champion_id: number;
    added_at: Date;
    _count: Favorite_championsCountAggregateOutputType | null;
    _avg: Favorite_championsAvgAggregateOutputType | null;
    _sum: Favorite_championsSumAggregateOutputType | null;
    _min: Favorite_championsMinAggregateOutputType | null;
    _max: Favorite_championsMaxAggregateOutputType | null;
};
type GetFavorite_championsGroupByPayload<T extends favorite_championsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Favorite_championsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Favorite_championsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Favorite_championsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Favorite_championsGroupByOutputType[P]>;
}>>;
export type favorite_championsWhereInput = {
    AND?: Prisma.favorite_championsWhereInput | Prisma.favorite_championsWhereInput[];
    OR?: Prisma.favorite_championsWhereInput[];
    NOT?: Prisma.favorite_championsWhereInput | Prisma.favorite_championsWhereInput[];
    id?: Prisma.IntFilter<"favorite_champions"> | number;
    player_id?: Prisma.IntFilter<"favorite_champions"> | number;
    champion_id?: Prisma.IntFilter<"favorite_champions"> | number;
    added_at?: Prisma.DateTimeFilter<"favorite_champions"> | Date | string;
    champions?: Prisma.XOR<Prisma.ChampionsScalarRelationFilter, Prisma.championsWhereInput>;
    players?: Prisma.XOR<Prisma.PlayersScalarRelationFilter, Prisma.playersWhereInput>;
};
export type favorite_championsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    added_at?: Prisma.SortOrder;
    champions?: Prisma.championsOrderByWithRelationInput;
    players?: Prisma.playersOrderByWithRelationInput;
};
export type favorite_championsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    player_id_champion_id?: Prisma.favorite_championsPlayer_idChampion_idCompoundUniqueInput;
    AND?: Prisma.favorite_championsWhereInput | Prisma.favorite_championsWhereInput[];
    OR?: Prisma.favorite_championsWhereInput[];
    NOT?: Prisma.favorite_championsWhereInput | Prisma.favorite_championsWhereInput[];
    player_id?: Prisma.IntFilter<"favorite_champions"> | number;
    champion_id?: Prisma.IntFilter<"favorite_champions"> | number;
    added_at?: Prisma.DateTimeFilter<"favorite_champions"> | Date | string;
    champions?: Prisma.XOR<Prisma.ChampionsScalarRelationFilter, Prisma.championsWhereInput>;
    players?: Prisma.XOR<Prisma.PlayersScalarRelationFilter, Prisma.playersWhereInput>;
}, "id" | "player_id_champion_id">;
export type favorite_championsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    added_at?: Prisma.SortOrder;
    _count?: Prisma.favorite_championsCountOrderByAggregateInput;
    _avg?: Prisma.favorite_championsAvgOrderByAggregateInput;
    _max?: Prisma.favorite_championsMaxOrderByAggregateInput;
    _min?: Prisma.favorite_championsMinOrderByAggregateInput;
    _sum?: Prisma.favorite_championsSumOrderByAggregateInput;
};
export type favorite_championsScalarWhereWithAggregatesInput = {
    AND?: Prisma.favorite_championsScalarWhereWithAggregatesInput | Prisma.favorite_championsScalarWhereWithAggregatesInput[];
    OR?: Prisma.favorite_championsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.favorite_championsScalarWhereWithAggregatesInput | Prisma.favorite_championsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"favorite_champions"> | number;
    player_id?: Prisma.IntWithAggregatesFilter<"favorite_champions"> | number;
    champion_id?: Prisma.IntWithAggregatesFilter<"favorite_champions"> | number;
    added_at?: Prisma.DateTimeWithAggregatesFilter<"favorite_champions"> | Date | string;
};
export type favorite_championsCreateInput = {
    added_at: Date | string;
    champions: Prisma.championsCreateNestedOneWithoutFavorite_championsInput;
    players: Prisma.playersCreateNestedOneWithoutFavorite_championsInput;
};
export type favorite_championsUncheckedCreateInput = {
    id?: number;
    player_id: number;
    champion_id: number;
    added_at: Date | string;
};
export type favorite_championsUpdateInput = {
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    champions?: Prisma.championsUpdateOneRequiredWithoutFavorite_championsNestedInput;
    players?: Prisma.playersUpdateOneRequiredWithoutFavorite_championsNestedInput;
};
export type favorite_championsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type favorite_championsCreateManyInput = {
    id?: number;
    player_id: number;
    champion_id: number;
    added_at: Date | string;
};
export type favorite_championsUpdateManyMutationInput = {
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type favorite_championsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Favorite_championsListRelationFilter = {
    every?: Prisma.favorite_championsWhereInput;
    some?: Prisma.favorite_championsWhereInput;
    none?: Prisma.favorite_championsWhereInput;
};
export type favorite_championsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type favorite_championsPlayer_idChampion_idCompoundUniqueInput = {
    player_id: number;
    champion_id: number;
};
export type favorite_championsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    added_at?: Prisma.SortOrder;
};
export type favorite_championsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
};
export type favorite_championsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    added_at?: Prisma.SortOrder;
};
export type favorite_championsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
    added_at?: Prisma.SortOrder;
};
export type favorite_championsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    player_id?: Prisma.SortOrder;
    champion_id?: Prisma.SortOrder;
};
export type favorite_championsCreateNestedManyWithoutChampionsInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutChampionsInput, Prisma.favorite_championsUncheckedCreateWithoutChampionsInput> | Prisma.favorite_championsCreateWithoutChampionsInput[] | Prisma.favorite_championsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutChampionsInput | Prisma.favorite_championsCreateOrConnectWithoutChampionsInput[];
    createMany?: Prisma.favorite_championsCreateManyChampionsInputEnvelope;
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
};
export type favorite_championsUncheckedCreateNestedManyWithoutChampionsInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutChampionsInput, Prisma.favorite_championsUncheckedCreateWithoutChampionsInput> | Prisma.favorite_championsCreateWithoutChampionsInput[] | Prisma.favorite_championsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutChampionsInput | Prisma.favorite_championsCreateOrConnectWithoutChampionsInput[];
    createMany?: Prisma.favorite_championsCreateManyChampionsInputEnvelope;
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
};
export type favorite_championsUpdateManyWithoutChampionsNestedInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutChampionsInput, Prisma.favorite_championsUncheckedCreateWithoutChampionsInput> | Prisma.favorite_championsCreateWithoutChampionsInput[] | Prisma.favorite_championsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutChampionsInput | Prisma.favorite_championsCreateOrConnectWithoutChampionsInput[];
    upsert?: Prisma.favorite_championsUpsertWithWhereUniqueWithoutChampionsInput | Prisma.favorite_championsUpsertWithWhereUniqueWithoutChampionsInput[];
    createMany?: Prisma.favorite_championsCreateManyChampionsInputEnvelope;
    set?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    disconnect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    delete?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    update?: Prisma.favorite_championsUpdateWithWhereUniqueWithoutChampionsInput | Prisma.favorite_championsUpdateWithWhereUniqueWithoutChampionsInput[];
    updateMany?: Prisma.favorite_championsUpdateManyWithWhereWithoutChampionsInput | Prisma.favorite_championsUpdateManyWithWhereWithoutChampionsInput[];
    deleteMany?: Prisma.favorite_championsScalarWhereInput | Prisma.favorite_championsScalarWhereInput[];
};
export type favorite_championsUncheckedUpdateManyWithoutChampionsNestedInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutChampionsInput, Prisma.favorite_championsUncheckedCreateWithoutChampionsInput> | Prisma.favorite_championsCreateWithoutChampionsInput[] | Prisma.favorite_championsUncheckedCreateWithoutChampionsInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutChampionsInput | Prisma.favorite_championsCreateOrConnectWithoutChampionsInput[];
    upsert?: Prisma.favorite_championsUpsertWithWhereUniqueWithoutChampionsInput | Prisma.favorite_championsUpsertWithWhereUniqueWithoutChampionsInput[];
    createMany?: Prisma.favorite_championsCreateManyChampionsInputEnvelope;
    set?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    disconnect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    delete?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    update?: Prisma.favorite_championsUpdateWithWhereUniqueWithoutChampionsInput | Prisma.favorite_championsUpdateWithWhereUniqueWithoutChampionsInput[];
    updateMany?: Prisma.favorite_championsUpdateManyWithWhereWithoutChampionsInput | Prisma.favorite_championsUpdateManyWithWhereWithoutChampionsInput[];
    deleteMany?: Prisma.favorite_championsScalarWhereInput | Prisma.favorite_championsScalarWhereInput[];
};
export type favorite_championsCreateNestedManyWithoutPlayersInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutPlayersInput, Prisma.favorite_championsUncheckedCreateWithoutPlayersInput> | Prisma.favorite_championsCreateWithoutPlayersInput[] | Prisma.favorite_championsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutPlayersInput | Prisma.favorite_championsCreateOrConnectWithoutPlayersInput[];
    createMany?: Prisma.favorite_championsCreateManyPlayersInputEnvelope;
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
};
export type favorite_championsUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutPlayersInput, Prisma.favorite_championsUncheckedCreateWithoutPlayersInput> | Prisma.favorite_championsCreateWithoutPlayersInput[] | Prisma.favorite_championsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutPlayersInput | Prisma.favorite_championsCreateOrConnectWithoutPlayersInput[];
    createMany?: Prisma.favorite_championsCreateManyPlayersInputEnvelope;
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
};
export type favorite_championsUpdateManyWithoutPlayersNestedInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutPlayersInput, Prisma.favorite_championsUncheckedCreateWithoutPlayersInput> | Prisma.favorite_championsCreateWithoutPlayersInput[] | Prisma.favorite_championsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutPlayersInput | Prisma.favorite_championsCreateOrConnectWithoutPlayersInput[];
    upsert?: Prisma.favorite_championsUpsertWithWhereUniqueWithoutPlayersInput | Prisma.favorite_championsUpsertWithWhereUniqueWithoutPlayersInput[];
    createMany?: Prisma.favorite_championsCreateManyPlayersInputEnvelope;
    set?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    disconnect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    delete?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    update?: Prisma.favorite_championsUpdateWithWhereUniqueWithoutPlayersInput | Prisma.favorite_championsUpdateWithWhereUniqueWithoutPlayersInput[];
    updateMany?: Prisma.favorite_championsUpdateManyWithWhereWithoutPlayersInput | Prisma.favorite_championsUpdateManyWithWhereWithoutPlayersInput[];
    deleteMany?: Prisma.favorite_championsScalarWhereInput | Prisma.favorite_championsScalarWhereInput[];
};
export type favorite_championsUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: Prisma.XOR<Prisma.favorite_championsCreateWithoutPlayersInput, Prisma.favorite_championsUncheckedCreateWithoutPlayersInput> | Prisma.favorite_championsCreateWithoutPlayersInput[] | Prisma.favorite_championsUncheckedCreateWithoutPlayersInput[];
    connectOrCreate?: Prisma.favorite_championsCreateOrConnectWithoutPlayersInput | Prisma.favorite_championsCreateOrConnectWithoutPlayersInput[];
    upsert?: Prisma.favorite_championsUpsertWithWhereUniqueWithoutPlayersInput | Prisma.favorite_championsUpsertWithWhereUniqueWithoutPlayersInput[];
    createMany?: Prisma.favorite_championsCreateManyPlayersInputEnvelope;
    set?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    disconnect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    delete?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    connect?: Prisma.favorite_championsWhereUniqueInput | Prisma.favorite_championsWhereUniqueInput[];
    update?: Prisma.favorite_championsUpdateWithWhereUniqueWithoutPlayersInput | Prisma.favorite_championsUpdateWithWhereUniqueWithoutPlayersInput[];
    updateMany?: Prisma.favorite_championsUpdateManyWithWhereWithoutPlayersInput | Prisma.favorite_championsUpdateManyWithWhereWithoutPlayersInput[];
    deleteMany?: Prisma.favorite_championsScalarWhereInput | Prisma.favorite_championsScalarWhereInput[];
};
export type favorite_championsCreateWithoutChampionsInput = {
    added_at: Date | string;
    players: Prisma.playersCreateNestedOneWithoutFavorite_championsInput;
};
export type favorite_championsUncheckedCreateWithoutChampionsInput = {
    id?: number;
    player_id: number;
    added_at: Date | string;
};
export type favorite_championsCreateOrConnectWithoutChampionsInput = {
    where: Prisma.favorite_championsWhereUniqueInput;
    create: Prisma.XOR<Prisma.favorite_championsCreateWithoutChampionsInput, Prisma.favorite_championsUncheckedCreateWithoutChampionsInput>;
};
export type favorite_championsCreateManyChampionsInputEnvelope = {
    data: Prisma.favorite_championsCreateManyChampionsInput | Prisma.favorite_championsCreateManyChampionsInput[];
    skipDuplicates?: boolean;
};
export type favorite_championsUpsertWithWhereUniqueWithoutChampionsInput = {
    where: Prisma.favorite_championsWhereUniqueInput;
    update: Prisma.XOR<Prisma.favorite_championsUpdateWithoutChampionsInput, Prisma.favorite_championsUncheckedUpdateWithoutChampionsInput>;
    create: Prisma.XOR<Prisma.favorite_championsCreateWithoutChampionsInput, Prisma.favorite_championsUncheckedCreateWithoutChampionsInput>;
};
export type favorite_championsUpdateWithWhereUniqueWithoutChampionsInput = {
    where: Prisma.favorite_championsWhereUniqueInput;
    data: Prisma.XOR<Prisma.favorite_championsUpdateWithoutChampionsInput, Prisma.favorite_championsUncheckedUpdateWithoutChampionsInput>;
};
export type favorite_championsUpdateManyWithWhereWithoutChampionsInput = {
    where: Prisma.favorite_championsScalarWhereInput;
    data: Prisma.XOR<Prisma.favorite_championsUpdateManyMutationInput, Prisma.favorite_championsUncheckedUpdateManyWithoutChampionsInput>;
};
export type favorite_championsScalarWhereInput = {
    AND?: Prisma.favorite_championsScalarWhereInput | Prisma.favorite_championsScalarWhereInput[];
    OR?: Prisma.favorite_championsScalarWhereInput[];
    NOT?: Prisma.favorite_championsScalarWhereInput | Prisma.favorite_championsScalarWhereInput[];
    id?: Prisma.IntFilter<"favorite_champions"> | number;
    player_id?: Prisma.IntFilter<"favorite_champions"> | number;
    champion_id?: Prisma.IntFilter<"favorite_champions"> | number;
    added_at?: Prisma.DateTimeFilter<"favorite_champions"> | Date | string;
};
export type favorite_championsCreateWithoutPlayersInput = {
    added_at: Date | string;
    champions: Prisma.championsCreateNestedOneWithoutFavorite_championsInput;
};
export type favorite_championsUncheckedCreateWithoutPlayersInput = {
    id?: number;
    champion_id: number;
    added_at: Date | string;
};
export type favorite_championsCreateOrConnectWithoutPlayersInput = {
    where: Prisma.favorite_championsWhereUniqueInput;
    create: Prisma.XOR<Prisma.favorite_championsCreateWithoutPlayersInput, Prisma.favorite_championsUncheckedCreateWithoutPlayersInput>;
};
export type favorite_championsCreateManyPlayersInputEnvelope = {
    data: Prisma.favorite_championsCreateManyPlayersInput | Prisma.favorite_championsCreateManyPlayersInput[];
    skipDuplicates?: boolean;
};
export type favorite_championsUpsertWithWhereUniqueWithoutPlayersInput = {
    where: Prisma.favorite_championsWhereUniqueInput;
    update: Prisma.XOR<Prisma.favorite_championsUpdateWithoutPlayersInput, Prisma.favorite_championsUncheckedUpdateWithoutPlayersInput>;
    create: Prisma.XOR<Prisma.favorite_championsCreateWithoutPlayersInput, Prisma.favorite_championsUncheckedCreateWithoutPlayersInput>;
};
export type favorite_championsUpdateWithWhereUniqueWithoutPlayersInput = {
    where: Prisma.favorite_championsWhereUniqueInput;
    data: Prisma.XOR<Prisma.favorite_championsUpdateWithoutPlayersInput, Prisma.favorite_championsUncheckedUpdateWithoutPlayersInput>;
};
export type favorite_championsUpdateManyWithWhereWithoutPlayersInput = {
    where: Prisma.favorite_championsScalarWhereInput;
    data: Prisma.XOR<Prisma.favorite_championsUpdateManyMutationInput, Prisma.favorite_championsUncheckedUpdateManyWithoutPlayersInput>;
};
export type favorite_championsCreateManyChampionsInput = {
    id?: number;
    player_id: number;
    added_at: Date | string;
};
export type favorite_championsUpdateWithoutChampionsInput = {
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    players?: Prisma.playersUpdateOneRequiredWithoutFavorite_championsNestedInput;
};
export type favorite_championsUncheckedUpdateWithoutChampionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type favorite_championsUncheckedUpdateManyWithoutChampionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    player_id?: Prisma.IntFieldUpdateOperationsInput | number;
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type favorite_championsCreateManyPlayersInput = {
    id?: number;
    champion_id: number;
    added_at: Date | string;
};
export type favorite_championsUpdateWithoutPlayersInput = {
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    champions?: Prisma.championsUpdateOneRequiredWithoutFavorite_championsNestedInput;
};
export type favorite_championsUncheckedUpdateWithoutPlayersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type favorite_championsUncheckedUpdateManyWithoutPlayersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    champion_id?: Prisma.IntFieldUpdateOperationsInput | number;
    added_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type favorite_championsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    added_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["favorite_champions"]>;
export type favorite_championsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    added_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["favorite_champions"]>;
export type favorite_championsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    added_at?: boolean;
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["favorite_champions"]>;
export type favorite_championsSelectScalar = {
    id?: boolean;
    player_id?: boolean;
    champion_id?: boolean;
    added_at?: boolean;
};
export type favorite_championsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "player_id" | "champion_id" | "added_at", ExtArgs["result"]["favorite_champions"]>;
export type favorite_championsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
};
export type favorite_championsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
};
export type favorite_championsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    champions?: boolean | Prisma.championsDefaultArgs<ExtArgs>;
    players?: boolean | Prisma.playersDefaultArgs<ExtArgs>;
};
export type $favorite_championsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "favorite_champions";
    objects: {
        champions: Prisma.$championsPayload<ExtArgs>;
        players: Prisma.$playersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        player_id: number;
        champion_id: number;
        added_at: Date;
    }, ExtArgs["result"]["favorite_champions"]>;
    composites: {};
};
export type favorite_championsGetPayload<S extends boolean | null | undefined | favorite_championsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload, S>;
export type favorite_championsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<favorite_championsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Favorite_championsCountAggregateInputType | true;
};
export interface favorite_championsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['favorite_champions'];
        meta: {
            name: 'favorite_champions';
        };
    };
    findUnique<T extends favorite_championsFindUniqueArgs>(args: Prisma.SelectSubset<T, favorite_championsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends favorite_championsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, favorite_championsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends favorite_championsFindFirstArgs>(args?: Prisma.SelectSubset<T, favorite_championsFindFirstArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends favorite_championsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, favorite_championsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends favorite_championsFindManyArgs>(args?: Prisma.SelectSubset<T, favorite_championsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends favorite_championsCreateArgs>(args: Prisma.SelectSubset<T, favorite_championsCreateArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends favorite_championsCreateManyArgs>(args?: Prisma.SelectSubset<T, favorite_championsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends favorite_championsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, favorite_championsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends favorite_championsDeleteArgs>(args: Prisma.SelectSubset<T, favorite_championsDeleteArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends favorite_championsUpdateArgs>(args: Prisma.SelectSubset<T, favorite_championsUpdateArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends favorite_championsDeleteManyArgs>(args?: Prisma.SelectSubset<T, favorite_championsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends favorite_championsUpdateManyArgs>(args: Prisma.SelectSubset<T, favorite_championsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends favorite_championsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, favorite_championsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends favorite_championsUpsertArgs>(args: Prisma.SelectSubset<T, favorite_championsUpsertArgs<ExtArgs>>): Prisma.Prisma__favorite_championsClient<runtime.Types.Result.GetResult<Prisma.$favorite_championsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends favorite_championsCountArgs>(args?: Prisma.Subset<T, favorite_championsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Favorite_championsCountAggregateOutputType> : number>;
    aggregate<T extends Favorite_championsAggregateArgs>(args: Prisma.Subset<T, Favorite_championsAggregateArgs>): Prisma.PrismaPromise<GetFavorite_championsAggregateType<T>>;
    groupBy<T extends favorite_championsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: favorite_championsGroupByArgs['orderBy'];
    } : {
        orderBy?: favorite_championsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, favorite_championsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavorite_championsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: favorite_championsFieldRefs;
}
export interface Prisma__favorite_championsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    champions<T extends Prisma.championsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.championsDefaultArgs<ExtArgs>>): Prisma.Prisma__championsClient<runtime.Types.Result.GetResult<Prisma.$championsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    players<T extends Prisma.playersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.playersDefaultArgs<ExtArgs>>): Prisma.Prisma__playersClient<runtime.Types.Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface favorite_championsFieldRefs {
    readonly id: Prisma.FieldRef<"favorite_champions", 'Int'>;
    readonly player_id: Prisma.FieldRef<"favorite_champions", 'Int'>;
    readonly champion_id: Prisma.FieldRef<"favorite_champions", 'Int'>;
    readonly added_at: Prisma.FieldRef<"favorite_champions", 'DateTime'>;
}
export type favorite_championsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    where: Prisma.favorite_championsWhereUniqueInput;
};
export type favorite_championsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    where: Prisma.favorite_championsWhereUniqueInput;
};
export type favorite_championsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type favorite_championsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type favorite_championsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type favorite_championsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.favorite_championsCreateInput, Prisma.favorite_championsUncheckedCreateInput>;
};
export type favorite_championsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.favorite_championsCreateManyInput | Prisma.favorite_championsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type favorite_championsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    data: Prisma.favorite_championsCreateManyInput | Prisma.favorite_championsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.favorite_championsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type favorite_championsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.favorite_championsUpdateInput, Prisma.favorite_championsUncheckedUpdateInput>;
    where: Prisma.favorite_championsWhereUniqueInput;
};
export type favorite_championsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.favorite_championsUpdateManyMutationInput, Prisma.favorite_championsUncheckedUpdateManyInput>;
    where?: Prisma.favorite_championsWhereInput;
    limit?: number;
};
export type favorite_championsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.favorite_championsUpdateManyMutationInput, Prisma.favorite_championsUncheckedUpdateManyInput>;
    where?: Prisma.favorite_championsWhereInput;
    limit?: number;
    include?: Prisma.favorite_championsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type favorite_championsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    where: Prisma.favorite_championsWhereUniqueInput;
    create: Prisma.XOR<Prisma.favorite_championsCreateInput, Prisma.favorite_championsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.favorite_championsUpdateInput, Prisma.favorite_championsUncheckedUpdateInput>;
};
export type favorite_championsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
    where: Prisma.favorite_championsWhereUniqueInput;
};
export type favorite_championsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.favorite_championsWhereInput;
    limit?: number;
};
export type favorite_championsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.favorite_championsSelect<ExtArgs> | null;
    omit?: Prisma.favorite_championsOmit<ExtArgs> | null;
    include?: Prisma.favorite_championsInclude<ExtArgs> | null;
};
export {};
