import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: true
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], role: string): any[] {
        if (!items || !role || role === 'all') {
            return items;
        }
        return items.filter(item => item.role === role);
    }
}
