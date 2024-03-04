'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">student_mis_postgre documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressModule.html" data-type="entity-link" >AddressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' : 'data-bs-target="#xs-controllers-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' :
                                            'id="xs-controllers-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' }>
                                            <li class="link">
                                                <a href="controllers/AddressController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' : 'data-bs-target="#xs-injectables-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' :
                                        'id="xs-injectables-links-module-AddressModule-d0efddda72ccf72bf922826692b15747bc8374c827f95a832524e61cb73f12e621385bcb50718533923fcdc7d46c4ec3ea1981aef5610ca63ecca87b0ca14206"' }>
                                        <li class="link">
                                            <a href="injectables/AddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' : 'data-bs-target="#xs-controllers-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' :
                                            'id="xs-controllers-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' :
                                        'id="xs-injectables-links-module-AppModule-a6b9ad81bdc1daff2c1d5e0b7c3a9b0c7405ee2f84c26c3bdb0739ca4e9e4252ec01212772f7da3de60d4c31f7daf750f35624cfd1306d3b6a991271595b69cb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AttendanceModule.html" data-type="entity-link" >AttendanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' : 'data-bs-target="#xs-controllers-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' :
                                            'id="xs-controllers-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' }>
                                            <li class="link">
                                                <a href="controllers/AttendanceLogController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceLogController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' : 'data-bs-target="#xs-injectables-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' :
                                        'id="xs-injectables-links-module-AttendanceModule-f5cfce649a2f7edc324852348ffc2f7eb4392fa94f511026f921ffaaa610d786164f493dc3e8fb132c3ead7e671f75f258c72ecd45f5fa78e4821d85e0b3377c"' }>
                                        <li class="link">
                                            <a href="injectables/AttendanceLogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceLogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' : 'data-bs-target="#xs-controllers-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' : 'data-bs-target="#xs-injectables-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-9beb9156e5cc40a58a7509b03c66ca844c4fab0e0e8c464c809273a67e22b6f6f39a0dc7d1dfaa9505235f63e4e53af9636acb48e61e83a511cfb832c99c5786"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStorage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStorage</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClassModule.html" data-type="entity-link" >ClassModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' : 'data-bs-target="#xs-controllers-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' :
                                            'id="xs-controllers-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' }>
                                            <li class="link">
                                                <a href="controllers/ClassController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' : 'data-bs-target="#xs-injectables-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' :
                                        'id="xs-injectables-links-module-ClassModule-563c700d03a76fd068a44200a31fe66090137855f10b8ff6834c3e387a8c282fc27ac0aac24e0cc87de040c6455e2073736314b3a76c4b87bf88dce9ab6a52f9"' }>
                                        <li class="link">
                                            <a href="injectables/ClassService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' : 'data-bs-target="#xs-controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' :
                                            'id="xs-controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                            <li class="link">
                                                <a href="controllers/CoreController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' :
                                        'id="xs-injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                        <li class="link">
                                            <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponseTransformInterceptor</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FinalAttendanceModule.html" data-type="entity-link" >FinalAttendanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' : 'data-bs-target="#xs-controllers-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' :
                                            'id="xs-controllers-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' }>
                                            <li class="link">
                                                <a href="controllers/FinalAttendanceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FinalAttendanceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' : 'data-bs-target="#xs-injectables-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' :
                                        'id="xs-injectables-links-module-FinalAttendanceModule-65fc64f0e1f64e438bc838acceb0543d41f6a83b2b9276df3ad03e6443c9e040cad01d5a7f55947750e4eb1477560f27d024995e79f9e1f870bcc0b459405189"' }>
                                        <li class="link">
                                            <a href="injectables/FinalAttendanceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FinalAttendanceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' :
                                            'id="xs-controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarksModule.html" data-type="entity-link" >MarksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' : 'data-bs-target="#xs-controllers-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' :
                                            'id="xs-controllers-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' }>
                                            <li class="link">
                                                <a href="controllers/MarksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' : 'data-bs-target="#xs-injectables-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' :
                                        'id="xs-injectables-links-module-MarksModule-f29199240d6394929252981cfea9b3afdcd50515c3bc78fd69ff744cfc54a3675d34466ad769afd1897f019b83f2f981081e2ebdcfbe7eb0170d7bed3cfaa8ad"' }>
                                        <li class="link">
                                            <a href="injectables/MarksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentModule.html" data-type="entity-link" >StudentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' : 'data-bs-target="#xs-controllers-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' :
                                            'id="xs-controllers-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' }>
                                            <li class="link">
                                                <a href="controllers/StudentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' : 'data-bs-target="#xs-injectables-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' :
                                        'id="xs-injectables-links-module-StudentModule-dba1195f5b39a9d754105507bc5f41d7dc4ace5e3eb3a7f2d16954eabb43c8527b6ea16b8b8d20764c5c2ac9e99d721815d44333c9eb13d2cf3a54e282fede8e"' }>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectModule.html" data-type="entity-link" >SubjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' : 'data-bs-target="#xs-controllers-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' :
                                            'id="xs-controllers-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' }>
                                            <li class="link">
                                                <a href="controllers/SubjectController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' : 'data-bs-target="#xs-injectables-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' :
                                        'id="xs-injectables-links-module-SubjectModule-008c240c24cc71369adc4511c34b03d1d2724f78770c0e5ecd9ff03ecf0224272c91ea6ae57cada4e77c3e7f6d6e7542be782e543d186660802bda66667afb8a"' }>
                                        <li class="link">
                                            <a href="injectables/SubjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeacherModule.html" data-type="entity-link" >TeacherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' : 'data-bs-target="#xs-controllers-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' :
                                            'id="xs-controllers-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' }>
                                            <li class="link">
                                                <a href="controllers/TeacherController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' : 'data-bs-target="#xs-injectables-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' :
                                        'id="xs-injectables-links-module-TeacherModule-2f469cef45741bd392fe67496fb4497e340a8ede02ccf9f9236d460dc3bd05bbb9cece7163416d5d9bd0593b9b8918a564747c06c1018651b66a9147ff694456"' }>
                                        <li class="link">
                                            <a href="injectables/TeacherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' : 'data-bs-target="#xs-controllers-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' :
                                            'id="xs-controllers-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' : 'data-bs-target="#xs-injectables-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' :
                                        'id="xs-injectables-links-module-UserModule-c9081de55885a1e5c453b27fc4e6ce8bc31e15c52ce2521366299b512496729e3973bd0e7fde970716821adee45317e24f3af012295cbe0768a344e717e160b6"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AddressController.html" data-type="entity-link" >AddressController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AttendanceLogController.html" data-type="entity-link" >AttendanceLogController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthenticationController.html" data-type="entity-link" >AuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ClassController.html" data-type="entity-link" >ClassController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CoreController.html" data-type="entity-link" >CoreController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FinalAttendanceController.html" data-type="entity-link" >FinalAttendanceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MarksController.html" data-type="entity-link" >MarksController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StudentController.html" data-type="entity-link" >StudentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubjectController.html" data-type="entity-link" >SubjectController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TeacherController.html" data-type="entity-link" >TeacherController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Address.html" data-type="entity-link" >Address</a>
                                </li>
                                <li class="link">
                                    <a href="entities/AttendanceLog.html" data-type="entity-link" >AttendanceLog</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Class.html" data-type="entity-link" >Class</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FinalAttendance.html" data-type="entity-link" >FinalAttendance</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Marks.html" data-type="entity-link" >Marks</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Student.html" data-type="entity-link" >Student</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Subject.html" data-type="entity-link" >Subject</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Teacher.html" data-type="entity-link" >Teacher</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BcryptService.html" data-type="entity-link" >BcryptService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAddressDto.html" data-type="entity-link" >CreateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAttendanceLogDto.html" data-type="entity-link" >CreateAttendanceLogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateClassDto.html" data-type="entity-link" >CreateClassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFinalAttendanceDto.html" data-type="entity-link" >CreateFinalAttendanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMarkDto.html" data-type="entity-link" >CreateMarkDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStudentDto.html" data-type="entity-link" >CreateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubjectDto.html" data-type="entity-link" >CreateSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeacherDto.html" data-type="entity-link" >CreateTeacherDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCommand.html" data-type="entity-link" >CreateUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserException.html" data-type="entity-link" >CreateUserException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserExceptionFilter.html" data-type="entity-link" >CreateUserExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserHandler.html" data-type="entity-link" >CreateUserHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserRequest.html" data-type="entity-link" >CreateUserRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/DuplicateUserException.html" data-type="entity-link" >DuplicateUserException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DuplicateUserExceptionFilter.html" data-type="entity-link" >DuplicateUserExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchUserByIdCommand.html" data-type="entity-link" >FetchUserByIdCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchUserByIdHandler.html" data-type="entity-link" >FetchUserByIdHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestJwtStrategy.html" data-type="entity-link" >NestJwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAddressDto.html" data-type="entity-link" >UpdateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAttendanceDto.html" data-type="entity-link" >UpdateAttendanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClassDto.html" data-type="entity-link" >UpdateClassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFinalAttendanceDto.html" data-type="entity-link" >UpdateFinalAttendanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMarkDto.html" data-type="entity-link" >UpdateMarkDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStudentDto.html" data-type="entity-link" >UpdateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubjectDto.html" data-type="entity-link" >UpdateSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeacherDto.html" data-type="entity-link" >UpdateTeacherDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDetailResponse.html" data-type="entity-link" >UserDetailResponse</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressService.html" data-type="entity-link" >AddressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttendanceLogService.html" data-type="entity-link" >AttendanceLogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassService.html" data-type="entity-link" >ClassService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseStrategy.html" data-type="entity-link" >DatabaseStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionInterceptor.html" data-type="entity-link" >ExceptionInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FinalAttendanceService.html" data-type="entity-link" >FinalAttendanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStorage.html" data-type="entity-link" >JwtStorage</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarksService.html" data-type="entity-link" >MarksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" >ResponseTransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentService.html" data-type="entity-link" >StudentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubjectService.html" data-type="entity-link" >SubjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeacherService.html" data-type="entity-link" >TeacherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link" >TimeoutInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenGuard.html" data-type="entity-link" >TokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IErrorBody.html" data-type="entity-link" >IErrorBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemsBody.html" data-type="entity-link" >ItemsBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationMetaInterface.html" data-type="entity-link" >PaginationMetaInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Req.html" data-type="entity-link" >Req</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceBody.html" data-type="entity-link" >ResourceBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenBody.html" data-type="entity-link" >TokenBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenStorage.html" data-type="entity-link" >TokenStorage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});