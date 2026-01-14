// 国际化文本
const i18n = {
    zh: {
        title: "各国家海港情况汇总",
        subtitle: "深圳市平方科技股份有限公司",
        author: "author:常经纬",
        date: "date：14thJan2026",
        version: "ver:v1.2",
        countries: {
            vietnam: "越南",
            malaysia: "马来西亚",
            singapore: "新加坡",
            brunei: "文莱",
            indonesia: "印尼",
            greece: "希腊"
        },
        rankingTitle: "世界港口吞吐量排名",
        refreshTime: "刷新时间：",
        portInfo: {
            teu: "集装箱吞吐量：",
            growth: "吞吐量增长率：",
            quayCranes: "岸桥数量：",
            gantryCranes: "门机数量：",
            gates: "闸口数量："
        }
    },
    en: {
        title: "Summary of Seaports by Country",
        subtitle: "Shenzhen Pingfang Technology Co., Ltd.",
        author: "author:Chang Jingwei",
        date: "date：14thJan2026",
        version: "ver:v1.2",
        countries: {
            vietnam: "Vietnam",
            malaysia: "Malaysia",
            singapore: "Singapore",
            brunei: "Brunei",
            indonesia: "Indonesia",
            greece: "Greece"
        },
        rankingTitle: "World Port Throughput Ranking",
        refreshTime: "Refresh Time：",
        portInfo: {
            teu: "Container Throughput：",
            growth: "Throughput Growth Rate：",
            quayCranes: "Quay Cranes：",
            gantryCranes: "Gantry Cranes：",
            gates: "Gates："
        }
    }
};

