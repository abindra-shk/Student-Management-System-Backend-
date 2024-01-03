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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' :
                                            'id="xs-controllers-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' :
                                        'id="xs-injectables-links-module-AppModule-8e483a66396849ed4404565357b4ccdaaef34dec18ae53bfccdb2e8f3190e26add5bb4267c012c1b7ee100ca10caa938207ec3b8790b6d6b89b8c3416db41acf"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
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
                                <a href="modules/TeacherModule.html" data-type="entity-link" >TeacherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' : 'data-bs-target="#xs-controllers-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' :
                                            'id="xs-controllers-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' }>
                                            <li class="link">
                                                <a href="controllers/TeacherController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' : 'data-bs-target="#xs-injectables-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' :
                                        'id="xs-injectables-links-module-TeacherModule-20d61019f84c37babb2b4b14ab3464605c08d6ce57100ea51ee06287fb8e122e9a473d5b6543108deb2dd099cf75b840f5371ca7a53c28b26180566d20ba6a96"' }>
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
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthenticationController.html" data-type="entity-link" >AuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CoreController.html" data-type="entity-link" >CoreController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseStrategy.html" data-type="entity-link" >DatabaseStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionInterceptor.html" data-type="entity-link" >ExceptionInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStorage.html" data-type="entity-link" >JwtStorage</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" >ResponseTransformInterceptor</a>
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