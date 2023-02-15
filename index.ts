import { question1, question2, question3 } from './src/rover';
import { clear, print } from './ui/console';


  async function runRover(): Promise<void> {
    clear(false);
    print('--------------------------');
	print('| Welcome to Mars Planet! |');
	print('--------------------------');
    //   console.log("Welcome to Mars!")
    await question1();
    await question2();
    await question3();
  }
  
  runRover();