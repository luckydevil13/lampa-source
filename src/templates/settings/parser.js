let html = `<div>
    <div class="settings-param selector" data-type="toggle" data-name="parser_use">
        <div class="settings-param__name">#{settings_parser_use}</div>
        <div class="settings-param__value"></div>
        <div class="settings-param__descr">#{settings_parser_use_descr}</div>
    </div>

    <div class="settings-param selector" data-type="toggle" data-name="parser_torrent_type" data-children="type" data-children-value="jackett">
        <div class="settings-param__name">#{settings_parser_type}</div>
        <div class="settings-param__value"></div>
    </div>
    
    <div class="settings-param-title" data-parent="type"><span>Jackett</span></div>

    <div class="settings-param selector" data-type="input" data-name="jackett_url" placeholder="#{settings_parser_jackett_placeholder}" data-parent="type">
        <div class="settings-param__name">#{settings_parser_jackett_link}</div>
        <div class="settings-param__value"></div>
        <div class="settings-param__descr">#{settings_parser_jackett_link_descr}</div>
    </div>

    <div class="settings-param selector" data-type="input" data-name="jackett_key" data-string="true" placeholder="#{settings_parser_jackett_key_placeholder}" data-parent="type">
        <div class="settings-param__name">#{settings_parser_jackett_key}</div>
        <div class="settings-param__value"></div>
        <div class="settings-param__descr">#{settings_parser_jackett_key_descr}</div>
    </div>

    <div class="settings-param selector" data-type="toggle" data-name="jackett_interview" data-parent="type">
        <div class="settings-param__name">#{settings_parser_jackett_interview}</div>
        <div class="settings-param__value"></div>
    </div>

    <div class="settings-param-title"><span>#{more}</span></div>

    <div class="settings-param selector" data-type="select" data-name="parse_lang">
        <div class="settings-param__name">#{settings_parser_search}</div>
        <div class="settings-param__value"></div>
        <div class="settings-param__descr">#{settings_parser_search_descr}</div>
    </div>
    <div class="settings-param selector" data-type="toggle" data-name="parse_timeout">
        <div class="settings-param__name">#{settings_parser_timeout_title}</div>
        <div class="settings-param__value"></div>
        <div class="settings-param__descr">#{settings_parser_timeout_descr}</div>
    </div>
    <div class="settings-param selector" data-type="toggle" data-name="parse_in_search">
        <div class="settings-param__name">#{settings_parser_in_search}</div>
        <div class="settings-param__value"></div>
        <div class="settings-param__descr">#{settings_parser_in_search_descr}</div>
    </div>
</div>`

export default html
