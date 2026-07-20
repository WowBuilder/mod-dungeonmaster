DELETE FROM `creature_template` WHERE (`entry` = 197762);
INSERT INTO `creature_template` (`entry`, `difficulty_entry_1`, `difficulty_entry_2`, `difficulty_entry_3`, `KillCredit1`, `KillCredit2`, `name`, `subname`, `IconName`, `gossip_menu_id`, `minlevel`, `maxlevel`, `exp`, `faction`, `npcflag`, `speed_walk`, `speed_run`, `speed_swim`, `speed_flight`, `detection_range`, `scale`, `rank`, `dmgschool`, `DamageModifier`, `BaseAttackTime`, `RangeAttackTime`, `BaseVariance`, `RangeVariance`, `unit_class`, `unit_flags`, `unit_flags2`, `dynamicflags`, `family`, `trainer_type`, `trainer_spell`, `trainer_class`, `trainer_race`, `type`, `type_flags`, `lootid`, `pickpocketloot`, `skinloot`, `PetSpellDataId`, `VehicleId`, `mingold`, `maxgold`, `AIName`, `MovementType`, `HoverHeight`, `HealthModifier`, `ManaModifier`, `ArmorModifier`, `ExperienceModifier`, `RacialLeader`, `movementId`, `RegenHealth`, `mechanic_immune_mask`, `spell_school_immune_mask`, `flags_extra`, `ScriptName`, `VerifiedBuild`) VALUES
(197762, 0, 0, 0, 0, 0, 'Dungeon Dan', 'Dungeonmaster', 'Trainer', 0, 80, 80, 0, 35, 1, 1, 1.14286, 1, 1, 20, 1, 0, 0, 1, 2000, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 7, 138412032, 0, 0, 0, 0, 0, 0, 0, '', 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 2, 'npc_dungeonmaster', 0);

DELETE FROM `creature_template_model` WHERE (`CreatureID` = 197762);
INSERT INTO `creature_template_model` (`CreatureID`, `Idx`, `CreatureDisplayID`, `DisplayScale`, `Probability`, `VerifiedBuild`) VALUES
(197762, 0, 3437, 1, 1, 0);

-- 名称汉化
DELETE FROM `creature_template_locale` WHERE (`entry` = 197762 AND `locale` = 'zhCN');
INSERT INTO `creature_template_locale` (`entry`,`locale`,`Name`,`Title`,`VerifiedBuild`) VALUES (197762, 'zhCN', '丹', '地下城向导', 0);

-- 对话汉化
DELETE FROM `npc_text_locale` WHERE (`ID` = 197762 AND `locale` = 'zhCN');
INSERT INTO `npc_text_locale` (`ID`, `Locale`, `Text0_0`) VALUES (197760, 'zhCN', '你想去地下城吗？我已经探索了整个世界，可以把你送到你需要去的地方。如果你去了不该去的地方而导致死亡或被分尸，我可概不负责');
