var data = [
    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/520d_xdrive_197cv_electrico____hibrido/110601/720844420231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/520da_xdrive_190cv_electrico____hibrido/54428/620844420230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/530e_292cv_electrico____hibrido/93200/680367120230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/530e_299cv_electrico____hibrido/93200/838725320231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/530da_xdrive_286cv_electrico____hibrido/47626/407450520230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/530e_xdrive_292cv_electrico____hibrido/93202/410678420230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/545e_xdrive_394cv_electrico____hibrido/99734/421305120230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/550e_xdrive_490cv_electrico____hibrido/110144/838725420231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/m550ia_xdrive_530cv_gasolina/93201/410678320230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/m5_600cv_gasolina/1102/688401120230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/m5_competition_625cv_gasolina/96896/416585820230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_7/berlina/4-puertas/740d_xdrive_299cv_electrico____hibrido/42909/760413020231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_7/berlina/4-puertas/750e_xdrive_489cv_electrico____hibrido/107954/834574520231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_7/berlina/4-puertas/m760e_xdrive_571cv_electrico____hibrido/107955/834574620231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/berlina/4-puertas/840i_gran_coupe_333cv_gasolina/95786/821361020230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/berlina/4-puertas/840d_xdrive_gran_coupe_340cv_electrico____hibrido/95789/821361120230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/berlina/4-puertas/m850i_xdrive_gran_coupe_530cv_gasolina/95788/811569220230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/berlina/4-puertas/m8_competition_gran_coupe_625cv_gasolina/96936/816592420230701/",

    "https://www.coches.net/fichas_tecnicas/bmw/i4/berlina/5-puertas/edrive35_286cv_electrico____hibrido/108293/835157520231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/i4/berlina/5-puertas/edrive40_340cv_electrico____hibrido/102238/826901920231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/i4/berlina/5-puertas/m50_544cv_electrico____hibrido/102239/826902020231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/116d_116cv_diesel/36998/771982820231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/118i_136cv_gasolina/12571/82512520220601/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/118i_136cv_gasolina/12571/82512520231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/116d_corporate_auto_116cv_diesel/102395/827086420231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/118i_corporate_auto_136cv_gasolina/102396/827086520231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/118d_150cv_diesel/12508/82512720220601/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/118d_150cv_diesel/12508/82512720231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/118d_business_150cv_diesel/97750/818334420231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/120i_178cv_gasolina/12507/820957320220601/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/120i_178cv_gasolina/12507/820957320231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/118d_business_auto_150cv_diesel/97752/818334620231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/120d_190cv_diesel/12509/815719320220301/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/120d_190cv_diesel/12509/815719320231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/128ti_265cv_gasolina/99627/821656620220301/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/128ti_265cv_gasolina/99627/821656620231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/m135i_306cv_gasolina/51036/809962520220301/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_1/berlina/5-puertas/m135i_306cv_gasolina/51036/809962520231101/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/420i_gran_coupe_184cv_gasolina/58101/827087820220601/",

    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/420i_gran_coupe_184cv_gasolina/58101/827087820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/420d_gran_coupe_190cv_electrico____hibrido/58098/827088120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/430i_gran_coupe_245cv_gasolina/67682/827087920220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/430i_gran_coupe_245cv_gasolina/67682/827087920231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/430i_xdrive_gran_coupe_245cv_gasolina/67688/831096820220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/430d_xdrive_gran_coupe_286cv_electrico____hibrido/105440/832714620231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/m440i_gran_coupe_374cv_electrico____hibrido/105439/832714520231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/berlina/5-puertas/m440i_xdrive_gran_coupe_374cv_electrico____hibrido/105434/827088020231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_6/berlina/5-puertas/630d_xdrive_gran_turismo_286cv_electrico____hibrido/82068/794110620230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_6/berlina/5-puertas/640i_xdrive_gran_turismo_333cv_electrico____hibrido/82069/796794920230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/330i_touring_252cv_gasolina/1577/712990220200701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/318d_autotouring_150cv_electrico____hibrido/97749/818277120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/320i_auto_touring_184cv_gasolina/95746/813457820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/320d_autotouring_190cv_electrico____hibrido/92813/810444220231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/320d_xdrive_automatica_touring_190cv_electrico____hibrido/68519/753363320231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/330i_auto_touring_245cv_gasolina/80979/784785820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/320e_xdrive_touring_204cv_electrico____hibrido/108913/836241620231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/330e_xdrive_touring_292cv_electrico____hibrido/97753/818842720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/m340d_xdrive_auto_touring_340cv_electrico____hibrido/96893/816218220231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/m340i_xdrive_auto_touring_374cv_electrico____hibrido/95747/813457920231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_3/familiar/5-puertas/m3_comp_touring_m_xdrive_510cv_gasolina/107911/834520320231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/familiar/5-puertas/520ia_touring_184cv_electrico____hibrido/2260/818288020230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/familiar/5-puertas/520da_touring_190cv_electrico____hibrido/60628/700266820230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/familiar/5-puertas/520da_xdrive_touring_190cv_electrico____hibrido/54426/785073520230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/familiar/5-puertas/530e_touring_292cv_electrico____hibrido/99735/821310720230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/familiar/5-puertas/530e_xdrive_touring_292cv_electrico____hibrido/99736/821310820230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_5/familiar/5-puertas/530da_xdrive_touring_286cv_electrico____hibrido/47628/818288320230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_active_tourer/monovolumen/5-puertas/218i_136cv_gasolina/62876/828765720220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_active_tourer/monovolumen/5-puertas/218d_150cv_diesel/62874/828765820220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_active_tourer/monovolumen/5-puertas/218i_136cv_gasolina/62876/828765720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_active_tourer/monovolumen/5-puertas/218d_150cv_diesel/62874/828765820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_active_tourer/monovolumen/5-puertas/220i_170cv_electrico____hibrido/102996/738639920231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_active_tourer/monovolumen/5-puertas/225e_xdrive_245cv_electrico____hibrido/105452/832663020231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_active_tourer/monovolumen/5-puertas/230e_xdrive_326cv_electrico____hibrido/105453/832663120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_gran_tourer/monovolumen/5-puertas/216d_116cv_diesel/62907/748388320220301/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_gran_tourer/monovolumen/5-puertas/218i_136cv_gasolina/62910/794963520220301/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_gran_tourer/monovolumen/5-puertas/218d_150cv_diesel/62906/748388220220301/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_gran_tourer/monovolumen/5-puertas/220ia_178cv_gasolina/62908/748388420220301/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2_gran_tourer/monovolumen/5-puertas/220da_190cv_diesel/64470/753477220220301/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/218ia_156cv_gasolina/105441/832720720231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/220ia_184cv_gasolina/80964/784753720220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/220ia_184cv_gasolina/80964/784753720231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/230ia_245cv_gasolina/80965/831039920220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/230ia_245cv_gasolina/80965/831039920231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/220da_190cv_electrico____hibrido/90752/827618420231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/m240ia_374cv_gasolina/86471/832720820231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/m240ia_xdrive_374cv_gasolina/69890/827618320220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/m240ia_xdrive_374cv_gasolina/69890/827618320231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_2/coupe/2-puertas/m2_460cv_gasolina/66865/834690820231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/420i_184cv_gasolina/55812/818738320220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/420i_184cv_gasolina/55812/818738320231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/420d_190cv_electrico____hibrido/54453/810174720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/430i_245cv_gasolina/67680/784754420220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/430i_245cv_gasolina/67680/784754420231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/430i_xdrive_245cv_gasolina/67681/826742720220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/430d_xdrive_286cv_electrico____hibrido/57139/824329820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/m440i_374cv_electrico____hibrido/102397/826742820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/m440i_xdrive_374cv_electrico____hibrido/97691/818738420231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/m440d_xdrive_340cv_electrico____hibrido/101059/824329920231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/m4_competition_510cv_gasolina/99628/821022720220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/m4_competition_m_xdrive_510cv_gasolina/102398/826742920220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/m4_competition_510cv_gasolina/99628/821022720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/coupe/2-puertas/m4_competition_m_xdrive_510cv_gasolina/102398/826742920231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/coupe/2-puertas/840i_333cv_gasolina/93602/811116820230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/coupe/2-puertas/840d_xdrive_340cv_electrico____hibrido/86832/740808220230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/coupe/2-puertas/m850i_xdrive_530cv_gasolina/86831/740799020230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/coupe/2-puertas/m8_competition_625cv_gasolina/93601/811135420230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/420i_cabrio_184cv_gasolina/105432/799972120220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/420i_cabrio_184cv_gasolina/105432/799972120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/420d_cabrio_190cv_electrico____hibrido/105430/761162120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/430i_cabrio_245cv_gasolina/105431/784754520220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/430i_cabrio_245cv_gasolina/105431/784754520231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/430i_xdrive_cabrio_245cv_gasolina/105436/828539920220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/m440i_cabrio_374cv_electrico____hibrido/105437/828540020231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/m440d_xdrive_cabrio_340cv_electrico____hibrido/105438/828540120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/m440i_xdrive_cabrio_374cv_electrico____hibrido/105433/821077020231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/m4_competition_m_xdrive_cabrio_510cv_gasolina/105435/827260120220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_4/cabrio/2-puertas/m4_competition_m_xdrive_cabrio_510cv_gasolina/105435/827260120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/cabrio/2-puertas/840i_333cv_gasolina/93602/811135220230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/cabrio/2-puertas/840d_xdrive_340cv_electrico____hibrido/86832/804167120230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/cabrio/2-puertas/m850i_xdrive_530cv_gasolina/86831/804167020230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/serie_8/cabrio/2-puertas/m8_competition_625cv_gasolina/93601/811135520230701/",
    "https://www.coches.net/fichas_tecnicas/bmw/z4/cabrio/2-puertas/sdrive20i_197cv_gasolina/47630/810165920220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/z4/cabrio/2-puertas/sdrive20i_197cv_gasolina/47630/810165920231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/z4/cabrio/2-puertas/sdrive30i_258cv_gasolina/36861/802332620231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/z4/cabrio/2-puertas/m40i_340cv_gasolina/88371/802332720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/ix/4x4/5-puertas/xdrive40_326cv_electrico____hibrido/101370/825589620231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/ix/4x4/5-puertas/xdrive50_523cv_electrico____hibrido/101369/825589520231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/ix/4x4/5-puertas/m60_619cv_electrico____hibrido/104472/830939520231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/ix1/4x4/5-puertas/edrive20_204cv_electrico____hibrido/110117/838683420230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/ix1/4x4/5-puertas/xdrive30_313cv_electrico____hibrido/107775/834372320230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/ix2/4x4/5-puertas/xdrive30_313cv_electrico____hibrido/110168/838995120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/ix3/4x4/5-puertas/ix3_m_sport_286cv_electrico____hibrido/107516/819528920231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x1/4x4/5-puertas/sdrive18i_136cv_gasolina/50859/832983620230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/x1/4x4/5-puertas/sdrive18d_150cv_diesel/39116/832983720230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/x1/4x4/5-puertas/sdrive20i_170cv_electrico____hibrido/47632/834371920230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/x1/4x4/5-puertas/xdrive20d_163cv_electrico____hibrido/39119/834372020230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/x1/4x4/5-puertas/xdrive25e_245cv_electrico____hibrido/96889/834372120230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/x1/4x4/5-puertas/xdrive30e_326cv_electrico____hibrido/107774/834372220230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/x1/4x4/5-puertas/m35i_xdrive_300cv_gasolina/110116/838683320230927/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive16d_116cv_diesel/88515/802427820220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive18d_150cv_diesel/84513/794800120220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive16d_business_116cv_diesel/97063/817121220220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive18i_136cv_gasolina/84512/794793420220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive18d_business_150cv_diesel/97064/817121320220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/xdrive18da_150cv_diesel/102909/794800220220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive18da_business_150cv_diesel/102912/817121420220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive20i_dct_178cv_gasolina/83449/790774520220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive20da_190cv_diesel/88516/802427920220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/xdrive20ia_178cv_gasolina/102911/810166220220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive18d_dct_150cv_diesel/110167/838995020231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/xdrive20da_190cv_diesel/83450/790774620220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/sdrive20i_dct_170cv_electrico____hibrido/83449/790774520231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/xdrive25da_231cv_diesel/94502/810166320220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/m35ia_306cv_gasolina/102913/807061820220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x2/4x4/5-puertas/m35ia_300cv_gasolina/102913/807061820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/sdrive18d_xline_150cv_electrico____hibrido/102708/806752820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/xdrive20i_xline_184cv_electrico____hibrido/102706/789828320231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/xdrive20d_xline_190cv_electrico____hibrido/102704/785739820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/xdrive30d_xline_286cv_electrico____hibrido/102707/802861720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/xdrive30e_xline_292cv_electrico____hibrido/102709/813459820231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/m40i_360cv_electrico____hibrido/82051/785739720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/m40d_340cv_electrico____hibrido/86467/799972520231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/m_480cv_gasolina/90749/807068120220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/m_480cv_gasolina/90749/807068120231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/m_competition_510cv_gasolina/96894/816222720220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x3/4x4/5-puertas/m_competition_510cv_gasolina/96894/816222720231101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/xdrive20i_xline_184cv_electrico____hibrido/102681/729343920231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/xdrive20d_xline_190cv_electrico____hibrido/102682/729344020231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/xdrive30d_xline_286cv_electrico____hibrido/102683/799972220231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/m40i_xdrive_360cv_electrico____hibrido/102404/799972320231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/m40d_xdrive_340cv_electrico____hibrido/102403/795601220231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/m_480cv_gasolina/90745/807149320220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/m_480cv_gasolina/90745/807149320231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/m_competition_510cv_gasolina/96890/816368920220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x4/4x4/5-puertas/m_competition_510cv_gasolina/96890/816368920231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/xdrive30d_286cv_electrico____hibrido/35752/818289820221201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/xdrive30d_xline_298cv_electrico____hibrido/108823/818289820231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/xdrive40i_xline_381cv_electrico____hibrido/108824/821324520231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/xdrive40d_xline_352cv_electrico____hibrido/109296/837323920231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/xdrive50e_xline_489cv_electrico____hibrido/108825/836093420231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/m60i_xdrive_530cv_electrico____hibrido/108822/810230120231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/m_600cv_gasolina/39152/813661320221101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/m_600cv_gasolina/39152/813661320221201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x5/4x4/5-puertas/m_competition_625cv_electrico____hibrido/96897/816592220231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/xdrive40d_340cv_electrico____hibrido/41081/816779320230101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/xdrive30d_m_sport_286cv_electrico____hibrido/108826/761162520231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/xdrive40i_m_sport_381cv_electrico____hibrido/108827/811353820231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/xdrive40d_m_sport_352cv_electrico____hibrido/109298/837325420231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/m50i_530cv_gasolina/93954/811353920220301/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/m50i_530cv_gasolina/93954/811353920230101/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/m60i_xdrive_530cv_electrico____hibrido/108828/836094120231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/m_600cv_gasolina/39153/813505520220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/m_competition_625cv_gasolina/96895/816216520220601/",
    "https://www.coches.net/fichas_tecnicas/bmw/x6/4x4/5-puertas/m_competition_625cv_electrico____hibrido/96895/816216520231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x7/4x4/5-puertas/xdrive40i_381cv_electrico____hibrido/88494/803287620231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x7/4x4/5-puertas/xdrive40d_352cv_electrico____hibrido/97879/818304520231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/x7/4x4/5-puertas/m50i_530cv_gasolina/92949/810151520220301/",
    "https://www.coches.net/fichas_tecnicas/bmw/x7/4x4/5-puertas/m60i_xdrive_530cv_electrico____hibrido/105454/810151520231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/xm/4x4/5-puertas/xm_480_kw_653_cv_653cv_electrico____hibrido/109390/834581220231201/",
    "https://www.coches.net/fichas_tecnicas/bmw/xm/4x4/5-puertas/xm_550_kw_748_cv_label_red_748cv_electrico____hibrido/109391/837439220231201/"]