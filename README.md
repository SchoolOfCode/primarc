

App Component Tree

App
    - Menu / Nav Bar
    - Dark Mode
        State: mode
        Behaviour: Toggle CSS between light/dark color scheme

    - Carousel
        State: items
        Behaviour: Fetch category items, render items using Card component

        - Card
            State: Saving favourite items (on-click for toggling)
            Behaviour: Render image / item name / desc / etc

