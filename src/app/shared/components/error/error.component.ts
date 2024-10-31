import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-error',
  template: `
    <div class="flex flex-col gap-2 items-center justify-center h-56 w-full">
      <div class="px-4 py-2 font-medium leading-none text-center text-red-600">
        {{ errorMessage }}
      </div>
      <a
        routerLink="/"
        class="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-xl text-sm px-4 py-2"
        >Back to home</a
      >
    </div>
  `,
})
export class Error {
  @Input() errorMessage: any = 'An unexpected error occured';
}
