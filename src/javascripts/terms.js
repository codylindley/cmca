const terms = [
    {
        term: `anthropology`,
        def: `The study of mankind`
    },

    {
        term: `relativism`,
        def: `The denial of any absolute or objective standards, especially in ethics. (See objectivity.) Ethical relativists can be individual relativists, who hold that what is morally right is relative to the beliefs or emotions of the individual, or they can be cultural relativists, who hold that what is morally right varies with different societies. (See subjectivism.) Analogously, in epistemology relativism holds that what is true is dependent on the individual or the culture.`
    },

    {
        term: `philosophy`,
        def: `According to William James, philosophy is simply an unusually obstinate effort to think clearly and deeply about fundamental questions. Interestingly, what counts as philosophy is itself under dispute in philosophy. Philosophy can be identified historically in the West as the kind of activity carried on by such people as Plato, Aristotle, David Hume and Immanuel Kant. It can also be identified with reference to its fundamental questions, such as “What is knowledge?” (epistemology), “What is reality?” (metaphysics) and “What is good?” (ethics). Although some would make a sharp distinction between philosophy and theology, there is substantial overlap in the questions each treats. One way to distinguish between the two is in terms of their audiences: A thinker who is speaking to a religious community and can presuppose the authorities recognized by that community is doing theology. The same thinker addressing a broader community may be doing philosophy.`
    },
    

    {
        term: `truth`,
        def: `Most philosophers have conceived of truth solely as a property of propositions. The most common account of propositional truth is the correspondence theory, which holds that a proposition is true if and only if it corresponds to the way things are. Rival accounts include the coherence theory, which views truth as the property of a proposition that is part of the most coherent system of propositions, and the pragmatic theory, which defines true propositions in terms of their usefulness in making predictions and dealing with reality. Ordinary language and the Bible use the term truth more broadly. Thus we speak of true friendship and truth in a relationship. It is in this sense that Jesus claims, in the Gospels, that his own life is the truth (a claim that Søren Kierkegaard attempted to illuminate through his famous statement that truth is “subjectivity” or “inwardness”— that inner passion that directs a person’s life toward that which is genuine). See also coherentism; pragmatism; subjectivism.`
    },

    {
        term: `knowledge`,
        def: `True belief that is warranted or justified. A person cannot know what is false, but a mere true belief that is the result of luck or guessing does not appear to constitute knowledge either. Most philosophers therefore agree that knowledge requires a true belief that is justified or warranted or that has been acquired through a reliable process, though there is great disagreement as to what it is that warrants or justifies a belief.`
    },


    {
        term: `objectivity`,
        def: `The quality of a fair-minded inquirer concerned about truth. The nature of this quality is, however, controversial. One ideal of objectivity is that of the completely neutral, detached, emotionless, presuppositionless thinker, who occupies what Thomas Nagel has called “the view from nowhere” or sees the world as Baruch Spinoza described it, from a godlike viewpoint, “under the aspect of eternity.” Objectivity in this sense is widely attacked by postmodern thinkers as an impossible and even undesirable ideal. However, objectivity in this sense should be distinguished from the honesty of the person who really cares about truth and is willing to respect contrary evidence. This kind of objectivity seems compatible with recognizing our human finitude and the ways in which our passions and assumptions can function as aids in the search for truth, rather than simply being distorting filters. See also relativism; subjectivism.`
    },

        {
        term: `objective`,
        def: `(of a person or their judgment) not influenced by personal feelings or opinions in considering and representing facts.`
    },

    {
        term: `sola scriptura`,
        def: `(Latin: by Scripture alone) is a Christian theological doctrine which holds that the Christian Scriptures are the sole infallible rule of faith and practice.`
    },
    {
        term: `sola fide`,
        def: `(Latin: by faith alone), also known as justification by faith alone, is a Christian theological doctrine that distinguishes most Protestant denominations from the Catholic Church, the Eastern Orthodox Church, and some parts of the Restoration Movement.`
    },
    {
        term: `extrabiblical`,
        def: `Outside of the Bible`
    },
    {
        term: `beyond the pale`,
        def: `From pale ‎(“jurisdiction of an authority, territory under an authority's jurisdiction”), suggesting that anything outside the authority's jurisdiction was uncivilized. The phrase was in use by the mid-17th century, and may be a reference to the general sense of boundary, but is often understood to refer specifically to the English Pale in Ireland.`
    },
    {
        term: `evidential apologetics`,
        def: `Evidential Apologetics is that style of Christian defense that stresses the miracles found in the Bible particularly Christ's resurrection as an evidence for the existence of God and the validity of Christ and His words.  It also uses historical evidences to support the veracity of the biblical account(s).  In this, it is very similar to Classical Apologetics, which stresses reason in its approach to evidences.  Basically, evidential apologetics stresses evidence such as miracles, fulfilled prophecies, etc., and uses reason to support them.`
    },
    {
        term: `Jehovah’s Witness`,
        def: `Jehovah's Witnesses is a millenarian restorationist Christian denomination with nontrinitarian beliefs distinct from mainstream Christianity.`
    },

    {
        term: `subjective`,
        def: `based on or influenced by personal feelings, tastes, or opinions.`
    },
    {
        term: `hedonism`,
        def: `The ethical theory that identifies the good with happiness and understands happiness as the presence of pleasure and the absence of pain. Critics of hedonism argue that the hedonist confuses what is a byproduct and concomitant of the good with the good itself; we do not seek pleasure primarily, but we seek good things (love and friendship, for example) that give us pleasure. If we did not value those things intrinsically, they would not in fact give us pleasure at all. See also egoism.`
    },

    {
        term: `egoism`,
        def: `The theory that humans do or should seek only their own individual happiness. Psychological egoism holds that as a matter of fact people seek always and only their own good. Moral egoism holds that it is right or good that humans should act in this way. Ayn Rand’s novels provide a dramatic illustration and defense of egoism. Traditional Christian teaching, in contrast, has condemned universal egoism as a form of sinful selfishness, to be distinguished from a proper regard for one’s self and its needs. See also hedonism.`
    },

        {
        term: `narcissists`,
        def: `a person who has an excessive interest in or admiration of themselves.`
    },

    {
        term: `Darwinism`,
        def: `the theory of the development of biological life originated by Charles Darwin which holds that the mechanism of evolutionary development is made up of chance variations and natural selection involving competition for survival and reproduction`
    },

    {
        term: `Determinism`,
        def: `the view that all natural events including human choices and actions are the product of past states of affairs in accordance with causal necessity`
    },

    {
        term: `ethics`,
        def: `branch of philosophy that concerns itself with questions of right and wrong, good and evil, virtues and vices`
    },

    {
        term: `problem of evil`,
        def: `difficulty posed by existence of evil in a world created by a God who is both completely good and all-powerful`
    },

    {
        term: `fidelism`,
        def: `the view that faith takes precedence over reason`
    },

    {
        term: `Gnosticism`,
        def: `a religious movement popular in the second and third centuries of the Christian church that emphasized a higher level of spiritual knowledge that is special and or secret`
    },

    {
        term: `hermeneutics`,
        def: `the science of interpreting scripture`
    },

    {
        term: `modernism`,
        def: `A movement to modify Christianity to make it relevant and acceptable to modern peoples, emphasizing both science and social and political teachings. Modernism is closely linked with theological liberalism, but while liberalism is more exclusively tied to Protestantism, modernism enjoyed favor among Catholic intellectuals at the end of the nineteenth century and beginning of the twentieth.`
    },

    {
        term: `Liberalism`,
        def: `Movement in Protestant theology since the nineteenth century that is dominated by the goal of modifying Christianity so as to make it consistent with modern culture and science. Liberalism rejects the traditional view of Scripture as an authoritative propositional revelation from God in favor of a view that sees revelation as a record of the evolving religious experiences of humankind. It sees Jesus more as ethical teacher and model rather than as divine atoner and redeemer.`
    },

    {
        term: `Islam`,
        def: `monotheistic religion that originated in what today is Saudi Arabia in the 7th century as a result of the teachings of Muhammad, recorded in the Qur'an`
    },

    {
        term: `hinduism`,
        def: `the dominant religious perspective of India, which teaches reincarnation or transmigration of the soul, and the goal of the religious devotee is seen as the deliverance of the soul from the cycle of reincarnation`
    },

    {
        term: `morality`,
        def: `the system of rules that ideally should govern human behavior with respect to right and wrong, good and evil`
    },

        {
        term: `mysticism`,
        def: `the view that it is possible to gain experiential knowledge of that which transcends the limits of human reason and sensory perception`
    },

        {
        term: `natural law`,
        def: `moral principles supposed to govern human behavior that can be recognized independently of special revelation`
    },

    {
        term: `creationism`,
        def: `the belief that the universe and living organisms originate from specific acts of divine creation, as in the biblical account, rather than by natural processes such as evolution.`
    },

    {
        term: `atheism`,
        def: `the philosophical position that denies the reality of the God of theism or other divine beings`
    },

    {
        term: `agnosticism`,
        def: `the position that neither affirms the belief in God nor denies the existence of God, but instead suspends judgement`
    },

    {
        term: `ad hominem`,
        def: `literally means, "to the man" This approach is an attack on a person's personal character rather than a response to that person's arguments`
    },

    {
        term: `anosognosia`,
        def: `is viewed as a deficit of self-awareness, a condition in which a person who suffers certain disability seems unaware of the existence of his or her disability. The word comes from the Greek words nosos, "disease", and gnosis, knowledge, with an- or a- as a negative prefix`
    },

    {
        term: `worldview`,
        def: `A collection of answers to life's ultimate questions interpreted through a 
narrative that allows me to understand the world and my place in it.`
    },

    {
        term: `apologetics`,
        def: `(1) From the Greek apologia or apologeomai meaning answer or defense—
not "excuse" as popularly conceived. (2) A reasoned presentation of the essential 
propositions of the Christian faith designed to answer objections, persuade unbelievers, 
and reassure believers`
    },

    {
        term: `presupposition`,
        def: `(1) A belief held prior to investigation. (2) An assumption or criterion 
that precedes examination of a subject that conditions one's interpretation of that subject.
Example: A Christian presupposes that miracles occur before he examines the historical 
evidence for Christ's resurrection. An atheist presupposes that miracles do not occur 
before he examines the historical evidence for Christ's resurrection.`
    },

    {
        term: `a posteriori`,
        def: `(1) knowledge gained from or after experience. (2) knowledge gained 
through sensory impression. (3) proceeding by induction from effect to cause`
    },

    {
        term: `A priori`,
        def: `(1) a self-evident truth that does not need to be proved. (2) knowledge that is 
independent of sensory impression. (3) proceeding by deduction from cause to effect. (4) 
a presupposition.`
    },

    {
        term: `Natural Revelation`,
        def: `God's disclosure of Himself through non-supernatural means such 
as creation, history, and the conscience of man.`
    },

    {
        term: `Metanarrative`,
        def: `(1) A story used to explain another story or stories. (2) A worldview 
constructed as a narrative that answers ultimate questions. In current usage, a 
metanarrative functions as an all-encompassing philosophy of history including the story 
of man's origin and his destiny`
    },

    {
        term: `Epistemology`,
        def: `The branch of philosophy that inquires into the nature of knowledge, its 
origin, foundation, and validity`
    },

    {
        term: `Rationalism`,
        def: `(1) That form of knowledge acquisition which relies on intuition, deduction 
and the laws for logic. (2) a priori knowledge`
    },

    {
        term: `Empiricism`,
        def: `(1) That form of knowledge acquisition which relies on experience, 
induction, and scientific experiment. (3) a posteriori knowledge.`
    },

    {
        term: `Ontology`,
        def: `A subcategory of metaphysics that inquires into the nature of real and unreal. 
(2) Inquiry into the essential nature of things. Example: Are such things as dreams, 
spirits, & ethical persuasions real?`
    },

    {
        term: `Cosmology`,
        def: `A subcategory of metaphysics that investigates the origin and process of 
existing things. (2) The study of cause and effect relationships with a view to 
determining ultimate causes`
    },

    {
        term: `Contingency`,
        def: `In philosophical usage, an event that may or may not occur; an event 
whose occurrence is dependent on factors outside itself.`
    },

    {
        term: `Teleology`,
        def: `(1) from the Greek tele-, telos meaning end, goal, or purpose. (2) the belief 
that nature in its totality and in its individual parts is purposeful, designed to accomplish 
some end. (3) The study of the evidence of design in nature.`
    },

    {
        term: `Classical Apologetics`,
        def: `An approach to apologetics that employs a two-step case for 
Christianity beginning with arguments from natural revelation (cosmological, design, 
ontological) to establish theism and secondarily employing arguments from historical 
evidence that Christianity is the correct version of theism. This approach is called 
"classical" because it is the assumed method of early and medieval Christian thinkers`
    },

    {
        term: `Evidentialism`,
        def: `An approach to apologetics that builds an inductive (a posteriori) case 
for the truth claims of Christianity by using philosophical, historical, archeological, and 
scientific evidences. Evidentialists compile evidence with the goal of persuading people 
of the truth of Christianity. Evidentialism is close to Classical Apologetics, but differs in 
its one-step case for Christianity by directly employing miracles as evidence. (Classical 
apologists assert that God`
    },

    {
        term: `Presppositionalism`,
        def: `An approach to apologetics that begins with the a priori claim that 
all men intuitively know that God exists even before they are presented with evidence, 
and due to the noetic effects of sin, there is insufficient common ground shared by 
believers and unbelievers to have a neutral evidence-based discussion of Christianity. 
Presuppositionalists argue that the apologist must simply assume the existence of the 
biblical God as the only legitimate ground for all thinking. Presuppositionalism does not 
reject the use of evidence in apologetic`
    },

    {
        term: `Reformed Epistemology`,
        def: `An approach to apologetics that rejects the Enlightenment 
criteria that all beliefs must be evidentially verifiable and maintains that some beliefs are 
warranted apart from evidence. God's existence is a properly basic notion that needs no 
evidential validation.`
    },

    {
        term: `Singularity`,
        def: `The (so-called) originating point of the Big Bang, when matter, space and 
time were infinitely condensed into a single point.`
    },

    {
        term: `Metaphysics`,
        def: `The branch of philosophy that inquires into the nature of existence or 
being. (2) The study of existing things with a view to categorizing all phenomena of 
human experience. In philosophical literature, metaphysics divides into two branches, 
cosmology and ontology.`
    },

    {
        term: `Naturalism`,
        def: `(1) The physical universe of matter and energy is all that exists; nature 
creates and sustains itself. (2) A rejection of all supernaturalism. (3) Materialism, or the 
doctrine that noting exists apart from material phenomena. (4) Atheism. The Naturalist 
worldview has a long history, dating at least to the Greek philosopher Epicurus and the 
Roman poet Lucretius.`
    },

    {
        term: `Pantheism`,
        def: `The belief that god and the universe are identical. (2) The belief that god has 
no personal attributes, but is identical with the material world`
    },

    {
        term: `Positivism`,
        def: `A twentieth-century school of thought that claimed only empirically verified 
statements could be certifiably true`
    },

    {
        term: `Falsifiability criterion`,
        def: `The central doctrine of philosopher of science Karl Popper 
which states that true scientific hypotheses must be formulated in such a way that they 
are vulnerable to being overturned by negative evidence.`
    },

    {
        term: `Scientific Paradigms`,
        def: `The central doctrine of philosopher of science Thomas Kuhn 
which states that the formation of models is intrinsic to scientific inquiry. Science does 
not build by adding new information to old. Rather science changes as one model is 
replaced by another as a comprehensive explanatory filter for understanding a particular 
field of inquiry.`
    },

    {
        term: `Moral Evil`,
        def: `(1) A categorical term referring to unjust human acts. (2) The belief that 
humans act in ethically unacceptable ways; that they are capable of wicked deeds that 
demand just punishment.`
    },

    {
        term: `Natural Evil`,
        def: `A categorical term referring to the destructive forces of nature such as 
floods, volcanoes, hurricanes, disease, genetic defects, etc.`
    },

    {
        term: `Theodicy	
`,
        def: `A logical, philosophical justification of God's actions with a view to 
defending God's Person and character. Example: A theodicy explains why God permits 
evil in His creation.`
    },

    {
        term: `Defense`,
        def: `An analysis of axioms of Christian theology with a view to defending Scriptural 
propositions as logically consistent. Example: A defense demonstrates that the 
simultaneous existence of God and evil are logically compatible`
    },

    {
        term: `Enlightenment`,
        def: `Eighteenth-century intellectual movement that emphasized the autonomy of human reason and questioned the role of traditional authorities. Immanuel Kant and David Hume were among the most important thinkers of the Enlightenment, though it included such individuals as Thomas Jefferson as well. Kant’s motto “Dare to use your own reason” expresses the attitude of the Enlightenment well. Kant and Hume both developed influential critiques of the rational grounds of religious belief, though Kant himself thought that in denying religious knowledge he was making room for rational religious faith.`
    },

    {
        term: `Deism`,
        def: `A monotheistic anti-Trinitarian view of God that attributes to Him the attributes 
associated with transcendence, but denies His immanent involvement in the world 
through supernatural activity subsequent to the original act of creation`
    },

    {
        term: `Materialism`,
        def: `The doctrine that nothing more than material or physical entities exist. (2) 
a synonym of naturalism—a rejection of supernaturalism`
    },

    {
        term: `Nihilism`,
        def: `(1) nothingness; (2) a rejection of meaning, value, and moral norms in human 
history.`
    },

    {
        term: `Existentialism`,
        def: `an attempt to transcend atheistic nihilism by postulating that individual 
persons create their own meaning, values, and purpose in life without reference to a 
creator.`
    },

    {
        term: `Postmodernism`,
        def: `(1) a rejection of worldviews (or metanarratives) and an endorsement 
of a plurality of religious, cultural, historical, and ethical perspectives. 

(2) a rejection of 
certifiable propositional truths. 

(3) Term used to designate a loosely connected set of trends and perspectives in various cultural and academic fields that have in common only a perceived opposition to modernity. In philosophy, postmodernism is characterized by a suspicion of “metanarratives,” an emphasis on the uncertain character of human knowing and a tendency to analyze various intellectual claims, including Enlightenment claims about the universal character of reason and science, in a suspicious way as a mask for oppression and domination. The term postmodernism is often used syononymously with poststructuralism to indicate the ways in which postmodernist thinkers both reacted against and were influenced by structuralism.`
    },

    {
        term: `Structuralism`,
        def: `An interdisciplinary movement with its origins in linguistics and French philosophy that emphasizes the way in which the meanings of symbols are determined by their relationships to other symbols in a system. Structuralists see language and other human activities (including religious rituals) as reflecting deep, universal structures often expressed in myth. See also postmodernism; sign.`
    },

    {
        term: `Polytheism`,
        def: `Belief in, and worship of more than one god`
    },

    {
        term: `Henotheism`,
        def: `The exclusive worship of one god, while not rejecting the existence of 
other gods.`
    },

    {
        term: `Monotheism`,
        def: `Belief in, and worship of one god`
    },

    {
        term: `Monism`,
        def: `The belief that one impersonal element constitutes all reality`
    },

    {
        term: `Exclusivism`,
        def: `A philosophical stance on religion that claims there is one true religion and 
one valid path to God among numerous false alternatives.`
    },

    {
        term: `Pluralism`,
        def: `A philosophical stance on religion that claims all religions are inherently 
equal and inherently true coupled with a corresponding belief that religious exclusivism 
is necessarily false.`
    },

    {
        term: `Miracle`,
        def: `An event or effect in the physical world that defies all human or natural agency 
and whose cause must be supernatural in origin.`
    },

    {
        term: `Law of Nature`,
        def: `A description of the normal workings of the physical world.`
    },

    {
        term: `Demythologization`,
        def: `A campaign inaugurated by Rudolf Bultmann and other critics to 
strip the Bible of its mythical or supernatural elements, thus discovering the "kernel within
the husk" of truth that could still be believed.`
    }, 
    
    {
        term: `burden of proof`,
        def: `legal term that indicates which party in a controversy has the responsibility of offering support for its position`
    },

    {
        term: `David Hume`,
        def: `Scottish philosopher who was one of the preeminent thinkers of the Enlightenment. Hume was an empiricist who claimed that all knowledge of “matters of fact” (any knowledge not grounded in the meanings of terms) is based on sense experience. (See empiricism.) Hume developed powerful arguments that our knowledge of cause and effect and reliance on inductive reasoning are not in themselves rationally justifiable but are based on “custom.” In philosophy of religion, Hume is famous, first, for his argument that belief in miracles is irrational because the evidence of past experience will always outweigh the testimony in favor of miracles, and second, for a powerful critique of natural theology in his Dialogues Concerning Natural Religion.`
    }

];

export default terms;