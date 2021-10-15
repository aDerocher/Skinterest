from app.models import db, Ink, Category

# Adds a demo user, you can add other users here if you want
def seed_inks():
    ink1 = Ink(
            creator_id = 1,
            creator_username = 'Demo',
            image = "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
            title = "Ink Title",
            subtitle = "This is my first tattoo!",
            destination_link = "google.com",
    )

    ink2 = Ink(
        creator_id=2,
        creator_username='leena',
        image="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        title="Hey from leena, like, soooo excited for this right now. ya.",
        subtitle="This is my first tattoo!",
        destination_link="google.com",
    )

    ink1.categories.append(Category.query.get(1))
    ink1.categories.append(Category.query.get(3))
    ink1.categories.append(Category.query.get(5))

    db.session.add(ink1)
    db.session.add(ink2)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_inks():
    db.session.execute('TRUNCATE inks RESTART IDENTITY CASCADE;')
    db.session.commit()
