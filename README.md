# useContext

- 자식 컴포넌트 depth가 많은 경우 최상위 컴포넌트에서 최하위 자식 컴포넌트까지 값을 일일이 전달하는 것이 비효율적
- 이처럼 prop을 통해서 중간단계의 컴포넌트들이 계속 값을 전달하는 상황 = Prop Drilling
- 이 때, Context API를 활용한 useContext hook을 활용하면 컴포넌트 외부에 전역으로 특정 값을 관리하며 자식 컴포넌트에게 바로 값 전달 가능
- createContext : context(전역으로 관리하는 객체) 생성 후 Provider를 통해 전역으로 특정 값을 전달 가능
- useContext : createContext로 생성된 값을 권하는 자식 컴포넌트에서 자유롭게 호출 가능
