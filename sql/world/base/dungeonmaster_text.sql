
SET @TEXT_ID = 197760,
@TEXT= 'You want to go to a dungeon? I have explored all over the world and can get you where you need to go. I am not responsible for any death or dismemberment that may occure by going where you shouldn\'t';



DELETE FROM `npc_text` WHERE `ID` IN (@TEXT_ID);

INSERT INTO `npc_text` (`ID`, `text0_0`) VALUES (@TEXT_ID, @TEXT);

-- 对话汉化
DELETE FROM `npc_text_locale` WHERE (`ID` = @TEXT_ID AND `locale` = 'zhCN');
INSERT INTO `npc_text_locale` (`ID`, `Locale`, `Text0_0`, `Text0_1`) VALUES (@TEXT_ID, 'zhCN', '你想去地下城吗？我已经探索了整个世界，可以把你送到你需要去的地方。如果你去了不该去的地方而导致死亡或被分尸，我可概不负责', '你想去地下城吗？我已经探索了整个世界，可以把你送到你需要去的地方。如果你去了不该去的地方而导致死亡或被分尸，我可概不负责');
