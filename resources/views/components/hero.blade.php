<div class="relative isolate overflow-hidden pt-14">

    {{ $image }}

    <div class="-z-10 absolute inset-0 mix-blend-multiply bg-gray-400"></div>

    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
            {{ $slot }}
        </div>
    </div>
</div>
