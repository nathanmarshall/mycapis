'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope) {

        // Masonry

        $scope.heroGrid = $('.hero-grid--container');
        $scope.heroGrid.masonry({
            itemSelector: '.hero-box',
            columnWidth: function( containerWidth ) {
                return containerWidth / 4;
            },
            isResizable: true
        });

        $(window).ready(function () {
            $scope.heroGrid.masonry('reload');
        });

        // Hero Grid Items (photos)

  
        $scope.photoBoxes = [
            // {
            //     quote: 'We have one of the best programs in the university, if anything it should be looked at as one of it\'s crowned jewels.',
            //     author: 'Parker Busswood',
            //     credential: 'Front-End Engineer, East Side Games',
            //     imageUrl: 'people/parker-busswood.jpg',
            //     type: 'photo',
            //     priority: 2,
            //     template: 'templates/photo.html'
            // },
            // {
            //     quote: 'As an alumnus I stand to lose my biggest network, fresh talent coming out of the program.',
            //     author: 'Jørgen Hookham',
            //     credential: 'Designer, Sokanu',
            //     imageUrl: 'people/jorgen-hookham.jpg',
            //     type: 'photo',
            //     priority: 5,
            //     template: 'templates/photo.html'
            // },
            // {
            //     quote: 'The world is having an asymmetric education problem, and you actually have a program where 85% of students get a job.',
            //     author: 'Spencer Thompson',
            //     credential: 'CEO, Sokanu',
            //     imageUrl: 'people/spencer-thompson.jpg',
            //     type: 'photo',
            //     priority: 6,
            //     template: 'templates/photo.html'
            // },
            // {
            //     quote: 'To cut this innovative program would not only irreparably cripple the momentum of the institution, but it would also impact the bottom line of BC\'s tech industry for years to come.',
            //     author: 'Wil Arndt',
            //     credential: 'Owner, Mod7',
            //     imageUrl: 'people/wil-arndt.jpg',
            //     type: 'photo',
            //     priority: 6,
            //     template: 'templates/photo.html'
            // },
            // {
            //     quote: 'We were thrilled when we discovered Capilano University\'s Interactive Design Program as they were one of the only institutions in the country with a focus in this critical and growing discipline.',
            //     author: 'Molly Schneeberg',
            //     credential: 'CEO, kibooco',
            //     imageUrl: 'people/molly-schneeberg.jpg',
            //     type: 'photo',
            //     priority: 6,
            //     template: 'templates/photo.html'
            // },
            // {
            //     quote: 'I honestly don\'t know what I would be doing without the skills and knowledge the program has given me under my belt.',
            //     author: 'Poyan Behboudi',
            //     credential: 'INTE Graduate, 2013',
            //     imageUrl: 'people/poyan-behboudi.jpg',
            //     type: 'photo',
            //     priority: 6,
            //     template: 'templates/photo.html'
            // },
            // {
            //     quote: 'Our industry is hurting for skilled practitioners and the Cap program produces quality grads who are the future of IxD. Suspending it makes little sense.',
            //     author: 'Plynne Polischuik',
            //     credential: 'Founder, The Republic of Quality',
            //     imageUrl: 'people/lynne-polischuik.jpg',
            //     type: 'photo',
            //     priority: 6,
            //     template: 'templates/photo.html'
            // },
            // {
            //     quote: 'This is an important program for the future economy of Squamish. It is important to have trained employees for the tech sector.',
            //     author: 'Kerry Brown',
            //     credential: 'CIRA, Board of Directors',
            //     imageUrl: 'people/kerry-brown.jpg',
            //     type: 'photo',
            //     priority: 6,
            //     template: 'templates/photo.html'
            // },
            {   quote: 'My Cap works together to shape the university',
                author: 'Bob Sherrin',
                credential: 'English faculty',
                imageUrl: 'people/bob-sherrin.jpg',
                type: 'photo',
                priority: 28,
                template: 'templates/photo.html'
            },
            {
                quote: 'My Cap builds upon the expertise of its community.',
                author: 'Cheryl Schreader',
                credential: 'Geography faculty',
                imageUrl: 'people/cheryl-schreader.jpg',
                type: 'photo',
                priority: 23,
                template: 'templates/photo.html'
            },
            {   quote: 'My Cap values and supports creative connections between its programs and Faculties.',
                author: 'Sylvia Kind',
                credential: 'ECCE faculty',
                imageUrl: 'people/sylvia-kind.jpg',
                type: 'photo',
                priority: 21,
                template: 'templates/photo.html'
            },
            {   quote: 'My Cap embraces the synthesis of ideas and innovation across the Faculties.',
                author: 'Aurelea Mahood',
                credential: 'English Faculty',
                imageUrl: 'people/aurelea.jpg',
                type: 'photo',
                priority: 32,
                template: 'templates/photo.html'
            },
            {
                quote: 'My Cap is thoughtful not hasty.',
                author: 'Janet Waters',
                credential: 'Psychology faculty',
                imageUrl: 'people/janet-waters.jpg',
                type: 'photo',
                priority: 35,
                template: 'templates/photo.html'
            },
            {
                quote: 'My Cap is our Cap.',
                author: 'Charlotte Burke',
                credential: 'Costuming faculty',
                imageUrl: 'people/faculty.jpg',
                type: 'photo',
                priority: 34,
                template: 'templates/photo.html'
            },  
            {
                quote: 'My Cap is a twenty-first century university.',
                author: 'Joseph Fall',
                credential: 'Computer Science faculty',
                imageUrl: 'people/joseph.jpg',
                type: 'photo',
                priority: 42,
                template: 'templates/photo.html'
            }
        ];

        // Hero Grid Items (quote)

        $scope.quoteBoxes = [
            // {
            //     quote: 'My son graduated from this program and it has led him to a great career. Without the guidance and direction of the excellent instructors he could still be working at Starbucks',
            //     author: 'Catherine Patterson',
            //     type: 'quote',
            //     priority: 6,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'The vast majority of graduates of this program get jobs. Good, long term jobs.',
            //     author: 'Dave Rankin',
            //     type: 'quote',
            //     priority: 1,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'Coding is the new literacy.',
            //     author: 'Hank Leber',
            //     credential: 'CEO & Co-Founder GonnaBe',
            //     type: 'quote',
            //     priority: 1,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'For the foreseeable future, coding is one of the most important and desirable skills there is.',
            //     author: 'Asher Hunt',
            //     credential: 'Lead Mobile Designer, LivePerson',
            //     type: 'quote',
            //     priority: 3,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'Learn to code. You won\'t regret it.',
            //     author: 'Hank Leber',
            //     credential: 'CEO & Co-Founder GonnaBe',
            //     type: 'quote',
            //     priority: 3,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'Great program - our son is a very successful grad of this program.',
            //     author: 'Kent Brownlow',
            //     credential: 'Parent',
            //     type: 'quote',
            //     priority: 6,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'This program is valuable to both industry and students. It is a proven winner. Cutting it is more than unfortunate but misguided.',
            //     author: 'Alvin Wasserman',
            //     credential: 'President,Wasserman+Partners',
            //     type: 'quote',
            //     priority: 6,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'Interactive Design is leading the charge in the cutting edge field of interactive/digital design....with a favourable reputation preceeding it.',
            //     author: 'Kristen Dillon',
            //     credential: 'INTE Student, September 2013',
            //     type: 'quote',
            //     priority: 6,
            //     template: 'templates/quote.html'
            // },
            // {
            //     quote: 'It\'s the battle of the tech literate vs. the tech illiterate.',
            //     author: 'Hank Leber',
            //     credential: 'CEO & Co-Founder GonnaBe',
            //     type: 'quote',
            //     priority: 6,
            //     template: 'templates/quote.html'
            // },
            {
                quote: "My Cap solves problems creatively.",
                author: 'Nancy Nowlan',
                credential: 'Business faculty',
                type: 'quote',
                priority: 33,
                template: 'templates/quote.html'
            }, 
            {
                quote: "My Cap values the diversity of our intellectual fabric.",
                author: 'Michael Begg',
                credential: 'Legal Studies faculty',
                type: 'quote',
                priority: 35,
                template: 'templates/quote.html'
            }, 
            {
                quote: "My Cap supports students with their assignments.",
                author: 'Faculty Help Desk',
                credential: 'Computer Learning Centre',
                type: 'quote',
                priority: 30,
                template: 'templates/quote.html'
            }, 
             {
                quote: "My Cap is a place where learning crosses boundaries.",
                author: 'Lyne Gareau',
                credential: 'Languages faculty',
                type: 'quote',
                priority: 29,
                template: 'templates/quote.html'
            }, 
            {
                quote: "Hold fire and think.",
                author: 'Barry Magrill',
                credential: 'Community Voice',
                type: 'quote',
                priority: 28,
                template: 'templates/quote.html'
            }, 
            {
                quote: "My Cap is a teaching-focused university.",
                author: 'David Rankin',
                credential: 'Computer Learning Centre faculty',
                type: 'quote',
                priority: 27,
                template: 'templates/quote.html'
            }, 
            {
                quote: "My Cap has a responsibility to students in a world where technology isn't going anywhere.",
                author: 'David Ravnsborg',
                credential: 'Former Student',
                type: 'quote',
                priority: 11,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'Computer science inspired me and opened my eyes to a world of possibilities.',
                author: 'Kenny MacKenzie',
                credential: 'Former Student',
                type: 'quote',
                priority: 10,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'My Cap is a community of collaborators.',
                author: 'Sky Morfopoulos',
                credential: 'Liberal Studies student',
                type: 'quote',
                priority: 25,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'My Cap knows interdisciplinarity needs diversity.',
                author: 'Tania Alekson',
                credential: 'Capilano University Librarian',
                type: 'quote',
                priority: 24,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'The creative economy is the only industry that is infinitely sustainable.',
                author: 'Tetsuomi Anzai',
                credential: 'Community voice',
                type: 'quote',
                priority: 28,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'Support for arts and culture is key to our diverse and unique society in Canada.',
                author: 'Kristin Bingeman',
                credential: 'Community voice',
                type: 'quote',
                priority: 22,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'My Capilano supports all forms of art. It doesn’t view the arts as frivolous in times of austerity.',
                author: 'Marilyn Carpenter',
                credential: 'Liberal Studies student',
                type: 'quote',
                priority: 20,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'My Cap is mind opening.',
                author: 'Michelle Beckett',
                credential: 'Arts & Sciences student',
                type: 'quote',
                priority: 40,
                template: 'templates/quote.html'
            }, 
            {
                quote: 'My Cap support students seeking opportunities for their futures.',
                author: 'Michelle Gunness',
                credential: 'ABE faculty',
                type: 'quote',
                priority: 41,
                template: 'templates/quote.html'
            },  
            {
                quote: 'My Cap is a place where learning crosses boundaries.',
                author: 'Lyne Gareau',
                credential: 'Languages faculty',
                type: 'quote',
                priority: 43,
                template: 'templates/quote.html'
            },
            {
                quote: 'I came to Capilano because I wanted a unique experience, not some cookie-cutter degree.',
                author: 'Katelyn Savard',
                credential: 'Jazz Studies student',
                type: 'quote',
                priority: 44,
                template: 'templates/quote.html'
            },
            {
                quote: 'All but nature originates on the drawing board . . . . It is a travesty to deny our creative souls!',
                author: 'Mary Blaze',
                credential: 'Community voice',
                type: 'quote',
                priority: 31,
                template: 'templates/quote.html'
            },
            {
                quote: 'Artists and their work encourage us to reflect on the difficult and complicated usses that are part of modern life.',
                author: 'Karin Jones',
                credential: 'Community voice',
                type: 'quote',
                priority: 33,
                template: 'templates/quote.html'
            },
            {
                quote: 'Studio Arts are fundamental to developing an educated, flexible, creative future thinkers, producers, and entrepreneurs.',
                author: 'Carla Wolf',
                credential: 'Community voice',
                type: 'quote',
                priority: 34,
                template: 'templates/quote.html'
            },
                               


];

