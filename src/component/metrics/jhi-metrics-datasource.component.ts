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
    selector: 'jhi-metrics-datasource',
    template: `
        <h3 jhiTranslate="metrics.datasource.title">DataSource statistics (time in millisecond)</h3>
        <div class="table-responsive" *ngIf="!updating">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>
                            <span jhiTranslate="metrics.datasource.usage">Connection Pool Usage</span> (active:
                            {{ datasourceMetrics.active.value }}, min: {{ datasourceMetrics.min.value }}, max:
                            {{ datasourceMetrics.max.value }}, idle: {{ datasourceMetrics.idle.value }})
                        </th>
                        <th class="text-right" jhiTranslate="metrics.datasource.count">Count</th>
                        <th class="text-right" jhiTranslate="metrics.datasource.mean">Mean</th>
                        <th class="text-right" jhiTranslate="metrics.servicesstats.table.min">Min</th>
                        <th class="text-right" jhiTranslate="metrics.servicesstats.table.p50">p50</th>
                        <th class="text-right" jhiTranslate="metrics.servicesstats.table.p75">p75</th>
                        <th class="text-right" jhiTranslate="metrics.servicesstats.table.p95">p95</th>
                        <th class="text-right" jhiTranslate="metrics.servicesstats.table.p99">p99</th>
                        <th class="text-right" jhiTranslate="metrics.datasource.max">Max</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Acquire</td>
                        <td class="text-right">{{ datasourceMetrics.acquire.count }}</td>
                        <td class="text-right">{{ filterNaN(datasourceMetrics.acquire.mean) | number: '1.0-2' }}</td>
                        <td class="text-right">{{ datasourceMetrics.acquire['0.0'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.acquire['0.5'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.acquire['0.75'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.acquire['0.95'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.acquire['0.99'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ filterNaN(datasourceMetrics.acquire.max) | number: '1.0-2' }}</td>
                    </tr>
                    <tr>
                        <td>Creation</td>
                        <td class="text-right">{{ datasourceMetrics.creation.count }}</td>
                        <td class="text-right">{{ filterNaN(datasourceMetrics.creation.mean) | number: '1.0-2' }}</td>
                        <td class="text-right">{{ datasourceMetrics.creation['0.0'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.creation['0.5'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.creation['0.75'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.creation['0.95'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.creation['0.99'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ filterNaN(datasourceMetrics.creation.max) | number: '1.0-2' }}</td>
                    </tr>
                    <tr>
                        <td>Usage</td>
                        <td class="text-right">{{ datasourceMetrics.usage.count }}</td>
                        <td class="text-right">{{ filterNaN(datasourceMetrics.usage.mean) | number: '1.0-2' }}</td>
                        <td class="text-right">{{ datasourceMetrics.usage['0.0'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.usage['0.5'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.usage['0.75'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.usage['0.95'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ datasourceMetrics.usage['0.99'] | number: '1.0-3' }}</td>
                        <td class="text-right">{{ filterNaN(datasourceMetrics.usage.max) | number: '1.0-2' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class JhiMetricsDatasourceComponent {
    /**
     * object containing all datasource related metrics
     */
    @Input() datasourceMetrics: {
        active: any;
        min: any;
        idle: any;
        max: any;
        usage: any;
        acquire: any;
        creation: any;
    };

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
