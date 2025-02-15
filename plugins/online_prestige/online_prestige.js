import Online from './component'


function startPlugin() {
    window.online_prestige = true

    Lampa.Manifest.plugins = {
        type: 'video',
        version: '1.0.0',
        name: 'Онлайн - Prestige',
        description: 'Плагин для просмотра онлайн сериалов и фильмов',
        component: 'online_prestige',
        onContextMenu: (object)=>{
            return {
                name: Lampa.Lang.translate('online_watch'),
                description: ''
            }
        },
        onContextLauch: (object)=>{
            resetTemplates()

            Lampa.Component.add('online_prestige', Online)

            Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('title_online'),
                component: 'online_prestige',
                search: object.title,
                search_one: object.title,
                search_two: object.original_title,
                movie: object,
                page: 1
            })
        }
    }

    Lampa.Lang.add({
        online_watch: {
            ru: 'Смотреть онлайн',
            en: 'Watch online',
            ua: 'Дивитися онлайн',
            zh: '在线观看',
        },
        online_video: {
            ru: 'Видео',
            en: 'Video',
            ua: 'Відео',
            zh: '视频'
        },
        online_nolink: {
            ru: 'Не удалось извлечь ссылку',
            uk: 'Неможливо отримати посилання',
            en: 'Failed to fetch link',
            zh: '获取链接失败'
        },
        online_waitlink: {
            ru: 'Работаем над извлечением ссылки, подождите...',
            uk: 'Працюємо над отриманням посилання, зачекайте...',
            en: 'Working on extracting the link, please wait...',
            zh: '正在提取链接，请稍候...'
        },
        online_balanser: {
            ru: 'Балансер',
            uk: 'Балансер',
            en: 'Balancer',
            zh: '平衡器'
        },
        helper_online_file: {
            ru: 'Удерживайте клавишу "ОК" для вызова контекстного меню',
            uk: 'Утримуйте клавішу "ОК" для виклику контекстного меню',
            en: 'Hold the "OK" key to bring up the context menu',
            zh: '按住“确定”键调出上下文菜单'
        },
        online_query_start: {
            ru: 'По запросу',
            uk: 'На запит',
            en: 'On request',
            zh: '根据要求'
        },
        online_query_end: {
            ru: 'нет результатов',
            uk: 'немає результатів',
            en: 'no results',
            zh: '没有结果'
        },
        title_online: {
            ru: 'Онлайн',
            uk: 'Онлайн',
            en: 'Online',
            zh: '在线的'
        },
        title_proxy: {
            ru: 'Прокси',
            uk: 'Проксі',
            en: 'Proxy',
            zh: '代理人'
        },
        online_proxy_title: {
            ru: 'Основной прокси',
            uk: 'Основний проксі',
            en: 'Main proxy',
            zh: '主要代理'
        },
        online_proxy_descr:{
            ru: 'Будет использоваться для всех балансеров',
            uk: 'Використовуватиметься для всіх балансерів',
            en: 'Will be used for all balancers',
            zh: '将用于所有平衡器'
        },
        online_proxy_placeholder: {
            ru: 'Например: http://proxy.com',
            uk: 'Наприклад: http://proxy.com',
            en: 'For example: http://proxy.com',
            zh: '例如：http://proxy.com'
        },
        filmix_param_add_title: {
            ru: 'Добавить ТОКЕН от Filmix',
            uk: 'Додати ТОКЕН від Filmix',
            en: 'Add TOKEN from Filmix',
            zh: '从 Filmix 添加 TOKEN'
        },
        filmix_param_add_descr: {
            ru: 'Добавьте ТОКЕН для подключения подписки',
            uk: 'Додайте ТОКЕН для підключення передплати',
            en: 'Add a TOKEN to connect a subscription',
            zh: '添加 TOKEN 以连接订阅'
        },
        filmix_param_placeholder: {
            ru: 'Например: nxjekeb57385b..',
            uk: 'Наприклад: nxjekeb57385b..',
            en: 'For example: nxjekeb57385b..',
            zh: '例如：nxjekeb57385b..'
        },
        filmix_param_add_device: {
            ru: 'Добавить устройство на Filmix',
            uk: 'Додати пристрій на Filmix',
            en: 'Add Device to Filmix',
            zh: '将设备添加到 Filmix'
        },
        filmix_modal_text: {
            ru: 'Введите его на странице https://filmix.ac/consoles в вашем авторизованном аккаунте!',
            uk: 'Введіть його на сторінці https://filmix.ac/consoles у вашому авторизованому обліковому записі!',
            en: 'Enter it at https://filmix.ac/consoles in your authorized account!',
            zh: '在您的授权帐户中的 https://filmix.ac/consoles 中输入！'
        },
        filmix_modal_wait: {
            ru: 'Ожидаем код',
            uk: 'Очікуємо код',
            en: 'Waiting for the code',
            zh: '我们正在等待代码'
        },
        filmix_copy_secuses: {
            ru: 'Код скопирован в буфер обмена',
            uk: 'Код скопійовано в буфер обміну',
            en: 'Code copied to clipboard',
            zh: '代码复制到剪贴板'
        },
        filmix_copy_fail: {
            ru: 'Ошибка при копировании',
            uk: 'Помилка при копіюванні',
            en: 'Copy error',
            zh: '复制错误'
        },
        filmix_nodevice: {
            ru: 'Устройство не авторизовано',
            uk: 'Пристрій не авторизований',
            en: 'Device not authorized',
            zh: '设备未授权'
        },
        title_status: {
            ru: 'Статус',
            uk: 'Статус',
            en: 'Status',
            zh: '地位'
        },
        online_voice_subscribe: {
            ru: 'Подписаться на перевод',
            uk: 'Підписатися на переклад',
            en: 'Subscribe to translation',
            zh: '订阅翻译'
        },
        online_voice_success: {
            ru: 'Вы успешно подписались',
            uk: 'Ви успішно підписалися',
            en: 'You have successfully subscribed',
            zh: '您已成功订阅'
        },
        online_voice_error: {
            ru: 'Возникла ошибка',
            uk: 'Виникла помилка',
            en: 'An error has occurred',
            zh: '发生了错误'
        },
        online_clear_all_marks: {
            ru: 'Очистить все метки',
            uk: 'Очистити всі мітки',
            en: 'Clear all labels',
            zh: '清除所有标签'
        },
        online_clear_all_timecodes: {
            ru: 'Очистить все тайм-коды',
            uk: 'Очистити всі тайм-коди',
            en: 'Clear all timecodes',
            zh: '清除所有时间代码'
        },
        online_change_balanser: {
            ru: 'Изменить балансер',
            uk: 'Змінити балансер',
            en: 'Change balancer',
            zh: '更改平衡器'
        },
        online_balanser_dont_work: {
            ru: 'Балансер ({balanser}) не отвечает на запрос.',
            uk: 'Балансер ({balanser}) не відповідає на запит.',
            en: 'Balancer ({balanser}) does not respond to the request.',
            zh: '平衡器（{balanser}）未响应请求。'
        },
        online_balanser_timeout: {
            ru: 'Балансер будет переключен автоматически через <span class="timeout">10</span> секунд.',
            uk: 'Балансер буде переключено автоматично через <span class="timeout">10</span> секунд.',
            en: 'Balancer will be switched automatically in <span class="timeout">10</span> seconds.',
            zh: '平衡器将在<span class="timeout">10</span>秒内自动切换。'
        }
    })

    Lampa.Template.add('online_prestige_css', `
        <style>
        @@include('../plugins/online_prestige/css/style.css')
        </style>
    `)

    $('body').append(Lampa.Template.get('online_prestige_css',{},true))

    function resetTemplates(){
        Lampa.Template.add('online_prestige_full',`<div class="online-prestige online-prestige--full selector">
            <div class="online-prestige__img">
                <img alt="">
                <div class="online-prestige__loader"></div>
            </div>
            <div class="online-prestige__body">
                <div class="online-prestige__head">
                    <div class="online-prestige__title">{title}</div>
                    <div class="online-prestige__time">{time}</div>
                </div>

                <div class="online-prestige__timeline"></div>

                <div class="online-prestige__footer">
                    <div class="online-prestige__info">{info}</div>
                    <div class="online-prestige__quality">{quality}</div>
                </div>
            </div>
        </div>`)

        Lampa.Template.add('online_does_not_answer',`<div class="online-empty">
            <div class="online-empty__title">
                #{online_balanser_dont_work}
            </div>
            <div class="online-empty__time">
                #{online_balanser_timeout}
            </div>
            <div class="online-empty__buttons">
                <div class="online-empty__button selector cancel">#{cancel}</div>
                <div class="online-empty__button selector change">#{online_change_balanser}</div>
            </div>
            <div class="online-empty__templates">
                <div class="online-empty-template">
                    <div class="online-empty-template__ico"></div>
                    <div class="online-empty-template__body"></div>
                </div>
                <div class="online-empty-template">
                    <div class="online-empty-template__ico"></div>
                    <div class="online-empty-template__body"></div>
                </div>
                <div class="online-empty-template">
                    <div class="online-empty-template__ico"></div>
                    <div class="online-empty-template__body"></div>
                </div>
            </div>
        </div>`)

        Lampa.Template.add('online_prestige_rate',`<div class="online-prestige-rate">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.39409 0.192139L10.99 5.30994L16.7882 6.20387L12.5475 10.4277L13.5819 15.9311L8.39409 13.2425L3.20626 15.9311L4.24065 10.4277L0 6.20387L5.79819 5.30994L8.39409 0.192139Z" fill="#fff"></path>
            </svg>
            <span>{rate}</span>
        </div>`)

        Lampa.Template.add('online_prestige_folder',`<div class="online-prestige online-prestige--folder selector">
            <div class="online-prestige__folder">
                <svg viewBox="0 0 128 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="20" width="128" height="92" rx="13" fill="white"></rect>
                    <path d="M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z" fill="white" fill-opacity="0.23"></path>
                    <rect x="11" y="8" width="106" height="76" rx="13" fill="white" fill-opacity="0.51"></rect>
                </svg>
            </div>
            <div class="online-prestige__body">
                <div class="online-prestige__head">
                    <div class="online-prestige__title">{title}</div>
                    <div class="online-prestige__time">{time}</div>
                </div>

                <div class="online-prestige__footer">
                    <div class="online-prestige__info">{info}</div>
                </div>
            </div>
        </div>`)
    }


    const button = `<div class="full-start__button selector view--online" data-subtitle="v1.54">
        <svg width="216" height="238" viewBox="0 0 216 238" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37 0C57.4345 8.93222e-07 74 16.5655 74 37L74 199C74 219.435 57.4345 236 37 236C16.5655 236 -8.93222e-07 219.435 0 199L7.08125e-06 37C7.97447e-06 16.5655 16.5655 -8.93222e-07 37 0Z" fill="url(#paint0_linear_1271_70)" fill-opacity="0.44"/>
            <path d="M5.6229 19.2558C15.908 1.44141 38.6872 -4.66224 56.5016 5.6229L196.744 86.592C214.559 96.8771 220.662 119.656 210.377 137.471C200.092 155.285 177.313 161.389 159.498 151.104L19.2558 70.1345C1.44143 59.8494 -4.66225 37.0702 5.6229 19.2558Z" fill="url(#paint1_linear_1271_70)" fill-opacity="0.72"/>
            <path d="M5.6229 218.44C15.908 236.254 38.6872 242.358 56.5016 232.072L196.744 151.103C214.559 140.818 220.662 118.039 210.377 100.225C200.092 82.4102 177.313 76.3066 159.498 86.5917L19.2558 167.561C1.44143 177.846 -4.66225 200.625 5.6229 218.44Z" fill="url(#paint2_linear_1271_70)"/>
            <defs>
                <linearGradient id="paint0_linear_1271_70" x1="25.0965" y1="128.145" x2="184.346" y2="128.015" gradientUnits="userSpaceOnUse">
                    <stop stop-color="currentColor"/>
                    <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1271_70" x1="187.124" y1="118.663" x2="41.2549" y2="118.833" gradientUnits="userSpaceOnUse">
                    <stop stop-color="currentColor"/>
                    <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1271_70" x1="44.5" y1="198.5" x2="181.5" y2="116.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="currentColor"/>
                    <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
                </linearGradient>
            </defs>
        </svg>

        <span>#{title_online}</span>
    </div>`

    // нужна заглушка, а то при страте лампы говорит пусто
    Lampa.Component.add('online_prestige', Online)

    //то же самое
    resetTemplates()

    Lampa.Listener.follow('full',(e)=>{
        if(e.type == 'complite'){
            let btn = $(Lampa.Lang.translate(button))

            btn.on('hover:enter',()=>{
                resetTemplates()

                Lampa.Component.add('online_prestige', Online)

                Lampa.Activity.push({
                    url: '',
                    title: Lampa.Lang.translate('title_online'),
                    component: 'online_prestige',
                    search: e.data.movie.title,
                    search_one: e.data.movie.title,
                    search_two: e.data.movie.original_title,
                    movie: e.data.movie,
                    page: 1
                })
            })

            e.object.activity.render().find('.view--torrent').after(btn)
        }
    })


    ///////ONLINE/////////

    Lampa.Params.select('online_proxy_all','','')
    Lampa.Params.select('online_proxy_videocdn','','')
    Lampa.Params.select('online_proxy_rezka','','')
    Lampa.Params.select('online_proxy_kinobase','','')
    Lampa.Params.select('online_proxy_collaps','','')

    Lampa.Template.add('settings_proxy',`<div>
        <div class="settings-param selector" data-type="input" data-name="online_proxy_all" placeholder="#{online_proxy_placeholder}">
            <div class="settings-param__name">#{online_proxy_title}</div>
            <div class="settings-param__value"></div>
            <div class="settings-param__descr">#{online_proxy_descr}</div>
        </div>

        <div class="settings-param selector" data-type="input" data-name="online_proxy_videocdn" placeholder="#{online_proxy_placeholder}">
            <div class="settings-param__name">Videocdn</div>
            <div class="settings-param__value"></div>
        </div>

        <div class="settings-param selector" data-type="input" data-name="online_proxy_rezka" placeholder="#{online_proxy_placeholder}">
            <div class="settings-param__name">Rezka</div>
            <div class="settings-param__value"></div>
        </div>

        <div class="settings-param selector" data-type="input" data-name="online_proxy_kinobase" placeholder="#{online_proxy_placeholder}">
            <div class="settings-param__name">Kinobase</div>
            <div class="settings-param__value"></div>
        </div>

        <div class="settings-param selector" data-type="input" data-name="online_proxy_collaps" placeholder="#{online_proxy_placeholder}">
            <div class="settings-param__name">Collaps</div>
            <div class="settings-param__value"></div>
        </div>
    </div>`)

    function addSettingsProxy(){
        if(Lampa.Settings.main && !Lampa.Settings.main().render().find('[data-component="proxy"]').length){
            let field = $(Lampa.Lang.translate(`<div class="settings-folder selector" data-component="proxy">
                <div class="settings-folder__icon">
                    <svg height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="26.5" width="39" height="18" rx="1.5" stroke="white" stroke-width="3"/>
                    <circle cx="9.5" cy="35.5" r="3.5" fill="white"/>
                    <circle cx="26.5" cy="35.5" r="2.5" fill="white"/>
                    <circle cx="32.5" cy="35.5" r="2.5" fill="white"/>
                    <circle cx="21.5" cy="5.5" r="5.5" fill="white"/>
                    <rect x="31" y="4" width="11" height="3" rx="1.5" fill="white"/>
                    <rect y="4" width="11" height="3" rx="1.5" fill="white"/>
                    <rect x="20" y="14" width="3" height="7" rx="1.5" fill="white"/>
                    </svg>
                </div>
                <div class="settings-folder__name">#{title_proxy}</div>
            </div>`))
            
            Lampa.Settings.main().render().find('[data-component="more"]').after(field)
            Lampa.Settings.main().update()
        }
    }

    if(window.appready) addSettingsProxy()
    else{
        Lampa.Listener.follow('app', function (e) {
            if(e.type =='ready') addSettingsProxy()
        })
    }

    ///////FILMIX/////////

    let network  = new Lampa.Reguest()
    let api_url  = 'http://filmixapp.cyou/api/v2/'
    let user_dev = '?user_dev_apk=1.1.3&user_dev_id=' + Lampa.Utils.uid(16) + '&user_dev_name=Xiaomi&user_dev_os=11&user_dev_vendor=Xiaomi&user_dev_token='
    let ping_auth

    Lampa.Params.select('filmix_token','','')

    Lampa.Template.add('settings_filmix',`<div>
        <div class="settings-param selector" data-name="filmix_token" data-type="input" placeholder="#{filmix_param_placeholder}">
            <div class="settings-param__name">#{filmix_param_add_title}</div>
            <div class="settings-param__value"></div>
            <div class="settings-param__descr">#{filmix_param_add_descr}</div>
        </div>
        <div class="settings-param selector" data-name="filmix_add" data-static="true">
            <div class="settings-param__name">#{filmix_param_add_device}</div>
        </div>
    </div>`)


    Lampa.Storage.listener.follow('change',(e)=>{
        if(e.name == 'filmix_token'){
            if(e.value) checkPro(e.value)
            else{
                Lampa.Storage.set("filmix_status", {})

                showStatus()
            }
        }
    })

    function addSettingsFilmix(){
        if(Lampa.Settings.main && !Lampa.Settings.main().render().find('[data-component="filmix"]').length){
            let field = $(`<div class="settings-folder selector" data-component="filmix">
                <div class="settings-folder__icon">
                    <svg height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20.3735V45H26.8281V34.1262H36.724V26.9806H26.8281V24.3916C26.8281 21.5955 28.9062 19.835 31.1823 19.835H39V13H26.8281C23.6615 13 20 15.4854 20 20.3735Z" fill="white"/>
                    <rect x="2" y="2" width="54" height="53" rx="5" stroke="white" stroke-width="4"/>
                    </svg>
                </div>
                <div class="settings-folder__name">Filmix</div>
            </div>`)
            
            Lampa.Settings.main().render().find('[data-component="more"]').after(field)
            Lampa.Settings.main().update()
        }
    }

    if(window.appready) addSettingsFilmix()
    else{
        Lampa.Listener.follow('app', function (e) {
            if(e.type =='ready') addSettingsFilmix()
        })
    }


    Lampa.Settings.listener.follow('open', function (e) {
        if(e.name == 'filmix'){
            e.body.find('[data-name="filmix_add"]').unbind('hover:enter').on('hover:enter',()=>{
                let user_code  = ''
                let user_token = ''

                let modal = $('<div><div class="broadcast__text">'+Lampa.Lang.translate('filmix_modal_text')+'</div><div class="broadcast__device selector" style="text-align: center">'+Lampa.Lang.translate('filmix_modal_wait')+'...</div><br><div class="broadcast__scan"><div></div></div></div></div>')

                Lampa.Modal.open({
                    title: '',
                    html: modal,
                    onBack: ()=> {
                        Lampa.Modal.close()

                        Lampa.Controller.toggle('settings_component')

                        clearInterval(ping_auth)
                    },
                    onSelect: ()=> {
                        Lampa.Utils.copyTextToClipboard(user_code, ()=> {
                            Lampa.Noty.show(Lampa.Lang.translate('filmix_copy_secuses'))
                        }, ()=> {
                            Lampa.Noty.show(Lampa.Lang.translate('filmix_copy_fail'))
                        })
                    }
                })

                ping_auth = setInterval(()=> {
                    checkPro(user_token, ()=>{
                        Lampa.Modal.close()

                        clearInterval(ping_auth)

                        Lampa.Storage.set("filmix_token", user_token)

                        e.body.find('[data-name="filmix_token"] .settings-param__value').text(user_token)

                        Lampa.Controller.toggle('settings_component')
                    })
                }, 10000)

                network.clear()
                network.timeout(10000)

                network.quiet(api_url + 'token_request' + user_dev, (found)=> {
                    if (found.status == 'ok') {
                        user_token = found.code
                        user_code  = found.user_code

                        modal.find('.selector').text(user_code)
                    }
                    else{
                        Lampa.Noty.show(found)
                    }
                },(a, c)=>{
                    Lampa.Noty.show(network.errorDecode(a, c))
                })
            })

            showStatus()
        }
    })

    function showStatus(){
        let status = Lampa.Storage.get("filmix_status", '{}')
        let info   = Lampa.Lang.translate('filmix_nodevice')

        if (status.login){
            if (status.is_pro)           info = status.login + ' - PRO '+Lampa.Lang.translate('filter_rating_to')+' - ' + status.pro_date
            else if (status.is_pro_plus) info = status.login + ' - PRO_PLUS '+Lampa.Lang.translate('filter_rating_to')+' - ' + status.pro_date
            else                         info = status.login + ' - NO PRO'
        }

        let field  = $(Lampa.Lang.translate(`
            <div class="settings-param" data-name="filmix_status" data-static="true">
                <div class="settings-param__name">#{title_status}</div>
                <div class="settings-param__value">${info}</div>
            </div>`))

        $('.settings [data-name="filmix_status"]').remove()
        $('.settings [data-name="filmix_add"]').after(field)
    }

    function checkPro(token, call) {
        network.clear()
        network.timeout(8000)
        network.silent(api_url + 'user_profile' + user_dev + token, function (json) {
            if (json) {
                if(json.user_data) {
                    Lampa.Storage.set("filmix_status", json.user_data)

                    if(call) call()
                } 
                else {
                    Lampa.Storage.set("filmix_status", {})
                }

                showStatus()
            }
        }, function (a, c) {
            Lampa.Noty.show(network.errorDecode(a, c))
        })
    }
}

if(!window.online_prestige && Lampa.Manifest.app_digital >= 155) startPlugin()