import 'package:flutter/material.dart';
import 'package:liquid_swipe/liquid_swipe.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final colors=[Colors.orange,Colors.cyanAccent];
 final controlller=LiquidController();
 List<Color> color=[
   Colors.red,
   Colors.blue,
   Colors.green,
 ];
 int index1=0;
  Map<int, Color> colorCodes = {
    50: Color.fromRGBO(147, 205, 72, .1),
    100: Color.fromRGBO(147, 205, 72, .2),
    200: Color.fromRGBO(147, 205, 72, .3),
    300: Color.fromRGBO(147, 205, 72, .4),
    400: Color.fromRGBO(147, 205, 72, .5),
    500: Color.fromRGBO(147, 205, 72, .6),
    600: Color.fromRGBO(147, 205, 72, .7),
    700: Color.fromRGBO(147, 205, 72, .8),
    800: Color.fromRGBO(147, 205, 72, .9),
    900: Color.fromRGBO(147, 205, 72, 1),
  };
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
     body:Container(color: Colors.grey,
        child: Stack(
         children: [
     LiquidSwipe(liquidController: controlller,enableSideReveal: true,
        slideIconWidget: Icon(Icons.arrow_back_ios_new_rounded),onPageChangeCallback: (index){
setState((){});
         },waveType:WaveType.liquidReveal,pages: [
           Container(
           decoration: BoxDecoration(image: DecorationImage(image: AssetImage("assets/1.jpg"),fit:BoxFit.fill),
           )),
           Container(
               decoration: BoxDecoration(image: DecorationImage(image: AssetImage("assets/2.jpg"),fit:BoxFit.fill),
    ),),
           Container(
               decoration: BoxDecoration(image: DecorationImage(image: AssetImage("assets/3.jpg"),fit:BoxFit.fill),)),
           Container(
               decoration: BoxDecoration(image: DecorationImage(image: AssetImage("assets/4.jpg"),fit:BoxFit.fill),)),

     ]),Positioned(
         bottom: 20,
left: 110,

child: AnimatedSmoothIndicator(

curve: Curves.bounceInOut,
  activeIndex: controlller.currentPage,
  count: 4,
  onDotClicked:(index){
  
    controlller.animateToPage(page: index);
  },effect:CustomizableEffect(
  activeDotDecoration: DotDecoration(
    height: 30,
    width: 20,
    color: Colors.blueAccent,
    verticalOffset: 3,
      rotationAngle: 90,borderRadius: BorderRadius.all(Radius.circular(20))
  ),
  dotDecoration: DotDecoration(
      height: 30,
      width: 20,borderRadius: BorderRadius.all(Radius.circular(20)),
      color:Colors.grey,
      verticalOffset: 3,
      rotationAngle: -90

  ),
  spacing: 15
),
)
       )
       ]),)
    );
  }
}
