import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Link,
  Box,
  Flex,
  Heading,
  ListItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  List,
} from "@chakra-ui/react";

export const VeillesContent = () => {
  return (
    <Box>
      <Heading fontSize="3rem" mb={4}>
        Mes veilles
      </Heading>
      <Tabs isFitted variant="soft-rounded">
        <TabList>
          <Tab>Veille juridique</Tab>
          <Tab>Veille technologique</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Juridique />
          </TabPanel>
          <TabPanel>
            <Technologique />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const Juridique = () => {
  return (
    <Box>
      <Sujet>
        Contrat de fourniture et de production de service informatique.
      </Sujet>
      <Flex mt={10} flexDirection="column" alignItems="center">
        <Heading fontSize="2rem" mb={4}>
          Les contrats informatiques
        </Heading>
        <Text textAlign="justify">
          La veille juridique est une veille spécialisée dans le domaine du
          droit. Elle sert à analyser et à suivre les nouvelles réglementations
          ainsi que celles qui sont en préparation (au niveau d’un territoire
          national). Dans le cadre du BTS SIO, nous devons nous tenir informés
          sur les contrats de production et de fournitures de services
          informatiques.
        </Text>
        <Stack spacing={4} alignItems="center">
          <Text textAlign="justify">
            Le contrat de prestation de service informatique est un type de
            contrat de prestation de service. Grâce à la rédaction de ce
            contrat, une entreprise ou une personne s’engage à effectuer une
            prestation dans le domaine de l’informatique ou du numérique. On
            parle parfois de contrats de production et de fournitures de
            services informatiques. La définition du contrat de prestation de
            service informatique comprend de nombreux types de services selon
            les situations et les entreprises concernées. Il peut s’agir d’un
            service d’installation, de développement, de maintenance ou
            d’assistance sur un système informatique.
          </Text>
          <Heading size="lg">Les différents type de contrats</Heading>
          <Heading size="md">Le contrat d’outsourcing</Heading>
          <Text>
            Il s’agit en réalité d’un contrat d’externalisation informatique.
            Dans ces contrats, vous confiez la charge de l’ensemble d’un service
            à un prestataire. Il s’agit d’une prestation de service complète qui
            s’accompagne d’un engagement particulièrement élaboré. Ce contrat
            lie souvent les parties de façon forte et durable.
          </Text>
          <Heading size="md">Le contrat ASP</Heading>
          <Text textAlign="justify">
            Le contrat Application Service Provider est également nommé contrat
            FAH (Fournisseur d’application hébergée) . Il n’offre au client
            qu’un droit d’accès et d’utilisation des logiciels hébergés par le
            prestataire, qui dispose lui-même d’un droit d’usage concédé par un
            éditeur. Ce contrat est donc bien différent d’un contrat de vente de
            logiciels informatiques. Vous n’avez qu’un accès à distance au
            système informatique notamment grâce à des applications
            informatiques.
          </Text>
          <Heading size="md">Le contrat SAAS</Heading>
          <Text textAlign="justify">
            Le contrat Software As A Service externalise lui aussi l’ensemble de
            la gestion de votre système informatique. Bien que la prestation
            soit réalisée à distance, elle est personnalisée et adaptée aux
            besoins de votre société. Dans ce type de contrats, le prestataire
            est considéré d’office comme propriétaire de ses développements de
            logiciel. Toutefois, toute personnalisation ou adaptation au client
            entraîne une copropriété partagée entre le prestataire et le client
            sur le logiciel.
          </Text>
          <Heading size="md">Le contrat de maintenance informatique</Heading>
          <Text textAlign="justify">
            Dans un tel contrat, le prestataire s’engage à entretenir le bon
            fonctionnement des systèmes, des équipements et des machines
            informatiques du client. Il peut être question de mesures a priori
            comme la révision des systèmes, leur nettoyage ou leur contrôle
            régulier pour anticiper tout dysfonctionnement ou a posteriori comme
            des réparations ou le remplacement de certaines pièces.
          </Text>
          <Heading size="md">Le contrat de développement d’un logiciel</Heading>
          <Text textAlign="justify">
            Un contrat de développement d’un logiciel informatique engage le
            prestataire à fournir un logiciel conforme aux attentes du client.
            Le prestataire peut alors céder au client un droit d’usage sur le
            logiciel ou les droits de propriété intellectuelle complets.
          </Text>
          <Heading size="lg">Les obligations</Heading>
          <Heading size="md">Les obligations du client</Heading>
          <Text textAlign="justify">
            Le client s’engage à payer au prestataire le prix convenu dans les
            délais précisés par le contrat.Il a également l’obligation de lui
            permettre d’exécuter correctement sa prestation sous peine d’être
            condamné pour mauvaise foi. Par ailleurs, si votre contrat a un
            montant égal ou supérieur à 5 000 euros hors taxes, une obligation
            de vigilance naît.Elle consiste en l’obligation de vérification de
            la déclaration et du paiement des cotisations sociales par votre
            prestataire.Cette vérification doit s’effectuer dès la signature de
            votre contrat puis tous les 6 mois jusqu’à la fin du contrat.
          </Text>
          <Heading size="md">Les obligations du prestataire</Heading>
          <Text textAlign="justify">
            En l’échange de la rémunération, le prestataire est tenu de
            respecter certaines obligations. Outre le respect des mentions et
            des clauses contenues dans le contrat de prestation de service
            informatique, le prestataire doit :
            <UnorderedList>
              <ListItem>
                Renseigner son client. Puisqu’il est l’expert, le prestataire a
                l’obligation de donner toutes les informations nécessaires à la
                bonne compréhension des enjeux de la situation par le client{" "}
              </ListItem>
              <ListItem>
                Conseiller son client. Une fois renseigné, le client doit être
                aidé par le prestataire dans les choix à faire au vu de la
                situation. Le prestataire doit apporter des conseils et un
                regard critique. En effet, le client est souvent novice et a
                besoin de l’expertise du prestataire comme guide pour trouver la
                meilleure option
              </ListItem>
              <ListItem>
                Mettre en garde son client si un risque intervient. Si de
                nouvelles contraintes voire certains dangers apparaissent, le
                prestataire doit mettre en garde le client
              </ListItem>
            </UnorderedList>
          </Text>
          <Heading size="lg">
            Rompre un contrat de prestation de service informatique
          </Heading>
          <Text textAlign="justify">
            La durée du contrat prévue dans la rédaction de celui-ci a une
            importance capitale dans les obligations à respecter dans la rupture
            du contrat de prestation de service informatique.
          </Text>
          <Text>
            <UnorderedList>
              <ListItem>
                Pour une durée déterminée, le contrat prend fin une fois la
                prestation terminée.
              </ListItem>
              <ListItem>
                Pour une durée indéterminée, il est possible à tout moment et
                pour chacune des parties de rompre unilatéralement le contrat.
                Toutefois, si vous souhaitez mettre fin au contrat, vous devez
                respecter un préavis.
              </ListItem>
            </UnorderedList>
          </Text>
          <Text textAlign="justify">
            En cas de rupture brutale d’un contrat de prestation de service
            informatique, définie par la Cour comme une rupture « imprévisible,
            soudaine et violente », chacune des parties peut exiger une
            indemnisation en réparation du préjudice subi.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

const Technologique = () => {
  return (
    <Box>
      <Flex mt={10} flexDirection="column">
        <Heading fontSize="2rem" mb={4}>
          Le ₿itcoin
        </Heading>
        <Text textAlign="justify">
          La veille technologique, élément de la veille stratégique, consiste à
          surveiller les évolutions techniques, les innovations dans un secteur
          d’activité donnée. La veille technologique comprend notamment la
          surveillance, la collecte, le partage et la diffusion d’information
          permettant d’anticiper ou de s’informer sur des changements en matière
          de recherche, développement, brevet, lancement de nouveaux produits,
          matériaux, processus, concepts, innovation de fabrication, etc…. Cela
          a pour but d’évaluer l’impact sur l’environnement et l’organisation.
        </Text>
        <Stack spacing={4} alignItems="center">
          <Heading size="lg">Qu'est-ce que Bitcoin ?</Heading>
          <Text textAlign="justify">
            Bitcoin est la solution dans la recherche d'une nouvelle méthode de
            paiement numérique. Il permet d'échanger de la valeur directement
            d'une personne à une autre, sans avoir besoin d'un tiers. C'est ce
            qu'on appelle le peer-to-peer.
          </Text>
          <Heading size="md">À propos de blockchain</Heading>
          <Text textAlign="justify">
            La technologie derrière Bitcoin s'appelle la technologie de la
            chaîne de blocs. Cette technologie permet de transférer de la valeur
            numériquement. Une chaîne de blocs est une chaîne qui contient des
            données de transaction par ordre chronologique, qui ne peuvent pas
            être modifiées par la suite. La chaîne de blocs est une sorte de
            base de données. Le pouvoir de la chaîne de blocs Bitcoin réside
            dans sa décentralisation. Cela signifie qu'il y a des milliers
            d'ordinateurs dans le monde entier qui possèdent une copie de
            l'historique complet des transactions bitcoin.
          </Text>
          <Heading size="md">Que pouvez-vous faire avec bitcoin ?</Heading>
          <Text textAlign="justify">
            <ListItem>
              Méthode de paiement : Bitcoin a été développé en tant que monnaie
              virtuelle rapide. Avec bitcoin, vous pouvez transférer de la
              valeur directement sans avoir besoin d'un tiers de confiance. Il y
              a déjà un grand nombre de marchands et de détaillants qui
              acceptent le bitcoin comme méthode de paiement partout dans le
              monde.
            </ListItem>
            <ListItem>
              Transactions rapides : Utiliser une banque pour transférer de
              l'argent (internationalement) se traduit souvent par des
              commissions élevées, une attente de plusieurs jours avant que le
              paiement ne soit traité, et est sujet à d'autres retards pendant
              les week-ends et les jours fériés. Si vous utilisez bitcoin pour
              une transaction de ce type, cela ne prendrait que quelques minutes
              et coûterait considérablement moins cher.
            </ListItem>
            <ListItem>
              Investissement : Beaucoup de gens croient que le bitcoin est la
              monnaie de l'avenir. Le bitcoin existe en quantité fixe, de sorte
              que lorsque la demande de bitcoin augmente, cela crée de la
              rareté. Il en résulte une augmentation du prix et, en retour, cela
              crée beaucoup de spéculation sur le prix du bitcoin. Aimeriez-vous
              investir dans le bitcoin ? Ne faites cela qu'avec un montant que
              vous pouvez vous permettre de perdre, de cette façon vous limitez
              les risques.
            </ListItem>
          </Text>
          <Text textAlign="justify">
            Le Bitcoin est conçu comme un système de paiement numérique qui
            autorise les paiements peer-to-peer. Les transactions sont vérifiées
            et exécutées par un réseau informatique décentralisé. Ce réseau se
            compose de mineurs et de nœuds. Vous pouvez obtenir des bitcoins de
            plusieurs façons : en les acceptant comme paiement pour vos biens ou
            services, en les minant, ou en les recevant comme (partie de)
            salaire. Mais la plupart des utilisateurs choisissent tout
            simplement de les acheter, chez BTC Direct par exemple.
          </Text>
        </Stack>
        <Box my={5}>
          <Heading fontSize="2rem" mb={4}>
            Articles
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.bbc.com/news/business-55939972"
                isExternal
              >
                Elon Musk's Tesla buys $1.5bn of Bitcoin causing currency to
                spike <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://cryptonaute.fr/paypal-ajoute-les-cryptomonnaies-a-ses-comptes-de-paiement/"
                isExternal
              >
                PayPal ajoute les cryptomonnaies à ses comptes de paiement
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://cryptoactu.com/rapport-exclusif-de-goxdox-les-causes-de-la-chute-du-bitcoin-en-2018-expliquees/"
                isExternal
              >
                La chute du Bitcoin en 2018 expliquée
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/watch?v=qOVAbKKSH10&ab_channel=CodingTech"
                isExternal
              >
                Blockchain Technology Explained
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.reddit.com/r/Bitcoin/" isExternal>
                Reddit/Bitcoin - The Currency of the Internet
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

const Sujet = ({ children }) => (
  <Box>
    <Heading fontSize="3rem" mb={4}>
      Sujet
    </Heading>
    <Text>{children}</Text>
  </Box>
);
