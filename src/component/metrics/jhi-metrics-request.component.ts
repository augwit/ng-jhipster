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
import { Component, Input } from '@angular/core';

@Component({
    selector: 'jhi-metrics-request',
    template: `
        <h3 jhiTranslate="metrics.jvm.http.title">HTTP requests (time in millisecond)</h3>
        <table class="table table-striped" *ngIf="!updating">
            <thead>
                <tr>
                    <th jhiTranslate="metrics.jvm.http.table.code">Code</th>
                    <th jhiTranslate="metrics.jvm.http.table.count">Count</th>
                    <th class="text-right" jhiTranslate="metrics.jvm.http.table.mean">Mean</th>
                    <th class="text-right" jhiTranslate="metrics.jvm.http.table.max">Max</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let entry of (requestMetrics['percode'] | keys)">
                    <td>{{ entry.key }}</td>
                    <td>
                        <ngb-progressbar
                            [max]="requestMetrics['all'].count"
                            [value]="entry.value.count"
                            [striped]="true"
                            [animated]="false"
                            type="success"
                        >
                            <span>{{ entry.value.count }}</span>
                        </ngb-progressbar>
                    </td>
                    <td class="text-right">
                        {{ filterNaN(entry.value.mean) | number: '1.0-2' }}
                    </td>
                    <td class="text-right">{{ entry.value.max | number: '1.0-2' }}</td>
                </tr>
            </tbody>
        </table>
    `
})
export class JhiMetricsHttpRequestComponent {
    /**
     * object containing http request related metrics
     */
    @Input() requestMetrics: {};

    /**
     * boolean field saying if the metrics are in the process of being updated
     */
    @Input() updating: boolean;

    filterNaN(input: number): number {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    }
}
