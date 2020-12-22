### 어니언스 사의 코딩테스트 결과물을 담은 레파지토리입니다. 어니언스 관계자가 아닐 시, 본 소스코드의 사용과 배포를 금합니다.

## 실행방법


#### 1. `yarn install`
#### 2. `yarn build`
#### 3. `yarn start`


* 구글 크롬 100% 화면 비율에서 가장 최적화된 UI를 확인할 수 있습니다.
* `"jsx": "react"`를 기준으로 작업했기 때문에, tsconfig.json 파일에서 `"jsx": "react-jsx"`가 확인된다면 `-jsx`를 삭제하고 프로젝트를 확인하여 주시길 바랍니다.
* `yarn start` 후 `Property 'drugsDataReducer' does not exist on type 'DefaultRootState'` 문구가 확인된다면 아래의 방법으로 수정 후 확인 부탁드립니다.

    * InputPageContainer.tsx 파일에서 useSelector에 커서를 두고 command를 누른채 클릭한다. 이동되는 페이지에서 `TState = DefaultRootState` 를 `TState = any`로 수정한다.
(아래는 해당 방법으로 수정한 코드)
```
export function useSelector<TState = any, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected;
```




