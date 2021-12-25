// $(function(){
//  	var info_M2 = [
//  				["01_uchiumi",		"高山",	"内海 拓",		"Takaya Asao",		"九州産業大学芸術学部デザイン学科卒",	""]
//  			];
//
//  	var info_M1 = [
//  				["01_osato",		"",		"大里 淳",		"Jun Osato",		"東京藝術大学 美術学部 デザイン科卒",			"https://loboqollopodol.tumblr.com/"],
//  				["02_otaki",		"",		"大滝 彩加",		"Ayaka Otaki",		"多摩美術大学 美術学部 絵画学科 油画専攻卒",		"http://otakiayaka.tumblr.com"],
//  				["03_oka",			"",		"岡 千穂",		"Chiho Oka",		"東京藝術大学 音楽学部 音楽環境創造科卒",			""],
//  				["04_kang",			"",		"姜 賢植",		"Hyeonsik Kang",	"東京藝術大学 音楽学部 音楽環境創造科卒",			""],
//  				["05_koga",			"",		"古閑 慶治",		"Keiji Koga",		"東京藝術大学 美術学部 先端芸術表現科卒",			""],
//  				["06_kobayashi",	"",		"小林 舞衣",		"Mai Kobayashi",	"東京藝術大学 美術学部 先端芸術表現科卒",			""],
//  				["07_shiina",		"",		"椎名 悠香",		"Yuka Shiina",		"東京藝術大学 美術学部 先端芸術表現科卒",			""],
//  				["08_shishikura",	"",		"宍倉 志信",		"Shinobu Shishikura","東京藝術大学 美術学部 油画専攻卒",				""],
//  				["09_shimura",		"",		"志村 茉那美",	"Manami Shimura",	"京都造形芸術大学 美術工芸学科 現代美術・写真コース卒",	""],
//  				["10_seko",			"",		"瀬古 瑞歩",		"Mizuho Seko",		"日本大学 芸術学部 デザイン学科卒",				""],
//  				["11_hirai",		"",		"平井 亨季",		"Koki Hirai",		"東京藝術大学 美術学部 先端芸術表現科卒",			""],
//  				["12_hukuhara",		"",		"福原 翼",		"Tsubasa Fukuhara",	"東京藝術大学 美術学部 絵画科 油画専攻卒",		"https://fukuharaot.tumblr.com/"]
//  			];
//
//  	var works_M2 = [
//  				[2,	"確かな気配 (2017)",	"声を殺して叫べ (2018)",	""],/*浅尾*/
//  				[3,	"家族団欒 (2019)","家族団欒 (2019)","家族団欒 (2019)"],
//  				[3,	"次元の混在 (2018)",	"鏡像の妙 (2017)",	"生殖Ⅰ (2018)"],
//  				[3,	"(2019)",	"本当に大事なことはあなたの眼の前では起こらない (2017)",	"島 (2018)"],/*及川*/
//  				[3,	"funnyface (2018)","Gorgon (2017)","ReverseObject (2019)"],
//  				[3,	"plotterium (2018)",	"1日分の刹那 (2018)",	"根菜 (2016)"],/*金井*/
//  				[2,	"眠るための装置 (2019)","パウンドケーキと佐藤先生 (2018)","00003"],
//  				[3,	"long long life, complicated (2016)","small yard_(iii) glasses (2017)","happy ice-cream (2019)"],
//  				[3,	"複製との対峙 (2018)","InfluRed (2018)","InterFerence World (2018)"],
//  				[3,	"ポリティカル・インコレクトネス (2017)",	"ピンクのマップ (2013)",	"紅茶を入れてください (2015)"],
//  				[1,	"","00002","00003"],
//  				[3,	"Every Day Goes On Silently (2019)","遠く、ながれて、ずっと (2018)","The Pasts in the Future (2017)"],
//  				[2,	"Saudade (2019)","Saudade (2019)","00003"],
//  				[2,	"渚にて (2018)","夜は隠す (2019)","00003"],
//  	];
//
//
//  	var works_M1 = [
//  				[3,	"prototyping (2017)", "content aware fill (2019)", "mixed (2019)"],
//  				[3,	"車窓について (2017)", "坂の多い街 (2018)", "動き・カメラ(2019)"],
//  				[3,	"OSX Jingle at Soup (2019)", "Jenga Piece at Leeds International Festival (2019)",	"03_米田が生前愛用したカセット・プレーヤー（米田恵子（1912-1992）の作品と生涯について 内） (2018)"],
//  				[3,	"３つの異なるモノからなる構成", "声", "無題"],
//  				[3,	"彼女は父を知らない 彼は西成にいる (2019)", "見守られ後遺症 (2016)", "故郷の因果交流電燈 (2017)"],
//  				[3,	"ピースオブケイク (2017)", "ピースオブケイク (2017)", "ピースオブケイク (2017)"],
//  				[3,	"20歳の旅立ち (2017)", "アイ (2019)",	"カメラカメラ (2016)"],
//  				[3,	"食人葬式時間遡行 (2018)",	 "崖下風葬式時間遡行 (2018)", "アポトーシスの祝福 (2019)"],
//  				[3,	"Vietnam is here. (2019)",	"-emerge- (2017)",	"昇華-津軽の海より- (2017)"],
//  				[3,	"monologues (2018)", "WHOSE IS (2018)",	"ＮＯＩＳＥ (2017)"],
//  				[3,	"島に埋められた本の骨 (2019)",	"この星を語る猫の言葉 (2018)",	"猫の欠伸でしかない (2017)"],
//  				[3,	"切り返しの部屋 (2018)",	"扇風機 (2019)",	"黄色いママチャリ (2017)"]
//  	];
//
//  	var history_M2 =
//     [
//     //Asao
//     "2018<br>"
//     +"「声を殺して叫べ」上映<br>"
//     +"九州産業大学卒業制作秀作展（福岡アジア美術館）<br><br>"
//     +"2017<br>"
//     +"「確かな気配」上映<br>"
//     +"イメージフォーラムフェスティバル2017（横浜を含む国内５都市）<br>"
//     +"ミニキノ国際短編映画祭（インドネシア）<br>"
//     +"Now Japan Festival（リトアニア） <br>"
//
//     //usami
//     ,"2019<br>"
//     +"TOKYO FRONTLINE PHOTO AWARD 2018 入選<br><br>"
//     +"2018<br>"
//     +"TOKYO FRONTLINE PHOTO AWARD 2017 入選<br><br>"
//     +"2017<br>"
//     +"THE TOKYO ART BOOK FAIR / 寺田倉庫<br>"
//     +"Live Performance / ART MEDIA CENTER｜東京藝術大学芸術情報センター<br>"
//
//     //endo
//     ,"2018<br>"
//     +"多摩美術大学 統合デザイン学科 卒業制作展 2018<br><br>"
//     +"2017<br>"
//     +"企画展「妙展」（多摩美術大学芸術祭）<br>"
//     +"統合デザイン学科 第１期生 成果展 ”INTEGRATING”　BankArt NYK<br>"
//
//     //oikawa
//     ,"2019<br>"
//     +"第13回「奏楽堂企画学内公募」最優秀企画『音のいろ、音のかたち　〜現代音楽はスペクタクルの夢をみるか〜』 <br>"
//     +"岸井戯曲を上演するinNagoya#1 「本当に大事なことはあなたの目の前では起こらない」<br>"
//
//     //okada
//     ,"2018<br>"
//     +"東京藝術大学卒業制作展　デザイン賞<br><br>"
//     +"2017<br>"
//     +"SXSW2017　プロダクトデザイン<br>"
//     +"コルベール　2074年夢の世界アワード　ファイナリストコンペティション<br>"
//
//     //kanai
//     ,"2019<br>"
//     +"第24回学生CGコンテスト アート部門 ナレッジ賞<br>"
//     +"ASK?映像祭2019 入選<br>"
//     +"MEDIA PRACTICE 18-19｜東京藝術大学元町中華街校舎<br>"
//     +"ギンガクノフユ2019 参加 | 岩手県西和賀町<br><br>"
//     +"2018<br>"
//     +"第23回学生CGコンテスト アート部門 ナレッジ賞<br>"
//     +"OPEN STUDIO 2018｜東京藝術大学元町中華街校舎<br><br>"
//     +"2017<br>"
//     +"北九州デジタルクリエータコンテスト2017 パフォーマンス部門入選<br>"
//     +"第22回学生CGコンテスト アート部門 ナレッジ賞<br>"
// 	+"「ZAF 逗子メディアアートフェスティバル」| 逗子会館<br><br>"
// 	+"2016<br>"
// 	+"「筑波大学パフォーマンス2016 ねぞうのへん」| 筑波大学<br>"
// 	+"「INNOVATION WORLD FESTA 2016」| 筑波大学<br>"
// 	+"「みなとメディアミュージアム2016」| ひたちなか市那珂湊<br><br>"
// 	+"2015<br>"
// 	+"「Art Hack Day 2015」3331α Arts千代田 斎藤精一賞<br>"
//
//
//     //kobayashit
//     ,"2019<br>"
//     +"第24回学生CGコンテスト 受賞作品展｜日本科学未来館<br>"
//     +"MEDIA PRACTICE 18-19｜東京藝術大学元町中華街校舎<br><br>"
//     +"2018<br>"
//     +"OPEN STUDIO 2018｜東京藝術大学元町中華街校舎<br>"
//     +"個展 チューニング｜No.12 Gallery<br>"
//     +"MEC Award 2018 入選作品展｜SKIPシティ 彩の国ビジュアルプラザ 映像ミュージアム<br>"
//     +"第23回学生CGコンテスト 受賞作品展｜日本科学未来館<br>"
//     +"2018年度 慶應義塾大学SFC 学生有志 合同展示 X-port｜YCC ヨコハマ創造都市センター<br><br>"
//     +"2017<br>"
//     +"イメージフォーラム ヤング・パースペクティヴ 2017｜イメージフォーラム<br><br>"
//     +"2016<br>"
//     +"インターネットヤミ市 東京 2016 〜買える力〜｜3331 Arts Chiyoda<br>"
//     +"2016年度 武蔵野美術大学芸術祭｜武蔵野美術大学 <br>"
//
//     //shikichi
//     ,""
//
//     //shimizu-manae
//     ,"2019<br>"
//     +"MEDIA PRACTICE 18-19<br><br>"
//     +"2018<br>"
//     +"OPEN STUDIO 2018<br>"
//     +"Film and New Media<br>"
//     +"首都大学東京 システムデザイン学部・研究科 インダストリアルアートコース 学域卒業・修了制作展2018<br><br>"
//     +"2016<br>"
//     +"東京プロジェクションマッピングアワードvol.0 最優秀賞<br>"
//
//     //shimizu-mitsuru
//     ,""
//
//     //shin
//     ,""
//
//     //maeda
//     ,"2017<br>"
//     +"「映像は死んだのか」出展　@武蔵野美術大学課外センター<br>"
//
//     //lee
//     ,"-Solo Exhibition<br>"
// 	+"2017.8  「位相の地図」古本屋百年, 東京<br><br>"
// 	+"-Group Exhibition<br>"
// 	+"2018.2  「観察と考察 Ⅱ」Alt_Medium, 東京<br>"
// 	+"2017.2  「6th EMON AWARD」Emon Photo Gallery, 東京<br>"
// 	+"2015.3  「東京工芸大学 Recommend展」新宿 Nikon Salon, 東京<br><br>"
// 	+"-Screening<br>"
// 	+"2019.3  「音のいろ、音のかたち　〜現代音楽はスペクタクルの夢をみるか〜」（G.Aperghis「Recitation」上映プログラムのひとつとして）東京芸術大学奏楽堂, 東京<br><br>"
//
// 	+"-Writing<br>"
// 	+"2018.7   「文藝誌園第2号　時の窓辺に暮らす」（エッセイと写真）<br>"
// 	+"2018.4   「言葉の宇宙船　100の読者、100の経験」（コメント）<br>"
//
//     //yoshida
//     ,"2018<br>"
//     +"「MEC Award 2018 入選作品展」SKIPシティ 彩の国ビジュアルプラザ 映像ミュージアム<br><br>"
//     +"2016<br>"
//     +"ISCA2015 佳作「沈黙。」/ 大阪府 ナレッジキャピタル<br>"
//
//     ];
//
//     var history_M1 = [
//
//     //osato
//     "2019<br>"
//     +"「第67回 東京藝術大学 卒業・修了作品展」出展<br><br>"
//     +"2017<br>"
//     +"二人展「Remixed Salad」企画・出展<br>"
//     +"グループ展「Boogie Nights」出展<br>"
//     +"グループ展「AFTERALL」出展<br><br>"
//     +"2016<br>"
//     +"JAGDA学生グランプリ2016 入選<br>"
//     +"二人展「ゆううつをゆうえつしてしまった。」企画・出展<br>"
//     +"グラフィック展「宙吊」出展<br><br>"
//     +"2015<br>"
//     +"ターナーアワード2015 優秀賞<br>"
//
//     //otaki
//     ,"2019<br>"
//     +"東京五美術大学連合卒業・修了制作展<br>"
//     +"2018年度多摩美術大学美術学部卒業制作展<br>"
//
//     //oka
//     ,"最近の主な活動<br>"
// 	+"2019年<br>"
// 	+"5月7-10日 Leeds, UK Leeds International Festival, 'Automation and Me'<br>"
// 	+"5月5日 Ftarri, 東京都 Fabio Perletta and Friends hosted by Makoto Oshiro<br>"
// 	+"4月18日 WWW, 東京都 パタミュージッキング, as かさねぎリストバンド<br>"
// 	+"3月9日 Soup, 東京都 BARRICADE2 hosted by HUH and Naoki Nomoto, as Duo with Utah Kawasaki<br><br>"
//
// 	+"2018年<br>"
// 	+"12月21-24日 TOKAS, 東京都 OPEN SITE 2018-2019 米田恵子(1912-1992)の作品と生涯について, as Théâtre Musical Tokyo (TMT)<br>"
// 	+"11月18日 Circus Tokyo, 東京都 Algorave x NxPC.Lab at Tokyo (IAMAS)<br>"
// 	+"11月10日 Club Stomp, 大阪府 Algorave Osaka<br>"
// 	+"9月1日 DINA, Sheffield, UK Algorave Sheffield<br>"
// 	+"8月29日 The Globe That Fits, London, UK Algorave Hackney<br>"
// 	+"8月19日 ANAGRA, 東京都 Algorave Tokyo<br>"
// 	+"6月3日 Soup, 東京都 Algorave Tokyo<br>"
// 	+"3月27-30日 東京藝術大学, 東京都 東京藝術大学＋ホーチミン市美術大学共同プロジェクト展覧会・報告会・ワークショップ 三角測量――トーキョー・ゴトー・ホーチミン<br>"
// 	+"3月11日 pool, 東京都 Algorave Tokyo<br><br>"
//
// 	+"2017年<br>"
// 	+"12月22日 KGRn, 東京都 Algorave Tokyo<br>"
// 	+"2月15日 EARTHDOM, 東京都 アフターミュージッキング・パーティ！―祝出版記念―<br>"
// 	+"11月3日 IKLECTIK, London, UK Ensemble for Experimental Music and Theater ロンドン・ベルリンツアー2017:日本実験音楽 1962-2017<br>"
// 	+"11月1日 SPEKTRUM, Berlin, DE 同上<br>"
// 	+"10月29日 Hundred Years Gallery, London, UK 同上<br>"
// 	+"9月24日 Soup, 東京都 コリジョン<br><br>"
//
// 	+"ワークショップ<br>"
// 	+"2018年<br>"
// 	+"11月17日 朝日新聞メディアラボ, 東京都 Live coding workshop for women/non-binary<br>"
// 	+"11月15日 多摩美術大学, 東京都 Live coding workshop for women/non-binary at Tokyo Tama Art Uni. #1<br>"
// 	+"11月11日 STARRYWORKS inc., 大阪府 Womens' workshop Osaka<br><br>"
//
// 	+"派遣<br>"
// 	+"2017年11月13-19日 Ho Chi Minh, VN 東京藝術大学＋ホーチミン市美術大学共同プロジェクト<br><br>"
//
// 	+"研究活動<br>"
// 	+"2017年より日高良佑(首都大学東京助教)、篠田ミル(東京大学情報学環・学際情報学府修士課程)のMIDI規格成立過程調査研究に参加<br>"
//     //kang
//     ,"2017<br>"
//     +"「ノントコヨ」プロジェクト参加 フェスティバル・トーキョー<br><br>"
//     +"2015<br>"
//     +"「メロディー、声」IMM東京に出展<br>"
//
//     //koga
//     ,""
//
//     //kobayashi
//     ,""
//
//     //shiina
//     ,"2019<br>"
//     +"東京藝術大学卒業・修了作品展<br>"
//
//     //shishikura
//     ,"2018<br>"
//     +"「不能の時間遡行者」<br>"
//
//     //shimura
//     ,"2019<br>"
//     +"「2018年度京都造形芸術大学卒業展」<br>"
//     +"「KUAD ANNUAL2019 宇宙船地球号」（グループ展）<br><br>"
//     +"2018<br>"
//     +"「ON THE ROAD」（グループ展）<br>"
//     +"「おわらないうた」（個展）<br><br>"
//     +"2017<br>"
//     +"「-emerge-」（個展）、「旅と文学」（グループ展）、「第16回京都現代写真作家展」（グループ展）<br>"
//     +"水中花」（個展）<br>"
//
//     //seko
//     ,""
//
//     //hirai
//     ,"2019<br>"
//     +"東京藝術大学卒展 出品<br><br>"
//     +"2017<br>"
//     +"平山郁夫奨学金賞 受賞<br>"
//
//     //hukuhara
//     ,""
//     ];
//
//     var comment_M2 = [
//     	//asao
//     	""
//
//     	//usami
//     	,"ジェンダーのリサーチをもとに、被写体と鑑賞者の&quot視線&quotの関係を揺さぶるポートレイトや映像を制作する。"
//
//     	//endo
//     	,"映像やインタラクティブメディアを中心にしつつも領域を限定せず制作活動をしている。人間の五感や身体感覚に基づいた新たな表現やデザインを模索している。"
//
//     	//oikawa
//     	,"フィールドワークを通して他者の中にある風景について考える。カメラを通していかに対象との距離を保つことが出来るかを模索しドキュメンタリーの方法を探究する。"
//
//     	//okada
//     	,"不条理の文学や演劇に興味があります。目の前で起きてしまった事故や事件など、予想や理解を超えた問題に対して、人はいかにして向き合うことができるのか、表現を通して探っています。"
//
//     	//kanai
// 		,"人間の狂気と機械の狂気の融合をテーマに制作を行い、世界平和を目指しています。"
//
//     	//kobayashi
//     	,"短編アニメーションを制作してきた背景から、“アニメーションの脱構築”を主題に、アニメーションのもつ要素を解体し、現代社会における個人的なアニメーションの成立条件を考察する。"
//
//     	//shikichi
//     	,"私は私のものだと思っています。同時にあなたはあなたのものだと思っていますが、そうとも限らず私たちは、社会的なものに突き動かされたり、動物的なものから逃れられない瞬間があります。思っているよりも私たちはずっと不自由なのかも知れません。1人の人間を塊として括り出し、それを動かす様々なものを捉えようと試みています。"
//
//     	//shimizu-manae
//     	,"現在、「東京」をテーマに作品を作っている。生まれてこの方、都内に暮らしながらも西側でずっと過ごしてきた私には「都心」への憧れがある。電車で30分もすれば行けるけれど、何か違うその場所。大好きな都心を歩きながら、その純粋な面白さを抽出し、構築する。"
//
//     	//shimizu-mitsuru
//     	,"他者や社会と繋がることは代えがたい喜びがありますが、そこから断絶してしまったもの、見過ごされてしまうものに目を向けることこそ重要な行為に思えます。他者と共有できない痛みや困惑を対象化し、コミュニケーションのあり方について考えています。"
//
//     	//shin
//     	,"2017年より暗号通貨のトレード・研究を行っており、日々暗号通貨の本質とその未来について考察しています。"
//
//     	//maeda
//     	,"カメラによって世界をキャプチャするとき、わたしたちが慣れ親しんだはずの世界は圧縮され、ときに思わぬ平面性に遭遇する。その中に潜む奥行きやレイヤーの構造に着目した制作を行う。"
//
//     	//lee
//     	,"記憶と関わり合う事象として写真や映像による経験を捉え、事物の不在を起点とする作品を制作。"
//
//     	//yoshida
//     	,"自身の体験や記憶と土地の風景を交差させた物語を制作する。現在取り組んでいるテーマは青森県六ヶ所村を巡る複雑な情勢と地方から都市に運ばれる見えざる力を可視化すること、風景と親密さ。"
//     ];
//
//
//     var comment_M1 = [
//
//     //osato
//     "画像を軸にメディアのことを考えていきたいと思っています。メディアと、社会や歴史、経済、また人間の知覚のあり方や行動の様式、欲望との接続に興味があります。"
//
//     //otaki
//     ,"リニアな時間を持つ映画と映像インスタレーション、二つの形式から映像を制作しています。映像の時間、運動、撮影すること、音、言葉、編集に関心を持っています。映像や言葉によって物事の見方捉え方を提示することを目指しています。"
//
//     //oka
//     ,"コンピュータとアルゴリズミックな可変性、オートメーション、量的な情報、規則、ソフトウェアやフォーマット、そして音楽、即興音楽、詩、コミュニティ。"
//
//     //kang
//     ,"作品は考え方の考え方だと思います。それをやり続けたいです。人工的な何かを作ります。"
//
//     //koga
//     ,"あるところに住みフィールドワークを行うこと、歴史や記憶のゆるやかなつながりを見つけること。より強い個人性をもちながら共有性を確保するにはどうしたらいいのか、個人として世界と繋がることは可能か考えます。"
//
//     //kobayashi
//     ,"日常の中に居ながらにして、美術史や歴史といった100年単位で編まれる客観的な時間軸を実感できる瞬間をきっかけに制作を行う。"
//
//     //shiina
//     ,"作品空間で人々は時と場所を共有し、奇妙な関係性を持つ。空間は多方向へのベクトルを持ち、随所で肉体と結びつく。映像やベクトルが伴う重さを人間の五感を刺激し鑑賞すること、人の存在によって「時間と記憶と物語」を追求する。"
//
//     //shishikura
//     ,"時間や空間を超えてこの世界に満ちている普遍的な「神」の存在を前提に、かつて原始社会において行われた儀礼や神話の現在における形を探っている。"
//
//     //shimura
//     ,"ベトナム戦争における枯葉剤被害のリサーチ活動経験をもとに、過去の戦争や災害がもたらした負の遺産との向き合い方について考え続けている。"
//
//     //seko
//     ,"自分が好きになるかどうかという基準で制作しています。"
//
//     //hirai
//     ,"言葉を覚える前のことは言葉では思い出せない。それでも何とか方法を尽くして思い出そうとすることは、認知症の祖母の視界を想像することと似ている。"
//
//     //hukuhara
//     ,"主に映像作品を制作しています。"
//     ];
//
//
//  	for(var itr=0; itr<14; itr++){
//  		var id = info_M2[itr][0];
//  		var lab = info_M2[itr][1];
//  		var nameJP = info_M2[itr][2];
// 		var nameEN = info_M2[itr][3];
//  		var worksNum = works_M2[itr][0];
//  		var filename = ["01.jpg", "02.jpg", "03.jpg"];
//  		var fileTitle = [works_M2[itr][1], works_M2[itr][2], works_M2[itr][3]];
//  		var almaMater = info_M2[itr][4];
//  		var comment = comment_M2[itr];
//  		var link = info_M2[itr][5];
//  		var history = history_M2[itr];
//
//  		$(".m2").append(
//  			'<div class="artist-wrapper" id="_'
//  			+ id + '">\n<div class="sumbnail" >\n<img src="artistInfomation/sumbnail/M2/'
// 			+ id + '/01.jpg">\n</div>\n<div class="infoText">\n<div class="name">\n<p class="nameJP">'
// 			+ nameJP + '</p>\n<p class="nameEN">'
// 			+ nameEN +'</p>\n</div>\n<p class="lab">'
// 			+ lab + '研究室</p>\n<div class="modalButton">Details...</div>\n</div>\n</div>'
// 		);
//
// 		$("#modals-wrapper").append(
// 			'<div class="artist-modal" id="_'
// 			+ id + '_modal">\n<div class="first-column">\n<div class="modal-lab">'
// 			+ lab + '研究室</div>\n<img src="images/UI/close.png" class="back-button">\n</div>\n<div class="second-column">\n<div class="modal-nameJP">'
// 			+ nameJP +'</div>\n<div class="modal-nameEN">'
// 			+ nameEN +'</div>\n</div>');
//
// 		for(var i=0; i<worksNum; i++){
// 			$("#_" + id + "_modal").append('<div class="work">\n<img src="artistInfomation/M2/'
// 				+ id + '/' +filename[i] + '" class="work-photo">\n<p class="work-title">'
// 				+ fileTitle[i] + '</p>\n</div>\n');
// 		}
//
// 		$("#_" + id + "_modal").append(
// 			'<div class="footer-column">\n'
// 				+'<p class="alma-mater">'+ almaMater + '<br><br></p>\n'
// 				+'<p class="comment">'+ comment + '</p>\n'
// 				+'<div class="link">\n'
// 					+'<a href="'+ link + '">' + link +'</a>\n'
// 				+'</div>\n'
// 				+'<div class="history"><p><br>' + history + '</p></div>'
// 			+'</div>\n'
//
// 			+'<div class="back-button close-under">Close</div>'
// 			);
// 	}
//
//
//  	for(var itr=0; itr<12; itr++){
//  		var id = info_M1[itr][0];
//  		var lab = info_M1[itr][1];
//  		var nameJP = info_M1[itr][2];
// 		var nameEN = info_M1[itr][3];
//  		var worksNum = works_M1[itr][0];
//  		var filename = ["01.jpg", "02.jpg", "03.jpg"];
//  		var fileTitle = [works_M1[itr][1], works_M1[itr][2], works_M1[itr][3]];
//  		var almaMater = info_M1[itr][4];
//  		var comment = comment_M1[itr];
//  		var link = info_M1[itr][5];
//  		var history = history_M1[itr];
//
//
//
//  		$(".m1").append(
//  			'<div class="artist-wrapper" id="_'
//  			+ id + '">\n<div class="sumbnail" >\n<img src="artistInfomation/sumbnail/M1/'
// 			+ id + '/01.jpg">\n</div>\n<div class="infoText">\n<div class="name">\n<p class="nameJP">'
// 			+ nameJP + '</p>\n<p class="nameEN">'
// 			+ nameEN +'</p>\n</div>\n<div class="modalButton">Details...</div>\n</div>\n</div>'
// 		);
//
// 		$("#modals-wrapper").append(
// 			'<div class="artist-modal" id="_'
// 			+ id + '_modal">\n<div class="first-column">\n<div class="modal-lab">'
// 			+ lab + '</div>\n<img src="images/UI/close.png" class="back-button">\n</div>\n<div class="second-column">\n<div class="modal-nameJP">'
// 			+ nameJP +'</div>\n<div class="modal-nameEN">'
// 			+ nameEN +'</div>\n</div>');
//
// 		for(var i=0; i<worksNum; i++){
// 			$("#_" + id + "_modal").append('<div class="work">\n<img src="artistInfomation/M1/'
// 				+ id + '/' +filename[i] + '" class="work-photo">\n<p class="work-title">'
// 				+ fileTitle[i] + '</p>\n</div>\n');
// 		}
//
// 		$("#_" + id + "_modal").append(
// 			'<div class="footer-column">\n'
// 				+'<p class="alma-mater">'+ almaMater + '<br><br></p>\n'
// 				+'<p class="comment">'+ comment + '</p>\n'
// 				+'<div class="link">\n'
// 					+'<a href="'+ link + '">' + link +'</a>\n'
// 				+'</div>\n'
// 				+'<div class="history"><p><br>' + history + '</p></div>'
// 			+'</div>\n'
//
// 			+'<div class="back-button close-under">Close</div>'
// 			);
//
//  	}
//
// 	$(".artist-modal").hide();
//
// });
