var aggResp = {
   "took": 32,
   "timed_out": false,
   "_shards": {
      "total": 155,
      "successful": 155,
      "failed": 0
   },
   "hits": {
      "total": 300000,
      "max_score": 0,
      "hits": []
   },
   "aggregations": {
      "hist": {
         "buckets": [
            {
               "key_as_string": "2015-03-08T16:00:00.000Z",
               "key": 1425830400000,
               "doc_count": 1966,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 21,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 1814
                     },
                     {
                        "key": 301,
                        "doc_count": 61
                     },
                     {
                        "key": 304,
                        "doc_count": 35
                     },
                     {
                        "key": 404,
                        "doc_count": 35
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-09T04:00:00.000Z",
               "key": 1425873600000,
               "doc_count": 3134,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 3,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 2727
                     },
                     {
                        "key": 304,
                        "doc_count": 273
                     },
                     {
                        "key": 404,
                        "doc_count": 78
                     },
                     {
                        "key": 301,
                        "doc_count": 53
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-09T16:00:00.000Z",
               "key": 1425916800000,
               "doc_count": 4749,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 28,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4440
                     },
                     {
                        "key": 304,
                        "doc_count": 133
                     },
                     {
                        "key": 404,
                        "doc_count": 98
                     },
                     {
                        "key": 301,
                        "doc_count": 50
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-10T04:00:00.000Z",
               "key": 1425960000000,
               "doc_count": 3784,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 61,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3482
                     },
                     {
                        "key": 304,
                        "doc_count": 97
                     },
                     {
                        "key": 206,
                        "doc_count": 80
                     },
                     {
                        "key": 404,
                        "doc_count": 64
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-10T16:00:00.000Z",
               "key": 1426003200000,
               "doc_count": 5796,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 31,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5413
                     },
                     {
                        "key": 404,
                        "doc_count": 160
                     },
                     {
                        "key": 304,
                        "doc_count": 118
                     },
                     {
                        "key": 301,
                        "doc_count": 74
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-11T04:00:00.000Z",
               "key": 1426046400000,
               "doc_count": 3712,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 15,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3431
                     },
                     {
                        "key": 304,
                        "doc_count": 145
                     },
                     {
                        "key": 404,
                        "doc_count": 64
                     },
                     {
                        "key": 301,
                        "doc_count": 57
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-11T16:00:00.000Z",
               "key": 1426089600000,
               "doc_count": 5554,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 10,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5290
                     },
                     {
                        "key": 304,
                        "doc_count": 103
                     },
                     {
                        "key": 404,
                        "doc_count": 86
                     },
                     {
                        "key": 301,
                        "doc_count": 65
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-12T04:00:00.000Z",
               "key": 1426132800000,
               "doc_count": 4889,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 17,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4611
                     },
                     {
                        "key": 301,
                        "doc_count": 89
                     },
                     {
                        "key": 304,
                        "doc_count": 86
                     },
                     {
                        "key": 404,
                        "doc_count": 86
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-12T16:00:00.000Z",
               "key": 1426176000000,
               "doc_count": 5335,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 4,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5118
                     },
                     {
                        "key": 304,
                        "doc_count": 76
                     },
                     {
                        "key": 404,
                        "doc_count": 70
                     },
                     {
                        "key": 301,
                        "doc_count": 67
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-13T04:00:00.000Z",
               "key": 1426219200000,
               "doc_count": 3476,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 54,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3193
                     },
                     {
                        "key": 304,
                        "doc_count": 102
                     },
                     {
                        "key": 206,
                        "doc_count": 65
                     },
                     {
                        "key": 301,
                        "doc_count": 62
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-13T16:00:00.000Z",
               "key": 1426262400000,
               "doc_count": 7641,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 69,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5790
                     },
                     {
                        "key": 404,
                        "doc_count": 1578
                     },
                     {
                        "key": 304,
                        "doc_count": 105
                     },
                     {
                        "key": 301,
                        "doc_count": 99
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-14T04:00:00.000Z",
               "key": 1426305600000,
               "doc_count": 3579,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 12,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3344
                     },
                     {
                        "key": 404,
                        "doc_count": 83
                     },
                     {
                        "key": 304,
                        "doc_count": 73
                     },
                     {
                        "key": 301,
                        "doc_count": 67
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-14T16:00:00.000Z",
               "key": 1426348800000,
               "doc_count": 3510,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 32,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3266
                     },
                     {
                        "key": 301,
                        "doc_count": 91
                     },
                     {
                        "key": 404,
                        "doc_count": 70
                     },
                     {
                        "key": 304,
                        "doc_count": 51
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-15T04:00:00.000Z",
               "key": 1426392000000,
               "doc_count": 2566,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 23,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 2341
                     },
                     {
                        "key": 304,
                        "doc_count": 81
                     },
                     {
                        "key": 404,
                        "doc_count": 69
                     },
                     {
                        "key": 301,
                        "doc_count": 52
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-15T16:00:00.000Z",
               "key": 1426435200000,
               "doc_count": 4702,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 56,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4143
                     },
                     {
                        "key": 404,
                        "doc_count": 226
                     },
                     {
                        "key": 206,
                        "doc_count": 161
                     },
                     {
                        "key": 301,
                        "doc_count": 116
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-16T04:00:00.000Z",
               "key": 1426478400000,
               "doc_count": 3277,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 10,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3017
                     },
                     {
                        "key": 404,
                        "doc_count": 137
                     },
                     {
                        "key": 301,
                        "doc_count": 58
                     },
                     {
                        "key": 304,
                        "doc_count": 55
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-16T16:00:00.000Z",
               "key": 1426521600000,
               "doc_count": 5888,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 58,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4996
                     },
                     {
                        "key": 206,
                        "doc_count": 584
                     },
                     {
                        "key": 404,
                        "doc_count": 170
                     },
                     {
                        "key": 304,
                        "doc_count": 80
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-17T04:00:00.000Z",
               "key": 1426564800000,
               "doc_count": 4848,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 61,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4094
                     },
                     {
                        "key": 206,
                        "doc_count": 502
                     },
                     {
                        "key": 404,
                        "doc_count": 101
                     },
                     {
                        "key": 304,
                        "doc_count": 90
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-17T16:00:00.000Z",
               "key": 1426608000000,
               "doc_count": 6106,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 100,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5395
                     },
                     {
                        "key": 206,
                        "doc_count": 269
                     },
                     {
                        "key": 404,
                        "doc_count": 192
                     },
                     {
                        "key": 301,
                        "doc_count": 150
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-18T04:00:00.000Z",
               "key": 1426651200000,
               "doc_count": 4346,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 41,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3868
                     },
                     {
                        "key": 206,
                        "doc_count": 238
                     },
                     {
                        "key": 304,
                        "doc_count": 106
                     },
                     {
                        "key": 404,
                        "doc_count": 93
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-18T16:00:00.000Z",
               "key": 1426694400000,
               "doc_count": 6233,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 95,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5709
                     },
                     {
                        "key": 301,
                        "doc_count": 164
                     },
                     {
                        "key": 206,
                        "doc_count": 135
                     },
                     {
                        "key": 304,
                        "doc_count": 130
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-19T04:00:00.000Z",
               "key": 1426737600000,
               "doc_count": 4358,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 30,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4146
                     },
                     {
                        "key": 404,
                        "doc_count": 70
                     },
                     {
                        "key": 304,
                        "doc_count": 61
                     },
                     {
                        "key": 301,
                        "doc_count": 51
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-19T16:00:00.000Z",
               "key": 1426780800000,
               "doc_count": 8443,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 151,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5705
                     },
                     {
                        "key": 404,
                        "doc_count": 2223
                     },
                     {
                        "key": 206,
                        "doc_count": 219
                     },
                     {
                        "key": 301,
                        "doc_count": 145
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-20T04:00:00.000Z",
               "key": 1426824000000,
               "doc_count": 5380,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 60,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4943
                     },
                     {
                        "key": 304,
                        "doc_count": 163
                     },
                     {
                        "key": 301,
                        "doc_count": 130
                     },
                     {
                        "key": 404,
                        "doc_count": 84
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-20T16:00:00.000Z",
               "key": 1426867200000,
               "doc_count": 5836,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 50,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5469
                     },
                     {
                        "key": 206,
                        "doc_count": 131
                     },
                     {
                        "key": 304,
                        "doc_count": 113
                     },
                     {
                        "key": 404,
                        "doc_count": 73
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-21T04:00:00.000Z",
               "key": 1426910400000,
               "doc_count": 5763,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 7,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5516
                     },
                     {
                        "key": 304,
                        "doc_count": 104
                     },
                     {
                        "key": 301,
                        "doc_count": 99
                     },
                     {
                        "key": 404,
                        "doc_count": 37
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-21T16:00:00.000Z",
               "key": 1426953600000,
               "doc_count": 4233,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 47,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3874
                     },
                     {
                        "key": 206,
                        "doc_count": 139
                     },
                     {
                        "key": 301,
                        "doc_count": 98
                     },
                     {
                        "key": 304,
                        "doc_count": 75
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-22T04:00:00.000Z",
               "key": 1426996800000,
               "doc_count": 4396,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 4,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4177
                     },
                     {
                        "key": 301,
                        "doc_count": 99
                     },
                     {
                        "key": 304,
                        "doc_count": 71
                     },
                     {
                        "key": 404,
                        "doc_count": 45
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-22T16:00:00.000Z",
               "key": 1427040000000,
               "doc_count": 4100,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 15,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3721
                     },
                     {
                        "key": 304,
                        "doc_count": 161
                     },
                     {
                        "key": 301,
                        "doc_count": 107
                     },
                     {
                        "key": 404,
                        "doc_count": 96
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-23T04:00:00.000Z",
               "key": 1427083200000,
               "doc_count": 4192,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 26,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3872
                     },
                     {
                        "key": 304,
                        "doc_count": 164
                     },
                     {
                        "key": 404,
                        "doc_count": 73
                     },
                     {
                        "key": 301,
                        "doc_count": 57
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-23T16:00:00.000Z",
               "key": 1427126400000,
               "doc_count": 5580,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 88,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5142
                     },
                     {
                        "key": 304,
                        "doc_count": 145
                     },
                     {
                        "key": 206,
                        "doc_count": 115
                     },
                     {
                        "key": 301,
                        "doc_count": 90
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-24T04:00:00.000Z",
               "key": 1427169600000,
               "doc_count": 4315,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 35,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4103
                     },
                     {
                        "key": 304,
                        "doc_count": 77
                     },
                     {
                        "key": 404,
                        "doc_count": 59
                     },
                     {
                        "key": 301,
                        "doc_count": 41
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-24T16:00:00.000Z",
               "key": 1427212800000,
               "doc_count": 6738,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 98,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5987
                     },
                     {
                        "key": 304,
                        "doc_count": 285
                     },
                     {
                        "key": 404,
                        "doc_count": 256
                     },
                     {
                        "key": 206,
                        "doc_count": 112
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-25T04:00:00.000Z",
               "key": 1427256000000,
               "doc_count": 4239,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 14,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4050
                     },
                     {
                        "key": 304,
                        "doc_count": 77
                     },
                     {
                        "key": 404,
                        "doc_count": 62
                     },
                     {
                        "key": 301,
                        "doc_count": 36
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-25T16:00:00.000Z",
               "key": 1427299200000,
               "doc_count": 6107,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 40,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5784
                     },
                     {
                        "key": 206,
                        "doc_count": 126
                     },
                     {
                        "key": 404,
                        "doc_count": 79
                     },
                     {
                        "key": 304,
                        "doc_count": 78
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-26T04:00:00.000Z",
               "key": 1427342400000,
               "doc_count": 4987,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 44,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4562
                     },
                     {
                        "key": 404,
                        "doc_count": 240
                     },
                     {
                        "key": 301,
                        "doc_count": 83
                     },
                     {
                        "key": 304,
                        "doc_count": 58
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-26T16:00:00.000Z",
               "key": 1427385600000,
               "doc_count": 5810,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 49,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5475
                     },
                     {
                        "key": 206,
                        "doc_count": 122
                     },
                     {
                        "key": 404,
                        "doc_count": 105
                     },
                     {
                        "key": 301,
                        "doc_count": 59
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-27T04:00:00.000Z",
               "key": 1427428800000,
               "doc_count": 8042,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 108,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4611
                     },
                     {
                        "key": 404,
                        "doc_count": 2631
                     },
                     {
                        "key": 206,
                        "doc_count": 611
                     },
                     {
                        "key": 304,
                        "doc_count": 81
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-27T16:00:00.000Z",
               "key": 1427472000000,
               "doc_count": 5387,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 67,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5039
                     },
                     {
                        "key": 206,
                        "doc_count": 109
                     },
                     {
                        "key": 404,
                        "doc_count": 105
                     },
                     {
                        "key": 304,
                        "doc_count": 67
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-28T04:00:00.000Z",
               "key": 1427515200000,
               "doc_count": 3945,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 8,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3589
                     },
                     {
                        "key": 404,
                        "doc_count": 223
                     },
                     {
                        "key": 301,
                        "doc_count": 85
                     },
                     {
                        "key": 304,
                        "doc_count": 40
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-28T16:00:00.000Z",
               "key": 1427558400000,
               "doc_count": 5884,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 12,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5456
                     },
                     {
                        "key": 404,
                        "doc_count": 270
                     },
                     {
                        "key": 301,
                        "doc_count": 102
                     },
                     {
                        "key": 304,
                        "doc_count": 44
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-29T04:00:00.000Z",
               "key": 1427601600000,
               "doc_count": 4395,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 80,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3876
                     },
                     {
                        "key": 206,
                        "doc_count": 227
                     },
                     {
                        "key": 301,
                        "doc_count": 109
                     },
                     {
                        "key": 304,
                        "doc_count": 103
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-29T16:00:00.000Z",
               "key": 1427644800000,
               "doc_count": 3953,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 0,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3755
                     },
                     {
                        "key": 301,
                        "doc_count": 93
                     },
                     {
                        "key": 304,
                        "doc_count": 59
                     },
                     {
                        "key": 404,
                        "doc_count": 46
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-30T04:00:00.000Z",
               "key": 1427688000000,
               "doc_count": 3552,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 7,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3364
                     },
                     {
                        "key": 404,
                        "doc_count": 78
                     },
                     {
                        "key": 304,
                        "doc_count": 53
                     },
                     {
                        "key": 301,
                        "doc_count": 50
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-30T16:00:00.000Z",
               "key": 1427731200000,
               "doc_count": 6480,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 63,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5766
                     },
                     {
                        "key": 206,
                        "doc_count": 411
                     },
                     {
                        "key": 301,
                        "doc_count": 124
                     },
                     {
                        "key": 304,
                        "doc_count": 116
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-31T04:00:00.000Z",
               "key": 1427774400000,
               "doc_count": 4052,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 53,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3774
                     },
                     {
                        "key": 304,
                        "doc_count": 97
                     },
                     {
                        "key": 301,
                        "doc_count": 66
                     },
                     {
                        "key": 206,
                        "doc_count": 62
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-03-31T16:00:00.000Z",
               "key": 1427817600000,
               "doc_count": 6048,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 58,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5693
                     },
                     {
                        "key": 206,
                        "doc_count": 124
                     },
                     {
                        "key": 404,
                        "doc_count": 89
                     },
                     {
                        "key": 301,
                        "doc_count": 84
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-01T04:00:00.000Z",
               "key": 1427860800000,
               "doc_count": 5371,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 59,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3765
                     },
                     {
                        "key": 404,
                        "doc_count": 1318
                     },
                     {
                        "key": 206,
                        "doc_count": 158
                     },
                     {
                        "key": 304,
                        "doc_count": 71
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-01T16:00:00.000Z",
               "key": 1427904000000,
               "doc_count": 6744,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 49,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 6357
                     },
                     {
                        "key": 404,
                        "doc_count": 124
                     },
                     {
                        "key": 206,
                        "doc_count": 108
                     },
                     {
                        "key": 304,
                        "doc_count": 106
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-02T04:00:00.000Z",
               "key": 1427947200000,
               "doc_count": 4262,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 25,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4042
                     },
                     {
                        "key": 304,
                        "doc_count": 76
                     },
                     {
                        "key": 404,
                        "doc_count": 73
                     },
                     {
                        "key": 301,
                        "doc_count": 46
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-02T16:00:00.000Z",
               "key": 1427990400000,
               "doc_count": 14292,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 106,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 10696
                     },
                     {
                        "key": 301,
                        "doc_count": 2652
                     },
                     {
                        "key": 206,
                        "doc_count": 429
                     },
                     {
                        "key": 404,
                        "doc_count": 409
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-03T04:00:00.000Z",
               "key": 1428033600000,
               "doc_count": 4240,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 6,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4052
                     },
                     {
                        "key": 304,
                        "doc_count": 62
                     },
                     {
                        "key": 404,
                        "doc_count": 61
                     },
                     {
                        "key": 301,
                        "doc_count": 59
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-03T16:00:00.000Z",
               "key": 1428076800000,
               "doc_count": 5563,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 53,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5260
                     },
                     {
                        "key": 206,
                        "doc_count": 119
                     },
                     {
                        "key": 301,
                        "doc_count": 67
                     },
                     {
                        "key": 404,
                        "doc_count": 64
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-04T04:00:00.000Z",
               "key": 1428120000000,
               "doc_count": 4248,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 10,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 4064
                     },
                     {
                        "key": 301,
                        "doc_count": 88
                     },
                     {
                        "key": 304,
                        "doc_count": 44
                     },
                     {
                        "key": 404,
                        "doc_count": 42
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-04T16:00:00.000Z",
               "key": 1428163200000,
               "doc_count": 3822,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 65,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3444
                     },
                     {
                        "key": 206,
                        "doc_count": 154
                     },
                     {
                        "key": 301,
                        "doc_count": 80
                     },
                     {
                        "key": 404,
                        "doc_count": 79
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-05T04:00:00.000Z",
               "key": 1428206400000,
               "doc_count": 3984,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 3,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3827
                     },
                     {
                        "key": 301,
                        "doc_count": 67
                     },
                     {
                        "key": 404,
                        "doc_count": 53
                     },
                     {
                        "key": 304,
                        "doc_count": 34
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-05T16:00:00.000Z",
               "key": 1428249600000,
               "doc_count": 3500,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 3,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3313
                     },
                     {
                        "key": 404,
                        "doc_count": 87
                     },
                     {
                        "key": 304,
                        "doc_count": 64
                     },
                     {
                        "key": 301,
                        "doc_count": 33
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-06T04:00:00.000Z",
               "key": 1428292800000,
               "doc_count": 3694,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 5,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3415
                     },
                     {
                        "key": 404,
                        "doc_count": 120
                     },
                     {
                        "key": 301,
                        "doc_count": 87
                     },
                     {
                        "key": 304,
                        "doc_count": 67
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-06T16:00:00.000Z",
               "key": 1428336000000,
               "doc_count": 5600,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 36,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 5083
                     },
                     {
                        "key": 206,
                        "doc_count": 260
                     },
                     {
                        "key": 404,
                        "doc_count": 111
                     },
                     {
                        "key": 304,
                        "doc_count": 110
                     }
                  ]
               }
            },
            {
               "key_as_string": "2015-04-07T04:00:00.000Z",
               "key": 1428379200000,
               "doc_count": 3374,
               "responseCodes": {
                  "doc_count_error_upper_bound": 0,
                  "sum_other_doc_count": 56,
                  "buckets": [
                     {
                        "key": 200,
                        "doc_count": 3094
                     },
                     {
                        "key": 206,
                        "doc_count": 106
                     },
                     {
                        "key": 301,
                        "doc_count": 63
                     },
                     {
                        "key": 404,
                        "doc_count": 55
                     }
                  ]
               }
            }
         ]
      }
   }
}