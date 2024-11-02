import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-error',
  template: `
    <main
      class="py-24 space-y-8 lg:space-y-16 px-4 2xl:px-0 max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto min-h-screen"
    >
      <div
        class="flex flex-col gap-4 items-center justify-center h-56 w-full md:w-96 mx-auto"
      >
        <p class="font-medium text-center text-red-600 w-full break-words">
          Page Not Found
        </p>
        <a
          routerLink="/"
          class="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-xl text-sm px-4 py-2"
          >Back to home</a
        >
      </div>
    </main>
  `,
})
export class PageNotFound {}
