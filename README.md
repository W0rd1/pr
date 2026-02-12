# EngineX

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Project Structure
Absolutely! Since this is for **learning purposes**, we can design a **modular, clear structure** in Angular that helps you practice components, services, routing, and basic state management. Here's a suggested structure:

---

## **1. Project Structure**

```
angular-webstore/
│
├── src/
│   ├── app/
│   │   ├── core/                  # Shared core modules/services
│   │   │   ├── header/            # Header component
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   └── header.component.scss
│   │   │   └── footer/            # Footer component
│   │   │       ├── footer.component.ts
│   │   │       ├── footer.component.html
│   │   │       └── footer.component.scss
│   │   │
│   │   ├── features/              # Feature-specific modules
│   │   │   ├── home/              # Home page
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.scss
│   │   │   │
│   │   │   ├── products/          # Products list
│   │   │   │   ├── product-list/  
│   │   │   │   │   ├── product-list.component.ts
│   │   │   │   │   ├── product-list.component.html
│   │   │   │   │   └── product-list.component.scss
│   │   │   │   └── product-item/
│   │   │   │       ├── product-item.component.ts
│   │   │   │       ├── product-item.component.html
│   │   │   │       └── product-item.component.scss
│   │   │   │
│   │   │   └── banner/            # Homepage banner
│   │   │       ├── banner.component.ts
│   │   │       ├── banner.component.html
│   │   │       └── banner.component.scss
│   │   │
│   │   ├── shared/                # Shared components, pipes, directives
│   │   │   └── search-bar/
│   │   │       ├── search-bar.component.ts
│   │   │       ├── search-bar.component.html
│   │   │       └── search-bar.component.scss
│   │   │
│   │   ├── services/              # For API calls / data
│   │   │   └── product.service.ts
│   │   │
│   │   ├── app-routing.module.ts  # Routes
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
│   │
│   └── assets/
│       └── images/
│
└── angular.json
```

---

## **2. Component Hierarchy**

```
AppComponent
│
├── HeaderComponent
│   └── SearchBarComponent
│
├── HomeComponent
│   ├── BannerComponent
│   └── ProductListComponent
│       └── ProductItemComponent
│
└── FooterComponent
```

---

## **3. Angular Concepts to Learn Here**

1. **Components**: Each section (header, footer, banner, products) is its own component.
2. **Input/Output**: Pass product data from `ProductListComponent` to `ProductItemComponent`.
3. **Services**: `ProductService` for fetching products (mock data at first).
4. **Routing**: You can add routes later for product details or user profile.
5. **Shared Components**: `SearchBarComponent` reusable in header or elsewhere.
6. **CSS/SCSS**: Scoped styling with component styles.

---

## **4. Example: app.component.html**

```html
<app-header></app-header>

<main>
  <router-outlet></router-outlet> <!-- Will load HomeComponent -->
</main>

<app-footer></app-footer>
```

---

## **5. Example: home.component.html**

```html
<app-banner></app-banner>
<app-product-list></app-product-list>
```

---

This setup is **modular, scalable, and beginner-friendly**, so you can gradually add features like:

* Product details page
* Cart system
* User authentication
* Filtering & sorting products

---

If you want, I can also **draw a visual component tree diagram** for this structure—it makes it super easy to visualize the layout and Angular hierarchy. Do you want me to do that?

