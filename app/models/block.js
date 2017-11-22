import DS from 'ember-data';

export default DS.Model.extend({
  hash:       DS.attr('string'),
  time:       DS.attr('number'),
  mint:       DS.attr('number'),
  size:       DS.attr('number'),
  flags:      DS.attr('string'),
  height:     DS.attr('number'),
  difficulty: DS.attr('number'),
  signature:  DS.attr('string'),
  merkleroot: DS.attr('string'),
  previousblockhash:  DS.attr('string'),
  nextblockhash:      DS.attr('string'),
  tx: DS.attr()
});

/*
  hash: String,                 // block hash
  previousblockhash: String,    // previous block hash
  nextblockhash: String,        // next block hash
  time: Number,                 // timestamp of block
  mint: Number,                 // minted ODN in process
  size: Number,                 // size in bytes of block
  height: Number,               // block height (number)
  difficulty: Number,           // difficulty to solve?
  signature: String,            // signature
  merkleroot: String,           // merkleroot
  flags: String,                // block flags "proof-of-stake xxx xxx"
  tx: [String]                  // array of transaction ids (txid)
*/
