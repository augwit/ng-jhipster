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
import {FormControl} from '@angular/forms';
import { JhiMinValidatorDirective } from '../../src/directive/min.directive';

describe('JhiMinValidatorDirective Tests', () => {
    let dir: JhiMinValidatorDirective;
    let c: FormControl;

    beforeEach(() => {
        dir = new JhiMinValidatorDirective();
        c = new FormControl('', {});
    });

    describe('UI logic tests', () => {
        it('should validate value superior min', () => {
            dir.jhiMin = 10;
            c.setValue(11);
            expect(dir.validate(c)).toBeNull();
        });

        it('should validate value equals min', () => {
            dir.jhiMin = 10;
            c.setValue(10);
            expect(dir.validate(c)).toBeNull();
        });

        it('should reject value inferior min', () => {
            dir.jhiMin = 10;
            c.setValue(9);
            expect(dir.validate(c)).toBeDefined();
            expect(dir.validate(c).min).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            expect(dir.validate(c).min.valid).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            expect(dir.validate(c).min.valid).toBe(false);
        });

        it('should accept null values', () => {
            dir.jhiMin = 10;
            c.setValue(null);
            expect(dir.validate(c)).toBeNull();
        });

        it('should validate 0 correctly', () => {
            dir.jhiMin = 10;
            c.setValue(0);
            expect(dir.validate(c)).toBeDefined();
            expect(dir.validate(c).min).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            expect(dir.validate(c).min.valid).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            expect(dir.validate(c).min.valid).toBe(false);
        });
    });
});
