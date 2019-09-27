# JAMming Out With Static Site Generators

## Web Development Made <span class="display-hidden">Awesome</span>

<h2 class="title-word"><span class="typed-text"></span></h2>

---

## Who are we

* Maintainers of [vtcodecamp.org](https://www.vtcodecamp.org/)
* Chose SSG and static hosting.  
* Sharing what we learned

---

# How should you build a website in 2019?

---

## Three General Approaches

* Server Side Rendering (SSR)
  * ex. WordPress
* Client Side Rendering (CSR)
  * ex. Singe Page Application (SPA)
* Static Site Generation (SSG)
  * ex. Gatsby

---

### Server Side Rendering - Advantages

* Popular choice
* Convenient Content Management System
* Lots of features out of the box
* Requires web server / hosting

---

## Server Side Rendering - Challenges

* Server response time
* Security - Injection
* Infrastructure Cost
* SSR more vulnerable to DDoS Attacks

<aside class="notes">

But they require added technical complexity / infrastructure / cost

* response time → caching
* traffic → scaling

</aside>

---


## Client Side Rendering - Advantages

* Distributes server load across multiple clients
* Minimize request size for updates
* Avoid re-rendering layout / shared assets
* Super fast re-templating on data change

---

## Client Side Rendering - Challenges

* Mobile CPUs slow - js budget 170k
* Search Engine Optimization (SEO)
* Unknown Environment

---

# So what about Static Site Generators (SSG)?

---

## Lunch Time

* **SSR**: Restaurant
* **CSR**: Meal delivery service
* **SSG**: Weekly meal prep

---

## Static Site Generation - Advantages

* Security
* Performance
* Compile Time > Run Time
* Winterization
* Where work happens


---

# There is probably a Static Site Generator  written in  your favorite language

---

<!-- .slide: class="two-col" -->
* Ruby
  * Jekyll
  * Middleman
* Python
  * Hyde
  * Pelican
* PHP
  * Sculpin
  * Jigsaw
* C#/.NET
  * wyam
* Java
  * Orchid
* Go
  * Hugo
* Rust
  * Zola


---

# What about JavaScript?

---


<!-- .slide: class="two-col" -->
* Vanilla JS
  * 11ty
  * Hexo
  * Cogear.js
  * Metalsmith
  * Harp
* React
  * Next
  * Gatsby
* Vue
  * Nuxt
  * VuePress

---

# For more info check out [staticgen.com](https://www.staticgen.com/)

---

## Demo Time

1. Install Eleventy
2. Build Locally
3. Layout Page
4. Deploy Site
5. Make Changes

---

## Data Driven Templates

---

## Comparison of Approaches

---

![SSG Spectrum](/assets/images/ssg-spectrum.svg)

---

![SSG Comparrison](/assets/images/ssg-comparison.png)

---

## So what is JAM Stack?

---

## #Hype

* JAMstack conf
* Smashing magazine
* Gatsby
* All the buzzwords!