// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: '1',

      macros: [
        { function: '__e' },
        { function: '__c', vtp_value: 'google.ru' },
        { function: '__c', vtp_value: 0 },
        { vtp_signal: 0, function: '__c', vtp_value: 0 },
      ],
      tags: [
        {
          function: '__gct',
          vtp_trackingId: 'G-NVP1BM95RS',
          vtp_sessionDuration: 0,
          tag_id: 1,
        },
        {
          function: '__ccd_ga_regscope',
          vtp_settingsTable: [
            'list',
            [
              'map',
              'redactFieldGroup',
              'DEVICE_AND_GEO',
              'disallowAllRegions',
              false,
              'disallowedRegions',
              '',
            ],
            [
              'map',
              'redactFieldGroup',
              'GOOGLE_SIGNALS',
              'disallowAllRegions',
              true,
              'disallowedRegions',
              '',
            ],
          ],
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 3,
        },
        {
          function: '__ccd_em_page_view',
          vtp_historyEvents: true,
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 5,
        },
        {
          function: '__ccd_em_outbound_click',
          priority: 0,
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 6,
        },
        {
          function: '__ccd_em_scroll',
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 7,
        },
        {
          function: '__ccd_em_video',
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 8,
        },
        {
          function: '__ccd_em_download',
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 9,
        },
        {
          function: '__ccd_em_site_search',
          vtp_searchQueryParams: 'q,s,search,query,keyword',
          vtp_includeParams: true,
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 10,
        },
        {
          function: '__ccd_conversion_marking',
          vtp_conversionRules: [
            'list',
            [
              'map',
              'matchingRules',
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          tag_id: 11,
        },
        {
          function: '__set_product_settings',
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          vtp_foreignTldMacroResult: ['macro', 1],
          vtp_isChinaVipRegionMacroResult: ['macro', 2],
          tag_id: 12,
        },
        {
          function: '__ogt_google_signals',
          vtp_googleSignals: 'DISABLED',
          vtp_instanceDestinationId: 'G-NVP1BM95RS',
          vtp_serverMacroResult: ['macro', 3],
          tag_id: 13,
        },
      ],
      predicates: [
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.js' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.init' },
      ],
      rules: [
        [
          ['if', 0],
          ['add', 0],
        ],
        [
          ['if', 1],
          ['add', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ],
      ],
    },
    runtime: [
      [
        50,
        '__ccd_conversion_marking',
        [46, 'a'],
        [
          22,
          [
            30,
            [28, [17, [15, 'a'], 'conversionRules']],
            [20, [17, [17, [15, 'a'], 'conversionRules'], 'length'], 0],
          ],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'b', ['require', 'internal.copyPreHit']],
        [52, 'c', ['require', 'internal.evaluateBooleanExpression']],
        [52, 'd', ['require', 'internal.registerCcdCallback']],
        [52, 'e', 'is_conversion'],
        [52, 'f', 'is_first_visit'],
        [52, 'g', 'is_first_visit_conversion'],
        [52, 'h', 'is_session_start'],
        [52, 'i', 'is_session_start_conversion'],
        [52, 'j', 'first_visit'],
        [52, 'k', 'session_start'],
        [41, 'l'],
        [41, 'm'],
        [
          'd',
          [17, [15, 'a'], 'instanceDestinationId'],
          [
            51,
            '',
            [7, 'n'],
            [52, 'o', [8, 'preHit', [15, 'n']]],
            [
              65,
              'p',
              [17, [15, 'a'], 'conversionRules'],
              [
                46,
                [
                  22,
                  ['c', [17, [15, 'p'], 'matchingRules'], [15, 'o']],
                  [
                    46,
                    [2, [15, 'n'], 'setMetadata', [7, [15, 'e'], true]],
                    [4],
                  ],
                ],
              ],
            ],
            [
              22,
              [2, [15, 'n'], 'getMetadata', [7, [15, 'f']]],
              [
                46,
                [
                  22,
                  [28, [15, 'l']],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        'p',
                        [
                          'b',
                          [15, 'n'],
                          [8, 'omitHitData', true, 'omitMetadata', true],
                        ],
                      ],
                      [2, [15, 'p'], 'setEventName', [7, [15, 'j']]],
                      [3, 'l', [8, 'preHit', [15, 'p']]],
                    ],
                  ],
                ],
                [
                  65,
                  'p',
                  [17, [15, 'a'], 'conversionRules'],
                  [
                    46,
                    [
                      22,
                      ['c', [17, [15, 'p'], 'matchingRules'], [15, 'l']],
                      [
                        46,
                        [2, [15, 'n'], 'setMetadata', [7, [15, 'g'], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [2, [15, 'n'], 'getMetadata', [7, [15, 'h']]],
              [
                46,
                [
                  22,
                  [28, [15, 'm']],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        'p',
                        [
                          'b',
                          [15, 'n'],
                          [8, 'omitHitData', true, 'omitMetadata', true],
                        ],
                      ],
                      [2, [15, 'p'], 'setEventName', [7, [15, 'k']]],
                      [3, 'm', [8, 'preHit', [15, 'p']]],
                    ],
                  ],
                ],
                [
                  65,
                  'p',
                  [17, [15, 'a'], 'conversionRules'],
                  [
                    46,
                    [
                      22,
                      ['c', [17, [15, 'p'], 'matchingRules'], [15, 'm']],
                      [
                        46,
                        [2, [15, 'n'], 'setMetadata', [7, [15, 'i'], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
        [36],
      ],
      [
        50,
        '__ccd_em_download',
        [46, 'a'],
        [
          50,
          'r',
          [46, 'x'],
          [
            36,
            [
              1,
              [15, 'x'],
              [
                21,
                [
                  2,
                  [2, [15, 'x'], 'toLowerCase', [7]],
                  'match',
                  [7, [15, 'q']],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          's',
          [46, 'x'],
          [52, 'y', [2, [17, [15, 'x'], 'pathname'], 'split', [7, '.']]],
          [
            52,
            'z',
            [
              39,
              [18, [17, [15, 'y'], 'length'], 1],
              [16, [15, 'y'], [37, [17, [15, 'y'], 'length'], 1]],
              '',
            ],
          ],
          [36, [16, [2, [15, 'z'], 'split', [7, '/']], 0]],
        ],
        [
          50,
          't',
          [46, 'x'],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, 'x'], 'pathname'], 'substring', [7, 0, 1]],
                '/',
              ],
              [17, [15, 'x'], 'pathname'],
              [0, '/', [17, [15, 'x'], 'pathname']],
            ],
          ],
        ],
        [
          50,
          'u',
          [46, 'x'],
          [41, 'y'],
          [3, 'y', ''],
          [
            22,
            [1, [15, 'x'], [17, [15, 'x'], 'href']],
            [
              46,
              [
                53,
                [41, 'z'],
                [3, 'z', [2, [17, [15, 'x'], 'href'], 'indexOf', [7, '#']]],
                [
                  3,
                  'y',
                  [
                    39,
                    [23, [15, 'z'], 0],
                    [17, [15, 'x'], 'href'],
                    [
                      2,
                      [17, [15, 'x'], 'href'],
                      'substring',
                      [7, 0, [15, 'z']],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, 'y']],
        ],
        [
          50,
          'w',
          [46, 'x'],
          [52, 'y', [8]],
          [43, [15, 'y'], [15, 'j'], true],
          [43, [15, 'y'], [15, 'f'], true],
          [43, [15, 'x'], 'eventMetadata', [15, 'y']],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'templateStorage']],
        [52, 'e', [15, '__module_ccdEmDownloadActivity']],
        [52, 'f', 'speculative'],
        [52, 'g', 'ae_block_downloads'],
        [52, 'h', 'file_download'],
        [52, 'i', 'isRegistered'],
        [52, 'j', 'em_event'],
        [52, 'k', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'k'], [15, 'g']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [
          2,
          [15, 'e'],
          'registerDownloadActivityCallback',
          [7, [15, 'k'], [17, [15, 'a'], 'includeParams']],
        ],
        [
          22,
          [2, [15, 'd'], 'getItem', [7, [15, 'i']]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'l', ['require', 'internal.addDataLayerEventListener']],
        [52, 'm', ['require', 'internal.enableAutoEventOnLinkClick']],
        [52, 'n', ['require', 'internal.getDestinationIds']],
        [52, 'o', ['require', 'parseUrl']],
        [52, 'p', ['require', 'internal.sendGtagEvent']],
        [
          52,
          'q',
          [
            0,
            '^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|',
            'mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$',
          ],
        ],
        [52, 'v', ['m', [8, 'checkValidation', true]]],
        [22, [28, [15, 'v']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'd'], 'setItem', [7, [15, 'i'], true]],
        [
          'l',
          'gtm.linkClick',
          [
            51,
            '',
            [7, 'x', 'y'],
            ['y'],
            [52, 'z', [8, 'eventId', [16, [15, 'x'], 'gtm.uniqueEventId']]],
            [
              22,
              [16, [15, 'b'], 'enableDeferAllEnhancedMeasurement'],
              [46, [43, [15, 'z'], 'deferrable', true]],
            ],
            [52, 'ba', [16, [15, 'x'], 'gtm.elementUrl']],
            [52, 'bb', ['o', [15, 'ba']]],
            [22, [28, [15, 'bb']], [46, [36]]],
            [52, 'bc', ['s', [15, 'bb']]],
            [22, [28, ['r', [15, 'bc']]], [46, [36]]],
            [
              52,
              'bd',
              [
                8,
                'link_id',
                [16, [15, 'x'], 'gtm.elementId'],
                'link_url',
                ['u', [15, 'bb']],
                'link_text',
                [16, [15, 'x'], 'gtm.elementText'],
                'file_name',
                ['t', [15, 'bb']],
                'file_extension',
                [15, 'bc'],
              ],
            ],
            ['w', [15, 'z']],
            ['p', ['n'], [15, 'h'], [15, 'bd'], [15, 'z']],
          ],
          [15, 'v'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_outbound_click',
        [46, 'a'],
        [
          50,
          's',
          [46, 'y'],
          [22, [28, [15, 'y']], [46, [36, [44]]]],
          [41, 'z'],
          [3, 'z', ''],
          [
            22,
            [1, [15, 'y'], [17, [15, 'y'], 'href']],
            [
              46,
              [
                53,
                [41, 'ba'],
                [3, 'ba', [2, [17, [15, 'y'], 'href'], 'indexOf', [7, '#']]],
                [
                  3,
                  'z',
                  [
                    39,
                    [23, [15, 'ba'], 0],
                    [17, [15, 'y'], 'href'],
                    [
                      2,
                      [17, [15, 'y'], 'href'],
                      'substring',
                      [7, 0, [15, 'ba']],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, 'z']],
        ],
        [
          50,
          't',
          [46, 'y'],
          [22, [28, [15, 'y']], [46, [36, [44]]]],
          [41, 'z'],
          [3, 'z', [17, [15, 'y'], 'hostname']],
          [52, 'ba', [2, [15, 'z'], 'match', [7, '^www\\d*\\.']]],
          [
            22,
            [1, [15, 'ba'], [16, [15, 'ba'], 0]],
            [
              46,
              [
                3,
                'z',
                [
                  2,
                  [15, 'z'],
                  'substring',
                  [7, [17, [16, [15, 'ba'], 0], 'length']],
                ],
              ],
            ],
          ],
          [36, [15, 'z']],
        ],
        [
          50,
          'u',
          [46, 'y'],
          [22, [28, [15, 'y']], [46, [36, false]]],
          [52, 'z', [2, [17, [15, 'y'], 'hostname'], 'toLowerCase', [7]]],
          [41, 'ba'],
          [3, 'ba', [2, ['t', ['q', ['p']]], 'toLowerCase', [7]]],
          [41, 'bb'],
          [
            3,
            'bb',
            [37, [17, [15, 'z'], 'length'], [17, [15, 'ba'], 'length']],
          ],
          [
            22,
            [
              1,
              [18, [15, 'bb'], 0],
              [29, [2, [15, 'ba'], 'charAt', [7, 0]], '.'],
            ],
            [
              46,
              [32, [15, 'bb'], [3, 'bb', [37, [15, 'bb'], 1]]],
              [3, 'ba', [0, '.', [15, 'ba']]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, 'bb'], 0],
              [
                12,
                [2, [15, 'z'], 'indexOf', [7, [15, 'ba'], [15, 'bb']]],
                [15, 'bb'],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [
          50,
          'x',
          [46, 'y'],
          [52, 'z', [8]],
          [43, [15, 'z'], [15, 'j'], true],
          [43, [15, 'z'], [15, 'f'], true],
          [43, [15, 'y'], 'eventMetadata', [15, 'z']],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'templateStorage']],
        [52, 'e', [15, '__module_ccdEmOutboundClickActivity']],
        [52, 'f', 'speculative'],
        [52, 'g', 'ae_block_outbound_click'],
        [52, 'h', 'click'],
        [52, 'i', 'isRegistered'],
        [52, 'j', 'em_event'],
        [52, 'k', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'k'], [15, 'g']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [
          2,
          [15, 'e'],
          'registerOutbackClickActivityCallback',
          [7, [15, 'k'], [17, [15, 'a'], 'includeParams']],
        ],
        [
          22,
          [2, [15, 'd'], 'getItem', [7, [15, 'i']]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'l', ['require', 'internal.addDataLayerEventListener']],
        [52, 'm', ['require', 'internal.enableAutoEventOnLinkClick']],
        [52, 'n', ['require', 'internal.getDestinationIds']],
        [52, 'o', ['require', 'internal.getRemoteConfigParameter']],
        [52, 'p', ['require', 'getUrl']],
        [52, 'q', ['require', 'parseUrl']],
        [52, 'r', ['require', 'internal.sendGtagEvent']],
        [52, 'v', ['o', [15, 'k'], 'cross_domain_conditions']],
        [
          52,
          'w',
          [
            'm',
            [
              8,
              'affiliateDomains',
              [15, 'v'],
              'checkValidation',
              true,
              'waitForTags',
              false,
            ],
          ],
        ],
        [22, [28, [15, 'w']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'd'], 'setItem', [7, [15, 'i'], true]],
        [
          'l',
          'gtm.linkClick',
          [
            51,
            '',
            [7, 'y', 'z'],
            [52, 'ba', ['q', [16, [15, 'y'], 'gtm.elementUrl']]],
            [22, [28, ['u', [15, 'ba']]], [46, ['z'], [36]]],
            [
              52,
              'bb',
              [
                8,
                'link_id',
                [16, [15, 'y'], 'gtm.elementId'],
                'link_classes',
                [16, [15, 'y'], 'gtm.elementClasses'],
                'link_url',
                ['s', [15, 'ba']],
                'link_domain',
                ['t', [15, 'ba']],
                'outbound',
                true,
              ],
            ],
            [43, [15, 'bb'], 'event_callback', [15, 'z']],
            [52, 'bc', [8, 'eventId', [16, [15, 'y'], 'gtm.uniqueEventId']]],
            [
              22,
              [16, [15, 'b'], 'enableDeferAllEnhancedMeasurement'],
              [46, [43, [15, 'bc'], 'deferrable', true]],
            ],
            ['x', [15, 'bc']],
            ['r', ['n'], [15, 'h'], [15, 'bb'], [15, 'bc']],
          ],
          [15, 'w'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_page_view',
        [46, 'a'],
        [
          50,
          's',
          [46, 't'],
          [52, 'u', [8]],
          [43, [15, 'u'], [15, 'k'], true],
          [43, [15, 'u'], [15, 'g'], true],
          [43, [15, 't'], 'eventMetadata', [15, 'u']],
        ],
        [
          22,
          [28, [17, [15, 'a'], 'historyEvents']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'internal.setRemoteConfigParameter']],
        [52, 'e', ['require', 'templateStorage']],
        [52, 'f', [15, '__module_ccdEmPageViewActivity']],
        [52, 'g', 'speculative'],
        [52, 'h', 'ae_block_history'],
        [52, 'i', 'page_view'],
        [52, 'j', 'isRegistered'],
        [52, 'k', 'em_event'],
        [52, 'l', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'l'], [15, 'h']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [2, [15, 'f'], 'registerPageViewActivityCallback', [7, [15, 'l']]],
        [
          22,
          [2, [15, 'e'], 'getItem', [7, [15, 'j']]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'm', ['require', 'internal.addDataLayerEventListener']],
        [52, 'n', ['require', 'internal.enableAutoEventOnHistoryChange']],
        [52, 'o', ['require', 'internal.getDestinationIds']],
        [52, 'p', ['require', 'internal.sendGtagEvent']],
        [52, 'q', [8, 'interval', 1000, 'useV2EventName', true]],
        [52, 'r', ['n', [15, 'q']]],
        [22, [28, [15, 'r']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'e'], 'setItem', [7, [15, 'j'], true]],
        [
          'm',
          'gtm.historyChange-v2',
          [
            51,
            '',
            [7, 't', 'u'],
            ['u'],
            [52, 'v', [16, [15, 't'], 'gtm.oldUrl']],
            [22, [20, [16, [15, 't'], 'gtm.newUrl'], [15, 'v']], [46, [36]]],
            [52, 'w', [16, [15, 't'], 'gtm.historyChangeSource']],
            [
              22,
              [
                1,
                [1, [21, [15, 'w'], 'pushState'], [21, [15, 'w'], 'popstate']],
                [21, [15, 'w'], 'replaceState'],
              ],
              [46, [36]],
            ],
            [52, 'x', [8]],
            [
              22,
              [17, [15, 'a'], 'includeParams'],
              [
                46,
                [43, [15, 'x'], 'page_location', [16, [15, 't'], 'gtm.newUrl']],
                [43, [15, 'x'], 'page_referrer', [15, 'v']],
              ],
            ],
            [52, 'y', [8, 'eventId', [16, [15, 't'], 'gtm.uniqueEventId']]],
            [
              22,
              [16, [15, 'b'], 'enableDeferAllEnhancedMeasurement'],
              [46, [43, [15, 'y'], 'deferrable', true]],
            ],
            ['s', [15, 'y']],
            ['p', ['o'], [15, 'i'], [15, 'x'], [15, 'y']],
          ],
          [15, 'r'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_scroll',
        [46, 'a'],
        [
          50,
          'q',
          [46, 'r'],
          [52, 's', [8]],
          [43, [15, 's'], [15, 'j'], true],
          [43, [15, 's'], [15, 'f'], true],
          [43, [15, 'r'], 'eventMetadata', [15, 's']],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'templateStorage']],
        [52, 'e', [15, '__module_ccdEmScrollActivity']],
        [52, 'f', 'speculative'],
        [52, 'g', 'ae_block_scroll'],
        [52, 'h', 'scroll'],
        [52, 'i', 'isRegistered'],
        [52, 'j', 'em_event'],
        [52, 'k', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'k'], [15, 'g']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [
          2,
          [15, 'e'],
          'registerScrollActivityCallback',
          [7, [15, 'k'], [17, [15, 'a'], 'includeParams']],
        ],
        [
          22,
          [2, [15, 'd'], 'getItem', [7, [15, 'i']]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'l', ['require', 'internal.addDataLayerEventListener']],
        [52, 'm', ['require', 'internal.enableAutoEventOnScroll']],
        [52, 'n', ['require', 'internal.getDestinationIds']],
        [52, 'o', ['require', 'internal.sendGtagEvent']],
        [
          52,
          'p',
          [
            'm',
            [8, 'verticalThresholdUnits', 'PERCENT', 'verticalThresholds', 90],
          ],
        ],
        [22, [28, [15, 'p']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'd'], 'setItem', [7, [15, 'i'], true]],
        [
          'l',
          'gtm.scrollDepth',
          [
            51,
            '',
            [7, 'r', 's'],
            ['s'],
            [52, 't', [8, 'eventId', [16, [15, 'r'], 'gtm.uniqueEventId']]],
            [
              22,
              [16, [15, 'b'], 'enableDeferAllEnhancedMeasurement'],
              [46, [43, [15, 't'], 'deferrable', true]],
            ],
            [
              52,
              'u',
              [8, 'percent_scrolled', [16, [15, 'r'], 'gtm.scrollThreshold']],
            ],
            ['q', [15, 't']],
            ['o', ['n'], [15, 'h'], [15, 'u'], [15, 't']],
          ],
          [15, 'p'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_site_search',
        [46, 'a'],
        [52, 'b', ['require', 'getQueryParameters']],
        [52, 'c', ['require', 'internal.sendGtagEvent']],
        [52, 'd', ['require', 'getContainerVersion']],
        [52, 'e', [15, '__module_ccdEmSiteSearchActivity']],
        [
          52,
          'f',
          [
            2,
            [15, 'e'],
            'getSearchTerm',
            [7, [17, [15, 'a'], 'searchQueryParams'], [15, 'b']],
          ],
        ],
        [
          52,
          'g',
          [
            30,
            [17, [15, 'a'], 'instanceDestinationId'],
            [17, ['d'], 'containerId'],
          ],
        ],
        [
          52,
          'h',
          [
            8,
            'deferrable',
            true,
            'eventId',
            [17, [15, 'a'], 'gtmEventId'],
            'eventMetadata',
            [8, 'em_event', true],
          ],
        ],
        [
          22,
          [15, 'f'],
          [
            46,
            [
              53,
              [
                52,
                'i',
                [
                  39,
                  [28, [28, [17, [15, 'a'], 'includeParams']]],
                  [
                    2,
                    [15, 'e'],
                    'buildEventParams',
                    [
                      7,
                      [15, 'f'],
                      [17, [15, 'a'], 'additionalQueryParams'],
                      [15, 'b'],
                    ],
                  ],
                  [8],
                ],
              ],
              ['c', [15, 'g'], 'view_search_results', [15, 'i'], [15, 'h']],
            ],
          ],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_em_video',
        [46, 'a'],
        [
          50,
          's',
          [46, 't'],
          [52, 'u', [8]],
          [43, [15, 'u'], [15, 'l'], true],
          [43, [15, 'u'], [15, 'f'], true],
          [43, [15, 't'], 'eventMetadata', [15, 'u']],
        ],
        [
          52,
          'b',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [52, 'c', ['require', 'internal.getProductSettingsParameter']],
        [52, 'd', ['require', 'templateStorage']],
        [52, 'e', [15, '__module_ccdEmVideoActivity']],
        [52, 'f', 'speculative'],
        [52, 'g', 'ae_block_video'],
        [52, 'h', 'video_start'],
        [52, 'i', 'video_progress'],
        [52, 'j', 'video_complete'],
        [52, 'k', 'isRegistered'],
        [52, 'l', 'em_event'],
        [52, 'm', [17, [15, 'a'], 'instanceDestinationId']],
        [
          22,
          ['c', [15, 'm'], [15, 'g']],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [
          2,
          [15, 'e'],
          'registerVideoActivityCallback',
          [7, [15, 'm'], [17, [15, 'a'], 'includeParams']],
        ],
        [
          22,
          [2, [15, 'd'], 'getItem', [7, [15, 'k']]],
          [46, [2, [15, 'a'], 'gtmOnSuccess', [7]], [36]],
        ],
        [52, 'n', ['require', 'internal.addDataLayerEventListener']],
        [52, 'o', ['require', 'internal.enableAutoEventOnYouTubeActivity']],
        [52, 'p', ['require', 'internal.getDestinationIds']],
        [52, 'q', ['require', 'internal.sendGtagEvent']],
        [
          52,
          'r',
          [
            'o',
            [
              8,
              'captureComplete',
              true,
              'captureStart',
              true,
              'progressThresholdsPercent',
              [7, 10, 25, 50, 75],
            ],
          ],
        ],
        [22, [28, [15, 'r']], [46, [2, [15, 'a'], 'gtmOnFailure', [7]], [36]]],
        [2, [15, 'd'], 'setItem', [7, [15, 'k'], true]],
        [
          'n',
          'gtm.video',
          [
            51,
            '',
            [7, 't', 'u'],
            ['u'],
            [52, 'v', [16, [15, 't'], 'gtm.videoStatus']],
            [41, 'w'],
            [
              22,
              [20, [15, 'v'], 'start'],
              [46, [3, 'w', [15, 'h']]],
              [
                46,
                [
                  22,
                  [20, [15, 'v'], 'progress'],
                  [46, [3, 'w', [15, 'i']]],
                  [
                    46,
                    [
                      22,
                      [20, [15, 'v'], 'complete'],
                      [46, [3, 'w', [15, 'j']]],
                      [46, [36]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              'x',
              [
                8,
                'video_current_time',
                [16, [15, 't'], 'gtm.videoCurrentTime'],
                'video_duration',
                [16, [15, 't'], 'gtm.videoDuration'],
                'video_percent',
                [16, [15, 't'], 'gtm.videoPercent'],
                'video_provider',
                [16, [15, 't'], 'gtm.videoProvider'],
                'video_title',
                [16, [15, 't'], 'gtm.videoTitle'],
                'video_url',
                [16, [15, 't'], 'gtm.videoUrl'],
                'visible',
                [16, [15, 't'], 'gtm.videoVisible'],
              ],
            ],
            [52, 'y', [8, 'eventId', [16, [15, 't'], 'gtm.uniqueEventId']]],
            [
              22,
              [16, [15, 'b'], 'enableDeferAllEnhancedMeasurement'],
              [46, [43, [15, 'y'], 'deferrable', true]],
            ],
            ['s', [15, 'y']],
            ['q', ['p'], [15, 'w'], [15, 'x'], [15, 'y']],
          ],
          [15, 'r'],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ccd_ga_regscope',
        [46, 'a'],
        [52, 'b', [15, '__module_ccdGaRegionScopedSettings']],
        [2, [15, 'b'], 'applyRegionScopedSettings', [7, [15, 'a']]],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__ogt_google_signals',
        [46, 'a'],
        [52, 'b', ['require', 'internal.setProductSettingsParameter']],
        [52, 'c', ['require', 'getContainerVersion']],
        [
          52,
          'd',
          [13, [41, '$0'], [3, '$0', ['require', 'internal.getFlags']], ['$0']],
        ],
        [
          52,
          'e',
          [
            30,
            [17, [15, 'a'], 'instanceDestinationId'],
            [17, ['c'], 'containerId'],
          ],
        ],
        [
          'b',
          [15, 'e'],
          'google_signals',
          [20, [17, [15, 'a'], 'serverMacroResult'], 1],
        ],
        [
          'b',
          [15, 'e'],
          'google_ono',
          [20, [17, [15, 'a'], 'serverMacroResult'], 2],
        ],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        50,
        '__set_product_settings',
        [46, 'a'],
        [2, [15, 'a'], 'gtmOnSuccess', [7]],
      ],
      [
        52,
        '__module_activities',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'b',
                  [46, 'c', 'd'],
                  [36, [39, [15, 'd'], ['d', [15, 'c']], [15, 'c']]],
                ],
                [36, [8, 'withRequestContext', [15, 'b']]],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
      [
        52,
        '__module_ccdEmDownloadActivity',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'h',
                  [46, 'i', 'j'],
                  [
                    'c',
                    [15, 'i'],
                    [
                      51,
                      '',
                      [7, 'k'],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, 'k'], 'getEventName', [7]], [15, 'f']],
                          [28, [2, [15, 'k'], 'getMetadata', [7, [15, 'g']]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ['b', [15, 'i'], [15, 'e']],
                        [46, [2, [15, 'k'], 'abort', [7]], [36]],
                      ],
                      [2, [15, 'k'], 'setMetadata', [7, [15, 'd'], false]],
                      [
                        22,
                        [28, [15, 'j']],
                        [
                          46,
                          [2, [15, 'k'], 'setHitData', [7, 'link_id', [44]]],
                          [2, [15, 'k'], 'setHitData', [7, 'link_url', [44]]],
                          [2, [15, 'k'], 'setHitData', [7, 'link_text', [44]]],
                          [2, [15, 'k'], 'setHitData', [7, 'file_name', [44]]],
                          [
                            2,
                            [15, 'k'],
                            'setHitData',
                            [7, 'file_extension', [44]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, 'b', ['require', 'internal.getProductSettingsParameter']],
                [52, 'c', ['require', 'internal.registerCcdCallback']],
                [52, 'd', 'speculative'],
                [52, 'e', 'ae_block_downloads'],
                [52, 'f', 'file_download'],
                [52, 'g', 'em_event'],
                [36, [8, 'registerDownloadActivityCallback', [15, 'h']]],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
      [
        52,
        '__module_ccdEmOutboundClickActivity',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'h',
                  [46, 'i', 'j'],
                  [
                    'c',
                    [15, 'i'],
                    [
                      51,
                      '',
                      [7, 'k'],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, 'k'], 'getEventName', [7]], [15, 'f']],
                          [28, [2, [15, 'k'], 'getMetadata', [7, [15, 'g']]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ['b', [15, 'i'], [15, 'e']],
                        [46, [2, [15, 'k'], 'abort', [7]], [36]],
                      ],
                      [2, [15, 'k'], 'setMetadata', [7, [15, 'd'], false]],
                      [
                        22,
                        [28, [15, 'j']],
                        [
                          46,
                          [2, [15, 'k'], 'setHitData', [7, 'link_id', [44]]],
                          [
                            2,
                            [15, 'k'],
                            'setHitData',
                            [7, 'link_classes', [44]],
                          ],
                          [2, [15, 'k'], 'setHitData', [7, 'link_url', [44]]],
                          [
                            2,
                            [15, 'k'],
                            'setHitData',
                            [7, 'link_domain', [44]],
                          ],
                          [2, [15, 'k'], 'setHitData', [7, 'outbound', [44]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, 'b', ['require', 'internal.getProductSettingsParameter']],
                [52, 'c', ['require', 'internal.registerCcdCallback']],
                [52, 'd', 'speculative'],
                [52, 'e', 'ae_block_outbound_click'],
                [52, 'f', 'click'],
                [52, 'g', 'em_event'],
                [36, [8, 'registerOutbackClickActivityCallback', [15, 'h']]],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
      [
        52,
        '__module_ccdEmPageViewActivity',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'j',
                  [46, 'k'],
                  [
                    'c',
                    [15, 'k'],
                    [
                      51,
                      '',
                      [7, 'l'],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, 'l'], 'getEventName', [7]], [15, 'h']],
                          [28, [2, [15, 'l'], 'getMetadata', [7, [15, 'i']]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ['b', [15, 'k'], [15, 'g']],
                        [46, [2, [15, 'l'], 'abort', [7]], [36]],
                      ],
                      [
                        22,
                        [28, [2, [15, 'l'], 'getMetadata', [7, [15, 'f']]]],
                        [
                          46,
                          [
                            'd',
                            [15, 'k'],
                            'page_referrer',
                            [2, [15, 'l'], 'getHitData', [7, 'page_referrer']],
                          ],
                        ],
                      ],
                      [2, [15, 'l'], 'setMetadata', [7, [15, 'e'], false]],
                    ],
                  ],
                ],
                [52, 'b', ['require', 'internal.getProductSettingsParameter']],
                [52, 'c', ['require', 'internal.registerCcdCallback']],
                [52, 'd', ['require', 'internal.setRemoteConfigParameter']],
                [52, 'e', 'speculative'],
                [52, 'f', 'is_sgtm_prehit'],
                [52, 'g', 'ae_block_history'],
                [52, 'h', 'page_view'],
                [52, 'i', 'em_event'],
                [36, [8, 'registerPageViewActivityCallback', [15, 'j']]],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
      [
        52,
        '__module_ccdEmSiteSearchActivity',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'b',
                  [46, 'd', 'e'],
                  [52, 'f', [2, [30, [15, 'd'], ''], 'split', [7, ',']]],
                  [
                    53,
                    [41, 'g'],
                    [3, 'g', 0],
                    [
                      63,
                      [7, 'g'],
                      [23, [15, 'g'], [17, [15, 'f'], 'length']],
                      [33, [15, 'g'], [3, 'g', [0, [15, 'g'], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            'h',
                            ['e', [2, [16, [15, 'f'], [15, 'g']], 'trim', [7]]],
                          ],
                          [22, [21, [15, 'h'], [44]], [46, [36, [15, 'h']]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  'c',
                  [46, 'd', 'e', 'f'],
                  [52, 'g', [8, 'search_term', [15, 'd']]],
                  [52, 'h', [2, [30, [15, 'e'], ''], 'split', [7, ',']]],
                  [
                    53,
                    [41, 'i'],
                    [3, 'i', 0],
                    [
                      63,
                      [7, 'i'],
                      [23, [15, 'i'], [17, [15, 'h'], 'length']],
                      [33, [15, 'i'], [3, 'i', [0, [15, 'i'], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            'j',
                            [2, [16, [15, 'h'], [15, 'i']], 'trim', [7]],
                          ],
                          [52, 'k', ['f', [15, 'j']]],
                          [
                            22,
                            [21, [15, 'k'], [44]],
                            [
                              46,
                              [43, [15, 'g'], [0, 'q_', [15, 'j']], [15, 'k']],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, 'g']],
                ],
                [
                  36,
                  [
                    8,
                    'getSearchTerm',
                    [15, 'b'],
                    'buildEventParams',
                    [15, 'c'],
                  ],
                ],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
      [
        52,
        '__module_ccdEmScrollActivity',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'h',
                  [46, 'i', 'j'],
                  [
                    'c',
                    [15, 'i'],
                    [
                      51,
                      '',
                      [7, 'k'],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, 'k'], 'getEventName', [7]], [15, 'f']],
                          [28, [2, [15, 'k'], 'getMetadata', [7, [15, 'g']]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ['b', [15, 'i'], [15, 'e']],
                        [46, [2, [15, 'k'], 'abort', [7]], [36]],
                      ],
                      [2, [15, 'k'], 'setMetadata', [7, [15, 'd'], false]],
                      [
                        22,
                        [28, [15, 'j']],
                        [
                          46,
                          [
                            2,
                            [15, 'k'],
                            'setHitData',
                            [7, 'percent_scrolled', [44]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, 'b', ['require', 'internal.getProductSettingsParameter']],
                [52, 'c', ['require', 'internal.registerCcdCallback']],
                [52, 'd', 'speculative'],
                [52, 'e', 'ae_block_scroll'],
                [52, 'f', 'scroll'],
                [52, 'g', 'em_event'],
                [36, [8, 'registerScrollActivityCallback', [15, 'h']]],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
      [
        52,
        '__module_ccdEmVideoActivity',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'j',
                  [46, 'k', 'l'],
                  [
                    'c',
                    [15, 'k'],
                    [
                      51,
                      '',
                      [7, 'm'],
                      [52, 'n', [2, [15, 'm'], 'getEventName', [7]]],
                      [
                        52,
                        'o',
                        [
                          30,
                          [
                            30,
                            [20, [15, 'n'], [15, 'f']],
                            [20, [15, 'n'], [15, 'g']],
                          ],
                          [20, [15, 'n'], [15, 'h']],
                        ],
                      ],
                      [
                        22,
                        [
                          30,
                          [28, [15, 'o']],
                          [28, [2, [15, 'm'], 'getMetadata', [7, [15, 'i']]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ['b', [15, 'k'], [15, 'e']],
                        [46, [2, [15, 'm'], 'abort', [7]], [36]],
                      ],
                      [2, [15, 'm'], 'setMetadata', [7, [15, 'd'], false]],
                      [
                        22,
                        [28, [15, 'l']],
                        [
                          46,
                          [
                            2,
                            [15, 'm'],
                            'setHitData',
                            [7, 'video_current_time', [44]],
                          ],
                          [
                            2,
                            [15, 'm'],
                            'setHitData',
                            [7, 'video_duration', [44]],
                          ],
                          [
                            2,
                            [15, 'm'],
                            'setHitData',
                            [7, 'video_percent', [44]],
                          ],
                          [
                            2,
                            [15, 'm'],
                            'setHitData',
                            [7, 'video_provider', [44]],
                          ],
                          [
                            2,
                            [15, 'm'],
                            'setHitData',
                            [7, 'video_title', [44]],
                          ],
                          [2, [15, 'm'], 'setHitData', [7, 'video_url', [44]]],
                          [2, [15, 'm'], 'setHitData', [7, 'visible', [44]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, 'b', ['require', 'internal.getProductSettingsParameter']],
                [52, 'c', ['require', 'internal.registerCcdCallback']],
                [52, 'd', 'speculative'],
                [52, 'e', 'ae_block_video'],
                [52, 'f', 'video_start'],
                [52, 'g', 'video_progress'],
                [52, 'h', 'video_complete'],
                [52, 'i', 'em_event'],
                [36, [8, 'registerVideoActivityCallback', [15, 'j']]],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
      [
        52,
        '__module_ccdGaRegionScopedSettings',
        [
          13,
          [41, '$0'],
          [
            3,
            '$0',
            [
              51,
              '',
              [7],
              [
                50,
                'a',
                [46],
                [
                  50,
                  'j',
                  [46, 'l', 'm'],
                  [
                    50,
                    'r',
                    [46, 's'],
                    [
                      22,
                      [30, [28, [15, 'p']], [21, [17, [15, 'p'], 'length'], 2]],
                      [46, [36, false]],
                    ],
                    [52, 't', ['k', [15, 's']]],
                    [
                      53,
                      [41, 'u'],
                      [3, 'u', 0],
                      [
                        63,
                        [7, 'u'],
                        [23, [15, 'u'], [17, [15, 't'], 'length']],
                        [33, [15, 'u'], [3, 'u', [0, [15, 'u'], 1]]],
                        [
                          46,
                          [
                            53,
                            [52, 'v', [16, [15, 't'], [15, 'u']]],
                            [52, 'w', [17, [15, 'v'], 'countryCode']],
                            [52, 'x', [17, [15, 'v'], 'regionCode']],
                            [52, 'y', [20, [15, 'w'], [15, 'p']]],
                            [
                              52,
                              'z',
                              [30, [28, [15, 'x']], [20, [15, 'x'], [15, 'q']]],
                            ],
                            [22, [1, [15, 'y'], [15, 'z']], [46, [36, true]]],
                          ],
                        ],
                      ],
                    ],
                    [36, false],
                  ],
                  [22, [28, [17, [15, 'l'], 'settingsTable']], [46, [36]]],
                  [
                    52,
                    'n',
                    [
                      30,
                      [17, [15, 'l'], 'instanceDestinationId'],
                      [17, ['b'], 'containerId'],
                    ],
                  ],
                  [52, 'o', ['g', [15, 'c'], [15, 'm']]],
                  [
                    52,
                    'p',
                    [
                      13,
                      [41, '$0'],
                      [3, '$0', ['g', [15, 'd'], [15, 'm']]],
                      ['$0'],
                    ],
                  ],
                  [
                    52,
                    'q',
                    [
                      13,
                      [41, '$0'],
                      [3, '$0', ['g', [15, 'e'], [15, 'm']]],
                      ['$0'],
                    ],
                  ],
                  [
                    53,
                    [41, 's'],
                    [3, 's', 0],
                    [
                      63,
                      [7, 's'],
                      [
                        23,
                        [15, 's'],
                        [17, [17, [15, 'l'], 'settingsTable'], 'length'],
                      ],
                      [33, [15, 's'], [3, 's', [0, [15, 's'], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            't',
                            [16, [17, [15, 'l'], 'settingsTable'], [15, 's']],
                          ],
                          [
                            22,
                            [
                              30,
                              [17, [15, 't'], 'disallowAllRegions'],
                              ['r', [17, [15, 't'], 'disallowedRegions']],
                            ],
                            [
                              46,
                              [
                                53,
                                [
                                  52,
                                  'u',
                                  [
                                    16,
                                    [15, 'i'],
                                    [17, [15, 't'], 'redactFieldGroup'],
                                  ],
                                ],
                                [22, [28, [15, 'u']], [46, [6]]],
                                [
                                  53,
                                  [41, 'v'],
                                  [3, 'v', 0],
                                  [
                                    63,
                                    [7, 'v'],
                                    [23, [15, 'v'], [17, [15, 'u'], 'length']],
                                    [
                                      33,
                                      [15, 'v'],
                                      [3, 'v', [0, [15, 'v'], 1]],
                                    ],
                                    [
                                      46,
                                      [
                                        53,
                                        [52, 'w', [16, [15, 'u'], [15, 'v']]],
                                        [
                                          'o',
                                          [15, 'n'],
                                          [17, [15, 'w'], 'name'],
                                          [17, [15, 'w'], 'value'],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  'k',
                  [46, 'l'],
                  [52, 'm', [7]],
                  [22, [28, [15, 'l']], [46, [36, [15, 'm']]]],
                  [52, 'n', [2, [15, 'l'], 'split', [7, ',']]],
                  [
                    53,
                    [41, 'o'],
                    [3, 'o', 0],
                    [
                      63,
                      [7, 'o'],
                      [23, [15, 'o'], [17, [15, 'n'], 'length']],
                      [33, [15, 'o'], [3, 'o', [0, [15, 'o'], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            'p',
                            [2, [16, [15, 'n'], [15, 'o']], 'trim', [7]],
                          ],
                          [22, [28, [15, 'p']], [46, [6]]],
                          [52, 'q', [2, [15, 'p'], 'split', [7, '-']]],
                          [52, 'r', [16, [15, 'q'], 0]],
                          [
                            52,
                            's',
                            [
                              39,
                              [20, [17, [15, 'q'], 'length'], 2],
                              [15, 'p'],
                              [44],
                            ],
                          ],
                          [
                            22,
                            [
                              30,
                              [28, [15, 'r']],
                              [21, [17, [15, 'r'], 'length'], 2],
                            ],
                            [46, [6]],
                          ],
                          [
                            22,
                            [
                              1,
                              [21, [15, 's'], [44]],
                              [
                                30,
                                [23, [17, [15, 's'], 'length'], 4],
                                [18, [17, [15, 's'], 'length'], 6],
                              ],
                            ],
                            [46, [6]],
                          ],
                          [
                            2,
                            [15, 'm'],
                            'push',
                            [
                              7,
                              [
                                8,
                                'countryCode',
                                [15, 'r'],
                                'regionCode',
                                [15, 's'],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, 'm']],
                ],
                [52, 'b', ['require', 'getContainerVersion']],
                [52, 'c', ['require', 'internal.setRemoteConfigParameter']],
                [52, 'd', ['require', 'internal.getCountryCode']],
                [52, 'e', ['require', 'internal.getRegionCode']],
                [52, 'f', [15, '__module_activities']],
                [52, 'g', [17, [15, 'f'], 'withRequestContext']],
                [41, 'h'],
                [
                  52,
                  'i',
                  [
                    8,
                    'GOOGLE_SIGNALS',
                    [7, [8, 'name', 'allow_google_signals', 'value', false]],
                    'DEVICE_AND_GEO',
                    [
                      7,
                      [8, 'name', 'geo_granularity', 'value', true],
                      [8, 'name', 'redact_device_info', 'value', true],
                    ],
                  ],
                ],
                [36, [8, 'applyRegionScopedSettings', [15, 'j']]],
              ],
              [36, ['a']],
            ],
          ],
          ['$0'],
        ],
      ],
    ],
    entities: {
      __ccd_conversion_marking: { 2: true, 4: true },
      __ccd_em_download: { 2: true, 4: true },
      __ccd_em_outbound_click: { 2: true, 4: true },
      __ccd_em_page_view: { 2: true, 4: true },
      __ccd_em_scroll: { 2: true, 4: true },
      __ccd_em_site_search: { 2: true, 4: true },
      __ccd_em_video: { 2: true, 4: true },
      __ccd_ga_regscope: { 2: true, 4: true },
      __ogt_google_signals: { 2: true, 4: true },
      __set_product_settings: { 2: true, 4: true },
    },
    permissions: {
      __ccd_conversion_marking: {},
      __ccd_em_download: {
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.linkClick'],
        },
        access_template_storage: {},
        detect_link_click_events: { allowWaitForTags: '' },
      },
      __ccd_em_outbound_click: {
        get_url: { urlParts: 'any', queriesAllowed: 'any' },
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.linkClick'],
        },
        access_template_storage: {},
        detect_link_click_events: { allowWaitForTags: '' },
      },
      __ccd_em_page_view: {
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.historyChange-v2'],
        },
        access_template_storage: {},
        detect_history_change_events: {},
      },
      __ccd_em_scroll: {
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.scrollDepth'],
        },
        process_dom_events: {
          targets: [
            { targetType: 'window', eventName: 'resize' },
            { targetType: 'window', eventName: 'scroll' },
            { targetType: 'window', eventName: 'scrollend' },
          ],
        },
        access_template_storage: {},
        detect_scroll_events: {},
      },
      __ccd_em_site_search: {
        get_url: { urlParts: 'any', queriesAllowed: 'any' },
        read_container_data: {},
      },
      __ccd_em_video: {
        listen_data_layer: {
          accessType: 'specific',
          allowedEvents: ['gtm.video'],
        },
        access_template_storage: {},
        detect_youtube_activity_events: { allowFixMissingJavaScriptApi: false },
      },
      __ccd_ga_regscope: { read_container_data: {} },
      __ogt_google_signals: { read_container_data: {} },
      __set_product_settings: {},
    },

    security_groups: {
      google: [
        '__ccd_conversion_marking',
        '__ccd_em_download',
        '__ccd_em_outbound_click',
        '__ccd_em_page_view',
        '__ccd_em_scroll',
        '__ccd_em_site_search',
        '__ccd_em_video',
        '__ccd_ga_regscope',
        '__ogt_google_signals',
        '__set_product_settings',
      ],
    },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da = function (a) {
      return (a.raw = a);
    },
    ea = function (a, b) {
      a.raw = b;
      return a;
    },
    fa = function (a) {
      var b =
        'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ('number' == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + ' is not an iterable or ArrayLike');
    },
    ha = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ka = function (a) {
      return a instanceof Array ? a : ha(fa(a));
    },
    la =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if ('function' == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        qa = {};
      try {
        qa.__proto__ = oa;
        na = qa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var ra = ma,
    sa = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (ra) ra(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.oo = b.prototype;
    },
    ta = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ua = this || self,
    va = function (a) {
      return a;
    };
  var wa = function (a, b) {
    this.h = a;
    this.s = b;
  };
  var xa = function () {
    this.h = {};
    this.C = {};
  };
  aa = xa.prototype;
  aa.get = function (a) {
    return this.h['dust.' + a];
  };
  aa.set = function (a, b) {
    a = 'dust.' + a;
    this.C.hasOwnProperty(a) || (this.h[a] = b);
  };
  aa.ei = function (a, b) {
    this.set(a, b);
    this.C['dust.' + a] = !0;
  };
  aa.has = function (a) {
    return this.h.hasOwnProperty('dust.' + a);
  };
  aa.remove = function (a) {
    a = 'dust.' + a;
    this.C.hasOwnProperty(a) || delete this.h[a];
  };
  var ya = function () {
    this.quota = {};
  };
  ya.prototype.reset = function () {
    this.quota = {};
  };
  var za = function (a, b) {
    this.W = a;
    this.M = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.s = new xa();
    this.h = this.F = void 0;
  };
  za.prototype.add = function (a, b) {
    Aa(this, a, b, !1);
  };
  var Aa = function (a, b, c, d) {
    d ? a.s.ei(b, c) : a.s.set(b, c);
  };
  za.prototype.set = function (a, b) {
    !this.s.has(a) && this.C && this.C.has(a)
      ? this.C.set(a, b)
      : this.s.set(a, b);
  };
  za.prototype.get = function (a) {
    return this.s.has(a) ? this.s.get(a) : this.C ? this.C.get(a) : void 0;
  };
  za.prototype.has = function (a) {
    return !!this.s.has(a) || !(!this.C || !this.C.has(a));
  };
  var Ba = function (a) {
    var b = new za(a.W, a);
    a.F && (b.F = a.F);
    b.M = a.M;
    b.h = a.h;
    return b;
  };
  var Ea = function () {},
    Fa = function (a) {
      return 'function' === typeof a;
    },
    k = function (a) {
      return 'string' === typeof a;
    },
    Ga = function (a) {
      return 'number' === typeof a && !isNaN(a);
    },
    Ha = Array.isArray,
    Ia = function (a, b) {
      if (a && Ha(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ja = function (a, b) {
      if (!Ga(a) || !Ga(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    La = function (a, b) {
      for (var c = new Ka(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ma = function (a) {
      return (
        !!a &&
        ('[object Arguments]' === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, 'callee'))
      );
    },
    Na = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Oa = function (a) {
      return 'false' === String(a).toLowerCase() ? !1 : !!a;
    },
    Qa = function (a) {
      var b = [];
      if (Ha(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ra = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : '';
    },
    Sa = function () {
      return new Date(Date.now());
    },
    Ta = function () {
      return Sa().getTime();
    },
    Ka = function () {
      this.prefix = 'gtm.';
      this.values = {};
    };
  Ka.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ka.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ua = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Va = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Wa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Za = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    $a = function (a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    ab = /^\w{1,9}$/,
    bb = function (a, b) {
      a = a || {};
      b = b || ',';
      var c = [];
      l(a, function (d, e) {
        ab.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    cb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function db(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = eb(a, b[d])), c instanceof wa);
      d++
    );
    return c;
  }
  function eb(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || 'function' !== typeof c.invoke)
        throw Error('Attempting to execute non-function ' + b[0] + '.');
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.F;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var fb = function () {
    this.C = new ya();
    this.h = new za(this.C);
  };
  fb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.s(c);
  };
  fb.prototype.s = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = eb(this.h, arguments[c]);
    return b;
  };
  fb.prototype.F = function (a, b) {
    var c = Ba(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = eb(c, arguments[e]);
    return d;
  };
  var gb = function () {
    xa.call(this);
    this.s = !1;
  };
  sa(gb, xa);
  var hb = function (a, b) {
    var c = [],
      d;
    for (d in a.h)
      if (a.h.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  gb.prototype.set = function (a, b) {
    this.s || xa.prototype.set.call(this, a, b);
  };
  gb.prototype.ei = function (a, b) {
    this.s || xa.prototype.ei.call(this, a, b);
  };
  gb.prototype.remove = function (a) {
    this.s || xa.prototype.remove.call(this, a);
  };
  gb.prototype.Ib = function () {
    this.s = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    jb = function (a) {
      if (null == a) return String(a);
      var b = ib.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : 'object';
    },
    kb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    mb = function (a) {
      if (!a || 'object' != jb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !kb(a, 'constructor') &&
          !kb(a.constructor.prototype, 'isPrototypeOf')
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || kb(a, b);
    },
    nb = function (a, b) {
      var c = b || ('array' == jb(a) ? [] : {}),
        d;
      for (d in a)
        if (kb(a, d)) {
          var e = a[d];
          'array' == jb(e)
            ? ('array' != jb(c[d]) && (c[d] = []), (c[d] = nb(e, c[d])))
            : mb(e)
            ? (mb(c[d]) || (c[d] = {}), (c[d] = nb(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var ob = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    pb = function (a) {
      if (void 0 == a || Ha(a) || mb(a)) return !0;
      switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'function':
          return !0;
      }
      return !1;
    },
    qb = function (a) {
      return (
        ('number' === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ('string' === typeof a && '-' !== a[0] && a === '' + parseInt(a, 10))
      );
    };
  var rb = function (a) {
    this.s = new gb();
    this.h = [];
    this.C = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (qb(b) ? (this.h[Number(b)] = a[Number(b)]) : this.s.set(b, a[b]));
  };
  aa = rb.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return '';
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push('')
        : d instanceof rb
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(',');
  };
  aa.set = function (a, b) {
    if (!this.C)
      if ('length' === a) {
        if (!qb(b))
          throw Error('RangeError: Length property must be a valid integer.');
        this.h.length = Number(b);
      } else qb(a) ? (this.h[Number(a)] = b) : this.s.set(a, b);
  };
  aa.get = function (a) {
    return 'length' === a
      ? this.length()
      : qb(a)
      ? this.h[Number(a)]
      : this.s.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Zb = function () {
    for (var a = hb(this.s, 1), b = 0; b < this.h.length; b++) a.push(b + '');
    return new rb(a);
  };
  aa.remove = function (a) {
    qb(a) ? delete this.h[Number(a)] : this.s.remove(a);
  };
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new rb(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (qb(a) && this.h.hasOwnProperty(a)) || this.s.has(a);
  };
  aa.Ib = function () {
    this.C = !0;
    Object.freeze(this.h);
    this.s.Ib();
  };
  var sb = function () {
    gb.call(this);
  };
  sa(sb, gb);
  sb.prototype.Zb = function () {
    return new rb(hb(this, 1));
  };
  function tb() {
    for (var a = ub, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function vb() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a += a.toLowerCase() + '0123456789-_';
    return a + '.';
  }
  var ub, wb;
  function xb(a) {
    ub = ub || vb();
    wb = wb || tb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(ub[m], ub[n], ub[p], ub[q]);
    }
    return b.join('');
  }
  function yb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = wb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error('Unknown base64 encoding at char: ' + n);
      }
      return m;
    }
    ub = ub || vb();
    wb = wb || tb();
    for (var c = '', d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var zb = {},
    Ab = function (a, b) {
      zb[a] = zb[a] || [];
      zb[a][b] = !0;
    },
    Bb = function () {
      delete zb.GA4_EVENT;
    },
    Cb = function (a) {
      var b = zb[a];
      if (!b || 0 === b.length) return '';
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return xb(c.join('')).replace(/\.+$/, '');
    };
  var Db = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ('string' === typeof a)
          return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var Eb,
    Fb = function () {
      if (void 0 === Eb) {
        var a = null,
          b = ua.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: va,
              createScript: va,
              createScriptURL: va,
            });
          } catch (c) {
            ua.console && ua.console.error(c.message);
          }
          Eb = a;
        } else Eb = a;
      }
      return Eb;
    };
  var Gb = function (a) {
    this.h = a;
  };
  Gb.prototype.toString = function () {
    return this.h + '';
  };
  var Hb = function (a) {
      return a instanceof Gb && a.constructor === Gb
        ? a.h
        : 'type_error:TrustedResourceUrl';
    },
    Ib = {},
    Jb = function (a) {
      var b = a,
        c = Fb(),
        d = c ? c.createScriptURL(b) : b;
      return new Gb(d, Ib);
    };
  var Kb = function (a) {
    this.h = a;
  };
  Kb.prototype.toString = function () {
    return this.h.toString();
  };
  var Lb = function (a) {
      return a instanceof Kb && a.constructor === Kb
        ? a.h
        : 'type_error:SafeUrl';
    },
    Mb = {},
    Nb = new Kb('about:invalid#zClosurez', Mb);
  var Ob, Pb;
  a: {
    for (var Qb = ['CLOSURE_FLAGS'], Rb = ua, Sb = 0; Sb < Qb.length; Sb++)
      if (((Rb = Rb[Qb[Sb]]), null == Rb)) {
        Pb = null;
        break a;
      }
    Pb = Rb;
  }
  var Tb = Pb && Pb[610401301];
  Ob = null != Tb ? Tb : !1;
  function Ub() {
    var a = ua.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return '';
  }
  var Vb,
    Wb = ua.navigator;
  Vb = Wb ? Wb.userAgentData || null : null;
  function Xb(a) {
    return Ob
      ? Vb
        ? Vb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Yb(a) {
    return -1 != Ub().indexOf(a);
  }
  function Zb() {
    return Ob ? !!Vb && 0 < Vb.brands.length : !1;
  }
  function $b() {
    return Zb() ? !1 : Yb('Opera');
  }
  function ac() {
    return Yb('Firefox') || Yb('FxiOS');
  }
  function bc() {
    return Zb()
      ? Xb('Chromium')
      : ((Yb('Chrome') || Yb('CriOS')) && !(Zb() ? 0 : Yb('Edge'))) ||
          Yb('Silk');
  }
  var cc = {},
    dc = function (a) {
      this.h = a;
    };
  dc.prototype.toString = function () {
    return this.h.toString();
  };
  var ec = function (a) {
    return a instanceof dc && a.constructor === dc
      ? a.h
      : 'type_error:SafeHtml';
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var fc = da(['']),
    gc = ea(['\x00'], ['\\0']),
    hc = ea(['\n'], ['\\n']),
    ic = ea(['\x00'], ['\\u0000']);
  function jc(a) {
    return -1 === a.toString().indexOf('`');
  }
  jc(function (a) {
    return a(fc);
  }) ||
    jc(function (a) {
      return a(gc);
    }) ||
    jc(function (a) {
      return a(hc);
    }) ||
    jc(function (a) {
      return a(ic);
    });
  var kc = function (a) {
    this.Am = a;
  };
  function lc(a) {
    return new kc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ':';
    });
  }
  var mc = [
    lc('data'),
    lc('http'),
    lc('https'),
    lc('mailto'),
    lc('ftp'),
    new kc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function nc(a, b) {
    b = void 0 === b ? mc : b;
    if (a instanceof Kb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof kc && d.Am(a)) return new Kb(a, Mb);
    }
  }
  function oc(a) {
    var b;
    b = void 0 === b ? mc : b;
    return nc(a, b) || Nb;
  }
  var pc = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
  function qc(a) {
    if (pc.test(a)) return a;
  }
  var rc = {};
  var sc = function () {},
    tc = function (a) {
      this.h = a;
    };
  sa(tc, sc);
  tc.prototype.toString = function () {
    return this.h;
  };
  function uc(a, b) {
    var c = [new tc(vc[0].toLowerCase(), rc)];
    if (0 === c.length) throw Error('');
    var d = c.map(function (f) {
        var g;
        if (f instanceof tc) g = f.h;
        else throw Error('');
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.',
      );
    a.setAttribute(b, 'true');
  }
  function wc(a) {
    var b = a.tagName;
    if ('SCRIPT' === b || 'STYLE' === b) throw Error('');
  }
  function yc(a, b) {
    var c = b instanceof Kb ? Lb(b) : qc(b);
    void 0 !== c && (a.action = c);
  }
  function zc(a) {
    var b = (a = Ac(a)),
      c = Fb(),
      d = c ? c.createHTML(b) : b;
    return new dc(d, cc);
  }
  function Ac(a) {
    return null === a ? 'null' : void 0 === a ? 'undefined' : a;
  }
  var z = window,
    C = document,
    Bc = navigator,
    Cc = C.currentScript && C.currentScript.src,
    Dc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Ec = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Fc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Gc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Hc(a, b, c) {
    b &&
      l(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Ic = function (a, b, c, d, e) {
      var f = C.createElement('script');
      Hc(f, d, Fc);
      f.type = 'text/javascript';
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Jb(Ac(a));
      f.src = Hb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, 'script[nonce]');
      (h = p ? p.nonce || p.getAttribute('nonce') || '' : '') &&
        f.setAttribute('nonce', h);
      Ec(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = C.getElementsByTagName('script')[0] || C.body || C.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Jc = function () {
      if (Cc) {
        var a = Cc.toLowerCase();
        if (0 === a.indexOf('https://')) return 2;
        if (0 === a.indexOf('http://')) return 3;
      }
      return 1;
    },
    Kc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = C.createElement('iframe')), (h = !0));
      Hc(g, c, Gc);
      d &&
        l(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = '0'),
        (g.width = '0'),
        (g.style.display = 'none'),
        (g.style.visibility = 'hidden'));
      if (h) {
        var m = (C.body && C.body.lastChild) || C.body || C.head;
        m.parentNode.insertBefore(g, m);
      }
      Ec(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Lc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Hc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Mc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    },
    Nc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c);
    },
    H = function (a) {
      z.setTimeout(a, 0);
    },
    Oc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Pc = function (a) {
      var b = a.innerText || a.textContent || '';
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
      return b;
    },
    Qc = function (a) {
      var b = C.createElement('div'),
        c = b,
        d = zc('A<div>' + a + '</div>');
      1 === c.nodeType && wc(c);
      c.innerHTML = ec(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Rc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Sc = function (a) {
      var b;
      try {
        b = Bc.sendBeacon && Bc.sendBeacon(a);
      } catch (c) {
        Ab('TAGGING', 15);
      }
      b || Lc(a);
    },
    Tc = function (a, b) {
      var c = a[b];
      c && 'string' === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Uc = function () {
      var a = z.performance;
      if (a && Fa(a.now)) return a.now();
    },
    Vc = function () {
      return z.performance || void 0;
    };
  var Wc = function (a, b) {
      return I(this, a) && I(this, b);
    },
    Xc = function (a, b) {
      return I(this, a) === I(this, b);
    },
    Yc = function (a, b) {
      return I(this, a) || I(this, b);
    },
    Zc = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    $c = function (a, b) {
      a = String(I(this, a));
      b = String(I(this, b));
      return a.substring(0, b.length) === b;
    },
    ad = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      switch (a) {
        case 'pageLocation':
          var c = z.location.href;
          b instanceof sb &&
            b.get('stripProtocol') &&
            (c = c.replace(/^https?:\/\//, ''));
          return c;
      }
    };
  var bd = function (a, b) {
    gb.call(this);
    this.F = a;
    this.M = b;
  };
  sa(bd, gb);
  bd.prototype.toString = function () {
    return this.F;
  };
  bd.prototype.Zb = function () {
    return new rb(hb(this, 1));
  };
  bd.prototype.invoke = function (a, b) {
    return this.M.apply(
      new cd(this, a),
      Array.prototype.slice.call(arguments, 1),
    );
  };
  bd.prototype.eb = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var cd = function (a, b) {
      this.s = a;
      this.h = b;
    },
    I = function (a, b) {
      var c = a.h;
      return Ha(b) ? eb(c, b) : b;
    },
    J = function (a) {
      return a.s.F;
    };
  var dd = function () {
    this.map = new Map();
  };
  dd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  dd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var ed = function () {
    this.keys = [];
    this.values = [];
  };
  ed.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  ed.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function fd() {
    try {
      return Map ? new dd() : new ed();
    } catch (a) {
      return new ed();
    }
  }
  var gd = function (a) {
    if (a instanceof gd) return a;
    if (pb(a)) throw Error('Type of given value has an equivalent Pixie type.');
    this.h = a;
  };
  gd.prototype.toString = function () {
    return String(this.h);
  };
  var id = function (a) {
    gb.call(this);
    this.F = a;
    this.set('then', hd(this));
    this.set('catch', hd(this, !0));
    this.set('finally', hd(this, !1, !0));
  };
  sa(id, sb);
  var hd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new bd('', function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof bd || (d = void 0);
      e instanceof bd || (e = void 0);
      var f = Ba(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.F) : m.invoke(f, n);
          };
        },
        h = a.F.then(d && g(d), e && g(e));
      return new id(h);
    });
  };
  var kd = function (a, b, c) {
      var d = fd(),
        e = function (g, h) {
          for (var m = hb(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof rb) {
            var m = [];
            d.set(g, m);
            for (var n = g.Zb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof id) return g.F;
          if (g instanceof sb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof bd) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = jd(u[v], b, c);
              var w = new za(b ? b.W : new ya());
              b && (w.h = b.h);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof gd && t) return g.h;
          switch (typeof g) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
              return g;
            case 'object':
              if (null === g) return null;
          }
        };
      return f(a);
    },
    jd = function (a, b, c) {
      var d = fd(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Ha(g) || Ma(g)) {
            var m = new rb([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (mb(g)) {
            var p = new sb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ('function' === typeof g) {
            var q = new bd('', function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), B = 0;
                B < y.length;
                B++
              )
                y[B] = kd(I(this, y[B]), b, c);
              return f((0, this.h.M)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || 'string' === v || 'number' === v || 'boolean' === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new gd(g);
        };
      return f(a);
    };
  var ld = function () {
    var a = !1;
    return a;
  };
  var md = {
    supportedMethods:
      'concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString'.split(
        ' ',
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof rb)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new rb(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new rb(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new rb(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error('TypeError: Reduce on List with no elements.');
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error('TypeError: Reduce on List with no elements.');
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error('TypeError: ReduceRight on List with no elements.');
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error('TypeError: ReduceRight on List with no elements.');
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = ob(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new rb(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = ob(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1),
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var nd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    'stack' in b && (this.stack = b.stack);
  };
  sa(nd, Error);
  var od = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    pd = new wa('break'),
    qd = new wa('continue'),
    rd = function (a, b) {
      return I(this, a) + I(this, b);
    },
    sd = function (a, b) {
      return I(this, a) && I(this, b);
    },
    td = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (!(c instanceof rb))
        throw Error('Error: Non-List argument given to Apply instruction.');
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + ' of ' + a + '.';
        if (ld()) throw new nd(d);
        throw Error(d);
      }
      var e = 'number' === typeof a;
      if ('boolean' === typeof a || e) {
        if ('toString' === b) {
          if (e && c.length()) {
            var f = kd(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = 'TypeError: ' + a + '.' + b + ' is not a function.';
        if (ld()) throw new nd(g);
        throw Error(g);
      }
      if ('string' === typeof a) {
        if (od.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = kd(c, void 0, h);
          return jd(a[b].apply(a, m), this.h);
        }
        var n = 'TypeError: ' + b + ' is not a function';
        if (ld()) throw new nd(n);
        throw Error(n);
      }
      if (a instanceof rb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof bd) {
            var q = ob(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = 'TypeError: ' + b + ' is not a function';
          if (ld()) throw new nd(r);
          throw Error(r);
        }
        if (0 <= md.supportedMethods.indexOf(b)) {
          var t = ob(c);
          t.unshift(this.h);
          return md[b].apply(a, t);
        }
      }
      if (a instanceof bd || a instanceof sb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof bd) {
            var v = ob(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = 'TypeError: ' + b + ' is not a function';
          if (ld()) throw new nd(w);
          throw Error(w);
        }
        if ('toString' === b) return a instanceof bd ? a.F : a.toString();
        if ('hasOwnProperty' === b) return a.has.apply(a, ob(c));
      }
      if (a instanceof gd && 'toString' === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (ld()) throw new nd(x);
      throw Error(x);
    },
    ud = function (a, b) {
      a = I(this, a);
      if ('string' !== typeof a)
        throw Error('Invalid key name given for assignment.');
      var c = this.h;
      if (!c.has(a))
        throw Error('Attempting to assign to undefined value ' + b);
      var d = I(this, b);
      c.set(a, d);
      return d;
    },
    vd = function (a) {
      var b = Ba(this.h),
        c = db(b, Array.prototype.slice.apply(arguments));
      if (c instanceof wa) return c;
    },
    wd = function () {
      return pd;
    },
    xd = function (a) {
      for (var b = I(this, a), c = 0; c < b.length; c++) {
        var d = I(this, b[c]);
        if (d instanceof wa) return d;
      }
    },
    yd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ('string' === typeof d) {
          var e = I(this, arguments[c + 1]);
          Aa(b, d, e, !0);
        }
      }
    },
    zd = function () {
      return qd;
    },
    Ad = function (a, b) {
      return new wa(a, I(this, b));
    },
    Bd = function (a, b, c) {
      var d = new rb();
      b = I(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2),
      );
      this.h.add(a, I(this, f));
    },
    Dd = function (a, b) {
      return I(this, a) / I(this, b);
    },
    Ed = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      var c = a instanceof gd,
        d = b instanceof gd;
      return c || d ? (c && d ? a.h == b.h : !1) : a == b;
    },
    Fd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = I(this, arguments[c]);
      return b;
    };
  function Gd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = db(f, d);
      if (g instanceof wa) {
        if ('break' === g.h) break;
        if ('return' === g.h) return g;
      }
    }
  }
  function Hd(a, b, c) {
    if ('string' === typeof b)
      return Gd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c,
      );
    if (b instanceof sb || b instanceof rb || b instanceof bd) {
      var d = b.Zb(),
        e = d.length();
      return Gd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c,
      );
    }
  }
  var Id = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Hd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c,
      );
    },
    Jd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Hd(
        function (e) {
          var f = Ba(d);
          Aa(f, a, e, !0);
          return f;
        },
        b,
        c,
      );
    },
    Kd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Hd(
        function (e) {
          var f = Ba(d);
          f.add(a, e);
          return f;
        },
        b,
        c,
      );
    },
    Md = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Ld(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c,
      );
    },
    Nd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Ld(
        function (e) {
          var f = Ba(d);
          Aa(f, a, e, !0);
          return f;
        },
        b,
        c,
      );
    },
    Od = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Ld(
        function (e) {
          var f = Ba(d);
          f.add(a, e);
          return f;
        },
        b,
        c,
      );
    };
  function Ld(a, b, c) {
    if ('string' === typeof b)
      return Gd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c,
      );
    if (b instanceof rb)
      return Gd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c,
      );
    if (ld()) throw new nd('The value is not iterable.');
    throw new TypeError('The value is not iterable.');
  }
  var Pd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = I(this, a);
      if (!(f instanceof rb))
        throw Error(
          'TypeError: Non-List argument given to ForLet instruction.',
        );
      var g = this.h;
      d = I(this, d);
      var h = Ba(g);
      for (e(g, h); eb(h, b); ) {
        var m = db(h, d);
        if (m instanceof wa) {
          if ('break' === m.h) break;
          if ('return' === m.h) return m;
        }
        var n = Ba(g);
        e(h, n);
        eb(n, c);
        h = n;
      }
    },
    Qd = function (a, b, c) {
      var d = this.h,
        e = I(this, b);
      if (!(e instanceof rb))
        throw Error('Error: non-List value given for Fn argument names.');
      var f = Array.prototype.slice.call(arguments, 2);
      return new bd(
        a,
        (function () {
          return function (g) {
            var h = Ba(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = I(this, m[n])), m[n] instanceof wa)) return m[n];
            for (var p = e.get('length'), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add('arguments', new rb(m));
            var r = db(h, f);
            if (r instanceof wa) return 'return' === r.h ? r.s : r;
          };
        })(),
      );
    },
    Rd = function (a) {
      a = I(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + ' is not defined.');
      return b.get(a);
    },
    Sd = function (a, b) {
      var c;
      a = I(this, a);
      b = I(this, b);
      if (void 0 === a || null === a) {
        var d =
          'TypeError: Cannot read properties of ' +
          a +
          " (reading '" +
          b +
          "')";
        if (ld()) throw new nd(d);
        throw Error(d);
      }
      if (a instanceof sb || a instanceof rb || a instanceof bd) c = a.get(b);
      else if ('string' === typeof a)
        'length' === b ? (c = a.length) : qb(b) && (c = a[b]);
      else if (a instanceof gd) return;
      return c;
    },
    Td = function (a, b) {
      return I(this, a) > I(this, b);
    },
    Ud = function (a, b) {
      return I(this, a) >= I(this, b);
    },
    Vd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      a instanceof gd && (a = a.h);
      b instanceof gd && (b = b.h);
      return a === b;
    },
    Wd = function (a, b) {
      return !Vd.call(this, a, b);
    },
    Xd = function (a, b, c) {
      var d = [];
      I(this, a) ? (d = I(this, b)) : c && (d = I(this, c));
      var e = db(this.h, d);
      if (e instanceof wa) return e;
    },
    Yd = function (a, b) {
      return I(this, a) < I(this, b);
    },
    Zd = function (a, b) {
      return I(this, a) <= I(this, b);
    },
    $d = function (a) {
      for (var b = new rb(), c = 0; c < arguments.length; c++) {
        var d = I(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    ae = function (a) {
      for (var b = new sb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = I(this, arguments[c]) + '',
          e = I(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    be = function (a, b) {
      return I(this, a) % I(this, b);
    },
    ce = function (a, b) {
      return I(this, a) * I(this, b);
    },
    de = function (a) {
      return -I(this, a);
    },
    ee = function (a) {
      return !I(this, a);
    },
    fe = function (a, b) {
      return !Ed.call(this, a, b);
    },
    ge = function () {
      return null;
    },
    he = function (a, b) {
      return I(this, a) || I(this, b);
    },
    ie = function (a, b) {
      var c = I(this, a);
      I(this, b);
      return c;
    },
    je = function (a) {
      return I(this, a);
    },
    ke = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    le = function (a) {
      return new wa('return', I(this, a));
    },
    me = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + ' of ' + a + '.';
        if (ld()) throw new nd(d);
        throw Error(d);
      }
      (a instanceof bd || a instanceof rb || a instanceof sb) && a.set(b, c);
      return c;
    },
    ne = function (a, b) {
      return I(this, a) - I(this, b);
    },
    oe = function (a, b, c) {
      a = I(this, a);
      var d = I(this, b),
        e = I(this, c);
      if (!Ha(d) || !Ha(e)) throw Error('Error: Malformed switch instruction.');
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === I(this, d[h]))
          if (((f = I(this, e[h])), f instanceof wa)) {
            var m = f.h;
            if ('break' === m) return;
            if ('return' === m || 'continue' === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = I(this, e[e.length - 1])),
        f instanceof wa && ('return' === f.h || 'continue' === f.h))
      )
        return f;
    },
    pe = function (a, b, c) {
      return I(this, a) ? I(this, b) : I(this, c);
    },
    qe = function (a) {
      a = I(this, a);
      return a instanceof bd ? 'function' : typeof a;
    },
    re = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        'string' !== typeof d || b.add(d, void 0);
      }
    },
    se = function (a, b, c, d) {
      var e = I(this, d);
      if (I(this, c)) {
        var f = db(this.h, e);
        if (f instanceof wa) {
          if ('break' === f.h) return;
          if ('return' === f.h) return f;
        }
      }
      for (; I(this, a); ) {
        var g = db(this.h, e);
        if (g instanceof wa) {
          if ('break' === g.h) break;
          if ('return' === g.h) return g;
        }
        I(this, b);
      }
    },
    te = function (a) {
      return ~Number(I(this, a));
    },
    ue = function (a, b) {
      return Number(I(this, a)) << Number(I(this, b));
    },
    ve = function (a, b) {
      return Number(I(this, a)) >> Number(I(this, b));
    },
    we = function (a, b) {
      return Number(I(this, a)) >>> Number(I(this, b));
    },
    xe = function (a, b) {
      return Number(I(this, a)) & Number(I(this, b));
    },
    ye = function (a, b) {
      return Number(I(this, a)) ^ Number(I(this, b));
    },
    ze = function (a, b) {
      return Number(I(this, a)) | Number(I(this, b));
    },
    Ae = function () {},
    Be = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = I(this, c);
        if (g instanceof wa) return g;
      } catch (r) {
        if (!(r instanceof nd && a)) throw ((f = r instanceof nd), r);
        var h = Ba(this.h),
          m = new gd(r);
        h.add(b, m);
        var n = I(this, d),
          p = db(h, n);
        if (p instanceof wa) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = I(this, e);
          if (q instanceof wa) return q;
        }
      }
    };
  var De = function () {
    this.h = new fb();
    Ce(this);
  };
  De.prototype.execute = function (a) {
    return this.h.s(a);
  };
  var Ce = function (a) {
    var b = function (c, d) {
      var e = new bd(String(c), d);
      e.Ib();
      a.h.h.set(String(c), e);
    };
    b('map', ae);
    b('and', Wc);
    b('contains', Zc);
    b('equals', Xc);
    b('or', Yc);
    b('startsWith', $c);
    b('variable', ad);
  };
  var Fe = function () {
    this.h = new fb();
    Ee(this);
  };
  Fe.prototype.execute = function (a) {
    return Ge(this.h.s(a));
  };
  var He = function (a, b, c) {
      return Ge(a.h.F(b, c));
    },
    Ee = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new bd(e, d);
        f.Ib();
        a.h.h.set(e, f);
      };
      b(0, rd);
      b(1, sd);
      b(2, td);
      b(3, ud);
      b(56, xe);
      b(57, ue);
      b(58, te);
      b(59, ze);
      b(60, ve);
      b(61, we);
      b(62, ye);
      b(53, vd);
      b(4, wd);
      b(5, xd);
      b(52, yd);
      b(6, zd);
      b(49, Ad);
      b(7, $d);
      b(8, ae);
      b(9, xd);
      b(50, Bd);
      b(10, Dd);
      b(12, Ed);
      b(13, Fd);
      b(51, Qd);
      b(47, Id);
      b(54, Jd);
      b(55, Kd);
      b(63, Pd);
      b(64, Md);
      b(65, Nd);
      b(66, Od);
      b(15, Rd);
      b(16, Sd);
      b(17, Sd);
      b(18, Td);
      b(19, Ud);
      b(20, Vd);
      b(21, Wd);
      b(22, Xd);
      b(23, Yd);
      b(24, Zd);
      b(25, be);
      b(26, ce);
      b(27, de);
      b(28, ee);
      b(29, fe);
      b(45, ge);
      b(30, he);
      b(32, ie);
      b(33, ie);
      b(34, je);
      b(35, je);
      b(46, ke);
      b(36, le);
      b(43, me);
      b(37, ne);
      b(38, oe);
      b(39, pe);
      b(67, Be);
      b(40, qe);
      b(44, Ae);
      b(41, re);
      b(42, se);
    };
  function Ge(a) {
    if (
      a instanceof wa ||
      a instanceof bd ||
      a instanceof rb ||
      a instanceof sb ||
      a instanceof gd ||
      null === a ||
      void 0 === a ||
      'string' === typeof a ||
      'number' === typeof a ||
      'boolean' === typeof a
    )
      return a;
  }
  var Ie = function (a) {
    this.message = a;
  };
  function Je(a) {
    var b = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
      a
    ];
    return void 0 === b
      ? new Ie(
          'Value ' + a + ' can not be encoded in web-safe base64 dictionary.',
        )
      : b;
  }
  function Ke(a) {
    switch (a) {
      case 1:
        return '1';
      case 2:
      case 4:
        return '0';
      default:
        return '-';
    }
  }
  var Le = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      uk: a('consent'),
      oi: a('convert_case_to'),
      ri: a('convert_false_to'),
      si: a('convert_null_to'),
      ui: a('convert_true_to'),
      vi: a('convert_undefined_to'),
      Gn: a('debug_mode_metadata'),
      ma: a('function'),
      bh: a('instance_name'),
      al: a('live_only'),
      bl: a('malware_disabled'),
      fl: a('metadata'),
      kl: a('original_activity_id'),
      Un: a('original_vendor_template_id'),
      Tn: a('once_on_load'),
      jl: a('once_per_event'),
      rj: a('once_per_load'),
      Yn: a('priority_override'),
      Zn: a('respected_consent_types'),
      wj: a('setup_tags'),
      xe: a('tag_id'),
      Bj: a('teardown_tags'),
    };
  })();
  var gf;
  var hf = [],
    jf = [],
    kf = [],
    lf = [],
    mf = [],
    nf = {},
    of,
    pf,
    qf = function (a) {
      pf = pf || a;
    },
    rf = function (a) {},
    sf,
    tf = [],
    uf = [],
    vf = function (a, b) {
      var c = {};
      c[Le.ma] = '__' + a;
      for (var d in b) b.hasOwnProperty(d) && (c['vtp_' + d] = b[d]);
      return c;
    },
    wf = function (a, b) {
      var c = a[Le.ma],
        d = b && b.event;
      if (!c) throw Error('Error: No function name given for function call.');
      var e = nf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== tf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf('vtp_') &&
          (e && (g[m] = a[m]), !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = '';
            else {
              var r;
              switch (p) {
                case 2:
                  r = hf[q];
                  break;
                case 1:
                  r = lf[q];
                  break;
                default:
                  n = '';
                  break a;
              }
              var t = r && r[Le.bh];
              n = t ? String(t) : '';
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && -1 === uf.indexOf(c)) {
        uf.push(c);
        var x = Ta();
        u = e(g);
        var y = Ta() - x,
          B = Ta();
        v = gf(c, h, b);
        w = y - (Ta() - B);
      } else if ((e && (u = e(g)), !e || f)) v = gf(c, h, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        pb(u)
          ? (Ha(u) ? Ha(v) : mb(u) ? mb(v) : u === v) ||
            d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    },
    yf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
      return d;
    },
    xf = function (a, b, c) {
      if (Ha(a)) {
        var d;
        switch (a[0]) {
          case 'function_id':
            return a[1];
          case 'list':
            d = [];
            for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
            return d;
          case 'macro':
            var f = a[1];
            if (c[f]) return;
            var g = hf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Le.bh]);
            try {
              var m = yf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = wf(m, { event: b, index: f, type: 2, name: h });
              sf && (d = sf.Gl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case 'map':
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
            return d;
          case 'template':
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = xf(a[q], b, c);
              pf && (p = p || pf.xm(r));
              d.push(r);
            }
            return pf && p ? pf.Il(d) : d.join('');
          case 'escape':
            d = xf(a[1], b, c);
            if (pf && Ha(a[1]) && 'macro' === a[1][0] && pf.ym(a))
              return pf.Xm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Me[a[t]] && (d = Me[a[t]](d));
            return d;
          case 'tag':
            var u = a[1];
            if (!lf[u])
              throw Error('Unable to resolve tag reference ' + u + '.');
            return (d = { Lj: a[2], index: u });
          case 'zb':
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Le.ma] = a[1];
            var w = zf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              'Attempting to expand unknown Value type: ' + a[0] + '.',
            );
        }
      }
      return a;
    },
    zf = function (a, b, c) {
      try {
        return of(yf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Af = function (a) {
      var b = a[Le.ma];
      if (!b) throw Error('Error: No function name given for function call.');
      return !!nf[b];
    };
  var Bf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    'stack' in d && (this.stack = d.stack);
    this.h = a;
  };
  sa(Bf, Error);
  function Cf(a, b) {
    if (Ha(a)) {
      Object.defineProperty(a, 'context', { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Cf(a[c], b[c]);
    }
  }
  var Df = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    'stack' in c && (this.stack = c.stack);
    this.Sm = a;
    this.s = b;
    this.h = [];
  };
  sa(Df, Error);
  var Ff = function () {
    return function (a, b) {
      a instanceof Df || (a = new Df(a, Ef));
      b && a.h.push(b);
      throw a;
    };
  };
  function Ef(a) {
    if (!a.length) return a;
    a.push({ id: 'main', line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var If = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Gf(a), f = 0; f < jf.length; f++) {
        var g = jf[f],
          h = Hf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < lf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Hf = function (a, b) {
      for (var c = a['if'] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Gf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = zf(kf[c], a));
        return b[c];
      };
    };
  var Jf = {
    Gl: function (a, b) {
      b[Le.oi] &&
        'string' === typeof a &&
        (a = 1 == b[Le.oi] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Le.si) && null === a && (a = b[Le.si]);
      b.hasOwnProperty(Le.vi) && void 0 === a && (a = b[Le.vi]);
      b.hasOwnProperty(Le.ui) && !0 === a && (a = b[Le.ui]);
      b.hasOwnProperty(Le.ri) && !1 === a && (a = b[Le.ri]);
      return a;
    },
  };
  var Kf = function () {
      this.h = {};
    },
    Mf = function (a, b) {
      var c = Lf.s,
        d;
      null != (d = c.h)[a] || (d[a] = []);
      c.h[a].push(function () {
        return b.apply(null, ka(ta.apply(0, arguments)));
      });
    };
  function Nf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = 'A policy function denied the permission request';
        try {
          (f = a[e](b, c, d)), (g += '.');
        } catch (h) {
          g =
            'string' === typeof h
              ? g + (': ' + h)
              : h instanceof Error
              ? g + (': ' + h.message)
              : g + '.';
        }
        if (!f) throw new Bf(c, d, g);
      }
  }
  function Of(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Nf(e, b, d, g);
          Nf(f, b, d, g);
        }
      }
    };
  }
  var Pf = [],
    Qf = {},
    Rf = function (a) {
      return void 0 == Pf[a] ? !1 : Pf[a];
    };
  var Vf = function () {
      var a = data.permissions || {},
        b = Sf.ctid,
        c = this;
      this.s = new Kf();
      this.h = {};
      var d = Rf(15),
        e = {},
        f = {},
        g = Of(this.s, b, function () {
          var h = arguments[0];
          return h && e[h]
            ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      l(a, function (h, m) {
        var n = {};
        l(m, function (q, r) {
          var t = Tf(q, r);
          n[q] = t.assert;
          e[q] || (e[q] = t.K);
          d && t.Ej && !f[q] && (f[q] = t.Ej);
        });
        var p;
        d &&
          (p = function (q) {
            var r = ta.apply(1, arguments);
            if (!n[q])
              throw Uf(
                q,
                {},
                'The requested additional permission ' +
                  q +
                  ' is not configured.',
              );
            g.apply(null, [q].concat(ka(r)));
          });
        c.h[h] = function (q, r) {
          var t = n[q];
          if (!t)
            throw Uf(
              q,
              {},
              'The requested permission ' + q + ' is not configured.',
            );
          var u = Array.prototype.slice.call(arguments, 0);
          t.apply(void 0, u);
          g.apply(void 0, u);
          if (d) {
            var v = f[q];
            v && v.apply(null, [p].concat(ka(u.slice(1))));
          }
        };
      });
    },
    Wf = function (a) {
      return Lf.h[a] || function () {};
    };
  function Tf(a, b) {
    var c = vf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Uf;
    try {
      return wf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Bf(e, {}, 'Permission ' + e + ' is unknown.');
        },
        K: function () {
          if (Rf(15)) throw new Bf(a, {}, 'Permission ' + a + ' is unknown.');
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e['arg' + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Uf(a, b, c) {
    return new Bf(a, b, c);
  }
  var Xf = !1;
  var Yf = {};
  Yf.zn = Oa('');
  Yf.Kl = Oa('');
  var Zf = Xf,
    $f = Yf.Kl,
    ag = Yf.zn;
  var eg = function (a) {
      var b = {},
        c = 0;
      l(a, function (e, f) {
        if (null != f)
          if (((f = ('' + f).replace(/~/g, '~~')), bg.hasOwnProperty(e)))
            b[bg[e]] = f;
          else if (cg.hasOwnProperty(e)) {
            var g = cg[e],
              h = f;
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ('category' === e)
            for (var m = f.split('/', 5), n = 0; n < m.length; n++) {
              var p = b,
                q = dg[n],
                r = m[n];
              p.hasOwnProperty(q) || (p[q] = r);
            }
          else if (27 > c) {
            var t = String.fromCharCode(10 > c ? 48 + c : 65 + c - 10);
            b['k' + t] = ('' + String(e)).replace(/~/g, '~~');
            b['v' + t] = f;
            c++;
          }
      });
      var d = [];
      l(b, function (e, f) {
        d.push('' + e + f);
      });
      return d.join('~');
    },
    bg = {
      item_id: 'id',
      item_name: 'nm',
      item_brand: 'br',
      item_category: 'ca',
      item_category2: 'c2',
      item_category3: 'c3',
      item_category4: 'c4',
      item_category5: 'c5',
      item_variant: 'va',
      price: 'pr',
      quantity: 'qt',
      coupon: 'cp',
      item_list_name: 'ln',
      index: 'lp',
      item_list_id: 'li',
      discount: 'ds',
      affiliation: 'af',
      promotion_id: 'pi',
      promotion_name: 'pn',
      creative_name: 'cn',
      creative_slot: 'cs',
      location_id: 'lo',
    },
    cg = {
      id: 'id',
      name: 'nm',
      brand: 'br',
      variant: 'va',
      list_name: 'ln',
      list_position: 'lp',
      list: 'ln',
      position: 'lp',
      creative: 'cn',
    },
    dg = ['ca', 'c2', 'c3', 'c4', 'c5'];
  var fg = function (a) {
      var b = [];
      l(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + '=' + encodeURIComponent(String(d)));
      });
      return b.join('&');
    },
    gg = function (a, b, c, d) {
      this.oa = a.oa;
      this.Nc = a.Nc;
      this.sh = a.sh;
      this.s = b;
      this.F = c;
      this.C = fg(a.oa);
      this.h = fg(a.sh);
      this.M = this.h.length;
      if (d && 16384 < this.M) throw Error('EVENT_TOO_LARGE');
    };
  var hg = function () {
    this.events = [];
    this.h = '';
    this.oa = {};
    this.s = '';
    this.F = 0;
    this.M = this.C = !1;
  };
  hg.prototype.add = function (a) {
    return this.W(a)
      ? (this.events.push(a),
        (this.h = a.C),
        (this.oa = a.oa),
        (this.s = a.s),
        (this.F += a.M),
        (this.C = a.F),
        !0)
      : !1;
  };
  hg.prototype.W = function (a) {
    return this.events.length
      ? 20 <= this.events.length || 16384 <= a.M + this.F
        ? !1
        : this.s === a.s && this.C === a.F && this.Qa(a)
      : !0;
  };
  hg.prototype.Qa = function (a) {
    var b = this;
    if (this.M) {
      var c = Object.keys(this.oa);
      return (
        c.length === Object.keys(a.oa).length &&
        c.every(function (d) {
          return a.oa.hasOwnProperty(d) && String(b.oa[d]) === String(a.oa[d]);
        })
      );
    }
    return this.h === a.C;
  };
  var ig = function (a, b) {
      l(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + '=' + encodeURIComponent(d));
      });
    },
    jg = function (a, b) {
      var c = [];
      a.C && c.push(a.C);
      b && c.push('_s=' + b);
      ig(a.Nc, c);
      var d = !1;
      a.h && (c.push(a.h), (d = !0));
      var e = c.join('&'),
        f = '',
        g = e.length + a.s.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join('&')));
      return { params: e, body: f };
    },
    kg = function (a, b) {
      var c = a.events;
      if (1 == c.length) return jg(c[0], b);
      var d = [];
      a.h && d.push(a.h);
      for (var e = {}, f = 0; f < c.length; f++)
        l(c[f].Nc, function (t, u) {
          null != u &&
            ((e[t] = e[t] || {}), (e[t][String(u)] = e[t][String(u)] + 1 || 1));
        });
      var g = {};
      l(e, function (t, u) {
        var v,
          w = -1,
          x = 0;
        l(u, function (y, B) {
          x += B;
          var A = (y.length + t.length + 2) * (B - 1);
          A > w && ((v = y), (w = A));
        });
        x == c.length && (g[t] = v);
      });
      ig(g, d);
      b && d.push('_s=' + b);
      for (
        var h = d.join('&'), m = [], n = {}, p = 0;
        p < c.length;
        n = { Mh: void 0 }, p++
      ) {
        var q = [];
        n.Mh = {};
        l(
          c[p].Nc,
          (function (t) {
            return function (u, v) {
              g[u] != '' + v && (t.Mh[u] = v);
            };
          })(n),
        );
        c[p].h && q.push(c[p].h);
        ig(n.Mh, q);
        m.push(q.join('&'));
      }
      var r = m.join('\r\n');
      return { params: h, body: r };
    };
  var og = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector',
  ];
  function pg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var qg = new Ka();
  function rg(a, b, c) {
    var d = c ? 'i' : void 0;
    try {
      var e = String(b) + d,
        f = qg.get(e);
      f || ((f = new RegExp(b, d)), qg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function sg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function tg(a, b) {
    return String(a) === String(b);
  }
  function ug(a, b) {
    return Number(a) >= Number(b);
  }
  function vg(a, b) {
    return Number(a) <= Number(b);
  }
  function wg(a, b) {
    return Number(a) > Number(b);
  }
  function xg(a, b) {
    return Number(a) < Number(b);
  }
  function yg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var Fg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Gg(a, b) {
    for (var c = '', d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = Je(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = Je(a | b) + c);
  }
  var Hg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Ig = { Fn: 'function', PixieMap: 'Object', List: 'Array' },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Hg.exec(b[d]);
        if (!e) throw Error('Internal Error in ' + a);
        var f = e[1],
          g = '!' === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              'Error in ' + a + '. Required argument ' + f + ' not supplied.',
            );
        } else if ('*' !== h) {
          var n = typeof m;
          m instanceof bd
            ? (n = 'Fn')
            : m instanceof rb
            ? (n = 'List')
            : m instanceof sb
            ? (n = 'PixieMap')
            : m instanceof gd && (n = 'OpaqueValue');
          if (n != h)
            throw Error(
              'Error in ' +
                a +
                '. Argument ' +
                f +
                ' has type ' +
                (Ig[n] || n) +
                ', which does not match required type ' +
                (Ig[h] || h) +
                '.',
            );
        }
      }
    };
  function Jg(a) {
    return '' + a;
  }
  function Kg(a, b) {
    var c = [];
    return c;
  }
  var Lg = function (a, b) {
      var c = new bd(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = I(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (ld()) throw new nd(g.message);
          throw g;
        }
      });
      c.Ib();
      return c;
    },
    Mg = function (a, b) {
      var c = new sb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Fa(e)
            ? c.set(d, Lg(a + '_' + d, e))
            : mb(e)
            ? c.set(d, Mg(a + '_' + d, e))
            : (Ga(e) || k(e) || 'boolean' === typeof e) && c.set(d, e);
        }
      c.Ib();
      return c;
    };
  var Ng = function (a, b) {
    K(J(this), ['apiName:!string', 'message:?string'], arguments);
    var c = {},
      d = new sb();
    return (d = Mg('AssertApiSubject', c));
  };
  var Og = function (a, b) {
    K(J(this), ['actual:?*', 'message:?string'], arguments);
    if (a instanceof id)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.",
      );
    var c = {},
      d = new sb();
    return (d = Mg('AssertThatSubject', c));
  };
  function Pg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(kd(arguments[d], c));
      return jd(a.apply(null, b));
    };
  }
  var Rg = function () {
    for (var a = Math, b = Qg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Pg(a[e].bind(a)));
    }
    return c;
  };
  var Sg = function (a) {
    var b;
    return b;
  };
  var Tg = function (a) {
    var b;
    return b;
  };
  var Ug = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var Vg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function Wg(a, b) {
    var c = !1;
    K(J(this), ['booleanExpression:!string', 'context:?PixieMap'], arguments);
    var d = JSON.parse(a);
    if (!d) throw Error('Invalid boolean expression string was given.');
    var e = b ? kd(b) : {};
    c = Xg(d, e);
    return c;
  }
  var Yg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        if (void 0 === a) return;
        a = a[b[c]];
      }
      return a;
    },
    Zg = function (a, b) {
      var c = b.preHit;
      if (c) {
        var d = a[0];
        switch (d) {
          case 'hitData':
            return 2 > a.length ? void 0 : Yg(c.getHitData(a[1]), a.slice(2));
          case 'metadata':
            return 2 > a.length ? void 0 : Yg(c.getMetadata(a[1]), a.slice(2));
          case 'eventName':
            return c.getEventName();
          case 'destinationId':
            return c.getDestinationId();
          default:
            throw Error(
              d +
                ' is not a valid field that can be accessed\n                      from PreHit data.',
            );
        }
      }
    },
    $g = function (a, b) {
      if (a) {
        if (void 0 !== a.contextValue) {
          var c;
          a: {
            var d = a.contextValue,
              e = d.keyParts;
            if (e && 0 !== e.length) {
              var f = d.namespaceType;
              switch (f) {
                case 1:
                  c = Zg(e, b);
                  break a;
                case 2:
                  var g = b.macro;
                  c = g ? g[e[0]] : void 0;
                  break a;
                default:
                  throw Error('Unknown Namespace Type used: ' + f);
              }
            }
            c = void 0;
          }
          return c;
        }
        if (void 0 !== a.booleanExpressionValue)
          return Xg(a.booleanExpressionValue, b);
        if (void 0 !== a.booleanValue) return !!a.booleanValue;
        if (void 0 !== a.stringValue) return String(a.stringValue);
        if (void 0 !== a.integerValue) return Number(a.integerValue);
        if (void 0 !== a.doubleValue) return Number(a.doubleValue);
        throw Error(
          'Unknown field used for variable of type ExpressionValue:' + a,
        );
      }
    },
    Xg = function (a, b) {
      var c = a.args;
      if (!Ha(c) || 0 === c.length)
        throw Error(
          'Invalid boolean expression format. Expected "args":' +
            c +
            ' property to\n         be non-empty array.',
        );
      var d = function (g) {
        return $g(g, b);
      };
      switch (a.type) {
        case 1:
          for (var e = 0; e < c.length; e++) if (d(c[e])) return !0;
          return !1;
        case 2:
          for (var f = 0; f < c.length; f++) if (!d(c[f])) return !1;
          return 0 < c.length;
        case 3:
          return !d(c[0]);
        case 4:
          return rg(d(c[0]), d(c[1]), !1);
        case 5:
          return tg(d(c[0]), d(c[1]));
        case 6:
          return yg(d(c[0]), d(c[1]));
        case 7:
          return pg(d(c[0]), d(c[1]));
        case 8:
          return sg(d(c[0]), d(c[1]));
        case 9:
          return xg(d(c[0]), d(c[1]));
        case 10:
          return vg(d(c[0]), d(c[1]));
        case 11:
          return wg(d(c[0]), d(c[1]));
        case 12:
          return ug(d(c[0]), d(c[1]));
        default:
          throw Error(
            'Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.',
          );
      }
    };
  Wg.D = 'internal.evaluateBooleanExpression';
  var ah = function (a) {
    K(J(this), ['message:?string'], arguments);
  };
  var bh = function (a, b) {
    K(J(this), ['min:!number', 'max:!number'], arguments);
    return Ja(a, b);
  };
  var ch = function () {
    return new Date().getTime();
  };
  var dh = function (a) {
    if (null === a) return 'null';
    if (a instanceof rb) return 'array';
    if (a instanceof bd) return 'function';
    if (a instanceof gd) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var eh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Zf || ag) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return jd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(kd(c));
      }),
    };
  };
  var fh = function (a) {
    return Na(kd(a, this.h));
  };
  var gh = function (a) {
    return Number(kd(a, this.h));
  };
  var hh = function (a) {
    return null === a ? 'null' : void 0 === a ? 'undefined' : a.toString();
  };
  var ih = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Qg = 'floor ceil round max min abs pow sqrt'.split(' ');
  var jh = function () {
      var a = {};
      return {
        Wl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        sn: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    kh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return bd.prototype.invoke.apply(a, c);
      };
    },
    lh = function (a, b) {
      K(J(this), ['apiName:!string', 'mock:?*'], arguments);
    };
  var mh = {};
  mh.keys = function (a) {
    return new rb();
  };
  mh.values = function (a) {
    return new rb();
  };
  mh.entries = function (a) {
    return new rb();
  };
  mh.freeze = function (a) {
    return a;
  };
  mh.delete = function (a, b) {
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error('Missing program state.');
    if (d.hn) {
      try {
        d.Gj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (Ab('TAGGING', 21), e);
      }
      return;
    }
    d.Gj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var sh = function () {
    this.h = {};
    this.s = {};
  };
  sh.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  sh.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw 'Attempting to add a function which already exists: ' + a + '.';
    if (this.s.hasOwnProperty(a))
      throw (
        'Attempting to add an API with an existing private API name: ' + a + '.'
      );
    this.h[a] = c ? void 0 : Fa(b) ? Lg(a, b) : Mg(a, b);
  };
  function th(a, b) {
    var c = void 0;
    return c;
  }
  function uh() {
    var a = {};
    return a;
  }
  var wh = function (a) {
      return vh ? C.querySelectorAll(a) : null;
    },
    xh = function (a, b) {
      if (!vh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!C.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    yh = !1;
  if (C.querySelectorAll)
    try {
      var zh = C.querySelectorAll(':root');
      zh && 1 == zh.length && zh[0] == C.documentElement && (yh = !0);
    } catch (a) {}
  var vh = yh;
  var M = function (a) {
    Ab('GTM', a);
  };
  var Ah = function (a) {
      return null == a ? '' : k(a) ? Ra(String(a)) : 'e0';
    },
    Ch = function (a) {
      return a.replace(Bh, '');
    },
    Eh = function (a) {
      return Dh(a.replace(/\s/g, ''));
    },
    Dh = function (a) {
      return Ra(a.replace(Fh, '').toLowerCase());
    },
    Hh = function (a) {
      a = a.replace(/[\s-()/.]/g, '');
      '+' !== a.charAt(0) && (a = '+' + a);
      return Gh.test(a) ? a : 'e0';
    },
    Jh = function (a) {
      var b = a.toLowerCase().split('@');
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ''));
        c = c + '@' + b[1];
        if (Ih.test(c)) return c;
      }
      return 'e0';
    },
    Mh = function (a) {
      if ('' === a || 'e0' === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (Kh.test(a)) return Promise.resolve(a);
        try {
          var b = Lh(a);
          return z.crypto.subtle
            .digest('SHA-256', b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join('');
              return z
                .btoa(d)
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
            })
            .catch(function () {
              return 'e2';
            });
        } catch (c) {
          return Promise.resolve('e2');
        }
      } else return Promise.resolve('e1');
    },
    Lh = function (a) {
      var b;
      if (z.TextEncoder) b = new TextEncoder('utf-8').encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63),
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Fh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Ih = /^\S+@\S+\.\S+$/,
    Gh = /^\+\d{10,15}$/,
    Bh = /[.~]/g,
    Nh = /^[0-9A-Za-z_-]{43}$/,
    Kh = /^[0-9A-Fa-f]{64}$/,
    Oh = {},
    Ph =
      ((Oh.email = 'em'),
      (Oh.phone_number = 'pn'),
      (Oh.first_name = 'fn'),
      (Oh.last_name = 'ln'),
      (Oh.street = 'sa'),
      (Oh.city = 'ct'),
      (Oh.region = 'rg'),
      (Oh.country = 'co'),
      (Oh.postal_code = 'pc'),
      (Oh.error_code = 'ec'),
      Oh),
    Qh = {},
    Rh =
      ((Qh.email = 'sha256_email_address'),
      (Qh.phone_number = 'sha256_phone_number'),
      (Qh.first_name = 'sha256_first_name'),
      (Qh.last_name = 'sha256_last_name'),
      (Qh.street = 'sha256_street'),
      Qh),
    Th = function (a, b) {
      a.some(function (c) {
        c.value && Sh.indexOf(c.name);
      })
        ? b(a)
        : z.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && -1 !== Sh.indexOf(c.name)
                ? Mh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            }),
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    Vh = function (a, b) {
      var c = Uh(a);
      Th(c, b);
    },
    Uh = function (a) {
      function b(r, t, u, v) {
        var w = Ah(r);
        '' !== w &&
          (Kh.test(w)
            ? h.push({ name: t, value: w, index: v })
            : h.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (k(u) || Ha(u)) {
          u = Ha(r) ? r : [r];
          for (var v = 0; v < u.length; ++v) {
            var w = Ah(u[v]),
              x = Kh.test(w);
            t && !x && M(89);
            !t && x && M(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = Rh[t];
        r.hasOwnProperty(v) &&
          (r.hasOwnProperty(t) && M(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        var v = d(r, t);
        v = Ha(v) ? v : [v];
        for (var w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          M(64);
          return r(t);
        };
      }
      var h = [];
      if ('https:' !== z.location.protocol)
        return h.push({ name: 'error_code', value: 'e3', index: void 0 }), h;
      e(a, 'email', Jh);
      e(a, 'phone_number', Hh);
      e(a, 'first_name', g(Eh));
      e(a, 'last_name', g(Eh));
      var m = a.home_address || {};
      e(m, 'street', g(Dh));
      e(m, 'city', g(Dh));
      e(m, 'postal_code', g(Ch));
      e(m, 'region', g(Dh));
      e(m, 'country', g(Ch));
      var n = a.address || {};
      n = Ha(n) ? n : [n];
      for (var p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, 'first_name', Eh, p);
        f(q, 'last_name', Eh, p);
        f(q, 'street', Dh, p);
        f(q, 'city', Dh, p);
        f(q, 'postal_code', Ch, p);
        f(q, 'region', Dh, p);
        f(q, 'country', Ch, p);
      }
      return h;
    },
    Xh = function (a, b) {
      Vh(a, function (c) {
        var d = Wh(c);
        b(d.Wf, d.Th);
      });
    },
    Wh = function (a) {
      for (var b = ['tv.1'], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          h = Ph[e];
        h &&
          f &&
          (-1 === Sh.indexOf(e) ||
            /^e\d+$/.test(f) ||
            Nh.test(f) ||
            Kh.test(f)) &&
          (void 0 !== g && (h += g), b.push(h + '.' + f), c++);
      }
      1 === a.length && 'error_code' === a[0].name && (c = 0);
      return { Wf: encodeURIComponent(b.join('~')), Th: c };
    },
    Yh = function (a) {
      if (z.Promise)
        try {
          return new Promise(function (b) {
            Xh(a, function (c, d) {
              b({ Tj: c, Th: d });
            });
          });
        } catch (b) {}
    },
    Sh = Object.freeze([
      'email',
      'phone_number',
      'first_name',
      'last_name',
      'street',
    ]);
  var P = {
      g: {
        Ja: 'ad_personalization',
        J: 'ad_storage',
        N: 'ad_user_data',
        R: 'analytics_storage',
        xb: 'region',
        jc: 'consent_updated',
        jf: 'wait_for_update',
        wi: 'ads',
        lg: 'all',
        xk: 'maps',
        yk: 'playstore',
        zk: 'search',
        Ak: 'shopping',
        Bk: 'youtube',
        xi: 'app_remove',
        yi: 'app_store_refund',
        zi: 'app_store_subscription_cancel',
        Ai: 'app_store_subscription_convert',
        Bi: 'app_store_subscription_renew',
        ng: 'add_payment_info',
        og: 'add_shipping_info',
        kc: 'add_to_cart',
        mc: 'remove_from_cart',
        pg: 'view_cart',
        Nb: 'begin_checkout',
        nc: 'select_item',
        ib: 'view_item_list',
        yb: 'select_promotion',
        jb: 'view_promotion',
        xa: 'purchase',
        oc: 'refund',
        Ka: 'view_item',
        qg: 'add_to_wishlist',
        Dk: 'exception',
        Ci: 'first_open',
        Di: 'first_visit',
        da: 'gtag.config',
        Ra: 'gtag.get',
        Ei: 'in_app_purchase',
        qc: 'page_view',
        Ek: 'screen_view',
        Fi: 'session_start',
        Fk: 'timing_complete',
        Gk: 'track_social',
        Cd: 'user_engagement',
        zb: 'gclgb',
        Na: 'gclid',
        aa: 'ads_data_redaction',
        Gi: 'gad_source',
        Dd: 'gclid_url',
        Hi: 'gclsrc',
        kf: 'wbraid',
        ka: 'allow_ad_personalization_signals',
        lf: 'allow_custom_scripts',
        nf: 'allow_display_features',
        Ed: 'allow_enhanced_conversions',
        kb: 'allow_google_signals',
        Ca: 'allow_interest_groups',
        Hk: 'app_id',
        Ik: 'app_installer_id',
        Jk: 'app_name',
        Kk: 'app_version',
        Ab: 'auid',
        Ii: 'auto_detection_enabled',
        Ob: 'aw_remarketing',
        pf: 'aw_remarketing_only',
        Fd: 'discount',
        Gd: 'aw_feed_country',
        Hd: 'aw_feed_language',
        Z: 'items',
        Id: 'aw_merchant_id',
        rg: 'aw_basket_type',
        Oc: 'campaign_content',
        Pc: 'campaign_id',
        Qc: 'campaign_medium',
        Rc: 'campaign_name',
        Sc: 'campaign',
        Tc: 'campaign_source',
        Uc: 'campaign_term',
        Bb: 'client_id',
        Ji: 'rnd',
        Ki: 'content_group',
        Li: 'content_type',
        Wa: 'conversion_cookie_prefix',
        Vc: 'conversion_id',
        ya: 'conversion_linker',
        Lk: 'conversion_linker_disabled',
        Pb: 'conversion_api',
        qf: 'cookie_deprecation',
        Xa: 'cookie_domain',
        Sa: 'cookie_expires',
        Ya: 'cookie_flags',
        sc: 'cookie_name',
        uc: 'cookie_path',
        Ta: 'cookie_prefix',
        vc: 'cookie_update',
        wc: 'country',
        za: 'currency',
        Jd: 'customer_lifetime_value',
        Wc: 'custom_map',
        sg: 'gcldc',
        Kd: 'dclid',
        Mi: 'debug_mode',
        fa: 'developer_id',
        Ni: 'disable_merchant_reported_purchases',
        Xc: 'dc_custom_params',
        Oi: 'dc_natural_search',
        ug: 'dynamic_event_settings',
        vg: 'affiliation',
        Ld: 'checkout_option',
        rf: 'checkout_step',
        wg: 'coupon',
        Yc: 'item_list_name',
        tf: 'list_name',
        Pi: 'promotions',
        Zc: 'shipping',
        uf: 'tax',
        Md: 'engagement_time_msec',
        Nd: 'enhanced_client_id',
        Od: 'enhanced_conversions',
        xg: 'enhanced_conversions_automatic_settings',
        Pd: 'estimated_delivery_date',
        vf: 'euid_logged_in_state',
        ad: 'event_callback',
        Mk: 'event_category',
        nb: 'event_developer_id_string',
        Nk: 'event_label',
        Qd: 'event',
        Rd: 'event_settings',
        Sd: 'event_timeout',
        Ok: 'description',
        Pk: 'fatal',
        Qi: 'experiments',
        wf: 'firebase_id',
        bd: 'first_party_collection',
        Td: '_x_20',
        ob: '_x_19',
        yg: 'fledge',
        zg: 'flight_error_code',
        Ag: 'flight_error_message',
        Ri: 'fl_activity_category',
        Si: 'fl_activity_group',
        Bg: 'fl_advertiser_id',
        Ti: 'fl_ar_dedupe',
        Cg: 'match_id',
        Ui: 'fl_random_number',
        Vi: 'tran',
        Wi: 'u',
        Ud: 'gac_gclid',
        xc: 'gac_wbraid',
        Dg: 'gac_wbraid_multiple_conversions',
        Eg: 'ga_restrict_domain',
        Fg: 'ga_temp_client_id',
        yc: 'gdpr_applies',
        Gg: 'geo_granularity',
        Cb: 'value_callback',
        pb: 'value_key',
        Qk: 'google_ono',
        Qb: 'google_signals',
        Hg: 'google_tld',
        Vd: 'groups',
        Ig: 'gsa_experiment_id',
        Wd: 'iframe_state',
        dd: 'ignore_referrer',
        xf: 'internal_traffic_results',
        Rb: 'is_legacy_converted',
        Db: 'is_legacy_loaded',
        Xd: 'is_passthrough',
        ed: '_lps',
        Oa: 'language',
        Yd: 'legacy_developer_id_string',
        Da: 'linker',
        Sb: 'accept_incoming',
        rb: 'decorate_forms',
        X: 'domains',
        Eb: 'url_position',
        Jg: 'method',
        Rk: 'name',
        fd: 'new_customer',
        Kg: 'non_interaction',
        Xi: 'optimize_id',
        Yi: 'page_hostname',
        gd: 'page_path',
        Ea: 'page_referrer',
        Fb: 'page_title',
        Lg: 'passengers',
        Mg: 'phone_conversion_callback',
        Zi: 'phone_conversion_country_code',
        Ng: 'phone_conversion_css_class',
        aj: 'phone_conversion_ids',
        Og: 'phone_conversion_number',
        Pg: 'phone_conversion_options',
        Qg: '_protected_audience_enabled',
        hd: 'quantity',
        Zd: 'redact_device_info',
        yf: 'referral_exclusion_definition',
        Tb: 'restricted_data_processing',
        bj: 'retoken',
        Sk: 'sample_rate',
        zf: 'screen_name',
        Gb: 'screen_resolution',
        cj: 'search_term',
        Pa: 'send_page_view',
        Ub: 'send_to',
        ae: 'server_container_url',
        jd: 'session_duration',
        be: 'session_engaged',
        Af: 'session_engaged_time',
        Hb: 'session_id',
        ce: 'session_number',
        kd: 'delivery_postal_code',
        Tk: 'temporary_client_id',
        Bf: 'topmost_url',
        dj: 'tracking_id',
        Cf: 'traffic_type',
        Aa: 'transaction_id',
        Vb: 'transport_url',
        Rg: 'trip_type',
        Wb: 'update',
        Za: 'url_passthrough',
        de: '_user_agent_architecture',
        ee: '_user_agent_bitness',
        fe: '_user_agent_full_version_list',
        he: '_user_agent_mobile',
        ie: '_user_agent_model',
        je: '_user_agent_platform',
        ke: '_user_agent_platform_version',
        me: '_user_agent_wow64',
        Fa: 'user_data',
        Sg: 'user_data_auto_latency',
        Tg: 'user_data_auto_meta',
        Ug: 'user_data_auto_multi',
        Vg: 'user_data_auto_selectors',
        Wg: 'user_data_auto_status',
        ne: 'user_data_mode',
        oe: 'user_data_settings',
        Ua: 'user_id',
        ab: 'user_properties',
        ej: '_user_region',
        pe: 'us_privacy_string',
        la: 'value',
        Xg: 'wbraid_multiple_conversions',
        lj: '_host_name',
        mj: '_in_page_command',
        nj: '_is_passthrough_cid',
        Jb: 'non_personalized_ads',
        we: '_sst_parameters',
        lb: 'conversion_label',
        ra: 'page_location',
        qb: 'global_developer_id_string',
        zc: 'tc_privacy_string',
      },
    },
    Zh = {},
    $h = Object.freeze(
      ((Zh[P.g.ka] = 1),
      (Zh[P.g.nf] = 1),
      (Zh[P.g.Ed] = 1),
      (Zh[P.g.kb] = 1),
      (Zh[P.g.Z] = 1),
      (Zh[P.g.Xa] = 1),
      (Zh[P.g.Sa] = 1),
      (Zh[P.g.Ya] = 1),
      (Zh[P.g.sc] = 1),
      (Zh[P.g.uc] = 1),
      (Zh[P.g.Ta] = 1),
      (Zh[P.g.vc] = 1),
      (Zh[P.g.Wc] = 1),
      (Zh[P.g.fa] = 1),
      (Zh[P.g.ug] = 1),
      (Zh[P.g.ad] = 1),
      (Zh[P.g.Rd] = 1),
      (Zh[P.g.Sd] = 1),
      (Zh[P.g.bd] = 1),
      (Zh[P.g.Eg] = 1),
      (Zh[P.g.Qb] = 1),
      (Zh[P.g.Hg] = 1),
      (Zh[P.g.Vd] = 1),
      (Zh[P.g.xf] = 1),
      (Zh[P.g.Rb] = 1),
      (Zh[P.g.Db] = 1),
      (Zh[P.g.Da] = 1),
      (Zh[P.g.yf] = 1),
      (Zh[P.g.Tb] = 1),
      (Zh[P.g.Pa] = 1),
      (Zh[P.g.Ub] = 1),
      (Zh[P.g.ae] = 1),
      (Zh[P.g.jd] = 1),
      (Zh[P.g.Af] = 1),
      (Zh[P.g.kd] = 1),
      (Zh[P.g.Vb] = 1),
      (Zh[P.g.Wb] = 1),
      (Zh[P.g.oe] = 1),
      (Zh[P.g.ab] = 1),
      (Zh[P.g.we] = 1),
      Zh),
    );
  Object.freeze([
    P.g.ra,
    P.g.Ea,
    P.g.Fb,
    P.g.Oa,
    P.g.zf,
    P.g.Ua,
    P.g.wf,
    P.g.Ki,
  ]);
  var ai = {},
    bi = Object.freeze(
      ((ai[P.g.xi] = 1),
      (ai[P.g.yi] = 1),
      (ai[P.g.zi] = 1),
      (ai[P.g.Ai] = 1),
      (ai[P.g.Bi] = 1),
      (ai[P.g.Ci] = 1),
      (ai[P.g.Di] = 1),
      (ai[P.g.Ei] = 1),
      (ai[P.g.Fi] = 1),
      (ai[P.g.Cd] = 1),
      ai),
    ),
    ci = {},
    di = Object.freeze(
      ((ci[P.g.ng] = 1),
      (ci[P.g.og] = 1),
      (ci[P.g.kc] = 1),
      (ci[P.g.mc] = 1),
      (ci[P.g.pg] = 1),
      (ci[P.g.Nb] = 1),
      (ci[P.g.nc] = 1),
      (ci[P.g.ib] = 1),
      (ci[P.g.yb] = 1),
      (ci[P.g.jb] = 1),
      (ci[P.g.xa] = 1),
      (ci[P.g.oc] = 1),
      (ci[P.g.Ka] = 1),
      (ci[P.g.qg] = 1),
      ci),
    ),
    ei = Object.freeze([
      P.g.ka,
      P.g.kb,
      P.g.vc,
      P.g.bd,
      P.g.dd,
      P.g.Pa,
      P.g.Wb,
    ]),
    fi = Object.freeze([].concat(ei)),
    gi = Object.freeze([P.g.Sa, P.g.Sd, P.g.jd, P.g.Af, P.g.Md]),
    hi = Object.freeze([].concat(gi)),
    ii = {},
    ji =
      ((ii[P.g.J] = '1'),
      (ii[P.g.R] = '2'),
      (ii[P.g.N] = '3'),
      (ii[P.g.Ja] = '4'),
      ii),
    ki = {},
    li = Object.freeze(
      ((ki[P.g.ka] = 1),
      (ki[P.g.Ed] = 1),
      (ki[P.g.Ca] = 1),
      (ki[P.g.Ob] = 1),
      (ki[P.g.pf] = 1),
      (ki[P.g.Fd] = 1),
      (ki[P.g.Gd] = 1),
      (ki[P.g.Hd] = 1),
      (ki[P.g.Z] = 1),
      (ki[P.g.Id] = 1),
      (ki[P.g.Wa] = 1),
      (ki[P.g.ya] = 1),
      (ki[P.g.Xa] = 1),
      (ki[P.g.Sa] = 1),
      (ki[P.g.Ya] = 1),
      (ki[P.g.Ta] = 1),
      (ki[P.g.za] = 1),
      (ki[P.g.Jd] = 1),
      (ki[P.g.fa] = 1),
      (ki[P.g.Ni] = 1),
      (ki[P.g.Od] = 1),
      (ki[P.g.Pd] = 1),
      (ki[P.g.wf] = 1),
      (ki[P.g.bd] = 1),
      (ki[P.g.Rb] = 1),
      (ki[P.g.Db] = 1),
      (ki[P.g.Oa] = 1),
      (ki[P.g.fd] = 1),
      (ki[P.g.ra] = 1),
      (ki[P.g.Ea] = 1),
      (ki[P.g.Mg] = 1),
      (ki[P.g.Ng] = 1),
      (ki[P.g.Og] = 1),
      (ki[P.g.Pg] = 1),
      (ki[P.g.Tb] = 1),
      (ki[P.g.Pa] = 1),
      (ki[P.g.Ub] = 1),
      (ki[P.g.ae] = 1),
      (ki[P.g.kd] = 1),
      (ki[P.g.Aa] = 1),
      (ki[P.g.Vb] = 1),
      (ki[P.g.Wb] = 1),
      (ki[P.g.Za] = 1),
      (ki[P.g.Fa] = 1),
      (ki[P.g.Ua] = 1),
      (ki[P.g.la] = 1),
      ki),
    ),
    mi = {},
    ni = Object.freeze(
      ((mi[P.g.zk] = 's'),
      (mi[P.g.Bk] = 'y'),
      (mi[P.g.yk] = 'p'),
      (mi[P.g.Ak] = 'h'),
      (mi[P.g.wi] = 'a'),
      (mi[P.g.xk] = 'm'),
      mi),
    );
  Object.freeze(P.g);
  var oi = {},
    pi = (z.google_tag_manager = z.google_tag_manager || {}),
    qi = Math.random();
  oi.eh = '42h0';
  oi.ve = Number('0') || 0;
  oi.ja = 'dataLayer';
  oi.Dn =
    'ChAIgNvWrgYQg+Dq0O6DldF/EiUAihiBAYyEynxfgQHDeS8fEtVR/BSUVEqQ59oiK4xNEOcXrmwLGgLzag\x3d\x3d';
  var ri = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    si = { __paused: 1, __tg: 1 },
    ti;
  for (ti in ri) ri.hasOwnProperty(ti) && (si[ti] = 1);
  var ui = Oa(''),
    vi,
    wi = !1;
  wi = !0;
  vi = wi;
  var xi,
    yi = !1;
  xi = yi;
  var zi,
    Ai = !1;
  zi = Ai;
  oi.Bd = 'www.googletagmanager.com';
  var Bi = '' + oi.Bd + (vi ? '/gtag/js' : '/gtm.js'),
    Ci = null,
    Di = null,
    Ei = {},
    Fi = {},
    Gi = function () {
      var a = pi.sequence || 1;
      pi.sequence = a + 1;
      return a;
    };
  oi.vk = 'true';
  var Hi = '';
  oi.Jf = Hi;
  var Ii = new (function () {
      this.h = '';
      this.s = !1;
      this.M = this.F = this.W = this.C = '';
    })(),
    Ji = function () {
      var a = Ii.C.length;
      return '/' === Ii.C[a - 1] ? Ii.C.substring(0, a - 1) : Ii.C;
    };
  function Ki(a) {
    for (var b = {}, c = fa(a.split('|')), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Li = new Ka(),
    Mi = {},
    Ni = {},
    Qi = {
      name: oi.ja,
      set: function (a, b) {
        nb($a(a, b), Mi);
        Oi();
      },
      get: function (a) {
        return Pi(a, 2);
      },
      reset: function () {
        Li = new Ka();
        Mi = {};
        Oi();
      },
    },
    Pi = function (a, b) {
      return 2 != b ? Li.get(a) : Ri(a);
    },
    Ri = function (a, b) {
      var c = a.split('.');
      b = b || [];
      for (var d = Mi, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Si = function (a, b) {
      Ni.hasOwnProperty(a) || (Li.set(a, b), nb($a(a, b), Mi), Oi());
    },
    Ti = function () {
      for (
        var a = [
            'gtm.allowlist',
            'gtm.blocklist',
            'gtm.whitelist',
            'gtm.blacklist',
            'tagTypeBlacklist',
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Pi(c, 1);
        if (Ha(d) || mb(d)) d = nb(d);
        Ni[c] = d;
      }
    },
    Oi = function (a) {
      l(Ni, function (b, c) {
        Li.set(b, c);
        nb($a(b), Mi);
        nb($a(b, c), Mi);
        a && delete Ni[b];
      });
    },
    Ui = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Ri(a) : Li.get(a);
      'array' === jb(d) || 'object' === jb(d) ? (c = nb(d)) : (c = d);
      return c;
    };
  var Vi = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ('js_variable' === d) {
        e = e.replace(/\["?'?/g, '.').replace(/"?'?\]/g, '');
        for (var g = e.split(','), h = 0; h < g.length; h++) {
          var m = g[h].trim();
          if (m) {
            if (0 === m.indexOf('dataLayer.')) f = Pi(m.substring(10));
            else {
              var n = m.split('.');
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ('css_selector' === d && vh) {
        var q = wh(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ('email' === b || 'phone_number' === b ? 5 : 1);
            r++
          )
            f.push(Pc(q[r]) || Ra(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    Wi = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Vi(b, 'email', a.email) || c;
        c = Vi(b, 'phone_number', a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Vi(f, 'first_name', d[e].first_name) || c;
          c = Vi(f, 'last_name', d[e].last_name) || c;
          c = Vi(f, 'street', d[e].street) || c;
          c = Vi(f, 'city', d[e].city) || c;
          c = Vi(f, 'region', d[e].region) || c;
          c = Vi(f, 'country', d[e].country) || c;
          c = Vi(f, 'postal_code', d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Xi = function (a) {
      return mb(a) ? !!a.enable_code : !1;
    };
  var Yi = [];
  function Zi(a) {
    switch (a) {
      case 0:
        return 0;
      case 90:
        return 19;
      case 42:
        return 14;
      case 52:
        return 11;
      case 53:
        return 12;
      case 56:
        return 13;
      case 54:
        return 15;
      case 80:
        return 16;
      case 84:
        return 20;
      case 89:
        return 18;
      case 41:
        return 21;
    }
  }
  function Q(a) {
    Yi[a] = !0;
    var b = Zi(a);
    void 0 !== b && (Pf[b] = !0);
  }
  Q(5);
  Q(6);
  Q(7);
  Q(8);
  Q(10);
  Q(11);
  Q(14);
  Q(12);
  Q(15);
  Q(18);
  Q(19);
  Q(21);
  Q(22);
  Q(25);
  Q(26);
  Q(27);
  Q(29);
  Q(30);
  Q(34);
  Q(36);
  Q(39);
  Q(40);
  Q(43);
  Q(44);
  Q(45);
  Q(47);
  Q(48);
  Q(49);
  Q(54);
  Q(57);
  Q(62);
  Q(66);
  Q(71);
  Q(73);
  Q(75);
  Q(77);
  Q(78);
  Q(79);
  Q(80);
  Q(92);
  Qf[1] = Number('') || 6e4;
  Qf[2] = Number('') || 50;
  function $i(a, b) {
    for (var c = void 0, d = void 0, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? Q(a) : Q(b);
  }
  function R(a) {
    return !!Yi[a];
  }
  var aj = function (a) {
    Ab('HEALTH', a);
  };
  var bj;
  try {
    bj = JSON.parse(
      yb(
        'eyIwIjoiUlUiLCIxIjoiUlUtU1BFIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUucnUiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ',
      ),
    );
  } catch (a) {
    M(123), aj(2), (bj = {});
  }
  var cj = function () {
      return bj['0'] || '';
    },
    dj = function () {
      return bj['1'] || '';
    },
    ej = function () {
      var a = !1;
      a = !!bj['2'];
      return a;
    },
    fj = function () {
      return !1 !== bj['6'];
    },
    gj = function () {
      var a = '';
      a = bj['4'] || '';
      return a;
    },
    hj = function () {
      var a = !1;
      a = !!bj['5'];
      return a;
    },
    ij = function () {
      var a = '';
      a = bj['3'] || '';
      return a;
    };
  var jj = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var kj = function (a) {
    kj[' '](a);
    return a;
  };
  kj[' '] = function () {};
  var mj = function () {
    var a = lj,
      b = 'Bh';
    if (a.Bh && a.hasOwnProperty(b)) return a.Bh;
    var c = new a();
    return (a.Bh = c);
  };
  var lj = function () {
    var a = {};
    this.h = function () {
      var b = jj.h,
        c = jj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[jj.h] = !0;
    };
  };
  var nj = !1,
    oj = !1,
    pj = {},
    qj = {},
    rj = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function sj() {
    var a = Dc('google_tag_data', {});
    return (a.ics = a.ics || new tj());
  }
  var tj = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedSetCps =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  tj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Ab('TAGGING', 19);
    void 0 == b ? Ab('TAGGING', 18) : uj(this, a, 'granted' === b, c, d, e, f);
  };
  tj.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      uj(this, a[c], void 0, void 0, '', '', b);
  };
  var uj = function (a, b, c, d, e, f, g) {
    var h = a.entries,
      m = h[b] || {},
      n = m.region,
      p = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (vj(p, n, e, f)) {
      var q = !!(g && 0 < g && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ('' !== e || !1 !== m.default) h[b] = r;
      q &&
        z.setTimeout(function () {
          h[b] === r &&
            r.quiet &&
            (Ab('TAGGING', 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0),
            a.notifyListeners());
        }, g);
    }
  };
  aa = tj.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in pj) pj.hasOwnProperty(d) && pj[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var g = fa(c), h = g.next(); !h.done; h = g.next())
        Bj(this, h.value);
    } else if (void 0 !== b && f !== b)
      for (var m = fa(c), n = m.next(); !n.done; n = m.next())
        Bj(this, n.value);
  };
  aa.update = function (a, b) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = 'granted' === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (vj(m, h, d, e)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: 'granted' === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ('' !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = 'granted' === b);
  };
  aa.getConsentState = function (a) {
    Rf(21) && 'ad_user_data' === a && (a = 'ad_storage');
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (pj.hasOwnProperty(a)) {
      var e = b[pj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.implicit;
    return void 0 !== d
      ? d
        ? 3
        : 4
      : Rf(19) && rj.hasOwnProperty(a)
      ? (Ab('TAGGING', 22), rj[a] ? 3 : 4)
      : 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    Cj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({ consentTypes: a, Pl: b });
  };
  var Bj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Ha(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Wj = !0);
    }
  };
  tj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Wj) {
        d.Wj = !1;
        try {
          d.Pl({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function vj(a, b, c, d) {
    return '' === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Cj(a, b, c, d, e, f) {
    var g = a[b] || {},
      h = g.region,
      m = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (vj(m, h, e, f)) {
      var n = { enabled: 'granted' === c, region: m };
      if ('' !== e || !1 !== g.enabled) return (a[b] = n), !0;
    }
    return !1;
  }
  var Dj = function (a) {
      var b = sj();
      b.accessedAny = !0;
      return (k(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Ej = function (a) {
      var b = sj();
      b.accessedAny = !0;
      return b.getConsentState(a);
    },
    Fj = function () {
      var a = {},
        b;
      for (b in qj)
        qj.hasOwnProperty(b) &&
          (a[b] = { enabled: qj[b].enabled, region: qj[b].region });
      for (
        var c = {}, d = fa(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        c[f] = a[f].enabled;
      }
      return c;
    },
    Gj = function (a) {
      var b = sj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Hj = function () {
      if (!mj().h()) return !1;
      var a = sj();
      a.accessedAny = !0;
      return a.active;
    },
    Ij = function (a, b) {
      if (Rf(21)) {
        for (
          var c = [],
            d = a.find(function (h) {
              return 'ad_storage' === h;
            }),
            e = fa(a),
            f = e.next();
          !f.done;
          f = e.next()
        ) {
          var g = f.value;
          if ('ad_user_data' === g) {
            if (d) continue;
            c.push('ad_storage');
          }
          c.push(g);
        }
        sj().addListener(c, b);
      } else sj().addListener(a, b);
    },
    Jj = function (a, b) {
      sj().notifyListeners(a, b);
    },
    Kj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Gj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Ij(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Lj = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Dj(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = k(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Ij(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : z.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function Mj() {}
  function Nj() {}
  var Oj = [P.g.J, P.g.R, P.g.N, P.g.Ja],
    Pj = function (a) {
      for (
        var b = a[P.g.xb], c = Array.isArray(b) ? b : [b], d = { Me: 0 };
        d.Me < c.length;
        d = { Me: d.Me }, ++d.Me
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== P.g.xb) {
                var h = c[e.Me],
                  m = cj(),
                  n = dj();
                oj = !0;
                nj && Ab('TAGGING', 20);
                sj().declare(f, g, h, m, n);
              }
            };
          })(d),
        );
    },
    Qj = function (a) {
      var b = a[P.g.xb];
      b && M(40);
      var c = a[P.g.jf];
      c && M(41);
      for (
        var d = Ha(b) ? b : [b], e = { Ne: 0 };
        e.Ne < d.length;
        e = { Ne: e.Ne }, ++e.Ne
      )
        l(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== P.g.xb && g !== P.g.jf) {
                var m = d[f.Ne],
                  n = Number(c),
                  p = cj(),
                  q = dj();
                nj = !0;
                oj && Ab('TAGGING', 20);
                sj().default(g, h, m, p, q, n);
              }
            };
          })(e),
        );
    },
    Rj = function (a, b) {
      l(a, function (c, d) {
        nj = !0;
        oj && Ab('TAGGING', 20);
        sj().update(c, d);
      });
      Jj(b.eventId, b.priorityId);
    },
    Sj = function (a) {
      for (
        var b = a[P.g.xb], c = Array.isArray(b) ? b : [b], d = { rd: 0 };
        d.rd < c.length;
        d = { rd: d.rd }, ++d.rd
      )
        a.hasOwnProperty(P.g.lg) &&
          l(
            ni,
            (function (e) {
              return function (f) {
                Cj(qj, f, a[P.g.lg], c[e.rd], cj(), dj());
              };
            })(d),
          ),
          l(
            a,
            (function (e) {
              return function (f, g) {
                f !== P.g.xb &&
                  f !== P.g.lg &&
                  Cj(qj, f, g, c[e.rd], cj(), dj());
              };
            })(d),
          );
    },
    Tj = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Dj(b);
      });
    },
    Uj = function (a, b) {
      Ij(a, b);
    },
    Vj = function (a, b) {
      Lj(a, b);
    },
    Wj = function (a, b) {
      Kj(a, b);
    },
    Xj = function () {
      var a = [P.g.J, P.g.Ja, P.g.N];
      sj().waitForUpdate(a, 500);
    },
    Yj = function (a) {
      for (var b = fa(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        sj().clearTimeout(d, void 0);
      }
      Jj();
    };
  var Zj = function () {
    function a(b) {
      pi.pscdl = b;
    }
    if (void 0 === pi.pscdl)
      try {
        'cookieDeprecationLabel' in Bc
          ? (a('pending'), Bc.cookieDeprecationLabel.getValue().then(a))
          : a('noapi');
      } catch (b) {
        a('error');
      }
  };
  var ak = /[A-Z]+/,
    bk = /\s/,
    ck = function (a, b) {
      if (k(a)) {
        a = Ra(a);
        var c = a.indexOf('-');
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (ak.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf('/');
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ('DC' === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split('/');
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (bk.test(f[m]) && ('AW' !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, ba: d + '-' + f[0], O: f };
          }
        }
      }
    },
    ek = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = ck(a[d], b);
        e && (c[e.id] = e);
      }
      dk(c);
      var f = [];
      l(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function dk(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        'AW' === d.prefix && d.O[1] && b.push(d.ba);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var fk = /:[0-9]+$/,
    gk = /^\d+\.fls\.doubleclick\.net$/,
    hk = function (a, b, c, d) {
      for (
        var e = [], f = fa(a.split('&')), g = f.next();
        !g.done;
        g = f.next()
      ) {
        var h = fa(g.value.split('=')),
          m = h.next().value,
          n = ha(h);
        if (decodeURIComponent(m.replace(/\+/g, ' ')) === b) {
          var p = n.join('=');
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, ' '));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, ' ')));
        }
      }
      return c ? e : void 0;
    },
    kk = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ('protocol' === b || 'port' === b)
        a.protocol = ik(a.protocol) || ik(z.location.protocol);
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ('http' === a.protocol ? 80 : 'https' === a.protocol ? 443 : ''),
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(fk, '')
            .toLowerCase());
      return jk(a, b, c, d, e);
    },
    jk = function (a, b, c, d, e) {
      var f,
        g = ik(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case 'url_no_fragment':
          f = lk(a);
          break;
        case 'protocol':
          f = g;
          break;
        case 'host':
          f = a.hostname.replace(fk, '').toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case 'port':
          f = String(
            Number(a.port) || ('http' === g ? 80 : 'https' === g ? 443 : ''),
          );
          break;
        case 'path':
          a.pathname || a.hostname || Ab('TAGGING', 1);
          f = '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
          var m = f.split('/');
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = '');
          f = m.join('/');
          break;
        case 'query':
          f = a.search.replace('?', '');
          e && (f = hk(f, e, !1));
          break;
        case 'extension':
          var n = a.pathname.split('.');
          f = 1 < n.length ? n[n.length - 1] : '';
          f = f.split('/')[0];
          break;
        case 'fragment':
          f = a.hash.replace('#', '');
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    ik = function (a) {
      return a ? a.replace(':', '').toLowerCase() : '';
    },
    lk = function (a) {
      var b = '';
      if (a && a.href) {
        var c = a.href.indexOf('#');
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    mk = {},
    nk = 0,
    ok = function (a) {
      var b = mk[a];
      if (!b) {
        var c = C.createElement('a');
        a && (c.href = a);
        var d = c.pathname;
        '/' !== d[0] && (a || Ab('TAGGING', 1), (d = '/' + d));
        var e = c.hostname.replace(fk, '');
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        };
        5 > nk && ((mk[a] = b), nk++);
      }
      return b;
    },
    pk = function (a) {
      function b(n) {
        var p = n.split('=')[0];
        return 0 > d.indexOf(p) ? n : p + '=0';
      }
      function c(n) {
        return n
          .split('&')
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join('&');
      }
      var d =
          'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(
            ' ',
          ),
        e = ok(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      '?' === g[0] && (g = g.substring(1));
      '#' === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      '' !== g && (g = '?' + g);
      '' !== h && (h = '#' + h);
      var m = '' + f + g + h;
      '/' === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    qk = function (a) {
      var b = ok(z.location.href),
        c = kk(b, 'host', !1);
      if (c && c.match(gk)) {
        var d = kk(b, 'path').split(a + '=');
        if (1 < d.length) return d[1].split(';')[0].split('?')[0];
      }
    };
  var rk = {
    'https://www.google.com': '/g',
    'https://www.googlesyndication.com': '/gs',
    'https://www.googleadservices.com': '/as',
    'https://pagead2.googlesyndication.com': '/gs',
  };
  function sk(a, b) {
    if (a) {
      var c = '' + a;
      0 !== c.indexOf('http://') &&
        0 !== c.indexOf('https://') &&
        (c = 'https://' + c);
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return ok('' + c + b).href;
    }
  }
  function tk() {
    return Ii.s || xi;
  }
  function uk() {
    return !!oi.Jf && 'SGTM_TOKEN' !== oi.Jf.split('@@').join('');
  }
  function vk(a) {
    for (var b = fa([P.g.ae, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  function wk(a, b) {
    return Ii.s ? '' + Ji() + (b ? rk[a] || '' : '') : a;
  }
  var xk = function (a) {
      var b = String(a[Le.ma] || '').replace(/_/g, '');
      0 === b.indexOf('cvt') && (b = 'cvt');
      return b;
    },
    yk =
      0 <= z.location.search.indexOf('?gtm_latency=') ||
      0 <= z.location.search.indexOf('&gtm_latency=');
  var Ak = function (a, b) {
      var c = zk();
      c.pending || (c.pending = []);
      Ia(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    Bk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    zk = function () {
      var a = Dc('google_tag_data', {}),
        b = a.tidr;
      b || ((b = new Bk()), (a.tidr = b));
      return b;
    };
  var Ck = {},
    Dk = !1,
    Sf = {
      ctid: 'G-NVP1BM95RS',
      canonicalContainerId: '67670376',
      Uj: 'G-NVP1BM95RS',
      Vj: 'G-NVP1BM95RS',
    };
  Ck.se = Oa('');
  var Gk = function () {
      var a = Ek();
      return Dk ? a.map(Fk) : a;
    },
    Ik = function () {
      var a = Hk();
      return Dk ? a.map(Fk) : a;
    },
    Kk = function () {
      return Jk(Sf.ctid);
    },
    Lk = function () {
      return Jk(Sf.canonicalContainerId || '_' + Sf.ctid);
    },
    Ek = function () {
      return Sf.Uj ? Sf.Uj.split('|') : [Sf.ctid];
    },
    Hk = function () {
      return Sf.Vj ? Sf.Vj.split('|') : [];
    },
    Ok = function () {
      var a = Mk(Nk());
      if (a) {
        for (; a.parent; ) {
          var b = Mk(a.parent);
          if (!b) break;
          a = b;
        }
        return a;
      }
    },
    Mk = function (a) {
      var b = zk();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    Jk = function (a) {
      return Dk ? Fk(a) : a;
    },
    Fk = function (a) {
      return 'siloed_' + a;
    },
    Qk = function (a) {
      return Dk ? Pk(a) : a;
    };
  function Pk(a) {
    a = String(a);
    return 0 === a.indexOf('siloed_') ? a.substring(7) : a;
  }
  var Rk = function () {
    var a = !1;
    if (a) {
      var b = zk();
      if (b.siloed) {
        for (
          var c = [], d = Ek().map(Fk), e = Hk().map(Fk), f = {}, g = 0;
          g < b.siloed.length;
          f = { Of: void 0 }, g++
        )
          (f.Of = b.siloed[g]),
            !Dk &&
            Ia(
              f.Of.isDestination ? e : d,
              (function (h) {
                return function (m) {
                  return m === h.Of.ctid;
                };
              })(f),
            )
              ? (Dk = !0)
              : c.push(f.Of);
        b.siloed = c;
      }
    }
  };
  function Sk() {
    var a = zk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Gk(), f = Ik(), g = {}, h = 0;
        h < a.pending.length;
        g = { Ye: void 0 }, h++
      )
        (g.Ye = a.pending[h]),
          Ia(
            g.Ye.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Ye.target.ctid;
              };
            })(g),
          )
            ? d || ((b = g.Ye.onLoad), (d = !0))
            : c.push(g.Ye);
      a.pending = c;
      if (b)
        try {
          b(Lk());
        } catch (m) {}
    }
  }
  var Tk = function () {
      for (
        var a = Sf.ctid,
          b = Gk(),
          c = Ik(),
          d = function (n, p) {
            var q = {
              canonicalContainerId: Sf.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice(),
            };
            Cc && (q.scriptSource = Cc);
            var r = p ? e.destination : e.container,
              t = r[n];
            t ? (p && 0 === t.state && M(93), Object.assign(t, q)) : (r[n] = q);
          },
          e = zk(),
          f = fa(b),
          g = f.next();
        !g.done;
        g = f.next()
      )
        d(g.value, !1);
      for (var h = fa(c), m = h.next(); !m.done; m = h.next()) d(m.value, !0);
      e.canonical[Lk()] = {};
      Sk();
    },
    Uk = function (a) {
      return !!zk().container[a];
    },
    Vk = function (a) {
      var b = zk().destination[a];
      return !!b && !!b.state;
    },
    Nk = function () {
      return { ctid: Kk(), isDestination: Ck.se };
    };
  function Wk(a) {
    var b = zk();
    (b.siloed = b.siloed || []).push(a);
  }
  var Xk = function () {
      var a = zk().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Yk = function () {
      var a = {};
      l(zk().destination, function (b, c) {
        0 === c.state && (a[Pk(b)] = c);
      });
      return a;
    },
    Zk = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf('GTM-')
      );
    };
  var $k = { sampleRate: '0.005000', rk: '', qk: Number('5'), po: Number('') },
    al = [];
  function bl(a) {
    al.push(a);
  }
  var cl = !1,
    dl;
  if (!(dl = yk)) {
    var el = Math.random(),
      fl = $k.sampleRate;
    dl = el < Number(fl);
  }
  var gl = dl,
    hl = '/a?id=' + Sf.ctid,
    il = 'https://www.googletagmanager.com' + hl,
    jl = void 0,
    kl = {},
    ll = void 0,
    ml = new (function () {
      var a = 5;
      0 < $k.qk && (a = $k.qk);
      this.h = 0;
      this.C = [];
      this.s = a;
    })(),
    nl = 1e3;
  function ol(a, b) {
    var c = jl;
    if (void 0 === c)
      if (b) c = Gi();
      else return '';
    for (
      var d = [wk('https://www.googletagmanager.com'), hl],
        e = fa(al),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value,
          h = g({
            eventId: c,
            wb: !!a,
            cg: function () {
              cl = !0;
            },
          }),
          m = fa(h),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = fa(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push('&' + q + '=' + r);
      }
    d.push('&z=0');
    return d.join('');
  }
  function pl() {
    ll && (z.clearTimeout(ll), (ll = void 0));
    if (void 0 !== jl && ql) {
      var a;
      (a = kl[jl]) || (a = ml.h < ml.s ? !1 : 1e3 > Ta() - ml.C[ml.h % ml.s]);
      if (a || 0 >= nl--) M(1), (kl[jl] = !0);
      else {
        var b = ml.h++ % ml.s;
        ml.C[b] = Ta();
        var c = ol(!0);
        Lc(c);
        if (cl) {
          var d = c.replace('/a?', '/td?');
          Lc(d);
        }
        ql = cl = !1;
      }
    }
  }
  var ql = !1;
  function rl(a) {
    kl[a] ||
      (a !== jl && (pl(), (jl = a)),
      (ql = !0),
      ll || (ll = z.setTimeout(pl, 500)),
      2022 <= ol().length && pl());
  }
  var sl = Ja();
  function tl() {
    sl = Ja();
  }
  function ul() {
    return [
      ['v', '3'],
      ['t', 't'],
      ['pid', sl],
    ];
  }
  var vl = '',
    wl = [];
  function xl(a) {
    var b = [];
    vl && b.push(['dl', encodeURIComponent(vl)]);
    0 < wl.length && b.push(['tdp', wl.join('.')]);
    a.wb && ((vl = ''), (wl.length = 0), b.length && a.cg());
    return b;
  }
  var yl = [];
  function zl(a) {
    if (!yl.length) return [];
    var b = [['tdc', yl.join('!')]];
    a.wb && (a.cg(), (yl.length = 0));
    return b;
  }
  var Al = { initialized: 11, complete: 12, interactive: 13 },
    Bl = {},
    Cl = Object.freeze(((Bl[P.g.Pa] = !0), Bl)),
    Dl =
      0 <= C.location.search.indexOf('?gtm_diagnostics=') ||
      0 <= C.location.search.indexOf('&gtm_diagnostics='),
    Fl = function (a, b, c) {
      if (gl && 'config' === a && !(1 < ck(b).O.length)) {
        var d,
          e = Dc('google_tag_data', {});
        e.td || (e.td = {});
        d = e.td;
        var f = nb(c.F);
        nb(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var m = El(d[h], f);
          m.length && (Dl && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && gl && yl.push(b + '*' + g.join('.')),
          Ab('TAGGING', Al[C.readyState] || 14));
        d[b] = f;
      }
    };
  function Gl(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function El(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? '' : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Cl[q] : t;
      },
      f;
    for (f in Gl(a, b)) {
      var g = (d ? d + '.' : '') + f,
        h = e(f, a),
        m = e(f, b),
        n = 'object' === jb(h) || 'array' === jb(h),
        p = 'object' === jb(m) || 'array' === jb(m);
      if (n && p) El(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Hl = function (a, b, c, d, e, f, g, h, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.C = e;
      this.F = f;
      this.s = g;
      this.eventMetadata = h;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Il = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.h);
          c.push(a.M);
          c.push(a.C);
          c.push(a.F);
          c.push(a.s);
          break;
        case 2:
          c.push(a.h);
          break;
        case 1:
          c.push(a.M);
          c.push(a.C);
          c.push(a.F);
          c.push(a.s);
          break;
        case 4:
          c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.F);
      }
      return c;
    },
    V = function (a, b, c, d) {
      for (
        var e = fa(Il(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (void 0 !== g[b]) return g[b];
      }
      return c;
    },
    Jl = function (a) {
      for (
        var b = {}, c = Il(a, 4), d = fa(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = fa(f), h = g.next();
          !h.done;
          h = g.next()
        )
          b[h.value] = 1;
      return Object.keys(b);
    },
    Kl = function (a, b, c) {
      function d(n) {
        mb(n) &&
          l(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Il(a, void 0 === c ? 3 : c);
      g.reverse();
      for (var h = fa(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Ll = function (a) {
      for (
        var b = [P.g.Sc, P.g.Oc, P.g.Pc, P.g.Qc, P.g.Rc, P.g.Tc, P.g.Uc],
          c = Il(a, 3),
          d = fa(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, h = !1, m = fa(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((g[p] = f[p]), (h = !0));
        }
        var q = h ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Ml = function (a, b) {
      this.Ef = a;
      this.Ff = b;
      this.C = {};
      this.Yb = {};
      this.h = {};
      this.F = {};
      this.md = {};
      this.Xb = {};
      this.s = {};
      this.Qa = function () {};
      this.W = function () {};
      this.M = !1;
    },
    Nl = function (a, b) {
      a.C = b;
      return a;
    },
    Ol = function (a, b) {
      a.Yb = b;
      return a;
    },
    Pl = function (a, b) {
      a.h = b;
      return a;
    },
    Ql = function (a, b) {
      a.F = b;
      return a;
    },
    Rl = function (a, b) {
      a.md = b;
      return a;
    },
    Sl = function (a, b) {
      a.Xb = b;
      return a;
    },
    Tl = function (a, b) {
      a.s = b || {};
      return a;
    },
    Ul = function (a, b) {
      a.Qa = b;
      return a;
    },
    Vl = function (a, b) {
      a.W = b;
      return a;
    },
    Wl = function (a, b) {
      a.M = b;
      return a;
    },
    Xl = function (a) {
      return new Hl(a.Ef, a.Ff, a.C, a.Yb, a.h, a.F, a.Xb, a.s, a.Qa, a.W, a.M);
    };
  var Yl = {};
  function Zl(a, b, c) {
    gl && void 0 !== a && ((Yl[a] = Yl[a] || []), Yl[a].push(c + b), rl(a));
  }
  function $l(a) {
    var b = a.eventId,
      c = a.wb,
      d = [],
      e = Yl[b] || [];
    e.length && d.push(['epr', e.join('.')]);
    c && delete Yl[b];
    return d;
  }
  var bm = function (a, b) {
      var c = ck(Jk(a), !0);
      c && am.register(c, b);
    },
    cm = function (a, b, c, d) {
      var e = ck(c, d.isGtmEvent);
      e && am.push('event', [b, a], e, d);
    },
    dm = function (a, b, c, d) {
      var e = ck(c, d.isGtmEvent);
      e && am.push('get', [a, b], e, d);
    },
    fm = function (a) {
      var b = ck(Jk(a), !0),
        c;
      b ? (c = em(am, b).h) : (c = {});
      return c;
    },
    gm = function (a, b) {
      var c = ck(Jk(a), !0);
      if (c) {
        var d = am,
          e = nb(b);
        nb(em(d, c).h, e);
        em(d, c).h = e;
      }
    },
    hm = function () {
      this.status = 1;
      this.M = {};
      this.h = {};
      this.s = {};
      this.W = null;
      this.F = {};
      this.C = !1;
    },
    im = function (a, b, c, d) {
      var e = Ta();
      this.type = a;
      this.C = e;
      this.h = b;
      this.s = c;
      this.messageContext = d;
    },
    jm = function () {
      this.s = {};
      this.C = {};
      this.h = [];
    },
    em = function (a, b) {
      var c = b.ba;
      return (a.s[c] = a.s[c] || new hm());
    },
    km = function (a, b, c, d) {
      if (d.h) {
        var e = em(a, d.h),
          f = e.W;
        if (f) {
          var g = nb(c),
            h = nb(e.M[d.h.id]),
            m = nb(e.F),
            n = nb(e.h),
            p = nb(a.C),
            q = {};
          if (gl)
            try {
              q = nb(Mi);
            } catch (v) {
              M(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              Zl(d.messageContext.eventId, r, v);
            },
            u = Xl(
              Wl(
                Vl(
                  Ul(
                    Tl(
                      Rl(
                        Ql(
                          Sl(
                            Pl(
                              Ol(
                                Nl(
                                  new Ml(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId,
                                  ),
                                  g,
                                ),
                                h,
                              ),
                              m,
                            ),
                            n,
                          ),
                          p,
                        ),
                        q,
                      ),
                      d.messageContext.eventMetadata,
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v('2');
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    },
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v('3');
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  },
                ),
                !!d.messageContext.isGtmEvent,
              ),
            );
          try {
            Zl(d.messageContext.eventId, r, '1'),
              Fl(d.type, d.h.id, u),
              f(d.h.id, b, d.C, u);
          } catch (v) {
            Zl(d.messageContext.eventId, r, '4');
          }
        }
      }
    };
  jm.prototype.register = function (a, b, c) {
    var d = em(this, a);
    3 !== d.status &&
      ((d.W = b), (d.status = 3), c && (nb(d.h, c), (d.h = c)), this.flush());
  };
  jm.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === em(this, c).status &&
        ((em(this, c).status = 2), this.push('require', [{}], c, {})),
      em(this, c).C && (d.deferrable = !1));
    this.h.push(new im(a, c, b, d));
    d.deferrable || this.flush();
  };
  jm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.h.length;
      e = { Ac: void 0, th: void 0 }
    ) {
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable)
        !g || em(this, g).C
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case 'require':
            if (3 !== em(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case 'set':
            l(f.s[0], function (r, t) {
              nb($a(r, t), b.C);
            });
            break;
          case 'config':
            var h = em(this, g);
            e.Ac = {};
            l(
              f.s[0],
              (function (r) {
                return function (t, u) {
                  nb($a(t, u), r.Ac);
                };
              })(e),
            );
            var m = !!e.Ac[P.g.Wb];
            delete e.Ac[P.g.Wb];
            var n = g.ba === g.id;
            m || (n ? (h.F = {}) : (h.M[g.id] = {}));
            (h.C && m) || km(this, P.g.da, e.Ac, f);
            h.C = !0;
            n ? nb(e.Ac, h.F) : (nb(e.Ac, h.M[g.id]), M(70));
            d = !0;
            break;
          case 'event':
            e.th = {};
            l(
              f.s[0],
              (function (r) {
                return function (t, u) {
                  nb($a(t, u), r.th);
                };
              })(e),
            );
            km(this, f.s[1], e.th, f);
            break;
          case 'get':
            var p = {},
              q = ((p[P.g.pb] = f.s[0]), (p[P.g.Cb] = f.s[1]), p);
            km(this, P.g.Ra, q, f);
        }
        this.h.shift();
        lm(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var lm = function (a, b) {
      if ('require' !== b.type)
        if (b.h)
          for (var c = em(a, b.h).s[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.s)
            if (a.s.hasOwnProperty(e)) {
              var f = a.s[e];
              if (f && f.s)
                for (var g = f.s[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    am = new jm();
  function mm(a, b) {
    if ('' === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var nm = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    om = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var pm = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function qm() {
    return Ob ? !!Vb && !!Vb.platform : !1;
  }
  function rm() {
    return Yb('iPhone') && !Yb('iPod') && !Yb('iPad');
  }
  function sm() {
    rm() || Yb('iPad') || Yb('iPod');
  }
  $b();
  Zb() || Yb('Trident') || Yb('MSIE');
  Yb('Edge');
  !Yb('Gecko') ||
    (-1 != Ub().toLowerCase().indexOf('webkit') && !Yb('Edge')) ||
    Yb('Trident') ||
    Yb('MSIE') ||
    Yb('Edge');
  -1 != Ub().toLowerCase().indexOf('webkit') && !Yb('Edge') && Yb('Mobile');
  qm() || Yb('Macintosh');
  qm() || Yb('Windows');
  (qm() ? 'Linux' === Vb.platform : Yb('Linux')) || qm() || Yb('CrOS');
  qm() || Yb('Android');
  rm();
  Yb('iPad');
  Yb('iPod');
  sm();
  Ub().toLowerCase().indexOf('kaios');
  var tm = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    um = /#|$/,
    vm = function (a, b) {
      var c = a.search(um),
        d = tm(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf('&', d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '),
      );
    },
    wm = /[?&]($|#)/,
    xm = function (a, b, c) {
      for (
        var d, e = a.search(um), f = 0, g, h = [];
        0 <= (g = tm(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf('&', g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join('').replace(wm, '$1');
      var m,
        n = null != c ? '=' + encodeURIComponent(String(c)) : '';
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf('#');
        0 > r && (r = d.length);
        var t = d.indexOf('?'),
          u;
        0 > t || t > r ? ((t = r), (u = '')) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + '&' + p : p) : v;
        m = q[0] + (q[1] ? '?' + q[1] : '') + q[2];
      } else m = d;
      return m;
    };
  var ym = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              kj(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    zm = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Am(a) {
    if (!a || !C.head) return null;
    var b = Bm('META');
    C.head.appendChild(b);
    b.httpEquiv = 'origin-trial';
    b.content = a;
    return b;
  }
  var Cm = function (a) {
      if (z.top == z) return 0;
      if (void 0 === a ? 0 : a) {
        var b = z.location.ancestorOrigins;
        if (b) return b[b.length - 1] == z.location.origin ? 1 : 2;
      }
      return ym(z.top) ? 1 : 2;
    },
    Bm = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Dm(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Bm('IMG', a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Db(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener('load', f, !1);
        e.removeEventListener && e.removeEventListener('error', f, !1);
      };
      pm(e, 'load', f);
      pm(e, 'error', f);
    }
    d && (e.attributionSrc = '');
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Fm = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe';
      zm(a, function (d, e) {
        if (d || 0 === d) c += '&' + e + '=' + encodeURIComponent('' + d);
      });
      Em(c, b);
    },
    Em = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: 'include',
          redirect: 'follow',
          method: 'get',
          mode: 'no-cors',
        };
        d &&
          ((e.mode = 'cors'),
          'setAttributionReporting' in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: 'true',
                triggerEligible: 'false',
              })
            : (e.headers = {
                'Attribution-Reporting-Eligible': 'event-source',
              }));
        c.fetch(a, e);
      } else Dm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Gm = function () {};
  var Hm = function (a) {
      void 0 !== a.addtlConsent &&
        'string' !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        'boolean' !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3;
    },
    Im = function (a, b) {
      b = void 0 === b ? {} : b;
      this.s = a;
      this.h = null;
      this.M = {};
      this.Qa = 0;
      var c;
      this.W = null != (c = b.lk) ? c : 500;
      var d;
      this.F = null != (d = b.ho) ? d : !1;
      this.C = null;
    };
  sa(Im, Gm);
  var Km = function (a) {
    return 'function' === typeof a.s.__tcfapi || null != Jm(a);
  };
  Im.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.F },
      d = om(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.W &&
      (e = setTimeout(function () {
        c.tcString = 'tcunavailable';
        c.internalErrorState = 1;
        d();
      }, this.W));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Hm(c)),
          (c.internalBlockOnErrors = b.F),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = 'tcunavailable'), h || (c.internalErrorState = 3)))
        : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Lm(this, 'addEventListener', f);
    } catch (g) {
      (c.tcString = 'tcunavailable'),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Im.prototype.removeEventListener = function (a) {
    a && a.listenerId && Lm(this, 'removeEventListener', null, a.listenerId);
  };
  var Nm = function (a, b, c) {
      var d;
      d = void 0 === d ? '755' : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? '755' : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Mm(a.vendor.consents, void 0 === d ? '755' : d);
          m =
            n && '1' === b && a.purposeOneTreatment && 'CH' === a.publisherCC
              ? !0
              : n && Mm(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? Mm(a.purpose.legitimateInterests, b) &&
                Mm(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
              : !0
            : !0;
      return m;
    },
    Mm = function (a, b) {
      return !(!a || !a[b]);
    },
    Lm = function (a, b, c, d) {
      c || (c = function () {});
      if ('function' === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Jm(a)) {
        Om(a);
        var f = ++a.Qa;
        a.M[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            '*',
          );
        }
      } else c({}, !1);
    },
    Jm = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Om = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        pm(a.s, 'message', a.C));
    },
    Pm = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Hm(a));
      return 'error' === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Fm({ e: String(a.internalErrorState) }), !1)
          : !0
        : 'loaded' !== a.cmpStatus ||
          ('tcloaded' !== a.eventStatus &&
            'useractioncomplete' !== a.eventStatus)
        ? !1
        : !0;
    };
  var Qm = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function Rm() {
    var a = pi.tcf || {};
    return (pi.tcf = a);
  }
  var Xm = function () {
    var a = Rm(),
      b = new Im(z, { lk: -1 });
    Km(b) && !Sm() && !Tm() && M(124);
    if (!a.active && Km(b)) {
      Sm() &&
        ((a.active = !0),
        (a.hc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (sj().active = !0),
        (a.tcString = 'tcunavailable'));
      Xj();
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState)
            Um(a), Yj([P.g.J, P.g.Ja, P.g.N]), (sj().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            Tm() && (a.active = !0),
            !Vm(c) || Sm() || Tm())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in Qm) Qm.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (Vm(c)) {
              var g = {},
                h;
              for (h in Qm)
                if (Qm.hasOwnProperty(h))
                  if ('1' === h) {
                    var m,
                      n = c,
                      p = { Ul: !0 };
                    p = void 0 === p ? {} : p;
                    m = Pm(n)
                      ? !1 === n.gdprApplies
                        ? !0
                        : 'tcunavailable' === n.tcString ||
                          (void 0 === n.gdprApplies && !p.Ul) ||
                          'string' !== typeof n.tcString ||
                          !n.tcString.length
                        ? !p.lo
                        : Nm(n, '1', 0)
                      : !1;
                    g['1'] = m;
                  } else g[h] = Nm(c, h, Qm[h]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || 'tcempty';
              a.hc = d;
              var q = {},
                r = ((q[P.g.J] = a.hc['1'] ? 'granted' : 'denied'), q);
              !0 !== a.gdprApplies
                ? (Yj([P.g.J, P.g.Ja, P.g.N]), (sj().active = !0))
                : ((r[P.g.Ja] = a.hc['3'] && a.hc['4'] ? 'granted' : 'denied'),
                  'number' === typeof a.tcfPolicyVersion &&
                  4 <= a.tcfPolicyVersion
                    ? (r[P.g.N] = a.hc['1'] && a.hc['7'] ? 'granted' : 'denied')
                    : Yj([P.g.N]),
                  Rj(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: Wm() || '',
                    },
                  ));
            }
          } else Yj([P.g.J, P.g.Ja, P.g.N]);
        });
      } catch (c) {
        Um(a), Yj([P.g.J, P.g.Ja, P.g.N]), (sj().active = !0);
      }
    }
  };
  function Um(a) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
  }
  function Vm(a) {
    return (
      'tcloaded' === a.eventStatus ||
      'useractioncomplete' === a.eventStatus ||
      'cmpuishown' === a.eventStatus
    );
  }
  var Sm = function () {
    return !0 === z.gtag_enable_tcf_support;
  };
  function Tm() {
    return !0 === Rm().enableAdvertiserConsentMode;
  }
  var Wm = function () {
      var a = Rm();
      if (a.active) return a.tcString;
    },
    Ym = function () {
      var a = Rm();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? '1' : '0';
    },
    Zm = function (a) {
      if (!Qm.hasOwnProperty(String(a))) return !0;
      var b = Rm();
      return b.active && b.hc ? !!b.hc[String(a)] : !0;
    },
    $m = function () {
      return Km(new Im(z, { lk: -1 }));
    };
  var an = [P.g.J, P.g.R, P.g.N, P.g.Ja],
    bn = {},
    cn = ((bn[P.g.J] = 1), (bn[P.g.R] = 2), bn);
  function dn(a) {
    if (void 0 === a) return 0;
    switch (V(a, P.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var en = function (a) {
      var b = dn(a);
      if (3 === b) return !1;
      switch (Ej(P.g.Ja)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    fn = function () {
      return Hj() || !Dj(P.g.J) || !Dj(P.g.R);
    },
    gn = function () {
      var a = {},
        b;
      for (b in cn) cn.hasOwnProperty(b) && (a[cn[b]] = Ej(b));
      return 'G1' + Ke(a[1] || 0) + Ke(a[2] || 0);
    },
    hn = {},
    jn =
      ((hn[P.g.J] = 0), (hn[P.g.R] = 1), (hn[P.g.N] = 2), (hn[P.g.Ja] = 3), hn);
  function kn(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var ln = function (a) {
      for (var b = '1', c = 0; c < an.length; c++) {
        var d = b,
          e,
          f = an[c],
          g = pj[f];
        e = void 0 === g ? 0 : jn.hasOwnProperty(g) ? 12 | jn[g] : 8;
        var h = sj();
        h.accessedAny = !0;
        var m = h.entries[f] || {};
        e = (e << 2) | kn(m.implicit);
        b =
          d +
          ('' +
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
              e
            ] +
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
              (kn(m.declare) << 4) | (kn(m.default) << 2) | kn(m.update)
            ]);
      }
      var n = b,
        p;
      p = '' + ((Hj() << 2) | dn(a));
      return n + p;
    },
    mn = function () {
      var a;
      a = void 0 === a ? {} : a;
      if (!Dj(P.g.N)) return '-';
      for (
        var b = Fj(), c = '', d = fa(Object.keys(ni)), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        !1 !== b[f] && !1 !== a[f] && (c += ni[f]);
      }
      return '' === c ? '-' : c;
    },
    nn = function () {
      return fj() || ((Sm() || Tm()) && '1' === Ym()) ? '1' : '0';
    },
    on = function () {
      return (fj() ? !0 : !(!Sm() && !Tm()) && '1' === Ym()) || !Dj(P.g.N);
    },
    pn = function () {
      var a = '0',
        b = '0',
        c;
      var d = Rm();
      c = d.active ? d.cmpId : void 0;
      'number' === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
            (c >> 6) & 63
          ]),
        (b = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
          c & 63
        ]));
      var e = '0',
        f;
      var g = Rm();
      f = g.active ? g.tcfPolicyVersion : void 0;
      'number' === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
          f
        ]);
      var h = 0;
      fj() && (h |= 1);
      '1' === Ym() && (h |= 2);
      Sm() && (h |= 4);
      var m;
      var n = Rm();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? '1'
            : '0'
          : void 0;
      '1' === m && (h |= 8);
      sj().waitPeriodTimedOut && (h |= 16);
      return (
        '1' +
        a +
        b +
        e +
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[h]
      );
    };
  var qn = function () {
    var a = !1;
    return a;
  };
  var rn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    sn = function (a, b) {
      var c = Sf.ctid.split('-')[0].toUpperCase(),
        d = {};
      d.ctid = Sf.ctid;
      d.gn = oi.ve;
      d.ln = oi.eh;
      d.Im = Ck.se ? 2 : 1;
      d.pd = Sf.canonicalContainerId;
      d.pd !== a && (d.eg = a);
      R(63) ? (d.ik = 2) : R(64) && (d.ik = 1);
      vi ? ((d.Zf = rn[c]), d.Zf || (d.Zf = 0)) : (d.Zf = zi ? 13 : 10);
      xi ? (d.Kh = 1) : qn() ? (d.Kh = 2) : (d.Kh = 3);
      var e = {};
      e[6] = Dk;
      R(88) && !Dk && (e[1] = !0);
      d.Fl = e;
      var f;
      var g = d.Zf,
        h = d.Kh;
      void 0 === g
        ? (f = '')
        : (h || (h = 0), (f = '' + Gg(1, 1) + Je((g << 2) | h)));
      var m = d.fo,
        n = 4 + f + (m ? '' + Gg(2, 1) + Je(m) : ''),
        p,
        q = d.ln;
      p = q && Fg.test(q) ? '' + Gg(3, 2) + q : '';
      var r,
        t = d.gn;
      r = t ? '' + Gg(4, 1) + Je(t) : '';
      var u;
      var v = d.ctid;
      if (v && b) {
        var w = v.split('-'),
          x = w[0].toUpperCase();
        if ('GTM' !== x && 'OPT' !== x) u = '';
        else {
          var y = w[1];
          u = '' + Gg(5, 3) + Je(1 + y.length) + (d.Im || 0) + y;
        }
      } else u = '';
      var B = d.ik,
        A = d.pd,
        D = d.eg,
        G = d.no,
        E =
          n +
          p +
          r +
          u +
          (B ? '' + Gg(6, 1) + Je(B) : '') +
          (A ? '' + Gg(7, 3) + Je(A.length) + A : '') +
          (D ? '' + Gg(8, 3) + Je(D.length) + D : '') +
          (G ? '' + Gg(9, 3) + Je(G.length) + G : ''),
        F;
      var N = d.Fl;
      N = void 0 === N ? {} : N;
      for (
        var O = [], T = fa(Object.keys(N)), Y = T.next();
        !Y.done;
        Y = T.next()
      ) {
        var S = Y.value;
        O[Number(S)] = N[S];
      }
      if (O.length) {
        var U = Gg(10, 3),
          ja;
        if (0 === O.length) ja = Je(0);
        else {
          for (var ia = [], ca = 0, Da = !1, pa = 0; pa < O.length; pa++) {
            Da = !0;
            var Ca = pa % 6;
            O[pa] && (ca |= 1 << Ca);
            5 === Ca && (ia.push(Je(ca)), (ca = 0), (Da = !1));
          }
          Da && ia.push(Je(ca));
          ja = ia.join('');
        }
        var Pa = ja;
        F = '' + U + Je(Pa.length) + Pa;
      } else F = '';
      return E + F;
    };
  var tn = function (a, b, c) {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
      var g = e[f].split('='),
        h = g[0].replace(/^\s*|\s*$/g, '');
      if (h && h == a) {
        var m = g
          .slice(1)
          .join('=')
          .replace(/^\s*|\s*$/g, '');
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Gn = function (a, b, c, d) {
      return un(d) ? tn(a, String(b || Fn()), c) : [];
    },
    Jn = function (a, b, c, d, e) {
      if (un(e)) {
        var f = Hn(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = In(
            f,
            function (g) {
              return g.Pf;
            },
            b,
          );
          if (1 === f.length) return f[0].id;
          f = In(
            f,
            function (g) {
              return g.Xe;
            },
            c,
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Kn(a, b, c, d) {
    var e = Fn(),
      f = window;
    'null' !== f.origin && (f.document.cookie = a);
    var g = Fn();
    return e != g || (void 0 != c && 0 <= Gn(b, g, !1, d).indexOf(c));
  }
  var On = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + '; ' + x + '=' + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + '; ' + x;
      }
      if (!un(c.Mb)) return 2;
      var g;
      void 0 == b
        ? (g = a + '=deleted; expires=' + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Ln(b)),
          (g = a + '=' + b));
      var h = {};
      g = e(g, 'path', c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = '' + c.expires);
      g = e(g, 'expires', m);
      g = e(g, 'max-age', c.Mm);
      g = e(g, 'samesite', c.mn);
      c.on && (g = f(g, 'secure'));
      var n = c.domain;
      if (n && 'auto' === n.toLowerCase()) {
        for (var p = Mn(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = 'none' !== p[t] ? p[t] : void 0,
            v = e(g, 'domain', u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Nn(u, c.path) && Kn(v, a, b, c.Mb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && 'none' !== n.toLowerCase() && (g = e(g, 'domain', n));
      g = f(g, c.flags);
      d && d(a, h);
      return Nn(n, c.path) ? 1 : Kn(g, a, b, c.Mb) ? 0 : 1;
    },
    Pn = function (a, b, c) {
      null == c.path && (c.path = '/');
      c.domain || (c.domain = 'auto');
      return On(a, b, c);
    };
  function In(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Hn(a, b, c) {
    for (var d = [], e = Gn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split('.'),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split('-')),
          d.push({ id: g.join('.'), Pf: 1 * m[0] || 1, Xe: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Ln = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Qn = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Rn = /(^|\.)doubleclick\.net$/i,
    Nn = function (a, b) {
      return (
        Rn.test(window.document.location.hostname) || ('/' === b && Qn.test(a))
      );
    },
    Fn = function () {
      return 'null' !== window.origin ? window.document.cookie : '';
    },
    Mn = function () {
      var a = [],
        b = window.document.location.hostname.split('.');
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ['none'];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'));
      var e = window.document.location.hostname;
      Rn.test(e) || Qn.test(e) || a.push('none');
      return a;
    },
    un = function (a) {
      return a && mj().h()
        ? (k(a) ? [a] : a).every(function (b) {
            return Gj(b) && Dj(b);
          })
        : !0;
    },
    Sn = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf('.') ? a.substr(1) : a;
      return a.split('.').length;
    },
    Tn = function (a) {
      if (!a || '/' === a) return 1;
      '/' !== a[0] && (a = '/' + a);
      '/' !== a[a.length - 1] && (a += '/');
      return a.split('/').length - 1;
    },
    Un = function (a, b) {
      var c = '' + Sn(a),
        d = Tn(b);
      1 < d && (c += '-' + d);
      return c;
    };
  var Vn = function (a) {
      var b = Math.round(2147483647 * Math.random()),
        c;
      if (a) {
        var d = 1,
          e,
          f,
          g;
        if (a)
          for (d = 0, f = a.length - 1; 0 <= f; f--)
            (g = a.charCodeAt(f)),
              (d = ((d << 6) & 268435455) + g + (g << 14)),
              (e = d & 266338304),
              (d = 0 !== e ? d ^ (e >> 21) : d);
        c = String(b ^ (d & 2147483647));
      } else c = String(b);
      return c;
    },
    Wn = function (a) {
      return [Vn(a), Math.round(Ta() / 1e3)].join('.');
    },
    Xn = function (a, b, c, d, e) {
      var f = Sn(b);
      return Jn(a, f, Tn(c), d, e);
    },
    Yn = function (a, b, c, d) {
      return [b, Un(c, d), a].join('.');
    };
  function Zn(a, b, c, d) {
    var e,
      f = Number(null != a.Gc ? a.Gc : void 0);
    0 !== f && (e = new Date((b || Ta()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Mb: d,
    };
  }
  var $n;
  var eo = function () {
      var a = ao,
        b = bo,
        c = co(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Mc(C, 'mousedown', d);
        Mc(C, 'keyup', d);
        Mc(C, 'submit', e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    fo = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      co().decorators.push(f);
    },
    go = function (a, b, c) {
      for (var d = co().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== C.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Wa(e, g.callback());
        }
      }
      return e;
    };
  function co() {
    var a = Dc('google_tag_data', {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var ho = /(.*?)\*(.*?)\*(.*)/,
    io = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    jo = /^(?:www\.|m\.|amp\.)+/,
    ko = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function lo(a) {
    var b = ko.exec(a);
    if (b) return { Qh: b[1], query: b[2], fragment: b[3] };
  }
  function mo(a, b) {
    var c = [
        Bc.userAgent,
        new Date().getTimezoneOffset(),
        Bc.userLanguage || Bc.language,
        Math.floor(Ta() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join('*'),
      d;
    if (!(d = $n)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    $n = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ $n[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function no() {
    return function (a) {
      var b = ok(z.location.href),
        c = b.search.replace('?', ''),
        d = hk(c, '_gl', !1, !0) || '';
      a.query = oo(d) || {};
      var e = kk(b, 'fragment'),
        f;
      var g = -1;
      if (Ya(e, '_gl=')) g = 4;
      else {
        var h = e.indexOf('&_gl=');
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf('&', g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = oo(f || '') || {};
    };
  }
  var po = function (a) {
      var b = no(),
        c = co();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Wa(d, e.query), a && Wa(d, e.fragment));
      return d;
    },
    oo = function (a) {
      try {
        var b = qo(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split('*') : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = yb(d[e + 1]);
            c[f] = g;
          }
          Ab('TAGGING', 6);
          return c;
        }
      } catch (h) {
        Ab('TAGGING', 8);
      }
    };
  function qo(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = ho.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && '1' === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === mo(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        Ab('TAGGING', 7);
      }
    }
  }
  function ro(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)').exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && '&' !== w && (p += '&');
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = lo(c);
    if (!g) return '';
    var h = g.query || '',
      m = g.fragment || '',
      n = a + '=' + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = '#' + f(m.substring(1)))
      : (h = '?' + f(h.substring(1)));
    return '' + g.Qh + h + m;
  }
  function so(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            void 0 !== x &&
              x === x &&
              null !== x &&
              '[object Object]' !== x.toString() &&
              (v.push(w), v.push(xb(String(x))));
          }
        var y = v.join('*');
        u = ['1', mo(y), y].join('*');
        d
          ? (Rf(13) || Rf(11) || !p) && to('_gl', u, a, p, q)
          : uo('_gl', u, a, p, q);
      }
    }
    var d = 'FORM' === (a.tagName || '').toUpperCase(),
      e = go(b, 1, d),
      f = go(b, 2, d),
      g = go(b, 4, d),
      h = go(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Rf(11) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && vo(m, h[m], a);
  }
  function vo(a, b, c) {
    'a' === c.tagName.toLowerCase()
      ? uo(a, b, c)
      : 'form' === c.tagName.toLowerCase() && to(a, b, c);
  }
  function uo(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Rf(16) || d)) {
        var h = z.location.href,
          m = lo(c.href),
          n = lo(h);
        g = !(m && n && m.Qh === n.Qh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = ro(a, b, c.href, d, e);
      pc.test(p) && (c.href = p);
    }
  }
  function to(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || '').toLowerCase();
      if ('get' !== f || d) {
        if ('get' === f || 'post' === f) {
          var g = ro(a, b, c.action, d, e);
          pc.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute('value', b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = C.createElement('input');
          q.setAttribute('type', 'hidden');
          q.setAttribute('name', a);
          q.setAttribute('value', b);
          c.appendChild(q);
        }
      }
    }
  }
  function ao(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ('http:' !== f && 'https:' !== f) || so(e, e.hostname);
      }
    } catch (g) {}
  }
  function bo(a) {
    try {
      if (a.action) {
        var b = kk(ok(a.action), 'host');
        so(a, b);
      }
    } catch (c) {}
  }
  var wo = function (a, b, c, d) {
      eo();
      fo(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
    },
    xo = function (a, b) {
      eo();
      fo(a, [jk(z.location, 'host', !0)], b, !0, !0);
    },
    yo = function () {
      var a = C.location.hostname,
        b = io.exec(C.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = '';
      if (c) {
        var f = c.split('/'),
          g = f[1];
        e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf('xn--')) return !1;
        e = d.replace(/-/g, '.').replace(/\.\./g, '-');
      }
      var h = a.replace(jo, ''),
        m = e.replace(jo, ''),
        n;
      if (!(n = h === m)) {
        var p = '.' + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    zo = function (a, b) {
      return !1 === a ? !1 : a || b || yo();
    };
  var Ao = ['1'],
    Bo = {},
    Co = {},
    Ho = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Do(a.prefix);
      if (!Bo[c])
        if (Eo(c, a.path, a.domain)) {
          var d = Co[Do(a.prefix)];
          Fo(a, d ? d.id : void 0, d ? d.Jh : void 0);
        } else {
          var e = qk('auiddc');
          if (e) Ab('TAGGING', 17), (Bo[c] = e);
          else if (b) {
            var f = Do(a.prefix),
              g = Wn();
            if (0 === Go(f, g, a)) {
              var h = Dc('google_tag_data', {});
              h._gcl_au || (h._gcl_au = g);
            }
            Eo(c, a.path, a.domain);
          }
        }
    };
  function Fo(a, b, c) {
    var d = Do(a.prefix),
      e = Bo[d];
    if (e) {
      var f = e.split('.');
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + '.' + b + '.' + (c ? c : Math.floor(Ta() / 1e3)));
          Go(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function Go(a, b, c, d) {
    var e = Yn(b, '1', c.domain, c.path),
      f = Zn(c, d);
    f.Mb = Io();
    return Pn(a, e, f);
  }
  function Eo(a, b, c) {
    var d = Xn(a, b, c, Ao, Io());
    if (!d) return !1;
    Jo(a, d);
    return !0;
  }
  function Jo(a, b) {
    var c = b.split('.');
    5 === c.length
      ? ((Bo[a] = c.slice(0, 2).join('.')),
        (Co[a] = { id: c.slice(2, 4).join('.'), Jh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Co[a] = { id: c.slice(0, 2).join('.'), Jh: Number(c[2]) || 0 })
      : (Bo[a] = b);
  }
  function Do(a) {
    return (a || '_gcl') + '_au';
  }
  function Ko(a) {
    function b() {
      Dj(c) && a();
    }
    var c = Io();
    Kj(function () {
      b();
      Dj(c) || Lj(b, c);
    }, c);
  }
  function Lo(a) {
    var b = po(!0),
      c = Do(a.prefix);
    Ko(function () {
      var d = b[c];
      if (d) {
        Jo(c, d);
        var e = 1e3 * Number(Bo[c].split('.')[1]);
        if (e) {
          Ab('TAGGING', 16);
          var f = Zn(a, e);
          f.Mb = Io();
          var g = Yn(d, '1', a.domain, a.path);
          Pn(c, g, f);
        }
      }
    });
  }
  function Mo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = Xn(a, e.path, e.domain, Ao, Io());
      h && (g[a] = h);
      return g;
    };
    Ko(function () {
      wo(f, b, c, d);
    });
  }
  function Io() {
    return Rf(14) ? ['ad_storage', 'ad_user_data'] : ['ad_storage'];
  }
  var No = function (a) {
    for (
      var b = [],
        c = C.cookie.split(';'),
        d = new RegExp(
          '^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$',
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          gi: f[1],
          value: f[2],
          timestamp: Number(f[2].split('.')[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function Oo(a, b) {
    var c = No(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split('.');
      if (
        !('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].gi] || (d[c[e].gi] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ia: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].gi].push(g);
      }
    }
    return d;
  }
  var Po = {},
    Qo =
      ((Po.k = { Ma: /^[\w-]+$/ }),
      (Po.b = { Ma: /^[\w-]+$/, Yh: !0 }),
      (Po.i = { Ma: /^[1-9]\d*$/ }),
      Po),
    Ro = {},
    So =
      ((Ro[5] = {
        version: '2',
        Bn: ['2'],
        ek: 'ad_storage',
        Hj: ['k', 'i', 'b'],
      }),
      Ro);
  function To(a, b) {
    var c = b.Ma;
    return 'function' === typeof c ? c(a) : c.test(a);
  }
  function Uo(a) {
    for (
      var b = fa(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Be: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Be = Qo[e];
      d.Be
        ? d.Be.Yh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (h) {
                      return To(h, g.Be);
                    };
                  })(d),
                )
              : void 0)
          : ('string' === typeof f && To(f, d.Be)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
    return a;
  }
  function Vo(a) {
    var b = So[5];
    if (b) {
      for (
        var c = [], d = Gn(a, void 0, void 0, b.ek), e = fa(d), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value.split('.'),
          h = g.shift();
        if (-1 !== b.Bn.indexOf(h)) {
          g.shift();
          var m = g.join('.'),
            n = c,
            p = n.push,
            q;
          var r = {},
            t = So[5];
          if (t) {
            for (
              var u = t.Hj, v = fa(m.split('$')), w = v.next();
              !w.done;
              w = v.next()
            ) {
              var x = w.value,
                y = x[0];
              if (-1 !== u.indexOf(y))
                try {
                  var B = decodeURIComponent(x.substring(1)),
                    A = Qo[y];
                  A &&
                    (A.Yh ? ((r[y] = r[y] || []), r[y].push(B)) : (r[y] = B));
                } catch (D) {}
            }
            q = Uo(r);
          } else q = void 0;
          p.call(n, q);
        }
      }
      return c;
    }
  }
  function Wo(a, b, c, d) {
    c = c || {};
    var e;
    var f = So[5];
    if (f) {
      for (var g = [], h = fa(f.Hj), m = h.next(); !m.done; m = h.next()) {
        var n = m.value,
          p = Qo[n];
        if (p) {
          var q = b[n];
          if (void 0 !== q)
            if (p.Yh && Array.isArray(q))
              for (var r = fa(q), t = r.next(); !t.done; t = r.next())
                g.push(encodeURIComponent('' + n + t.value));
            else g.push(encodeURIComponent('' + n + q));
        }
      }
      e = g.join('$');
    } else e = void 0;
    var u = e;
    if (u) {
      var v = So[5],
        w = [v.version, Un(c.domain, c.path), u].join('.');
      Pn(a, w, Zn(c, d, void 0, v.ek));
    }
  }
  var Xo = /^\w+$/,
    Yo = /^[\w-]+$/,
    Zo = {
      ag: '_ag',
      aw: '_aw',
      dc: '_dc',
      gb: '_gb',
      gf: '_gf',
      gp: '_gp',
      ha: '_ha',
    };
  function $o() {
    return Rf(14) ? ['ad_storage', 'ad_user_data'] : ['ad_storage'];
  }
  var ap = function (a) {
      return !mj().h() || Dj(a);
    },
    bp = function (a) {
      function b() {
        var d = ap(c);
        d && a();
        return d;
      }
      var c = $o();
      Kj(function () {
        b() || Lj(b, c);
      }, c);
    },
    dp = function (a) {
      return cp(a).map(function (b) {
        return b.ia;
      });
    };
  function ep(a, b, c, d, e) {
    var f = Ia(a, function (g) {
      return g.ia === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = fp(f.labels || [], e || [])))
      : a.push({ version: b, ia: c, timestamp: d, labels: e });
  }
  var cp = function (a) {
      for (
        var b = [], c = Gn(a, C.cookie, void 0, $o()), d = fa(c), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = gp(e.value);
        if (null != f) {
          var g = f;
          ep(b, g.version, g.ia, g.timestamp, g.labels);
        }
      }
      b.sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
      return hp(b);
    },
    ip = function (a) {
      if (!Rf(20)) return [];
      for (
        var b = Vo(a) || [], c = [], d = fa(b), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value,
          g = f,
          h = f ? 1e3 * (Number(f.i) || 0) : 0;
        h && ep(c, '2', g.k, h, g.b || []);
      }
      return c.sort(function (m, n) {
        return n.timestamp - m.timestamp;
      });
    };
  function fp(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function jp(a) {
    return a && 'string' == typeof a && a.match(Xo) ? a : '_gcl';
  }
  function kp(a, b) {
    var c = Rf(20),
      d = ok(a),
      e = kk(d, 'query', !1, void 0, 'gclid'),
      f = kk(d, 'query', !1, void 0, 'gclsrc'),
      g = kk(d, 'query', !1, void 0, 'wbraid'),
      h;
    c && (h = kk(d, 'query', !1, void 0, 'gbraid'));
    var m = kk(d, 'query', !1, void 0, 'dclid');
    if (b && (!e || !f || !g || (c && !h))) {
      var n = d.hash.replace('#', '');
      e = e || hk(n, 'gclid', !1);
      f = f || hk(n, 'gclsrc', !1);
      g = g || hk(n, 'wbraid', !1);
      c && (h = h || hk(n, 'gbraid', !1));
    }
    return lp(e, f, m, g, h);
  }
  var mp = function () {
      return kp(z.location.href, !0);
    },
    lp = function (a, b, c, d, e) {
      var f = {},
        g = function (h, m) {
          f[m] || (f[m] = []);
          f[m].push(h);
        };
      f.gclid = a;
      f.gclsrc = b;
      f.dclid = c;
      if (void 0 !== a && a.match(Yo))
        switch (b) {
          case void 0:
            g(a, 'aw');
            break;
          case 'aw.ds':
            g(a, 'aw');
            g(a, 'dc');
            break;
          case 'ds':
            g(a, 'dc');
            break;
          case '3p.ds':
            g(a, 'dc');
            break;
          case 'gf':
            g(a, 'gf');
            break;
          case 'ha':
            g(a, 'ha');
        }
      c && g(c, 'dc');
      void 0 !== d && Yo.test(d) && ((f.wbraid = d), g(d, 'gb'));
      Rf(20) && void 0 !== e && Yo.test(e) && ((f.gbraid = e), g(e, 'ag'));
      return f;
    },
    op = function (a) {
      var b = mp();
      if (Rf(18)) {
        for (
          var c = !0, d = fa(Object.keys(b)), e = d.next();
          !e.done;
          e = d.next()
        )
          if (void 0 !== b[e.value]) {
            c = !1;
            break;
          }
        c && (b = kp(z.document.referrer, !1));
      }
      np(b, !1, a);
    };
  function np(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = jp(c.prefix);
    d = d || Ta();
    var g = Math.round(d / 1e3),
      h = $o(),
      m = !1,
      n = !1,
      p = function () {
        if (ap(h)) {
          var q = Zn(c, d, !0);
          q.Mb = h;
          for (
            var r = function (E, F) {
                var N = pp(E, f);
                N && (Pn(N, F, q), 'gb' !== E && (m = !0));
              },
              t = function (E) {
                var F = ['GCL', g, E];
                0 < e.length && F.push(e.join('.'));
                return F.join('.');
              },
              u = fa(['aw', 'dc', 'gf', 'ha', 'gp']),
              v = u.next();
            !v.done;
            v = u.next()
          ) {
            var w = v.value;
            a[w] && r(w, t(a[w][0]));
          }
          if (!m && a.gb) {
            var x = a.gb[0],
              y = pp('gb', f);
            (!b &&
              cp(y).some(function (E) {
                return E.ia === x && E.labels && 0 < E.labels.length;
              })) ||
              r('gb', t(x));
          }
        }
        if (!n && Rf(20) && a.gbraid && ap('ad_storage') && ((n = !0), !m)) {
          var B = a.gbraid,
            A = pp('ag', f);
          if (
            b ||
            !ip(A).some(function (E) {
              return E.ia === B && E.labels && 0 < E.labels.length;
            })
          ) {
            var D = {},
              G = ((D.k = B), (D.i = g), (D.b = e), D);
            Wo(A, G, c, d);
          }
        }
      };
    Kj(function () {
      p();
      ap(h) || Lj(p, h);
    }, h);
  }
  var rp = function (a, b) {
      var c = po(!0);
      bp(function () {
        for (var d = jp(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Zo[f]) {
            var g = pp(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(qp(h), Ta()),
                n;
              b: {
                for (
                  var p = m, q = Gn(g, C.cookie, void 0, $o()), r = 0;
                  r < q.length;
                  ++r
                )
                  if (qp(q[r]) > p) {
                    n = !0;
                    break b;
                  }
                n = !1;
              }
              if (!n) {
                var t = Zn(b, m, !0);
                t.Mb = $o();
                Pn(g, h, t);
              }
            }
          }
        }
        np(lp(c.gclid, c.gclsrc), !1, b);
      });
    },
    pp = function (a, b) {
      var c = Zo[a];
      if (void 0 !== c) return b + c;
    },
    qp = function (a) {
      return 0 !== sp(a.split('.')).length
        ? 1e3 * (Number(a.split('.')[1]) || 0)
        : 0;
    };
  function gp(a) {
    var b = sp(a.split('.'));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ia: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function sp(a) {
    return 3 > a.length ||
      ('GCL' !== a[0] && '1' !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Yo.test(a[2])
      ? []
      : a;
  }
  var tp = function (a, b, c, d, e) {
      if (Ha(b) && 'null' !== z.origin) {
        var f = jp(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = pp(a[m], f);
              if (n) {
                var p = Gn(n, C.cookie, void 0, $o());
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        bp(function () {
          wo(g, b, c, d);
        });
      }
    },
    hp = function (a) {
      return a.filter(function (b) {
        return Yo.test(b.ia);
      });
    },
    up = function (a, b) {
      if ('null' !== z.origin) {
        for (var c = jp(b.prefix), d = {}, e = 0; e < a.length; e++)
          Zo[a[e]] && (d[a[e]] = Zo[a[e]]);
        bp(function () {
          l(d, function (f, g) {
            var h = Gn(c + g, C.cookie, void 0, $o());
            h.sort(function (t, u) {
              return qp(u) - qp(t);
            });
            if (h.length) {
              var m = h[0],
                n = qp(m),
                p = 0 !== sp(m.split('.')).length ? m.split('.').slice(3) : [],
                q = {},
                r;
              r = 0 !== sp(m.split('.')).length ? m.split('.')[2] : void 0;
              q[f] = [r];
              np(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function vp(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var wp = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Hj()) {
        var c = mp();
        if (vp(c, a)) {
          var d = {};
          b(d, 'gclid', c.gclid);
          b(d, 'dclid', c.dclid);
          b(d, 'gclsrc', c.gclsrc);
          b(d, 'wbraid', c.wbraid);
          Rf(20) && b(d, 'gbraid', c.gbraid);
          xo(function () {
            return d;
          }, 3);
          xo(function () {
            var e = {};
            return (e._up = '1'), e;
          }, 1);
        }
      }
    },
    xp = function (a) {
      if (!Rf(11)) return null;
      var b = po(!0).gad_source;
      if (null != b) return (z.location.hash = ''), b;
      if (Rf(12)) {
        var c = ok(z.location.href);
        b = kk(c, 'query', !1, void 0, 'gad_source');
        if (null != b) return b;
        var d = mp();
        if (vp(d, a)) return '0';
      }
      return null;
    },
    yp = function (a) {
      var b = xp(a);
      null != b &&
        xo(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    },
    zp = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!ap($o())) return e;
      var f = cp(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          m = f[0].timestamp,
          n = [h.version, Math.round(m / 1e3), h.ia]
            .concat(h.labels || [], [b])
            .join('.'),
          p = Zn(c, m, !0);
        p.Mb = $o();
        Pn(a, n, p);
      }
      return e;
    };
  function Ap(a, b) {
    var c = jp(b),
      d = pp(a, c);
    if (!d) return 0;
    for (var e = cp(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Bp(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Cp = function (a) {
    var b = Math.max(Ap('aw', a), Bp(ap($o()) ? Oo() : {}));
    return Math.max(Ap('gb', a), Bp(ap($o()) ? Oo('_gac_gb', !0) : {})) > b;
  };
  var Tp,
    Up = !1;
  function Vp() {
    Up = !0;
    Tp = Tp || {};
  }
  var Wp = function (a) {
    Up || Vp();
    return Tp[a];
  };
  var Xp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.o = c;
    this.h = {};
    this.metadata = nb(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Xp.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.o, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && k(d) && R(47))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var Yp = function (a) {
      return a.metadata.source_canonical_id;
    },
    Zp = function (a, b, c) {
      var d = Wp(a.target.ba);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  var $p = function () {
    pi.dedupe_gclid || (pi.dedupe_gclid = '' + Wn());
    return pi.dedupe_gclid;
  };
  var aq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    bq = /^www.googleadservices.com$/,
    dq = function (a) {
      a || (a = cq());
      return a.An
        ? !1
        : a.km || a.lm || a.mm || a.zh || a.Rf || a.Tl || a.am
        ? !0
        : !1;
    },
    cq = function () {
      var a = {},
        b = po(!0);
      a.An = !!b._up;
      var c = mp();
      a.km = void 0 !== c.aw;
      a.lm = void 0 !== c.dc;
      a.mm = void 0 !== c.wbraid;
      var d = ok(z.location.href),
        e = kk(d, 'query', !1, void 0, 'gad');
      a.zh = void 0 !== e;
      if (!a.zh) {
        var f = d.hash.replace('#', ''),
          g = hk(f, 'gad', !1);
        a.zh = void 0 !== g;
      }
      a.Rf = void 0;
      if (R(54)) {
        var h = kk(d, 'query', !1, void 0, 'gad_source');
        a.Rf = h;
        if (void 0 === a.Rf) {
          var m = d.hash.replace('#', ''),
            n = hk(m, 'gad_source', !1);
          a.Rf = n;
        }
      }
      var p = C.referrer ? kk(ok(C.referrer), 'host') : '';
      a.am = aq.test(p);
      a.Tl = bq.test(p);
      return a;
    };
  var eq = function () {
    if (Fa(z.__uspapi)) {
      var a = '';
      try {
        z.__uspapi('getUSPData', 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  function mq(a) {
    var b = V(a.o, P.g.Db),
      c = V(a.o, P.g.Rb);
    b && !c
      ? (a.eventName !== P.g.da && a.eventName !== P.g.Cd && M(131),
        (a.isAborted = !0))
      : !b && c && (M(132), (a.isAborted = !0));
  }
  function nq(a) {
    var b = Tj(P.g.J) ? pi.pscdl : 'denied';
    a.h[P.g.qf] = b;
  }
  var vq = function (a, b, c, d) {
    var e = Jc(),
      f;
    if (1 === e)
      a: {
        var g = Bi;
        g = g.toLowerCase();
        for (
          var h = 'https://' + g,
            m = 'http://' + g,
            n = 1,
            p = C.getElementsByTagName('script'),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || 'http:' != z.location.protocol ? a : b) + c;
  };
  function Iq(a) {
    return {
      getDestinationId: function () {
        return a.target.ba;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.o, b);
      },
      Oj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  var Kq = function (a) {
      var b = Jq[a.target.ba];
      if (!a.isAborted && b)
        for (var c = Iq(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Lq = function (a, b) {
      var c = Jq[a];
      c || (c = Jq[a] = []);
      c.push(b);
    },
    Jq = {};
  var Qq = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Rq = function (a) {
      if (C.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ('hidden' === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ('none' === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf('opacity(');
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(')', h))),
            '%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var Sq = function () {
      var a = C.body,
        b = C.documentElement || (a && a.parentElement),
        c,
        d;
      if (C.compatMode && 'BackCompat' !== C.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    Tq = function (a) {
      var b = Sq(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1,
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1,
              ))
        : 0;
    };
  var Uq = [],
    Vq = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
    Wq = function (a, b, c) {
      for (
        var d = new z.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < Uq.length; f++) if (!Uq[f]) return (Uq[f] = d), f;
      return Uq.push(d) - 1;
    },
    Xq = function (a, b, c) {
      function d(h, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: h.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: 0 < m,
            rootBounds: n,
            target: h,
            time: Ta(),
          };
        H(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (h, m) {
        return h - m;
      });
      return function () {
        for (var h = 0; h < b.length; h++) {
          var m = Tq(b[h]);
          if (m > e[h])
            for (; f[h] < c.length - 1 && m >= c[f[h] + 1]; )
              d(b[h], m), f[h]++;
          else if (m < e[h])
            for (; 0 <= f[h] && m <= c[f[h]]; ) d(b[h], m), f[h]--;
          e[h] = m;
        }
      };
    },
    Yq = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if (Vq) {
        var e = !1;
        H(function () {
          e || Xq(a, b, c)();
        });
        return Wq(
          function (f) {
            e = !0;
            for (var g = { Oe: 0 }; g.Oe < f.length; g = { Oe: g.Oe }, g.Oe++)
              H(
                (function (h) {
                  return function () {
                    return a(f[h.Oe]);
                  };
                })(g),
              );
          },
          b,
          c,
        );
      }
      return z.setInterval(Xq(a, b, c), 1e3);
    },
    Zq = function (a) {
      Vq
        ? 0 <= a &&
          a < Uq.length &&
          Uq[a] &&
          (Uq[a].disconnect(), (Uq[a] = void 0))
        : z.clearInterval(a);
    };
  var ar = function (a, b, c) {
      var d = a.element,
        e = { U: a.U, type: a.qa, tagName: d.tagName };
      b && (e.querySelector = $q(d));
      c && (e.isVisible = !Rq(d));
      return e;
    },
    br = function (a, b, c) {
      return ar({ element: a.element, U: a.U, qa: '1' }, b, c);
    },
    cr = function (a) {
      var b = !!a.ud + '.' + !!a.vd;
      a && a.Ee && a.Ee.length && (b += '.' + a.Ee.join('.'));
      a &&
        a.tb &&
        (b += '.' + a.tb.email + '.' + a.tb.phone + '.' + a.tb.address);
      return b;
    },
    fr = function (a) {
      if (0 != a.length) {
        var b;
        b = dr(a, function (c) {
          return !er.test(c.U);
        });
        b = dr(b, function (c) {
          return 'INPUT' === c.element.tagName.toUpperCase();
        });
        b = dr(b, function (c) {
          return !Rq(c.element);
        });
        return b[0];
      }
    },
    gr = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && xh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    dr = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    $q = function (a) {
      var b;
      if (a === C.body) b = 'body';
      else {
        var c;
        if (a.id) c = '#' + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = $q(a.parentElement) + '>:nth-child(' + e + ')';
          } else d = '';
          c = d;
        }
        b = c;
      }
      return b;
    },
    ir = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        'INPUT' === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(hr);
          if (f) {
            var g = f[0],
              h;
            if (z.location) {
              var m = jk(z.location, 'host', !0);
              h = 0 <= g.toLowerCase().indexOf(m);
            } else h = !1;
            h || b.push({ element: d, U: g });
          }
        }
      }
      return b;
    },
    mr = function () {
      var a = [],
        b = C.body;
      if (!b) return { elements: a, status: '4' };
      for (
        var c = b.querySelectorAll('*'), d = 0;
        d < c.length && 1e4 > d;
        d++
      ) {
        var e = c[d];
        if (
          !(0 <= jr.indexOf(e.tagName.toUpperCase())) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && 1e4 > g; g++)
            if (!(0 <= kr.indexOf(e.children[g].tagName.toUpperCase()))) {
              f = !0;
              break;
            }
          (!f || (R(24) && -1 !== lr.indexOf(e.tagName))) && a.push(e);
        }
      }
      return { elements: a, status: 1e4 < c.length ? '2' : '1' };
    },
    nr = !1;
  var hr = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    or = /@(gmail|googlemail)\./i,
    er = /support|noreply/i,
    jr = 'SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA'.split(' '),
    kr = ['BR'],
    pr = { In: '1', Wn: '2', Mn: '3', Qn: '4', En: '5', Xn: '6', Sn: '7' },
    qr = {},
    lr = ['INPUT', 'SELECT'];
  var Jr = function (a) {
      a = a || { ud: !0, vd: !0 };
      a.tb = a.tb || { email: !0, phone: !1, address: !1 };
      var b = cr(a),
        c = qr[b];
      if (c && 200 > Ta() - c.timestamp) return c.result;
      var d = mr(),
        e = d.status,
        f = [],
        g,
        h,
        m = [];
      if (!R(24)) {
        if (a.tb && a.tb.email) {
          var n = ir(d.elements);
          f = gr(n, a && a.Ee);
          g = fr(f);
          10 < n.length && (e = '3');
        }
        !a.di && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(br(f[p], a.ud, a.vd));
        m = m.slice(0, 10);
      } else if (a.tb) {
      }
      g && (h = br(g, a.ud, a.vd));
      var D = { elements: m, Uh: h, status: e };
      qr[b] = { timestamp: Ta(), result: D };
      return D;
    },
    Kr = function (a) {
      return (
        a.tagName + ':' + a.isVisible + ':' + a.U.length + ':' + or.test(a.U)
      );
    };
  var Lr = function (a) {
      return Zp(a, P.g.Qb, V(a.o, P.g.Qb)) || Zp(a, 'google_ono', !1);
    },
    Mr = function (a) {
      if (a.metadata.is_merchant_center || !vk(a.o)) return !1;
      if (!V(a.o, P.g.ae)) {
        var b = V(a.o, P.g.bd);
        return !0 === b || 'true' === b;
      }
      return !0;
    },
    Nr = function (a) {
      var b = a.metadata.user_data;
      if (mb(b)) return b;
    },
    Or = function (a, b) {
      var c = Zp(a, P.g.Rd, a.o.s[P.g.Rd]);
      if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName];
    },
    Pr = function (a, b, c) {
      a.h[P.g.we] || (a.h[P.g.we] = {});
      a.h[P.g.we][b] = c;
    };
  var Qr = {
    sl: Number('') || 500,
    Wk: Number('') || 5e3,
    oj: Number('20') || 10,
    Ck: Number('') || 5e3,
  };
  function Rr(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Sr = function (a, b) {
    var c;
    return c;
  };
  var Tr = 'https://' + oi.Bd,
    Ur = Tr + '/gtm/static/',
    Vr = Number('') || 5,
    Wr = Number('') || 50,
    Xr = Tr,
    Yr = Ur,
    Zr = !1,
    $r = 0,
    as = Ja();
  function ls() {
    var a = !1;
    return a;
  }
  function ms(a) {
    var b = Math.round(Ta());
  }
  function ns(a, b, c) {}
  function is(a, b, c, d) {}
  function cs(a, b, c, d, e) {}
  function os(a, b, c, d) {}
  function ps(a, b, c, d) {}
  function qs(a) {
    var b = {},
      c = ['tv.1'],
      d = 0;
    var u = c.join('~');
    return { U: b, Wf: u };
  }
  var rs = void 0;
  function ss(a) {
    var b = [];
    return b;
  }
  var ts = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  ac();
  rm() || Yb('iPod');
  Yb('iPad');
  !Yb('Android') || bc() || ac() || $b() || Yb('Silk');
  bc();
  !Yb('Safari') ||
    bc() ||
    (Zb() ? 0 : Yb('Coast')) ||
    $b() ||
    (Zb() ? 0 : Yb('Edge')) ||
    (Zb() ? Xb('Microsoft Edge') : Yb('Edg/')) ||
    (Zb() ? Xb('Opera') : Yb('OPR')) ||
    ac() ||
    Yb('Silk') ||
    Yb('Android') ||
    sm();
  var us = {},
    vs = null,
    ws = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!vs) {
        vs = {};
        for (
          var g =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                '',
              ),
            h = ['+/=', '+/', '-_=', '-_.', '-_'],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(''));
          us[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === vs[q] && (vs[q] = p);
          }
        }
      }
      for (
        var r = us[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || '',
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          G = r[((y & 15) << 2) | (B >> 6)],
          E = r[B & 63];
        t[w++] = '' + A + D + G + E;
      }
      var F = 0,
        N = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (N = r[(F & 15) << 2] || u);
        case 1:
          var O = b[v];
          t[w] = '' + r[O >> 2] + r[((O & 3) << 4) | (F >> 4)] + N + u;
      }
      return t.join('');
    };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var xs =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' ',
    );
  function ys(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function zs() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function As() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function Bs(a) {
    var b, c;
    return (
      'function' ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function Cs() {
    var a = z;
    if (!Bs(a)) return null;
    var b = ys(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(xs)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Ds,
    Es = function () {
      if (Bs(z) && ((Ds = Ta()), !As())) {
        var a = Cs();
        a &&
          (a.then(function () {
            M(95);
          }),
          a.catch(function () {
            M(96);
          }));
      }
    },
    Gs = function (a) {
      var b = Fs.yn,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (m) {}
        },
        d = zs();
      if (d) c(d);
      else {
        var e = As();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = z.setTimeout(function () {
            c.Qe || ((c.Qe = !0), M(106), c(null, Error('Timeout')));
          }, b);
          e.then(function (g) {
            c.Qe || ((c.Qe = !0), M(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Qe || ((c.Qe = !0), M(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Hs = function (a, b) {
      a &&
        ((b.h[P.g.de] = a.architecture),
        (b.h[P.g.ee] = a.bitness),
        a.fullVersionList &&
          (b.h[P.g.fe] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || '') +
                ';' +
                encodeURIComponent(c.version || '')
              );
            })
            .join('|')),
        (b.h[P.g.he] = a.mobile ? '1' : '0'),
        (b.h[P.g.ie] = a.model),
        (b.h[P.g.je] = a.platform),
        (b.h[P.g.ke] = a.platformVersion),
        (b.h[P.g.me] = a.wow64 ? '1' : '0'));
    };
  function Is() {
    return 'attribution-reporting';
  }
  function Js(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Ks = !1;
  function Ls() {
    if (Js('join-ad-interest-group') && Fa(Bc.joinAdInterestGroup)) return !0;
    Ks ||
      (Am(
        'AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
      ),
      (Ks = !0));
    return Js('join-ad-interest-group') && Fa(Bc.joinAdInterestGroup);
  }
  function Ms(a, b) {
    var c = void 0;
    try {
      c = C.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && Ta() - d < (void 0 == Qf[1] ? 6e4 : Qf[1])) {
        Ab('TAGGING', 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else
      try {
        if (
          C.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]',
          ).length >= (void 0 == Qf[2] ? 50 : Qf[2])
        ) {
          Ab('TAGGING', 10);
          return;
        }
      } catch (e) {}
    Kc(
      a,
      void 0,
      { allow: 'join-ad-interest-group' },
      { taggingId: b, loadTime: Ta() },
      c,
    );
  }
  function Ns() {
    return 'https://td.doubleclick.net';
  }
  var Os = RegExp(
      '^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$',
    ),
    Ps = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Qs = /^\d+\.fls\.doubleclick\.net$/,
    Rs = /;gac=([^;?]+)/,
    Ss = /;gacgb=([^;?]+)/,
    Ts = /;gclaw=([^;?]+)/,
    Us = /;gclgb=([^;?]+)/;
  function Vs(a, b) {
    if (Qs.test(C.location.host)) {
      var c = C.location.href.match(b);
      return c && 2 == c.length && c[1].match(Os)
        ? decodeURIComponent(c[1])
        : '';
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].ia);
      d.push(e + ':' + f.join(','));
    }
    return 0 < d.length ? d.join(';') : '';
  }
  var Ws = function (a, b, c) {
    var d = ap($o()) ? Oo('_gac_gb', !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = zp('_gac_gb_' + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ':' + h.join(','));
    }
    return { Sl: f ? e.join(';') : '', Rl: Vs(d, Ss) };
  };
  function Xs(a, b, c) {
    if (Qs.test(C.location.host)) {
      var d = C.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Ps)) return [{ ia: d[1] }];
    } else return cp((a || '_gcl') + b);
    return [];
  }
  var Ys = function (a) {
      return Xs(a, '_aw', Ts)
        .map(function (b) {
          return b.ia;
        })
        .join('.');
    },
    Zs = function (a) {
      return Xs(a, '_gb', Us)
        .map(function (b) {
          return b.ia;
        })
        .join('.');
    },
    $s = function (a, b) {
      var c = zp(((b && b.prefix) || '_gcl') + '_gb', a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ''
        : c.join('.');
    };
  var Ut = {
    H: {
      ji: 'ads_conversion_hit',
      Ad: 'container_execute_start',
      mi: 'container_setup_end',
      jg: 'container_setup_start',
      ki: 'container_blocking_end',
      li: 'container_execute_end',
      ni: 'container_yield_end',
      kg: 'container_yield_start',
      gj: 'event_execute_end',
      fj: 'event_evaluation_end',
      Yg: 'event_evaluation_start',
      ij: 'event_setup_end',
      qe: 'event_setup_start',
      jj: 'ga4_conversion_hit',
      te: 'page_load',
      Vn: 'pageview',
      ac: 'snippet_load',
      xj: 'tag_callback_error',
      yj: 'tag_callback_failure',
      zj: 'tag_callback_success',
      Aj: 'tag_execute_end',
      nd: 'tag_execute_start',
    },
  };
  function Vt() {
    function a(c, d) {
      var e = Cb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a('u', 'GTM');
    a('ut', 'TAGGING');
    a('h', 'HEALTH');
    return b;
  }
  var Wt = !1;
  var Du = function (a, b) {},
    Eu = function (a, b) {},
    Fu = function (a, b) {},
    Gu = function (a, b) {},
    Hu = function () {
      var a = {};
      return a;
    },
    vu = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Iu = function () {},
    Ju = function (a, b) {},
    Ku = function (a, b, c) {},
    Lu = function () {};
  var Mu = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var Nu = function (a, b, c) {
    var d = vm(a, 'fmt');
    if (b) {
      var e = vm(a, 'random'),
        f = vm(a, 'label') || '';
      if (!e) return !1;
      var g = ws(
        decodeURIComponent(f.replace(/\+/g, ' ')) +
          ':' +
          decodeURIComponent(e.replace(/\+/g, ' ')),
      );
      if (!Mu(g, b)) return !1;
    }
    d && 4 != d && (a = xm(a, 'rfmt', d));
    var h = xm(a, 'fmt', 4);
    Ic(
      h,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      C.getElementsByTagName('script')[0].parentElement || void 0,
    );
    return !0;
  };
  var dv = function () {
      this.h = {};
    },
    ev = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    fv = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + '=' + encodeURIComponent(a.h[b]);
        })
        .join('&');
    },
    hv = function (a, b, c, d) {};
  function jv(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var lv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      kv().addRestriction(0, a, b, c);
    },
    mv = function () {
      var a = Lk();
      return kv().getRestrictions(0, a);
    },
    nv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      kv().addRestriction(1, a, b, c);
    },
    ov = function () {
      var a = Lk();
      return kv().getRestrictions(1, a);
    },
    pv = function () {
      this.h = {};
      this.s = {};
    },
    qv = function (a, b) {
      var c = a.h[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.h[b] = c));
      return c;
    };
  pv.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!d || !this.s[b]) {
      var e = qv(this, b);
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  pv.prototype.getRestrictions = function (a, b) {
    var c = qv(this, b);
    if (0 === a) {
      var d, e;
      return [].concat(
        ka(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || [],
        ),
        ka(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || [],
        ),
      );
    }
    if (1 === a) {
      var f, g;
      return [].concat(
        ka(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            [],
        ),
        ka(
          (null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) ||
            [],
        ),
      );
    }
    return [];
  };
  pv.prototype.getExternalRestrictions = function (a, b) {
    var c = qv(this, b),
      d,
      e;
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          [];
  };
  pv.prototype.removeExternalRestrictions = function (a) {
    var b = qv(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.s[a] = !0;
  };
  function kv() {
    var a = pi.r;
    a || ((a = new pv()), (pi.r = a));
    return a;
  }
  var rv = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/,
    ),
    sv = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      gaawc: ['googtag'],
      hl: ['ehl'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels'],
    },
    tv = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      gaawc: ['googtag'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
    },
    uv =
      'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
        ' ',
      ),
    xv = function (a) {
      var b = Pi('gtm.allowlist') || Pi('gtm.whitelist');
      b && M(9);
      vi && (b = ['google', 'gtagfl', 'lcl', 'zone']);
      vv() &&
        (vi
          ? M(116)
          : (M(117),
            wv &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log('GTM blocked. See go/13687728.'))));
      var c = b && Xa(Qa(b), sv),
        d = Pi('gtm.blocklist') || Pi('gtm.blacklist');
      d || ((d = Pi('tagTypeBlacklist')) && M(3));
      d ? M(8) : (d = []);
      vv() &&
        ((d = Qa(d)),
        d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
      0 <= Qa(d).indexOf('google') && M(2);
      var e = d && Xa(Qa(d), tv),
        f = {};
      return function (g) {
        var h = g && g[Le.ma];
        if (!h || 'string' != typeof h) return !0;
        h = h.replace(/^_*/, '');
        if (void 0 !== f[h]) return f[h];
        var m = Fi[h] || [],
          n = a(h, m);
        if (!R(75))
          for (var p = mv(), q = 0; q < p.length; q++)
            try {
              n = n && p[q](h, m);
            } catch (y) {
              n = !1;
            }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      M(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(h);
          if (v) u = v;
          else {
            var w = La(e, m || []);
            w && M(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf('sandboxedScripts')) ||
          (c && -1 !== c.indexOf('sandboxedScripts')) ||
          (x = La(e, uv));
        return (f[h] = x);
      };
    },
    wv = !1;
  wv = !0;
  var vv = function () {
      return rv.test(z.location && z.location.hostname);
    },
    yv = function () {
      if (Dk) {
        var a = function (b) {
          var c = vf(b),
            d;
          if (Af(c)) {
            var e = c[Le.ma];
            if (!e) throw 'Error: No function name given for function call.';
            var f = nf[e];
            d = !!f && !!f.runInSiloedMode;
          } else d = !!jv(c[Le.ma], 4);
          return d;
        };
        R(75)
          ? lv(Lk(), function (b) {
              return a(b.entityId);
            })
          : lv(Lk(), a);
      }
    };
  var Av = function (a, b, c, d, e) {
      if (!zv()) {
        var f = d.siloed ? Fk(a) : a;
        if (!Uk(f)) {
          var g = '?id=' + encodeURIComponent(a) + '&l=' + oi.ja,
            h = 0 === a.indexOf('GTM-');
          h || (g += '&cx=c');
          R(35) && (g += '&gtm=' + sn());
          var m = uk();
          m && (g += '&sign=' + oi.Jf);
          var n = c ? '/gtag/js' : '/gtm.js',
            p = tk() ? sk(b, n + g) : void 0;
          if (!p) {
            var q = oi.Bd + n;
            m && Cc && h
              ? ((q = Cc.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0]),
                (p = vq('https://', 'http://', q + g)))
              : (p = Ii.s ? Ji() + n + g : vq('https://', 'http://', q + g));
          }
          d.siloed && Wk({ ctid: f, isDestination: !1 });
          var r = Nk();
          zk().container[f] = { state: 1, context: d, parent: r };
          Ak({ ctid: f, isDestination: !1 }, e);
          Ic(p);
        }
      }
    },
    Bv = function (a, b, c, d) {
      if (!zv()) {
        var e = c.siloed ? Fk(a) : a;
        if (!Vk(e))
          if (!c.siloed && Xk())
            (zk().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: Nk(),
            }),
              Ak({ ctid: e, isDestination: !0 }, d),
              M(91);
          else {
            var f =
              '/gtag/destination?id=' +
              encodeURIComponent(a) +
              '&l=' +
              oi.ja +
              '&cx=c';
            R(35) && (f += '&gtm=' + sn());
            uk() && (f += '&sign=' + oi.Jf);
            var g = tk() ? sk(b, f) : void 0;
            g || (g = Ii.s ? Ji() + f : vq('https://', 'http://', oi.Bd + f));
            c.siloed && Wk({ ctid: e, isDestination: !0 });
            zk().destination[e] = { state: 1, context: c, parent: Nk() };
            Ak({ ctid: e, isDestination: !0 }, d);
            Ic(g);
          }
      }
    };
  function zv() {
    if (qn()) {
      return !0;
    }
    return !1;
  }
  var Cv = !1,
    Dv = 0,
    Ev = [];
  function Fv(a) {
    if (!Cv) {
      var b = C.createEventObject,
        c = 'complete' == C.readyState,
        d = 'interactive' == C.readyState;
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        Cv = !0;
        for (var e = 0; e < Ev.length; e++) H(Ev[e]);
      }
      Ev.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function Gv() {
    if (!Cv && 140 > Dv) {
      Dv++;
      try {
        C.documentElement.doScroll('left'), Fv();
      } catch (a) {
        z.setTimeout(Gv, 50);
      }
    }
  }
  var Hv = function (a) {
    Cv ? a() : Ev.push(a);
  };
  var Iv = function () {
    this.F = 0;
    this.h = {};
  };
  Iv.prototype.addListener = function (a, b, c) {
    var d = ++this.F;
    this.h[a] = this.h[a] || {};
    this.h[a][String(d)] = { listener: b, vb: c };
    return d;
  };
  Iv.prototype.s = function (a, b) {
    var c = this.h[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  Iv.prototype.C = function (a, b) {
    var c = [];
    l(this.h[a], function (d, e) {
      0 > c.indexOf(e.listener) &&
        (void 0 === e.vb || 0 <= b.indexOf(e.vb)) &&
        c.push(e.listener);
    });
    return c;
  };
  var Jv = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Kk(),
    };
  };
  var Lv = function (a, b) {
      this.h = !1;
      this.F = [];
      this.M = { tags: [] };
      this.W = !1;
      this.s = this.C = 0;
      Kv(this, a, b);
    },
    Mv = function (a, b, c, d) {
      if (si.hasOwnProperty(b) || '__zone' === b) return -1;
      var e = {};
      mb(d) && (e = nb(d, e));
      e.id = c;
      e.status = 'timeout';
      return a.M.tags.push(e) - 1;
    },
    Nv = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Ov = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    Kv = function (a, b, c) {
      void 0 !== b && a.Lf(b);
      c &&
        z.setTimeout(function () {
          return Ov(a);
        }, Number(c));
    };
  Lv.prototype.Lf = function (a) {
    var b = this,
      c = Va(function () {
        return H(function () {
          a(Kk(), b.M);
        });
      });
    this.h ? c() : this.F.push(c);
  };
  var Pv = function (a) {
      a.C++;
      return Va(function () {
        a.s++;
        a.W && a.s >= a.C && Ov(a);
      });
    },
    Qv = function (a) {
      a.W = !0;
      a.s >= a.C && Ov(a);
    };
  var Rv = {},
    Tv = function () {
      return z[Sv()];
    },
    Uv = !1;
  function Sv() {
    return z.GoogleAnalyticsObject || 'ga';
  }
  var Xv = function (a) {},
    Yv = function (a, b) {
      return function () {
        var c = Tv(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get('sendHitTask');
          d.set('sendHitTask', function (f) {
            var g = f.get('hitPayload'),
              h = f.get('hitCallback'),
              m = 0 > g.indexOf('&tid=' + b);
            m &&
              (f.set(
                'hitPayload',
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b),
                !0,
              ),
              f.set('hitCallback', void 0, !0));
            e(f);
            m &&
              (f.set('hitPayload', g, !0),
              f.set('hitCallback', h, !0),
              f.set('_x_19', void 0, !0),
              e(f));
          });
        }
      };
    };
  var cw = ['es', '1'],
    dw = {},
    ew = {};
  function fw(a, b) {
    if (gl) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : '*';
      dw[a] = [
        ['e', c],
        ['eid', a],
      ];
      rl(a);
    }
  }
  function gw(a) {
    var b = a.eventId,
      c = a.wb;
    if (!dw[b]) return [];
    var d = [];
    ew[b] || d.push(cw);
    d.push.apply(d, ka(dw[b]));
    c && (ew[b] = !0);
    return d;
  }
  var hw = {},
    iw = {},
    jw = {};
  function kw(a, b, c, d) {
    gl &&
      R(26) &&
      ((void 0 === d ? 0 : d)
        ? ((jw[b] = jw[b] || 0), ++jw[b])
        : void 0 !== c
        ? ((iw[a] = iw[a] || {}), (iw[a][b] = Math.round(c)))
        : ((hw[a] = hw[a] || {}), (hw[a][b] = (hw[a][b] || 0) + 1)));
  }
  function lw(a) {
    var b = a.eventId,
      c = a.wb,
      d = hw[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push('' + f + d[f]);
    c && delete hw[b];
    return e.length ? [['md', e.join('.')]] : [];
  }
  function mw(a) {
    var b = a.eventId,
      c = a.wb,
      d = iw[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push('' + f + d[f]);
    c && delete iw[b];
    return e.length ? [['mtd', e.join('.')]] : [];
  }
  function nw() {
    for (
      var a = [], b = fa(Object.keys(jw)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push('' + d + jw[d]);
    }
    return a.length ? [['mec', a.join('.')]] : [];
  }
  var ow = {},
    pw = {};
  function qw(a, b, c) {
    if (gl && b) {
      var d = xk(b);
      ow[a] = ow[a] || [];
      ow[a].push(c + d);
      var e = (Af(b) ? '1' : '2') + d;
      pw[a] = pw[a] || [];
      pw[a].push(e);
      rl(a);
    }
  }
  function rw(a) {
    var b = a.eventId,
      c = a.wb,
      d = [],
      e = ow[b] || [];
    e.length && d.push(['tr', e.join('.')]);
    var f = pw[b] || [];
    f.length && d.push(['ti', f.join('.')]);
    c && (delete ow[b], delete pw[b]);
    return d;
  }
  function sw(a, b, c, d) {
    var e = lf[a],
      f = tw(a, b, c, d);
    if (!f) return null;
    var g = xf(e[Le.wj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = sw(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.Lj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d,
      );
    }
    return f;
  }
  function tw(a, b, c, d) {
    function e() {
      if (f[Le.bl]) h();
      else {
        var w = yf(f, c, []),
          x = w[Le.uk];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!Tj(x[y])) {
              h();
              return;
            }
        var B = Mv(c.bc, String(f[Le.ma]), Number(f[Le.xe]), w[Le.fl]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var E = Ta() - G;
            qw(c.id, lf[a], '5');
            Nv(c.bc, B, 'success', E);
            R(16) && Ku(c, f, Ut.H.zj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var E = Ta() - G;
            qw(c.id, lf[a], '6');
            Nv(c.bc, B, 'failure', E);
            R(16) && Ku(c, f, Ut.H.yj);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        qw(c.id, f, '1');
        var D = function () {
          aj(3);
          var E = Ta() - G;
          qw(c.id, f, '7');
          Nv(c.bc, B, 'exception', E);
          R(16) && Ku(c, f, Ut.H.xj);
          A || ((A = !0), h());
        };
        R(16) && Ju(c, f);
        var G = Ta();
        try {
          wf(w, { event: c, index: a, type: 1 });
        } catch (E) {
          D(E);
        }
        R(16) && Ku(c, f, Ut.H.Aj);
      }
    }
    var f = lf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = xf(f[Le.Bj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = sw(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Lj ? m : q;
    }
    if (f[Le.rj] || f[Le.jl]) {
      var r = f[Le.rj] ? mf : c.tn,
        t = g,
        u = h;
      if (!r[a]) {
        e = Va(e);
        var v = uw(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function uw(a, b, c) {
    var d = [],
      e = [];
    b[a] = vw(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ww;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = xw;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function vw(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ww(a) {
    a();
  }
  function xw(a, b) {
    b();
  }
  var Vw = function (a, b) {
      return 1 === arguments.length ? yw('set', a) : yw('set', a, b);
    },
    bx = function (a, b) {
      return 1 === arguments.length ? yw('config', a) : yw('config', a, b);
    },
    cx = function (a, b, c) {
      c = c || {};
      c[P.g.Ub] = a;
      return yw('event', b, c);
    };
  function yw(a) {
    return arguments;
  }
  var dx = function () {
    this.h = [];
    this.s = [];
  };
  dx.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a['gtm.uniqueEventId'] = b;
    a['gtm.priorityId'] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (g) {}
  };
  dx.prototype.listen = function (a) {
    this.s.push(a);
  };
  dx.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  dx.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var fx = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Sf.canonicalContainerId;
      ex().enqueue(a, b, c);
    },
    hx = function () {
      var a = gx;
      ex().listen(a);
    };
  function ex() {
    var a = pi.mb;
    a || ((a = new dx()), (pi.mb = a));
    return a;
  }
  var px = function (a) {
      var b = pi.zones;
      return b
        ? b.getIsAllowedFn(Gk(), a)
        : function () {
            return !0;
          };
    },
    qx = function () {
      nv(Lk(), function (a) {
        var b = a.originalEventData['gtm.uniqueEventId'],
          c = pi.zones;
        return c ? c.isActive(Gk(), b) : !0;
      });
      R(75) &&
        R(76) &&
        lv(Lk(), function (a) {
          var b = a.entityId,
            c = a.securityGroups;
          return px(a.originalEventData['gtm.uniqueEventId'])(b, c);
        });
    };
  var tx = function (a, b) {
    for (var c = [], d = 0; d < lf.length; d++)
      if (a[d]) {
        var e = lf[d];
        var f = Pv(b.bc);
        try {
          var g = sw(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[Le.ma];
            if (!h) throw 'Error: No function name given for function call.';
            var m = nf[h];
            c.push({
              jk: d,
              Xj: (m ? m.priorityOverride || 0 : 0) || jv(e[Le.ma], 1) || 0,
              execute: g,
            });
          } else rx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(sx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  var vx = function (a, b) {
    if (!ux) return !1;
    var c = a['gtm.triggers'] && String(a['gtm.triggers']),
      d = ux.C(a.event, c ? String(c).split(',') : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = Pv(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function sx(a, b) {
    var c,
      d = b.Xj,
      e = a.Xj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.jk,
        h = b.jk;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function rx(a, b) {
    if (gl) {
      var c = function (d) {
        var e = b.isBlocked(lf[d]) ? '3' : '4',
          f = xf(lf[d][Le.wj], b, []);
        f && f.length && c(f[0].index);
        qw(b.id, lf[d], e);
        var g = xf(lf[d][Le.Bj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var wx = !1,
    ux;
  var xx = function () {
    ux || (ux = new Iv());
    return ux;
  };
  var Cx = function (a) {
    var b = a['gtm.uniqueEventId'],
      c = a['gtm.priorityId'],
      d = a.event;
    if (R(16)) {
    }
    if ('gtm.js' === d) {
      if (wx) return !1;
      wx = !0;
    }
    var e,
      f = !1,
      g = ov(),
      h = nb(a);
    if (
      g.every(function (u) {
        return u({ originalEventData: h });
      })
    )
      e = px(b);
    else {
      if ('gtm.js' !== d && 'gtm.init' !== d && 'gtm.init_consent' !== d)
        return !1;
      f = !0;
      e = px(Number.MAX_SAFE_INTEGER);
    }
    fw(b, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      p = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: yx(e, h, f),
        tn: [],
        logMacroError: function () {
          M(6);
          aj(0);
        },
        cachedModelValues: zx(),
        bc: new Lv(function () {
          if (R(16)) {
          }
          m && m.apply(m, [].slice.call(arguments, 0));
        }, n),
        originalEventData: h,
      };
    R(26) && gl && (p.reportMacroDiscrepancy = kw);
    R(16) && Fu(p.id, p.name);
    var q = If(p);
    R(16) && Gu(p.id, p.name);
    f && (q = Ax(q));
    if (R(16)) {
    }
    var r = tx(q, p),
      t = !1;
    t = vx(a, p.bc);
    Qv(p.bc);
    ('gtm.js' !== d && 'gtm.sync' !== d) || Xv(Kk());
    return Bx(q, r) || t;
  };
  function zx() {
    var a = {};
    a.event = Ui('event', 1);
    a.ecommerce = Ui('ecommerce', 1);
    a.gtm = Ui('gtm');
    a.eventModel = Ui('eventModel');
    return a;
  }
  function yx(a, b, c) {
    var d = xv(a);
    return R(75)
      ? function (e) {
          if (d(e)) return !0;
          var f = e && e[Le.ma];
          if (!f || 'string' != typeof f) return !0;
          f = f.replace(/^_*/, '');
          var g = mv(),
            h = b;
          c &&
            ((h = nb(b)), (h['gtm.uniqueEventId'] = Number.MAX_SAFE_INTEGER));
          for (
            var m = Fi[f] || [], n = fa(g), p = n.next();
            !p.done;
            p = n.next()
          ) {
            var q = p.value;
            try {
              if (!q({ entityId: f, securityGroups: m, originalEventData: h }))
                return !0;
            } catch (r) {
              return !0;
            }
          }
          return !1;
        }
      : d;
  }
  function Ax(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(lf[c][Le.ma]);
        if (ri[d] || void 0 !== lf[c][Le.kl] || jv(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Bx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && lf[c] && !si[String(lf[c][Le.ma])]) return !0;
    return !1;
  }
  var Lf;
  var Dx = {},
    Ex = {},
    Fx = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Sh: void 0, yh: void 0 }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf('-')) {
          if (((e.Sh = ck(g, b)), e.Sh)) {
            var h = Ik();
            Ia(
              h,
              (function (r) {
                return function (t) {
                  return r.Sh.ba === t;
                };
              })(e),
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = Dx[g] || [];
          e.yh = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.yh[t] = !0);
              };
            })(e),
          );
          for (var n = Gk(), p = 0; p < n.length; p++)
            if (e.yh[n[p]]) {
              c = c.concat(Ik());
              break;
            }
          var q = Ex[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Km: c, Nm: d };
    },
    Gx = function (a) {
      l(Dx, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Hx = function (a) {
      l(Ex, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Ix = 'HA GF G UA AW DC MC'.split(' '),
    Jx = !1,
    Kx = !1;
  function Lx(a, b) {
    a.hasOwnProperty('gtm.uniqueEventId') ||
      Object.defineProperty(a, 'gtm.uniqueEventId', { value: Gi() });
    b.eventId = a['gtm.uniqueEventId'];
    b.priorityId = a['gtm.priorityId'];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Mx = void 0,
    Nx = void 0;
  function Ox(a, b, c) {
    var d = nb(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = nb(b);
    nb(c, e);
    fx(bx(Gk()[0], e), a.eventId, d);
  }
  function Px(a) {
    for (var b = fa([P.g.ae, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || am.C[d];
      if (e) return e;
    }
  }
  var Qx = {
      config: function (a, b) {
        var c = R(27),
          d = Lx(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !mb(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = ck(a[1], b.isGtmEvent);
          if (f) {
            var g, h, m;
            a: {
              if (!Ck.se) {
                var n = Mk(Nk());
                if (Zk(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { Tm: Mk(p), Jm: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((g = r.Tm), (h = r.Jm));
            fw(d.eventId, 'gtag.config');
            var t = f.ba,
              u = f.id !== t;
            if (u ? -1 === Ik().indexOf(t) : -1 === Gk().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || e[P.g.Db])) {
                var v = Px(e);
                if (u)
                  Bv(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  Mx ? Ox(b, w, Mx) : Nx || (Nx = nb(w));
                } else
                  Av(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (g && (M(128), h && M(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                Nx
                  ? (Ox(b, Nx, y), (x = !1))
                  : ((!y[P.g.Wb] && ui && Mx) || (Mx = nb(y)), (x = !0));
                x && g.containers && g.containers.join(',');
                return;
              }
              if (ui && !u && !e[P.g.Wb]) {
                var B = Kx;
                Kx = !0;
                if (B) return;
              }
              Jx || M(43);
              if (!b.noTargetGroup)
                if (u) {
                  Hx(f.id);
                  var A = f.id,
                    D = e[P.g.Vd] || 'default';
                  D = String(D).split(',');
                  for (var G = 0; G < D.length; G++) {
                    var E = Ex[D[G]] || [];
                    Ex[D[G]] = E;
                    0 > E.indexOf(A) && E.push(A);
                  }
                } else {
                  Gx(f.id);
                  var F = f.id,
                    N = e[P.g.Vd] || 'default';
                  N = N.toString().split(',');
                  for (var O = 0; O < N.length; O++) {
                    var T = Dx[N[O]] || [];
                    Dx[N[O]] = T;
                    0 > T.indexOf(F) && T.push(F);
                  }
                }
              delete e[P.g.Vd];
              var Y = b.eventMetadata || {};
              Y.hasOwnProperty('is_external_event') ||
                (Y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = Y;
              delete e[P.g.ad];
              for (var S = u ? [f.id] : Ik(), U = 0; U < S.length; U++) {
                var ja = e,
                  ia = S[U],
                  ca = nb(b),
                  Da = ck(ia, ca.isGtmEvent);
                Da && am.push('config', [ja], Da, ca);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = Lx(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[P.g.N] && M(139), e[P.g.Ja] && M(140));
          'default' === d
            ? Qj(e)
            : 'update' === d
            ? Rj(e, c)
            : 'declare' === d && b.fromContainerExecution && Pj(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!mb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = nb(e)),
            e[P.g.ad] && (g.eventCallback = e[P.g.ad]),
            e[P.g.Sd] && (g.eventTimeout = e[P.g.Sd]));
          var h = Lx(a, b),
            m = h.eventId,
            n = h.priorityId;
          g['gtm.uniqueEventId'] = m;
          n && (g['gtm.priorityId'] = n);
          if ('optimize.callback' === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.Ub];
          void 0 === r &&
            ((r = Pi(P.g.Ub, 2)), void 0 === r && (r = 'default'));
          if (k(r) || Ha(r)) {
            var t;
            b.isGtmEvent
              ? (t = k(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, '').split(','));
            var u = Fx(t, b.isGtmEvent),
              v = u.Km,
              w = u.Nm;
            if (w.length)
              for (var x = Px(q), y = 0; y < w.length; y++) {
                var B = ck(w[y], b.isGtmEvent);
                B &&
                  Bv(B.ba, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = ek(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            fw(m, c);
            for (var D = [], G = 0; G < A.length; G++) {
              var E = A[G],
                F = nb(b);
              if (-1 !== Ix.indexOf(Qk(E.prefix))) {
                var N = nb(d),
                  O = F.eventMetadata || {};
                O.hasOwnProperty('is_external_event') ||
                  (O.is_external_event = !F.fromContainerExecution);
                F.eventMetadata = O;
                delete N[P.g.ad];
                cm(c, N, E.id, F);
              }
              D.push(E.id);
            }
            g.eventModel = g.eventModel || {};
            0 < A.length
              ? (g.eventModel[P.g.Ub] = D.join())
              : delete g.eventModel[P.g.Ub];
            Jx || M(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[P.g.Rb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Fa(a[3])) {
          var c = ck(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Jx || M(43);
            var f = Px();
            if (
              !Ia(Ik(), function (h) {
                return c.ba === h;
              })
            )
              Bv(c.ba, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Ix.indexOf(Qk(c.prefix))) {
              Lx(a, b);
              var g = {};
              Mj(nb(((g[P.g.pb] = d), (g[P.g.Cb] = e), g)));
              dm(
                d,
                function (h) {
                  H(function () {
                    return e(h);
                  });
                },
                c.id,
                b,
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Jx = !0;
          var c = Lx(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = 'gtm.js'),
            (f['gtm.start'] = a[1].getTime()),
            (f['gtm.uniqueEventId'] = d),
            (f['gtm.priorityId'] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Fa(a[2])) {
          Mf(a[1], a[2]);
          if ((M(74), 'all' === a[1])) {
            M(75);
            var b = !1;
            try {
              b = a[2](Kk(), 'unknown', {});
            } catch (c) {}
            b || M(76);
          }
        } else {
          M(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && mb(a[1])
          ? (c = nb(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            mb(a[2]) || Ha(a[2]) ? (c[a[1]] = nb(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Lx(a, b),
            e = d.eventId,
            f = d.priorityId;
          nb(c);
          var g = nb(c);
          am.push('set', [g], void 0, b);
          c['gtm.uniqueEventId'] = e;
          f && (c['gtm.priorityId'] = f);
          R(10) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Rx = { policy: !0 };
  var Sx = function (a) {
      var b = z[oi.ja].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Tx = function (a) {
      var b = z[oi.ja],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Ux = !1,
    Vx = [];
  function Wx() {
    if (!Ux) {
      Ux = !0;
      for (var a = 0; a < Vx.length; a++) H(Vx[a]);
    }
  }
  var Xx = function (a) {
    Ux ? H(a) : Vx.push(a);
  };
  var ny = function (a) {
    if (my(a)) return a;
    this.h = a;
  };
  ny.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var my = function (a) {
    return !a || 'object' !== jb(a) || mb(a)
      ? !1
      : 'getUntrustedMessageValue' in a;
  };
  ny.prototype.getUntrustedMessageValue = ny.prototype.getUntrustedMessageValue;
  var oy = 0,
    py = {},
    qy = [],
    ry = [],
    sy = !1,
    ty = !1;
  function uy(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var vy = function (a) {
      return z[oi.ja].push(a);
    },
    wy = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return vy(a);
    },
    xy = function (a, b) {
      if (!Ga(b) || 0 > b) b = 0;
      var c = pi[oi.ja],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function yy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      '_clear' !== e && (c && Si(e), Si(e, f));
    });
    Ci || (Ci = a['gtm.start']);
    var d = a['gtm.uniqueEventId'];
    if (!a.event) return !1;
    'number' !== typeof d &&
      ((d = Gi()), (a['gtm.uniqueEventId'] = d), Si('gtm.uniqueEventId', d));
    return Cx(a);
  }
  function zy(a) {
    if (null == a || 'object' !== typeof a) return !1;
    if (a.event) return !0;
    if (Ma(a)) {
      var b = a[0];
      if ('config' === b || 'event' === b || 'js' === b || 'get' === b)
        return !0;
    }
    return !1;
  }
  function Ay() {
    var a;
    if (ry.length) a = ry.shift();
    else if (qy.length) a = qy.shift();
    else return;
    var b;
    var c = a;
    if (sy || !zy(c.message)) b = c;
    else {
      sy = !0;
      var d = c.message['gtm.uniqueEventId'];
      'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = Gi());
      var e = {},
        f = {
          message:
            ((e.event = 'gtm.init_consent'),
            (e['gtm.uniqueEventId'] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = 'gtm.init'), (g['gtm.uniqueEventId'] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      qy.unshift(h, c);
      if (gl) {
        var m = Sf.ctid;
        if (m) {
          var n,
            p = Mk(Nk());
          n = p && p.context;
          var q,
            r = ok(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Sf.canonicalContainerId,
            w = Ck.se;
          gl &&
            (vl || (vl = q),
            wl.push(
              m +
                ';' +
                v +
                ';' +
                (t ? 1 : 0) +
                ';' +
                (u || 0) +
                ';' +
                (w ? 1 : 0),
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function By() {
    for (var a = !1, b; !ty && (b = Ay()); ) {
      ty = !0;
      delete Mi.eventModel;
      Oi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) ty = !1;
      else {
        e.fromContainerExecution && Ti();
        try {
          if (Fa(d))
            try {
              d.call(Qi);
            } catch (x) {}
          else if (Ha(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split('.'),
                h = g.pop(),
                m = f.slice(1),
                n = Pi(g.join('.'), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Ma(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = Qx[d[0]];
                  if (r && (!e.fromContainerExecution || !Rx[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && 'set' === d[0] && !!p.event) && M(101);
            } else p = d;
            if (p) {
              var t = yy(p, e);
              a = t || a;
              q && t && M(113);
            }
          }
        } finally {
          e.fromContainerExecution && Oi(!0);
          var u = d['gtm.uniqueEventId'];
          if ('number' === typeof u) {
            for (var v = py[String(u)] || [], w = 0; w < v.length; w++)
              ry.push(Cy(v[w]));
            v.length && ry.sort(uy);
            delete py[String(u)];
            u > oy && (oy = u);
          }
          ty = !1;
        }
      }
    }
    return !a;
  }
  function Dy() {
    if (R(16)) {
      var a = Ey();
    }
    var b = By();
    if (R(16)) {
    }
    try {
      Sx(Kk());
    } catch (c) {}
    return b;
  }
  function gx(a) {
    if (oy < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      py[b] = py[b] || [];
      py[b].push(a);
    } else
      ry.push(Cy(a)),
        ry.sort(uy),
        H(function () {
          ty || By();
        });
  }
  function Cy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Fy = function () {
      function a(f) {
        var g = {};
        if (my(f)) {
          var h = f;
          f = my(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Dc(oi.ja, []),
        c = (pi[oi.ja] = pi[oi.ja] || {});
      !0 === c.pruned && M(83);
      py = ex().get();
      hx();
      Hv(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = 'gtm.dom'), f));
        }
      });
      Xx(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = 'gtm.load'), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < pi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new ny(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        qy.push.apply(qy, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number('1000') || 300);
        if (this.length > n)
          for (M(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = 'boolean' !== typeof m || m;
        return By() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      qy.push.apply(qy, e);
      if (Ey()) {
        if (R(16)) {
        }
        H(Dy);
      }
    },
    Ey = function () {
      var a = !0;
      return a;
    };
  function Gy(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ta();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Hy(a) {
    return a && 0 === a.indexOf('pending:') ? Gy(a.substr(8)) : !1;
  }

  var bz = function () {};
  var cz = function () {};
  cz.prototype.toString = function () {
    return 'undefined';
  };
  var dz = new cz();
  var kz = function (a, b, c) {
      var d = {
        event: b,
        'gtm.element': a,
        'gtm.elementClasses': Tc(a, 'className'),
        'gtm.elementId': a['for'] || Oc(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || Tc(a, 'target') || '',
      };
      c && (d['gtm.triggers'] = c.join(','));
      d['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        Tc(a, 'href') ||
        a.src ||
        a.code ||
        a.codebase ||
        '';
      return d;
    },
    lz = function (a) {
      pi.hasOwnProperty('autoEventsSettings') || (pi.autoEventsSettings = {});
      var b = pi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    mz = function (a, b, c) {
      lz(a)[b] = c;
    },
    nz = function (a, b, c, d) {
      var e = lz(a),
        f = Ua(e, b, d);
      e[b] = c(f);
    },
    oz = function (a, b, c) {
      var d = lz(a);
      return Ua(d, b, c);
    },
    pz = function (a, b) {
      oz(a, 'init', !1) || (mz(a, 'init', !0), b());
    },
    qz = function (a) {
      return 'string' === typeof a ? a : String(Gi());
    };
  var wz = !!z.MutationObserver,
    xz = void 0,
    yz = function (a) {
      if (!xz) {
        var b = function () {
          var c = C.body;
          if (c)
            if (wz)
              new MutationObserver(function () {
                for (var e = 0; e < xz.length; e++) H(xz[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Mc(c, 'DOMNodeInserted', function () {
                d ||
                  ((d = !0),
                  H(function () {
                    d = !1;
                    for (var e = 0; e < xz.length; e++) H(xz[e]);
                  }));
              });
            }
        };
        xz = [];
        C.body ? b() : H(b);
      }
      xz.push(a);
    },
    zz = function (a) {
      if (xz)
        for (var b = 0; b < xz.length; b++) xz[b] === a && xz.splice(b, 1);
    };
  var Kz = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((Ta() - e) * g.playbackRate) / 1e3 : 0;
      e = Ta();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, h, m) {
        var n = a(),
          p = n.qh,
          q =
            void 0 !== m
              ? Math.round(m)
              : void 0 !== h
              ? Math.round(n.qh * h)
              : Math.round(n.Ij),
          r =
            void 0 !== h
              ? Math.round(100 * h)
              : 0 >= p
              ? 0
              : Math.round((q / p) * 100),
          t = C.hidden ? !1 : 0.5 <= Tq(c);
        d();
        var u = void 0;
        void 0 !== b && (u = [b]);
        var v = kz(c, 'gtm.video', u);
        v['gtm.videoProvider'] = 'youtube';
        v['gtm.videoStatus'] = g;
        v['gtm.videoUrl'] = n.url;
        v['gtm.videoTitle'] = n.title;
        v['gtm.videoDuration'] = Math.round(p);
        v['gtm.videoCurrentTime'] = Math.round(q);
        v['gtm.videoElapsedTime'] = Math.round(f);
        v['gtm.videoPercent'] = r;
        v['gtm.videoVisible'] = t;
        return v;
      },
      fk: function () {
        e = Ta();
      },
      od: function () {
        d();
      },
    };
  };
  var Lz = z.clearTimeout,
    Mz = z.setTimeout,
    Nz = function (a, b, c, d) {
      if (qn()) {
        b && H(b);
      } else return Ic(a, b, c, d);
    },
    Oz = function () {
      return new Date();
    },
    Pz = function () {
      return z.location.href;
    },
    Qz = function (a) {
      return kk(ok(a), 'fragment');
    },
    Rz = function (a) {
      return lk(ok(a));
    },
    Sz = function (a, b) {
      return Pi(a, b || 2);
    },
    Tz = function (a, b, c) {
      return b ? wy(a, b, c) : vy(a);
    },
    Uz = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    Vz = function (a, b, c) {
      return Gn(a, b, void 0 === c ? !0 : !!c);
    },
    Wz = function (a, b, c) {
      return 0 === Pn(a, b, c);
    },
    Xz = function (a, b) {
      if (qn()) {
        b && H(b);
      } else Kc(a, b);
    },
    Yz = function (a) {
      return !!oz(a, 'init', !1);
    },
    Zz = function (a) {
      mz(a, 'init', !0);
    };

  function vA(a, b) {
    function c(g) {
      var h = ok(g),
        m = kk(h, 'protocol'),
        n = kk(h, 'host', !0),
        p = kk(h, 'port'),
        q = kk(h, 'path').toLowerCase().replace(/\/$/, '');
      if (
        void 0 === m ||
        ('http' === m && '80' === p) ||
        ('https' === m && '443' === p)
      )
        (m = 'web'), (p = 'default');
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function wA(a) {
    return xA(a) ? 1 : 0;
  }
  function xA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = nb(a, {});
        nb({ arg1: c[d], any_of: void 0 }, e);
        if (wA(e)) return !0;
      }
      return !1;
    }
    switch (a['function']) {
      case '_cn':
        return sg(b, c);
      case '_css':
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < og.length; g++) {
                var h = og[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case '_ew':
        return pg(b, c);
      case '_eq':
        return tg(b, c);
      case '_ge':
        return ug(b, c);
      case '_gt':
        return wg(b, c);
      case '_lc':
        return 0 <= String(b).split(',').indexOf(String(c));
      case '_le':
        return vg(b, c);
      case '_lt':
        return xg(b, c);
      case '_re':
        return rg(b, c, a.ignore_case);
      case '_sw':
        return yg(b, c);
      case '_um':
        return vA(b, c);
    }
    return !1;
  }
  function yA() {
    var a = [
      ['cv', '1'],
      ['rv', oi.eh],
      [
        'tc',
        lf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    oi.ve && a.push(['x', oi.ve]);
    Ii.h && a.push(['tag_exp', Ii.h]);
    return a;
  }
  function zA() {
    var a = cj();
    return a.length ? [['exp_geo', a]] : [];
  }
  var AA;
  function BA() {
    try {
      null != AA || (AA = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = AA) ? 0 : a.length) ? [['exp_tz', AA]] : [];
  }
  var CA = [];
  function DA(a) {
    var b = [];
    if (!CA.length) return b;
    for (var c = fa(CA), d = c.next(); !d.done; d = c.next())
      b.push([d.value, '1']);
    a.wb && (a.cg(), (CA.length = 0));
    return b;
  }
  function EA(a) {
    if (a.scriptSource) {
      var b;
      try {
        b = Vc().getEntriesByType('resource');
      } catch (g) {}
      if (b) {
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d],
            f = e.initiatorType;
          if ('script' === f && e.name === a.scriptSource)
            return { jn: d, kn: c };
          c[f] = 1 + (c[f] || 0);
        }
        M(146);
      } else M(145);
    }
  }
  function FA() {
    if (gl && R(92)) {
      var a = Ok();
      if (!a) M(144);
      else if (a.canonicalContainerId) {
        var b = EA(a);
        if (b) {
          var c = !1;
          bl(function (d) {
            if (c) return [];
            d.wb && (c = !0);
            d.cg();
            return [
              ['rtg', a.canonicalContainerId],
              ['rlo', b.jn],
              ['slo', b.kn.script || 0],
            ];
          });
        }
      }
    }
  }
  var GA = function () {
      return !1;
    },
    HA = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function IA() {
    var a = JA;
    return function (b, c, d) {
      var e = d && d.event;
      KA(c);
      var f = 0 === b.indexOf('__cvt_') ? void 0 : 1,
        g = new sb();
      l(c, function (r, t) {
        var u = jd(t, void 0, f);
        void 0 === u && void 0 !== t && M(44);
        g.set(r, u);
      });
      a.h.h.F = Ff();
      var h = {
        Gj: Wf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Lf:
          void 0 !== e
            ? function (r) {
                return e.bc.Lf(r);
              }
            : void 0,
        fc: function () {
          return b;
        },
        log: function () {},
        Ol: { index: d && d.index, type: d && d.type, name: d && d.name },
        hn: !!jv(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (GA()) {
        var m = HA(),
          n = void 0,
          p = void 0;
        h.hb = {
          fi: [],
          ye: {},
          ub: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          Lh: jh(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = He(a, h, [b, g]);
      a.h.h.F = void 0;
      q instanceof wa && 'return' === q.h && (q = q.s);
      return kd(q, void 0, f);
    };
  }
  function KA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Fa(b) &&
      (a.gtmOnSuccess = function () {
        H(b);
      });
    Fa(c) &&
      (a.gtmOnFailure = function () {
        H(c);
      });
  }
  function LA(a, b) {
    var c = this;
  }
  LA.P = 'addConsentListener';
  var MA;
  var NA = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (MA)
        try {
          a[b]();
        } catch (c) {
          M(77);
        }
      else a[b]();
  };
  function OA(a, b, c) {
    var d = this,
      e;
    K(
      J(this),
      ['eventName:!string', 'callback:!Fn', 'triggerId:?string'],
      arguments,
    ),
      NA([
        function () {
          return L(d, 'listen_data_layer', a);
        },
      ]),
      (e = xx().addListener(a, kd(b), c));
    return e;
  }
  OA.D = 'internal.addDataLayerEventListener';
  function PA(a, b, c) {}
  PA.P = 'addDocumentEventListener';
  function QA(a, b, c, d) {}
  QA.P = 'addElementEventListener';
  function RA(a) {}
  RA.P = 'addEventCallback';
  function VA(a) {}
  VA.D = 'internal.addFormAbandonmentListener';
  function WA(a, b, c, d) {}
  WA.D = 'internal.addFormData';
  var XA = {},
    YA = [],
    ZA = {},
    $A = 0,
    aB = 0;
  function hB(a, b) {}
  hB.D = 'internal.addFormInteractionListener';
  function oB(a, b) {}
  oB.D = 'internal.addFormSubmitListener';
  function tB(a) {}
  tB.D = 'internal.addGaSendListener';
  function uB(a) {
    if (!a) return {};
    var b = a.Ol;
    return Jv(b.type, b.index, b.name);
  }
  function vB(a) {
    return a ? { originatingEntity: uB(a) } : {};
  }
  var wB = function (a, b) {
    this.tagId = a;
    this.pd = b;
  };
  function xB(a, b) {
    var c = this;
  }
  xB.D = 'internal.loadGoogleTag';
  function yB(a) {
    return new bd('', function (b) {
      b = I(this, b);
      if (b instanceof bd)
        return new bd('', function () {
          var c = ta.apply(0, arguments),
            d = this,
            e = nb(this.h.h);
          e.eventId = a.eventId;
          e.priorityId = a.priorityId;
          e.originalEventData = a.originalEventData;
          var f = c.map(function (h) {
              return I(d, h);
            }),
            g = Ba(this.h);
          g.h = e;
          return b.eb.apply(b, [g].concat(ka(f)));
        });
    });
  }
  function zB(a, b, c) {
    var d = this;
  }
  zB.D = 'internal.addGoogleTagRestriction';
  var AB = {},
    BB = [];
  var IB = function (a, b) {};
  IB.D = 'internal.addHistoryChangeListener';
  function JB(a, b, c) {}
  JB.P = 'addWindowEventListener';
  function KB(a, b) {
    return !0;
  }
  KB.P = 'aliasInWindow';
  function LB(a, b, c) {}
  LB.D = 'internal.appendRemoteConfigParameter';
  function MB() {
    var a = 2;
    return a;
  }
  function NB(a, b) {
    var c;
    return c;
  }
  NB.P = 'callInWindow';
  function OB(a) {}
  OB.P = 'callLater';
  function PB(a) {}
  PB.D = 'callOnDomReady';
  function QB(a) {}
  QB.D = 'callOnWindowLoad';
  function RB(a, b) {
    var c;
    return c;
  }
  RB.D = 'internal.computeGtmParameter';
  function SB(a, b) {
    var c;
    var d = jd(c, this.h, MB());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  SB.P = 'copyFromDataLayer';
  function TB(a) {
    var b = void 0;
    return b;
  }
  TB.D = 'internal.copyFromDataLayerCache';
  function UB(a) {
    var b;
    return b;
  }
  UB.P = 'copyFromWindow';
  function VB(a) {
    var b = void 0;
    return jd(b, this.h, MB());
  }
  VB.D = 'internal.copyKeyFromWindow';
  function WB(a, b) {
    var c;
    K(J(this), ['preHit:!PixieMap', 'dustOptions:?PixieMap'], arguments);
    var d = kd(b) || {},
      e = kd(a, this.h, 1).Oj(),
      f = e.o;
    d.omitEventContext && (f = Xl(new Ml(e.o.eventId, e.o.priorityId)));
    var g = new Xp(e.target, e.eventName, f);
    d.omitHitData || nb(e.h, g.h);
    d.omitMetadata ? (g.metadata = {}) : nb(e.metadata, g.metadata);
    g.isAborted = e.isAborted;
    c = jd(Iq(g), this.h, 1);
    return c;
  }
  WB.D = 'internal.copyPreHit';
  function XB(a, b) {
    var c = null,
      d = MB();
    return jd(c, this.h, d);
  }
  XB.P = 'createArgumentsQueue';
  function YB(a) {
    var b;
    return jd(b, this.h, 1);
  }
  YB.D = 'internal.createGaCommandQueue';
  function ZB(a) {
    var b;
    return jd(b, this.h, MB());
  }
  ZB.P = 'createQueue';
  function $B(a, b) {
    var c = null;
    return c;
  }
  $B.D = 'internal.createRegex';
  function aC(a) {}
  aC.D = 'internal.declareConsentState';
  function bC(a) {
    var b = '';
    return b;
  }
  bC.D = 'internal.decodeUrlHtmlEntities';
  function cC(a, b, c) {
    var d;
    return d;
  }
  cC.D = 'internal.decorateUrlWithGaCookies';
  function dC(a) {
    var b;
    return b;
  }
  dC.D = 'internal.detectUserProvidedData';
  function hC(a, b) {
    return b;
  }
  hC.D = 'internal.enableAutoEventOnClick';
  function mC(a, b) {
    return b;
  }
  mC.D = 'internal.enableAutoEventOnElementVisibility';
  function nC() {}
  nC.D = 'internal.enableAutoEventOnError';
  var oC = {},
    pC = [],
    qC = {},
    rC = 0,
    sC = 0;
  function yC(a, b) {
    var c = this;
    return b;
  }
  yC.D = 'internal.enableAutoEventOnFormInteraction';
  function DC(a, b) {
    var c = this;
    return b;
  }
  DC.D = 'internal.enableAutoEventOnFormSubmit';
  function IC() {
    var a = this;
  }
  IC.D = 'internal.enableAutoEventOnGaSend';
  var JC = {},
    KC = [];
  var MC = function (a, b) {
      var c = '' + b;
      if (JC[c]) JC[c].push(a);
      else {
        var d = [a];
        JC[c] = d;
        var e = LC('gtm.historyChange-v2'),
          f = -1;
        KC.push(function (g) {
          0 <= f && z.clearTimeout(f);
          b
            ? (f = z.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    LC = function (a) {
      var b = z.location.href,
        c = {
          source: null,
          state: z.history.state || null,
          url: lk(ok(b)),
          T: kk(ok(b), 'fragment'),
        };
      return function (d, e) {
        var f = c,
          g = {};
        g[f.source] = !0;
        g[d.source] = !0;
        if (!g.popstate || !g.hashchange || f.T != d.T) {
          var h = {
            event: a,
            'gtm.historyChangeSource': d.source,
            'gtm.oldUrlFragment': c.T,
            'gtm.newUrlFragment': d.T,
            'gtm.oldHistoryState': c.state,
            'gtm.newHistoryState': d.state,
            'gtm.oldUrl': c.url,
            'gtm.newUrl': d.url,
          };
          e && (h['gtm.triggers'] = e.join(','));
          c = d;
          vy(h);
        }
      };
    },
    NC = function (a, b) {
      var c = z.history,
        d = c[a];
      if (Fa(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var h = z.location.href;
            b({
              source: a,
              state: e,
              url: lk(ok(h)),
              T: kk(ok(h), 'fragment'),
            });
          };
        } catch (e) {}
    },
    PC = function (a) {
      z.addEventListener('popstate', function (b) {
        var c = OC(b);
        a({
          source: 'popstate',
          state: b.state,
          url: lk(ok(c)),
          T: kk(ok(c), 'fragment'),
        });
      });
    },
    QC = function (a) {
      z.addEventListener('hashchange', function (b) {
        var c = OC(b);
        a({
          source: 'hashchange',
          state: null,
          url: lk(ok(c)),
          T: kk(ok(c), 'fragment'),
        });
      });
    },
    OC = function (a) {
      return a.target && a.target.location && a.target.location.href
        ? a.target.location.href
        : z.location.href;
    };
  function RC(a, b) {
    var c = this;
    K(J(this), ['options:?PixieMap', 'triggerId:?*'], arguments);
    NA([
      function () {
        return L(c, 'detect_history_change_events');
      },
    ]);
    var d = a && a.get('useV2EventName') ? 'ehl' : 'hl',
      e = Number(a && a.get('interval'));
    (0 < e && isFinite(e)) || (e = 0);
    if (!oz(d, 'init', !1)) {
      var f;
      'ehl' === d
        ? ((f = function (h) {
            for (var m = 0; m < KC.length; m++) KC[m](h);
          }),
          (b = qz(b)),
          MC(b, e),
          mz(d, 'reg', MC))
        : (f = LC('gtm.historyChange'));
      QC(f);
      PC(f);
      NC('pushState', f);
      NC('replaceState', f);
      mz(d, 'init', !0);
    } else if ('ehl' === d) {
      var g = oz(d, 'reg');
      g && ((b = qz(b)), g(b, e));
    }
    'hl' === d && (b = void 0);
    return b;
  }
  RC.D = 'internal.enableAutoEventOnHistoryChange';
  var SC = ['http://', 'https://', 'javascript:', 'file://'];
  var TC = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Tc(b, 'href');
      if (
        -1 !== c.indexOf(':') &&
        !SC.some(function (h) {
          return 0 === c.indexOf(h);
        })
      )
        return !1;
      var d = c.indexOf('#'),
        e = Tc(b, 'target');
      if ((e && '_self' !== e && '_parent' !== e && '_top' !== e) || 0 === d)
        return !1;
      if (0 < d) {
        var f = lk(ok(c)),
          g = lk(ok(z.location.href));
        return f !== g;
      }
      return !0;
    },
    UC = function (a, b) {
      for (
        var c = kk(
            ok(
              (b.attributes && b.attributes.formaction ? b.formAction : '') ||
                b.action ||
                Tc(b, 'href') ||
                b.src ||
                b.code ||
                b.codebase ||
                '',
            ),
            'host',
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    VC = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.Ch || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = Rc(d, ['a', 'area'], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = oz('lcl', e ? 'nv.mwt' : 'mwt', 0),
              g;
            g = e ? oz('lcl', 'nv.ids', []) : oz('lcl', 'ids', []);
            for (var h = [], m = 0; m < g.length; m++) {
              var n = g[m],
                p = oz('lcl', 'aff.map', {})[n];
              (p && !UC(p, d)) || h.push(n);
            }
            if (h.length) {
              var q = TC(c, d),
                r = kz(d, 'gtm.linkClick', h);
              r['gtm.elementText'] = Pc(d);
              r['gtm.willOpenInNewWindow'] = !q;
              if (q && !e && f && d.href) {
                var t = !!Ia(
                    String(Tc(d, 'rel') || '').split(' '),
                    function (x) {
                      return 'noreferrer' === x.toLowerCase();
                    },
                  ),
                  u = z[(Tc(d, 'target') || '_self').substring(1)],
                  v = !0,
                  w = xy(function () {
                    var x;
                    if ((x = v && u)) {
                      var y;
                      a: if (t) {
                        var B;
                        try {
                          B = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (A) {
                          if (!C.createEvent) {
                            y = !1;
                            break a;
                          }
                          B = C.createEvent('MouseEvents');
                          B.initEvent(c.type, !0, !0);
                        }
                        B.Ch = !0;
                        c.target.dispatchEvent(B);
                        y = !0;
                      } else y = !1;
                      x = !y;
                    }
                    x && (u.location.href = Tc(d, 'href'));
                  }, f);
                if (wy(r, w, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else wy(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Mc(C, 'click', b, !1);
      Mc(C, 'auxclick', b, !1);
    };
  function WC(a, b) {
    var c = this;
    K(J(this), ['dustOptions:?PixieMap', 'triggerId:?*'], arguments);
    var d = kd(a);
    NA([
      function () {
        return L(c, 'detect_link_click_events', d);
      },
    ]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = qz(b);
    if (e) {
      var h = Number(d.waitForTagsTimeout);
      (0 < h && isFinite(h)) || (h = 2e3);
      var m = function (p) {
        return Math.max(h, p);
      };
      nz('lcl', 'mwt', m, 0);
      f || nz('lcl', 'nv.mwt', m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    nz('lcl', 'ids', n, []);
    f || nz('lcl', 'nv.ids', n, []);
    g &&
      nz(
        'lcl',
        'aff.map',
        function (p) {
          p[b] = g;
          return p;
        },
        {},
      );
    oz('lcl', 'init', !1) || (VC(), mz('lcl', 'init', !0));
    return b;
  }
  WC.D = 'internal.enableAutoEventOnLinkClick';
  var XC, YC;
  var ZC = function (a) {
      return oz('sdl', a, {});
    },
    $C = function (a, b, c) {
      b &&
        (Array.isArray(a) || (a = [a]),
        nz(
          'sdl',
          c,
          function (d) {
            for (var e = 0; e < a.length; e++) {
              var f = String(a[e]);
              d.hasOwnProperty(f) || (d[f] = []);
              d[f].push(b);
            }
            return d;
          },
          {},
        ));
    },
    cD = function () {
      var a = function () {
        aD();
        bD(a, !0);
      };
      return a;
    },
    dD = function () {
      var a = 250,
        b = !1;
      C.scrollingElement &&
        C.documentElement &&
        z.addEventListener &&
        ((a = 50), (b = !0));
      var c = 0,
        d = !1,
        e = function () {
          d ? (c = z.setTimeout(e, a)) : ((c = 0), aD(), bD(f));
          d = !1;
        },
        f = function () {
          b && XC();
          c ? (d = !0) : ((c = z.setTimeout(e, a)), mz('sdl', 'pending', !0));
        };
      return f;
    },
    bD = function (a, b) {
      oz('sdl', 'init', !1) &&
        !eD() &&
        (b
          ? Nc(z, 'scrollend', a)
          : ((R(81) && 'onscrollend' in z) || Nc(z, 'scroll', a),
            Nc(z, 'resize', a)),
        mz('sdl', 'init', !1));
    },
    aD = function () {
      var a = XC(),
        b = a.oh,
        c = a.ph,
        d = (b / YC.scrollWidth) * 100,
        e = (c / YC.scrollHeight) * 100;
      fD(b, 'horiz.pix', 'PIXELS', 'horizontal');
      fD(d, 'horiz.pct', 'PERCENT', 'horizontal');
      fD(c, 'vert.pix', 'PIXELS', 'vertical');
      fD(e, 'vert.pct', 'PERCENT', 'vertical');
      mz('sdl', 'pending', !1);
    },
    fD = function (a, b, c, d) {
      var e = ZC(b),
        f = {},
        g;
      for (g in e)
        if (((f = { yd: f.yd }), (f.yd = g), e.hasOwnProperty(f.yd))) {
          var h = Number(f.yd);
          if (!(a < h)) {
            var m = {};
            vy(
              ((m.event = 'gtm.scrollDepth'),
              (m['gtm.scrollThreshold'] = h),
              (m['gtm.scrollUnits'] = c.toLowerCase()),
              (m['gtm.scrollDirection'] = d),
              (m['gtm.triggers'] = e[f.yd].join(',')),
              m),
            );
            nz(
              'sdl',
              b,
              (function (n) {
                return function (p) {
                  delete p[n.yd];
                  return p;
                };
              })(f),
              {},
            );
          }
        }
    },
    hD = function () {
      nz(
        'sdl',
        'scr',
        function (a) {
          a || (a = C.scrollingElement || (C.body && C.body.parentNode));
          return (YC = a);
        },
        !1,
      );
      nz(
        'sdl',
        'depth',
        function (a) {
          a || (a = gD());
          return (XC = a);
        },
        !1,
      );
    },
    gD = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Sq(),
          d = c.height;
        a = Math.max(YC.scrollLeft + c.width, a);
        b = Math.max(YC.scrollTop + d, b);
        return { oh: a, ph: b };
      };
    },
    eD = function () {
      return !!(
        Object.keys(ZC('horiz.pix')).length ||
        Object.keys(ZC('horiz.pct')).length ||
        Object.keys(ZC('vert.pix')).length ||
        Object.keys(ZC('vert.pct')).length
      );
    };
  function iD(a, b) {
    var c = this;
    K(J(this), ['options:!PixieMap', 'triggerId:?*'], arguments);
    NA([
      function () {
        return L(c, 'detect_scroll_events');
      },
    ]);
    hD();
    if (!YC) return;
    b = qz(b);
    var d = kd(a);
    switch (d.horizontalThresholdUnits) {
      case 'PIXELS':
        $C(d.horizontalThresholds, b, 'horiz.pix');
        break;
      case 'PERCENT':
        $C(d.horizontalThresholds, b, 'horiz.pct');
    }
    switch (d.verticalThresholdUnits) {
      case 'PIXELS':
        $C(d.verticalThresholds, b, 'vert.pix');
        break;
      case 'PERCENT':
        $C(d.verticalThresholds, b, 'vert.pct');
    }
    oz('sdl', 'init', !1)
      ? oz('sdl', 'pending', !1) ||
        H(function () {
          return aD();
        })
      : (mz('sdl', 'init', !0),
        mz('sdl', 'pending', !0),
        H(function () {
          aD();
          if (eD()) {
            var e = dD();
            R(81) && 'onscrollend' in z
              ? Mc(z, 'scrollend', cD())
              : Mc(z, 'scroll', e);
            Mc(z, 'resize', e);
          } else mz('sdl', 'init', !1);
        }));
    return b;
  }
  iD.D = 'internal.enableAutoEventOnScroll';
  function jD(a) {
    return function () {
      if (a.Ec && a.Hc >= a.Ec) a.Cc && z.clearInterval(a.Cc);
      else {
        a.Hc++;
        var b = Ta();
        vy({
          event: a.eventName,
          'gtm.timerId': a.Cc,
          'gtm.timerEventNumber': a.Hc,
          'gtm.timerInterval': a.interval,
          'gtm.timerLimit': a.Ec,
          'gtm.timerStartTime': a.cf,
          'gtm.timerCurrentTime': b,
          'gtm.timerElapsedTime': b - a.cf,
          'gtm.triggers': a.hi,
        });
      }
    };
  }
  function kD(a, b) {
    return b;
  }
  kD.D = 'internal.enableAutoEventOnTimer';
  var vc = da(['data-gtm-yt-inspected-']),
    lD = ['www.youtube.com', 'www.youtube-nocookie.com'],
    mD,
    nD = !1;
  var oD = function (a, b, c) {
      var d = a.map(function (g) {
        return { Ha: g, bf: g, Ze: void 0 };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return { Ha: g * c, bf: void 0, Ze: g };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, h) {
        return g.Ha - h.Ha;
      });
      return f;
    },
    pD = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    qD = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++)
        100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    rD = function (a, b) {
      var c, d;
      function e() {
        t = Kz(
          function () {
            return {
              url: w,
              title: x,
              qh: v,
              Ij: a.getCurrentTime(),
              playbackRate: y,
            };
          },
          b.vb,
          a.getIframe(),
        );
        v = 0;
        x = w = '';
        y = 1;
        return f;
      }
      function f(G) {
        switch (G) {
          case 1:
            v = Math.round(a.getDuration());
            w = a.getVideoUrl();
            if (a.getVideoData) {
              var E = a.getVideoData();
              x = E ? E.title : '';
            }
            y = a.getPlaybackRate();
            b.kh ? vy(t.createEvent('start')) : t.od();
            u = oD(b.Wh, b.Vh, a.getDuration());
            return g(G);
          default:
            return f;
        }
      }
      function g() {
        B = a.getCurrentTime();
        A = Sa().getTime();
        t.fk();
        r();
        return h;
      }
      function h(G) {
        var E;
        switch (G) {
          case 0:
            return n(G);
          case 2:
            E = 'pause';
          case 3:
            var F = a.getCurrentTime() - B;
            E =
              1 < Math.abs(((Sa().getTime() - A) / 1e3) * y - F)
                ? 'seek'
                : E || 'buffering';
            a.getCurrentTime() && (b.jh ? vy(t.createEvent(E)) : t.od());
            q();
            return m;
          case -1:
            return e(G);
          default:
            return h;
        }
      }
      function m(G) {
        switch (G) {
          case 0:
            return n(G);
          case 1:
            return g(G);
          case -1:
            return e(G);
          default:
            return m;
        }
      }
      function n() {
        for (; d; ) {
          var G = c;
          z.clearTimeout(d);
          G();
        }
        b.ih && vy(t.createEvent('complete', 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (z.clearTimeout(d), (d = 0), (c = p));
      }
      function r() {
        if (u.length && 0 !== y) {
          var G = -1,
            E;
          do {
            E = u[0];
            if (E.Ha > a.getDuration()) return;
            G = (E.Ha - a.getCurrentTime()) / y;
            if (0 > G && (u.shift(), 0 === u.length)) return;
          } while (0 > G);
          c = function () {
            d = 0;
            c = p;
            0 < u.length &&
              u[0].Ha === E.Ha &&
              (u.shift(), vy(t.createEvent('progress', E.Ze, E.bf)));
            r();
          };
          d = z.setTimeout(c, 1e3 * G);
        }
      }
      var t,
        u = [],
        v,
        w,
        x,
        y,
        B,
        A,
        D = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (G) {
          D = D(G);
        },
        onPlaybackRateChange: function (G) {
          B = a.getCurrentTime();
          A = Sa().getTime();
          t.od();
          y = G;
          q();
          r();
        },
      };
    },
    tD = function (a) {
      H(function () {
        function b() {
          for (
            var d = c.getElementsByTagName('iframe'), e = d.length, f = 0;
            f < e;
            f++
          )
            sD(d[f], a);
        }
        var c = C;
        b();
        yz(b);
      });
    },
    sD = function (a, b) {
      if (
        !a.getAttribute('data-gtm-yt-inspected-' + b.vb) &&
        (uc(a, 'data-gtm-yt-inspected-' + b.vb), uD(a, b.He))
      ) {
        a.id || (a.id = vD());
        var c = z.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = rD(d, b),
          f = {},
          g;
        for (g in e)
          (f = { Re: f.Re }),
            (f.Re = g),
            e.hasOwnProperty(f.Re) &&
              d.addEventListener(
                f.Re,
                (function (h) {
                  return function (m) {
                    return e[h.Re](m.data);
                  };
                })(f),
              );
      }
    },
    uD = function (a, b) {
      var c = a.getAttribute('src');
      if (wD(c, 'embed/')) {
        if (0 < c.indexOf('enablejsapi=1')) return !0;
        if (b) {
          var d;
          var e = -1 !== c.indexOf('?') ? '&' : '?';
          -1 < c.indexOf('origin=')
            ? (d = c + e + 'enablejsapi=1')
            : (mD ||
                ((mD = C.location.protocol + '//' + C.location.hostname),
                C.location.port && (mD += ':' + C.location.port)),
              (d = c + e + 'enablejsapi=1&origin=' + encodeURIComponent(mD)));
          var f;
          f = Jb(d);
          a.src = Hb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    wD = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < lD.length; c++)
        if (0 <= a.indexOf('//' + lD[c] + '/' + b)) return !0;
      return !1;
    },
    vD = function () {
      var a = Math.round(1e9 * Math.random()) + '';
      return C.getElementById(a) ? vD() : a;
    };
  function xD(a, b) {
    var c = this;
    K(J(this), ['dustOptions:!PixieMap', 'triggerId:?*'], arguments);
    NA([
      function () {
        return L(c, 'detect_youtube_activity_events', {
          fixMissingApi: !!a.get('fixMissingApi'),
        });
      },
    ]);
    b = qz(b);
    var d = !!a.get('captureStart'),
      e = !!a.get('captureComplete'),
      f = !!a.get('capturePause'),
      g = qD(kd(a.get('progressThresholdsPercent'))),
      h = pD(kd(a.get('progressThresholdsTimeInSeconds'))),
      m = !!a.get('fixMissingApi');
    if (!(d || e || f || g.length || h.length)) return;
    var n = { kh: d, ih: e, jh: f, Vh: g, Wh: h, He: m, vb: b },
      p = z.YT,
      q = function () {
        tD(n);
      };
    if (p) return p.ready && p.ready(q), b;
    var r = z.onYouTubeIframeAPIReady;
    z.onYouTubeIframeAPIReady = function () {
      r && r();
      q();
    };
    H(function () {
      for (
        var t = C.getElementsByTagName('script'), u = t.length, v = 0;
        v < u;
        v++
      ) {
        var w = t[v].getAttribute('src');
        if (wD(w, 'iframe_api') || wD(w, 'player_api')) return b;
      }
      for (
        var x = C.getElementsByTagName('iframe'), y = x.length, B = 0;
        B < y;
        B++
      )
        if (!nD && uD(x[B], n.He))
          return Ic('https://www.youtube.com/iframe_api'), (nD = !0), b;
    });
    return b;
  }
  xD.D = 'internal.enableAutoEventOnYouTubeActivity';
  var yD;
  function zD(a) {
    var b = !1;
    return b;
  }
  zD.D = 'internal.evaluateMatchingRules';
  var fE = function () {
    var a = !0;
    (Zm(7) && Zm(9) && Zm(10)) || (a = !1);
    return a;
  };
  function aF(a, b, c, d) {}
  aF.D = 'internal.executeEventProcessor';
  function bF(a) {
    var b = void 0;
    return jd(b, this.h, 1);
  }
  bF.D = 'internal.executeJavascriptString';
  var cF = function (a) {
    var b;
    return b;
  };
  function dF() {
    var a = new sb();
    L(this, 'read_container_data'),
      a.set('containerId', 'G-NVP1BM95RS'),
      a.set('version', '1'),
      a.set('environmentName', ''),
      a.set('debugMode', Zf),
      a.set('previewMode', ag),
      a.set('environmentMode', $f),
      a.set('firstPartyServing', tk()),
      a.set('containerUrl', Cc),
      a.Ib();
    return a;
  }
  dF.P = 'getContainerVersion';
  function eF(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  eF.P = 'getCookieValues';
  function fF() {
    return cj();
  }
  fF.D = 'internal.getCountryCode';
  function gF() {
    var a = [];
    a = Ik();
    return jd(a);
  }
  gF.D = 'internal.getDestinationIds';
  function hF(a, b) {
    var c = null;
    return c;
  }
  hF.D = 'internal.getElementAttribute';
  function iF(a) {
    var b = null;
    return b;
  }
  iF.D = 'internal.getElementById';
  function jF(a) {
    var b = '';
    return b;
  }
  jF.D = 'internal.getElementInnerText';
  function kF(a, b) {
    var c = null;
    return c;
  }
  kF.D = 'internal.getElementProperty';
  function lF(a) {
    var b;
    return b;
  }
  lF.D = 'internal.getElementValue';
  function mF(a) {
    var b = 0;
    return b;
  }
  mF.D = 'internal.getElementVisibilityRatio';
  function nF(a) {
    var b = null;
    return b;
  }
  nF.D = 'internal.getElementsByCssSelector';
  function oF(a) {
    var b = void 0;
    return b;
  }
  oF.D = 'internal.getEventData';
  var pF = {};
  pF.enableAWFledge = R(6);
  pF.enableAdsConversionValidation = R(19);
  pF.enableAutoPiiOnPhoneAndAddress = R(24);
  pF.enableCachedEcommerceData = R(72);
  pF.enableCcdPreAutoPiiDetection = R(12);
  pF.enableCloudRecommentationsErrorLogging = R(61);
  pF.enableCloudRecommentationsSchemaIngestion = R(60);
  pF.enableCloudRetailInjectPurchaseMetadata = R(59);
  pF.enableCloudRetailLogging = R(58);
  pF.enableCloudRetailPageCategories = R(17);
  pF.enableConsentDisclosureActivity = R(29);
  pF.enableDCFledge = R(8);
  pF.enableDecodeUri = R(47);
  pF.enableDeferAllEnhancedMeasurement = R(31);
  pF.enableEuidAutoMode = R(11);
  pF.enableFormSkipValidation = R(25);
  pF.enableUrlDecodeEventUsage = R(40);
  pF.enableZoneConfigInChildContainers = R(83);
  pF.loadContainerForGtmEventTags = R(28);
  pF.useEnableAutoEventOnFormApis = R(20);
  pF.autoPiiEligible = hj();
  function qF() {
    return jd(pF);
  }
  qF.D = 'internal.getFlags';
  function rF() {
    return new gd(dz);
  }
  rF.D = 'internal.getHtmlId';
  function sF(a, b) {
    var c;
    K(J(this), ['targetId:!string', 'name:!string'], arguments);
    var d = Wp(a) || {};
    c = jd(d[b], this.h);
    return c;
  }
  sF.D = 'internal.getProductSettingsParameter';
  function tF(a, b) {
    var c;
    K(J(this), ['queryKey:!string', 'retrieveAll:?boolean'], arguments);
    L(this, 'get_url', 'query', a);
    var d = kk(ok(z.location.href), 'query'),
      e = hk(d, a, b);
    c = jd(e, this.h);
    return c;
  }
  tF.P = 'getQueryParameters';
  function uF(a, b) {
    var c;
    return c;
  }
  uF.P = 'getReferrerQueryParameters';
  function vF(a) {
    var b = '';
    return b;
  }
  vF.P = 'getReferrerUrl';
  function wF() {
    return dj();
  }
  wF.D = 'internal.getRegionCode';
  function xF(a, b) {
    var c;
    K(J(this), ['targetId:!string', 'name:!string'], arguments);
    var d = fm(a);
    c = jd(d[b], this.h);
    return c;
  }
  xF.D = 'internal.getRemoteConfigParameter';
  function yF(a) {
    var b = '';
    K(J(this), ['component:?string'], arguments),
      L(this, 'get_url', a),
      (b = kk(ok(z.location.href), a));
    return b;
  }
  yF.P = 'getUrl';
  function zF() {
    L(this, 'get_user_agent');
    return Bc.userAgent;
  }
  zF.P = 'getUserAgent';
  var AF = !1,
    BF = function (a) {
      var b = a.eventName === P.g.qc && Hj() && Mr(a),
        c = a.metadata.is_sgtm_service_worker,
        d = a.metadata.batch_on_navigation,
        e = a.metadata.is_conversion,
        f = a.metadata.is_session_start,
        g = a.metadata.create_dc_join,
        h = a.metadata.create_google_join,
        m = a.metadata.euid_mode_enabled && !!Nr(a);
      return !(!Bc.sendBeacon || e || m || f || g || h || b || c || (!d && AF));
    };
  var CF = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Ta();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Eh() && (d = Ta() - b);
          return d + c;
        },
      };
    },
    DF = function () {
      this.h = void 0;
      this.s = 0;
      this.isActive = this.isVisible = this.C = !1;
      this.M = this.F = void 0;
    };
  aa = DF.prototype;
  aa.Xk = function (a) {
    var b = this;
    if (!this.h) {
      this.C = C.hasFocus();
      this.isVisible = !C.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Mc(d, e, function (g) {
          b.h.stop();
          f(g);
          b.Eh() && b.h.start();
        });
      };
      c(z, 'focus', function () {
        b.C = !0;
      });
      c(z, 'blur', function () {
        b.C = !1;
      });
      c(z, 'pageshow', function (d) {
        b.isActive = !0;
        d.persisted && M(56);
        b.M && b.M();
      });
      c(z, 'pagehide', function () {
        b.isActive = !1;
        b.F && b.F();
      });
      c(C, 'visibilitychange', function () {
        b.isVisible = !C.hidden;
      });
      Mr(a) &&
        -1 === (Bc.userAgent || '').indexOf('Firefox') &&
        -1 === (Bc.userAgent || '').indexOf('FxiOS') &&
        c(z, 'beforeunload', function () {
          AF = !0;
        });
      this.Zh();
      this.s = 0;
    }
  };
  aa.Zh = function () {
    this.s += this.Sf();
    this.h = CF(this);
    this.Eh() && this.h.start();
  };
  aa.wn = function (a) {
    var b = this.Sf();
    0 < b && (a.h[P.g.Md] = b);
  };
  aa.jm = function (a) {
    a.h[P.g.Md] = void 0;
    this.Zh();
    this.s = 0;
  };
  aa.Eh = function () {
    return this.C && this.isVisible && this.isActive;
  };
  aa.Yl = function () {
    return this.s + this.Sf();
  };
  aa.Sf = function () {
    return (this.h && this.h.get()) || 0;
  };
  aa.fn = function (a) {
    this.F = a;
  };
  aa.bk = function (a) {
    this.M = a;
  };
  var EF = function (a) {
    Ab('GA4_EVENT', a);
  };
  function FF() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var GF = function () {
      var a = FF();
      a.hid = a.hid || Ja();
      return a.hid;
    },
    HF = function (a, b) {
      var c = FF();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var IF = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (void 0 === d || c <= d)
        (a.h[P.g.Bb] = b), (a.metadata.client_id_source = c);
    },
    LF = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + '_ga',
        f = Zn(d, void 0, void 0, P.g.R);
      if (!1 === V(b.o, P.g.vc) && JF(b) === a) c = !0;
      else {
        var g = Yn(a, KF[0], d.domain, d.path);
        c = 1 !== Pn(e, g, f);
      }
      return c;
    },
    JF = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + '_ga',
        d = Xn(c, b.domain, b.path, KF, P.g.R);
      if (!d) {
        var e = String(V(a.o, P.g.sc, ''));
        e && e != c && (d = Xn(e, b.domain, b.path, KF, P.g.R));
      }
      return d;
    },
    KF = ['GA1'],
    MF = function (a, b) {
      var c = a.h[P.g.Bb];
      if ((V(a.o, P.g.Db) && V(a.o, P.g.Rb)) || (b && c === b)) return c;
      if (c) {
        c = '' + c;
        if (!LF(c, a)) return M(31), (a.isAborted = !0), '';
        HF(c, Tj(P.g.R));
        return c;
      }
      M(32);
      a.isAborted = !0;
      return '';
    };
  var PF = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = NF(a);
      if (!d) return b;
      var e,
        f = Na(null != (e = V(c.o, P.g.jd)) ? e : 30);
      if (
        !(Math.floor(c.metadata.event_start_timestamp_ms / 1e3) > d.Te + 60 * f)
      )
        return a;
      var g = NF(b);
      if (!g) return a;
      g.Mc = d.Mc + 1;
      var h;
      return null != (h = OF(g.sessionId, g.Mc, g.xd, g.Te, g.Ih, g.Fc, g.De))
        ? h
        : b;
    },
    SF = function (a, b) {
      var c = b.metadata.cookie_options,
        d = QF(b, c),
        e = Yn(a, RF[0], c.domain, c.path),
        f = {
          Mb: P.g.R,
          domain: c.domain,
          path: c.path,
          expires: c.Gc ? new Date(Ta() + 1e3 * c.Gc) : void 0,
          flags: c.flags,
        };
      Pn(d, void 0, f);
      return 1 !== Pn(d, e, f);
    },
    TF = function (a) {
      var b = a.metadata.cookie_options,
        c = QF(a, b),
        d = Xn(c, b.domain, b.path, RF, P.g.R);
      if (!d) return d;
      var e = Gn(c, void 0, void 0, P.g.R);
      if (d && 1 < e.length) {
        M(114);
        for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
          var m = e[h].split('.');
          if (!(7 > m.length)) {
            var n = Number(m[5]);
            n && (!g || n > g) && ((g = n), (f = e[h]));
          }
        }
        f &&
          f.substring(f.length - d.length, f.length) !== d &&
          (M(115), (d = f.split('.').slice(2).join('.')));
      }
      return d;
    },
    OF = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, Na(c), d, e];
        h.push(f ? '1' : '0');
        h.push(g || '0');
        return h.join('.');
      }
    },
    RF = ['GS1'],
    QF = function (a, b) {
      return b.prefix + '_ga_' + a.target.O[0];
    },
    NF = function (a) {
      if (a) {
        var b = a.split('.');
        if (!(5 > b.length || 7 < b.length)) {
          7 > b.length && M(67);
          var c = Number(b[1]),
            d = Number(b[3]),
            e = Number(b[4] || 0);
          c || M(118);
          d || M(119);
          isNaN(e) && M(120);
          if (c && d && !isNaN(e))
            return {
              sessionId: b[0],
              Mc: c,
              xd: !!Number(b[2]),
              Te: d,
              Ih: e,
              Fc: '1' === b[5],
              De: '0' !== b[6] ? b[6] : void 0,
            };
        }
      }
    },
    UF = function (a) {
      return OF(
        a.h[P.g.Hb],
        a.h[P.g.ce],
        a.h[P.g.be],
        Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        a.metadata.join_timer_sec || 0,
        !!a.metadata[P.g.vf],
        a.h[P.g.Nd],
      );
    };
  var VF = function (a) {
      var b = V(a.o, P.g.Da),
        c = a.o.s[P.g.Da];
      if (c === b) return c;
      var d = nb(b);
      c && c[P.g.X] && (d[P.g.X] = (d[P.g.X] || []).concat(c[P.g.X]));
      return d;
    },
    WF = function (a, b) {
      var c = po(!0);
      return '1' !== c._up ? {} : { clientId: c[a], dg: c[b] };
    },
    XF = function (a, b, c) {
      var d = po(!0),
        e = d[b];
      e && (IF(a, e, 2), LF(e, a));
      var f = d[c];
      f && SF(f, a);
      return { clientId: e, dg: f };
    },
    YF = !1,
    ZF = function (a) {
      var b = VF(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + '_ga',
        e = QF(a, c),
        f = {};
      zo(b[P.g.Sb], !!b[P.g.X]) &&
        ((f = XF(a, d, e)), f.clientId && f.dg && (YF = !0));
      b[P.g.X] &&
        wo(
          function () {
            var g = {},
              h = JF(a);
            h && (g[d] = h);
            var m = TF(a);
            m && (g[e] = m);
            var n = Gn('FPLC', void 0, void 0, P.g.R);
            n.length && (g._fplc = n[0]);
            return g;
          },
          b[P.g.X],
          b[P.g.Eb],
          !!b[P.g.rb],
        );
      return f;
    },
    aG = function (a) {
      if (!V(a.o, P.g.Za)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + '_ga',
        d = QF(a, b);
      xo(function () {
        var e;
        if (Tj('analytics_storage')) e = {};
        else {
          var f = {};
          e = ((f._up = '1'), (f[c] = a.h[P.g.Bb]), (f[d] = UF(a)), f);
        }
        return e;
      }, 1);
      return !Tj('analytics_storage') && $F() ? WF(c, d) : {};
    },
    $F = function () {
      var a = jk(z.location, 'host'),
        b = jk(ok(C.referrer), 'host');
      return a && b
        ? a === b || 0 <= a.indexOf('.' + b) || 0 <= b.indexOf('.' + a)
          ? !0
          : !1
        : !1;
    };
  var bG = function () {
    var a = Ta(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Ta();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var cG = function (a, b) {
      fn() && ((a.gcs = gn()), b.metadata.is_consent_update && (a.gcu = '1'));
      a.gcd = ln(b.o);
      en(b.o) ? (a.npa = '0') : (a.npa = '1');
    },
    fG = function (a) {
      if (a.metadata.is_merchant_center)
        return wk('https://www.merchant-center-analytics.goog') + '/mc/collect';
      var b = sk(vk(a.o), '/g/collect');
      if (b) return b;
      if (Ii.s) return '' + Ji() + '/g/collect';
      var c = Lr(a),
        d = V(a.o, P.g.kb);
      return c && !ej() && !1 !== d && fE() && Tj(P.g.J) && Tj(P.g.R)
        ? dG()
        : eG();
    },
    gG = !1;
  gG = !0;
  var hG = {};
  hG[P.g.Bb] = 'cid';
  hG[P.g.Pb] = 'are';
  hG[P.g.wf] = '_fid';
  hG[P.g.Gg] = '_geo';
  hG[P.g.qb] = 'gdid';
  hG[P.g.dd] = 'ir';
  hG[P.g.Oa] = 'ul';
  hG[P.g.Zd] = '_rdi';
  hG[P.g.Gb] = 'sr';
  hG[P.g.dj] = 'tid';
  hG[P.g.Cf] = 'tt';
  hG[P.g.ne] = 'ec_mode';
  hG[P.g.nj] = 'gtm_up';
  hG[P.g.de] = 'uaa';
  hG[P.g.ee] = 'uab';
  hG[P.g.fe] = 'uafvl';
  hG[P.g.he] = 'uamb';
  hG[P.g.ie] = 'uam';
  hG[P.g.je] = 'uap';
  hG[P.g.ke] = 'uapv';
  hG[P.g.me] = 'uaw';
  hG[P.g.ej] = 'ur';
  hG[P.g.ed] = 'lps';
  hG[P.g.Qg] = 'pae';
  hG[P.g.qf] = 'pscdl';
  var iG = {};
  iG[P.g.Oc] = 'cc';
  iG[P.g.Pc] = 'ci';
  iG[P.g.Qc] = 'cm';
  iG[P.g.Rc] = 'cn';
  iG[P.g.Tc] = 'cs';
  iG[P.g.Uc] = 'ck';
  iG[P.g.za] = 'cu';
  iG[P.g.ra] = 'dl';
  iG[P.g.Ea] = 'dr';
  iG[P.g.Fb] = 'dt';
  iG[P.g.be] = 'seg';
  iG[P.g.Hb] = 'sid';
  iG[P.g.ce] = 'sct';
  iG[P.g.Ua] = 'uid';
  R(18) && (iG[P.g.gd] = 'dp');
  var jG = {};
  jG[P.g.Md] = '_et';
  jG[P.g.nb] = 'edid';
  var kG = {};
  kG[P.g.Oc] = 'cc';
  kG[P.g.Pc] = 'ci';
  kG[P.g.Qc] = 'cm';
  kG[P.g.Rc] = 'cn';
  kG[P.g.Tc] = 'cs';
  kG[P.g.Uc] = 'ck';
  var lG = {},
    mG = Object.freeze(((lG[P.g.Fa] = 1), lG)),
    eG = function () {
      var a = 'www';
      gG && gj() && (a = gj());
      return 'https://' + a + '.google-analytics.com/g/collect';
    },
    dG = function () {
      var a;
      gG && '' !== gj() && (a = gj());
      return 'https://' + (a ? a + '.' : '') + 'analytics.google.com/g/collect';
    },
    nG = function (a, b, c) {
      var d = {},
        e = {},
        f = {};
      d.v = '2';
      d.tid = a.target.ba;
      Zp(a, 'google_ono', !1) && !ej() && (d._ono = 1);
      d.gtm = sn(Yp(a));
      d._p = R(62) ? Ci : GF();
      c && (d.em = c);
      a.metadata.create_google_join && (d._gaz = 1);
      cG(d, a);
      on() && (d.dma_cps = mn());
      d.dma = nn();
      $m() && (d.tcfd = pn());
      Ii.h && (d.tag_exp = Ii.h);
      var g = a.h[P.g.qb];
      g && (d.gdid = g);
      e.en = String(a.eventName);
      a.metadata.is_first_visit &&
        (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
      a.metadata.is_new_to_site && (e._nsi = 1);
      a.metadata.is_session_start &&
        (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
      a.metadata.is_conversion && (e._c = 1);
      a.metadata.is_external_event && (e._ee = 1);
      if (a.metadata.is_ecommerce) {
        var h = a.h[P.g.Z] || V(a.o, P.g.Z);
        if (Ha(h))
          for (var m = 0; m < h.length && 200 > m; m++)
            e['pr' + (m + 1)] = eg(h[m]);
      }
      var n = a.h[P.g.nb];
      n && (e.edid = n);
      var p = function (t, u) {
          if ('object' !== typeof u || !mG[t]) {
            var v = 'ep.' + t,
              w = 'epn.' + t;
            t = Ga(u) ? w : v;
            var x = Ga(u) ? v : w;
            e.hasOwnProperty(x) && delete e[x];
            e[t] = String(u);
          }
        },
        q = R(55) && Mr(a);
      l(a.h, function (t, u) {
        if (void 0 !== u && !$h.hasOwnProperty(t)) {
          null === u && (u = '');
          var v;
          t !== P.g.Nd
            ? (v = !1)
            : a.metadata.euid_mode_enabled || q
            ? ((d.ecid = u), (v = !0))
            : (v = void 0);
          if (!v && t !== P.g.vf) {
            var w = u;
            !0 === u && (w = '1');
            !1 === u && (w = '0');
            w = String(w);
            var x;
            if (hG[t]) (x = hG[t]), (d[x] = w);
            else if (iG[t]) (x = iG[t]), (f[x] = w);
            else if (jG[t]) (x = jG[t]), (e[x] = w);
            else if ('_' === t.charAt(0)) d[t] = w;
            else {
              var y;
              kG[t]
                ? (y = !0)
                : t !== P.g.Sc
                ? (y = !1)
                : ('object' !== typeof u && p(t, u), (y = !0));
              y || p(t, u);
            }
          }
        }
      });
      (function (t) {
        Mr(a) &&
          'object' === typeof t &&
          l(t || {}, function (u, v) {
            'object' !== typeof v && (d['sst.' + u] = String(v));
          });
      })(a.h[P.g.we]);
      var r = a.h[P.g.ab] || {};
      R(9) && !1 === V(a.o, P.g.kb, void 0, 4) && (d.ngs = '1');
      l(r, function (t, u) {
        void 0 !== u &&
          ((null === u && (u = ''), t !== P.g.Ua || f.uid)
            ? b[t] !== u &&
              ((e[(Ga(u) ? 'upn.' : 'up.') + String(t)] = String(u)),
              (b[t] = u))
            : (f.uid = String(u)));
      });
      return gg.call(this, { oa: d, Nc: f, sh: e }, fG(a), Mr(a)) || this;
    };
  sa(nG, gg);
  var oG = function (a) {
      this.s = a;
      this.C = '';
      this.h = this.s;
    },
    pG = function (a, b) {
      a.h = b;
      return a;
    },
    qG = function (a, b) {
      a.F = b;
      return a;
    };
  function rG(a) {
    var b = a.search;
    return (
      a.protocol +
      '//' +
      a.hostname +
      a.pathname +
      (b ? b + '&richsstsse' : '?richsstsse')
    );
  }
  function sG(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = mb(b) ? b : {}, f = fa(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var tG = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    uG = function (a) {
      var b = {},
        c = '',
        d = a.pathname.indexOf('/g/collect');
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + '//' + a.hostname + c;
      return b;
    },
    vG = function (a, b, c, d) {
      var e = qG(
          pG(
            new oG(function (h, m) {
              var n = tG(h, c);
              d && (n = n.replace('_is_sw=0', d));
              var p = {};
              m.attribution_reporting && (p.attributionsrc = '');
              Lc(n, void 0, void 0, p);
            }),
            function (h) {
              var m = tG(h, c);
              Sc(m);
            },
          ),
          function (h, m) {
            var n = tG(h, c),
              p = m.dedupe_key;
            p && Ms(n, p);
          },
        ),
        f = 0,
        g = new z.XMLHttpRequest();
      g.withCredentials = !0;
      g.onprogress = function (h) {
        if (200 === g.status) {
          var m = g.responseText.substring(f);
          f = h.loaded;
          var n;
          n = e.C + m;
          for (var p = n.indexOf('\n\n'); -1 !== p; ) {
            var q;
            a: {
              var r = fa(n.substring(0, p).split('\n')),
                t = r.next().value,
                u = r.next().value;
              if (
                0 === t.indexOf('event: message') &&
                0 === u.indexOf('data: ')
              )
                try {
                  q = JSON.parse(u.substring(u.indexOf(':') + 1));
                  break a;
                } catch (F) {}
              q = void 0;
            }
            var v = e,
              w = q;
            if (w) {
              sG(w.send_pixel, w.options, v.s);
              sG(w.send_beacon, void 0, v.h);
              var x = w.create_iframe,
                y = w.options,
                B = v.F;
              if (x && B) {
                var A = x || [];
                if (Array.isArray(A))
                  for (
                    var D = mb(y) ? y : {}, G = fa(A), E = G.next();
                    !E.done;
                    E = G.next()
                  )
                    B(E.value, D);
              }
            }
            n = n.substring(p + 2);
            p = n.indexOf('\n\n');
          }
          e.C = n;
        }
      };
      g.open(b ? 'POST' : 'GET', a);
      R(87) &&
        g.setAttributionReporting &&
        g.setAttributionReporting({
          eventSourceEligible: !1,
          triggerEligible: !0,
        });
      g.send(b);
    },
    wG = function (a, b) {
      var c = ok(a),
        d = uG(c),
        e = rG(c);
      R(68) && R(63)
        ? ps(e, b, d, function (f) {
            vG(e, b, d, f);
          })
        : vG(e, b, d);
    };
  var zG = function (a, b, c, d) {
      var e = R(44) && d;
      if (R(43) || e) {
        var f = b,
          g = Uc();
        void 0 !== g && (f += '&tfd=' + Math.round(g));
        b = f;
      }
      var h = a + '?' + b;
      xG && (d = !(0 === h.indexOf(eG()) || 0 === h.indexOf(dG())));
      d && !AF ? wG(h, c) : yG(a, b, c);
    },
    AG = function (a, b) {
      function c(v) {
        q.push(v + '=' + encodeURIComponent('' + a.oa[v]));
      }
      var d = b.pn,
        e = b.qn,
        f = b.bm,
        g = b.Bl,
        h = b.Al,
        m = b.wm,
        n = b.vm,
        p = b.bn;
      if (d || e) {
        var q = [];
        a.oa._ono && c('_ono');
        c('tid');
        c('cid');
        c('gtm');
        q.push('aip=1');
        a.Nc.uid && !n && q.push('uid=' + encodeURIComponent('' + a.Nc.uid));
        var r = function () {
          c('dma');
          null != a.oa.dma_cps && c('dma_cps');
          null != a.oa.gcs && c('gcs');
          c('gcd');
          null != a.oa.npa && c('npa');
        };
        r();
        d &&
          (yG(
            'https://stats.g.doubleclick.net/g/collect',
            'v=2&' + q.join('&'),
          ),
          Nj('https://stats.g.doubleclick.net/g/collect?v=2&' + q.join('&')));
        if (e) {
          var t = function () {
            var v = Ns() + '/td/ga/rul?';
            q = [];
            c('tid');
            q.push('gacid=' + encodeURIComponent(String(a.oa.cid)));
            c('gtm');
            r();
            R(79) && c('pscdl');
            q.push('aip=1');
            q.push('fledge=1');
            q.push('z=' + Ja());
            Ms(v + q.join('&'), a.oa.tid);
          };
          q.push('z=' + Ja());
          if (!m) {
            var u =
              f && 0 === f.indexOf('google.') && 'google.com' != f
                ? 'https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&'.replace(
                    '%',
                    f,
                  )
                : void 0;
            u && Lc(u + q.join('&'));
          }
          R(9) && (R(71) ? p && !AF && t() : !AF && g && h && Ls() && t());
        }
      }
    },
    xG = !1;
  var BG = function () {
    this.F = 1;
    this.M = {};
    this.h = new hg();
    this.s = -1;
  };
  BG.prototype.C = function (a, b) {
    var c = this,
      d = new nG(a, this.M, b),
      e = BF(a);
    (e && this.h.W(d)) || this.flush();
    if (e && this.h.add(d)) {
      if (0 > this.s) {
        var f = z.setTimeout,
          g;
        Mr(a) ? (CG ? ((CG = !1), (g = DG)) : (g = EG)) : (g = 5e3);
        this.s = f.call(
          z,
          function () {
            return c.flush();
          },
          g,
        );
      }
    } else {
      var h = jg(d, this.F++);
      zG(d.s, h.params, h.body, d.F);
      var m = a.metadata.create_dc_join,
        n = a.metadata.create_google_join,
        p = !1 !== V(a.o, P.g.Ca),
        q = en(a.o),
        r = { eventId: a.o.eventId, priorityId: a.o.priorityId },
        t = !1;
      R(71) && (t = a.h[P.g.Qg]);
      var u = {
        pn: m,
        qn: n,
        bm: ij(),
        Bl: p,
        Al: q,
        wm: ej(),
        vm: a.metadata.euid_mode_enabled,
        ko: r,
        bn: t,
        o: a.o,
      };
      AG(d, u);
    }
    Du(a.o.eventId, a.eventName);
  };
  BG.prototype.add = function (a) {
    a.metadata.euid_mode_enabled && !AF ? this.W(a) : this.C(a);
  };
  BG.prototype.flush = function () {
    if (this.h.events.length) {
      var a = kg(this.h, this.F++);
      zG(this.h.s, a.params, a.body, this.h.C);
      this.h = new hg();
      0 <= this.s && (z.clearTimeout(this.s), (this.s = -1));
    }
  };
  BG.prototype.W = function (a) {
    var b = this,
      c = Nr(a);
    c
      ? Xh(c, function (d) {
          b.C(a, 1 === d.split('~').length ? void 0 : d);
        })
      : this.C(a);
  };
  var yG = function (a, b, c) {
      var d = a + '?' + b;
      if (c)
        try {
          Bc.sendBeacon && Bc.sendBeacon(d, c);
        } catch (e) {
          Ab('TAGGING', 15);
        }
      else Sc(d);
    },
    DG = mm('', 500),
    EG = mm('', 5e3),
    CG = !0;
  var FG = function (a, b, c) {
      void 0 === c && (c = {});
      if ('object' === typeof b) for (var d in b) FG(a + '.' + d, b[d], c);
      else c[a] = b;
      return c;
    },
    GG = function (a) {
      if (Mr(a)) {
        if (R(55)) {
          var b = Zp(a, 'ccd_add_1p_data', !1) ? 1 : 0;
          Pr(a, 'ude', b);
        }
        var c = function (e) {
            var f = FG(P.g.Fa, e);
            l(f, function (g, h) {
              a.h[g] = h;
            });
          },
          d = V(a.o, P.g.Fa);
        void 0 !== d
          ? (c(d), R(50) && (a.h[P.g.ne] = 'c'))
          : c(a.metadata.user_data);
        a.metadata.user_data = void 0;
      }
    };
  var HG = window,
    IG = document,
    JG = function (a) {
      var b = HG._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        IG.documentElement.hasAttribute('data-google-analytics-opt-out') ||
        (a && !0 === HG['ga-disable-' + a])
      )
        return !0;
      try {
        var c = HG.external;
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = tn('AMP_TOKEN', String(IG.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ('$OPT_OUT' == d[e]) return !0;
      return IG.getElementById('__gaOptOutExtension') ? !0 : !1;
    };
  var LG = function (a) {
      return !a || KG.test(a) || bi.hasOwnProperty(a);
    },
    MG = function (a) {
      var b = P.g.Gb,
        c;
      c || (c = function () {});
      void 0 !== a.h[b] && (a.h[b] = c(a.h[b]));
    },
    NG = function (a) {
      var b = a.indexOf('?'),
        c = -1 === b ? a : a.substring(0, b);
      try {
        c = decodeURIComponent(c);
      } catch (d) {}
      return -1 === b ? c : '' + c + a.substring(b);
    },
    OG = function (a, b, c) {
      Tj(c) ||
        Vj(function () {
          b.metadata.is_consent_update = !0;
          var d = ji[c || ''];
          d && Pr(b, 'gcut', d);
          a.Dj(b);
        }, c);
    },
    Fs = { Ml: '', yn: Number('') },
    PG = {},
    QG =
      ((PG[P.g.Oc] = 1),
      (PG[P.g.Pc] = 1),
      (PG[P.g.Qc] = 1),
      (PG[P.g.Rc] = 1),
      (PG[P.g.Tc] = 1),
      (PG[P.g.Uc] = 1),
      PG),
    KG = /^(_|ga_|google_|gtag\.|firebase_).*$/,
    RG = function (a) {
      this.Qa = a;
      this.Xb = new BG();
      this.h = void 0;
      this.F = new DF();
      this.s = this.C = void 0;
      this.Yb = this.W = !1;
      this.md = 0;
      this.M = !1;
    };
  aa = RG.prototype;
  aa.Ym = function (a, b, c) {
    var d = this,
      e = ck(this.Qa);
    if (e)
      if (c.eventMetadata.is_external_event && '_' === a.charAt(0))
        c.onFailure();
      else {
        a !== P.g.da && a !== P.g.Ra && LG(a) && M(58);
        SG(c.h);
        var f = new Xp(e, a, c);
        f.metadata.event_start_timestamp_ms = b;
        var g = [P.g.R];
        (Zp(f, P.g.Qb, V(f.o, P.g.Qb)) || Mr(f)) && g.push(P.g.J);
        R(38) && Mr(f) && g.push(P.g.N);
        Gs(function () {
          Wj(function () {
            d.Zm(f);
          }, g);
        });
      }
    else c.onFailure();
  };
  aa.Zm = function (a) {
    this.s = a;
    try {
      if (JG(a.target.ba)) M(28), (a.isAborted = !0);
      else if (R(22)) {
        var b;
        var c = Mk(Nk()),
          d = c && c.parent;
        b = d ? Mk(d) : void 0;
        if (b && Ha(b.destinations))
          for (var e = 0; e < b.destinations.length; e++)
            if (JG(b.destinations[e])) {
              M(125);
              a.isAborted = !0;
              break;
            }
      }
      if (0 <= Fs.Ml.replace(/\s+/g, '').split(',').indexOf(a.eventName))
        a.isAborted = !0;
      else {
        var f = Or(a);
        f && f.blacklisted && (a.isAborted = !0);
      }
      var g = C.location.protocol;
      'http:' != g && 'https:' != g && (M(29), (a.isAborted = !0));
      Bc && 'preview' == Bc.loadPurpose && (M(30), (a.isAborted = !0));
      R(23) && (a.isAborted = !0);
      mq(a);
      var h = pi.grl;
      h || ((h = bG()), (pi.grl = h));
      h() || (M(35), (a.isAborted = !0));
      if (a.isAborted) {
        a.o.onFailure();
        Bb();
        return;
      }
      var m = {
        prefix: String(V(a.o, P.g.Ta, '')),
        path: String(V(a.o, P.g.uc, '/')),
        flags: String(V(a.o, P.g.Ya, '')),
        domain: String(V(a.o, P.g.Xa, 'auto')),
        Gc: Number(V(a.o, P.g.Sa, 63072e3)),
      };
      a.metadata.cookie_options = m;
      TG(a);
      this.Yk(a);
      this.F.wn(a);
      a.metadata.is_merchant_center
        ? (a.metadata.euid_mode_enabled = !1)
        : Zp(a, 'ccd_add_1p_data', !1) && (a.metadata.euid_mode_enabled = !0);
      if (a.metadata.euid_mode_enabled && Zp(a, 'ccd_add_1p_data', !1)) {
        var n = a.o.s[P.g.oe];
        if (Xi(n)) {
          var p = V(a.o, P.g.Fa);
          null === p
            ? (a.metadata.user_data_from_code = null)
            : (n.enable_code && mb(p) && (a.metadata.user_data_from_code = p),
              mb(n.selectors) &&
                !a.metadata.user_data_from_manual &&
                (a.metadata.user_data_from_manual = Wi(n.selectors)));
        }
      }
      var q = this.Zj,
        r;
      V(a.o, P.g.Za) && (Tj(P.g.R) || V(a.o, P.g.Bb) || (a.h[P.g.nj] = !0));
      var t;
      var u;
      u = void 0 === u ? 3 : u;
      var v = z.location.href;
      if (v) {
        var w = ok(v).search.replace('?', ''),
          x = hk(w, '_gl', !1, !0) || '';
        t = x ? void 0 !== qo(x, u) : !1;
      } else t = !1;
      t && Mr(a) && Pr(a, 'glv', 1);
      if (a.eventName !== P.g.da) r = {};
      else {
        V(a.o, P.g.Za) && wp(['aw', 'dc']);
        yp(['aw', 'dc']);
        var y = ZF(a),
          B = aG(a);
        r = Object.keys(y).length ? y : B;
      }
      q.call(this, r);
      var A = a.eventName === P.g.da;
      A && (this.M = !0);
      a.eventName == P.g.da &&
        (V(a.o, P.g.Pa, !0)
          ? (a.o.h[P.g.fa] &&
              ((a.o.C[P.g.fa] = a.o.h[P.g.fa]),
              (a.o.h[P.g.fa] = void 0),
              (a.h[P.g.fa] = void 0)),
            (a.eventName = P.g.qc))
          : (a.isAborted = !0));
      A && !a.isAborted && 0 < this.md++ && EF(17);
      var D = bb(Kl(a.o, P.g.fa, 1), '.');
      D && (a.h[P.g.qb] = D);
      var G = bb(Kl(a.o, P.g.fa, 2), '.');
      G && (a.h[P.g.nb] = G);
      var E = this.C,
        F = this.F,
        N = !this.Yb,
        O = this.h,
        T = V(a.o, P.g.Bb);
      if (V(a.o, P.g.Db) && V(a.o, P.g.Rb))
        T ? IF(a, T, 1) : (M(127), (a.isAborted = !0));
      else {
        var Y = T ? 1 : 8;
        a.metadata.is_new_to_site = !1;
        T || ((T = JF(a)), (Y = 3));
        T || ((T = O), (Y = 5));
        if (!T) {
          var S = Tj(P.g.R),
            U = FF();
          T = !U.from_cookie || S ? U.vid : void 0;
          Y = 6;
        }
        T
          ? (T = '' + T)
          : ((T = Wn()),
            (Y = 7),
            (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0));
        IF(a, T, Y);
      }
      var ja = Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        ia = void 0;
      a.metadata.is_new_to_site || (ia = TF(a) || E);
      var ca = Na(V(a.o, P.g.jd, 30));
      ca = Math.min(475, ca);
      ca = Math.max(5, ca);
      var Da = Na(V(a.o, P.g.Af, 1e4)),
        pa = NF(ia);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      pa &&
        pa.Ih &&
        (a.metadata.join_timer_sec = Math.max(
          0,
          pa.Ih - Math.max(0, ja - pa.Te),
        ));
      var Ca = !1;
      pa ||
        ((Ca = a.metadata.is_first_visit = !0),
        (pa = {
          sessionId: String(ja),
          Mc: 1,
          xd: !1,
          Te: ja,
          Fc: !1,
          De: void 0,
        }));
      ja > pa.Te + 60 * ca &&
        ((Ca = !0),
        (pa.sessionId = String(ja)),
        pa.Mc++,
        (pa.xd = !1),
        (pa.De = void 0));
      if (Ca) (a.metadata.is_session_start = !0), F.jm(a);
      else if (F.Yl() > Da || a.eventName == P.g.qc) pa.xd = !0;
      a.metadata.euid_mode_enabled
        ? V(a.o, P.g.Ua)
          ? (pa.Fc = !0)
          : (pa.Fc && (pa.De = void 0), (pa.Fc = !1))
        : (pa.Fc = !1);
      var Pa = pa.De,
        lb = R(55) && Mr(a);
      if (a.metadata.euid_mode_enabled || lb) {
        var xc = V(a.o, P.g.Nd),
          Cd = xc ? 1 : 8;
        xc || ((xc = Pa), (Cd = 4));
        xc || ((xc = Vn()), (Cd = 7));
        var nh = xc.toString(),
          zw = Cd,
          Aw = a.metadata.enhanced_client_id_source;
        if (void 0 === Aw || zw <= Aw)
          (a.h[P.g.Nd] = nh), (a.metadata.enhanced_client_id_source = zw);
      }
      N
        ? (a.copyToHitData(P.g.Hb, pa.sessionId),
          a.copyToHitData(P.g.ce, pa.Mc),
          a.copyToHitData(P.g.be, pa.xd ? 1 : 0))
        : ((a.h[P.g.Hb] = pa.sessionId),
          (a.h[P.g.ce] = pa.Mc),
          (a.h[P.g.be] = pa.xd ? 1 : 0));
      a.metadata[P.g.vf] = pa.Fc ? 1 : 0;
      UG(a);
      if (!V(a.o, P.g.Rb) || !V(a.o, P.g.Db)) {
        var Bw = '',
          oh = C.location;
        if (oh) {
          var wj = oh.pathname || '';
          '/' != wj.charAt(0) && (wj = '/' + wj);
          Bw = oh.protocol + '//' + oh.hostname + wj + oh.search;
        }
        a.copyToHitData(P.g.ra, Bw, NG);
        var bJ = a.copyToHitData,
          cJ = P.g.Ea,
          xj;
        a: {
          var Cw = Gn('_opt_expid', void 0, void 0, P.g.R)[0];
          if (Cw) {
            var Dw = decodeURIComponent(Cw).split('$');
            if (3 === Dw.length) {
              xj = Dw[2];
              break a;
            }
          }
          if (void 0 !== pi.ga4_referrer_override)
            xj = pi.ga4_referrer_override;
          else {
            var Ew = Pi('gtm.gtagReferrer.' + a.target.ba),
              dJ = C.referrer;
            xj = Ew ? '' + Ew : dJ;
          }
        }
        bJ.call(a, cJ, xj || void 0, NG);
        a.copyToHitData(P.g.Fb, C.title);
        a.copyToHitData(P.g.Oa, (Bc.language || '').toLowerCase());
        var Fw = Qq();
        a.copyToHitData(P.g.Gb, Fw.width + 'x' + Fw.height);
        R(18) && a.copyToHitData(P.g.gd, void 0, NG);
        R(45) && dq() && a.copyToHitData(P.g.ed, '1');
      }
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (
        !(
          Ii.s ||
          (R(30) && Mr(a)) ||
          a.metadata.is_merchant_center ||
          !1 === V(a.o, P.g.kb)
        ) &&
        fE() &&
        Tj(P.g.J)
      ) {
        var Gw = Lr(a);
        (a.metadata.is_session_start || V(a.o, P.g.Fg)) &&
          (a.metadata.create_dc_join = !!Gw);
        var Hw;
        Hw = a.metadata.join_timer_sec;
        Gw &&
          0 === (Hw || 0) &&
          ((a.metadata.join_timer_sec = 60),
          (a.metadata.create_google_join = !0));
      }
      VG(a);
      di.hasOwnProperty(a.eventName) &&
        ((a.metadata.is_ecommerce = !0),
        a.copyToHitData(P.g.Z),
        a.copyToHitData(P.g.za));
      a.copyToHitData(P.g.Cf);
      for (var Iw = V(a.o, P.g.xf) || [], vn = 0; vn < Iw.length; vn++) {
        var Jw = Iw[vn];
        if (Jw.rule_result) {
          a.copyToHitData(P.g.Cf, Jw.traffic_type);
          EF(3);
          break;
        }
      }
      if (!a.metadata.is_merchant_center && vk(a.o)) {
        var Kw = VF(a) || {},
          fJ =
            (zo(Kw[P.g.Sb], !!Kw[P.g.X]) ? po(!0)._fplc : void 0) ||
            (0 < Gn('FPLC', void 0, void 0, P.g.R).length ? void 0 : '0');
        a.h._fplc = fJ;
      }
      if (void 0 !== V(a.o, P.g.dd)) a.copyToHitData(P.g.dd);
      else {
        var Lw = V(a.o, P.g.yf),
          wn,
          yj;
        a: {
          if (YF) {
            var xn = VF(a) || {};
            if (xn && xn[P.g.X])
              for (
                var Mw = kk(ok(a.h[P.g.Ea]), 'host', !0),
                  zj = xn[P.g.X],
                  ph = 0;
                ph < zj.length;
                ph++
              )
                if (zj[ph] instanceof RegExp) {
                  if (zj[ph].test(Mw)) {
                    yj = !0;
                    break a;
                  }
                } else if (0 <= Mw.indexOf(zj[ph])) {
                  yj = !0;
                  break a;
                }
          }
          yj = !1;
        }
        if (!(wn = yj)) {
          var Aj;
          if ((Aj = Lw))
            a: {
              for (
                var Nw = Lw.include_conditions || [],
                  gJ = kk(ok(a.h[P.g.Ea]), 'host', !0),
                  yn = 0;
                yn < Nw.length;
                yn++
              )
                if (Nw[yn].test(gJ)) {
                  Aj = !0;
                  break a;
                }
              Aj = !1;
            }
          wn = Aj;
        }
        wn && ((a.h[P.g.dd] = '1'), EF(4));
      }
      Mr(a) && (Pr(a, 'uc', cj()), Hj() && Pr(a, 'rnd', $p()));
      if (R(14) && Mr(a)) {
        Zp(a, P.g.Qb, !1) && Pr(a, 'gse', 1);
        !1 === V(a.o, P.g.kb, void 0, 4) && Pr(a, 'ngs', 1);
        ej() && Pr(a, 'ga_rd', 1);
        fE() || Pr(a, 'ngst', 1);
        var Ow = ij();
        Ow && Pr(a, 'etld', Ow);
      }
      if (Mr(a)) {
        var Pw = gG ? gj() : '';
        Pw && Pr(a, 'gcsub', Pw);
      }
      Mr(a) &&
        (Pr(a, 'gcd', ln(a.o)), Hj() && V(a.o, P.g.aa) && Pr(a, 'adr', 1));
      if (Mr(a)) {
        var Qw = eq();
        Qw && Pr(a, 'us_privacy', Qw);
        var Rw = Ym();
        Rw && Pr(a, 'gdpr', Rw);
        var Sw = Wm();
        Sw && Pr(a, 'gdpr_consent', Sw);
      }
      R(39) && Mr(a) && (a.h[P.g.ej] = dj() || cj());
      if (Mr(a) && R(44)) {
        var Tw = Ci;
        Tw && Pr(a, 'tft', Number(Tw));
      }
      R(63) && R(68) && Pr(a, 'sw_exp', 1);
      R(49) &&
        Mr(a) &&
        (a.metadata.speculative && Pr(a, 'sp', 1),
        a.metadata.is_syn && Pr(a, 'syn', 1),
        a.metadata.em_event && (Pr(a, 'em_event', 1), Pr(a, 'sp', 1)));
      R(93) &&
        Mr(a) &&
        !1 !== V(a.o, P.g.Ca) &&
        Js('join-ad-interest-group') &&
        Fa(Bc.joinAdInterestGroup) &&
        Pr(a, 'flg', 1);
      if (!Bs(z)) M(87);
      else if (void 0 !== Ds) {
        M(85);
        var Uw = zs();
        Uw ? (V(a.o, P.g.Zd) && !Mr(a)) || Hs(Uw, a) : M(86);
      }
      var zn = Js(Is());
      zn ||
        WG ||
        ((WG = !0),
        Am(
          'AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
        ),
        (zn = Js(Is())));
      zn && (a.h[P.g.Pb] = '1');
      if (R(71) && !1 !== V(a.o, P.g.Ca) && en(a.o)) {
        var hJ = Lr(a),
          iJ = V(a.o, P.g.kb);
        if (hJ && !1 !== iJ && fE() && Tj(P.g.J)) {
          var An;
          if (!(An = !R(42))) {
            var Ww = P.g.wi;
            An = ni[Ww] && Dj(P.g.N) ? !!Fj()[Ww] : !1;
          }
          An &&
            Js('join-ad-interest-group') &&
            Fa(Bc.joinAdInterestGroup) &&
            (a.h[P.g.Qg] = !0);
        }
      }
      R(79) && nq(a);
      if (a.eventName == P.g.Ra) {
        var Xw = V(a.o, P.g.pb),
          jJ = V(a.o, P.g.Cb),
          Yw = void 0;
        Yw = a.h[Xw];
        jJ(Yw || V(a.o, Xw));
        a.isAborted = !0;
      }
      a.copyToHitData(P.g.Ua);
      a.copyToHitData(P.g.ab);
      Kq(a);
      GG(a);
      R(49) && Mr(a) && (a.metadata.speculative = !1);
      var Zw = V(a.o, P.g.Db);
      Zw && EF(12);
      a.metadata.em_event && EF(14);
      var qh = Mk(Nk());
      (Zw ||
        Zk(qh) ||
        (qh && qh.parent && qh.context && 5 === qh.context.source)) &&
        EF(19);
      !this.M && a.metadata.em_event && EF(18);
      var Bn = a.metadata.event_usage;
      if (Ha(Bn)) for (var Cn = 0; Cn < Bn.length; Cn++) EF(Bn[Cn]);
      var $w = Cb('GA4_EVENT');
      $w && (a.h._eu = $w);
      if (a.metadata.speculative || a.isAborted) {
        a.o.onFailure();
        Bb();
        return;
      }
      var kJ = this.Zj,
        ax,
        lJ = this.h,
        Dn;
      a: {
        var En = UF(a);
        if (En) {
          if (SF(En, a)) {
            Dn = En;
            break a;
          }
          M(25);
          a.isAborted = !0;
        }
        Dn = void 0;
      }
      var mJ = Dn;
      ax = { clientId: MF(a, lJ), dg: mJ };
      kJ.call(this, ax);
      this.Yb = !0;
      this.un(a);
      if (
        R(65) &&
        Tj(P.g.R) &&
        (Mr(a) &&
          R(68) &&
          (R(63) || R(64)) &&
          (a.metadata.is_sgtm_service_worker = !0),
        R(63))
      )
        a: {
        }
      if (Mr(a)) {
        var oJ = a.metadata.is_conversion;
        if ('page_view' === a.eventName || oJ)
          OG(this, a, P.g.J), R(38) && OG(this, a, P.g.N);
      }
      this.F.Zh();
      a.copyToHitData(P.g.Gg);
      V(a.o, P.g.Zd) && ((a.h[P.g.Zd] = !0), Mr(a) || MG(a));
      if (a.isAborted) {
        a.o.onFailure();
        Bb();
        return;
      }
      this.Dj(a);
      a.o.onSuccess();
    } catch (RJ) {
      a.o.onFailure();
    }
    Bb();
  };
  aa.Dj = function (a) {
    this.Xb.add(a);
  };
  aa.Zj = function (a) {
    var b = a.clientId,
      c = a.dg;
    b && c && ((this.h = b), (this.C = c));
  };
  aa.flush = function () {
    this.Xb.flush();
  };
  aa.un = function (a) {
    var b = this;
    if (!this.W) {
      var c = Tj(P.g.R);
      Uj([P.g.R], function () {
        var d = Tj(P.g.R);
        if (c ^ d && b.s && b.C && b.h) {
          var e = b.h;
          if (d) {
            var f = JF(b.s);
            if (f) {
              b.h = f;
              var g = TF(b.s);
              g && (b.C = PF(g, b.C, b.s));
            } else LF(b.h, b.s), HF(b.h, !0);
            SF(b.C, b.s);
            var h = {};
            h[P.g.Fg] = e;
            var m = cx(b.Qa, P.g.Cd, h);
            fx(m, a.o.eventId, {});
          } else (b.C = void 0), (b.h = void 0), (z.gaGlobal = {});
          c = d;
        }
      });
      this.W = !0;
    }
  };
  aa.Yk = function (a) {
    a.eventName !== P.g.Ra && this.F.Xk(a);
  };
  var TG = function (a) {
      function b(c, d) {
        $h[c] || void 0 === d || (a.h[c] = d);
      }
      l(a.o.C, b);
      l(a.o.h, b);
    },
    UG = function (a) {
      var b = Ll(a.o),
        c = function (d, e) {
          QG[d] && (a.h[d] = e);
        };
      mb(b[P.g.Sc])
        ? l(b[P.g.Sc], function (d, e) {
            c((P.g.Sc + '_' + d).toLowerCase(), e);
          })
        : l(b, c);
    },
    VG = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(Or(a));
      a.metadata.is_first_visit &&
        (a.metadata.is_first_visit_conversion = b(Or(a, 'first_visit')));
      a.metadata.is_session_start &&
        (a.metadata.is_session_start_conversion = b(Or(a, 'session_start')));
    },
    WG = !1;
  function SG(a) {
    l(a, function (c) {
      '_' === c.charAt(0) && delete a[c];
    });
    var b = a[P.g.ab] || {};
    l(b, function (c) {
      '_' === c.charAt(0) && delete b[c];
    });
  }
  var XG = function (a) {
      if (
        R(34) && 'prerendering' in C
          ? C.prerendering
          : 'prerender' === C.visibilityState
      )
        return !1;
      a();
      return !0;
    },
    YG = function (a) {
      if (!XG(a)) {
        var b = !1,
          c = function () {
            !b &&
              XG(a) &&
              ((b = !0),
              Nc(C, 'visibilitychange', c),
              R(34) && Nc(C, 'prerenderingchange', c),
              M(55));
          };
        Mc(C, 'visibilitychange', c);
        R(34) && Mc(C, 'prerenderingchange', c);
        M(54);
      }
    };
  var $G = function (a, b) {
    YG(function () {
      var c = ck(a);
      if (c) {
        var d = ZG(c, b);
        bm(a, d);
      }
    });
  };
  function ZG(a, b) {
    var c = function () {};
    var d = new RG(a.id),
      e = 'MC' === a.prefix;
    c = function (f, g, h, m) {
      e && (m.eventMetadata.is_merchant_center = !0);
      d.Ym(g, h, m);
    };
    Dk || aH(a, d, b);
    return c;
  }
  function aH(a, b, c) {
    var d = b.F,
      e = {},
      f = { eventId: c, eventMetadata: ((e.batch_on_navigation = !0), e) };
    R(31) && (f.deferrable = !0);
    d.fn(function () {
      AF = !0;
      am.flush();
      1e3 <= d.Sf() && Bc.sendBeacon && cm(P.g.Cd, {}, a.id, f);
      b.flush();
      d.bk(function () {
        AF = !1;
        d.bk();
      });
    });
  }
  var bH = ZG;
  function dH(a, b, c) {
    var d = this;
  }
  dH.D = 'internal.gtagConfig';
  function eH() {
    var a = {};
    return a;
  }
  function gH(a, b) {}
  gH.P = 'gtagSet';
  function hH(a, b) {}
  hH.P = 'injectHiddenIframe';
  function iH(a, b, c, d, e) {}
  iH.D = 'internal.injectHtml';
  var mH = {};
  function oH(a, b, c, d) {}
  var pH = Object.freeze({ dl: 1, id: 1 }),
    qH = {};
  function rH(a, b, c, d) {}
  oH.P = 'injectScript';
  rH.D = 'internal.injectScript';
  function sH(a) {
    var b = !0;
    return b;
  }
  sH.P = 'isConsentGranted';
  function tH(a) {
    var b = !1;
    return b;
  }
  tH.D = 'internal.isEntityInfrastructure';
  var uH = function () {
    var a = eh(function (b) {
      this.h.h.log('error', b);
    });
    a.P = 'JSON';
    return a;
  };
  function vH(a) {
    var b = void 0;
    return jd(b);
  }
  vH.D = 'internal.legacyParseUrl';
  var wH = function () {
      return !1;
    },
    xH = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function yH() {}
  yH.P = 'logToConsole';
  function zH(a, b) {}
  zH.D = 'internal.mergeRemoteConfig';
  function AH(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return jd(d);
  }
  AH.D = 'internal.parseCookieValuesFromString';
  function BH(a) {
    var b = void 0;
    if ('string' !== typeof a) return;
    a && 0 === a.indexOf('//') && (a = C.location.protocol + a);
    if ('function' === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (w) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g][0],
            m = f[g][1];
          e.hasOwnProperty(h)
            ? 'string' === typeof e[h]
              ? (e[h] = [e[h], m])
              : e[h].push(m)
            : (e[h] = m);
        }
        c = jd({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = ok(a);
    } catch (w) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace('?', '').split('&'), r = 0;
        r < q.length;
        r++
      ) {
        var t = q[r].split('='),
          u = t[0],
          v = decodeURIComponent(t.splice(1).join('=')).replace(/\+/g, ' ');
        p.hasOwnProperty(u)
          ? 'string' === typeof p[u]
            ? (p[u] = [p[u], v])
            : p[u].push(v)
          : (p[u] = v);
      }
    n.searchParams = p;
    n.origin = n.protocol + '//' + n.host;
    n.username = '';
    n.password = '';
    b = jd(n);
    return b;
  }
  BH.P = 'parseUrl';
  function CH(a) {}
  CH.D = 'internal.processAsNewEvent';
  function DH(a, b, c) {
    var d;
    return d;
  }
  DH.D = 'internal.pushToDataLayer';
  function EH(a, b) {
    var c = !1;
    return c;
  }
  EH.P = 'queryPermission';
  function FH() {
    var a = '';
    return a;
  }
  FH.P = 'readCharacterSet';
  function GH() {
    return oi.ja;
  }
  GH.D = 'internal.readDataLayerName';
  function HH() {
    var a = '';
    return a;
  }
  HH.P = 'readTitle';
  function IH(a, b) {
    var c = this;
    K(J(this), ['destinationId:!string', 'callback:!Fn'], arguments),
      Lq(a, function (d) {
        b.invoke(c.h, jd(d, c.h, 1));
      });
  }
  IH.D = 'internal.registerCcdCallback';
  function JH(a) {
    return !0;
  }
  JH.D = 'internal.registerDestination';
  var KH = Object.freeze(['config', 'event', 'get', 'set']);
  function LH(a, b, c) {}
  LH.D = 'internal.registerGtagCommandListener';
  function MH(a, b) {
    var c = !1;
    return c;
  }
  MH.D = 'internal.removeDataLayerEventListener';
  function NH(a, b) {}
  NH.D = 'internal.removeFormData';
  function OH() {}
  OH.P = 'resetDataLayer';
  function PH(a, b, c, d) {
    K(
      J(this),
      [
        'destinationIds:!*',
        'eventName:!*',
        'eventParameters:?PixieMap',
        'messageContext:?PixieMap',
      ],
      arguments,
    );
    var e = c ? kd(c) : {},
      f = kd(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? kd(d) : {},
      h = this.h.h;
    g.originatingEntity = uB(h);
    for (var m = 0; m < f.length; m++) {
      var n = f[m];
      if ('string' === typeof n) {
        var p = nb(e),
          q = nb(g),
          r = cx(n, b, p);
        fx(r, g.eventId || h.eventId, q);
      }
    }
  }
  PH.D = 'internal.sendGtagEvent';
  function QH(a, b, c) {}
  QH.P = 'sendPixel';
  function RH(a, b) {}
  RH.D = 'internal.setAnchorHref';
  function SH(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  SH.P = 'setCookie';
  function TH(a) {}
  TH.D = 'internal.setCorePlatformServices';
  function UH(a, b) {}
  UH.D = 'internal.setDataLayerValue';
  function VH(a) {}
  VH.P = 'setDefaultConsentState';
  function WH(a, b) {}
  WH.D = 'internal.setDelegatedConsentType';
  function XH(a, b) {}
  XH.D = 'internal.setFormAction';
  function YH(a, b, c) {
    return !1;
  }
  YH.P = 'setInWindow';
  function ZH(a, b, c) {
    K(J(this), ['targetId:!string', 'name:!string', 'value:!*'], arguments);
    var d = Wp(a) || {};
    d[b] = kd(c, this.h);
    var e = a;
    Up || Vp();
    Tp[e] = d;
  }
  ZH.D = 'internal.setProductSettingsParameter';
  function $H(a, b, c) {
    K(J(this), ['targetId:!string', 'name:!string', 'value:!*'], arguments);
    for (var d = b.split('.'), e = fm(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!mb(e[d[f]]))
        throw Error(
          'setRemoteConfigParameter failed, path contains a non-object type: ' +
            d[f],
        );
      e = e[d[f]];
    }
    e[d[f]] = kd(c, this.h, 1);
  }
  $H.D = 'internal.setRemoteConfigParameter';
  function aI(a, b) {
    var c = this;
  }
  aI.D = 'internal.setupConversionLinker';
  function bI(a, b, c, d) {
    var e = this;
  }
  bI.P = 'sha256';
  function cI(a, b, c) {}
  cI.D = 'internal.sortRemoteConfigParameters';
  var dI = {},
    eI = {};
  dI.P = 'templateStorage';
  dI.getItem = function (a) {
    var b = null;
    L(this, 'access_template_storage');
    var c = this.h.h;
    if (!c) throw Error('invalid program state');
    var d = c.fc();
    eI[d] && (b = eI[d].hasOwnProperty('gtm.' + a) ? eI[d]['gtm.' + a] : null);
    return b;
  };
  dI.setItem = function (a, b) {
    L(this, 'access_template_storage');
    var c = this.h.h;
    if (!c) throw Error('invalid program state');
    var d = c.fc();
    eI[d] = eI[d] || {};
    eI[d]['gtm.' + a] = b;
  };
  dI.removeItem = function (a) {
    L(this, 'access_template_storage');
    var b = this.h.h;
    if (!b) throw Error('invalid program state');
    var c = b.fc();
    if (!eI[c] || !eI[c].hasOwnProperty('gtm.' + a)) return;
    delete eI[c]['gtm.' + a];
  };
  dI.clear = function () {
    L(this, 'access_template_storage');
    var a = this.h.h;
    if (!a) throw Error('invalid program state');
    delete eI[a.fc()];
  };
  function fI(a, b) {
    var c = !1;
    return c;
  }
  fI.D = 'internal.testRegex';
  var gI = function (a) {
    var b;
    return b;
  };
  function hI(a) {
    var b;
    return b;
  }
  hI.D = 'internal.unsiloId';
  function iI(a) {}
  iI.P = 'updateConsentState';
  var jI;
  function kI(a, b, c) {
    jI = jI || new sh();
    jI.add(a, b, c);
  }
  function lI(a, b) {
    var c = (jI = jI || new sh());
    if (c.s.hasOwnProperty(a))
      throw (
        'Attempting to add a private function which already exists: ' + a + '.'
      );
    if (c.h.hasOwnProperty(a))
      throw (
        'Attempting to add a private function with an existing API name: ' +
        a +
        '.'
      );
    c.s[a] = Fa(b) ? Lg(a, b) : Mg(a, b);
  }
  function mI() {
    return function (a) {
      var b;
      var c = jI;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.s.hasOwnProperty(a))) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.fc();
            if (g) {
              0 !== g.indexOf('__cvt_') && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.s.hasOwnProperty(a) ? c.s[a] : void 0;
          b = h;
        } else throw Error(a + ' is not a valid API name.');
      }
      return b;
    };
  }
  var nI = function () {
    var a = function (c) {
        return lI(c.D, c);
      },
      b = function (c) {
        return kI(c.P, c);
      };
    b(LA);
    b(RA);
    b(KB);
    b(NB);
    b(OB);
    b(SB);
    b(UB);
    b(XB);
    b(uH());
    b(ZB);
    b(dF);
    b(eF);
    b(tF);
    b(uF);
    b(vF);
    b(yF);
    b(gH);
    b(hH);
    b(oH);
    b(sH);
    b(yH);
    b(BH);
    b(EH);
    b(FH);
    b(HH);
    b(QH);
    b(SH);
    b(VH);
    b(YH);
    b(bI);
    b(dI);
    b(iI);
    kI('Math', Rg());
    kI('Object', mh);
    kI('TestHelper', uh());
    kI('assertApi', Ng);
    kI('assertThat', Og);
    kI('decodeUri', Sg);
    kI('decodeUriComponent', Tg);
    kI('encodeUri', Ug);
    kI('encodeUriComponent', Vg);
    kI('fail', ah);
    kI('generateRandom', bh);
    kI('getTimestamp', ch);
    kI('getTimestampMillis', ch);
    kI('getType', dh);
    kI('makeInteger', fh);
    kI('makeNumber', gh);
    kI('makeString', hh);
    kI('makeTableMap', ih);
    kI('mock', lh);
    kI('fromBase64', cF, !('atob' in z));
    kI('localStorage', xH, !wH());
    kI('toBase64', gI, !('btoa' in z));
    a(OA);
    a(WA);
    a(hB);
    a(oB);
    a(tB);
    a(zB);
    a(IB);
    a(LB);
    a(PB);
    a(QB);
    a(TB);
    a(VB);
    a(WB);
    a(YB);
    a($B);
    a(aC);
    a(bC);
    a(cC);
    a(dC);
    a(hC);
    a(mC);
    a(nC);
    a(yC);
    a(DC);
    a(IC);
    a(RC);
    a(WC);
    a(iD);
    a(kD);
    a(xD);
    a(Wg);
    a(zD);
    a(aF);
    a(bF);
    a(fF);
    a(gF);
    a(hF);
    a(iF);
    a(jF);
    a(kF);
    a(lF);
    a(mF);
    a(nF);
    a(oF);
    a(qF);
    a(rF);
    a(sF);
    a(wF);
    a(xF);
    a(dH);
    a(iH);
    a(rH);
    a(tH);
    a(vH);
    a(xB);
    a(zH);
    a(AH);
    a(CH);
    a(DH);
    a(GH);
    a(IH);
    a(JH);
    a(LH);
    a(MH);
    a(NH);
    a(PH);
    a(RH);
    a(TH);
    a(UH);
    a(WH);
    a(XH);
    a(ZH);
    a($H);
    a(aI);
    a(cI);
    a(fI);
    a(hI);
    lI('internal.GtagSchema', eH());
    return mI();
  };
  var JA;
  function oI() {
    JA.h.h.M = function (a, b, c) {
      pi.SANDBOXED_JS_SEMAPHORE = pi.SANDBOXED_JS_SEMAPHORE || 0;
      pi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        pi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function pI(a) {
    void 0 !== a &&
      l(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, '');
          Fi[e] = Fi[e] || [];
          Fi[e].push(b);
        }
      });
  }
  var qI = encodeURI,
    X = encodeURIComponent,
    rI = function (a, b, c) {
      Lc(a, b, c);
    },
    sI = function (a, b) {
      if (!a) return !1;
      var c = kk(ok(a), 'host');
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    tI = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { securityGroups: {} };
  (Z.securityGroups.access_template_storage = ['google']),
    (function () {
      (function (a) {
        Z.__access_template_storage = a;
        Z.__access_template_storage.m = 'access_template_storage';
        Z.__access_template_storage.isVendorTemplate = !0;
        Z.__access_template_storage.priorityOverride = 0;
        Z.__access_template_storage.isInfrastructure = !1;
        Z.__access_template_storage.runInSiloedMode = !1;
      })(function () {
        return {
          assert: function () {},
          K: function () {
            return {};
          },
        };
      });
    })();
  (Z.securityGroups.c = ['google']),
    (function () {
      (function (a) {
        Z.__c = a;
        Z.__c.m = 'c';
        Z.__c.isVendorTemplate = !0;
        Z.__c.priorityOverride = 0;
        Z.__c.isInfrastructure = !0;
        Z.__c.runInSiloedMode = !0;
      })(function (a) {
        return a.vtp_value;
      });
    })();
  (Z.securityGroups.e = ['google']),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.m = 'e';
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !0;
        Z.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.securityGroups.v = ['google']),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.m = 'v';
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !0;
        Z.__v.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Sz(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
      });
    })();

  (Z.securityGroups.process_dom_events = ['google']),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        Z.__process_dom_events = b;
        Z.__process_dom_events.m = 'process_dom_events';
        Z.__process_dom_events.isVendorTemplate = !0;
        Z.__process_dom_events.priorityOverride = 0;
        Z.__process_dom_events.isInfrastructure = !1;
        Z.__process_dom_events.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, m, n) {
            if (!e[m]) throw d(h, {}, 'Prohibited event target ' + m + '.');
            if (-1 === e[m].indexOf(n))
              throw d(
                h,
                {},
                'Prohibited listener registration for DOM event ' + n + '.',
              );
          },
          K: a,
        };
      });
    })();
  (Z.securityGroups.detect_youtube_activity_events = ['google']),
    (function () {
      function a(b, c) {
        return { options: { fixMissingApi: !!c.fixMissingApi } };
      }
      (function (b) {
        Z.__detect_youtube_activity_events = b;
        Z.__detect_youtube_activity_events.m = 'detect_youtube_activity_events';
        Z.__detect_youtube_activity_events.isVendorTemplate = !0;
        Z.__detect_youtube_activity_events.priorityOverride = 0;
        Z.__detect_youtube_activity_events.isInfrastructure = !1;
        Z.__detect_youtube_activity_events.runInSiloedMode = !1;
      })(function (b) {
        var c = !!b.vtp_allowFixMissingJavaScriptApi,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.fixMissingApi)
              throw d(e, {}, 'Prohibited option: fixMissingApi.');
          },
          K: a,
        };
      });
    })();

  (Z.securityGroups.detect_history_change_events = ['google']),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_history_change_events = b;
        Z.__detect_history_change_events.m = 'detect_history_change_events';
        Z.__detect_history_change_events.isVendorTemplate = !0;
        Z.__detect_history_change_events.priorityOverride = 0;
        Z.__detect_history_change_events.isInfrastructure = !1;
        Z.__detect_history_change_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, K: a };
      });
    })();

  (Z.securityGroups.detect_link_click_events = ['google']),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_link_click_events = b;
        Z.__detect_link_click_events.m = 'detect_link_click_events';
        Z.__detect_link_click_events.isVendorTemplate = !0;
        Z.__detect_link_click_events.priorityOverride = 0;
        Z.__detect_link_click_events.isInfrastructure = !1;
        Z.__detect_link_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, 'Prohibited option waitForTags.');
          },
          K: a,
        };
      });
    })();
  (Z.securityGroups.read_container_data = ['google']),
    (function () {
      (function (a) {
        Z.__read_container_data = a;
        Z.__read_container_data.m = 'read_container_data';
        Z.__read_container_data.isVendorTemplate = !0;
        Z.__read_container_data.priorityOverride = 0;
        Z.__read_container_data.isInfrastructure = !1;
        Z.__read_container_data.runInSiloedMode = !1;
      })(function () {
        return {
          assert: function () {},
          K: function () {
            return {};
          },
        };
      });
    })();

  (Z.securityGroups.listen_data_layer = ['google']),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        Z.__listen_data_layer = b;
        Z.__listen_data_layer.m = 'listen_data_layer';
        Z.__listen_data_layer.isVendorTemplate = !0;
        Z.__listen_data_layer.priorityOverride = 0;
        Z.__listen_data_layer.isInfrastructure = !1;
        Z.__listen_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!k(g))
              throw e(f, { eventName: g }, 'Event name must be a string.');
            if (!('any' === c || ('specific' === c && 0 <= d.indexOf(g))))
              throw e(
                f,
                { eventName: g },
                'Prohibited listen on data layer event.',
              );
          },
          K: a,
        };
      });
    })();

  (Z.securityGroups.get_url = ['google']),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_url = b;
        Z.__get_url.m = 'get_url';
        Z.__get_url.isVendorTemplate = !0;
        Z.__get_url.priorityOverride = 0;
        Z.__get_url.isInfrastructure = !1;
        Z.__get_url.runInSiloedMode = !1;
      })(function (b) {
        var c = 'any' === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push('protocol'),
          b.vtp_host && c.push('host'),
          b.vtp_port && c.push('port'),
          b.vtp_path && c.push('path'),
          b.vtp_extension && c.push('extension'),
          b.vtp_query && c.push('query'),
          b.vtp_fragment && c.push('fragment'));
        var d =
            c && 'any' !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!k(g)) throw e(f, {}, 'URL component must be a string.');
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, 'Prohibited URL component: ' + g);
              if ('query' === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    'Prohibited from getting entire URL query when query keys are specified.',
                  );
                if (!k(h)) throw e(f, {}, 'Query key must be a string.');
                if (0 > d.indexOf(h))
                  throw e(f, {}, 'Prohibited query key: ' + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                'Prohibited from getting entire URL when components are specified.',
              );
          },
          K: a,
        };
      });
    })();

  (Z.securityGroups.gct = ['google']),
    (function () {
      function a(b) {
        for (var c = [], d = 0; d < b.length; d++)
          try {
            c.push(new RegExp(b[d]));
          } catch (e) {}
        return c;
      }
      (function (b) {
        Z.__gct = b;
        Z.__gct.m = 'gct';
        Z.__gct.isVendorTemplate = !0;
        Z.__gct.priorityOverride = 0;
        Z.__gct.isInfrastructure = !1;
        Z.__gct.runInSiloedMode = !0;
      })(function (b) {
        var c = {},
          d = b.vtp_sessionDuration;
        0 < d && (c[P.g.jd] = d);
        c[P.g.Rd] = b.vtp_eventSettings;
        c[P.g.ug] = b.vtp_dynamicEventSettings;
        c[P.g.Qb] = 1 === b.vtp_googleSignals;
        c[P.g.Hg] = b.vtp_foreignTld;
        c[P.g.Eg] = 1 === b.vtp_restrictDomain;
        c[P.g.xf] = b.vtp_internalTrafficResults;
        var e = P.g.Da,
          f = b.vtp_linker;
        f && f[P.g.X] && (f[P.g.X] = a(f[P.g.X]));
        c[e] = f;
        var g = P.g.yf,
          h = b.vtp_referralExclusionDefinition;
        h &&
          h.include_conditions &&
          (h.include_conditions = a(h.include_conditions));
        c[g] = h;
        var m = Qk(b.vtp_trackingId);
        gm(m, c);
        $G(m, b.vtp_gtmEventId);
        H(b.vtp_gtmOnSuccess);
      });
    })();

  (Z.securityGroups.get = ['google']),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.m = 'get';
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
        Z.__get.isInfrastructure = !1;
        Z.__get.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = cx(String(b.streamId), d, c);
        fx(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();
  (Z.securityGroups.detect_scroll_events = ['google']),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_scroll_events = b;
        Z.__detect_scroll_events.m = 'detect_scroll_events';
        Z.__detect_scroll_events.isVendorTemplate = !0;
        Z.__detect_scroll_events.priorityOverride = 0;
        Z.__detect_scroll_events.isInfrastructure = !1;
        Z.__detect_scroll_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, K: a };
      });
    })();

  var PJ = {};
  PJ.dataLayer = Qi;
  PJ.callback = function (a) {
    Ei.hasOwnProperty(a) && Fa(Ei[a]) && Ei[a]();
    delete Ei[a];
  };
  PJ.bootstrap = 0;
  PJ._spx = !1;
  function QJ() {
    pi[Kk()] = pi[Kk()] || PJ;
    Tk();
    Xk() ||
      l(Yk(), function (d, e) {
        Bv(d, e.transportUrl, e.context);
        M(92);
      });
    Wa(Fi, Z.securityGroups);
    var a = Mk(Nk()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || M(142);
    sf = Jf;
  }
  (function (a) {
    function b() {
      m = C.documentElement.getAttribute('data-tag-assistant-present');
      Gy(m) && (h = g.Uk);
    }
    if (!z['__TAGGY_INSTALLED']) {
      var c = !1;
      if (C.referrer) {
        var d = ok(C.referrer);
        c = 'cct.google' === jk(d, 'host');
      }
      if (!c) {
        var e = Gn('googTaggyReferrer');
        c = e.length && e[0].length;
      }
      c &&
        ((z['__TAGGY_INSTALLED'] = !0),
        Ic('https://cct.google/taggy/agent.js'));
    }
    if (zi) a();
    else {
      var f = function (u) {
          var v = 'GTM',
            w = 'GTM';
          vi ? ((v = 'OGT'), (w = 'GTAG')) : zi && (w = v = 'OPT');
          var x = z['google.tagmanager.debugui2.queue'];
          x ||
            ((x = []),
            (z['google.tagmanager.debugui2.queue'] = x),
            Ic(
              'https://' +
                oi.Bd +
                '/debug/bootstrap?id=' +
                Sf.ctid +
                '&src=' +
                w +
                '&cond=' +
                u +
                '&gtm=' +
                sn(),
            ));
          var y = {
            messageType: 'CONTAINER_STARTING',
            data: {
              scriptSource: Cc,
              containerProduct: v,
              debug: !1,
              id: Sf.ctid,
              targetRef: { ctid: Sf.ctid, isDestination: Ck.se },
              aliases: Ek(),
              destinations: Hk(),
            },
          };
          y.data.resume = function () {
            a();
          };
          oi.vk && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { Nn: 1, Vk: 2, nl: 3, wk: 4, Uk: 5 },
        h = void 0,
        m = void 0,
        n = kk(z.location, 'query', !1, void 0, 'gtm_debug');
      Gy(n) && (h = g.Vk);
      if (!h && C.referrer) {
        var p = ok(C.referrer);
        'tagassistant.google.com' === jk(p, 'host') && (h = g.nl);
      }
      if (!h) {
        var q = Gn('__TAG_ASSISTANT');
        q.length && q[0].length && (h = g.wk);
      }
      h || b();
      if (!h && Hy(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            h && Cc ? f(h) : a();
          },
          t = !1;
        Mc(
          C,
          'TADebugSignal',
          function () {
            r();
          },
          !1,
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else h && Cc ? f(h) : a();
    }
  })(function () {
    try {
      Rk();
      if (R(16)) {
      }
      mj().s();
      Xm();
      (R(77) || R(78) || R(79)) && Zj();
      var a = Lk();
      if (zk().canonical[a]) {
        var b = pi.zones;
        b && b.unregisterChild(Gk());
        kv().removeExternalRestrictions(Lk());
      } else {
        Es();
        Ii.h = '';
        Ii.C = '';
        Ii.W = 'ad_storage|analytics_storage|ad_user_data|ad_personalization';
        Ii.F = 'ad_storage|analytics_storage|ad_user_data|ad_personalization';
        Ii.M = 'ad_storage|analytics_storage|ad_user_data';
        yv();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          hf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) lf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          kf.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ('if' !== u && 'unless' !== u) || rf(r[u]);
          }
          jf.push(r);
        }
        nf = Z;
        of = wA;
        Lf = new Vf();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var x = data.runtime || [],
            y = data.runtime_lines;
          JA = new Fe();
          oI();
          gf = IA();
          var B = JA,
            A = nI(),
            D = new bd('require', A);
          D.Ib();
          B.h.h.set('require', D);
          for (var G = [], E = 0; E < x.length; E++) {
            var F = x[E];
            if (!Ha(F) || 3 > F.length) {
              if (0 === F.length) continue;
              break a;
            }
            y && y[E] && y[E].length && Cf(F, y[E]);
            try {
              JA.execute(F), R(26) && gl && 50 === F[0] && G.push(F[1]);
            } catch (lb) {}
          }
          R(26) && (tf = G);
        }
        if (void 0 !== v)
          for (var N = ['sandboxedScripts'], O = 0; O < v.length; O++) {
            var T = v[O].replace(/^_*/, '');
            Fi[T] = N;
          }
        pI(w);
        QJ();
        if (!zi)
          for (
            var Y = fj() ? (R(91) ? Ki(Ii.M) : Ki(Ii.F)) : Ki(Ii.W), S = 0;
            S < Oj.length;
            S++
          ) {
            var U = Oj[S],
              ja = U,
              ia = Y[U] ? 'granted' : 'denied';
            sj().implicit(ja, ia);
          }
        Fy();
        Cv = !1;
        Dv = 0;
        if (
          ('interactive' == C.readyState && !C.createEventObject) ||
          'complete' == C.readyState
        )
          Fv();
        else {
          Mc(C, 'DOMContentLoaded', Fv);
          Mc(C, 'readystatechange', Fv);
          if (C.createEventObject && C.documentElement.doScroll) {
            var ca = !0;
            try {
              ca = !z.frameElement;
            } catch (lb) {}
            ca && Gv();
          }
          Mc(z, 'load', Fv);
        }
        Ux = !1;
        'complete' === C.readyState ? Wx() : Mc(z, 'load', Wx);
        gl && (bl(ul), z.setInterval(tl, 864e5));
        bl(yA);
        bl(gw);
        bl(Vt);
        bl($l);
        bl(rw);
        bl(zl);
        bl(ss);
        bl(xl);
        R(26) && (bl(lw), bl(mw), bl(nw));
        gl && R(85) && (bl(zA), bl(BA));
        FA();
        R(96) && bl(DA);
        bz();
        aj(1);
        qx();
        Di = Ta();
        PJ.bootstrap = Di;
        if (R(16)) {
        }
      }
    } catch (lb) {
      if ((aj(4), gl)) {
        var Pa = ol(!0, !0);
        Lc(Pa);
      }
    }
  });
})();
