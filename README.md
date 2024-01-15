# Tithi Calculator

Experimental Program to calculate the tithi (Hindu Lunar Calendar) from a Gregorian Calendar date.

## Motivation

I like knowing the tithi, having grwon up in Nepal, with most major festivals being celebrated according to the Lunar Calendar.  Further, I like to know which particular tithi and paksha it is on a given date.

I have not been able to find good calendar apps that give this simple information to me.  I tried installing various Nepali and Indian calendars, but my phone battery kept draining very agressively post install, until I got rid of them (I tried each one individually).  Seemed very sketchy to me.  This is in addition to the advertisements they show, even for an app that seems to just render a PDF file for the most part!

## State of Affairs

- I generated some data using the [Skyfield Python Library](https://rhodesmill.org/skyfield/) into a custom CSV file.
- I then wrote a rudimentary web page with a lot of web-searching to allow users to interact with this CSV to do some basic conversion from date to tithi

## Limitations

- Tithi is calculated by taking the angle between the sun and moon as seen from earth (roughly speaking).  However, you can have multiple tithis fall on the same day.  Which one you pick has some convention that I need to get more familiar with.  That's why the tithis will be mostly accurate, and sometimes off by a day from convention (when there is an overlap and the starting tithi is different).  I would like to fix this later.

## Feature Wishlist

### Offline Usage + Open Source

Anyone should be able to install the application (if they don't want to use the web-version), and use it indefinitely for free, without any tracking or fees.

### Extensibility

Anyone should be able to extend the application functionality, build their custom applications/modules built on top of this (e.g. iphone widgets), or even fork the application to suit their own purposes.

### Date Converter/Information View/Calendar

The application should allow for date conversion to/from Gregorian Date, Bikram Sambat, and if it makes much sense, from tithi too.

### Widget

I'd ideally like to have widgets on my phone and laptops (I use Linux - KDE primarily these days, but I've used Gnome a lot too).

In an ideal world, these widgets + apps would allow me to view:

- Current Tithi
- Relevant Festivals today
- Bikram Sambat (at the very least - the one followed in Nepal)

## Mini-Glossary
- [Tithi](https://en.wikipedia.org/wiki/Tithi): a sequence of days that always starts from Prathama (Sanskrit: first), goes up to Chaturdashi (Sanskrit: fourteenth), then ends in either Purnima (full moon), or Aunsi/Amawasya (New Moon).
- Paksha: Phase of the moon
  - Shukla (bright) Paksha: Waxing Phase
  - Krishna (dark) Paksha: Waning Phase