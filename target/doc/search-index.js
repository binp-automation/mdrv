var N = null;var searchIndex = {};
searchIndex["lxidrv"]={"doc":"","items":[[0,"channel","lxidrv","",N,N],[4,"SendError","lxidrv::channel","An error returned from the `Sender::send` or `SyncSender::send` function.",N,N],[13,"Io","","An IO error.",0,N],[13,"Disconnected","","The receiving half of the channel has disconnected.",0,N],[4,"TryRecvError","","This enumeration is the list of the possible reasons that [`try_recv`] could not return data when called. This can occur with both a [`channel`] and a [`sync_channel`].",N,N],[13,"Empty","","This channel is currently empty, but the Sender(s) have not yet disconnected, so data may yet become available.",1,N],[13,"Disconnected","","The channel's sending half has become disconnected, and there will never be any more data received on it.",1,N],[3,"Sender","","The sending half of a channel.",N,N],[3,"Receiver","","The receiving half of a channel.",N,N],[5,"channel","","Creates a new asynchronous channel, where the `Receiver` can be registered with `Poll`.",N,N],[3,"PollReceiver","","",N,N],[12,"rx","","",2,N],[12,"poll","","",2,N],[12,"events","","",2,N],[4,"RecvError","","",N,N],[13,"Io","","",3,N],[13,"Disconnected","","",3,N],[4,"ChanError","","",N,N],[13,"Io","","",4,N],[13,"Disconnected","","",4,N],[11,"from_try","","",3,[[["tryrecverror"]],["option"]]],[11,"new","","",2,[[["receiver"]],["result",["pollreceiver","chanerror"]]]],[11,"recv","","",2,[[["self"]],["result",["recverror"]]]],[0,"device","lxidrv","",N,N],[3,"DevProxy","lxidrv::device","",N,N],[12,"addr","","",5,N],[3,"DhCnx","","",N,N],[12,"tx","","",6,N],[12,"rx","","",6,N],[3,"DevHandle","","",N,N],[4,"Addr","","",N,N],[13,"Dns","","",7,N],[13,"Ip","","",7,N],[4,"DevError","","",N,N],[13,"Chan","","",8,N],[13,"Detached","","",8,N],[4,"DevTx","","",N,N],[13,"Send","","",9,N],[13,"Detach","","",9,N],[4,"RxError","","",N,N],[4,"DevRx","","",N,N],[13,"Received","","",10,N],[13,"DnsResolved","","",10,N],[13,"Connected","","",10,N],[13,"Disconnected","","",10,N],[13,"Attached","","",10,N],[13,"Detached","","",10,N],[11,"new","","",5,[[["addr"]],["devproxy"]]],[11,"new","","",11,[[["sender",["devtx"]],["receiver",["devrx"]]],["self"]]],[11,"cnx","","",11,[[["self"]],["result",["dhcnx","deverror"]]]],[11,"tx","","",11,[[["self"]],["result",["sender","deverror"]]]],[11,"rx","","",11,[[["self"]],["result",["receiver","deverror"]]]],[11,"detach_ref","","",11,[[["self"]],["result",["devproxy","deverror"]]]],[11,"detach","","",11,[[["self"]],["result",["devproxy","deverror"]]]],[0,"driver","lxidrv","",N,N],[3,"Driver","lxidrv::driver","",N,N],[4,"DrvError","","",N,N],[13,"Chan","","",12,N],[4,"DrvCmd","","",N,N],[13,"Attach","","",13,N],[13,"Terminate","","",13,N],[11,"new","","",14,[[],["result",["drverror"]]]],[11,"attach","","",14,[[["self"],["devproxy"]],["result",["devhandle","drverror"]]]],[11,"from","lxidrv::channel","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_string","","",1,[[["self"]],["string"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,N],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","lxidrv::device","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"from","lxidrv::driver","",14,[[["t"]],["t"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"eq","lxidrv::channel","",1,[[["self"],["tryrecverror"]],["bool"]]],[11,"from","","",1,[[["recverror"]],["tryrecverror"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result",["error"]]]],[11,"description","","",1,[[["self"]],["str"]]],[11,"cause","","",1,[[["self"]],["option",["error"]]]],[11,"clone","","",1,[[["self"]],["tryrecverror"]]],[11,"clone","","",15,[[["self"]],["sender"]]],[11,"description","","",0,[[["self"]],["str"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result",["error"]]]],[11,"from","","",0,[[["senderror"]],["senderror"]]],[11,"from","","",0,[[["error"]],["senderror"]]],[11,"register","","",16,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"reregister","","",16,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"deregister","","",16,[[["self"],["poll"]],["result",["error"]]]],[11,"from","","",4,[[["senderror"]],["self"]]],[11,"from","","",4,[[["recverror"]],["self"]]],[11,"drop","lxidrv::device","",11,[[["self"]]]],[11,"drop","lxidrv::driver","",14,[[["self"]]]],[11,"eq","lxidrv::device","",7,[[["self"],["addr"]],["bool"]]],[11,"ne","","",7,[[["self"],["addr"]],["bool"]]],[11,"fmt","lxidrv::channel","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","lxidrv::device","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","lxidrv::driver","",12,[[["self"],["formatter"]],["result"]]],[11,"send","lxidrv::channel","Attempts to send a value on this channel, returning it back if it could not be sent.",15,[[["self"],["t"]],["result",["senderror"]]]],[11,"try_recv","","Attempts to return a pending value on this receiver without blocking.",16,[[["self"]],["result",["tryrecverror"]]]]],"paths":[[4,"SendError"],[4,"TryRecvError"],[3,"PollReceiver"],[4,"RecvError"],[4,"ChanError"],[3,"DevProxy"],[3,"DhCnx"],[4,"Addr"],[4,"DevError"],[4,"DevTx"],[4,"DevRx"],[3,"DevHandle"],[4,"DrvError"],[4,"DrvCmd"],[3,"Driver"],[3,"Sender"],[3,"Receiver"],[4,"RxError"]]};
initSearch(searchIndex);