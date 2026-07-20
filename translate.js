const fs = require('fs');
const path = require('path');

// =========================================================================
// 📥 您的汉化文本映射字典（后续您只需在下面这个对象里追加新翻译即可）
// =========================================================================
const translations = {
    // --- 副本传送菜单分类 ---
    'Eastern Kingdoms Dungeons': '东部王国地下城 (5人)',
    'Kalimdor Dungeons': '卡利姆多地下城 (5人)',
    'Burning Crusade Dungeons': '外域地下城 (5人)',
    'Wrath of the Lich King Dungeons': '诺森德地下城 (5人)',
    'Classic Raids': '地球时代团队副本 (60级)',
    'Burning Crusade Raids': '外域团队副本 (70级)',
    'Wrath of the Lich King Raids': '诺森德团队副本 (80级)',

    // === 经典旧世：东部王国地下城 (60级) ===
    'Deadmines': '死亡矿井',
    'Shadowfang Keep': '影牙城堡',
    'Stormwind Stockade': '暴风城监狱',
    'Gnomergan': '诺莫瑞根',
    'Scarlet Monastery: Graveyard': '血色修道院：墓地',
    'Scarlet Monastery: Library': '血色修道院：图书馆',
    'Scarlet Monastery: Armory': '血色修道院：武器库',
    'Scarlet Monastery: Cathedral': '血色修道院：大教堂',
    'Scholomance': '通灵学院',
    'Uldaman': '奥达曼',
    'Stratholme (Live)': '斯坦索姆 (血色区/前门)',
    'Stratholme (Undead)': '斯坦索姆 (亡灵区/后门)',
    'Blackrock Depths': '黑石深渊',
    'Sunken Temple': '阿塔哈卡神庙 (沉没的神庙)',
    'Blackrock Spire': '黑石塔 (上/下层)',

    // === 经典旧世：卡利姆多地下城 (60级) ===
    'Ragefire Chasm': '怒焰裂谷',
    'Wailing Caverns': '哀嚎洞穴',
    'Blackfathom Deeps': '黑暗深渊',
    'Razorfen Kraul': '剃刀沼泽',
    'Maraudon (Orange Crystals)': '玛拉顿 (橙色水晶入口)',
    'Maraudon (Purple Crystals)': '玛拉顿 (紫色水晶入口)',
    'Razorfen Downs': '剃刀高地',
    'Dire Maul (West)': '厄运之槌 (西区)',
    'Dire Maul (East)': '厄运之槌 (东区)',
    'Dire Maul (North)': '厄运之槌 (北区/完美厄运)',
    'Zul\'Farrak': '祖尔法拉克',

    // === 经典旧世：团队副本 (60级) ===
    'Molten Core': '熔火之心 (MC)',
    'Blackwing Lair': '黑翼之巢 (BWL)',
    'Ruins of Ahn\'Qiraj': '安其拉废墟 (AQ20)',
    'Ahn\'Qiraj': '安其拉神殿 (AQ40)',
    'Zul\'Gurub': '祖尔格拉布 (ZG)',

    // === 燃烧的远征：外域地下城 (70级) ===
    'Hellfire Ramparts': '地狱火城墙',
    'Blood Furnace': '鲜血熔炉',
    'Slave Pens': '奴隶围栏',
    'Underbog': '幽暗沼泽',
    'Mana Tombs': '法力陵墓',
    'Auchenai Crypts': '奥金尼地穴',
    'Caverns of Time: Old Hillsbrad': '时光之穴：旧希尔斯布莱德丘陵 (逃离敦霍尔德)',
    'Sethekk Halls': '塞泰克大厅',
    'Shadow Labyrinth': '暗影迷宫',
    'Shattered Halls': '破碎大厅',
    'Botanica': '生态船',
    'Mechanar': '能源舰',
    'Steamvault': '蒸汽地窟',
    'Magisters\' Terrace': '魔导师平台 (MGT)',
    'Caverns of Time: Black Morass': '时光之穴：黑色沼泽 (开启黑暗之门)',
    'Arcatraz': '禁魔监狱',

    // === 燃烧的远征：外域团队副本 (70级) ===
    'Karazan': '卡拉赞 (KLZ)',
    'Gruul\'s Lair': '格鲁尔的巢穴',
    'Magtheridon\'s Lair': '玛瑟里顿的巢穴',
    'Serpentshrine Cavern': '毒蛇神殿 (SSC)',
    'Tempest Keep: The Eye': '风暴要塞：风暴之眼 (TK)',
    'Caverns of Time: Mount Hyjal': '时光之穴：海加尔山之战 (MH)',
    'Black Temple': '黑暗神殿 (BT)',
    'Sunwell Plateau': '太阳之井高地 (SWP)',
    'Zul\'Aman': '祖阿曼 (ZA)',

    // === 巫妖王之怒：诺森德地下城 (80级) ===
    'Utgarde Keep': '乌特加德城堡',
    'Nexus': '魔枢',
    'Azjol-Nerub': '艾卓-尼鲁布',
    'Ahn\'kahet': '古代王国 (安卡赫特)',
    'Drak\'Tharon Keep': '达克萨隆要塞',
    'Violet Hold': '紫罗兰监狱',
    'Gundrak': '古达克',
    'Halls of Stone': '岩石大厅',
    'Halls of Lightning': '闪电大厅',
    'Utgarde Pinnacle': '乌特加德巅峰',
    'The Oculus': '魔环',
    'Caverns of Time: Culling of Stratholme': '时光之穴：抉择斯坦索姆 (净化斯坦索姆)',
    'Trial of the Champion': '冠军的试炼 (TOC5人)',
    'Halls of Reflection': '倒影大厅 (新三本-映像大厅)',
    'Pit of Sauron': '萨隆矿坑 (新三本-萨隆邪铁矿坑)',
    'Forge of Souls': '灵魂洪炉 (新三本-众魂熔炉)',

    // === 巫妖王之怒：诺森德团队副本 (80级) ===
    'Naxxramas': '纳克萨玛斯 (NAXX)',
    'Obsidian Sanctum': '黑曜石圣殿 (OS)',
    'Vault of Archavon': '阿尔卡冯的宝库 (宝库/VOA)',
    'Eye of Eternity': '永恒之眼 (EOE)',
    'Ulduar': '奥杜尔 (ULD)',
    'Trial of the Crusader': '十字军的试炼 (TOC)',
    'Onyxia': '奥妮克希亚的巢穴 (黑龙MM)',
    'Ruby Sanctum': '红玉圣殿 (RS)',
    'Icecrown Citadel': '冰冠堡垒 (ICC)'

};

