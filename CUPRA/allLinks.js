var data=["https://www.coches.net/fichas_tecnicas/cupra/born/berlina/5-puertas/150kw_204_cv_58kwh_204cv_electrico____hibrido/103816/828265720230803/","https://www.coches.net/fichas_tecnicas/cupra/born/berlina/5-puertas/170kw_231_cv_58kwh_eboost_pack_231cv_electrico____hibrido/104699/832104020230803/","https://www.coches.net/fichas_tecnicas/cupra/born/berlina/5-puertas/170kw_231_cv_77kwh_eboost_packbatter_231cv_electrico____hibrido/104866/834215620230803/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/15_etsi_110kw_150cv_dsg_150cv_electrico____hibrido/107711/834159120231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/20_tsi_140kw_190cv_dsg_190cv_gasolina/107999/834675820231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/14_ehybrid_150kw_204cv_dsg_204cv_electrico____hibrido/101317/825441920231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/vz_20_tsi_180kw_245_cv_dsg_245cv_gasolina/105374/837532420231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/vz_14_ehybrid_180kw_245cv_dsg_245cv_electrico____hibrido/105371/821673220231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/vz_20_tsi_221kw_300_cv_dsg_300cv_gasolina/105373/825196420231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/vz_cup_14_ehybrid_180kw_dsg_negro_245cv_electrico____hibrido/105784/833513520231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/vz_cup_14_ehybrid_180kw_dsg_azul_245cv_electrico____hibrido/105786/833513920231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/vz_cup_20_tsi_221kw_dsg_negro_300cv_gasolina/105788/833514320231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/berlina/5-puertas/vz_cup_20_tsi_221kw_dsg_azul_300cv_gasolina/105790/833514720231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_15_etsi_110kw_150cv_dsg_150cv_electrico____hibrido/107998/834675920231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_20_tsi_140kw_190cv_dsg_190cv_gasolina/108000/834676020231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_14_ehybrid_150kw_204cv_dsg_204cv_electrico____hibrido/101318/825442020231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_20_tsi_180kw_245_cv_dsg_245cv_gasolina/105633/837532520231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_14_ehybrid_180kw_245cv_dsg_245cv_electrico____hibrido/105372/821673320231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_20_tsi_221kw_300_cv_dsg_300cv_gasolina/105634/827002220231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_20_tsi_228kw_310_cv_4drive_dsg_310cv_gasolina/105632/825196520231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_cup_14_ehybrid_180kw_dsg_negro_245cv_electrico____hibrido/105785/833513620231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_cup_14_ehybrid_180kw_dsg_azul_245cv_electrico____hibrido/105787/833514020231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_cup_20_tsi_228kw_4drive_dsg_negr_310cv_gasolina/105792/833515020231123/","https://www.coches.net/fichas_tecnicas/cupra/leon/familiar/5-puertas/sp_vz_cup_20_tsi_228kw_4drive_dsg_azul_310cv_gasolina/105793/833515220231123/","https://www.coches.net/fichas_tecnicas/cupra/ateca/4x4/5-puertas/20_tsi_140kw_190cv_4drive_dsg_190cv_gasolina/109462/837634720240102/","https://www.coches.net/fichas_tecnicas/cupra/ateca/4x4/5-puertas/20_tsi_221kw_300cv_4drive_dsg_vz_300cv_gasolina/108949/836435920240102/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/15_tsi_110kw_150_cv_150cv_gasolina/99362/821714520231123/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/15_tsi_110kw_150_cv_dsg_150cv_gasolina/99363/821714620231123/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/14_ehybrid_150kw_204_cv_dsg_204cv_electrico____hibrido/101210/825212520231123/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/20_tsi_140kw_190_cv_4drive_dsg_190cv_gasolina/101319/825452720231123/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/20_tdi_110kw_150_cv_4drive_dsg_150cv_diesel/101480/825453020231123/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/20_tsi_180kw_245_cv_vz_dsg_245cv_gasolina/101320/825452820231123/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/14_ehybrid_180kw_245_cv_vz_dsg_245cv_electrico____hibrido/100912/824492020231123/","https://www.coches.net/fichas_tecnicas/cupra/formentor/4x4/5-puertas/20_tsi_228kw_310_cv_vz_4drive_dsg_310cv_gasolina/100104/820360520231123/"]