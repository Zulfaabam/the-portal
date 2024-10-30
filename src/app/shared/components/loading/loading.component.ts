import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loading',
  template: `
    <div class="flex items-center justify-center h-56 w-full">
      <div
        class="px-4 py-2 font-medium leading-none text-center text-orange-600 bg-orange-200 rounded-full animate-pulse"
      >
        loading...
      </div>
    </div>
  `,
})
export class Loading {}
