const requestV0 = require('../v0/request')

/**
 * SyncGroup Request (Version: 1) => group_id generation_id member_id [group_assignment]
 *   group_id => STRING
 *   generation_id => INT32
 *   member_id => STRING
 *   group_assignment => member_id member_assignment
 *     member_id => STRING
 *     member_assignment => BYTES
 */

module.exports = ({ groupId, generationId, memberId, groupAssignment }) =>
  Object.assign(requestV0({ groupId, generationId, memberId, groupAssignment }), { apiVersion: 1 })
