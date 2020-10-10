function createmaps() {

 {

  var CityData = data;

  var FilterCity = d3.select("#city-sel").property("value");

  if (FilterCity === "Kabul") { x = 0, lat = 34.53, lng =69.17}
  else if (FilterCity === "Kandahar") { x = 1, lat = 31.61, lng =65.71}
  else if (FilterCity === "Herat") { x = 2, lat = 34.35, lng =62.2}
  else if (FilterCity === "Tiranë (Tirana)") { x = 3, lat = 41.33, lng =19.82}
  else if (FilterCity === "El Djazaïr (Algiers)") { x = 4, lat = 36.75, lng =3.04}
  else if (FilterCity === "Wahran (Oran)") { x = 5, lat = 35.69, lng =-0.64}
  else if (FilterCity === "Qacentina") { x = 6, lat = 36.35, lng =6.61}
  else if (FilterCity === "Blida") { x = 7, lat = 36.48, lng =2.83}
  else if (FilterCity === "El Djelfa") { x = 8, lat = 34.67, lng =3.26}
  else if (FilterCity === "Annaba") { x = 9, lat = 36.9, lng =7.77}
  else if (FilterCity === "Batna") { x = 10, lat = 35.56, lng =6.17}
  else if (FilterCity === "Luanda") { x = 11, lat = -8.84, lng =13.23}
  else if (FilterCity === "Huambo") { x = 12, lat = -12.78, lng =15.74}
  else if (FilterCity === "Lubango") { x = 13, lat = -14.92, lng =13.49}
  else if (FilterCity === "Baku") { x = 14, lat = 40.38, lng =49.89}
  else if (FilterCity === "Sumquayit") { x = 15, lat = 40.59, lng =49.67}
  else if (FilterCity === "Gäncä") { x = 16, lat = 40.68, lng =46.36}
  else if (FilterCity === "Buenos Aires") { x = 17, lat = -34.61, lng =-58.4}
  else if (FilterCity === "Córdoba") { x = 18, lat = -31.41, lng =-64.18}
  else if (FilterCity === "Rosario") { x = 19, lat = -32.95, lng =-60.64}
  else if (FilterCity === "Mendoza") { x = 20, lat = -32.89, lng =-68.83}
  else if (FilterCity === "San Miguel de Tucumán") { x = 21, lat = -26.82, lng =-65.22}
  else if (FilterCity === "La Plata") { x = 22, lat = -34.92, lng =-57.95}
  else if (FilterCity === "Santa Fe") { x = 23, lat = -31.63, lng =-60.7}
  else if (FilterCity === "Mar Del Plata") { x = 24, lat = -38, lng =-57.56}
  else if (FilterCity === "Salta") { x = 25, lat = -24.79, lng =-65.41}
  else if (FilterCity === "San Juan") { x = 26, lat = -31.54, lng =-68.54}
  else if (FilterCity === "Resistencia") { x = 27, lat = -27.46, lng =-58.98}
  else if (FilterCity === "Santiago Del Estero") { x = 28, lat = -27.8, lng =-64.26}
  else if (FilterCity === "Corrientes") { x = 29, lat = -27.48, lng =-58.83}
  else if (FilterCity === "Neuquén-Plottier-Cipolletti") { x = 30, lat = -38.95, lng =-68.06}
  else if (FilterCity === "San Salvador de Jujuy") { x = 31, lat = -24.19, lng =-65.3}
  else if (FilterCity === "Bahia Blanca") { x = 32, lat = -38.72, lng =-62.27}
  else if (FilterCity === "Posadas") { x = 33, lat = -27.37, lng =-55.9}
  else if (FilterCity === "Sydney") { x = 34, lat = -33.87, lng =151.21}
  else if (FilterCity === "Melbourne") { x = 35, lat = -37.81, lng =144.96}
  else if (FilterCity === "Brisbane") { x = 36, lat = -27.47, lng =153.03}
  else if (FilterCity === "Perth") { x = 37, lat = -31.95, lng =115.85}
  else if (FilterCity === "Adelaide") { x = 38, lat = -34.93, lng =138.6}
  else if (FilterCity === "Gold Coast") { x = 39, lat = -28, lng =153.43}
  else if (FilterCity === "Canberra") { x = 40, lat = -35.28, lng =149.13}
  else if (FilterCity === "Newcastle and Lake Macquarie") { x = 41, lat = -32.92, lng =151.74}
  else if (FilterCity === "Sunshine Coast") { x = 42, lat = -26.66, lng =153.1}
  else if (FilterCity === "Wien (Vienna)") { x = 43, lat = 48.21, lng =16.37}
  else if (FilterCity === "Al-Manamah (Manama)") { x = 44, lat = 26.22, lng =50.58}
  else if (FilterCity === "Dhaka") { x = 45, lat = 23.71, lng =90.41}
  else if (FilterCity === "Chittagong") { x = 46, lat = 22.33, lng =91.84}
  else if (FilterCity === "Khulna") { x = 47, lat = 22.81, lng =89.56}
  else if (FilterCity === "Rajshahi") { x = 48, lat = 24.37, lng =88.6}
  else if (FilterCity === "Sylhet") { x = 49, lat = 24.9, lng =91.87}
  else if (FilterCity === "Bogra") { x = 50, lat = 24.85, lng =89.37}
  else if (FilterCity === "Comilla") { x = 51, lat = 23.46, lng =91.2}
  else if (FilterCity === "Mymensingh") { x = 52, lat = 24.75, lng =90.4}
  else if (FilterCity === "Barisal") { x = 53, lat = 22.7, lng =90.37}
  else if (FilterCity === "Rangpur") { x = 54, lat = 25.75, lng =89.25}
  else if (FilterCity === "Yerevan") { x = 55, lat = 40.18, lng =44.51}
  else if (FilterCity === "Bruxelles-Brussel") { x = 56, lat = 50.85, lng =4.35}
  else if (FilterCity === "Antwerpen") { x = 57, lat = 51.22, lng =4.4}
  else if (FilterCity === "Liège") { x = 58, lat = 50.63, lng =5.57}
  else if (FilterCity === "Gent") { x = 59, lat = 51.05, lng =3.72}
  else if (FilterCity === "Charleroi") { x = 60, lat = 50.41, lng =4.44}
  else if (FilterCity === "Santa Cruz") { x = 61, lat = -17.8, lng =-63.17}
  else if (FilterCity === "La Paz") { x = 62, lat = -16.5, lng =-68.15}
  else if (FilterCity === "Cochabamba") { x = 63, lat = -17.39, lng =-66.16}
  else if (FilterCity === "Sucre") { x = 64, lat = -19.03, lng =-65.26}
  else if (FilterCity === "Sarajevo") { x = 65, lat = 43.85, lng =18.36}
  else if (FilterCity === "São Paulo") { x = 66, lat = -23.55, lng =-46.64}
  else if (FilterCity === "Rio de Janeiro") { x = 67, lat = -22.9, lng =-43.21}
  else if (FilterCity === "Belo Horizonte") { x = 68, lat = -19.92, lng =-43.94}
  else if (FilterCity === "Brasília") { x = 69, lat = -15.78, lng =-47.93}
  else if (FilterCity === "Fortaleza") { x = 70, lat = -3.74, lng =-38.54}
  else if (FilterCity === "Recife") { x = 71, lat = -8.05, lng =-34.88}
  else if (FilterCity === "Pôrto Alegre") { x = 72, lat = -30.03, lng =-51.23}
  else if (FilterCity === "Salvador") { x = 73, lat = -12.97, lng =-38.51}
  else if (FilterCity === "Curitiba") { x = 74, lat = -25.43, lng =-49.27}
  else if (FilterCity === "Campinas") { x = 75, lat = -22.91, lng =-47.07}
  else if (FilterCity === "Goiânia") { x = 76, lat = -16.68, lng =-49.25}
  else if (FilterCity === "Belém") { x = 77, lat = -1.46, lng =-48.48}
  else if (FilterCity === "Manaus") { x = 78, lat = -3.1, lng =-60.03}
  else if (FilterCity === "Grande Vitória") { x = 79, lat = -20.31, lng =-40.31}
  else if (FilterCity === "Baixada Santista") { x = 80, lat = -23.96, lng =-46.33}
  else if (FilterCity === "Grande São Luís") { x = 81, lat = -2.54, lng =-44.28}
  else if (FilterCity === "Maceió") { x = 82, lat = -9.67, lng =-35.74}
  else if (FilterCity === "Joinville") { x = 83, lat = -26.3, lng =-48.85}
  else if (FilterCity === "Florianópolis") { x = 84, lat = -27.6, lng =-48.55}
  else if (FilterCity === "Natal") { x = 85, lat = -5.8, lng =-35.21}
  else if (FilterCity === "João Pessoa") { x = 86, lat = -7.12, lng =-34.86}
  else if (FilterCity === "Teresina") { x = 87, lat = -5.09, lng =-42.8}
  else if (FilterCity === "Campo Grande") { x = 88, lat = -20.46, lng =-54.62}
  else if (FilterCity === "Aracaju") { x = 89, lat = -10.91, lng =-37.07}
  else if (FilterCity === "Londrina") { x = 90, lat = -23.31, lng =-51.16}
  else if (FilterCity === "Sorocaba") { x = 91, lat = -23.5, lng =-47.46}
  else if (FilterCity === "Ribeirão Preto") { x = 92, lat = -21.18, lng =-47.81}
  else if (FilterCity === "Uberlândia") { x = 93, lat = -18.92, lng =-48.28}
  else if (FilterCity === "Jundiaí") { x = 94, lat = -23.19, lng =-46.89}
  else if (FilterCity === "Cuiabá") { x = 95, lat = -15.6, lng =-56.1}
  else if (FilterCity === "São José dos Campos") { x = 96, lat = -23.18, lng =-45.89}
  else if (FilterCity === "Feira De Santana") { x = 97, lat = -12.27, lng =-38.97}
  else if (FilterCity === "Juiz De Fora") { x = 98, lat = -21.76, lng =-43.35}
  else if (FilterCity === "Vale do Aço") { x = 99, lat = -19.94, lng =-43.94}
  else if (FilterCity === "Caxias Do Sul") { x = 100, lat = -29.17, lng =-51.18}
  else if (FilterCity === "Pôrto Velho") { x = 101, lat = -8.76, lng =-63.9}
  else if (FilterCity === "Macapá") { x = 102, lat = 0.04, lng =-51.07}
  else if (FilterCity === "Campos dos Goytacazes") { x = 103, lat = -21.77, lng =-41.32}
  else if (FilterCity === "Volta Redonda") { x = 104, lat = -22.52, lng =-44.1}
  else if (FilterCity === "Petrolina") { x = 105, lat = -9.4, lng =-40.5}
  else if (FilterCity === "São José do Rio Preto") { x = 106, lat = -20.82, lng =-49.38}
  else if (FilterCity === "Maringá") { x = 107, lat = -23.43, lng =-51.94}
  else if (FilterCity === "Campina Grande") { x = 108, lat = -7.23, lng =-35.88}
  else if (FilterCity === "Piracicaba") { x = 109, lat = -22.73, lng =-47.65}
  else if (FilterCity === "Montes Claros") { x = 110, lat = -16.74, lng =-43.86}
  else if (FilterCity === "Rio Branco") { x = 111, lat = -9.97, lng =-67.81}
  else if (FilterCity === "Juazeiro Do Norte") { x = 112, lat = -7.21, lng =-39.32}
  else if (FilterCity === "Bauru") { x = 113, lat = -22.31, lng =-49.06}
  else if (FilterCity === "Anápolis") { x = 114, lat = -16.33, lng =-48.95}
  else if (FilterCity === "Boa Vista") { x = 115, lat = 2.82, lng =-60.67}
  else if (FilterCity === "Franca") { x = 116, lat = -20.54, lng =-47.4}
  else if (FilterCity === "Ponta Grossa") { x = 117, lat = -25.1, lng =-50.16}
  else if (FilterCity === "Blumenau") { x = 118, lat = -26.92, lng =-49.07}
  else if (FilterCity === "Caruaru") { x = 119, lat = -8.28, lng =-35.98}
  else if (FilterCity === "Uberaba") { x = 120, lat = -19.75, lng =-47.93}
  else if (FilterCity === "Pelotas") { x = 121, lat = -31.77, lng =-52.34}
  else if (FilterCity === "Sofia") { x = 122, lat = 42.7, lng =23.32}
  else if (FilterCity === "Varna") { x = 123, lat = 43.22, lng =27.92}
  else if (FilterCity === "Plovdiv") { x = 124, lat = 42.15, lng =24.75}
  else if (FilterCity === "Yangon") { x = 125, lat = 16.80528, lng =96.15611}
  else if (FilterCity === "Mandalay") { x = 126, lat = 21.97473, lng =96.08359}
  else if (FilterCity === "Nay Pyi Taw") { x = 127, lat = 19.745, lng =96.12972}
  else if (FilterCity === "Bago") { x = 128, lat = 17.33667, lng =96.47972}
  else if (FilterCity === "Mawlamyine") { x = 129, lat = 16.49051, lng =97.62825}
  else if (FilterCity === "Monywa") { x = 130, lat = 22.11667, lng =95.13333}
  else if (FilterCity === "Bujumbura") { x = 131, lat = -3.38, lng =29.36}
  else if (FilterCity === "Minsk") { x = 132, lat = 53.9, lng =27.57}
  else if (FilterCity === "Gomel") { x = 133, lat = 52.43, lng =30.98}
  else if (FilterCity === "Vitebsk") { x = 134, lat = 55.19, lng =30.2}
  else if (FilterCity === "Mogilev") { x = 135, lat = 53.91, lng =30.34}
  else if (FilterCity === "Grodno") { x = 136, lat = 53.69, lng =23.83}
  else if (FilterCity === "Brest") { x = 137, lat = 52.1, lng =23.69}
  else if (FilterCity === "Phnum Pénh (Phnom Penh)") { x = 138, lat = 11.56, lng =104.92}
  else if (FilterCity === "Yaoundé") { x = 139, lat = 3.87, lng =11.52}
  else if (FilterCity === "Douala") { x = 140, lat = 4.05, lng =9.7}
  else if (FilterCity === "Bamenda") { x = 141, lat = 5.95, lng =10.16}
  else if (FilterCity === "Loum") { x = 142, lat = 4.72, lng =9.74}
  else if (FilterCity === "Bafoussam") { x = 143, lat = 5.47, lng =10.42}
  else if (FilterCity === "Mbouda") { x = 144, lat = 5.63, lng =10.26}
  else if (FilterCity === "Toronto") { x = 145, lat = 43.7, lng =-79.42}
  else if (FilterCity === "Montréal") { x = 146, lat = 45.51, lng =-73.59}
  else if (FilterCity === "Vancouver") { x = 147, lat = 49.25, lng =-123.12}
  else if (FilterCity === "Calgary") { x = 148, lat = 51.04, lng =-114.06}
  else if (FilterCity === "Ottawa-Gatineau") { x = 149, lat = 45.42, lng =-75.7}
  else if (FilterCity === "Edmonton") { x = 150, lat = 53.54, lng =-113.5}
  else if (FilterCity === "Québec") { x = 151, lat = 46.81, lng =-71.21}
  else if (FilterCity === "Winnipeg") { x = 152, lat = 49.9, lng =-97.13}
  else if (FilterCity === "Hamilton") { x = 153, lat = 43.25, lng =-79.85}
  else if (FilterCity === "Kitchener") { x = 154, lat = 43.43, lng =-80.51}
  else if (FilterCity === "London") { x = 155, lat = 42.98, lng =-81.23}
  else if (FilterCity === "Halifax") { x = 156, lat = 44.65, lng =-63.58}
  else if (FilterCity === "St. Catharines-Niagara") { x = 157, lat = 43.17, lng =-79.25}
  else if (FilterCity === "Oshawa") { x = 158, lat = 43.9, lng =-78.85}
  else if (FilterCity === "Victoria") { x = 159, lat = 48.43, lng =-123.37}
  else if (FilterCity === "Windsor") { x = 160, lat = 42.28, lng =-83.01}
  else if (FilterCity === "Bangui") { x = 161, lat = 4.36, lng =18.55}
  else if (FilterCity === "Colombo") { x = 162, lat = 6.93194, lng =79.84778}
  else if (FilterCity === "N'Djaména") { x = 163, lat = 12.11, lng =15.04}
  else if (FilterCity === "Santiago") { x = 164, lat = -33.46, lng =-70.65}
  else if (FilterCity === "Valparaíso") { x = 165, lat = -33.04, lng =-71.63}
  else if (FilterCity === "Concepción") { x = 166, lat = -36.83, lng =-73.05}
  else if (FilterCity === "La Serena-Coquimbo") { x = 167, lat = -29.9, lng =-71.25}
  else if (FilterCity === "Antofagasta") { x = 168, lat = -23.65, lng =-70.4}
  else if (FilterCity === "Temuco") { x = 169, lat = -38.73, lng =-72.6}
  else if (FilterCity === "Iquique") { x = 170, lat = -20.22, lng =-70.14}
  else if (FilterCity === "Shanghai") { x = 171, lat = 31.22, lng =121.46}
  else if (FilterCity === "Beijing") { x = 172, lat = 39.91, lng =116.4}
  else if (FilterCity === "Chongqing") { x = 173, lat = 29.56, lng =106.55}
  else if (FilterCity === "Guangzhou, Guangdong") { x = 174, lat = 23.13, lng =113.26}
  else if (FilterCity === "Tianjin") { x = 175, lat = 39.11, lng =117.19}
  else if (FilterCity === "Shenzhen") { x = 176, lat = 22.54, lng =114.06}
  else if (FilterCity === "Wuhan") { x = 177, lat = 30.58, lng =114.27}
  else if (FilterCity === "Chengdu") { x = 178, lat = 30.67, lng =104.07}
  else if (FilterCity === "Dongguan") { x = 179, lat = 23.02, lng =113.74}
  else if (FilterCity === "Nanjing, Jiangsu") { x = 180, lat = 32.05, lng =118.79}
  else if (FilterCity === "Foshan") { x = 181, lat = 23.02, lng =113.12}
  else if (FilterCity === "Hangzhou") { x = 182, lat = 30.29, lng =120.16}
  else if (FilterCity === "Shenyang") { x = 183, lat = 41.79, lng =123.43}
  else if (FilterCity === "Xi'an, Shaanxi") { x = 184, lat = 34.29, lng =108.94}
  else if (FilterCity === "Suzhou, Jiangsu") { x = 185, lat = 31.3, lng =120.59}
  else if (FilterCity === "Haerbin") { x = 186, lat = 45.76, lng =126.65}
  else if (FilterCity === "Qingdao") { x = 187, lat = 36.1, lng =120.37}
  else if (FilterCity === "Dalian") { x = 188, lat = 38.91, lng =121.6}
  else if (FilterCity === "Xiamen") { x = 189, lat = 24.48, lng =118.08}
  else if (FilterCity === "Zhengzhou") { x = 190, lat = 34.76, lng =113.65}
  else if (FilterCity === "Ji'nan, Shandong") { x = 191, lat = 36.68, lng =117}
  else if (FilterCity === "Shantou") { x = 192, lat = 23.37, lng =116.71}
  else if (FilterCity === "Kunming") { x = 193, lat = 25.04, lng =102.72}
  else if (FilterCity === "Changchun") { x = 194, lat = 43.88, lng =125.29}
  else if (FilterCity === "Changsha") { x = 195, lat = 28.23, lng =112.94}
  else if (FilterCity === "Zhongshan") { x = 196, lat = 22.52, lng =113.38}
  else if (FilterCity === "Ürümqi (Wulumqi)") { x = 197, lat = 43.83, lng =87.6}
  else if (FilterCity === "Taiyuan, Shanxi") { x = 198, lat = 37.86, lng =112.55}
  else if (FilterCity === "Hefei") { x = 199, lat = 31.86, lng =117.28}
  else if (FilterCity === "Fuzhou, Fujian") { x = 200, lat = 26.08, lng =119.3}
  else if (FilterCity === "Shijiazhuang") { x = 201, lat = 38.04, lng =114.51}
  else if (FilterCity === "Nanning") { x = 202, lat = 22.82, lng =108.32}
  else if (FilterCity === "Wenzhou") { x = 203, lat = 28, lng =120.67}
  else if (FilterCity === "Ningbo") { x = 204, lat = 29.88, lng =121.55}
  else if (FilterCity === "Wuxi, Jiangsu") { x = 205, lat = 31.54, lng =120.3}
  else if (FilterCity === "Guiyang") { x = 206, lat = 26.58, lng =106.72}
  else if (FilterCity === "Tangshan, Hebei") { x = 207, lat = 39.63, lng =118.18}
  else if (FilterCity === "Lanzhou") { x = 208, lat = 36.06, lng =103.79}
  else if (FilterCity === "Taipei") { x = 209, lat = 25.05, lng =121.55}
  else if (FilterCity === "Changzhou, Jiangsu") { x = 210, lat = 31.79, lng =119.96}
  else if (FilterCity === "Nanchang") { x = 211, lat = 28.68, lng =115.88}
  else if (FilterCity === "Zibo") { x = 212, lat = 36.79, lng =118.06}
  else if (FilterCity === "Huizhou") { x = 213, lat = 23.08, lng =114.4}
  else if (FilterCity === "Weifang") { x = 214, lat = 36.71, lng =119.1}
  else if (FilterCity === "Yantai") { x = 215, lat = 37.47, lng =121.44}
  else if (FilterCity === "Shaoxing") { x = 216, lat = 30.01, lng =120.57}
  else if (FilterCity === "Luoyang") { x = 217, lat = 34.62, lng =112.46}
  else if (FilterCity === "Huai'an") { x = 218, lat = 33.61, lng =119.01}
  else if (FilterCity === "Nantong") { x = 219, lat = 31.99, lng =120.87}
  else if (FilterCity === "Baotou") { x = 220, lat = 40.65, lng =109.82}
  else if (FilterCity === "Xuzhou") { x = 221, lat = 34.26, lng =117.19}
  else if (FilterCity === "Haikou") { x = 222, lat = 20.03, lng =110.33}
  else if (FilterCity === "Hohhot") { x = 223, lat = 40.81, lng =111.65}
  else if (FilterCity === "Yangzhou") { x = 224, lat = 32.39, lng =119.42}
  else if (FilterCity === "Linyi, Shandong") { x = 225, lat = 35.05, lng =118.33}
  else if (FilterCity === "Taizhou, Zhejiang") { x = 226, lat = 28.64, lng =121.42}
  else if (FilterCity === "Handan") { x = 227, lat = 36.6, lng =114.47}
  else if (FilterCity === "Daqing") { x = 228, lat = 46.58, lng =125}
  else if (FilterCity === "Liuzhou") { x = 229, lat = 24.3, lng =109.38}
  else if (FilterCity === "Yinchuan") { x = 230, lat = 38.47, lng =106.27}
  else if (FilterCity === "Jiangmen") { x = 231, lat = 22.58, lng =113.08}
  else if (FilterCity === "Anshan") { x = 232, lat = 41.12, lng =122.99}
  else if (FilterCity === "Zhuhai") { x = 233, lat = 22.28, lng =113.57}
  else if (FilterCity === "Xiangyang") { x = 234, lat = 32.01, lng =112.14}
  else if (FilterCity === "Datong") { x = 235, lat = 40.08, lng =113.29}
  else if (FilterCity === "Kaohsiung") { x = 236, lat = 22.63, lng =120.32}
  else if (FilterCity === "Jilin") { x = 237, lat = 43.85, lng =126.56}
  else if (FilterCity === "Qiqihaer") { x = 238, lat = 47.34, lng =123.97}
  else if (FilterCity === "Putian") { x = 239, lat = 25.44, lng =119.01}
  else if (FilterCity === "Yancheng, Jiangsu") { x = 240, lat = 33.36, lng =120.16}
  else if (FilterCity === "Wuhu, Anhui") { x = 241, lat = 31.33, lng =118.38}
  else if (FilterCity === "Quanzhou") { x = 242, lat = 24.9, lng =118.6}
  else if (FilterCity === "Jining, Shandong") { x = 243, lat = 35.41, lng =116.58}
  else if (FilterCity === "Chaozhou") { x = 244, lat = 23.67, lng =116.64}
  else if (FilterCity === "Huainan") { x = 245, lat = 32.63, lng =117}
  else if (FilterCity === "Xining") { x = 246, lat = 36.62, lng =101.77}
  else if (FilterCity === "Cixi") { x = 247, lat = 30.18, lng =121.25}
  else if (FilterCity === "Hengyang") { x = 248, lat = 26.88, lng =112.63}
  else if (FilterCity === "Fushun, Liaoning") { x = 249, lat = 41.88, lng =123.95}
  else if (FilterCity === "Yichang") { x = 250, lat = 30.71, lng =111.28}
  else if (FilterCity === "Taichung") { x = 251, lat = 24.14, lng =120.67}
  else if (FilterCity === "Taian, Shandong") { x = 252, lat = 36.19, lng =117.12}
  else if (FilterCity === "Taizhou, Jiangsu") { x = 253, lat = 32.49, lng =119.9}
  else if (FilterCity === "Zhanjiang") { x = 254, lat = 21.27, lng =110.36}
  else if (FilterCity === "Anyang") { x = 255, lat = 36.09, lng =114.35}
  else if (FilterCity === "Qinhuangdao") { x = 256, lat = 39.93, lng =119.59}
  else if (FilterCity === "Baoding") { x = 257, lat = 38.85, lng =115.49}
  else if (FilterCity === "Lianyungang") { x = 258, lat = 34.6, lng =119.18}
  else if (FilterCity === "Zhuzhou") { x = 259, lat = 27.83, lng =113.15}
  else if (FilterCity === "Yiwu") { x = 260, lat = 29.32, lng =120.08}
  else if (FilterCity === "Benxi") { x = 261, lat = 41.29, lng =123.77}
  else if (FilterCity === "Mianyang, Sichuan") { x = 262, lat = 31.48, lng =104.74}
  else if (FilterCity === "Rizhao") { x = 263, lat = 35.4, lng =119.51}
  else if (FilterCity === "Zhenjiang, Jiangsu") { x = 264, lat = 32.2, lng =119.45}
  else if (FilterCity === "Suqian") { x = 265, lat = 33.97, lng =118.29}
  else if (FilterCity === "Nanchong") { x = 266, lat = 30.8, lng =106.08}
  else if (FilterCity === "Guilin") { x = 267, lat = 25.28, lng =110.29}
  else if (FilterCity === "Jinzhou") { x = 268, lat = 41.11, lng =121.14}
  else if (FilterCity === "Zaozhuang") { x = 269, lat = 34.86, lng =117.55}
  else if (FilterCity === "Yingkou") { x = 270, lat = 40.66, lng =122.23}
  else if (FilterCity === "Chifeng") { x = 271, lat = 42.26, lng =118.92}
  else if (FilterCity === "Nanyang, Henan") { x = 272, lat = 33, lng =112.53}
  else if (FilterCity === "Xiangtan, Hunan") { x = 273, lat = 27.83, lng =112.93}
  else if (FilterCity === "Puning") { x = 274, lat = 23.3, lng =116.16}
  else if (FilterCity === "Baoji") { x = 275, lat = 34.37, lng =107.2}
  else if (FilterCity === "Pingdingshan, Henan") { x = 276, lat = 33.74, lng =113.3}
  else if (FilterCity === "Xinxiang") { x = 277, lat = 35.3, lng =113.9}
  else if (FilterCity === "Zhangjiakou") { x = 278, lat = 40.81, lng =114.88}
  else if (FilterCity === "Huaibei") { x = 279, lat = 33.95, lng =116.79}
  else if (FilterCity === "Ruian") { x = 280, lat = 27.78, lng =120.68}
  else if (FilterCity === "Jiaxing") { x = 281, lat = 30.77, lng =120.75}
  else if (FilterCity === "Jinhua") { x = 282, lat = 29.08, lng =119.65}
  else if (FilterCity === "Dongying") { x = 283, lat = 37.45, lng =118.58}
  else if (FilterCity === "Jingzhou, Hubei") { x = 284, lat = 30.33, lng =112.25}
  else if (FilterCity === "Yueyang") { x = 285, lat = 29.37, lng =113.12}
  else if (FilterCity === "Tengzhou") { x = 286, lat = 35.08, lng =117.16}
  else if (FilterCity === "Suzhou, Anhui") { x = 287, lat = 33.64, lng =116.97}
  else if (FilterCity === "Jieyang") { x = 288, lat = 23.55, lng =116.37}
  else if (FilterCity === "Fuyang") { x = 289, lat = 32.89, lng =115.82}
  else if (FilterCity === "Jixi, Heilongjiang") { x = 290, lat = 45.3, lng =130.97}
  else if (FilterCity === "Liuan") { x = 291, lat = 31.75, lng =116.5}
  else if (FilterCity === "Wenling") { x = 292, lat = 28.38, lng =121.38}
  else if (FilterCity === "Yueqing") { x = 293, lat = 28.12, lng =120.96}
  else if (FilterCity === "Ma'anshan") { x = 294, lat = 31.71, lng =118.5}
  else if (FilterCity === "Huzhou") { x = 295, lat = 30.87, lng =120.09}
  else if (FilterCity === "Mudanjiang") { x = 296, lat = 44.58, lng =129.6}
  else if (FilterCity === "Weihai") { x = 297, lat = 37.5, lng =122.11}
  else if (FilterCity === "Bengbu") { x = 298, lat = 32.94, lng =117.36}
  else if (FilterCity === "Shiyan") { x = 299, lat = 32.64, lng =110.78}
  else if (FilterCity === "Dandong") { x = 300, lat = 40.12, lng =124.37}
  else if (FilterCity === "Liuyang") { x = 301, lat = 28.15, lng =113.63}
  else if (FilterCity === "Tainan") { x = 302, lat = 23.13, lng =120.26}
  else if (FilterCity === "Leshan") { x = 303, lat = 29.58, lng =103.76}
  else if (FilterCity === "Pizhou") { x = 304, lat = 34.31, lng =117.95}
  else if (FilterCity === "Pingxiang, Jiangxi") { x = 305, lat = 27.63, lng =113.85}
  else if (FilterCity === "Liupanshui") { x = 306, lat = 26.59, lng =104.84}
  else if (FilterCity === "Kaifeng") { x = 307, lat = 34.79, lng =114.35}
  else if (FilterCity === "Zunyi") { x = 308, lat = 27.71, lng =106.94}
  else if (FilterCity === "Ganzhou") { x = 309, lat = 25.85, lng =114.93}
  else if (FilterCity === "Fuxin") { x = 310, lat = 42.02, lng =121.66}
  else if (FilterCity === "Liaoyang") { x = 311, lat = 41.27, lng =123.17}
  else if (FilterCity === "Xintai") { x = 312, lat = 35.9, lng =117.75}
  else if (FilterCity === "Luzhou") { x = 313, lat = 28.88, lng =105.44}
  else if (FilterCity === "Laiwu") { x = 314, lat = 36.21, lng =117.67}
  else if (FilterCity === "Luohe") { x = 315, lat = 33.57, lng =114.02}
  else if (FilterCity === "Guigang") { x = 316, lat = 23.1, lng =109.61}
  else if (FilterCity === "Huangshi") { x = 317, lat = 30.21, lng =115.09}
  else if (FilterCity === "Xingtai") { x = 318, lat = 37.06, lng =114.49}
  else if (FilterCity === "Shaoguan") { x = 319, lat = 24.8, lng =113.58}
  else if (FilterCity === "Chenzhou") { x = 320, lat = 25.8, lng =113.03}
  else if (FilterCity === "Changzhi") { x = 321, lat = 36.19, lng =113.12}
  else if (FilterCity === "Yibin") { x = 322, lat = 28.77, lng =104.62}
  else if (FilterCity === "Jiaozuo") { x = 323, lat = 35.24, lng =113.23}
  else if (FilterCity === "Haicheng") { x = 324, lat = 40.86, lng =122.74}
  else if (FilterCity === "Zhangzhou") { x = 325, lat = 24.51, lng =117.66}
  else if (FilterCity === "Changshu") { x = 326, lat = 31.65, lng =120.75}
  else if (FilterCity === "Tianmen") { x = 327, lat = 30.65, lng =113.16}
  else if (FilterCity === "Zhucheng") { x = 328, lat = 35.99, lng =119.4}
  else if (FilterCity === "Changde") { x = 329, lat = 29.05, lng =111.68}
  else if (FilterCity === "Shangqiu") { x = 330, lat = 34.42, lng =115.65}
  else if (FilterCity === "Huludao") { x = 331, lat = 40.75, lng =120.84}
  else if (FilterCity === "Xinyang") { x = 332, lat = 32.13, lng =114.07}
  else if (FilterCity === "Yangquan") { x = 333, lat = 37.86, lng =113.58}
  else if (FilterCity === "Linfen") { x = 334, lat = 36.09, lng =111.52}
  else if (FilterCity === "Zigong") { x = 335, lat = 29.34, lng =104.78}
  else if (FilterCity === "Panjin") { x = 336, lat = 41.12, lng =122.07}
  else if (FilterCity === "Binzhou") { x = 337, lat = 37.38, lng =118.01}
  else if (FilterCity === "Qingyuan") { x = 338, lat = 23.71, lng =113.03}
  else if (FilterCity === "Xinyu") { x = 339, lat = 27.8, lng =114.93}
  else if (FilterCity === "Jiangyin") { x = 340, lat = 31.92, lng =120.28}
  else if (FilterCity === "Chengde") { x = 341, lat = 40.97, lng =117.93}
  else if (FilterCity === "Jiujiang") { x = 342, lat = 29.7, lng =116}
  else if (FilterCity === "Zhuji") { x = 343, lat = 29.71, lng =120.24}
  else if (FilterCity === "Xianyang, Shaanxi") { x = 344, lat = 34.34, lng =108.7}
  else if (FilterCity === "Bazhong") { x = 345, lat = 31.87, lng =106.73}
  else if (FilterCity === "Liaocheng") { x = 346, lat = 36.46, lng =115.98}
  else if (FilterCity === "Guiping") { x = 347, lat = 23.39, lng =110.07}
  else if (FilterCity === "Xiaogan") { x = 348, lat = 30.93, lng =113.92}
  else if (FilterCity === "Xinghua") { x = 349, lat = 32.94, lng =119.84}
  else if (FilterCity === "Jiamusi") { x = 350, lat = 46.8, lng =130.33}
  else if (FilterCity === "Panzhihua") { x = 351, lat = 26.59, lng =101.71}
  else if (FilterCity === "Yongzhou") { x = 352, lat = 26.44, lng =111.61}
  else if (FilterCity === "Tianshui") { x = 353, lat = 34.58, lng =105.72}
  else if (FilterCity === "Yichun, Heilongjiang") { x = 354, lat = 47.72, lng =128.83}
  else if (FilterCity === "Yichun, Jiangxi") { x = 355, lat = 27.81, lng =114.39}
  else if (FilterCity === "Anqing") { x = 356, lat = 30.54, lng =117.05}
  else if (FilterCity === "Taixing") { x = 357, lat = 32.17, lng =120.01}
  else if (FilterCity === "Baishan") { x = 358, lat = 41.94, lng =126.42}
  else if (FilterCity === "Shaoyang") { x = 359, lat = 27.24, lng =111.47}
  else if (FilterCity === "Leiyang") { x = 360, lat = 26.42, lng =112.85}
  else if (FilterCity === "Ezhou") { x = 361, lat = 30.4, lng =114.88}
  else if (FilterCity === "Jimo") { x = 362, lat = 36.39, lng =120.46}
  else if (FilterCity === "Deyang") { x = 363, lat = 31.13, lng =104.38}
  else if (FilterCity === "Zhaoqing") { x = 364, lat = 23.05, lng =112.46}
  else if (FilterCity === "Langfang") { x = 365, lat = 39.51, lng =116.69}
  else if (FilterCity === "Hegang") { x = 366, lat = 47.34, lng =130.29}
  else if (FilterCity === "Suining, Sichuan") { x = 367, lat = 30.52, lng =105.56}
  else if (FilterCity === "Neijiang") { x = 368, lat = 29.58, lng =105.06}
  else if (FilterCity === "Tongliao") { x = 369, lat = 43.61, lng =122.27}
  else if (FilterCity === "Maoming") { x = 370, lat = 21.66, lng =110.92}
  else if (FilterCity === "Wuzhou") { x = 371, lat = 23.48, lng =111.27}
  else if (FilterCity === "Liling") { x = 372, lat = 27.67, lng =113.5}
  else if (FilterCity === "Danyang") { x = 373, lat = 32, lng =119.57}
  else if (FilterCity === "Dezhou") { x = 374, lat = 37.45, lng =116.3}
  else if (FilterCity === "Yuyao") { x = 375, lat = 30.04, lng =121.15}
  else if (FilterCity === "Linhai") { x = 376, lat = 28.85, lng =121.14}
  else if (FilterCity === "Zhoushan") { x = 377, lat = 29.99, lng =122.21}
  else if (FilterCity === "Huaihua") { x = 378, lat = 27.55, lng =109.96}
  else if (FilterCity === "Erduosi (Ordoss)") { x = 379, lat = 39.59, lng =109.77}
  else if (FilterCity === "Yanji") { x = 380, lat = 42.91, lng =129.51}
  else if (FilterCity === "Bozhou") { x = 381, lat = 33.87, lng =115.78}
  else if (FilterCity === "Jincheng") { x = 382, lat = 35.49, lng =112.85}
  else if (FilterCity === "Kunshan ") { x = 383, lat = 31.39, lng =120.96}
  else if (FilterCity === "Yulin, Guangxi") { x = 384, lat = 22.63, lng =110.15}
  else if (FilterCity === "Heze") { x = 385, lat = 35.25, lng =115.46}
  else if (FilterCity === "Dongtai") { x = 386, lat = 32.85, lng =120.31}
  else if (FilterCity === "Hanchuan") { x = 387, lat = 30.65, lng =113.83}
  else if (FilterCity === "Gaomi") { x = 388, lat = 36.38, lng =119.75}
  else if (FilterCity === "Zhangqiu") { x = 389, lat = 36.7, lng =117.53}
  else if (FilterCity === "Xiantao") { x = 390, lat = 30.37, lng =113.45}
  else if (FilterCity === "Kuerle") { x = 391, lat = 41.76, lng =86.15}
  else if (FilterCity === "Dazhou") { x = 392, lat = 31.22, lng =107.5}
  else if (FilterCity === "Qujing") { x = 393, lat = 25.49, lng =103.8}
  else if (FilterCity === "Zhumadian") { x = 394, lat = 32.98, lng =114.03}
  else if (FilterCity === "Quzhou") { x = 395, lat = 28.96, lng =118.87}
  else if (FilterCity === "Wuhai") { x = 396, lat = 39.66, lng =106.81}
  else if (FilterCity === "Qinzhou") { x = 397, lat = 21.97, lng =108.62}
  else if (FilterCity === "Fuzhou, Jiangxi") { x = 398, lat = 27.98, lng =116.36}
  else if (FilterCity === "Siping") { x = 399, lat = 43.16, lng =124.37}
  else if (FilterCity === "Zhoukou") { x = 400, lat = 33.62, lng =114.65}
  else if (FilterCity === "Yangjiang") { x = 401, lat = 21.86, lng =111.96}
  else if (FilterCity === "Sanya") { x = 402, lat = 18.27, lng =109.5}
  else if (FilterCity === "Qitaihe") { x = 403, lat = 45.77, lng =130.98}
  else if (FilterCity === "Yuncheng") { x = 404, lat = 35.02, lng =110.99}
  else if (FilterCity === "Taicang") { x = 405, lat = 31.45, lng =121.12}
  else if (FilterCity === "Haimen") { x = 406, lat = 31.9, lng =121.17}
  else if (FilterCity === "Cangzhou") { x = 407, lat = 38.32, lng =116.87}
  else if (FilterCity === "Dengzhou") { x = 408, lat = 32.68, lng =112.08}
  else if (FilterCity === "Puyang") { x = 409, lat = 35.77, lng =115.04}
  else if (FilterCity === "Fuqing") { x = 410, lat = 25.73, lng =119.38}
  else if (FilterCity === "Shishi") { x = 411, lat = 24.74, lng =118.63}
  else if (FilterCity === "Tonghua") { x = 412, lat = 41.72, lng =125.93}
  else if (FilterCity === "Renqiu") { x = 413, lat = 38.7, lng =116.09}
  else if (FilterCity === "Loudi") { x = 414, lat = 27.73, lng =111.99}
  else if (FilterCity === "Miluo") { x = 415, lat = 28.81, lng =113.07}
  else if (FilterCity === "Zhangjiagang") { x = 416, lat = 31.87, lng =120.54}
  else if (FilterCity === "Hsinchu") { x = 417, lat = 24.81, lng =120.97}
  else if (FilterCity === "Hebi") { x = 418, lat = 35.75, lng =114.3}
  else if (FilterCity === "Xuchang") { x = 419, lat = 34.02, lng =113.82}
  else if (FilterCity === "Bijie") { x = 420, lat = 27.31, lng =105.28}
  else if (FilterCity === "Longhai") { x = 421, lat = 24.45, lng =117.81}
  else if (FilterCity === "Jinzhong") { x = 422, lat = 37.69, lng =112.73}
  else if (FilterCity === "Fuyang") { x = 423, lat = 30.06, lng =119.94}
  else if (FilterCity === "Feicheng") { x = 424, lat = 36.19, lng =116.77}
  else if (FilterCity === "Daye") { x = 425, lat = 30.1, lng =114.97}
  else if (FilterCity === "Shouguang") { x = 426, lat = 36.88, lng =118.75}
  else if (FilterCity === "Chaoyang") { x = 427, lat = 41.58, lng =120.45}
  else if (FilterCity === "Dongyang") { x = 428, lat = 29.28, lng =120.23}
  else if (FilterCity === "Zengcheng") { x = 429, lat = 23.29, lng =113.83}
  else if (FilterCity === "Tongchuan") { x = 430, lat = 34.9, lng =108.95}
  else if (FilterCity === "Tongxiang") { x = 431, lat = 30.63, lng =120.55}
  else if (FilterCity === "Zaoyang") { x = 432, lat = 32.13, lng =112.75}
  else if (FilterCity === "Anqiu") { x = 433, lat = 36.43, lng =119.19}
  else if (FilterCity === "Shuangyashan") { x = 434, lat = 46.64, lng =131.15}
  else if (FilterCity === "Tongling") { x = 435, lat = 30.94, lng =117.81}
  else if (FilterCity === "Ankang") { x = 436, lat = 32.69, lng =109.03}
  else if (FilterCity === "Songyuan") { x = 437, lat = 27.62, lng =119.06}
  else if (FilterCity === "Longyan") { x = 438, lat = 25.11, lng =117.02}
  else if (FilterCity === "Heyuan") { x = 439, lat = 23.75, lng =114.7}
  else if (FilterCity === "Hezhou") { x = 440, lat = 24.42, lng =111.55}
  else if (FilterCity === "Hengshui") { x = 441, lat = 37.74, lng =115.68}
  else if (FilterCity === "Beihai") { x = 442, lat = 21.48, lng =109.12}
  else if (FilterCity === "Jingjiang") { x = 443, lat = 32.01, lng =120.26}
  else if (FilterCity === "Yiyang, Hunan") { x = 444, lat = 28.57, lng =112.35}
  else if (FilterCity === "Pingdu") { x = 445, lat = 36.78, lng =119.96}
  else if (FilterCity === "Jiaozhou") { x = 446, lat = 36.28, lng =120}
  else if (FilterCity === "Qianjiang") { x = 447, lat = 30.42, lng =112.89}
  else if (FilterCity === "Xinyi") { x = 448, lat = 34.37, lng =118.34}
  else if (FilterCity === "Shuozhou") { x = 449, lat = 39.32, lng =112.42}
  else if (FilterCity === "Zhongxiang") { x = 450, lat = 31.17, lng =112.58}
  else if (FilterCity === "Haining") { x = 451, lat = 30.53, lng =120.69}
  else if (FilterCity === "Sihui") { x = 452, lat = 23.35, lng =112.7}
  else if (FilterCity === "Shizuishan") { x = 453, lat = 39.23, lng =106.77}
  else if (FilterCity === "Taishan") { x = 454, lat = 22.25, lng =112.79}
  else if (FilterCity === "Xinmi") { x = 455, lat = 34.54, lng =113.39}
  else if (FilterCity === "Guangyuan") { x = 456, lat = 32.44, lng =105.82}
  else if (FilterCity === "Chuzhou") { x = 457, lat = 32.3, lng =118.32}
  else if (FilterCity === "Longkou") { x = 458, lat = 37.64, lng =120.52}
  else if (FilterCity === "Shangyu") { x = 459, lat = 30.03, lng =120.87}
  else if (FilterCity === "Qingzhou") { x = 460, lat = 36.68, lng =118.48}
  else if (FilterCity === "Jinjiang") { x = 461, lat = 24.81, lng =118.58}
  else if (FilterCity === "Yongkang") { x = 462, lat = 28.9, lng =120.03}
  else if (FilterCity === "Chaohu") { x = 463, lat = 31.6, lng =117.87}
  else if (FilterCity === "Zhaodong") { x = 464, lat = 46.07, lng =125.99}
  else if (FilterCity === "Jingmen") { x = 465, lat = 31.04, lng =112.2}
  else if (FilterCity === "Sanhe") { x = 466, lat = 39.98, lng =117.07}
  else if (FilterCity === "Wafangdian ") { x = 467, lat = 39.63, lng =121.99}
  else if (FilterCity === "Dali") { x = 468, lat = 25.59, lng =100.22}
  else if (FilterCity === "Cenxi") { x = 469, lat = 22.92, lng =110.99}
  else if (FilterCity === "Ziyang") { x = 470, lat = 30.13, lng =104.63}
  else if (FilterCity === "Yanan") { x = 471, lat = 36.6, lng =109.48}
  else if (FilterCity === "Gongyi") { x = 472, lat = 34.76, lng =112.97}
  else if (FilterCity === "Enshi") { x = 473, lat = 30.29, lng =109.48}
  else if (FilterCity === "Zhangye") { x = 474, lat = 38.93, lng =100.45}
  else if (FilterCity === "Gaozhou") { x = 475, lat = 21.92, lng =110.85}
  else if (FilterCity === "Jianyang") { x = 476, lat = 30.39, lng =104.54}
  else if (FilterCity === "Suizhou") { x = 477, lat = 31.71, lng =113.36}
  else if (FilterCity === "Laixi") { x = 478, lat = 36.87, lng =120.52}
  else if (FilterCity === "Gaoyou") { x = 479, lat = 32.78, lng =119.45}
  else if (FilterCity === "Fengcheng") { x = 480, lat = 28.18, lng =115.78}
  else if (FilterCity === "Meishan") { x = 481, lat = 30.08, lng =103.85}
  else if (FilterCity === "Anshun") { x = 482, lat = 26.24, lng =105.93}
  else if (FilterCity === "Changning") { x = 483, lat = 26.41, lng =112.4}
  else if (FilterCity === "Liyang") { x = 484, lat = 31.42, lng =119.48}
  else if (FilterCity === "Chuxiong") { x = 485, lat = 25.04, lng =101.54}
  else if (FilterCity === "Kelamayi") { x = 486, lat = 45.59, lng =84.87}
  else if (FilterCity === "Shanwei") { x = 487, lat = 22.78, lng =115.36}
  else if (FilterCity === "Tieling") { x = 488, lat = 42.29, lng =123.84}
  else if (FilterCity === "Dafeng") { x = 489, lat = 33.2, lng =120.46}
  else if (FilterCity === "Bayannaoer") { x = 490, lat = 40.75, lng =107.41}
  else if (FilterCity === "Dengfeng") { x = 491, lat = 34.46, lng =113.03}
  else if (FilterCity === "Yongcheng") { x = 492, lat = 33.93, lng =116.44}
  else if (FilterCity === "Suihua") { x = 493, lat = 46.64, lng =126.98}
  else if (FilterCity === "Guang'an") { x = 494, lat = 30.46, lng =106.64}
  else if (FilterCity === "Yanshi") { x = 495, lat = 34.73, lng =112.78}
  else if (FilterCity === "Laizhou") { x = 496, lat = 37.18, lng =119.94}
  else if (FilterCity === "Yixing") { x = 497, lat = 31.36, lng =119.78}
  else if (FilterCity === "Xinzheng") { x = 498, lat = 34.4, lng =113.74}
  else if (FilterCity === "Yingde") { x = 499, lat = 24.2, lng =113.41}
  else if (FilterCity === "Kaiping") { x = 500, lat = 22.37, lng =112.7}
  else if (FilterCity === "Fuan") { x = 501, lat = 27.09, lng =119.65}
  else if (FilterCity === "Yuxi") { x = 502, lat = 24.36, lng =102.54}
  else if (FilterCity === "Rongcheng") { x = 503, lat = 37.15, lng =122.44}
  else if (FilterCity === "Baiyin") { x = 504, lat = 36.55, lng =104.18}
  else if (FilterCity === "Xuancheng") { x = 505, lat = 30.95, lng =118.75}
  else if (FilterCity === "Jingdezhen") { x = 506, lat = 29.29, lng =117.21}
  else if (FilterCity === "Liaoyuan") { x = 507, lat = 42.9, lng =125.14}
  else if (FilterCity === "Ji'an, Jiangxi") { x = 508, lat = 27.12, lng =114.98}
  else if (FilterCity === "Jiyuan") { x = 509, lat = 35.09, lng =112.58}
  else if (FilterCity === "Keelung") { x = 510, lat = 25.13, lng =121.74}
  else if (FilterCity === "Meizhou") { x = 511, lat = 24.3, lng =116.12}
  else if (FilterCity === "Zhuanghe") { x = 512, lat = 39.71, lng =122.97}
  else if (FilterCity === "Changyi") { x = 513, lat = 36.85, lng =119.39}
  else if (FilterCity === "Laiyang") { x = 514, lat = 36.98, lng =120.71}
  else if (FilterCity === "Shengzhou") { x = 515, lat = 29.59, lng =120.82}
  else if (FilterCity === "Yulin, Shaanxi") { x = 516, lat = 38.28, lng =109.73}
  else if (FilterCity === "Hanzhong") { x = 517, lat = 33.07, lng =107.03}
  else if (FilterCity === "Changge") { x = 518, lat = 34.22, lng =113.77}
  else if (FilterCity === "Gaoan") { x = 519, lat = 28.43, lng =115.37}
  else if (FilterCity === "Xinyi") { x = 520, lat = 22.36, lng =110.94}
  else if (FilterCity === "Chizhou") { x = 521, lat = 30.66, lng =117.48}
  else if (FilterCity === "Xingning") { x = 522, lat = 24.15, lng =115.73}
  else if (FilterCity === "Wuwei") { x = 523, lat = 37.93, lng =102.63}
  else if (FilterCity === "Shangrao") { x = 524, lat = 28.46, lng =117.95}
  else if (FilterCity === "Linqing") { x = 525, lat = 36.85, lng =115.71}
  else if (FilterCity === "Linzhou") { x = 526, lat = 36.07, lng =113.82}
  else if (FilterCity === "Jurong") { x = 527, lat = 31.95, lng =119.16}
  else if (FilterCity === "Xiangcheng") { x = 528, lat = 33.44, lng =114.9}
  else if (FilterCity === "Weinan") { x = 529, lat = 34.5, lng =109.51}
  else if (FilterCity === "Laibin") { x = 530, lat = 23.74, lng =109.23}
  else if (FilterCity === "Gongzhuling") { x = 531, lat = 43.5, lng =124.82}
  else if (FilterCity === "Lin'an") { x = 532, lat = 30.24, lng =119.72}
  else if (FilterCity === "Pinghu") { x = 533, lat = 30.7, lng =121.01}
  else if (FilterCity === "Lishui, Zhejiang") { x = 534, lat = 28.46, lng =119.92}
  else if (FilterCity === "Hami") { x = 535, lat = 42.83, lng =93.52}
  else if (FilterCity === "Xingyi, Guizhou") { x = 536, lat = 25.09, lng =104.9}
  else if (FilterCity === "Sanming") { x = 537, lat = 26.26, lng =117.62}
  else if (FilterCity === "Pulandian") { x = 538, lat = 39.4, lng =121.97}
  else if (FilterCity === "Dujiangyan") { x = 539, lat = 31, lng =103.63}
  else if (FilterCity === "Xianning") { x = 540, lat = 29.84, lng =114.33}
  else if (FilterCity === "Gaocheng") { x = 541, lat = 38.02, lng =114.84}
  else if (FilterCity === "Changji") { x = 542, lat = 44.01, lng =87.3}
  else if (FilterCity === "Akesu") { x = 543, lat = 41.17, lng =80.26}
  else if (FilterCity === "Wuchuan ") { x = 544, lat = 21.43, lng =110.78}
  else if (FilterCity === "Fangchenggang") { x = 545, lat = 21.77, lng =108.35}
  else if (FilterCity === "Dashiqiao") { x = 546, lat = 40.64, lng =122.5}
  else if (FilterCity === "Huangshan") { x = 547, lat = 29.71, lng =118.32}
  else if (FilterCity === "Nankang") { x = 548, lat = 25.67, lng =114.76}
  else if (FilterCity === "Tongcheng") { x = 549, lat = 31.05, lng =116.96}
  else if (FilterCity === "Qufu") { x = 550, lat = 35.6, lng =116.99}
  else if (FilterCity === "Heshan") { x = 551, lat = 22.77, lng =112.96}
  else if (FilterCity === "Lvliang") { x = 552, lat = 37.52, lng =111.13}
  else if (FilterCity === "Hejian") { x = 553, lat = 38.44, lng =116.09}
  else if (FilterCity === "Donggang") { x = 554, lat = 39.88, lng =124.15}
  else if (FilterCity === "Yining") { x = 555, lat = 43.92, lng =81.32}
  else if (FilterCity === "Macheng") { x = 556, lat = 31.18, lng =115.03}
  else if (FilterCity === "Xingyang") { x = 557, lat = 34.79, lng =113.38}
  else if (FilterCity === "Xinzhou") { x = 558, lat = 38.42, lng =112.73}
  else if (FilterCity === "Shihezi") { x = 559, lat = 44.31, lng =86.03}
  else if (FilterCity === "Luoding") { x = 560, lat = 22.77, lng =111.57}
  else if (FilterCity === "Botou") { x = 561, lat = 38.07, lng =116.57}
  else if (FilterCity === "Leping") { x = 562, lat = 28.97, lng =117.13}
  else if (FilterCity === "Yushu") { x = 563, lat = 44.82, lng =126.55}
  else if (FilterCity === "Zhaoyuan") { x = 564, lat = 37.36, lng =120.4}
  else if (FilterCity === "Sanmenxia") { x = 565, lat = 34.77, lng =111.2}
  else if (FilterCity === "Baicheng") { x = 566, lat = 45.62, lng =122.84}
  else if (FilterCity === "Yuanjiang") { x = 567, lat = 28.84, lng =112.36}
  else if (FilterCity === "Kaili") { x = 568, lat = 26.58, lng =107.97}
  else if (FilterCity === "Bogotá") { x = 569, lat = 4.61, lng =-74.08}
  else if (FilterCity === "Medellín") { x = 570, lat = 6.25, lng =-75.56}
  else if (FilterCity === "Cali") { x = 571, lat = 3.44, lng =-76.52}
  else if (FilterCity === "Barranquilla") { x = 572, lat = 10.96, lng =-74.8}
  else if (FilterCity === "Bucaramanga") { x = 573, lat = 7.13, lng =-73.12}
  else if (FilterCity === "Cartagena") { x = 574, lat = 10.4, lng =-75.51}
  else if (FilterCity === "Cúcuta") { x = 575, lat = 7.89, lng =-72.51}
  else if (FilterCity === "Ibagué") { x = 576, lat = 4.44, lng =-75.23}
  else if (FilterCity === "Pereira") { x = 577, lat = 4.81, lng =-75.7}
  else if (FilterCity === "Villavicencio") { x = 578, lat = 4.14, lng =-73.63}
  else if (FilterCity === "Santa Marta") { x = 579, lat = 11.24, lng =-74.2}
  else if (FilterCity === "Manizales") { x = 580, lat = 5.07, lng =-75.52}
  else if (FilterCity === "Valledupar") { x = 581, lat = 10.46, lng =-73.25}
  else if (FilterCity === "Buenaventura") { x = 582, lat = 3.89, lng =-77.07}
  else if (FilterCity === "Armenia") { x = 583, lat = 4.53, lng =-75.68}
  else if (FilterCity === "Monteria") { x = 584, lat = 8.75, lng =-75.88}
  else if (FilterCity === "Pasto") { x = 585, lat = 1.21, lng =-77.28}
  else if (FilterCity === "Neiva") { x = 586, lat = 2.93, lng =-75.28}
  else if (FilterCity === "Brazzaville") { x = 587, lat = -4.27, lng =15.28}
  else if (FilterCity === "Pointe-Noire") { x = 588, lat = -4.78, lng =11.86}
  else if (FilterCity === "Kinshasa") { x = 589, lat = -4.33, lng =15.31}
  else if (FilterCity === "Lubumbashi") { x = 590, lat = -11.66, lng =27.48}
  else if (FilterCity === "Mbuji-Mayi") { x = 591, lat = -6.15, lng =23.6}
  else if (FilterCity === "Kananga") { x = 592, lat = -5.9, lng =22.42}
  else if (FilterCity === "Kisangani") { x = 593, lat = 0.52, lng =25.2}
  else if (FilterCity === "Bukavu") { x = 594, lat = -2.51, lng =28.86}
  else if (FilterCity === "Tshikapa") { x = 595, lat = -6.42, lng =20.8}
  else if (FilterCity === "Likasi") { x = 596, lat = -10.98, lng =26.73}
  else if (FilterCity === "Bunia") { x = 597, lat = 1.57, lng =30.25}
  else if (FilterCity === "Kolwezi") { x = 598, lat = -10.71, lng =25.47}
  else if (FilterCity === "Goma") { x = 599, lat = -1.68, lng =29.22}
  else if (FilterCity === "Uvira") { x = 600, lat = -3.4, lng =29.14}
  else if (FilterCity === "Kikwit") { x = 601, lat = -5.04, lng =18.82}
  else if (FilterCity === "Mbandaka") { x = 602, lat = 0.05, lng =18.26}
  else if (FilterCity === "Matadi") { x = 603, lat = -5.82, lng =13.47}
  else if (FilterCity === "San José") { x = 604, lat = 9.93, lng =-84.08}
  else if (FilterCity === "Zagreb") { x = 605, lat = 45.81, lng =15.98}
  else if (FilterCity === "La Habana (Havana)") { x = 606, lat = 23.12, lng =-82.38}
  else if (FilterCity === "Santiago de Cuba") { x = 607, lat = 20.02, lng =-75.82}
  else if (FilterCity === "Camaguey") { x = 608, lat = 21.38, lng =-77.92}
  else if (FilterCity === "Holguin") { x = 609, lat = 20.89, lng =-76.26}
  else if (FilterCity === "Praha (Prague)") { x = 610, lat = 50.09, lng =14.42}
  else if (FilterCity === "Brno") { x = 611, lat = 49.2, lng =16.61}
  else if (FilterCity === "Abomey-Calavi") { x = 612, lat = 6.45, lng =2.36}
  else if (FilterCity === "Cotonou") { x = 613, lat = 6.37, lng =2.42}
  else if (FilterCity === "København (Copenhagen)") { x = 614, lat = 55.68, lng =12.57}
  else if (FilterCity === "Santo Domingo") { x = 615, lat = 18.49, lng =-69.9}
  else if (FilterCity === "Santiago") { x = 616, lat = 19.46, lng =-70.7}
  else if (FilterCity === "Guayaquil") { x = 617, lat = -2.17, lng =-79.9}
  else if (FilterCity === "Quito") { x = 618, lat = -0.23, lng =-78.52}
  else if (FilterCity === "Cuenca") { x = 619, lat = -2.88, lng =-78.98}
  else if (FilterCity === "Santo Domingo") { x = 620, lat = -0.25, lng =-79.17}
  else if (FilterCity === "San Salvador") { x = 621, lat = 13.68935, lng =-89.18718}
  else if (FilterCity === "Addis Ababa") { x = 622, lat = 9.02497, lng =38.74689}
  else if (FilterCity === "Mekele") { x = 623, lat = 13.49667, lng =39.47528}
  else if (FilterCity === "Asmara") { x = 624, lat = 15.33333, lng =38.93333}
  else if (FilterCity === "Tallinn") { x = 625, lat = 59.43696, lng =24.75353}
  else if (FilterCity === "Helsinki") { x = 626, lat = 60.169246, lng =24.940216}
  else if (FilterCity === "Tampere") { x = 627, lat = 61.49911, lng =23.78712}
  else if (FilterCity === "Paris") { x = 628, lat = 48.85341, lng =2.3488}
  else if (FilterCity === "Lyon") { x = 629, lat = 45.74846, lng =4.84671}
  else if (FilterCity === "Marseille-Aix-en-Provence") { x = 630, lat = 43.528414, lng =5.443298}
  else if (FilterCity === "Lille") { x = 631, lat = 50.63297, lng =3.05858}
  else if (FilterCity === "Nice-Cannes") { x = 632, lat = 43.6646, lng =7.15339}
  else if (FilterCity === "Toulouse") { x = 633, lat = 43.60426, lng =1.44367}
  else if (FilterCity === "Bordeaux") { x = 634, lat = 44.84044, lng =-0.5805}
  else if (FilterCity === "Nantes") { x = 635, lat = 47.21725, lng =-1.55336}
  else if (FilterCity === "Toulon") { x = 636, lat = 43.123989, lng =5.933225}
  else if (FilterCity === "Douai-Lens") { x = 637, lat = 50.368243, lng =3.079497}
  else if (FilterCity === "Grenoble") { x = 638, lat = 45.16667, lng =5.71667}
  else if (FilterCity === "Rouen") { x = 639, lat = 49.44313, lng =1.09932}
  else if (FilterCity === "Strasbourg") { x = 640, lat = 48.58342, lng =7.74296}
  else if (FilterCity === "Avignon") { x = 641, lat = 43.94834, lng =4.80892}
  else if (FilterCity === "Montpellier") { x = 642, lat = 43.61092, lng =3.87723}
  else if (FilterCity === "Saint-Étienne") { x = 643, lat = 45.43333, lng =4.4}
  else if (FilterCity === "Béthune") { x = 644, lat = 50.53333, lng =2.63333}
  else if (FilterCity === "Tours") { x = 645, lat = 47.38333, lng =0.68333}
  else if (FilterCity === "Valenciennes") { x = 646, lat = 50.35, lng =3.53333}
  else if (FilterCity === "Rennes") { x = 647, lat = 48.11198, lng =-1.67429}
  else if (FilterCity === "Djibouti") { x = 648, lat = 11.59, lng =43.14}
  else if (FilterCity === "Libreville") { x = 649, lat = 0.3925, lng =9.45365}
  else if (FilterCity === "Tbilisi") { x = 650, lat = 41.69411, lng =44.83368}
  else if (FilterCity === "Banjul") { x = 651, lat = 13.453099, lng =-16.679433}
  else if (FilterCity === "Gaza (incl. Ash Shati Camp)") { x = 652, lat = 31.510618, lng =34.458756}
  else if (FilterCity === "Berlin") { x = 653, lat = 52.52437, lng =13.41053}
  else if (FilterCity === "Hamburg") { x = 654, lat = 53.55, lng =10}
  else if (FilterCity === "München (Munich)") { x = 655, lat = 48.137076, lng =11.573377}
  else if (FilterCity === "Köln (Cologne)") { x = 656, lat = 50.93333, lng =6.95}
  else if (FilterCity === "Frankfurt am Main") { x = 657, lat = 50.11667, lng =8.68333}
  else if (FilterCity === "Stuttgart") { x = 658, lat = 48.78232, lng =9.17702}
  else if (FilterCity === "Duesseldorf") { x = 659, lat = 51.22172, lng =6.77616}
  else if (FilterCity === "Dortmund") { x = 660, lat = 51.51667, lng =7.45}
  else if (FilterCity === "Essen") { x = 661, lat = 51.45374, lng =7.010388}
  else if (FilterCity === "Leipzig") { x = 662, lat = 51.33962, lng =12.37129}
  else if (FilterCity === "Dresden") { x = 663, lat = 51.05089, lng =13.73832}
  else if (FilterCity === "Bremen") { x = 664, lat = 53.07516, lng =8.80777}
  else if (FilterCity === "Hannover") { x = 665, lat = 52.37052, lng =9.73322}
  else if (FilterCity === "Nurenberg") { x = 666, lat = 49.450418, lng =11.075791}
  else if (FilterCity === "Duisburg") { x = 667, lat = 51.43333, lng =6.75}
  else if (FilterCity === "Bochum") { x = 668, lat = 51.48333, lng =7.21667}
  else if (FilterCity === "Wuppertal") { x = 669, lat = 51.26667, lng =7.18333}
  else if (FilterCity === "Bonn") { x = 670, lat = 50.73438, lng =7.09548}
  else if (FilterCity === "Bielefeld") { x = 671, lat = 52.03333, lng =8.53333}
  else if (FilterCity === "Mannheim") { x = 672, lat = 49.48833, lng =8.46472}
  else if (FilterCity === "Karlsruhe") { x = 673, lat = 49.00472, lng =8.38583}
  else if (FilterCity === "Muenster (Westfalen)") { x = 674, lat = 51.96236, lng =7.62571}
  else if (FilterCity === "Kumasi") { x = 675, lat = 6.68848, lng =-1.62443}
  else if (FilterCity === "Accra") { x = 676, lat = 5.55602, lng =-0.1969}
  else if (FilterCity === "Sekondi Takoradi") { x = 677, lat = 4.934, lng =-1.7137}
  else if (FilterCity === "Tamale") { x = 678, lat = 9.40078, lng =-0.8393}
  else if (FilterCity === "Athínai (Athens)") { x = 679, lat = 37.95342, lng =23.74897}
  else if (FilterCity === "Thessaloniki") { x = 680, lat = 40.64028, lng =22.94389}
  else if (FilterCity === "Ciudad de Guatemala (Guatemala City)") { x = 681, lat = 14.612652, lng =-90.530746}
  else if (FilterCity === "Conakry") { x = 682, lat = 9.571642, lng =-13.647602}
  else if (FilterCity === "Nzérékoré") { x = 683, lat = 7.75624, lng =-8.8179}
  else if (FilterCity === "Port-au-Prince") { x = 684, lat = 18.53917, lng =-72.335}
  else if (FilterCity === "Tegucigalpa") { x = 685, lat = 14.0818, lng =-87.20681}
  else if (FilterCity === "San Pedro Sula") { x = 686, lat = 15.5, lng =-88.03333}
  else if (FilterCity === "Choloma") { x = 687, lat = 15.61444, lng =-87.95302}
  else if (FilterCity === "Hong Kong") { x = 688, lat = 22.28, lng =114.19}
  else if (FilterCity === "Budapest") { x = 689, lat = 47.49801, lng =19.03991}
  else if (FilterCity === "Delhi") { x = 690, lat = 28.66667, lng =77.21667}
  else if (FilterCity === "Mumbai (Bombay)") { x = 691, lat = 19.073975, lng =72.880838}
  else if (FilterCity === "Kolkata (Calcutta)") { x = 692, lat = 22.533455, lng =88.356045}
  else if (FilterCity === "Bangalore") { x = 693, lat = 12.97194, lng =77.59369}
  else if (FilterCity === "Chennai (Madras)") { x = 694, lat = 13.053091, lng =80.24875}
  else if (FilterCity === "Hyderabad") { x = 695, lat = 17.37528, lng =78.47444}
  else if (FilterCity === "Ahmadabad") { x = 696, lat = 23.03333, lng =72.61667}
  else if (FilterCity === "Pune (Poona)") { x = 697, lat = 18.516057, lng =73.861578}
  else if (FilterCity === "Surat") { x = 698, lat = 21.16667, lng =72.83333}
  else if (FilterCity === "Jaipur") { x = 699, lat = 26.91667, lng =75.81667}
  else if (FilterCity === "Lucknow") { x = 700, lat = 26.85, lng =80.91667}
  else if (FilterCity === "Kanpur") { x = 701, lat = 26.46667, lng =80.35}
  else if (FilterCity === "Nagpur") { x = 702, lat = 21.15, lng =79.1}
  else if (FilterCity === "Coimbatore") { x = 703, lat = 10.9925, lng =76.96139}
  else if (FilterCity === "Kozhikode (Calicut)") { x = 704, lat = 11.25669, lng =75.778724}
  else if (FilterCity === "Indore") { x = 705, lat = 22.71792, lng =75.8333}
  else if (FilterCity === "Kochi (Cochin)") { x = 706, lat = 9.930693, lng =76.260069}
  else if (FilterCity === "Thrissur") { x = 707, lat = 10.51667, lng =76.21667}
  else if (FilterCity === "Malappuram") { x = 708, lat = 11.06667, lng =76.06667}
  else if (FilterCity === "Patna") { x = 709, lat = 25.6, lng =85.11667}
  else if (FilterCity === "Kannur") { x = 710, lat = 11.872888, lng =75.371554}
  else if (FilterCity === "Bhopal") { x = 711, lat = 23.26667, lng =77.4}
  else if (FilterCity === "Vadodara") { x = 712, lat = 22.3, lng =73.2}
  else if (FilterCity === "Agra") { x = 713, lat = 27.18333, lng =78.01667}
  else if (FilterCity === "Thiruvananthapuram") { x = 714, lat = 8.50694, lng =76.95694}
  else if (FilterCity === "Visakhapatnam") { x = 715, lat = 17.681874, lng =83.209685}
  else if (FilterCity === "Nashik") { x = 716, lat = 19.98333, lng =73.8}
  else if (FilterCity === "Vijayawada") { x = 717, lat = 16.51667, lng =80.61667}
  else if (FilterCity === "Ludhiana") { x = 718, lat = 30.9, lng =75.85}
  else if (FilterCity === "Rajkot") { x = 719, lat = 22.3, lng =70.78333}
  else if (FilterCity === "Madurai") { x = 720, lat = 9.93333, lng =78.11667}
  else if (FilterCity === "Meerut") { x = 721, lat = 28.97155, lng =77.71934}
  else if (FilterCity === "Varanasi (Benares)") { x = 722, lat = 25.316426, lng =82.982198}
  else if (FilterCity === "Jamshedpur") { x = 723, lat = 22.8, lng =86.18333}
  else if (FilterCity === "Srinagar") { x = 724, lat = 34.083658, lng =74.797363}
  else if (FilterCity === "Kollam") { x = 725, lat = 8.88056, lng =76.59167}
  else if (FilterCity === "Raipur") { x = 726, lat = 21.23333, lng =81.63333}
  else if (FilterCity === "Aurangabad") { x = 727, lat = 19.876619, lng =75.34331}
  else if (FilterCity === "Jabalpur") { x = 728, lat = 23.16697, lng =79.95006}
  else if (FilterCity === "Asansol") { x = 729, lat = 23.68333, lng =86.98333}
  else if (FilterCity === "Allahabad") { x = 730, lat = 25.45, lng =81.85}
  else if (FilterCity === "Jodhpur") { x = 731, lat = 26.239232, lng =73.015787}
  else if (FilterCity === "Amritsar") { x = 732, lat = 31.630953, lng =74.875536}
  else if (FilterCity === "Ranchi") { x = 733, lat = 23.35, lng =85.33333}
  else if (FilterCity === "Dhanbad") { x = 734, lat = 23.8, lng =86.45}
  else if (FilterCity === "Tiruppur") { x = 735, lat = 11.11541, lng =77.35456}
  else if (FilterCity === "Gwalior") { x = 736, lat = 26.22361, lng =78.17917}
  else if (FilterCity === "Kota") { x = 737, lat = 25.16645, lng =75.856095}
  else if (FilterCity === "Chandigarh") { x = 738, lat = 30.7343, lng =76.7933}
  else if (FilterCity === "Durg-Bhilainagar") { x = 739, lat = 21.188706, lng =81.280592}
  else if (FilterCity === "Bareilly") { x = 740, lat = 28.35, lng =79.41667}
  else if (FilterCity === "Tiruchirappalli") { x = 741, lat = 10.805, lng =78.68556}
  else if (FilterCity === "Mysore") { x = 742, lat = 12.29791, lng =76.63925}
  else if (FilterCity === "Guwahati (Gauhati)") { x = 743, lat = 26.173547, lng =91.750291}
  else if (FilterCity === "Aligarh") { x = 744, lat = 27.88333, lng =78.08333}
  else if (FilterCity === "Moradabad") { x = 745, lat = 28.83333, lng =78.78333}
  else if (FilterCity === "Hubli-Dharwad") { x = 746, lat = 15.458722, lng =75.010582}
  else if (FilterCity === "Salem") { x = 747, lat = 11.65, lng =78.16667}
  else if (FilterCity === "Bhubaneswar") { x = 748, lat = 20.23333, lng =85.83333}
  else if (FilterCity === "Solapur") { x = 749, lat = 17.68333, lng =75.91667}
  else if (FilterCity === "Jalandhar") { x = 750, lat = 31.3255556, lng =75.5791667}
  else if (FilterCity === "Warangal") { x = 751, lat = 18, lng =79.58333}
  else if (FilterCity === "Saharanpur") { x = 752, lat = 29.96667, lng =77.55}
  else if (FilterCity === "Siliguri") { x = 753, lat = 26.71611, lng =88.42361}
  else if (FilterCity === "Dehradun") { x = 754, lat = 30.31667, lng =78.03333}
  else if (FilterCity === "Bhiwandi") { x = 755, lat = 19.3, lng =73.06667}
  else if (FilterCity === "Guntur") { x = 756, lat = 16.3, lng =80.45}
  else if (FilterCity === "Puducherry") { x = 757, lat = 11.93, lng =79.83}
  else if (FilterCity === "Gorakhpur") { x = 758, lat = 26.759877, lng =83.371379}
  else if (FilterCity === "Bikaner") { x = 759, lat = 28.01667, lng =73.3}
  else if (FilterCity === "Firozabad") { x = 760, lat = 27.15, lng =78.41667}
  else if (FilterCity === "Amravati") { x = 761, lat = 20.93333, lng =77.75}
  else if (FilterCity === "Cuttack") { x = 762, lat = 20.46497, lng =85.87927}
  else if (FilterCity === "Jammu") { x = 763, lat = 32.727805, lng =74.856879}
  else if (FilterCity === "Malegaon") { x = 764, lat = 20.55, lng =74.53333}
  else if (FilterCity === "Belgaum") { x = 765, lat = 15.85212, lng =74.50447}
  else if (FilterCity === "Mangalore") { x = 766, lat = 12.91723, lng =74.85603}
  else if (FilterCity === "Nellore") { x = 767, lat = 14.44625, lng =79.9842}
  else if (FilterCity === "Bhavnagar") { x = 768, lat = 21.76667, lng =72.15}
  else if (FilterCity === "Durgapur") { x = 769, lat = 23.520444, lng =87.311923}
  else if (FilterCity === "Jamnagar") { x = 770, lat = 22.46667, lng =70.06667}
  else if (FilterCity === "Nanded Waghala") { x = 771, lat = 19.161775, lng =77.313728}
  else if (FilterCity === "Gulbarga") { x = 772, lat = 17.3333333, lng =76.8333333}
  else if (FilterCity === "Bokaro Steel City") { x = 773, lat = 23.78732, lng =85.95622}
  else if (FilterCity === "Cherthala") { x = 774, lat = 9.683497, lng =76.336654}
  else if (FilterCity === "Kolhapur") { x = 775, lat = 16.69563, lng =74.23167}
  else if (FilterCity === "Jhansi") { x = 776, lat = 25.43333, lng =78.58333}
  else if (FilterCity === "Erode") { x = 777, lat = 11.3428, lng =77.72741}
  else if (FilterCity === "Muzaffarnagar") { x = 778, lat = 29.46667, lng =77.68333}
  else if (FilterCity === "Raurkela") { x = 779, lat = 22.224891, lng =84.86175}
  else if (FilterCity === "Ajmer") { x = 780, lat = 26.45, lng =74.63333}
  else if (FilterCity === "Kurnool") { x = 781, lat = 15.826681, lng =78.035199}
  else if (FilterCity === "Ujjain") { x = 782, lat = 23.18333, lng =75.76667}
  else if (FilterCity === "Agartala") { x = 783, lat = 23.83639, lng =91.275}
  else if (FilterCity === "Tirupati") { x = 784, lat = 13.65, lng =79.41667}
  else if (FilterCity === "Sangali") { x = 785, lat = 16.85438, lng =74.56417}
  else if (FilterCity === "Kayamkulam") { x = 786, lat = 9.166577, lng =76.504332}
  else if (FilterCity === "Tirunelveli") { x = 787, lat = 8.73333, lng =77.7}
  else if (FilterCity === "Mathura") { x = 788, lat = 27.5, lng =77.68333}
  else if (FilterCity === "Vellore") { x = 789, lat = 12.93333, lng =79.13333}
  else if (FilterCity === "Bilaspur") { x = 790, lat = 22.078278, lng =82.14574}
  else if (FilterCity === "Imphal") { x = 791, lat = 24.81667, lng =93.95}
  else if (FilterCity === "Udaipur") { x = 792, lat = 24.566108, lng =73.691075}
  else if (FilterCity === "Thoothukkudi (Tuticorin)") { x = 793, lat = 8.809046, lng =78.136911}
  else if (FilterCity === "Rajahmundry") { x = 794, lat = 17.003789, lng =81.789447}
  else if (FilterCity === "Patiala") { x = 795, lat = 30.32667, lng =76.40028}
  else if (FilterCity === "Gaya") { x = 796, lat = 24.78333, lng =85}
  else if (FilterCity === "Jalgaon") { x = 797, lat = 21.009222, lng =75.564353}
  else if (FilterCity === "Panipat") { x = 798, lat = 29.38889, lng =76.96806}
  else if (FilterCity === "Kakinada") { x = 799, lat = 16.93333, lng =82.21667}
  else if (FilterCity === "Davangere") { x = 800, lat = 14.460849, lng =75.919871}
  else if (FilterCity === "Bellary") { x = 801, lat = 15.15, lng =76.93333}
  else if (FilterCity === "Akola") { x = 802, lat = 20.73333, lng =77}
  else if (FilterCity === "Bhagalpur") { x = 803, lat = 25.25, lng =87}
  else if (FilterCity === "Muzaffarpur") { x = 804, lat = 26.11667, lng =85.4}
  else if (FilterCity === "Latur") { x = 805, lat = 18.4, lng =76.58333}
  else if (FilterCity === "Yamunanagar") { x = 806, lat = 30.1, lng =77.28333}
  else if (FilterCity === "Kottayam") { x = 807, lat = 9.58333, lng =76.51667}
  else if (FilterCity === "Rohtak") { x = 808, lat = 28.9, lng =76.5666667}
  else if (FilterCity === "Bhilwara") { x = 809, lat = 25.35, lng =74.63333}
  else if (FilterCity === "Sagar") { x = 810, lat = 23.840472, lng =78.738458}
  else if (FilterCity === "Shillong") { x = 811, lat = 25.56892, lng =91.88313}
  else if (FilterCity === "Roorkee") { x = 812, lat = 29.86666667, lng =77.88333333}
  else if (FilterCity === "Santipur") { x = 813, lat = 23.24722, lng =88.43302}
  else if (FilterCity === "Anantapur") { x = 814, lat = 14.68333, lng =77.6}
  else if (FilterCity === "Ahmadnagar") { x = 815, lat = 19.08333, lng =74.73333}
  else if (FilterCity === "Dhule") { x = 816, lat = 20.9, lng =74.78333}
  else if (FilterCity === "Brahmapur") { x = 817, lat = 19.31667, lng =84.78333}
  else if (FilterCity === "Korba") { x = 818, lat = 22.35, lng =82.68333}
  else if (FilterCity === "Kadapa") { x = 819, lat = 14.470955, lng =78.824135}
  else if (FilterCity === "Rampur") { x = 820, lat = 28.806232, lng =79.027699}
  else if (FilterCity === "Alwar") { x = 821, lat = 27.56246, lng =76.625}
  else if (FilterCity === "English Bazar") { x = 822, lat = 25, lng =88.15}
  else if (FilterCity === "Purnia") { x = 823, lat = 25.78333, lng =87.46667}
  else if (FilterCity === "Barddhaman") { x = 824, lat = 23.24056, lng =87.86944}
  else if (FilterCity === "Bijapur") { x = 825, lat = 16.82442, lng =75.71537}
  else if (FilterCity === "Begusarai") { x = 826, lat = 25.41666667, lng =86.13333333}
  else if (FilterCity === "Hardwar") { x = 827, lat = 29.96667, lng =78.16667}
  else if (FilterCity === "Ranipet") { x = 828, lat = 12.93148, lng =79.332312}
  else if (FilterCity === "Shahjahanpur") { x = 829, lat = 27.88333, lng =79.91667}
  else if (FilterCity === "Junagadh") { x = 830, lat = 21.51667, lng =70.46667}
  else if (FilterCity === "Hosur") { x = 831, lat = 12.716667, lng =77.816667}
  else if (FilterCity === "Dindigul") { x = 832, lat = 10.36896, lng =77.98036}
  else if (FilterCity === "Shimoga") { x = 833, lat = 13.93157, lng =75.56791}
  else if (FilterCity === "Karimnagar") { x = 834, lat = 18.43333, lng =79.15}
  else if (FilterCity === "Ichalakaranji") { x = 835, lat = 16.7, lng =74.46667}
  else if (FilterCity === "Habra") { x = 836, lat = 22.83444, lng =88.6275}
  else if (FilterCity === "Tumkur") { x = 837, lat = 13.34222, lng =77.10167}
  else if (FilterCity === "Chandrapur") { x = 838, lat = 19.95, lng =79.3}
  else if (FilterCity === "Thanjavur") { x = 839, lat = 10.8, lng =79.15}
  else if (FilterCity === "Parbhani") { x = 840, lat = 19.26667, lng =76.78333}
  else if (FilterCity === "Bihar Sharif") { x = 841, lat = 25.18333, lng =85.51667}
  else if (FilterCity === "Hisar") { x = 842, lat = 29.16667, lng =75.71667}
  else if (FilterCity === "Palakkad") { x = 843, lat = 10.7725, lng =76.65139}
  else if (FilterCity === "Darbhanga") { x = 844, lat = 26.16667, lng =85.9}
  else if (FilterCity === "Aizawl") { x = 845, lat = 23.72444, lng =92.7175}
  else if (FilterCity === "Anand") { x = 846, lat = 22.56667, lng =72.93333}
  else if (FilterCity === "Bathinda") { x = 847, lat = 30.2, lng =74.95}
  else if (FilterCity === "Nizamabad") { x = 848, lat = 18.67154, lng =78.0988}
  else if (FilterCity === "Dewas") { x = 849, lat = 22.96667, lng =76.06667}
  else if (FilterCity === "Maunath Bhanjan") { x = 850, lat = 25.947485, lng =83.558986}
  else if (FilterCity === "Farrukhabad") { x = 851, lat = 27.39048, lng =79.58006}
  else if (FilterCity === "Baharampur") { x = 852, lat = 24.1, lng =88.25}
  else if (FilterCity === "Jalna") { x = 853, lat = 19.83333, lng =75.88333}
  else if (FilterCity === "Satna") { x = 854, lat = 24.58333, lng =80.83333}
  else if (FilterCity === "Navsari") { x = 855, lat = 20.948507, lng =72.930834}
  else if (FilterCity === "Jakarta") { x = 856, lat = -6.211831, lng =106.841646}
  else if (FilterCity === "Surabaya") { x = 857, lat = -7.288838, lng =112.741078}
  else if (FilterCity === "Bandung") { x = 858, lat = -6.919393, lng =107.608456}
  else if (FilterCity === "Medan") { x = 859, lat = 3.58333, lng =98.66667}
  else if (FilterCity === "Semarang") { x = 860, lat = -6.9932, lng =110.4203}
  else if (FilterCity === "Makassar (Ujung Pandang)") { x = 861, lat = -5.144396, lng =119.423639}
  else if (FilterCity === "Palembang") { x = 862, lat = -2.91673, lng =104.7458}
  else if (FilterCity === "Batam") { x = 863, lat = 1.119078, lng =104.031275}
  else if (FilterCity === "Pekan Baru") { x = 864, lat = 0.53333, lng =101.45}
  else if (FilterCity === "Denpasar") { x = 865, lat = -8.65, lng =115.21667}
  else if (FilterCity === "Bogor") { x = 866, lat = -6.606481, lng =106.801891}
  else if (FilterCity === "Bandar Lampung") { x = 867, lat = -5.4254, lng =105.258}
  else if (FilterCity === "Padang") { x = 868, lat = -0.94924, lng =100.35427}
  else if (FilterCity === "Samarinda") { x = 869, lat = -0.5, lng =117.15}
  else if (FilterCity === "Malang") { x = 870, lat = -7.9797, lng =112.6304}
  else if (FilterCity === "Tasikmalaya") { x = 871, lat = -7.327905, lng =108.216618}
  else if (FilterCity === "Banjarmasin") { x = 872, lat = -3.32442, lng =114.591}
  else if (FilterCity === "Balikpapan") { x = 873, lat = -1.26753, lng =116.82887}
  else if (FilterCity === "Jambi") { x = 874, lat = -1.6, lng =103.61667}
  else if (FilterCity === "Pontianak") { x = 875, lat = -0.03333, lng =109.33333}
  else if (FilterCity === "Surakarta") { x = 876, lat = -7.55611, lng =110.83167}
  else if (FilterCity === "Mataram") { x = 877, lat = -8.58333, lng =116.11667}
  else if (FilterCity === "Manado") { x = 878, lat = 1.487, lng =124.8455}
  else if (FilterCity === "Ambon") { x = 879, lat = -3.69543, lng =128.1814}
  else if (FilterCity === "Yogyakarta") { x = 880, lat = -7.78278, lng =110.36083}
  else if (FilterCity === "Sukabumi") { x = 881, lat = -6.91806, lng =106.92667}
  else if (FilterCity === "Bengkulu") { x = 882, lat = -3.800278, lng =102.265278}
  else if (FilterCity === "Cirebon") { x = 883, lat = -6.7063, lng =108.557}
  else if (FilterCity === "Tehran") { x = 884, lat = 35.69439, lng =51.42151}
  else if (FilterCity === "Mashhad") { x = 885, lat = 36.297, lng =59.6062}
  else if (FilterCity === "Esfahan") { x = 886, lat = 32.65722, lng =51.67761}
  else if (FilterCity === "Karaj") { x = 887, lat = 35.8355, lng =51.0103}
  else if (FilterCity === "Shiraz") { x = 888, lat = 29.6036, lng =52.5388}
  else if (FilterCity === "Tabriz") { x = 889, lat = 38.08, lng =46.2919}
  else if (FilterCity === "Ahvaz") { x = 890, lat = 31.3203, lng =48.6693}
  else if (FilterCity === "Qom") { x = 891, lat = 34.6401, lng =50.8764}
  else if (FilterCity === "Kermanshah") { x = 892, lat = 34.31417, lng =47.065}
  else if (FilterCity === "Orumiyeh") { x = 893, lat = 37.55274, lng =45.07605}
  else if (FilterCity === "Rasht") { x = 894, lat = 37.28077, lng =49.58319}
  else if (FilterCity === "Hamadan") { x = 895, lat = 34.79922, lng =48.51456}
  else if (FilterCity === "Zahedan") { x = 896, lat = 29.4963, lng =60.8629}
  else if (FilterCity === "Kerman") { x = 897, lat = 30.28321, lng =57.07879}
  else if (FilterCity === "Ardabil") { x = 898, lat = 38.2498, lng =48.2933}
  else if (FilterCity === "Yazd") { x = 899, lat = 31.89722, lng =54.3675}
  else if (FilterCity === "Arak") { x = 900, lat = 34.09174, lng =49.68916}
  else if (FilterCity === "Bandar Abbas") { x = 901, lat = 27.1865, lng =56.2808}
  else if (FilterCity === "Sanandaj") { x = 902, lat = 35.3144, lng =46.9923}
  else if (FilterCity === "Zanjan") { x = 903, lat = 36.6736, lng =48.4787}
  else if (FilterCity === "Eslamshahr") { x = 904, lat = 35.562618, lng =51.235883}
  else if (FilterCity === "Qazvin") { x = 905, lat = 36.26877, lng =50.0041}
  else if (FilterCity === "Gorgan") { x = 906, lat = 36.84165, lng =54.44361}
  else if (FilterCity === "Khorramabad") { x = 907, lat = 33.48778, lng =48.35583}
  else if (FilterCity === "Malard") { x = 908, lat = 35.665833, lng =50.976667}
  else if (FilterCity === "Qods") { x = 909, lat = 35.713011, lng =51.105508}
  else if (FilterCity === "Sari") { x = 910, lat = 36.56332, lng =53.06009}
  else if (FilterCity === "Baghdad") { x = 911, lat = 33.34058, lng =44.40088}
  else if (FilterCity === "Al-Mawsil (Mosul)") { x = 912, lat = 36.335, lng =43.1188889}
  else if (FilterCity === "Irbil (Erbil)") { x = 913, lat = 36.19257, lng =44.01062}
  else if (FilterCity === "Al-Basrah (Basra)") { x = 914, lat = 30.49721, lng =47.81491}
  else if (FilterCity === "Sulaimaniya") { x = 915, lat = 35.5616667, lng =45.4408333}
  else if (FilterCity === "Najaf") { x = 916, lat = 31.997314, lng =44.331352}
  else if (FilterCity === "Karbala") { x = 917, lat = 32.5983333, lng =44.0238889}
  else if (FilterCity === "Kirkuk") { x = 918, lat = 35.4680556, lng =44.3922222}
  else if (FilterCity === "Nasiriyah") { x = 919, lat = 31.0333333, lng =46.2666667}
  else if (FilterCity === "Hillah") { x = 920, lat = 32.4825, lng =44.4313889}
  else if (FilterCity === "Amara") { x = 921, lat = 31.834419, lng =47.152446}
  else if (FilterCity === "Baaqoobah") { x = 922, lat = 33.75, lng =44.6411111}
  else if (FilterCity === "Diwaniyah") { x = 923, lat = 31.99051, lng =44.93063}
  else if (FilterCity === "Ramadi") { x = 924, lat = 33.4166667, lng =43.3}
  else if (FilterCity === "Kut") { x = 925, lat = 32.5, lng =45.8333333}
  else if (FilterCity === "Faloojah") { x = 926, lat = 33.35581, lng =43.78612}
  else if (FilterCity === "Dublin") { x = 927, lat = 53.33306, lng =-6.24889}
  else if (FilterCity === "Tel Aviv-Yafo (Tel Aviv-Jaffa)") { x = 928, lat = 32.08088, lng =34.78057}
  else if (FilterCity === "Hefa (Haifa)") { x = 929, lat = 32.813261, lng =34.991355}
  else if (FilterCity === "Jerusalem") { x = 930, lat = 31.76904, lng =35.21633}
  else if (FilterCity === "Be'er Sheva") { x = 931, lat = 31.25181, lng =34.7913}
  else if (FilterCity === "Roma (Rome)") { x = 932, lat = 41.894743, lng =12.481142}
  else if (FilterCity === "Milano (Milan)") { x = 933, lat = 45.55307, lng =9.18344}
  else if (FilterCity === "Napoli (Naples)") { x = 934, lat = 40.850178, lng =14.259213}
  else if (FilterCity === "Torino (Turin)") { x = 935, lat = 45.068672, lng =7.677218}
  else if (FilterCity === "Palermo") { x = 936, lat = 38.11582, lng =13.35976}
  else if (FilterCity === "Bergamo") { x = 937, lat = 45.69798, lng =9.66895}
  else if (FilterCity === "Bologna") { x = 938, lat = 44.49381, lng =11.33875}
  else if (FilterCity === "Florence") { x = 939, lat = 43.76667, lng =11.25}
  else if (FilterCity === "Genova (Genoa)") { x = 940, lat = 44.40632, lng =8.93386}
  else if (FilterCity === "Padova") { x = 941, lat = 45.41519, lng =11.88181}
  else if (FilterCity === "Busto Arsizio") { x = 942, lat = 45.61128, lng =8.84914}
  else if (FilterCity === "Venezia") { x = 943, lat = 45.43565, lng =12.339589}
  else if (FilterCity === "Bari") { x = 944, lat = 41.11773, lng =16.85118}
  else if (FilterCity === "Verona") { x = 945, lat = 45.43419, lng =10.99779}
  else if (FilterCity === "Seregno") { x = 946, lat = 45.65238, lng =9.20034}
  else if (FilterCity === "Catania") { x = 947, lat = 37.50213, lng =15.08719}
  else if (FilterCity === "Cagliari") { x = 948, lat = 39.20738, lng =9.13462}
  else if (FilterCity === "Brescia") { x = 949, lat = 45.52478, lng =10.22727}
  else if (FilterCity === "Como") { x = 950, lat = 45.80998, lng =9.08744}
  else if (FilterCity === "Taranto") { x = 951, lat = 40.4625, lng =17.25972}
  else if (FilterCity === "Caserta") { x = 952, lat = 41.08322, lng =14.33493}
  else if (FilterCity === "Latina") { x = 953, lat = 41.46614, lng =12.9043}
  else if (FilterCity === "Salerno") { x = 954, lat = 40.67797, lng =14.76599}
  else if (FilterCity === "Pescara") { x = 955, lat = 42.46024, lng =14.21021}
  else if (FilterCity === "Treviso") { x = 956, lat = 45.66667, lng =12.245}
  else if (FilterCity === "Reggio Emilia") { x = 957, lat = 44.69825, lng =10.63125}
  else if (FilterCity === "Modena") { x = 958, lat = 44.64783, lng =10.92539}
  else if (FilterCity === "Barletta") { x = 959, lat = 41.31183, lng =16.29077}
  else if (FilterCity === "Nola") { x = 960, lat = 40.92201, lng =14.53294}
  else if (FilterCity === "Parma") { x = 961, lat = 44.80266, lng =10.32898}
  else if (FilterCity === "Vicenza") { x = 962, lat = 45.55729, lng =11.5409}
  else if (FilterCity === "Abidjan") { x = 963, lat = 5.35, lng =-4.03}
  else if (FilterCity === "Bouake") { x = 964, lat = 7.69, lng =-5.03}
  else if (FilterCity === "San Pedro") { x = 965, lat = 4.73, lng =-6.62}
  else if (FilterCity === "Kingston") { x = 966, lat = 17.99702, lng =-76.79358}
  else if (FilterCity === "Tokyo") { x = 967, lat = 35.6895, lng =139.69171}
  else if (FilterCity === "Kinki M.M.A. (Osaka)") { x = 968, lat = 34.675834, lng =135.553823}
  else if (FilterCity === "Chukyo M.M.A. (Nagoya)") { x = 969, lat = 35.18147, lng =136.90641}
  else if (FilterCity === "Kitakyushu-Fukuoka M.M.A.") { x = 970, lat = 33.6064, lng =130.4181}
  else if (FilterCity === "Shizuoka-Hamamatsu M.M.A.") { x = 971, lat = 34.9769, lng =138.3831}
  else if (FilterCity === "Sapporo") { x = 972, lat = 43.06417, lng =141.34694}
  else if (FilterCity === "Hiroshima") { x = 973, lat = 34.392823, lng =132.460534}
  else if (FilterCity === "Sendai") { x = 974, lat = 38.256047, lng =140.897639}
  else if (FilterCity === "Kumamoto") { x = 975, lat = 32.78972, lng =130.74167}
  else if (FilterCity === "Niigata") { x = 976, lat = 37.913894, lng =139.032723}
  else if (FilterCity === "Okayama") { x = 977, lat = 34.650668, lng =133.913478}
  else if (FilterCity === "Kagoshima") { x = 978, lat = 31.570982, lng =130.548469}
  else if (FilterCity === "Matsuyama") { x = 979, lat = 33.83239, lng =132.75951}
  else if (FilterCity === "Utsunomiya") { x = 980, lat = 36.56583, lng =139.88361}
  else if (FilterCity === "Kanazawa") { x = 981, lat = 36.556368, lng =136.642985}
  else if (FilterCity === "Oita") { x = 982, lat = 33.236487, lng =131.609909}
  else if (FilterCity === "Naha") { x = 983, lat = 26.21219, lng =127.687286}
  else if (FilterCity === "Nagasaki") { x = 984, lat = 32.750214, lng =129.876176}
  else if (FilterCity === "Asahikawa") { x = 985, lat = 43.76778, lng =142.37028}
  else if (FilterCity === "Almaty") { x = 986, lat = 43.247189, lng =76.910127}
  else if (FilterCity === "Astana") { x = 987, lat = 51.1801, lng =71.44598}
  else if (FilterCity === "Shimkent") { x = 988, lat = 42.3, lng =69.6}
  else if (FilterCity === "Karaganda") { x = 989, lat = 49.801088, lng =73.095428}
  else if (FilterCity === "Aktyubinsk") { x = 990, lat = 50.285462, lng =57.162773}
  else if (FilterCity === "Pavlodar") { x = 991, lat = 52.3, lng =76.95}
  else if (FilterCity === "Semipalatinsk") { x = 992, lat = 50.42675, lng =80.26669}
  else if (FilterCity === "Ust-Kamenogorsk") { x = 993, lat = 49.96466, lng =82.60898}
  else if (FilterCity === "Taraz") { x = 994, lat = 42.9, lng =71.36667}
  else if (FilterCity === "Amman") { x = 995, lat = 31.95522, lng =35.94503}
  else if (FilterCity === "Zarqa") { x = 996, lat = 32.068265, lng =36.088935}
  else if (FilterCity === "Ar-Rusayfah") { x = 997, lat = 32.01555556, lng =36.04277778}
  else if (FilterCity === "Irbid") { x = 998, lat = 32.55556, lng =35.85}
  else if (FilterCity === "Nairobi") { x = 999, lat = -1.28333, lng =36.81667}
  else if (FilterCity === "Mombasa") { x = 1000, lat = -4.05466, lng =39.66359}
  else if (FilterCity === "Nakuru") { x = 1001, lat = -0.28333, lng =36.06667}
  else if (FilterCity === "Eldoret") { x = 1002, lat = 0.52036, lng =35.26992}
  else if (FilterCity === "P'yongyang") { x = 1003, lat = 39.03, lng =125.75}
  else if (FilterCity === "Chongjin") { x = 1004, lat = 41.8, lng =129.78}
  else if (FilterCity === "Hamhung") { x = 1005, lat = 39.92, lng =127.54}
  else if (FilterCity === "Wonsan") { x = 1006, lat = 39.15, lng =127.44}
  else if (FilterCity === "Sinuiju") { x = 1007, lat = 40.1, lng =124.4}
  else if (FilterCity === "Seoul") { x = 1008, lat = 37.56826, lng =126.97783}
  else if (FilterCity === "Busan") { x = 1009, lat = 35.10278, lng =129.04028}
  else if (FilterCity === "Incheon") { x = 1010, lat = 37.45361, lng =126.73167}
  else if (FilterCity === "Daegu") { x = 1011, lat = 35.87028, lng =128.59111}
  else if (FilterCity === "Daejon") { x = 1012, lat = 36.32139, lng =127.41972}
  else if (FilterCity === "Gwangju") { x = 1013, lat = 35.146111, lng =126.918611}
  else if (FilterCity === "Suweon") { x = 1014, lat = 37.26349, lng =127.021385}
  else if (FilterCity === "Yongin") { x = 1015, lat = 37.235245, lng =127.203292}
  else if (FilterCity === "Changwon") { x = 1016, lat = 35.22806, lng =128.68111}
  else if (FilterCity === "Seongnam") { x = 1017, lat = 37.43861, lng =127.13778}
  else if (FilterCity === "Goyang") { x = 1018, lat = 37.65639, lng =126.835}
  else if (FilterCity === "Ulsan") { x = 1019, lat = 35.53722, lng =129.31667}
  else if (FilterCity === "Bucheon") { x = 1020, lat = 37.49889, lng =126.78306}
  else if (FilterCity === "Ansan") { x = 1021, lat = 37.32361, lng =126.82194}
  else if (FilterCity === "Cheongju") { x = 1022, lat = 36.63722, lng =127.48972}
  else if (FilterCity === "Jeonju") { x = 1023, lat = 35.82194, lng =127.14889}
  else if (FilterCity === "Anyang") { x = 1024, lat = 37.3925, lng =126.92694}
  else if (FilterCity === "Cheonan") { x = 1025, lat = 36.813188, lng =127.140955}
  else if (FilterCity === "Uijeongbu") { x = 1026, lat = 37.7415, lng =127.0474}
  else if (FilterCity === "Siheung") { x = 1027, lat = 37.455619, lng =126.902408}
  else if (FilterCity === "Gumi") { x = 1028, lat = 36.119127, lng =128.345482}
  else if (FilterCity === "Pohang") { x = 1029, lat = 36.017205, lng =129.360216}
  else if (FilterCity === "Gwangmyeong") { x = 1030, lat = 37.47722, lng =126.86639}
  else if (FilterCity === "Jeju") { x = 1031, lat = 33.50972, lng =126.52194}
  else if (FilterCity === "Gimhae") { x = 1032, lat = 35.23417, lng =128.88111}
  else if (FilterCity === "Al Kuwayt (Kuwait City)") { x = 1033, lat = 29.353429, lng =47.982244}
  else if (FilterCity === "Bishkek") { x = 1034, lat = 42.87, lng =74.59}
  else if (FilterCity === "Vientiane") { x = 1035, lat = 17.96667, lng =102.6}
  else if (FilterCity === "Bayrut (Beirut)") { x = 1036, lat = 33.9, lng =35.48333}
  else if (FilterCity === "Riga") { x = 1037, lat = 56.946, lng =24.10589}
  else if (FilterCity === "Monrovia") { x = 1038, lat = 6.30054, lng =-10.7969}
  else if (FilterCity === "Tarabulus (Tripoli)") { x = 1039, lat = 32.87519, lng =13.18746}
  else if (FilterCity === "Banghazi") { x = 1040, lat = 32.11667, lng =20.06667}
  else if (FilterCity === "Misratah") { x = 1041, lat = 32.37535, lng =15.09254}
  else if (FilterCity === "Vilnius") { x = 1042, lat = 54.68916, lng =25.2798}
  else if (FilterCity === "Macao") { x = 1043, lat = 22.2, lng =113.55}
  else if (FilterCity === "Antananarivo") { x = 1044, lat = -18.91368, lng =47.53613}
  else if (FilterCity === "Toamasina") { x = 1045, lat = -18.16667, lng =49.38333}
  else if (FilterCity === "Lilongwe") { x = 1046, lat = -13.96692, lng =33.78725}
  else if (FilterCity === "Blantyre-Limbe") { x = 1047, lat = -15.78499, lng =35.00854}
  else if (FilterCity === "Kuala Lumpur") { x = 1048, lat = 3.1412, lng =101.68653}
  else if (FilterCity === "Johor Bahru") { x = 1049, lat = 1.4655, lng =103.7578}
  else if (FilterCity === "Ipoh") { x = 1050, lat = 4.583333, lng =101.0833}
  else if (FilterCity === "Kuching") { x = 1051, lat = 1.55, lng =110.33333}
  else if (FilterCity === "Kota Kinabalu") { x = 1052, lat = 5.978172, lng =116.116577}
  else if (FilterCity === "Kuantan") { x = 1053, lat = 3.8077, lng =103.326}
  else if (FilterCity === "Seremban") { x = 1054, lat = 2.7297, lng =101.9381}
  else if (FilterCity === "Sandakan") { x = 1055, lat = 5.8402, lng =118.1179}
  else if (FilterCity === "Kuala Terengganu") { x = 1056, lat = 5.3302, lng =103.1408}
  else if (FilterCity === "Kota Bharu") { x = 1057, lat = 6.133333, lng =102.25}
  else if (FilterCity === "Bamako") { x = 1058, lat = 12.65, lng =-8}
  else if (FilterCity === "Nouakchott") { x = 1059, lat = 18.08581, lng =-15.9785}
  else if (FilterCity === "Ciudad de México (Mexico City)") { x = 1060, lat = 19.427318, lng =-99.141869}
  else if (FilterCity === "Guadalajara") { x = 1061, lat = 20.66667, lng =-103.33333}
  else if (FilterCity === "Monterrey") { x = 1062, lat = 25.66667, lng =-100.31667}
  else if (FilterCity === "Puebla") { x = 1063, lat = 19.041532, lng =-98.204962}
  else if (FilterCity === "Toluca de Lerdo") { x = 1064, lat = 19.283896, lng =-99.657254}
  else if (FilterCity === "Tijuana") { x = 1065, lat = 32.53333, lng =-117.01667}
  else if (FilterCity === "León de los Aldamas") { x = 1066, lat = 21.123373, lng =-101.680486}
  else if (FilterCity === "Ciudad Juárez") { x = 1067, lat = 31.73333, lng =-106.48333}
  else if (FilterCity === "Torreón") { x = 1068, lat = 25.539231, lng =-103.461434}
  else if (FilterCity === "Querétaro") { x = 1069, lat = 20.6, lng =-100.38333}
  else if (FilterCity === "San Luis Potosí") { x = 1070, lat = 22.15, lng =-100.98333}
  else if (FilterCity === "Mérida") { x = 1071, lat = 20.96667, lng =-89.61667}
  else if (FilterCity === "Mexicali") { x = 1072, lat = 32.65194, lng =-115.46833}
  else if (FilterCity === "Aguascalientes") { x = 1073, lat = 21.88333, lng =-102.3}
  else if (FilterCity === "Cuernavaca") { x = 1074, lat = 18.91667, lng =-99.25}
  else if (FilterCity === "Chihuahua") { x = 1075, lat = 28.63333, lng =-106.08333}
  else if (FilterCity === "Saltillo") { x = 1076, lat = 25.41667, lng =-101}
  else if (FilterCity === "Tampico") { x = 1077, lat = 22.21667, lng =-97.85}
  else if (FilterCity === "Morelia") { x = 1078, lat = 19.70078, lng =-101.18443}
  else if (FilterCity === "Acapulco de Juárez") { x = 1079, lat = 16.86336, lng =-99.8901}
  else if (FilterCity === "Veracruz") { x = 1080, lat = 19.2, lng =-96.13333}
  else if (FilterCity === "Reynosa") { x = 1081, lat = 26.08333, lng =-98.28333}
  else if (FilterCity === "Cancún") { x = 1082, lat = 21.17429, lng =-86.84656}
  else if (FilterCity === "Villahermosa") { x = 1083, lat = 17.98333, lng =-92.91667}
  else if (FilterCity === "Hermosillo") { x = 1084, lat = 29.084507, lng =-110.967187}
  else if (FilterCity === "Tuxtla Gutierrez") { x = 1085, lat = 16.75, lng =-93.11667}
  else if (FilterCity === "Culiacán") { x = 1086, lat = 24.79944, lng =-107.38972}
  else if (FilterCity === "Xalapa") { x = 1087, lat = 19.537714, lng =-96.913656}
  else if (FilterCity === "Oaxaca de Juárez") { x = 1088, lat = 17.05, lng =-96.71667}
  else if (FilterCity === "Celaya") { x = 1089, lat = 20.51667, lng =-100.81667}
  else if (FilterCity === "Pachuca de Soto") { x = 1090, lat = 20.11697, lng =-98.73329}
  else if (FilterCity === "Durango") { x = 1091, lat = 24.03333, lng =-104.66667}
  else if (FilterCity === "Tlaxcala") { x = 1092, lat = 19.31389, lng =-98.24167}
  else if (FilterCity === "Poza Rica de Hidalgo") { x = 1093, lat = 20.53315, lng =-97.45946}
  else if (FilterCity === "Matamoros") { x = 1094, lat = 25.53333, lng =-103.25}
  else if (FilterCity === "Tepic") { x = 1095, lat = 21.5, lng =-104.9}
  else if (FilterCity === "Puerto Vallarta") { x = 1096, lat = 20.62041, lng =-105.23066}
  else if (FilterCity === "Cuautla Morelos") { x = 1097, lat = 18.8, lng =-98.95}
  else if (FilterCity === "Orizaba") { x = 1098, lat = 18.85, lng =-97.1}
  else if (FilterCity === "Irapuato") { x = 1099, lat = 20.6784, lng =-101.3465}
  else if (FilterCity === "Nuevo Laredo") { x = 1100, lat = 27.47629, lng =-99.51639}
  else if (FilterCity === "Mazatlán") { x = 1101, lat = 23.240665, lng =-106.414306}
  else if (FilterCity === "Minatitlán") { x = 1102, lat = 18.0013, lng =-94.5581}
  else if (FilterCity === "Coatzacoalcos") { x = 1103, lat = 18.15, lng =-94.41667}
  else if (FilterCity === "Colima") { x = 1104, lat = 19.23333, lng =-103.71667}
  else if (FilterCity === "Zacatecas") { x = 1105, lat = 22.77559, lng =-102.57218}
  else if (FilterCity === "Córdoba") { x = 1106, lat = 18.88333, lng =-96.93333}
  else if (FilterCity === "Ciudad Victoria") { x = 1107, lat = 23.73333, lng =-99.13333}
  else if (FilterCity === "Monclova") { x = 1108, lat = 26.9, lng =-101.41667}
  else if (FilterCity === "Ciudad Obregón") { x = 1109, lat = 27.48333, lng =-109.93333}
  else if (FilterCity === "Tehuacán") { x = 1110, lat = 18.45, lng =-97.38333}
  else if (FilterCity === "Ulaanbaatar") { x = 1111, lat = 47.90771, lng =106.88324}
  else if (FilterCity === "Chişinău") { x = 1112, lat = 47.00556, lng =28.8575}
  else if (FilterCity === "Dar-el-Beida (Casablanca)") { x = 1113, lat = 33.59278, lng =-7.61916}
  else if (FilterCity === "Rabat") { x = 1114, lat = 34.01325, lng =-6.83255}
  else if (FilterCity === "Fès") { x = 1115, lat = 34.03715, lng =-4.9998}
  else if (FilterCity === "Marrakech") { x = 1116, lat = 31.63148, lng =-8.00828}
  else if (FilterCity === "Tanger") { x = 1117, lat = 35.784722, lng =-5.812778}
  else if (FilterCity === "Meknès") { x = 1118, lat = 33.89352, lng =-5.54727}
  else if (FilterCity === "Agadir") { x = 1119, lat = 30.424847, lng =-9.593695}
  else if (FilterCity === "Tétouan") { x = 1120, lat = 35.57109, lng =-5.37242}
  else if (FilterCity === "Oujda") { x = 1121, lat = 34.68052, lng =-1.90764}
  else if (FilterCity === "Kénitra") { x = 1122, lat = 34.26101, lng =-6.5802}
  else if (FilterCity === "Safi") { x = 1123, lat = 32.29939, lng =-9.23718}
  else if (FilterCity === "Maputo") { x = 1124, lat = -25.96528, lng =32.58917}
  else if (FilterCity === "Matola") { x = 1125, lat = -25.96222, lng =32.45889}
  else if (FilterCity === "Nampula") { x = 1126, lat = -15.11646, lng =39.2666}
  else if (FilterCity === "Beira") { x = 1127, lat = -19.84361, lng =34.83889}
  else if (FilterCity === "Masqat (Muscat)") { x = 1128, lat = 23.61387, lng =58.5922}
  else if (FilterCity === "Windhoek") { x = 1129, lat = -22.55941, lng =17.08323}
  else if (FilterCity === "Kathmandu") { x = 1130, lat = 27.70169, lng =85.3206}
  else if (FilterCity === "Pokhara") { x = 1131, lat = 28.233333, lng =83.983333}
  else if (FilterCity === "Amsterdam") { x = 1132, lat = 52.37403, lng =4.88969}
  else if (FilterCity === "Rotterdam") { x = 1133, lat = 51.9225, lng =4.47917}
  else if (FilterCity === "s-Gravenhage (The Hague)") { x = 1134, lat = 52.0767, lng =4.2986}
  else if (FilterCity === "Utrecht") { x = 1135, lat = 52.09083, lng =5.12222}
  else if (FilterCity === "Eindhoven") { x = 1136, lat = 51.44083, lng =5.47778}
  else if (FilterCity === "Auckland") { x = 1137, lat = -36.86667, lng =174.76667}
  else if (FilterCity === "Wellington") { x = 1138, lat = -41.28664, lng =174.77557}
  else if (FilterCity === "Christchurch") { x = 1139, lat = -43.53333, lng =172.63333}
  else if (FilterCity === "Managua") { x = 1140, lat = 12.13282, lng =-86.2504}
  else if (FilterCity === "Niamey") { x = 1141, lat = 13.51366, lng =2.1098}
  else if (FilterCity === "Zinder") { x = 1142, lat = 13.80716, lng =8.9881}
  else if (FilterCity === "Lagos") { x = 1143, lat = 6.45306, lng =3.39583}
  else if (FilterCity === "Kano") { x = 1144, lat = 12.00012, lng =8.51672}
  else if (FilterCity === "Ibadan") { x = 1145, lat = 7.38778, lng =3.89639}
  else if (FilterCity === "Abuja") { x = 1146, lat = 9.05735, lng =7.48976}
  else if (FilterCity === "Port Harcourt") { x = 1147, lat = 4.77742, lng =7.0134}
  else if (FilterCity === "Benin City") { x = 1148, lat = 6.33504, lng =5.62749}
  else if (FilterCity === "Onitsha") { x = 1149, lat = 6.14543, lng =6.78845}
  else if (FilterCity === "Kaduna") { x = 1150, lat = 10.52224, lng =7.43828}
  else if (FilterCity === "Aba") { x = 1151, lat = 5.10658, lng =7.36667}
  else if (FilterCity === "Ilorin") { x = 1152, lat = 8.5, lng =4.55}
  else if (FilterCity === "Uyo") { x = 1153, lat = 5.05127, lng =7.9335}
  else if (FilterCity === "Jos") { x = 1154, lat = 9.91667, lng =8.9}
  else if (FilterCity === "Nnewi") { x = 1155, lat = 6.01986, lng =6.91478}
  else if (FilterCity === "Maiduguri") { x = 1156, lat = 11.84644, lng =13.16027}
  else if (FilterCity === "Owerri") { x = 1157, lat = 5.48333, lng =7.03041}
  else if (FilterCity === "Ikorodu") { x = 1158, lat = 6.608716, lng =3.510823}
  else if (FilterCity === "Zaria") { x = 1159, lat = 11.11128, lng =7.7227}
  else if (FilterCity === "Enugu") { x = 1160, lat = 6.4402, lng =7.4943}
  else if (FilterCity === "Warri") { x = 1161, lat = 5.51667, lng =5.75}
  else if (FilterCity === "Oshogbo") { x = 1162, lat = 7.76667, lng =4.56667}
  else if (FilterCity === "Umuahia") { x = 1163, lat = 5.52627, lng =7.48959}
  else if (FilterCity === "Akure") { x = 1164, lat = 7.25256, lng =5.19312}
  else if (FilterCity === "Sokoto") { x = 1165, lat = 13.06092, lng =5.23902}
  else if (FilterCity === "Bauchi") { x = 1166, lat = 10.31344, lng =9.84327}
  else if (FilterCity === "Abeokuta") { x = 1167, lat = 7.15, lng =3.35}
  else if (FilterCity === "Lokoja") { x = 1168, lat = 7.80236, lng =6.743}
  else if (FilterCity === "Calabar") { x = 1169, lat = 4.9517, lng =8.322}
  else if (FilterCity === "Ogbomosho") { x = 1170, lat = 8.132406, lng =4.243307}
  else if (FilterCity === "Abakaliki") { x = 1171, lat = 6.31625, lng =8.11691}
  else if (FilterCity === "Gombe") { x = 1172, lat = 10.28969, lng =11.16729}
  else if (FilterCity === "Okene") { x = 1173, lat = 7.550727, lng =6.233654}
  else if (FilterCity === "Igbidu") { x = 1174, lat = 6.068322, lng =8.116942}
  else if (FilterCity === "Ado-Ekiti") { x = 1175, lat = 7.621, lng =5.2215}
  else if (FilterCity === "Katsina") { x = 1176, lat = 12.98943, lng =7.60063}
  else if (FilterCity === "Minna") { x = 1177, lat = 9.61389, lng =6.55694}
  else if (FilterCity === "Gboko") { x = 1178, lat = 7.326835, lng =9.003405}
  else if (FilterCity === "Ondo") { x = 1179, lat = 7.1, lng =4.83333}
  else if (FilterCity === "Oyo") { x = 1180, lat = 7.85, lng =3.93333}
  else if (FilterCity === "Okpogho") { x = 1181, lat = 6.440393, lng =7.284425}
  else if (FilterCity === "Makurdi") { x = 1182, lat = 7.7411, lng =8.5121}
  else if (FilterCity === "Ife") { x = 1183, lat = 7.477328, lng =4.558853}
  else if (FilterCity === "Effon Alaiye") { x = 1184, lat = 7.65, lng =4.91667}
  else if (FilterCity === "Oslo") { x = 1185, lat = 59.91273, lng =10.74609}
  else if (FilterCity === "Karachi") { x = 1186, lat = 24.9056, lng =67.0822}
  else if (FilterCity === "Lahore") { x = 1187, lat = 31.5497222, lng =74.3436111}
  else if (FilterCity === "Faisalabad") { x = 1188, lat = 31.4166667, lng =73.0833333}
  else if (FilterCity === "Rawalpindi") { x = 1189, lat = 33.6, lng =73.0666667}
  else if (FilterCity === "Gujranwala") { x = 1190, lat = 32.15, lng =74.1833333}
  else if (FilterCity === "Multan") { x = 1191, lat = 30.1833333, lng =71.4833333}
  else if (FilterCity === "Hyderabad") { x = 1192, lat = 25.3666667, lng =68.3666667}
  else if (FilterCity === "Peshawar") { x = 1193, lat = 34.00195, lng =71.55944}
  else if (FilterCity === "Islamabad") { x = 1194, lat = 33.70351, lng =73.059373}
  else if (FilterCity === "Quetta") { x = 1195, lat = 30.199, lng =67.00971}
  else if (FilterCity === "Bahawalpur") { x = 1196, lat = 29.4, lng =71.68333}
  else if (FilterCity === "Sargodha") { x = 1197, lat = 32.0833333, lng =72.6666667}
  else if (FilterCity === "Larkana") { x = 1198, lat = 27.55, lng =68.2166667}
  else if (FilterCity === "Sialkot") { x = 1199, lat = 32.5, lng =74.5166667}
  else if (FilterCity === "Sukkur") { x = 1200, lat = 27.7, lng =68.8666667}
  else if (FilterCity === "Sheikhupura") { x = 1201, lat = 31.7130556, lng =73.9783333}
  else if (FilterCity === "Rahim Yar Khan") { x = 1202, lat = 28.415126, lng =70.299678}
  else if (FilterCity === "Jhang") { x = 1203, lat = 31.267026, lng =72.312594}
  else if (FilterCity === "Mardan") { x = 1204, lat = 34.20195, lng =72.05254}
  else if (FilterCity === "Gujrat") { x = 1205, lat = 32.5666667, lng =74.0833333}
  else if (FilterCity === "Kasur") { x = 1206, lat = 31.115, lng =74.4547222}
  else if (FilterCity === "Dera Ghazikhan") { x = 1207, lat = 30.05, lng =70.6333333}
  else if (FilterCity === "Nawabshah") { x = 1208, lat = 26.25, lng =68.4166667}
  else if (FilterCity === "Wah") { x = 1209, lat = 33.764072, lng =72.745029}
  else if (FilterCity === "Okara") { x = 1210, lat = 30.8080556, lng =73.4458333}
  else if (FilterCity === "Ciudad de Panamá (Panama City)") { x = 1211, lat = 8.995816, lng =-79.519572}
  else if (FilterCity === "Port Moresby") { x = 1212, lat = -9.44314, lng =147.17972}
  else if (FilterCity === "Asunción") { x = 1213, lat = -25.30066, lng =-57.63591}
  else if (FilterCity === "Ciudad del Este") { x = 1214, lat = -25.51667, lng =-54.61667}
  else if (FilterCity === "Lima") { x = 1215, lat = -12.04318, lng =-77.02824}
  else if (FilterCity === "Arequipa") { x = 1216, lat = -16.39889, lng =-71.535}
  else if (FilterCity === "Trujillo") { x = 1217, lat = -8.11599, lng =-79.02998}
  else if (FilterCity === "Chiclayo") { x = 1218, lat = -6.77361, lng =-79.84167}
  else if (FilterCity === "Piura") { x = 1219, lat = -5.2, lng =-80.63333}
  else if (FilterCity === "Iquitos") { x = 1220, lat = -3.737172, lng =-73.25275}
  else if (FilterCity === "Cusco") { x = 1221, lat = -13.51833, lng =-71.97806}
  else if (FilterCity === "Chimbote") { x = 1222, lat = -9.08528, lng =-78.57833}
  else if (FilterCity === "Huancayo") { x = 1223, lat = -12.06667, lng =-75.23333}
  else if (FilterCity === "Manila") { x = 1224, lat = 14.6042, lng =120.9822}
  else if (FilterCity === "Davao City") { x = 1225, lat = 7.073854, lng =125.612487}
  else if (FilterCity === "Cebu City") { x = 1226, lat = 10.31672, lng =123.89071}
  else if (FilterCity === "Zamboanga City") { x = 1227, lat = 6.910333, lng =122.075045}
  else if (FilterCity === "Cagayan de Oro City") { x = 1228, lat = 8.48222, lng =124.64722}
  else if (FilterCity === "General Santos City") { x = 1229, lat = 6.11278, lng =125.17167}
  else if (FilterCity === "Bacolod") { x = 1230, lat = 10.650723, lng =122.945983}
  else if (FilterCity === "Iloilo City") { x = 1231, lat = 10.696639, lng =122.562855}
  else if (FilterCity === "Lapu-Lapu City") { x = 1232, lat = 10.31028, lng =123.94944}
  else if (FilterCity === "Basilan City (including City of Isabela)") { x = 1233, lat = 6.70407, lng =121.97117}
  else if (FilterCity === "Mandaue City") { x = 1234, lat = 10.32361, lng =123.92222}
  else if (FilterCity === "Angeles City") { x = 1235, lat = 15.15, lng =120.58333}
  else if (FilterCity === "Baguio City") { x = 1236, lat = 16.410801, lng =120.590156}
  else if (FilterCity === "Cotabato") { x = 1237, lat = 7.22361, lng =124.24639}
  else if (FilterCity === "Iligan") { x = 1238, lat = 8.227401, lng =124.242586}
  else if (FilterCity === "Batangas City") { x = 1239, lat = 13.75729, lng =121.058643}
  else if (FilterCity === "Butuan") { x = 1240, lat = 8.94917, lng =125.54361}
  else if (FilterCity === "Lipa City") { x = 1241, lat = 13.941883, lng =121.162665}
  else if (FilterCity === "Warszawa (Warsaw)") { x = 1242, lat = 52.22977, lng =21.01178}
  else if (FilterCity === "Kraków (Cracow)") { x = 1243, lat = 50.066777, lng =19.942468}
  else if (FilterCity === "Łódź") { x = 1244, lat = 51.759433, lng =19.459957}
  else if (FilterCity === "Wrocław") { x = 1245, lat = 51.1, lng =17.03333}
  else if (FilterCity === "Poznań") { x = 1246, lat = 52.40692, lng =16.92993}
  else if (FilterCity === "Gdańsk") { x = 1247, lat = 54.35205, lng =18.64637}
  else if (FilterCity === "Szczecin") { x = 1248, lat = 53.42894, lng =14.55302}
  else if (FilterCity === "Bydgoszcz") { x = 1249, lat = 53.1235, lng =18.00762}
  else if (FilterCity === "Lublin") { x = 1250, lat = 51.25, lng =22.56667}
  else if (FilterCity === "Katowice") { x = 1251, lat = 50.25842, lng =19.02754}
  else if (FilterCity === "Lisboa (Lisbon)") { x = 1252, lat = 38.71686, lng =-9.139867}
  else if (FilterCity === "Porto") { x = 1253, lat = 41.14961, lng =-8.61099}
  else if (FilterCity === "Bissau") { x = 1254, lat = 11.86357, lng =-15.59767}
  else if (FilterCity === "San Juan") { x = 1255, lat = 18.46633, lng =-66.10572}
  else if (FilterCity === "Aguadilla-Isabela-San Sebastian") { x = 1256, lat = 18.427701, lng =-67.154397}
  else if (FilterCity === "Ad-Dawhah (Doha)") { x = 1257, lat = 25.274724, lng =51.524472}
  else if (FilterCity === "Ar-Rayyan") { x = 1258, lat = 25.29194, lng =51.42444}
  else if (FilterCity === "Bucuresti (Bucharest)") { x = 1259, lat = 44.432787, lng =26.104302}
  else if (FilterCity === "Cluj-Napoca") { x = 1260, lat = 46.76667, lng =23.6}
  else if (FilterCity === "Timisoara") { x = 1261, lat = 45.74944, lng =21.22722}
  else if (FilterCity === "Moskva (Moscow)") { x = 1262, lat = 55.754996, lng =37.621849}
  else if (FilterCity === "Sankt Peterburg (Saint Petersburg)") { x = 1263, lat = 59.929858, lng =30.326228}
  else if (FilterCity === "Novosibirsk") { x = 1264, lat = 55.0415, lng =82.9346}
  else if (FilterCity === "Yekaterinburg") { x = 1265, lat = 56.8575, lng =60.6125}
  else if (FilterCity === "Nizhniy Novgorod") { x = 1266, lat = 56.32867, lng =44.00205}
  else if (FilterCity === "Samara") { x = 1267, lat = 53.20006, lng =50.15}
  else if (FilterCity === "Kazan") { x = 1268, lat = 55.78874, lng =49.12214}
  else if (FilterCity === "Omsk") { x = 1269, lat = 55, lng =73.4}
  else if (FilterCity === "Chelyabinsk") { x = 1270, lat = 55.15444, lng =61.42972}
  else if (FilterCity === "Rostov-na-Donu (Rostov-on-Don)") { x = 1271, lat = 47.217791, lng =39.703185}
  else if (FilterCity === "Ufa") { x = 1272, lat = 54.78517, lng =56.04562}
  else if (FilterCity === "Volgograd") { x = 1273, lat = 48.71939, lng =44.50184}
  else if (FilterCity === "Krasnoyarsk") { x = 1274, lat = 56.00972, lng =92.79167}
  else if (FilterCity === "Perm") { x = 1275, lat = 58.01741, lng =56.28552}
  else if (FilterCity === "Voronezh") { x = 1276, lat = 51.67204, lng =39.1843}
  else if (FilterCity === "Saratov") { x = 1277, lat = 51.54056, lng =46.00861}
  else if (FilterCity === "Krasnodar") { x = 1278, lat = 45.0488, lng =38.9725}
  else if (FilterCity === "Tolyatti") { x = 1279, lat = 53.5303, lng =49.3461}
  else if (FilterCity === "Makhachkala") { x = 1280, lat = 42.97638, lng =47.50236}
  else if (FilterCity === "Tyumen") { x = 1281, lat = 57.15222, lng =65.52722}
  else if (FilterCity === "Izhevsk") { x = 1282, lat = 56.84976, lng =53.20448}
  else if (FilterCity === "Barnaul") { x = 1283, lat = 53.36056, lng =83.76361}
  else if (FilterCity === "Ulyanovsk") { x = 1284, lat = 54.32824, lng =48.38657}
  else if (FilterCity === "Vladivostok") { x = 1285, lat = 43.10562, lng =131.87353}
  else if (FilterCity === "Irkutsk") { x = 1286, lat = 52.29778, lng =104.29639}
  else if (FilterCity === "Yaroslavl") { x = 1287, lat = 57.62987, lng =39.87368}
  else if (FilterCity === "Khabarovsk") { x = 1288, lat = 48.48272, lng =135.08379}
  else if (FilterCity === "Orenburg") { x = 1289, lat = 51.7727, lng =55.0988}
  else if (FilterCity === "Tomsk") { x = 1290, lat = 56.49417, lng =84.97417}
  else if (FilterCity === "Novokuznetsk") { x = 1291, lat = 53.7557, lng =87.1099}
  else if (FilterCity === "Kemerovo") { x = 1292, lat = 55.33333, lng =86.08333}
  else if (FilterCity === "Astrakhan") { x = 1293, lat = 46.34968, lng =48.04076}
  else if (FilterCity === "Ryazan") { x = 1294, lat = 54.6269, lng =39.6916}
  else if (FilterCity === "Tula") { x = 1295, lat = 54.20213, lng =37.64429}
  else if (FilterCity === "Penza") { x = 1296, lat = 53.20066, lng =45.00464}
  else if (FilterCity === "Naberezhnye Tchelny") { x = 1297, lat = 55.72545, lng =52.41122}
  else if (FilterCity === "Lipetsk") { x = 1298, lat = 52.60311, lng =39.57076}
  else if (FilterCity === "Kirov") { x = 1299, lat = 58.603068, lng =49.668173}
  else if (FilterCity === "Cheboksary") { x = 1300, lat = 56.13222, lng =47.25194}
  else if (FilterCity === "Ulan-Ude") { x = 1301, lat = 51.82605, lng =107.60979}
  else if (FilterCity === "Kaliningrad, Kaliningrad Oblast") { x = 1302, lat = 54.714258, lng =20.510017}
  else if (FilterCity === "Stavropol") { x = 1303, lat = 45.0428, lng =41.9734}
  else if (FilterCity === "Kursk") { x = 1304, lat = 51.73733, lng =36.18735}
  else if (FilterCity === "Bryansk") { x = 1305, lat = 53.25209, lng =34.37167}
  else if (FilterCity === "Magnitogorsk") { x = 1306, lat = 53.41861, lng =59.04722}
  else if (FilterCity === "Tver") { x = 1307, lat = 56.86049, lng =35.87603}
  else if (FilterCity === "Ivanovo") { x = 1308, lat = 56.99719, lng =40.97139}
  else if (FilterCity === "Belgorod") { x = 1309, lat = 50.61074, lng =36.58015}
  else if (FilterCity === "Vladimir") { x = 1310, lat = 56.13655, lng =40.39658}
  else if (FilterCity === "Sochi") { x = 1311, lat = 43.59917, lng =39.72569}
  else if (FilterCity === "Arkhangelsk") { x = 1312, lat = 64.56, lng =40.5333333}
  else if (FilterCity === "Nizhny Tagil") { x = 1313, lat = 57.91944, lng =59.965}
  else if (FilterCity === "Chita") { x = 1314, lat = 52.03171, lng =113.50087}
  else if (FilterCity === "Smolensk") { x = 1315, lat = 54.7818, lng =32.0401}
  else if (FilterCity === "Kurgan") { x = 1316, lat = 55.45, lng =65.33333}
  else if (FilterCity === "Surgut") { x = 1317, lat = 61.258749, lng =73.424407}
  else if (FilterCity === "Kaluga") { x = 1318, lat = 54.5293, lng =36.27542}
  else if (FilterCity === "Volzhsky") { x = 1319, lat = 48.78583, lng =44.77973}
  else if (FilterCity === "Cherepovets") { x = 1320, lat = 59.13333, lng =37.9}
  else if (FilterCity === "Yakutsk") { x = 1321, lat = 62.03389, lng =129.73306}
  else if (FilterCity === "Vladikavkaz") { x = 1322, lat = 43.03667, lng =44.66778}
  else if (FilterCity === "Orel") { x = 1323, lat = 52.96508, lng =36.0785}
  else if (FilterCity === "Vologda") { x = 1324, lat = 59.2187, lng =39.8886}
  else if (FilterCity === "Kigali") { x = 1325, lat = -1.947364, lng =30.057897}
  else if (FilterCity === "Ar-Riyadh (Riyadh)") { x = 1326, lat = 24.690466, lng =46.709566}
  else if (FilterCity === "Jiddah") { x = 1327, lat = 21.51694, lng =39.21917}
  else if (FilterCity === "Makkah (Mecca)") { x = 1328, lat = 21.417368, lng =39.815855}
  else if (FilterCity === "Al-Madinah (Medina)") { x = 1329, lat = 24.463501, lng =39.611106}
  else if (FilterCity === "Ad-Dammam") { x = 1330, lat = 26.43442, lng =50.10326}
  else if (FilterCity === "Hufuf-Mubarraz") { x = 1331, lat = 25.41, lng =49.58083}
  else if (FilterCity === "Taif") { x = 1332, lat = 21.27028, lng =40.41583}
  else if (FilterCity === "Tabuk") { x = 1333, lat = 28.38333, lng =36.58333}
  else if (FilterCity === "Buraydah") { x = 1334, lat = 26.32599, lng =43.97497}
  else if (FilterCity === "Jubayl") { x = 1335, lat = 27.01122, lng =49.65826}
  else if (FilterCity === "Khamis Mushayt") { x = 1336, lat = 18.30639, lng =42.72917}
  else if (FilterCity === "Ha'il") { x = 1337, lat = 27.52188, lng =41.69073}
  else if (FilterCity === "Najran") { x = 1338, lat = 17.4924, lng =44.12766}
  else if (FilterCity === "Hafar al-Batin") { x = 1339, lat = 28.425078, lng =45.96883}
  else if (FilterCity === "Dakar") { x = 1340, lat = 14.6937, lng =-17.44406}
  else if (FilterCity === "Beograd (Belgrade)") { x = 1341, lat = 44.817649, lng =20.463309}
  else if (FilterCity === "Freetown") { x = 1342, lat = 8.484, lng =-13.22994}
  else if (FilterCity === "Singapore") { x = 1343, lat = 1.28967, lng =103.85007}
  else if (FilterCity === "Bratislava") { x = 1344, lat = 48.14816, lng =17.10674}
  else if (FilterCity === "Thành Pho Ho Chí Minh (Ho Chi Minh City)") { x = 1345, lat = 10.75, lng =106.66667}
  else if (FilterCity === "Hà Noi") { x = 1346, lat = 21.0245, lng =105.84117}
  else if (FilterCity === "Can Tho") { x = 1347, lat = 10.03333, lng =105.78333}
  else if (FilterCity === "Hai Phòng") { x = 1348, lat = 20.86481, lng =106.68345}
  else if (FilterCity === "Da Nang") { x = 1349, lat = 16.051264, lng =108.212426}
  else if (FilterCity === "Bien Hoa") { x = 1350, lat = 10.95, lng =106.81667}
  else if (FilterCity === "Hue") { x = 1351, lat = 16.46667, lng =107.6}
  else if (FilterCity === "Vungtau") { x = 1352, lat = 10.34599, lng =107.08426}
  else if (FilterCity === "Nha Trang") { x = 1353, lat = 12.25, lng =109.18333}
  else if (FilterCity === "Muqdisho (Mogadishu)") { x = 1354, lat = 2.041636, lng =45.343492}
  else if (FilterCity === "Hargeysa") { x = 1355, lat = 9.56, lng =44.065}
  else if (FilterCity === "Merca") { x = 1356, lat = 1.71594, lng =44.77166}
  else if (FilterCity === "Berbera") { x = 1357, lat = 10.43959, lng =45.01432}
  else if (FilterCity === "Kismaayo") { x = 1358, lat = -0.366667, lng =42.533333}
  else if (FilterCity === "Johannesburg") { x = 1359, lat = -26.20227, lng =28.04363}
  else if (FilterCity === "Cape Town") { x = 1360, lat = -33.92584, lng =18.42322}
  else if (FilterCity === "Durban") { x = 1361, lat = -29.8579, lng =31.0292}
  else if (FilterCity === "Pretoria") { x = 1362, lat = -25.74486, lng =28.18783}
  else if (FilterCity === "Port Elizabeth") { x = 1363, lat = -33.91799, lng =25.57007}
  else if (FilterCity === "Vereeniging") { x = 1364, lat = -26.67313, lng =27.92615}
  else if (FilterCity === "Soshanguve") { x = 1365, lat = -25.47288, lng =28.09919}
  else if (FilterCity === "Bloemfontein") { x = 1366, lat = -29.12106, lng =26.214}
  else if (FilterCity === "Pietermaritzburg") { x = 1367, lat = -29.61678, lng =30.39278}
  else if (FilterCity === "Rustenburg") { x = 1368, lat = -25.66756, lng =27.24208}
  else if (FilterCity === "Witbank") { x = 1369, lat = -25.87133, lng =29.23323}
  else if (FilterCity === "East London") { x = 1370, lat = -33.01529, lng =27.91162}
  else if (FilterCity === "Harare") { x = 1371, lat = -17.82935, lng =31.05389}
  else if (FilterCity === "Bulawayo") { x = 1372, lat = -20.15, lng =28.58333}
  else if (FilterCity === "Chitungwiza") { x = 1373, lat = -18.01274, lng =31.07555}
  else if (FilterCity === "Madrid") { x = 1374, lat = 40.4165, lng =-3.70256}
  else if (FilterCity === "Barcelona") { x = 1375, lat = 41.38879, lng =2.15899}
  else if (FilterCity === "Valencia") { x = 1376, lat = 39.46975, lng =-0.37739}
  else if (FilterCity === "Sevilla") { x = 1377, lat = 37.38241, lng =-5.97613}
  else if (FilterCity === "Zaragoza") { x = 1378, lat = 41.65606, lng =-0.87734}
  else if (FilterCity === "Malaga") { x = 1379, lat = 36.72016, lng =-4.42034}
  else if (FilterCity === "Murcia") { x = 1380, lat = 37.98704, lng =-1.13004}
  else if (FilterCity === "Palma") { x = 1381, lat = 39.56939, lng =2.65024}
  else if (FilterCity === "Las Palmas Gran Canaria") { x = 1382, lat = 28.110696, lng =-15.434283}
  else if (FilterCity === "Bilbao") { x = 1383, lat = 43.26271, lng =-2.92528}
  else if (FilterCity === "Alicante") { x = 1384, lat = 38.34517, lng =-0.48149}
  else if (FilterCity === "Cordoba") { x = 1385, lat = 37.88333, lng =-4.76667}
  else if (FilterCity === "Valladolid") { x = 1386, lat = 41.65518, lng =-4.72372}
  else if (FilterCity === "Juba") { x = 1387, lat = 4.85165, lng =31.58247}
  else if (FilterCity === "Al-Khartum (Khartoum)") { x = 1388, lat = 15.55177, lng =32.53241}
  else if (FilterCity === "Nyala") { x = 1389, lat = 12.05, lng =24.88333}
  else if (FilterCity === "Port Sudan (Bur Sudan)") { x = 1390, lat = 19.619521, lng =37.21238}
  else if (FilterCity === "Al Obeid (Al Ubayyid)") { x = 1391, lat = 13.18416667, lng =30.21666667}
  else if (FilterCity === "Wad Medani") { x = 1392, lat = 14.40118, lng =33.51989}
  else if (FilterCity === "Kassala") { x = 1393, lat = 15.45099, lng =36.39998}
  else if (FilterCity === "Al Gadarif") { x = 1394, lat = 14.03493, lng =35.38344}
  else if (FilterCity === "Stockholm") { x = 1395, lat = 59.33258, lng =18.0649}
  else if (FilterCity === "Göteborg") { x = 1396, lat = 57.703161, lng =11.966273}
  else if (FilterCity === "Zürich (Zurich)") { x = 1397, lat = 47.35785, lng =8.50296}
  else if (FilterCity === "Genève") { x = 1398, lat = 46.20222, lng =6.14569}
  else if (FilterCity === "Basel") { x = 1399, lat = 47.5584, lng =7.57327}
  else if (FilterCity === "Bern") { x = 1400, lat = 46.94809, lng =7.44744}
  else if (FilterCity === "Lausanne") { x = 1401, lat = 46.516, lng =6.63282}
  else if (FilterCity === "Halab (Aleppo)") { x = 1402, lat = 36.213611, lng =37.157141}
  else if (FilterCity === "Dimashq (Damascus)") { x = 1403, lat = 33.508586, lng =36.308444}
  else if (FilterCity === "Hims (Homs)") { x = 1404, lat = 34.731809, lng =36.718125}
  else if (FilterCity === "Hamah") { x = 1405, lat = 35.13179, lng =36.75783}
  else if (FilterCity === "Lattakia") { x = 1406, lat = 35.51484, lng =35.77684}
  else if (FilterCity === "Al-Raqqa") { x = 1407, lat = 35.95, lng =39.01667}
  else if (FilterCity === "Tartus") { x = 1408, lat = 34.893201, lng =35.88844}
  else if (FilterCity === "Al-Hasakah") { x = 1409, lat = 36.50237, lng =40.74772}
  else if (FilterCity === "Deir El-Zor(Deir ez-Zor)") { x = 1410, lat = 35.332233, lng =40.150155}
  else if (FilterCity === "Al-Kamishli") { x = 1411, lat = 37.05215, lng =41.23142}
  else if (FilterCity === "Dushanbe") { x = 1412, lat = 38.53575, lng =68.77905}
  else if (FilterCity === "Krung Thep (Bangkok)") { x = 1413, lat = 13.721964, lng =100.525248}
  else if (FilterCity === "Samut Prakan") { x = 1414, lat = 13.59934, lng =100.59675}
  else if (FilterCity === "Udon Thani") { x = 1415, lat = 17.41567, lng =102.78589}
  else if (FilterCity === "Chon Buri") { x = 1416, lat = 13.361125, lng =100.988319}
  else if (FilterCity === "Nonthaburi") { x = 1417, lat = 13.860208, lng =100.521782}
  else if (FilterCity === "Lampang") { x = 1418, lat = 18.29232, lng =99.49277}
  else if (FilterCity === "Nakhon Ratchasima") { x = 1419, lat = 14.97066, lng =102.10196}
  else if (FilterCity === "Rayong") { x = 1420, lat = 12.68095, lng =101.25798}
  else if (FilterCity === "Hat Yai") { x = 1421, lat = 7.0083, lng =100.4767}
  else if (FilterCity === "Lomé") { x = 1422, lat = 6.13748, lng =1.21227}
  else if (FilterCity === "Dubayy (Dubai)") { x = 1423, lat = 25.272061, lng =55.311265}
  else if (FilterCity === "Sharjah") { x = 1424, lat = 25.35731, lng =55.4033}
  else if (FilterCity === "Abu Zaby (Abu Dhabi)") { x = 1425, lat = 24.464778, lng =54.361781}
  else if (FilterCity === "Al-Ain") { x = 1426, lat = 24.19167, lng =55.76056}
  else if (FilterCity === "Ajman") { x = 1427, lat = 25.41111, lng =55.43504}
  else if (FilterCity === "Tunis") { x = 1428, lat = 36.81897, lng =10.16579}
  else if (FilterCity === "Safaqis") { x = 1429, lat = 34.748471, lng =10.756162}
  else if (FilterCity === "Istanbul") { x = 1430, lat = 41.0138, lng =28.9497}
  else if (FilterCity === "Ankara") { x = 1431, lat = 39.91987, lng =32.85427}
  else if (FilterCity === "Izmir") { x = 1432, lat = 38.41273, lng =27.13838}
  else if (FilterCity === "Bursa") { x = 1433, lat = 40.19167, lng =29.06111}
  else if (FilterCity === "Adana") { x = 1434, lat = 37.00167, lng =35.32889}
  else if (FilterCity === "Gaziantep") { x = 1435, lat = 37.05944, lng =37.3825}
  else if (FilterCity === "Konya") { x = 1436, lat = 37.87135, lng =32.48464}
  else if (FilterCity === "Antalya") { x = 1437, lat = 36.90812, lng =30.69556}
  else if (FilterCity === "Diyarbakir") { x = 1438, lat = 37.91583, lng =40.21889}
  else if (FilterCity === "Kayseri") { x = 1439, lat = 38.73222, lng =35.48528}
  else if (FilterCity === "Mersin") { x = 1440, lat = 36.8, lng =34.633333}
  else if (FilterCity === "Eskisehir") { x = 1441, lat = 39.77667, lng =30.52056}
  else if (FilterCity === "Gebze") { x = 1442, lat = 40.80276, lng =29.43068}
  else if (FilterCity === "Samsun") { x = 1443, lat = 41.2833333, lng =36.3333333}
  else if (FilterCity === "Denizli") { x = 1444, lat = 37.77417, lng =29.0875}
  else if (FilterCity === "Sanliurfa") { x = 1445, lat = 37.16708, lng =38.79392}
  else if (FilterCity === "Sakarya") { x = 1446, lat = 40.773758, lng =30.402377}
  else if (FilterCity === "Kahramanmaras") { x = 1447, lat = 37.5847, lng =36.9264}
  else if (FilterCity === "Malatya") { x = 1448, lat = 38.35, lng =38.316667}
  else if (FilterCity === "Van") { x = 1449, lat = 38.5, lng =43.3833333}
  else if (FilterCity === "Erzurum") { x = 1450, lat = 39.90861, lng =41.27694}
  else if (FilterCity === "Batman") { x = 1451, lat = 37.88738, lng =41.13221}
  else if (FilterCity === "Elazig") { x = 1452, lat = 38.67431, lng =39.22321}
  else if (FilterCity === "Sivas") { x = 1453, lat = 39.75, lng =37.0333333}
  else if (FilterCity === "Manisa") { x = 1454, lat = 38.61202, lng =27.42646}
  else if (FilterCity === "Izmit") { x = 1455, lat = 40.774765, lng =29.949082}
  else if (FilterCity === "Ashgabat") { x = 1456, lat = 37.95, lng =58.38333}
  else if (FilterCity === "Tashauz") { x = 1457, lat = 41.83625, lng =59.96662}
  else if (FilterCity === "Kampala") { x = 1458, lat = 0.31628, lng =32.58219}
  else if (FilterCity === "Kyiv (Kiev)") { x = 1459, lat = 50.445368, lng =30.518634}
  else if (FilterCity === "Kharkiv") { x = 1460, lat = 49.98081, lng =36.25272}
  else if (FilterCity === "Odesa") { x = 1461, lat = 46.47747, lng =30.73262}
  else if (FilterCity === "Dnipropetrovsk") { x = 1462, lat = 48.45, lng =34.98333}
  else if (FilterCity === "Donetsk") { x = 1463, lat = 48.023, lng =37.80224}
  else if (FilterCity === "Zaporizhzhya") { x = 1464, lat = 47.82289, lng =35.19031}
  else if (FilterCity === "Lvov") { x = 1465, lat = 49.837969, lng =24.032508}
  else if (FilterCity === "Krivoi Rog") { x = 1466, lat = 47.91083, lng =33.392491}
  else if (FilterCity === "Nikolaev") { x = 1467, lat = 46.96591, lng =31.9974}
  else if (FilterCity === "Mariupol") { x = 1468, lat = 47.06667, lng =37.5}
  else if (FilterCity === "Lugansk") { x = 1469, lat = 48.56705, lng =39.31706}
  else if (FilterCity === "Vinnitsa") { x = 1470, lat = 49.23278, lng =28.48097}
  else if (FilterCity === "Sevastopol") { x = 1471, lat = 44.58883, lng =33.5224}
  else if (FilterCity === "Simferopol") { x = 1472, lat = 44.95719, lng =34.11079}
  else if (FilterCity === "Makeyevka") { x = 1473, lat = 48.04782, lng =37.92576}
  else if (FilterCity === "Skopje") { x = 1474, lat = 42, lng =21.43333}
  else if (FilterCity === "Al-Qahirah (Cairo)") { x = 1475, lat = 30.04, lng =31.24}
  else if (FilterCity === "Al-Iskandariyah (Alexandria)") { x = 1476, lat = 31.19, lng =29.9}
  else if (FilterCity === "Bur Sa'id") { x = 1477, lat = 31.25654, lng =32.28412}
  else if (FilterCity === "As-Suways") { x = 1478, lat = 29.968133, lng =32.547497}
  else if (FilterCity === "Al-Mansurah") { x = 1479, lat = 31.04, lng =31.38}
  else if (FilterCity === "Al-Mahallah al-Kubra") { x = 1480, lat = 30.97, lng =31.16}
  else if (FilterCity === "Tanta") { x = 1481, lat = 30.787176, lng =30.999539}
  else if (FilterCity === "Asyut") { x = 1482, lat = 27.18096, lng =31.18368}
  else if (FilterCity === "Al-Fayyum") { x = 1483, lat = 29.31, lng =30.84}
  else if (FilterCity === "Az-Zaqazig") { x = 1484, lat = 30.5875, lng =31.50194444}
  else if (FilterCity === "Al-Ismailiyah") { x = 1485, lat = 30.6, lng =32.27}
  else if (FilterCity === "Kafr-ad-Dawwar") { x = 1486, lat = 31.13385, lng =30.12843}
  else if (FilterCity === "Aswan") { x = 1487, lat = 24.09343, lng =32.90704}
  else if (FilterCity === "London") { x = 1488, lat = 51.50853, lng =-0.12574}
  else if (FilterCity === "Manchester") { x = 1489, lat = 53.48095, lng =-2.23743}
  else if (FilterCity === "Birmingham (West Midlands)") { x = 1490, lat = 52.4814, lng =-1.8998}
  else if (FilterCity === "West Yorkshire") { x = 1491, lat = 53.798431, lng =-1.764855}
  else if (FilterCity === "Glasgow") { x = 1492, lat = 55.86515, lng =-4.25763}
  else if (FilterCity === "Southampton/Portsmouth (South Hampshire)") { x = 1493, lat = 50.911698, lng =-1.40357}
  else if (FilterCity === "Liverpool") { x = 1494, lat = 53.41058, lng =-2.97794}
  else if (FilterCity === "Newcastle upon Tyne") { x = 1495, lat = 54.97328, lng =-1.61396}
  else if (FilterCity === "Nottingham") { x = 1496, lat = 52.9536, lng =-1.15047}
  else if (FilterCity === "Sheffield") { x = 1497, lat = 53.38297, lng =-1.4659}
  else if (FilterCity === "Bristol") { x = 1498, lat = 51.4552, lng =-2.5966}
  else if (FilterCity === "Belfast") { x = 1499, lat = 54.594668, lng =-5.929812}
  else if (FilterCity === "Leicester") { x = 1500, lat = 52.6386, lng =-1.1317}
  else if (FilterCity === "Brighton-Worthing-Littlehampton") { x = 1501, lat = 50.82838, lng =-0.13947}
  else if (FilterCity === "Edinburgh") { x = 1502, lat = 55.9521, lng =-3.1965}
  else if (FilterCity === "Bournemouth/Poole") { x = 1503, lat = 50.72048, lng =-1.8795}
  else if (FilterCity === "Cardiff") { x = 1504, lat = 51.48, lng =-3.18}
  else if (FilterCity === "Teeside (Middlesbrough)") { x = 1505, lat = 54.57623, lng =-1.23483}
  else if (FilterCity === "Stoke-on-Trent (The Potteries)") { x = 1506, lat = 53.0042, lng =-2.1854}
  else if (FilterCity === "Coventry-Bedworth") { x = 1507, lat = 52.4066, lng =-1.5122}
  else if (FilterCity === "Sunderland") { x = 1508, lat = 54.9119, lng =-1.3833}
  else if (FilterCity === "Birkenhead") { x = 1509, lat = 53.39337, lng =-3.01479}
  else if (FilterCity === "Reading-Wokingham") { x = 1510, lat = 51.4112, lng =-0.8356}
  else if (FilterCity === "Preston") { x = 1511, lat = 53.761025, lng =-2.702435}
  else if (FilterCity === "Kingston upon Hull") { x = 1512, lat = 53.748257, lng =-0.334021}
  else if (FilterCity === "Newport") { x = 1513, lat = 51.58471, lng =-2.997939}
  else if (FilterCity === "Swansea") { x = 1514, lat = 51.6208, lng =-3.9432}
  else if (FilterCity === "Southend-On-Sea") { x = 1515, lat = 51.53782, lng =0.71433}
  else if (FilterCity === "Dar es Salaam") { x = 1516, lat = -6.82349, lng =39.26951}
  else if (FilterCity === "Mwanza") { x = 1517, lat = -2.51667, lng =32.9}
  else if (FilterCity === "Zanzibar") { x = 1518, lat = -6.16394, lng =39.19793}
  else if (FilterCity === "Mbeya") { x = 1519, lat = -8.9, lng =33.45}
  else if (FilterCity === "Arusha") { x = 1520, lat = -3.36667, lng =36.68333}
  else if (FilterCity === "Morogoro") { x = 1521, lat = -6.81667, lng =37.66667}
  else if (FilterCity === "New York-Newark") { x = 1522, lat = 40.717042, lng =-74.003663}
  else if (FilterCity === "Los Angeles-Long Beach-Santa Ana") { x = 1523, lat = 34.031656, lng =-118.241716}
  else if (FilterCity === "Chicago") { x = 1524, lat = 41.85003, lng =-87.65005}
  else if (FilterCity === "Miami") { x = 1525, lat = 25.789097, lng =-80.204044}
  else if (FilterCity === "Dallas-Fort Worth") { x = 1526, lat = 32.72541, lng =-97.32085}
  else if (FilterCity === "Houston") { x = 1527, lat = 29.7601927, lng =-95.3693896}
  else if (FilterCity === "Philadelphia") { x = 1528, lat = 39.95234, lng =-75.16379}
  else if (FilterCity === "Atlanta") { x = 1529, lat = 33.76, lng =-84.4}
  else if (FilterCity === "Washington, D.C.") { x = 1530, lat = 38.89511, lng =-77.03637}
  else if (FilterCity === "Boston") { x = 1531, lat = 42.347919, lng =-71.06453}
  else if (FilterCity === "Phoenix-Mesa") { x = 1532, lat = 33.449454, lng =-112.074743}
  else if (FilterCity === "Detroit") { x = 1533, lat = 42.387137, lng =-83.102641}
  else if (FilterCity === "San Francisco-Oakland") { x = 1534, lat = 37.759881, lng =-122.437392}
  else if (FilterCity === "Seattle") { x = 1535, lat = 47.626353, lng =-122.333144}
  else if (FilterCity === "San Diego") { x = 1536, lat = 32.71533, lng =-117.15726}
  else if (FilterCity === "Minneapolis-St. Paul") { x = 1537, lat = 44.97307, lng =-93.269895}
  else if (FilterCity === "Tampa-St. Petersburg") { x = 1538, lat = 27.94752, lng =-82.45843}
  else if (FilterCity === "Denver-Aurora") { x = 1539, lat = 39.734283, lng =-104.983138}
  else if (FilterCity === "Las Vegas") { x = 1540, lat = 36.169941, lng =-115.13983}
  else if (FilterCity === "Baltimore") { x = 1541, lat = 39.29038, lng =-76.61219}
  else if (FilterCity === "Riverside-San Bernardino") { x = 1542, lat = 33.95335, lng =-117.39616}
  else if (FilterCity === "St. Louis") { x = 1543, lat = 38.628612, lng =-90.197197}
  else if (FilterCity === "San Antonio") { x = 1544, lat = 29.424113, lng =-98.493536}
  else if (FilterCity === "Portland") { x = 1545, lat = 45.521525, lng =-122.679933}
  else if (FilterCity === "Sacramento") { x = 1546, lat = 38.58157, lng =-121.4944}
  else if (FilterCity === "Cleveland") { x = 1547, lat = 41.498587, lng =-81.687402}
  else if (FilterCity === "Orlando") { x = 1548, lat = 28.53834, lng =-81.37924}
  else if (FilterCity === "San Jose") { x = 1549, lat = 37.33939, lng =-121.89496}
  else if (FilterCity === "Pittsburgh") { x = 1550, lat = 40.441823, lng =-79.98823}
  else if (FilterCity === "Cincinnati") { x = 1551, lat = 39.104722, lng =-84.518783}
  else if (FilterCity === "Austin") { x = 1552, lat = 30.27, lng =-97.74}
  else if (FilterCity === "Indianapolis") { x = 1553, lat = 39.790942, lng =-86.147685}
  else if (FilterCity === "Charlotte") { x = 1554, lat = 35.22709, lng =-80.84313}
  else if (FilterCity === "Kansas City") { x = 1555, lat = 39.11417, lng =-94.62746}
  else if (FilterCity === "Columbus, Ohio") { x = 1556, lat = 39.962205, lng =-83.000186}
  else if (FilterCity === "Virginia Beach") { x = 1557, lat = 36.834498, lng =-76.087179}
  else if (FilterCity === "Milwaukee") { x = 1558, lat = 43.0389, lng =-87.90647}
  else if (FilterCity === "Providence") { x = 1559, lat = 41.824037, lng =-71.417702}
  else if (FilterCity === "Jacksonville, Florida") { x = 1560, lat = 30.33218, lng =-81.65565}
  else if (FilterCity === "Raleigh") { x = 1561, lat = 35.778897, lng =-78.637471}
  else if (FilterCity === "Memphis") { x = 1562, lat = 35.140814, lng =-90.047458}
  else if (FilterCity === "Nashville-Davidson") { x = 1563, lat = 36.160996, lng =-86.783045}
  else if (FilterCity === "Salt Lake City") { x = 1564, lat = 40.7547, lng =-111.892622}
  else if (FilterCity === "Louisville") { x = 1565, lat = 38.24194, lng =-85.763064}
  else if (FilterCity === "Richmond") { x = 1566, lat = 37.543207, lng =-77.438159}
  else if (FilterCity === "Hartford") { x = 1567, lat = 41.7637111, lng =-72.6850932}
  else if (FilterCity === "Bridgeport-Stamford") { x = 1568, lat = 41.16704, lng =-73.20483}
  else if (FilterCity === "Oklahoma City") { x = 1569, lat = 35.4675, lng =-97.516389}
  else if (FilterCity === "New Orleans") { x = 1570, lat = 29.95465, lng =-90.07507}
  else if (FilterCity === "Buffalo") { x = 1571, lat = 42.887934, lng =-78.871593}
  else if (FilterCity === "Tucson") { x = 1572, lat = 32.214476, lng =-110.918192}
  else if (FilterCity === "El Paso") { x = 1573, lat = 31.7775757, lng =-106.4424559}
  else if (FilterCity === "McAllen") { x = 1574, lat = 26.216263, lng =-98.236385}
  else if (FilterCity === "Honolulu") { x = 1575, lat = 21.30895, lng =-157.826182}
  else if (FilterCity === "Albuquerque") { x = 1576, lat = 35.110703, lng =-106.609991}
  else if (FilterCity === "Birmingham") { x = 1577, lat = 33.515744, lng =-86.801056}
  else if (FilterCity === "Omaha") { x = 1578, lat = 41.25861111, lng =-95.93777778}
  else if (FilterCity === "Dayton") { x = 1579, lat = 39.758406, lng =-84.192906}
  else if (FilterCity === "Rochester") { x = 1580, lat = 43.156924, lng =-77.604633}
  else if (FilterCity === "Allentown-Bethlehem") { x = 1581, lat = 40.60908, lng =-75.475962}
  else if (FilterCity === "Fresno") { x = 1582, lat = 36.754529, lng =-119.771119}
  else if (FilterCity === "Tulsa") { x = 1583, lat = 36.131294, lng =-95.937332}
  else if (FilterCity === "Sarasota-Bradenton") { x = 1584, lat = 27.33643, lng =-82.53065}
  else if (FilterCity === "Cape Coral") { x = 1585, lat = 26.6396, lng =-81.982471}
  else if (FilterCity === "Baton Rouge") { x = 1586, lat = 30.45075, lng =-91.15455}
  else if (FilterCity === "Concord") { x = 1587, lat = 37.97798, lng =-122.03107}
  else if (FilterCity === "Knoxville") { x = 1588, lat = 35.960749, lng =-83.927657}
  else if (FilterCity === "Springfield, Massachusett, Connecticut") { x = 1589, lat = 42.10148, lng =-72.5898}
  else if (FilterCity === "Columbia, South Carolina") { x = 1590, lat = 33.999477, lng =-81.036538}
  else if (FilterCity === "Ogden-Layton") { x = 1591, lat = 41.223, lng =-111.97383}
  else if (FilterCity === "Charleston-North Charleston") { x = 1592, lat = 32.789295, lng =-79.986255}
  else if (FilterCity === "Temecula-Murrieta") { x = 1593, lat = 33.53635, lng =-117.16305}
  else if (FilterCity === "Colorado Springs") { x = 1594, lat = 38.863443, lng =-104.791914}
  else if (FilterCity === "Provo-Orem") { x = 1595, lat = 40.23384, lng =-111.65853}
  else if (FilterCity === "Albany") { x = 1596, lat = 42.66, lng =-73.78}
  else if (FilterCity === "Mission Viejo") { x = 1597, lat = 33.60002, lng =-117.672}
  else if (FilterCity === "Bakersfield") { x = 1598, lat = 35.357276, lng =-119.031661}
  else if (FilterCity === "Grand Rapids") { x = 1599, lat = 42.956393, lng =-85.664883}
  else if (FilterCity === "New Haven") { x = 1600, lat = 41.3019, lng =-72.929857}
  else if (FilterCity === "Akron") { x = 1601, lat = 41.08144, lng =-81.51901}
  else if (FilterCity === "Worcester") { x = 1602, lat = 42.262599, lng =-71.802347}
  else if (FilterCity === "Toledo") { x = 1603, lat = 41.656529, lng =-83.549856}
  else if (FilterCity === "Wichita") { x = 1604, lat = 37.688848, lng =-97.336226}
  else if (FilterCity === "Des Moines") { x = 1605, lat = 41.60054, lng =-93.60911}
  else if (FilterCity === "Harrisburg") { x = 1606, lat = 40.271709, lng =-76.884956}
  else if (FilterCity === "Palm Bay-Melbourne") { x = 1607, lat = 28.05902778, lng =-80.59833333}
  else if (FilterCity === "Little Rock") { x = 1608, lat = 34.742048, lng =-92.275359}
  else if (FilterCity === "Poughkeepsie-Newburgh") { x = 1609, lat = 41.60180556, lng =-73.96555556}
  else if (FilterCity === "Greenville") { x = 1610, lat = 34.849805, lng =-82.397334}
  else if (FilterCity === "Lancaster") { x = 1611, lat = 40.0378755, lng =-76.3055144}
  else if (FilterCity === "Winston-Salem") { x = 1612, lat = 36.102764, lng =-80.260491}
  else if (FilterCity === "Reno") { x = 1613, lat = 39.52963, lng =-119.8138}
  else if (FilterCity === "Port St. Lucie") { x = 1614, lat = 27.29393, lng =-80.35033}
  else if (FilterCity === "Madison") { x = 1615, lat = 43.069698, lng =-89.400114}
  else if (FilterCity === "Victorville-Hesperia-Apple Valley") { x = 1616, lat = 34.533991, lng =-117.295848}
  else if (FilterCity === "Spokane") { x = 1617, lat = 47.673341, lng =-117.410271}
  else if (FilterCity === "Syracuse") { x = 1618, lat = 43.046788, lng =-76.147496}
  else if (FilterCity === "Augusta-Richmond County") { x = 1619, lat = 33.467086, lng =-81.990199}
  else if (FilterCity === "Lancaster-Palmdale") { x = 1620, lat = 34.686854, lng =-118.150931}
  else if (FilterCity === "Kissimmee") { x = 1621, lat = 28.30468, lng =-81.41667}
  else if (FilterCity === "Daytona Beach-Port Orange") { x = 1622, lat = 29.1383165, lng =-80.9956105}
  else if (FilterCity === "Denton-Lewisville") { x = 1623, lat = 33.04669, lng =-96.994063}
  else if (FilterCity === "Indio-Cathedral City-Palm Springs") { x = 1624, lat = 33.719871, lng =-116.231889}
  else if (FilterCity === "Stockton") { x = 1625, lat = 37.9577016, lng =-121.2907796}
  else if (FilterCity === "Chattanooga") { x = 1626, lat = 35.045473, lng =-85.267255}
  else if (FilterCity === "The Woodlands") { x = 1627, lat = 30.16299, lng =-95.45577}
  else if (FilterCity === "Boise City") { x = 1628, lat = 43.619505, lng =-116.212301}
  else if (FilterCity === "Fayetteville-Springdale") { x = 1629, lat = 36.186711, lng =-94.129539}
  else if (FilterCity === "Jackson, Mississippi") { x = 1630, lat = 32.295719, lng =-90.184034}
  else if (FilterCity === "Modesto") { x = 1631, lat = 37.661479, lng =-120.994543}
  else if (FilterCity === "Oxnard") { x = 1632, lat = 34.1975, lng =-119.17705}
  else if (FilterCity === "Durham") { x = 1633, lat = 35.988644, lng =-78.907167}
  else if (FilterCity === "Scranton") { x = 1634, lat = 41.410629, lng =-75.667411}
  else if (FilterCity === "Youngstown") { x = 1635, lat = 41.096258, lng =-80.649299}
  else if (FilterCity === "Bonita Springs-Naples") { x = 1636, lat = 26.33981, lng =-81.7787}
  else if (FilterCity === "Flint") { x = 1637, lat = 43.027577, lng =-83.693996}
  else if (FilterCity === "Pensacola") { x = 1638, lat = 30.42131, lng =-87.21691}
  else if (FilterCity === "Greensboro") { x = 1639, lat = 36.073233, lng =-79.791751}
  else if (FilterCity === "Corpus Christi") { x = 1640, lat = 27.742857, lng =-97.401927}
  else if (FilterCity === "Huntsville") { x = 1641, lat = 34.729703, lng =-86.589848}
  else if (FilterCity === "Mobile") { x = 1642, lat = 30.69436, lng =-88.04305}
  else if (FilterCity === "Round Lake Beach-McHenry-Grayslake") { x = 1643, lat = 42.354045, lng =-88.100529}
  else if (FilterCity === "Fayetteville") { x = 1644, lat = 35.066663, lng =-78.917579}
  else if (FilterCity === "Fort Wayne") { x = 1645, lat = 41.078348, lng =-85.126546}
  else if (FilterCity === "Santa Clarita") { x = 1646, lat = 34.39166, lng =-118.54259}
  else if (FilterCity === "Santa Rosa") { x = 1647, lat = 38.44047, lng =-122.71443}
  else if (FilterCity === "Lansing") { x = 1648, lat = 42.728422, lng =-84.551367}
  else if (FilterCity === "Ann Arbor") { x = 1649, lat = 42.27756, lng =-83.74088}
  else if (FilterCity === "Asheville") { x = 1650, lat = 35.579862, lng =-82.55581}
  else if (FilterCity === "Antioch") { x = 1651, lat = 38, lng =-121.81}
  else if (FilterCity === "Trenton") { x = 1652, lat = 40.2170534, lng =-74.7429384}
  else if (FilterCity === "Lexington-Fayette") { x = 1653, lat = 38.029632, lng =-84.494642}
  else if (FilterCity === "Rockford") { x = 1654, lat = 42.271254, lng =-89.095727}
  else if (FilterCity === "Shreveport") { x = 1655, lat = 32.468003, lng =-93.771115}
  else if (FilterCity === "Springfield, Missouri") { x = 1656, lat = 37.208264, lng =-93.291368}
  else if (FilterCity === "Ouagadougou") { x = 1657, lat = 12.36, lng =-1.54}
  else if (FilterCity === "Bobo-Dioulasso") { x = 1658, lat = 11.18, lng =-4.3}
  else if (FilterCity === "Montevideo") { x = 1659, lat = -34.83346, lng =-56.16735}
  else if (FilterCity === "Tashkent") { x = 1660, lat = 41.26465, lng =69.21627}
  else if (FilterCity === "Namangan") { x = 1661, lat = 40.9983, lng =71.67257}
  else if (FilterCity === "Andizhan") { x = 1662, lat = 40.7830556, lng =72.3438889}
  else if (FilterCity === "Samarkand") { x = 1663, lat = 39.6541667, lng =66.9597222}
  else if (FilterCity === "Caracas") { x = 1664, lat = 10.48801, lng =-66.87919}
  else if (FilterCity === "Maracaibo") { x = 1665, lat = 10.63167, lng =-71.64056}
  else if (FilterCity === "Valencia") { x = 1666, lat = 10.16202, lng =-68.00765}
  else if (FilterCity === "Maracay") { x = 1667, lat = 10.24694, lng =-67.59583}
  else if (FilterCity === "Barquisimeto") { x = 1668, lat = 10.07389, lng =-69.32278}
  else if (FilterCity === "Barcelona-Puerto La Cruz") { x = 1669, lat = 10.21667, lng =-64.61667}
  else if (FilterCity === "Ciudad Guayana") { x = 1670, lat = 8.35122, lng =-62.64102}
  else if (FilterCity === "Maturin") { x = 1671, lat = 9.75, lng =-63.17667}
  else if (FilterCity === "Ciudad Bolivar") { x = 1672, lat = 8.12923, lng =-63.54086}
  else if (FilterCity === "Guarenas-Guatire") { x = 1673, lat = 10.46736, lng =-66.60663}
  else if (FilterCity === "San Cristóbal") { x = 1674, lat = 7.76694, lng =-72.225}
  else if (FilterCity === "El Tigre-San José de Guanipa") { x = 1675, lat = 8.88724, lng =-64.16512}
  else if (FilterCity === "Cabimas") { x = 1676, lat = 10.38828, lng =-71.43992}
  else if (FilterCity === "Lagunillas") { x = 1677, lat = 10.13008, lng =-71.25946}
  else if (FilterCity === "Cumana") { x = 1678, lat = 10.46354, lng =-64.1775}
  else if (FilterCity === "Barinas") { x = 1679, lat = 8.62261, lng =-70.20749}
  else if (FilterCity === "Merida") { x = 1680, lat = 8.59524, lng =-71.1434}
  else if (FilterCity === "Punto Fijo") { x = 1681, lat = 11.6956, lng =-70.19957}
  else if (FilterCity === "Acarigua-Aruare") { x = 1682, lat = 9.55451, lng =-69.19564}
  else if (FilterCity === "Sana'a'") { x = 1683, lat = 15.353115, lng =44.20782}
  else if (FilterCity === "Adan (Aden)") { x = 1684, lat = 12.798803, lng =45.035902}
  else if (FilterCity === "Ta'izz") { x = 1685, lat = 13.57952, lng =44.02091}
  else if (FilterCity === "Al-Hudaydah") { x = 1686, lat = 14.79781, lng =42.95452}
  else if (FilterCity === "Ibb") { x = 1687, lat = 13.96667, lng =44.18333}
  else if (FilterCity === "Al-Mukalla") { x = 1688, lat = 14.54248, lng =49.12424}
  else if (FilterCity === "Lusaka") { x = 1689, lat = -15.413374, lng =28.277148}
  else if (FilterCity === "Kitwe") { x = 1690, lat = -12.8166667, lng =28.2}
  else if (FilterCity === "Ndola") { x = 1691, lat = -12.95867, lng =28.63659}
  else if (FilterCity === "Southampton/Portsmouth (South Hampshire)") { x = 1493, lat = 50.911698, lng =-1.40357}
  else {
    x = "x", lat = "x", lng = "x"
  }



 
// Create Chart using Chart.js
  
          var ctx = document.getElementById('myChart').getContext('2d');
          var myChart = new Chart(ctx, {
          type: 'line',
          data: {
          Responsive:true,
          maintainAspectRatio: false,
          labels: ['1950', '1960', '1970', '1980', '1990', '2000','2010','2020','2030'],
          datasets: [{
              label: 'Population (Thousands)',
              data: [CityData[x].D_1950,CityData[x].D_1960, CityData[x].D_1970, CityData[x].D_1980, CityData[x].D_1990, CityData[x].D_2000, CityData[x].D_2010,CityData[x].D_2020,CityData[x].D_2030],
              backgroundColor: [
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)',
                  'rgba(0, 255, 255)'
              ],
              borderColor: [
                'rgba(0, 255, 255)'
              ],
              borderWidth: 2
          }]
          },
          options: {
            
          scales: {
              yAxes: [{

                  ticks: {
                      beginAtZero: true,
                      stepSize: 5,
                  }
              }]
          }
      }
  }
  
  )



    var container = L.DomUtil.get('map1'); if(container != null){ container._leaflet_id = null; }

    var decade = d3.select("#decade1").property("value");

    if (decade === "1950") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1950.geojson"
      } else if (decade === "1960") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1960.geojson"
        } else if (decade === "1970") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1970.geojson"
    } else if (decade === "1980") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1980.geojson"
    } else if (decade === "1990") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1990.geojson"
    } else if (decade === "2000") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2000.geojson"
    } else if (decade === "2010") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2010.geojson"
    } else if (decade === "2020") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2020.geojson"
    } else if (decade === "2030") {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2030.geojson"
      } else {
        dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2020.geojson"
      }


  var zoom = d3.select("#zoom-sel").property("value");
  var size = zoom * 1;


  // Function to determine marker size based on population.
  function markerSize(population) {
    if (population > 25000) {
      return 5 * size
    } else if (population > 10000) {
      return 4.5 * size
    } else if (population > 5000) {
      return 3 * size
    } else if (population > 2000) {
      return 2.5 * size
    } else if (population > 500) {
      return 2 * size  
    } else {
      return 1.5 * size
    }
  }
  // Function to return the color based on population.
  function markerColor(population) {
    if (population > 25000) {
      return '#1342EF'
    } else if (population > 10000) {
      return '#1374EF'
    } else if (population > 5000) {
      return '#1398EF'
    } else if (population > 2000) {
        return '#13CEEF'
      } else if (population > 500) {
        return '#13D1EF'    
    } else {
      return '#13ecef'
    }
  }
  
  
  
  
  // GET request, and function to handle returned JSON data.
  d3.json(dataurl, function(data) {
    
    var population = L.geoJSON(data.features, {
      onEachFeature : addPopup,
      pointToLayer: addMarker
    });
  
  // Create Map
  createMap(population);
  }); 
  
  
  
    function addMarker(feature, location) {
    var options = {
      stroke: false,
      fillOpacity: 1,
      color: markerColor(feature.properties.Population),
      fillColor: markerColor(feature.properties.Population),
      radius: markerSize(feature.properties.Population)
    }
  
    return L.circleMarker(location, options);
  
  };
  
  // Define a function we want to run once for each feature in the features array
  function addPopup(feature, layer) {
    // Give each feature a pop up describing the place and time of the earthquake
    return layer.bindPopup(`<h3> ${feature.properties.Urban_Agglomeration} </h3> <hr> <h4>Country: ${feature.properties.Country_or_area} </h4> <h4>Population: ${feature.properties.Population / 1000} M in ${decade}</h4>`);
  }
  
  // function to receive a layer of markers and plot them on a map.
  function createMap(population) {
  
    // Define streetmap and darkmap layers
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      maxZoom: 18,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    });
  
    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      maxZoom: 18,
      id: "mapbox/dark-v10",
      accessToken: API_KEY
    });
  
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      maxZoom: 18,
      id: "mapbox/light-v10",
      accessToken: API_KEY
    });
  
    var satelite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      maxZoom: 18,
      id: "mapbox/satellite-v9",
      accessToken: API_KEY
    });
  
    // Define a baseMaps object to hold our base layers
    var baseMaps = {
      "Satelite": satelite,
      "Dark Map": darkmap,
      "Light Map" : lightmap,
      "Street Map": streetmap
    };
  
  
  
    // Create overlay object to hold our overlay layer
    var overlayMaps = {
      Population: population
    };
  
    // Creating map object
  var myMap1 = L.map("map1", {
  center: [lat, lng],
  zoom: zoom,
  scrollWheelZoom: false,
  zoomControl: false,
  dragging: true,
  layers: [darkmap, population]
  });

  L.control.pan().addTo(myMap1);
  L.control.zoom().addTo(myMap1);

  var miniMap = new L.Control.GlobeMiniMap({
    position: 'bottomleft',
    //uncomment to assign colors
    land:'#11614d',
    water:'#0e96e1',
    marker:'#000000',
    topojsonSrc : 'static/js/world.json'
  }).addTo(myMap1);
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/outdoors-v11",
  accessToken: API_KEY
  }).addTo(myMap1);
  
    // Create a layer control
      // Pass in our baseMaps and overlayMaps
      // Add the layer control to the map
      L.control.layers(baseMaps, overlayMaps, {
        collapsed: true
      }).addTo(myMap1);
  
  
  
  };
  
}




  var container2 = L.DomUtil.get('map2'); if(container2 != null){ container2._leaflet_id = null; }

  var decade2 = d3.select("#decade2").property("value");

  if (decade2 === "1950") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1950.geojson"
    } else if (decade2 === "1960") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1960.geojson"
      } else if (decade2 === "1970") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1970.geojson"
  } else if (decade2 === "1980") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1980.geojson"
  } else if (decade2 === "1990") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1990.geojson"
  } else if (decade2 === "2000") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2000.geojson"
  } else if (decade2 === "2010") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2010.geojson"
  } else if (decade2 === "2020") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2020.geojson"
  } else if (decade2 === "2030") {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2030.geojson"
    } else {
      dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2020.geojson"
    }


