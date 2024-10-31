import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-error',
  template: `
    <div
      class="flex flex-col gap-4 items-center justify-center h-56 w-full md:w-96 mx-auto"
    >
      <p class="font-medium text-center text-red-600 w-full break-words">
        {{ errorMessage }}
      </p>
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