// 港口数据（模拟数据）
const portData = {
    vietnam: [
        { name: "胡志明港", abbr: "HOCHIMINH", lat: 10.7070, lng: 106.6470, teu: "8,500,000", growth: "5.2%", quayCranes: 35, gantryCranes: 60, gates: 25 },
        { name: "海防港", abbr: "HAIPHONG", lat: 20.8350, lng: 106.6920, teu: "6,200,000", growth: "4.8%", quayCranes: 28, gantryCranes: 45, gates: 20 },
        { name: "岘港", abbr: "DA NANG", lat: 16.0544, lng: 108.2022, teu: "3,800,000", growth: "6.5%", quayCranes: 20, gantryCranes: 35, gates: 15 },
        { name: "盖梅港", abbr: "CAI MEP", lat: 10.5333, lng: 107.1333, teu: "3,200,000", growth: "8.1%", quayCranes: 18, gantryCranes: 30, gates: 12 },
        { name: "归仁港", abbr: "QUI NHON", lat: 13.7667, lng: 109.2333, teu: "2,500,000", growth: "3.9%", quayCranes: 15, gantryCranes: 25, gates: 10 },
        { name: "芽庄港", abbr: "NHA TRANG", lat: 12.2383, lng: 109.1992, teu: "2,100,000", growth: "4.5%", quayCranes: 12, gantryCranes: 20, gates: 8 },
        { name: "头顿港", abbr: "VUNG TAU", lat: 10.3417, lng: 107.0833, teu: "1,800,000", growth: "5.7%", quayCranes: 10, gantryCranes: 18, gates: 7 },
        { name: "潘切港", abbr: "PHAN THIET", lat: 10.9333, lng: 108.1000, teu: "1,500,000", growth: "3.2%", quayCranes: 8, gantryCranes: 15, gates: 6 },
        { name: "清化港", abbr: "THANH HOA", lat: 19.8167, lng: 105.7500, teu: "1,200,000", growth: "4.1%", quayCranes: 7, gantryCranes: 12, gates: 5 },
        { name: "荣市港", abbr: "VINH", lat: 18.6667, lng: 105.6000, teu: "1,000,000", growth: "3.8%", quayCranes: 6, gantryCranes: 10, gates: 4 },
        { name: "河静港", abbr: "HA TINH", lat: 18.1167, lng: 105.9000, teu: "950,000", growth: "4.3%", quayCranes: 5, gantryCranes: 9, gates: 4 },
        { name: "广治港", abbr: "QUANG TRI", lat: 16.7500, lng: 107.1500, teu: "850,000", growth: "3.5%", quayCranes: 5, gantryCranes: 8, gates: 3 },
        { name: "承天顺化港", abbr: "THUA THIEN HUE", lat: 16.4667, lng: 107.5833, teu: "800,000", growth: "4.0%", quayCranes: 4, gantryCranes: 7, gates: 3 },
        { name: "广义港", abbr: "QUANG NGAI", lat: 15.1000, lng: 108.8000, teu: "750,000", growth: "3.7%", quayCranes: 4, gantryCranes: 6, gates: 3 },
        { name: "平定港", abbr: "BINH DINH", lat: 13.9000, lng: 109.3500, teu: "700,000", growth: "3.9%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "富安港", abbr: "PHU YEN", lat: 13.0500, lng: 109.3000, teu: "650,000", growth: "3.6%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "庆和港", abbr: "KHANH HOA", lat: 12.2500, lng: 109.1667, teu: "600,000", growth: "3.4%", quayCranes: 3, gantryCranes: 4, gates: 2 },
        { name: "宁顺港", abbr: "NING THUAN", lat: 11.5000, lng: 108.9167, teu: "550,000", growth: "3.2%", quayCranes: 2, gantryCranes: 4, gates: 2 },
        { name: "平顺港", abbr: "BINH THUAN", lat: 10.9667, lng: 108.1333, teu: "500,000", growth: "3.0%", quayCranes: 2, gantryCranes: 3, gates: 1 },
        { name: "同奈港", abbr: "DONG NAI", lat: 10.9333, lng: 106.8000, teu: "450,000", growth: "2.8%", quayCranes: 2, gantryCranes: 3, gates: 1 }
    ],
    malaysia: [
        { name: "巴生港", abbr: "PORT KLANG", lat: 3.0000, lng: 101.4167, teu: "13,500,000", growth: "6.2%", quayCranes: 55, gantryCranes: 85, gates: 35 },
        { name: "丹戎帕拉帕斯港", abbr: "TANJUNG PELEPAS", lat: 1.3333, lng: 103.5000, teu: "10,800,000", growth: "5.8%", quayCranes: 45, gantryCranes: 75, gates: 30 },
        { name: "槟城港", abbr: "PENANG", lat: 5.4167, lng: 100.3333, teu: "3,200,000", growth: "4.5%", quayCranes: 20, gantryCranes: 35, gates: 15 },
        { name: "关丹港", abbr: "KUANTAN", lat: 3.8167, lng: 103.3333, teu: "2,800,000", growth: "5.2%", quayCranes: 18, gantryCranes: 30, gates: 12 },
        { name: "柔佛港", abbr: "JOHOR", lat: 1.4333, lng: 103.7500, teu: "2,500,000", growth: "4.8%", quayCranes: 15, gantryCranes: 25, gates: 10 },
        { name: "古晋港", abbr: "KUCHING", lat: 1.5500, lng: 110.3333, teu: "2,100,000", growth: "3.9%", quayCranes: 12, gantryCranes: 20, gates: 8 },
        { name: "民都鲁港", abbr: "BINTULU", lat: 3.1667, lng: 113.0000, teu: "1,800,000", growth: "4.3%", quayCranes: 10, gantryCranes: 18, gates: 7 },
        { name: "沙巴港", abbr: "SABAH", lat: 5.9167, lng: 116.0000, teu: "1,500,000", growth: "3.7%", quayCranes: 8, gantryCranes: 15, gates: 6 },
        { name: "马六甲港", abbr: "MALACCA", lat: 2.1833, lng: 102.2500, teu: "1,200,000", growth: "3.5%", quayCranes: 7, gantryCranes: 12, gates: 5 },
        { name: "怡保港", abbr: "IPOH", lat: 4.6000, lng: 101.0000, teu: "1,000,000", growth: "3.2%", quayCranes: 6, gantryCranes: 10, gates: 4 },
        { name: "吉兰丹港", abbr: "KELANTAN", lat: 6.1333, lng: 102.2167, teu: "950,000", growth: "3.8%", quayCranes: 5, gantryCranes: 9, gates: 4 },
        { name: "登嘉楼港", abbr: "TERENGGANU", lat: 5.3333, lng: 103.1667, teu: "850,000", growth: "3.4%", quayCranes: 5, gantryCranes: 8, gates: 3 },
        { name: "玻璃市港", abbr: "PERLIS", lat: 6.4000, lng: 100.1667, teu: "800,000", growth: "3.1%", quayCranes: 4, gantryCranes: 7, gates: 3 },
        { name: "霹雳港", abbr: "PERAK", lat: 4.8000, lng: 100.7000, teu: "750,000", growth: "3.6%", quayCranes: 4, gantryCranes: 6, gates: 3 },
        { name: "森美兰港", abbr: "NEGERI SEMBILAN", lat: 2.7500, lng: 101.9000, teu: "700,000", growth: "3.3%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "彭亨港", abbr: "PAHANG", lat: 3.5833, lng: 103.3333, teu: "650,000", growth: "3.0%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "砂拉越港", abbr: "SARAWAK", lat: 1.5500, lng: 110.3333, teu: "600,000", growth: "2.8%", quayCranes: 3, gantryCranes: 4, gates: 2 },
        { name: "纳闽港", abbr: "LABUAN", lat: 5.2833, lng: 115.2333, teu: "550,000", growth: "2.6%", quayCranes: 2, gantryCranes: 4, gates: 2 },
        { name: "浮罗交怡港", abbr: "LANGKAWI", lat: 6.3333, lng: 99.8333, teu: "500,000", growth: "2.4%", quayCranes: 2, gantryCranes: 3, gates: 1 },
        { name: "槟城岛港", abbr: "PENANG ISLAND", lat: 5.4167, lng: 100.3333, teu: "450,000", growth: "2.2%", quayCranes: 2, gantryCranes: 3, gates: 1 }
    ],
    singapore: [
        { name: "新加坡港", abbr: "SINGAPORE", lat: 1.2833, lng: 103.8333, teu: "37,500,000", growth: "4.8%", quayCranes: 200, gantryCranes: 350, gates: 80 },
        { name: "裕廊港", abbr: "JURONG", lat: 1.3500, lng: 103.7000, teu: "12,500,000", growth: "3.9%", quayCranes: 85, gantryCranes: 150, gates: 35 },
        { name: "巴西班让港", abbr: "PASIR PANJANG", lat: 1.2667, lng: 103.7333, teu: "10,200,000", growth: "4.5%", quayCranes: 70, gantryCranes: 120, gates: 30 },
        { name: "丹戎巴葛港", abbr: "TANJONG PAGAR", lat: 1.2750, lng: 103.8333, teu: "8,500,000", growth: "3.8%", quayCranes: 55, gantryCranes: 95, gates: 25 },
        { name: "布拉尼港", abbr: "BRANI", lat: 1.2500, lng: 103.8000, teu: "7,200,000", growth: "3.5%", quayCranes: 45, gantryCranes: 80, gates: 20 },
        { name: "岌巴港", abbr: "KEPPEL", lat: 1.2667, lng: 103.8167, teu: "6,800,000", growth: "3.2%", quayCranes: 40, gantryCranes: 70, gates: 18 },
        { name: "实里达港", abbr: "SELETAR", lat: 1.4000, lng: 103.9000, teu: "5,500,000", growth: "2.9%", quayCranes: 35, gantryCranes: 60, gates: 15 },
        { name: "勿拉尼港", abbr: "BUROH", lat: 1.3333, lng: 103.6833, teu: "4,800,000", growth: "2.7%", quayCranes: 30, gantryCranes: 50, gates: 12 },
        { name: "巴耶利巴港", abbr: "PAYA LEBAR", lat: 1.3500, lng: 103.8917, teu: "4,200,000", growth: "2.5%", quayCranes: 25, gantryCranes: 45, gates: 10 },
        { name: "樟宜港", abbr: "CHANGI", lat: 1.3667, lng: 103.9833, teu: "3,800,000", growth: "2.3%", quayCranes: 22, gantryCranes: 40, gates: 9 },
        { name: "榜鹅港", abbr: "PUNGGOL", lat: 1.4000, lng: 103.9167, teu: "3,500,000", growth: "2.1%", quayCranes: 20, gantryCranes: 35, gates: 8 },
        { name: "盛港港", abbr: "SENGKANG", lat: 1.3833, lng: 103.8917, teu: "3,200,000", growth: "1.9%", quayCranes: 18, gantryCranes: 32, gates: 7 },
        { name: "义顺港", abbr: "YISHUN", lat: 1.4250, lng: 103.8333, teu: "2,900,000", growth: "1.7%", quayCranes: 16, gantryCranes: 28, gates: 6 },
        { name: "兀兰港", abbr: "WOODLANDS", lat: 1.4417, lng: 103.7917, teu: "2,600,000", growth: "1.5%", quayCranes: 14, gantryCranes: 25, gates: 5 },
        { name: "金文泰港", abbr: "CLEMENTI", lat: 1.3167, lng: 103.7667, teu: "2,300,000", growth: "1.3%", quayCranes: 12, gantryCranes: 22, gates: 5 },
        { name: "武吉知马港", abbr: "BUKIT TIMAH", lat: 1.3250, lng: 103.8167, teu: "2,100,000", growth: "1.1%", quayCranes: 10, gantryCranes: 20, gates: 4 },
        { name: "淡滨尼港", abbr: "TAMPINES", lat: 1.3583, lng: 103.9333, teu: "1,900,000", growth: "0.9%", quayCranes: 9, gantryCranes: 18, gates: 4 },
        { name: "马林百列港", abbr: "MARINE PARADE", lat: 1.3000, lng: 103.8750, teu: "1,700,000", growth: "0.7%", quayCranes: 8, gantryCranes: 16, gates: 3 },
        { name: "东海岸港", abbr: "EAST COAST", lat: 1.3167, lng: 103.9000, teu: "1,500,000", growth: "0.5%", quayCranes: 7, gantryCranes: 14, gates: 3 },
        { name: "西海岸港", abbr: "WEST COAST", lat: 1.2833, lng: 103.7333, teu: "1,300,000", growth: "0.3%", quayCranes: 6, gantryCranes: 12, gates: 2 }
    ],
    brunei: [
        { name: "穆阿拉港", abbr: "MUARA", lat: 5.0333, lng: 115.0000, teu: "1,800,000", growth: "4.2%", quayCranes: 12, gantryCranes: 20, gates: 8 },
        { name: "斯里巴加湾港", abbr: "BANDAR SERI BEGAWAN", lat: 4.9333, lng: 114.9333, teu: "1,200,000", growth: "3.5%", quayCranes: 8, gantryCranes: 15, gates: 6 },
        { name: "诗里亚港", abbr: "SERIA", lat: 4.5833, lng: 114.1500, teu: "950,000", growth: "3.1%", quayCranes: 6, gantryCranes: 12, gates: 5 },
        { name: "都东港", abbr: "TUTONG", lat: 4.8000, lng: 114.5333, teu: "800,000", growth: "2.8%", quayCranes: 5, gantryCranes: 10, gates: 4 },
        { name: "白拉奕港", abbr: "BELAIT", lat: 4.5000, lng: 114.1000, teu: "750,000", growth: "2.6%", quayCranes: 4, gantryCranes: 9, gates: 3 },
        { name: "马来奕港", abbr: "MUKAH", lat: 3.2000, lng: 112.0000, teu: "700,000", growth: "2.4%", quayCranes: 4, gantryCranes: 8, gates: 3 },
        { name: "林梦港", abbr: "LIMBANG", lat: 4.7833, lng: 115.0333, teu: "650,000", growth: "2.2%", quayCranes: 3, gantryCranes: 7, gates: 2 },
        { name: "鲁木港", abbr: "LUMUT", lat: 4.3333, lng: 114.3333, teu: "600,000", growth: "2.0%", quayCranes: 3, gantryCranes: 6, gates: 2 },
        { name: "沙巴鲁港", abbr: "SABAHURO", lat: 5.1000, lng: 115.1667, teu: "550,000", growth: "1.8%", quayCranes: 2, gantryCranes: 5, gates: 2 },
        { name: "文莱摩拉港", abbr: "BRUNEI MUARA", lat: 5.0333, lng: 115.0000, teu: "500,000", growth: "1.6%", quayCranes: 2, gantryCranes: 4, gates: 1 },
        { name: "淡布隆港", abbr: "TEMBURONG", lat: 4.8833, lng: 115.1667, teu: "450,000", growth: "1.4%", quayCranes: 2, gantryCranes: 4, gates: 1 },
        { name: "乌鲁都东港", abbr: "UPR TUTONG", lat: 4.7500, lng: 114.5000, teu: "400,000", growth: "1.2%", quayCranes: 1, gantryCranes: 3, gates: 1 },
        { name: "乌鲁白拉奕港", abbr: "UPR BELAIT", lat: 4.4500, lng: 114.0500, teu: "350,000", growth: "1.0%", quayCranes: 1, gantryCranes: 3, gates: 1 },
        { name: "西巴丹港", abbr: "SEBATAN", lat: 5.0500, lng: 115.0500, teu: "300,000", growth: "0.8%", quayCranes: 1, gantryCranes: 2, gates: 1 },
        { name: "东巴丹港", abbr: "EAST BATAN", lat: 5.0833, lng: 115.1000, teu: "250,000", growth: "0.6%", quayCranes: 1, gantryCranes: 2, gates: 1 },
        { name: "南巴丹港", abbr: "SOUTH BATAN", lat: 5.0167, lng: 115.0833, teu: "200,000", growth: "0.4%", quayCranes: 1, gantryCranes: 1, gates: 1 },
        { name: "北巴丹港", abbr: "NORTH BATAN", lat: 5.0667, lng: 115.0333, teu: "150,000", growth: "0.2%", quayCranes: 1, gantryCranes: 1, gates: 1 },
        { name: "中巴丹港", abbr: "CENTRAL BATAN", lat: 5.0333, lng: 115.0500, teu: "100,000", growth: "0.0%", quayCranes: 1, gantryCranes: 1, gates: 1 },
        { name: "小巴丹港", abbr: "SMALL BATAN", lat: 5.0250, lng: 115.0667, teu: "80,000", growth: "-0.2%", quayCranes: 1, gantryCranes: 1, gates: 1 },
        { name: "大巴丹港", abbr: "LARGE BATAN", lat: 5.0500, lng: 115.0167, teu: "60,000", growth: "-0.4%", quayCranes: 1, gantryCranes: 1, gates: 1 }
    ],
    indonesia: [
        { name: "雅加达港", abbr: "JAKARTA", lat: -6.1750, lng: 106.8280, teu: "8,500,000", growth: "5.2%", quayCranes: 35, gantryCranes: 60, gates: 25 },
        { name: "泗水港", abbr: "SURABAYA", lat: -7.2500, lng: 112.7500, teu: "6,800,000", growth: "4.8%", quayCranes: 28, gantryCranes: 45, gates: 20 },
        { name: "丹戎佩拉港", abbr: "TANJUNG PRIOK", lat: -6.1333, lng: 106.8167, teu: "6,200,000", growth: "5.5%", quayCranes: 25, gantryCranes: 40, gates: 18 },
        { name: "三宝垄港", abbr: "SEMARANG", lat: -6.9667, lng: 110.4167, teu: "4,500,000", growth: "4.3%", quayCranes: 20, gantryCranes: 35, gates: 15 },
        { name: "巨港", abbr: "PALEMBANG", lat: -2.9167, lng: 104.7500, teu: "3,800,000", growth: "3.9%", quayCranes: 18, gantryCranes: 30, gates: 12 },
        { name: "望加锡港", abbr: "MAKASSAR", lat: -5.1470, lng: 119.4320, teu: "3,200,000", growth: "4.1%", quayCranes: 15, gantryCranes: 25, gates: 10 },
        { name: "棉兰港", abbr: "MEDAN", lat: 3.5950, lng: 98.6720, teu: "2,800,000", growth: "3.7%", quayCranes: 12, gantryCranes: 20, gates: 8 },
        { name: "巴厘巴板港", abbr: "BALIKPAPAN", lat: -1.2500, lng: 116.8000, teu: "2,500,000", growth: "3.5%", quayCranes: 10, gantryCranes: 18, gates: 7 },
        { name: "马辰港", abbr: "BANJARMASIN", lat: -3.3167, lng: 114.5833, teu: "2,100,000", growth: "3.2%", quayCranes: 9, gantryCranes: 16, gates: 6 },
        { name: "日惹港", abbr: "YOGYAKARTA", lat: -7.8000, lng: 110.3667, teu: "1,800,000", growth: "3.0%", quayCranes: 8, gantryCranes: 14, gates: 5 },
        { name: "万隆港", abbr: "BANDUNG", lat: -6.9167, lng: 107.6000, teu: "1,600,000", growth: "2.8%", quayCranes: 7, gantryCranes: 12, gates: 4 },
        { name: "占碑港", abbr: "JAMBI", lat: -1.6000, lng: 103.6167, teu: "1,400,000", growth: "2.6%", quayCranes: 6, gantryCranes: 10, gates: 4 },
        { name: "朋古鲁港", abbr: "BENGKULU", lat: -3.8000, lng: 102.2667, teu: "1,200,000", growth: "2.4%", quayCranes: 5, gantryCranes: 9, gates: 3 },
        { name: "班达亚齐港", abbr: "BANDA ACEH", lat: 5.5500, lng: 95.3200, teu: "1,100,000", growth: "2.2%", quayCranes: 5, gantryCranes: 8, gates: 3 },
        { name: "苏门答腊港", abbr: "SUMATRA", lat: 0.7500, lng: 101.4167, teu: "1,000,000", growth: "2.0%", quayCranes: 4, gantryCranes: 7, gates: 3 },
        { name: "爪哇港", abbr: "JAVA", lat: -6.5000, lng: 107.5000, teu: "950,000", growth: "1.8%", quayCranes: 4, gantryCranes: 6, gates: 2 },
        { name: "加里曼丹港", abbr: "KALIMANTAN", lat: -2.0000, lng: 114.0000, teu: "900,000", growth: "1.6%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "苏拉威西港", abbr: "SULAWESI", lat: -2.5000, lng: 120.0000, teu: "850,000", growth: "1.4%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "巴厘岛港", abbr: "BALI", lat: -8.3400, lng: 115.0900, teu: "800,000", growth: "1.2%", quayCranes: 3, gantryCranes: 4, gates: 2 },
        { name: "龙目岛港", abbr: "LOMBOK", lat: -8.3333, lng: 116.5000, teu: "750,000", growth: "1.0%", quayCranes: 2, gantryCranes: 4, gates: 1 }
    ],
    greece: [
        { name: "比雷埃夫斯港", abbr: "PIRAEUS", lat: 37.9450, lng: 23.6550, teu: "5,800,000", growth: "6.2%", quayCranes: 28, gantryCranes: 45, gates: 20 },
        { name: "塞萨洛尼基港", abbr: "THESSALONIKI", lat: 40.6450, lng: 22.9400, teu: "2,500,000", growth: "4.8%", quayCranes: 15, gantryCranes: 25, gates: 10 },
        { name: "帕特雷港", abbr: "PATRAS", lat: 38.2450, lng: 21.7350, teu: "1,800,000", growth: "4.3%", quayCranes: 12, gantryCranes: 20, gates: 8 },
        { name: "伊拉克利翁港", abbr: "HERAKLION", lat: 35.3380, lng: 25.1330, teu: "1,500,000", growth: "3.9%", quayCranes: 10, gantryCranes: 18, gates: 7 },
        { name: "萨洛尼卡港", abbr: "SALONIKA", lat: 40.6450, lng: 22.9400, teu: "1,200,000", growth: "3.5%", quayCranes: 8, gantryCranes: 15, gates: 6 },
        { name: "米蒂利尼港", abbr: "MYTILENE", lat: 39.1150, lng: 26.5500, teu: "1,100,000", growth: "3.2%", quayCranes: 7, gantryCranes: 14, gates: 5 },
        { name: "罗得港", abbr: "RHODES", lat: 36.4310, lng: 28.2170, teu: "1,000,000", growth: "2.9%", quayCranes: 6, gantryCranes: 12, gates: 4 },
        { name: "科孚港", abbr: "CORFU", lat: 39.6250, lng: 19.9180, teu: "950,000", growth: "2.7%", quayCranes: 6, gantryCranes: 11, gates: 4 },
        { name: "雅典港", abbr: "ATHENS", lat: 37.9790, lng: 23.7160, teu: "900,000", growth: "2.5%", quayCranes: 5, gantryCranes: 10, gates: 3 },
        { name: "拉里萨港", abbr: "LARISSA", lat: 39.6360, lng: 22.4160, teu: "850,000", growth: "2.3%", quayCranes: 5, gantryCranes: 9, gates: 3 },
        { name: "沃洛斯港", abbr: "VOLOS", lat: 39.3680, lng: 22.9440, teu: "800,000", growth: "2.1%", quayCranes: 4, gantryCranes: 8, gates: 3 },
        { name: "哈尔基斯港", abbr: "CHALKIDA", lat: 38.4740, lng: 23.6700, teu: "750,000", growth: "1.9%", quayCranes: 4, gantryCranes: 7, gates: 2 },
        { name: "约阿尼纳港", abbr: "IOANNINA", lat: 39.6620, lng: 20.8520, teu: "700,000", growth: "1.7%", quayCranes: 3, gantryCranes: 6, gates: 2 },
        { name: "卡瓦拉港", abbr: "KAVALA", lat: 40.9380, lng: 24.4190, teu: "650,000", growth: "1.5%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "亚历山德鲁波利斯港", abbr: "ALEXANDROUPOLIS", lat: 40.8500, lng: 25.8770, teu: "600,000", growth: "1.3%", quayCranes: 3, gantryCranes: 5, gates: 2 },
        { name: "塞雷港", abbr: "SERRES", lat: 41.0830, lng: 23.5450, teu: "550,000", growth: "1.1%", quayCranes: 2, gantryCranes: 4, gates: 1 },
        { name: "卡兰巴卡港", abbr: "KALAMBAKA", lat: 39.7000, lng: 21.6200, teu: "500,000", growth: "0.9%", quayCranes: 2, gantryCranes: 4, gates: 1 },
        { name: "迈泰奥拉港", abbr: "METEORA", lat: 39.7000, lng: 21.6200, teu: "450,000", growth: "0.7%", quayCranes: 2, gantryCranes: 3, gates: 1 },
        { name: "德尔斐港", abbr: "DELPHI", lat: 38.4840, lng: 22.5040, teu: "400,000", growth: "0.5%", quayCranes: 2, gantryCranes: 3, gates: 1 },
        { name: "奥林匹亚港", abbr: "OLYMPIA", lat: 37.6300, lng: 21.6200, teu: "350,000", growth: "0.3%", quayCranes: 1, gantryCranes: 2, gates: 1 }
    ]
};

// 世界港口排名数据（模拟前100名，使用真实港口名称）
const worldPortRanking = [
    { rank: 1, name: "上海港", teu: "47,300,000 TEU" },
    { rank: 2, name: "宁波舟山港", teu: "45,000,000 TEU" },
    { rank: 3, name: "新加坡港", teu: "37,500,000 TEU" },
    { rank: 4, name: "深圳港", teu: "33,000,000 TEU" },
    { rank: 5, name: "广州港", teu: "28,000,000 TEU" },
    { rank: 6, name: "青岛港", teu: "25,600,000 TEU" },
    { rank: 7, name: "天津港", teu: "24,000,000 TEU" },
    { rank: 8, name: "香港港", teu: "21,000,000 TEU" },
    { rank: 9, name: "釜山港", teu: "20,500,000 TEU" },
    { rank: 10, name: "迪拜港", teu: "19,800,000 TEU" },
    { rank: 11, name: "鹿特丹港", teu: "18,500,000 TEU" },
    { rank: 12, name: "汉堡港", teu: "13,500,000 TEU" },
    { rank: 13, name: "洛杉矶港", teu: "12,800,000 TEU" },
    { rank: 14, name: "巴生港", teu: "13,500,000 TEU" },
    { rank: 15, name: "安特卫普港", teu: "12,000,000 TEU" },
    { rank: 16, name: "大连港", teu: "11,500,000 TEU" },
    { rank: 17, name: "长滩港", teu: "10,800,000 TEU" },
    { rank: 18, name: "高雄港", teu: "10,200,000 TEU" },
    { rank: 19, name: "丹戎帕拉帕斯港", teu: "10,800,000 TEU" },
    { rank: 20, name: "厦门港", teu: "11,000,000 TEU" },
    { rank: 21, name: "林查班港", teu: "8,500,000 TEU" },
    { rank: 22, name: "纽约港", teu: "7,500,000 TEU" },
    { rank: 23, name: "泽布吕赫港", teu: "7,200,000 TEU" },
    { rank: 24, name: "名古屋港", teu: "6,800,000 TEU" },
    { rank: 25, name: "新加坡裕廊港", teu: "12,500,000 TEU" },
    { rank: 26, name: "东京港", teu: "6,500,000 TEU" },
    { rank: 27, name: "弗里波特港", teu: "5,800,000 TEU" },
    { rank: 28, name: "比雷埃夫斯港", teu: "5,800,000 TEU" },
    { rank: 29, name: "丹戎佩拉港", teu: "6,200,000 TEU" },
    { rank: 30, name: "胡志明港", teu: "8,500,000 TEU" },
    { rank: 31, name: "泰国王权港", teu: "5,500,000 TEU" },
    { rank: 32, name: "墨尔本港", teu: "3,500,000 TEU" },
    { rank: 33, name: "悉尼港", teu: "2,800,000 TEU" },
    { rank: 34, name: "阿德莱德港", teu: "1,800,000 TEU" },
    { rank: 35, name: "布里斯班港", teu: "2,200,000 TEU" },
    { rank: 36, name: "奥克兰港", teu: "1,500,000 TEU" },
    { rank: 37, name: "西雅图港", teu: "4,500,000 TEU" },
    { rank: 38, name: "塔科马港", teu: "3,200,000 TEU" },
    { rank: 39, name: "温哥华港", teu: "3,000,000 TEU" },
    { rank: 40, name: "蒙特利尔港", teu: "2,000,000 TEU" },
    { rank: 41, name: "哈利法克斯港", teu: "1,500,000 TEU" },
    { rank: 42, name: "卡亚俄港", teu: "1,200,000 TEU" },
    { rank: 43, name: "瓦尔帕莱索港", teu: "1,000,000 TEU" },
    { rank: 44, name: "桑托斯港", teu: "4,500,000 TEU" },
    { rank: 45, name: "里约热内卢港", teu: "2,500,000 TEU" },
    { rank: 46, name: "布宜诺斯艾利斯港", teu: "2,000,000 TEU" },
    { rank: 47, name: "德班港", teu: "2,500,000 TEU" },
    { rank: 48, name: "开普敦港", teu: "1,800,000 TEU" },
    { rank: 49, name: "蒙巴萨港", teu: "1,500,000 TEU" },
    { rank: 50, name: "路易港", teu: "1,200,000 TEU" },
    { rank: 51, name: "亚历山大港", teu: "1,500,000 TEU" },
    { rank: 52, name: "塞得港", teu: "3,800,000 TEU" },
    { rank: 53, name: "吉达港", teu: "5,000,000 TEU" },
    { rank: 54, name: "亚丁港", teu: "1,000,000 TEU" },
    { rank: 55, name: "苏伊士港", teu: "1,200,000 TEU" },
    { rank: 56, name: "贝鲁特港", teu: "800,000 TEU" },
    { rank: 57, name: "阿巴斯港", teu: "1,500,000 TEU" },
    { rank: 58, name: "卡拉奇港", teu: "2,000,000 TEU" },
    { rank: 59, name: "孟买港", teu: "2,200,000 TEU" },
    { rank: 60, name: "科钦港", teu: "1,800,000 TEU" },
    { rank: 61, name: "吉大港", teu: "2,500,000 TEU" },
    { rank: 62, name: "仰光港", teu: "1,000,000 TEU" },
    { rank: 63, name: "曼谷港", teu: "6,000,000 TEU" },
    { rank: 64, name: "拉各斯港", teu: "1,500,000 TEU" },
    { rank: 65, name: "达喀尔港", teu: "1,200,000 TEU" },
    { rank: 66, name: "阿比让港", teu: "1,000,000 TEU" },
    { rank: 67, name: "杜阿拉港", teu: "800,000 TEU" },
    { rank: 68, name: "罗安达港", teu: "700,000 TEU" },
    { rank: 69, name: "里斯本港", teu: "1,000,000 TEU" },
    { rank: 70, name: "波尔图港", teu: "800,000 TEU" },
    { rank: 71, name: "毕尔巴鄂港", teu: "1,200,000 TEU" },
    { rank: 72, name: "瓦伦西亚港", teu: "5,000,000 TEU" },
    { rank: 73, name: "巴塞罗那港", teu: "3,000,000 TEU" },
    { rank: 74, name: "热那亚港", teu: "2,500,000 TEU" },
    { rank: 75, name: "那不勒斯港", teu: "2,000,000 TEU" },
    { rank: 76, name: "威尼斯港", teu: "1,500,000 TEU" },
    { rank: 77, name: "的里雅斯特港", teu: "1,200,000 TEU" },
    { rank: 78, name: "雅典港", teu: "900,000 TEU" },
    { rank: 79, name: "伊斯坦布尔港", teu: "4,500,000 TEU" },
    { rank: 80, name: "敖德萨港", teu: "1,000,000 TEU" },
    { rank: 81, name: "圣彼得堡港", teu: "1,800,000 TEU" },
    { rank: 82, name: "汉堡港", teu: "13,500,000 TEU" },
    { rank: 83, name: "不来梅港", teu: "6,000,000 TEU" },
    { rank: 84, name: "威廉港", teu: "5,500,000 TEU" },
    { rank: 85, name: "罗斯托克港", teu: "1,500,000 TEU" },
    { rank: 86, name: "基尔港", teu: "1,200,000 TEU" },
    { rank: 87, name: "奥斯陆港", teu: "1,000,000 TEU" },
    { rank: 88, name: "哥本哈根港", teu: "1,500,000 TEU" },
    { rank: 89, name: "斯德哥尔摩港", teu: "1,200,000 TEU" },
    { rank: 90, name: "赫尔辛基港", teu: "1,000,000 TEU" },
    { rank: 91, name: "里加港", teu: "800,000 TEU" },
    { rank: 92, name: "塔林港", teu: "700,000 TEU" },
    { rank: 93, name: "维尔纽斯港", teu: "600,000 TEU" },
    { rank: 94, name: "华沙港", teu: "500,000 TEU" },
    { rank: 95, name: "布拉格港", teu: "400,000 TEU" },
    { rank: 96, name: "布达佩斯港", teu: "300,000 TEU" },
    { rank: 97, name: "维也纳港", teu: "200,000 TEU" },
    { rank: 98, name: "苏黎世港", teu: "150,000 TEU" },
    { rank: 99, name: "日内瓦港", teu: "100,000 TEU" },
    { rank: 100, name: "卢森堡港", teu: "80,000 TEU" }
];

// 国家中心点坐标
const countryCenters = {
    vietnam: { lat: 16.0000, lng: 106.0000 },
    malaysia: { lat: 4.0000, lng: 102.0000 },
    singapore: { lat: 1.3521, lng: 103.8198 },
    brunei: { lat: 4.5000, lng: 114.6667 },
    indonesia: { lat: -5.0000, lng: 120.0000 },
    greece: { lat: 39.0000, lng: 22.0000 }
};

// 全局变量
let currentLanguage = 'zh';
let currentCountry = 'vietnam';
let map;
let markers = [];

// 初始化函数
function init() {
    initLanguageSwitch();
    initCountryTabs();
    initMap();
    initWorldPortRanking();
    updateRefreshTime();
}

// 初始化语言切换
function initLanguageSwitch() {
    const zhBtn = document.getElementById('zh-btn');
    const enBtn = document.getElementById('en-btn');
    
    zhBtn.addEventListener('click', () => switchLanguage('zh'));
    enBtn.addEventListener('click', () => switchLanguage('en'));
}

// 切换语言
function switchLanguage(lang) {
    if (currentLanguage === lang) return;
    
    currentLanguage = lang;
    
    // 更新按钮状态
    document.getElementById('zh-btn').classList.toggle('active', lang === 'zh');
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');
    
    // 更新页面文本
    updatePageText();
    
    // 更新地图标记
    updateMapMarkers();
    
    // 更新港口排名
    initWorldPortRanking();
}

// 更新页面文本
function updatePageText() {
    const texts = i18n[currentLanguage];
    
    document.title = texts.title;
    document.querySelector('.title').textContent = texts.title;
    document.querySelector('.subtitle').textContent = texts.subtitle;
    document.querySelector('.author').textContent = texts.author;
    document.querySelector('.date').textContent = texts.date;
    document.querySelector('.version').textContent = texts.version;
    
    // 更新国家标签
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const country = btn.dataset.country;
        btn.textContent = texts.countries[country];
    });
    
    // 更新排名标题
    document.getElementById('ranking-title').textContent = texts.rankingTitle;
    document.getElementById('refresh-time').textContent = `${texts.refreshTime}${new Date().toLocaleString()}`;
}