var zoom = d3.select("#zoom-sel").property("value");
var size = zoom * 1;


// Function to determine marker size based on population.
function markerSize2(population2) {
  if (population2 > 25000) {
    return 5 * size
  } else if (population2 > 10000) {
    return 4.5 * size
  } else if (population2 > 5000) {
    return 3 * size
  } else if (population2 > 2000) {
    return 2.5 * size
  } else if (population2 > 500) {
    return 2 * size  
  } else {
    return 1.5 * size
  }
}
// Function to return the color based on population.
function markerColor2(population2) {
  if (population2 > 25000) {
    return '#1342EF'
  } else if (population2 > 10000) {
    return '#1374EF'
  } else if (population2 > 5000) {
    return '#1398EF'
  } else if (population2 > 2000) {
      return '#13CEEF'
    } else if (population2 > 500) {
      return '#13D1EF'    
  } else {
    return '#13ecef'
  }
}




// GET request, and function to handle returned JSON data.
d3.json(dataurl2, function(data2) {
  
  var population2 = L.geoJSON(data2.features, {
    onEachFeature : addPopup2,
    pointToLayer: addMarker2
  });

// Create Map
createMap2(population2);
}); 



  function addMarker2(feature, location) {
  var options = {
    stroke: false,
    fillOpacity: 1,
    color: markerColor2(feature.properties.Population),
    fillColor: markerColor2(feature.properties.Population),
    radius: markerSize2(feature.properties.Population)
  }

  return L.circleMarker(location, options);

};

