import { Command } from '../../types';
import ConfigChannelPreference from './config/ConfigChannelPreference';
import ConfigDefaultChannel from './config/ConfigDefaultChannel';
import ConfigGroup from './config/ConfigGroup';
import ConfigPrefix from './config/ConfigPrefix';
import HelpCommand from './general/Help';
import GroupCompetitionCommand from './group/GroupCompetition';
import GroupCompetitionsCommand from './group/GroupCompetitions';
import GroupDetailsCommand from './group/GroupDetails';
import GroupGainedCommand from './group/GroupGained';
import GroupHiscoresCommand from './group/GroupHiscores';
import GroupMembersCommand from './group/GroupMembers';
import GroupRecordsCommand from './group/GroupRecords';
import ApproveNameChange from './moderation/ApproveNameChange';
import DenyNameChange from './moderation/DenyNameChange';
import ResetCompetitionCode from './moderation/ResetCompetitionCode';
import ResetGroupCode from './moderation/ResetGroupCode';
import ReviewNameChange from './moderation/ReviewNameChange';
import VerifyGroup from './moderation/VerifyGroup';
import DeletePlayer from './moderation/DeletePlayer';
import PlayerAchievements from './player/PlayerAchievements';
import PlayerActivitiesCommand from './player/PlayerActivities';
import PlayerBossesCommand from './player/PlayerBosses';
import PlayerEfficiencyCommand from './player/PlayerEfficiency';
import PlayerGainedCommand from './player/PlayerGained';
import PlayerSetFlag from './player/PlayerSetFlag';
import PlayerSetUsername from './player/PlayerSetUsername';
import PlayerStatsCommand from './player/PlayerStats';
import PlayerUpdateCommand from './player/UpdatePlayer';

const commands: Command[] = [
  // general commands
  HelpCommand,

  // moderation commands
  ResetGroupCode,
  ResetCompetitionCode,
  VerifyGroup,
  ReviewNameChange,
  ApproveNameChange,
  DenyNameChange,
  DeletePlayer,

  // player commands
  PlayerStatsCommand,
  PlayerBossesCommand,
  PlayerActivitiesCommand,
  PlayerAchievements,
  PlayerUpdateCommand,
  PlayerGainedCommand,
  PlayerEfficiencyCommand,
  PlayerSetUsername,
  PlayerSetFlag,

  // group commands
  GroupDetailsCommand,
  GroupMembersCommand,
  GroupHiscoresCommand,
  GroupRecordsCommand,
  GroupGainedCommand,
  GroupCompetitionCommand,
  GroupCompetitionsCommand,

  // config commands
  ConfigPrefix,
  ConfigDefaultChannel,
  ConfigChannelPreference,
  ConfigGroup
];

export default commands;