// 初始化国家标签切换
function initCountryTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const country = btn.dataset.country;
            if (currentCountry === country) return;
            
            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 切换国家
            currentCountry = country;
            updateMap();
        });
    });
}

// 初始化地图
function initMap() {
    map = new BMap.Map('map');
    const center = countryCenters[currentCountry];
    map.centerAndZoom(new BMap.Point(center.lng, center.lat), 6);
    map.enableScrollWheelZoom(true);
    
    // 添加地图控件
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    
    updateMapMarkers();
}

// 更新地图
function updateMap() {
    const center = countryCenters[currentCountry];
    map.centerAndZoom(new BMap.Point(center.lng, center.lat), 6);
    updateMapMarkers();
}

// 更新地图标记
function updateMapMarkers() {
    // 清除现有标记
    markers.forEach(marker => map.removeOverlay(marker));
    markers = [];
    
    // 添加新标记
    const ports = portData[currentCountry];
    ports.forEach((port, index) => {
        const point = new BMap.Point(port.lng, port.lat);
        
        // 创建自定义标记
        const marker = new BMap.Marker(point, {
            icon: new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
                scale: 10,
                fillColor: '#ff6b6b',
                fillOpacity: 0.8,
                strokeColor: '#fff',
                strokeWeight: 2
            })
        });
        
        // 添加排名标签
        const label = new BMap.Label((index + 1).toString(), {
            offset: new BMap.Size(0, -20)
        });
        label.setStyle({
            color: '#333',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '10px',
            padding: '2px 8px',
            fontSize: '0.8rem',
            fontWeight: '700',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        });
        marker.setLabel(label);
        
        // 添加点击事件
        marker.addEventListener('mouseover', () => showPortInfo(port, event));
        marker.addEventListener('mouseout', hidePortInfo);
        
        map.addOverlay(marker);
        markers.push(marker);
    });
}