// Define a function we want to run once for each feature in the features array
function addPopup2(feature, layer) {
  // Give each feature a pop up describing the place and time of the earthquake
  return layer.bindPopup(`<h3> ${feature.properties.Urban_Agglomeration} </h3> <hr> <h4>Country: ${feature.properties.Country_or_area} </h4> <h4>Population: ${feature.properties.Population / 1000} M in ${decade2}</h4>`);
}

// function to receive a layer of markers and plot them on a map.
function createMap2(population2) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
  });

  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  });

  var satelite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/satellite-v9",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Satelite": satelite,
    "Dark Map": darkmap,
    "Light Map" : lightmap,
    "Street Map": streetmap
  };



  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Population: population2
  };

  // Creating map object
var myMap2 = L.map("map2", {
center: [lat, lng],
zoom: zoom,
scrollWheelZoom: false,
zoomControl: false,
dragging: true,
layers: [darkmap, population2]
});

L.control.pan().addTo(myMap2);
L.control.zoom().addTo(myMap2);



// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: "mapbox/outdoors-v11",
accessToken: API_KEY
}).addTo(myMap2);

  // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: true
    }).addTo(myMap2);


  // creating the legend
  var legend = L.control({position: 'bottomright'});

  // add legend to map
  legend.onAdd = function () {
  
    var div = L.DomUtil.create('div', 'info legend')
      

    div.innerHTML += '<h4 style="color: black">Population Legend</h4>';
    div.innerHTML += '<i style="background: #1342EF"></i><span>Greater than 25 Million</span><br>';
    div.innerHTML += '<i style="background: #1374ef"></i><span>Greater than 10 Million</span><br>';
    div.innerHTML += '<i style="background: #1398ef"></i><span>Greater than 5 Million</span><br>';
    div.innerHTML += '<i style="background: #13ceef"></i><span>Greater than 2 Million</span><br>';
    div.innerHTML += '<i style="background: #13d1ef"></i><span>Greater than 0.5 Million</span><br>';
    div.innerHTML += '<i style="background: #13ecef"></i><span>Less Than 0.5 Million</span><br>';

    return div;
  };
  
  legend.addTo(myMap2);

  

};

}



var buttonpressed = d3.select("#Run-btn");
buttonpressed.on("click", createmaps);

