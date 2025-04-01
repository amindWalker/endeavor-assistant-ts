<div align='center'>

# [Endeavor Assistant]()<br><sup>assisting to meet your goals</sup>

</div>

> **Note**
> * The main purpose of this project is to **document, evaluate and benchmark** the strong qualities of the `Rust` language by building a real-world FullStack `TypeScript` (BE+FE) application from scratch and then reimplementing everything in `Rust` and `WASM`. I'm opensourcing a project that I've made back in 2020 using current (as of October 2022) tech and best practices from scratch because I want it to be scientifically fair for both sides. It might take a while to reimplement everything so stay tuned (:star: **star this repo if you like it**) and follow me on this huge endeavor.

* `Rust` version of this repository: [endeavor-assistant](https://github.com/amindWalker/endeavor-assistant)

## The Expected Result
- [x] Rust makes most of the code base almost bug-free, with the exception of logic bugs (obviously, a code base can still contain logic bugs). [^0]
- [x] `Rust` takes a "Data First" approach, making you take better decisions upfront while giving your IDE more information about your code (i.e. better integration with code completions) delivering incredible Developer Experience (DX) along the way.[^1]
- [x] There is **no inheritance** in `Rust` by default. This is another way to avoid complex structures which lead to hard-to-catch bugs in runtime. If you need inheritance you can mimic this behavior by implementing `Traits`.[^2]
- [x] `Rust` + `WebAssembly` provides faster, more secure, and predictable behavior (at compile-time) applications.[^3]
- [x] Better maintainable codebase in the medium or long term.[^4]
- [x] Front-end and back-end in `Rust` keep high-level abstractions with readable modern functional programming concepts comparable to or better than `TypeScript`.[^5]
- [x] Smaller cross-platform WASM bundles (binaries + dependencies).[^6]
- [x] Super lightweight, secure alternative to Linux containers.[^7]
- [x] Dramatic less memory and CPU usage (environment friendly while saving money and time).[^8] [^9]
- [x] Faster deployment to production due to the much smaller size of the `WASM` `VM` package.[^10]
- [x] First-class Tests, Documentation and Packaging (meaning less third-party dependencies and fragmentation) via Cargo and [crates.io](https://crates.io/).[^11]
- [x] Best-in-class compiler messages with inline manuals integrated with your IDE of choice.[^12]

## [FEATURES]()
 - [ ] Appointments
 - [ ] Checklist
 - [ ] Charts
 - [ ] Finance Tools
 - [ ] Notes tool (Markdown-like)
 - [ ] Progressive analysis (AI hints to improve your tasks)
 - [ ] Full Command Line support (same GUI features but on CLI)

[^0]: [Why is Memory Safety Without GC a Big Deal in RUST?](https://medium.com/@humble_bee/why-is-memory-safety-without-gc-a-big-deal-in-rust-41f6bdd5902f), [C++ Memory Bugs Prompt Microsoft to Eye Rust Instead](https://visualstudiomagazine.com/articles/2019/07/18/microsoft-eyes-rust.aspx). David Ramel07/18/2019. [Google, Microsoft Take Refuge in Rust Language's Better Security](https://www.darkreading.com/application-security/google-microsoft-take-refuge-in-rust-languages-better-security). Robert Lemos, Contributing Writer, August 4, 2023.
[^1]: [Data-first and data-last: a comparison](https://www.javierchavarri.com/data-first-and-data-last-a-comparison/). Javier Chávarri, May 10, 2019.
[^2]: [Traits: Defining Shared Behavior](https://doc.rust-lang.org/book/ch10-02-traits.html). The Official Rust Programming Language Book.
[^3]: [Introduction to WebAssembly on the Cloud](https://www.fermyon.com/blog/intro-to-wasm). Fermyon Blog.
[^4]: [placeholder]() Better maintainable codebase in the medium or long-term.
[^5]: [placeholder]() Front-end and back-end in `Rust` keeps high level abstractions with readable modern functional programming concepts that are comparable or better than `TypeScript`.
[^6]: [Rust in WebAssembly](https://www.fermyon.com/wasm-languages/rust). Fermyon Blog.
[^7]: [Super lightweight, secure alternative to Linux containers](https://nigelpoulton.com/getting-started-with-docker-and-wasm/). Nigel Poulton, 8 November, 2022
[^8]: [Sustainability with Rust](https://aws.amazon.com/blogs/opensource/sustainability-with-rust/). AWS Open Source Blog, 11 Feb, 2022.
[^9]: [How we built Pingora, the proxy that connects Cloudflare to the Internet](https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/).
[^10]: [It's time to rethink how we use virtualization in backends](https://www.shuttle.rs/blog/2022/10/21/shuttle-next). Shuttle Blog, 21 October 2022
[^11]: [The Cargo Book](https://doc.rust-lang.org/cargo/). The Official Cargo Book.
[^12]: [IDE Integration Using `rust-analyzer`](https://doc.rust-lang.org/book/appendix-04-useful-development-tools.html#ide-integration-using-rust-analyzer). The Official Rust Programming Language Book.
