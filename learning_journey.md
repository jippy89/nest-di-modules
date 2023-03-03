1. Create module `nest g module <name>`
2. Create services `nest g service <name>`
3. Create controller for `computer` `nest g controller computer`

4. Start developing with the bottom up approach.
Aka start with the one that doesn't have dependency.
5. Integrate DI between modules (Start with CPU module)

For now DI inside of a module look like this
1. Add `@Injectable` to `PowerService`
2. Add `PowerService` to `PowerModule` (in the `provider` property)
3. Define the constructor method in the desired service

For DI between modules
1. Export the `PowerService` by adding `exports` property in `@Module` object
2. Import the `PowerModule` in `cpu.module.ts`
Then use `imports` property
3. Define the constructor method in `CpuService` and add `PowerService` to it.