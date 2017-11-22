import DS from 'ember-data';

export default DS.Model.extend({
  addr: DS.attr(),            // peer IP address
  services: DS.attr(),        // ???
  lastsend: DS.attr(),        // timestamp of last sent
  lastrecv: DS.attr(),        // timestamp of last received
  bytessent: DS.attr(),       // bytes sent
  bytesrecv: DS.attr(),       // bytes received
  conntime: DS.attr(),        // ???
  timeoffset: DS.attr(),      // ???
  pingtime: DS.attr(),        // ???
  version: DS.attr(),         // verion of ODN client?
  subver: DS.attr(),          // full ODN client version
  inbound: DS.attr('boolean'),  // not sure
  startingheight: DS.attr(),    // ???
  banscore: DS.attr(),          // ???
  syncnode: DS.attr(),          // ???

  // parsed odn node version
  nodever: Ember.computed('subver', function() {
    let _ver = this.get('subver');
    return _ver.split(':')[1]
  }),

  // parsed odn node ip
  nodeip: Ember.computed('addr', function() {
    let _addr = this.get('addr')
    return _addr.split(':')[0]
  })
});