// 显示港口信息弹窗
function showPortInfo(port, event) {
    const portInfo = document.getElementById('port-info');
    const texts = i18n[currentLanguage].portInfo;
    
    document.getElementById('port-name').textContent = `${port.name} (${port.abbr})`;
    document.getElementById('port-teu').textContent = `${texts.teu}${port.teu} TEU`;
    document.getElementById('port-growth').textContent = `${texts.growth}${port.growth}`;
    document.getElementById('port-quay-cranes').textContent = `${texts.quayCranes}${port.quayCranes} 台`;
    document.getElementById('port-gantry-cranes').textContent = `${texts.gantryCranes}${port.gantryCranes} 台`;
    document.getElementById('port-gates').textContent = `${texts.gates}${port.gates} 个`;
    
    portInfo.style.display = 'block';
    portInfo.style.left = `${event.clientX + 10}px`;
    portInfo.style.top = `${event.clientY + 10}px`;
}

// 隐藏港口信息弹窗
function hidePortInfo() {
    const portInfo = document.getElementById('port-info');
    portInfo.style.display = 'none';
}

// 初始化世界港口排名
function initWorldPortRanking() {
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = '';
    
    worldPortRanking.forEach(port => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        item.innerHTML = `
            <span class="rank">${port.rank}</span>
            <span class="port-name">${port.name}</span>
            <span class="port-teu">${port.teu}</span>
        `;
        rankingList.appendChild(item);
    });
}

// 更新刷新时间
function updateRefreshTime() {
    const texts = i18n[currentLanguage];
    document.getElementById('refresh-time').textContent = `${texts.refreshTime}${new Date().toLocaleString()}`;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);