// =========================================================================
// ⚙️ 核心替换逻辑（固定不变，保证绝对严谨、安全）
// =========================================================================
const filePath = path.join(__dirname, 'src', 'Dungeonmaster.cpp');

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let totalReplacements = 0;

    // 🌟 严谨核心 1：将字典中的键按文本长度由长到短排序。
    // 这样做可以确保优先匹配复杂的长句（如 '50 Attack Power + 20 Crit'），然后再匹配短句（如 '40 Attack Power'），从而完全杜绝嵌套覆盖的 BUG。
    const sortedEntries = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);

    for (let i = 0; i < lines.length; i++) {
        // 🌟 严谨核心 2：该行代码必须包含魔兽世界标准的 AddGossipItemFor 关键字
        if (lines[i].includes('AddGossipItemFor')) {
            
            for (const [english, chinese] of sortedEntries) {
                // 转义正则特殊字符
                const escapedEnglish = english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                /**
                 * 🌟 严谨核心 3：双层闭环边界锁定的正则表达式
                 * - (")                  : 捕获组 1，确保是左双引号起始
                 * - ([^"]*?\b)?          : 捕获组 2，完美容纳左边可能存在的图标控制符如 |T...|t 或 [ 中括号
                 * - 英文文本             : 精准匹配词条
                 * - (\b[^"]*?)?          : 捕获组 3，完美容纳右边可能存在的 ] 中括号
                 * - (")                  : 捕获组 4，确保是右双引号结束
                 * 💡 使用 [^"]*? 能限制匹配范围绝对不穿透双引号，杜绝破坏右侧的 C++ 系统参数和变量！
                 */
                const regex = new RegExp(`(")([^"]*?\\b)?${escapedEnglish}(\\b[^"]*?)?(")`, 'g');

                if (regex.test(lines[i])) {
                    lines[i] = lines[i].replace(regex, `$1$2${chinese}$3$4`);
                    totalReplacements++;
                }
            }
        }
    }

    // 重新写回原文件
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`\n==============================================`);
    console.log(`✅ 终极严谨替换流程顺利跑完！`);
    console.log(`🚀 本次共在所有合法菜单行中精准汉化了 ${totalReplacements} 处英文。`);
    console.log(`==============================================\n`);

} catch (error) {
    console.error('❌ 脚本执行时发生错误，请确认文件路径：', error.message);
}
