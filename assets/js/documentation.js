$(document).ready(function(){
    
    //general function for expand and collapse
    $(".json-expand").click(function(){
      var id = ($(this).attr('id')).replace('-expand-btn', ''); 
      console.log(id);
      $("#"+id).JSONView('expand');
   });
   $(".json-collapse").click(function(){
      var id = ($(this).attr('id')).replace('-collapse-btn', ''); 
      console.log(id);
       $("#"+id).JSONView('collapse');
   });
   
   
    var registry_maps_get_json = {
    "maps": [
        {
            "name": "Room747",
            "devices": [
                "HVAC_ROOM747_VLV",
                "HVAC_ROOM747_T"
            ],
            "alert": {},
            "climatic": {
                "y": 720,
                "x": 240,
                "k": 0.01
            },
            "external": false,
            "id": "Room747"
        },
        {
            "name": "Openspace",
            "devices": [
                "HVAC_OPENSPACE_T",
                "HVAC_OPENSPACE_VLV"
            ],
            "alert": {},
            "climatic": {
                "y": 720,
                "x": 240,
                "k": 0.01
            },
            "external": false,
            "id": "Openspace"
        },
        {
            "name": "Room 237",
            "devices": [
                "HVAC_ROOM237_VLV",
                "HVAC_ROOM237_T"
            ],
            "alert": {},
            "climatic": {
                "y": 720,
                "x": 240,
                "k": 0.01
            },
            "external": false,
            "id": "Room237"
        },
        {
            "name": "Upper Meeting Room",
            "devices": [
                "HVAC_STM330_T"
            ],
            "alert": {},
            "climatic": {
                "y": 12,
                "x": 4,
                "k": 0.01
            },
            "external": false,
            "id": "UpperMeetingRoom"
        }
    ]
};

    $("#registry-maps-get").JSONView(registry_maps_get_json,{collapsed: true, nl2br: true});


    var registry_maps_post_json = {
    "name": "Room 237",
    "devices": [
        "HVAC_ROOM237_VLV",
        "HVAC_ROOM237_T"
    ],
    "alert": {},
    "climatic": {
        "y": 720,
        "x": 240,
        "k": 0.01
    },
    "external": false,
    "id": "Room237"
};

$("#registry-maps-post").JSONView(registry_maps_post_json,{collapsed: true, nl2br: true});


var registry_maps_id_get_json = {
    "name": "Room 237",
    "devices": [
        "HVAC_ROOM237_VLV",
        "HVAC_ROOM237_T"
    ],
    "alert": {},
    "climatic": {
        "y": 720,
        "x": 240,
        "k": 0.01
    },
    "external": false,
    "id": "Room237"
};
$("#registry-maps-id-get").JSONView(registry_maps_id_get_json,{collapsed: true, nl2br: true});

var registry_maps_id_put_json ={
    "name": "Room 237",
    "devices": [
        "HVAC_ROOM237_VLV",
        "HVAC_ROOM237_T"
    ],
    "alert": {},
    "climatic": {
        "y": 720,
        "x": 240,
        "k": 0.01
    },
    "external": false,
    "id": "Room237"
};

$("#registry-maps-id-put").JSONView(registry_maps_id_put_json,{collapsed: true, nl2br: true});

var status_get_json = {
    "status": [
        {
            "type": "OnOff",
            "id": "HVAC_ROOM237_VLV",
            "value": false
        },
        {
            "type": "OnOff",
            "id": "HVAC_ROOM747_VLV",
            "value": true
        },
        {
            "type": "OnOff",
            "id": "HVAC_OPENSPACE_VLV",
            "value": true
        },
        {
            "type": "Temperature",
            "unit": "C",
            "value": 0,
            "id": "HVAC_ROOM237_T"
        },
        {
            "type": "Temperature",
            "unit": "C",
            "value": 23.4375,
            "id": "HVAC_OPENSPACE_T"
        },
        {
            "type": "Temperature",
            "unit": "C",
            "value": 23.52941131591797,
            "id": "HVAC_STM330_T"
        },
        {
            "type": "Temperature",
            "unit": "C",
            "value": 22.005699157714844,
            "id": "HVAC_ROOM747_T"
        }
    ]
};

$("#status-get").JSONView(status_get_json,{collapsed: true, nl2br: true});

var status_id_get_json = {
    "type": "OnOff",
    "id": "HVAC_ROOM237_VLV",
    "value": false
};

$("#status-id-get").JSONView(status_id_get_json,{collapsed: false, nl2br: true});


var devices_get_json = {
    "devices": [
        {
            "bus": "piface",
            "type": "OnOff",
            "id": "HVAC_ROOM237_VLV",
            "coil": 1
        },
        {
            "id": "HVAC_ROOM747_VLV",
            "bus": "piface",
            "type": "OnOff",
            "name": "",
            "coil": 2
        },
        {
            "id": "HVAC_OPENSPACE_VLV",
            "bus": "piface",
            "type": "OnOff",
            "name": "",
            "coil": 0
        },
        {
            "name": "Room237",
            "bus": "onewire",
            "register": 8,
            "external": false,
            "address": "67C6697351FF",
            "type": "Temperature",
            "id": "HVAC_ROOM237_T"
        },
        {
            "name": "Openspace",
            "bus": "onewire",
            "register": 10,
            "external": false,
            "address": "5A8660050000",
            "type": "Temperature",
            "id": "HVAC_OPENSPACE_T"
        },
        {
            "name": "STM330",
            "bus": "enocean",
            "register": 14,
            "eep": "A5-02-05",
            "external": false,
            "address": "0181120A",
            "type": "Temperature",
            "id": "HVAC_STM330_T"
        },
        {
            "name": "Room747",
            "bus": "onewire",
            "register": 12,
            "external": false,
            "address": "67C6697351FF",
            "type": "Temperature",
            "id": "HVAC_ROOM747_T"
        }
    ]
};

$("#devices-get").JSONView(devices_get_json,{collapsed: true, nl2br: true});

var devices_post_json = {
    "bus": "piface",
    "type": "OnOff",
    "id": "HVAC_ROOM237_VLV",
    "coil": 1
};
$("#devices-post").JSONView(devices_post_json,{collapsed: false, nl2br: true});

var devices_id_get_json = {
    "bus": "piface",
    "type": "OnOff",
    "id": "HVAC_ROOM237_VLV",
    "coil": 1
};
$("#devices-id-get").JSONView(devices_id_get_json,{collapsed: false, nl2br: true});

var logics_get_json = {
    "logics": [
        {
            "enabled": false,
            "type": "ThresholdTemperature",
            "id": "logic8377",
            "temp": {
                "value": 20,
                "unit": "C"
            },
            "room": "Room747"
        },
        {
            "id": "logic4628",
            "type": "TimeProgramming",
            "enabled": false,
            "room": "Openspace",
            "time": [
                {
                    "start": "11:00",
                    "stop": "13:00",
                    "days": [
                        "Monday"
                    ],
                    "temp": {
                        "value": 20,
                        "unit": "C"
                    }
                },
                {
                    "start": "14:00",
                    "stop": "15:00",
                    "days": [
                        "Wednesday",
                        "Thursday",
                        "Saturday"
                    ],
                    "temp": {
                        "value": 20,
                        "unit": "C"
                    }
                }
            ]
        },
        {
            "id": "logic4064",
            "type": "TimeProgramming",
            "enabled": false,
            "room": "Room747",
            "time": [
                {
                    "start": "09:00",
                    "stop": "13:00",
                    "days": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "temp": {
                        "value": 22,
                        "unit": "C"
                    }
                },
                {
                    "start": "14:00",
                    "stop": "18:00",
                    "days": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "temp": {
                        "value": 20,
                        "unit": "C"
                    }
                },
                {
                    "start": "09:00",
                    "stop": "20:00",
                    "days": [
                        "Saturday",
                        "Sunday"
                    ],
                    "temp": {
                        "value": 19,
                        "unit": "C"
                    }
                }
            ]
        }
    ]
};

$("#logics-get").JSONView(logics_get_json,{collapsed: true, nl2br: true});

var logics_id_get_json = {
    "enabled": false,
    "type": "ThresholdTemperature",
    "id": "logic8377",
    "temp": {
        "value": 20,
        "unit": "C"
    },
    "room": "Room747"
};

$("#logics-id-get").JSONView(logics_id_get_json,{collapsed: true, nl2br: true});

var config_get_json = {
    "config": {
        "plant": {
            "plantid": "0123456789"
        },
        "daemon": {
            "uid": 502,
            "ListenPort": 502,
            "ListenAddress": "0.0.0.0",
            "gid": 502,
            "supplementarygroups": true,
            "pidfile": "/run/modbus/modbus.pid"
        },
        "alert": {
            "unable_mail_to": "",
            "unable_enable": true,
            "temperature_tupper": 20,
            "temperature_tlower": -1,
            "temperature_enable": true,
            "pidfile": "/var/run/myna/alert.pid",
            "temperature_mail_to": ""
        },
        "logic": {
            "pidfile": "/var/run/myna/logic.pid"
        },
        "mail": {
            "smtp": "192.168.221.20",
            "from_address": ""
        },
        "security": {
            "deny": "",
            "allow": ""
        }
    }
};

$("#config-get").JSONView(config_get_json,{collapsed: true, nl2br: true});

var config_post_json = {
    "config": {
        "plant": {
            "plantid": "0123456789"
        },
        "daemon": {
            "uid": 502,
            "ListenPort": 502,
            "ListenAddress": "0.0.0.0",
            "gid": 502,
            "supplementarygroups": true,
            "pidfile": "/run/modbus/modbus.pid"
        },
        "alert": {
            "unable_mail_to": "",
            "unable_enable": true,
            "temperature_tupper": 20,
            "temperature_tlower": -1,
            "temperature_enable": true,
            "pidfile": "/var/run/myna/alert.pid",
            "temperature_mail_to": ""
        },
        "logic": {
            "pidfile": "/var/run/myna/logic.pid"
        },
        "mail": {
            "smtp": "192.168.221.20",
            "from_address": ""
        },
        "security": {
            "deny": "",
            "allow": ""
        }
    }
};

$("#config-post").JSONView(config_post_json,{collapsed: true, nl2br: true});

});