// Hero Grid Items (quote-long)

//         $scope.quoteBoxes = [
//             {
//                 quote: 'I graduated this program in 2010. I now work for one of the biggest brands in Vancouver, and have the ability to not only switch companies, locations and jobs but also change disciplines all together. Their open-ended approach allowed me to learn much about how the world of digital presentation ties together on all the different levels. We\'ve been looking at increasing our talent pool at my workplace lately, to add people we trust for freelance contract work, and from having talked to a lot of professionals around this city, I can tell you, Interactive Design grads come out on top. If anything, expand this program to allow for more people to take it rather than cut it. I realize you\'re running a business here, and Cap U is operating at a deficit, but look for other ways to save money rather than cutting valuable educational programs that actually genuinely do what they are supposed to do. The more you cut, the more ultimately you will lose because your university will have nothing of value.',
//                 author: 'Mike Timofiiv',
//                 credential: 'Developer, Conucks',
//                 type: 'quote-long',
//                 priority: 1,
//                 template: 'templates/quote-long.html'
//             },
//             {
//                 quote: 'This is one of the most innovative and valuable programs at Capilano University. Grads are job-ready and up to speed with highly marketable skills. As a faculty in the School of Business at CapU, I fear our business students will also lose a huge asset, not having the Interactive Design program. School of Business students have ideas but often need help on the Web or mobile development side. We just started some innovative cross-disciplinary courses like mobile app commercialization co-taught by faculty from both areas. Students asked why we can\'t have more courses like this and more collaboration with Interactive Design. I\'m embarrassed to tell them that rather than having more of these kind of cross-disciplinary efforts with talented Interactive Design students and instructors, we won\'t be having any if this gets cut. Cutting the program would be a big step backwards. It\'s taken years to get the curriculum and approach right. It won\'t be something that can just be broken up and restored in pieces in different program areas. It\'s value is in its integrated nature. Every post-secondary institution needs a program like Interactive Design, it\'s core to the growing knowledge economy. Ironically in the School of Business we are working hard to come up with new program offerings in areas like e-marketing, social media etc. It will take a lot of time, effort, and cost and what we come up very likely won\'t be any better than what we already have in the Interactive Design program. With some business courses added in, there would be huge potential to give our grads a much better chance at employability in the growing Web and mobile sector.',
//                 author: 'Cyri Jones',
//                 credential: 'Capilano Unversity, School of Business',
//                 type: 'quote-long',
//                 priority: 1,
//                 template: 'templates/quote-long.html'
//             },
//             {
//                 quote: 'I\'ve never been more excited about returning to school as I am when I think about this program. It HAS to continue. The graduates are amazing and extremely capable, fluent, and job-ready. I want to be among them and say that I\'ve had the opportunity to benefit from this program. Board of Governors, I\'m begging you to not cut this program! My future depends on it.',
//                 author: 'Julien Powell',
//                 credential: 'Interactive Design Student, September 2013',
//                 type: 'quote-long',
//                 priority: 3,
//                 template: 'templates/quote-long.html'
//             },
//             {
//                 quote: 'I’m a design and creative professional. It is important to us all that this discipline continues to attract intelligent, capable and gifted practitioners, who need quality programs to learn about their chosen profession, and get mentored by seasoned industry professionals. This doesn’t just matter to the students, the faculty, and the employers and clients of these prospective students. It matters to ANYONE who could be the recipient of the messages these students may now no longer be trained to deliver competently. Keep this program.',
//                 author: 'Bruce Campbell',
//                 type: 'quote-long',
//                 priority: 7,
//                 template: 'templates/quote-long.html'
//             },
//             {
//                 quote: 'The original Applied Information Technology program helped me start a successful career as a user experience professional that\'s lasted over 14 years. The program has successfully re-invented itself a number of times and continues to produce excellent people who can work in a wide range of roles in the technology and design industries. I know a number of organizations who owe their success to INTE grads. Canada\'s interactive industry will be much, much poorer for the closure of this small, but pivotal program.',
//                 author: 'Dave Robertson',
//                 credential: 'Alumni',
//                 type: 'quote-long',
//                 priority: 3,
//                 template: 'templates/quote-long.html'
//             },
//             {
//                 quote: 'I just got accepted to this course and I truly believe that it has the ability to change my life. When looking at other courses this was by far the best option. Please consider keeping this wonderful program running for future interactive designers and developers like myself.',
//                 author: 'Eric Dunfield ',
//                 credential: 'Interactive Design Student, September 2013',
//                 type: 'quote-long',
//                 priority: 6,
//                 template: 'templates/quote-long.html'
//             },
//             {
//                 quote: 'This is an incredible program, one of my sons was accepted to Capilano University. I was very excited for him. This program would help him enter the workforce with an extreme knowledge base to start his career. Do not cancel this program, surely it costs more to help students when they cannot find work. Don\'t let these incredible minds go to waste.',
//                 author: 'Nancy Cannon',
//                 credential: 'Student\'s Parent, Interactive Design, September 2013',
//                 type: 'quote-long',
//                 priority: 6,
//                 template: 'templates/quote-long.html'
//             },
//             {
//                 quote: 'British Columbia has a strong, yet nascent technology industry. We have birthed game changing companies like Flickr and Hootsuite and are home to countless boutique design, game and application development shops. We have talent. We have the potential. What we need to grow this potential is a government that is willing to invest in the education, training and mentoring of the future digital generation. The biggest issues facing academic institutions in this regard is keeping pace with the blistering speed in which this industry advances. I have seen the results of Capilano Univeristy\'s Interactive Design program. They graduate students with real world skills; high demand skills that our technology, creative and gaming industries seek. They are job ready with the skills to begin work in any number of digital disciplines. If we truly want to grow and nurture the future of economic and technological advancement of this province, we need to think carefully about the types of skill sets that are needed for British Columbia to compete on a global level -- and to really put our support behind growing those skills.',
//                 author: 'Terry Lin',
//                 credential: 'Interactive Art Director, Wasserman+Partners',
//                 type: 'quote-long',
//                 priority: 6,
//                 template: 'templates/quote-long.html'
//             }
// ];

        // Hero Grid Items (vine embeds)

        $scope.vineBoxes = [
            // {
            //     title: 'Glitch Mob',
            //     embedCode: 'http://vine.co/v/b55LOA1dgJU/embed/simple',
            //     type: 'video',
            //     priority: 5,
            //     template: 'templates/vine.html'
            // }
        ];

        // Hero Grid Items (youtube embeds)

        $scope.youtubeBoxes = [
            // {
            //     embedCode: 'NvK1F_odamo',
            //     quote: 'The goal is to put people in the work force and be employable, we look to these programs for our new stars.',
            //     author: 'Jason Bailey',
            //     credential: 'CEO, East Side Games',
            //     imageUrl: 'people/jason-bailey.jpg',
            //     type: 'video__with-quote',
            //     priority: 4,
            //     template: 'templates/youtube.html'
            // },
            // {
            //     embedCode: 'kJcPCIAGfeY',
            //     quote: 'People from the INTE program come ready to wear many hats. Cutting this program would leave a big gap.',
            //     author: 'Josh Nilson',
            //     credential: 'COO, East Side Games',
            //     imageUrl: 'people/josh-nilson.jpg',
            //     type: 'video__with-quote',
            //     priority: 6,
            //     template: 'templates/youtube.html'
            // },
            // {
            //     embedCode: '4W5sBDRcZvA',
            //     author: 'Myles Galvin, BBA',
            //     type: 'video',
            //     priority: 6,
            //     template: 'templates/youtube.html'
            // },
            // {
            //     embedCode: 'PRfYP8-CraU',
            //     author: 'Courtney Inman',
            //     type: 'video',
            //     priority: 4,
            //     template: 'templates/youtube.html'
            // },
            // {
            //     embedCode: 'LUiP5q2X_fU',
            //     author: 'Collin Stewart',
            //     type: 'video',
            //     priority: 6,
            //     template: 'templates/youtube.html'
            // },
            // {
            //     embedCode: 'KyhzOiviZlg',
            //     type: 'video',
            //     priority: 4,
            //     template: 'templates/youtube.html'
            // },
            // {
            //     embedCode: 'Tai8WRDpWOc',
            //     type: 'video',
            //     priority: 6,
            //     template: 'templates/youtube.html'
            // },
            {
                embedCode: '0CLuhdxH6_s',
                type: 'video',
                priority: 32,
                template: 'templates/youtube.html'
            },
            {
                embedCode: 'l8mbajKlzVs',
                type: 'video',
                priority: 26,
                template: 'templates/youtube.html'
            },
            {
                embedCode: 'bGYjpQQXpTI',
                type: 'video',
                priority: 3,
                template: 'templates/youtube.html'
            }

        ];

        // Concatenating hero box sources and sorting

        var heroBoxes = []
            .concat($scope.quoteBoxes)
            .concat($scope.photoBoxes)
            .concat($scope.vineBoxes)
            .concat($scope.youtubeBoxes);

        $scope.heroBoxes = heroBoxes.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );

});







