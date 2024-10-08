/*
 Copyright 2016-2021 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { async, inject, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { JhiConfigService } from '../../src/config.service';
import { JhiLanguageService } from '../../src/language/language.service';

describe('LanguageService Test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TranslateModule.forRoot()],
            providers: [
                {
                    provide: JhiConfigService,
                    useValue: new JhiConfigService({})
                }

            ]
        });
    });

    it('should change Language', async(inject([JhiLanguageService], (service: JhiLanguageService) => {
        service.changeLanguage('fr');
        void service.getCurrent().then(language => expect(language).toEqual('fr'));
    })));

    it('should retain changed language even after force refresh', async(inject([JhiLanguageService], (service: JhiLanguageService) => {
        service.changeLanguage('fr');
        service.init();
        void service.getCurrent().then(language => expect(language).toEqual('fr'));
    })));

});
